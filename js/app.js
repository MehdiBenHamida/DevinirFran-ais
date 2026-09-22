/* =========================================================
   Devenir Français — moteur d'examen QCM
   ========================================================= */
(function () {
  'use strict';

  var DATA_URL = 'data/questions.json';
  var DIFFS = ['facile', 'moyen', 'difficile'];
  var DIFF_LABEL = { facile: 'Facile', moyen: 'Moyen', difficile: 'Difficile' };
  var LETTERS = ['A', 'B', 'C', 'D'];

  var bank = null;          // { themes, questions }
  var themeById = {};
  var state = null;         // examen en cours
  var tickHandle = null;

  var el = {};
  ['screen-home', 'screen-quiz', 'screen-result', 'btn-start', 'btn-toggle-options', 'options-panel',
    'opt-time', 'opt-count', 'opt-instant', 'bank-stats', 'theme-cards', 'load-error',
    'header-meta', 'chip-progress', 'chip-timer', 'progress-bar', 'progress-fill',
    'q-theme', 'q-diff', 'q-text', 'choices', 'feedback', 'feedback-title', 'feedback-text',
    'btn-next', 'btn-quit', 'timer-ring', 'timer-text', 'ring-fg',
    'score-note', 'score-title', 'score-summary', 'score-meta', 'score-ring', 'score-ring-fg',
    'by-theme', 'review', 'btn-restart', 'btn-review-errors'
  ].forEach(function (id) {
    el[id] = document.getElementById(id);
  });

  /* ---------------- utilitaires ---------------- */

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function show(screen) {
    el['screen-home'].hidden = screen !== 'home';
    el['screen-quiz'].hidden = screen !== 'quiz';
    el['screen-result'].hidden = screen !== 'result';
    var inQuiz = screen === 'quiz';
    el['header-meta'].hidden = !inQuiz;
    el['progress-bar'].hidden = !inQuiz;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function themeName(id) {
    var t = themeById[id];
    return t ? t.emoji + ' ' + t.nom : id;
  }

  /* ---------------- chargement ---------------- */

  function load() {
    // 1) Banque injectée par data/questions.js : fonctionne aussi en file://
    if (window.BANQUE_QUESTIONS) {
      install(window.BANQUE_QUESTIONS);
      return;
    }
    // 2) Repli sur le JSON si l'application est servie en HTTP
    fetch(DATA_URL, { cache: 'no-store' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(install)
      .catch(function (err) {
        console.error(err);
        el['load-error'].hidden = false;
        el['btn-start'].disabled = true;
      });
  }

  function install(json) {
    bank = json;
    themeById = {};
    bank.themes.forEach(function (t) { themeById[t.id] = t; });
    renderHome();
  }

  function renderHome() {
    var counts = {};
    bank.questions.forEach(function (q) {
      counts[q.theme] = (counts[q.theme] || 0) + 1;
    });

    el['bank-stats'].textContent =
      bank.questions.length + ' questions disponibles · ' + bank.themes.length +
      ' thèmes · 3 niveaux de difficulté';

    el['theme-cards'].innerHTML = bank.themes.map(function (t) {
      return '<div class="theme-card"><span class="emoji">' + t.emoji + '</span>' +
        '<div><h3>' + escapeHtml(t.nom) + '</h3>' +
        '<p>' + (counts[t.id] || 0) + ' questions</p></div></div>';
    }).join('');
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ---------------- tirage équilibré ---------------- */

  function buildExam(count) {
    // Regroupe les questions par thème puis par difficulté, dans un ordre aléatoire.
    var pool = {};
    bank.themes.forEach(function (t) {
      pool[t.id] = { facile: [], moyen: [], difficile: [] };
    });
    shuffle(bank.questions).forEach(function (q) {
      if (pool[q.theme] && pool[q.theme][q.difficulte]) pool[q.theme][q.difficulte].push(q);
    });

    var themes = shuffle(bank.themes.map(function (t) { return t.id; }));
    var picked = [];
    var seen = {};

    function take(theme, diff) {
      var list = pool[theme] && pool[theme][diff];
      if (!list || !list.length) return null;
      var q = list.pop();
      if (seen[q.id]) return null;
      seen[q.id] = true;
      return q;
    }

    // Round-robin sur les thèmes, avec rotation des difficultés :
    // équilibre simultanément la répartition par thème et par niveau.
    var slot = 0;
    for (var round = 0; picked.length < count && round < 40; round++) {
      for (var i = 0; i < themes.length && picked.length < count; i++, slot++) {
        var order = [DIFFS[slot % 3], DIFFS[(slot + 1) % 3], DIFFS[(slot + 2) % 3]];
        for (var d = 0; d < order.length; d++) {
          var q = take(themes[i], order[d]);
          if (q) { picked.push(q); break; }
        }
      }
    }

    // Complément si la banque est trop petite sur certains thèmes.
    if (picked.length < count) {
      shuffle(bank.questions).forEach(function (q) {
        if (picked.length < count && !seen[q.id]) { seen[q.id] = true; picked.push(q); }
      });
    }

    return shuffle(picked).map(function (q) {
      var idx = shuffle([0, 1, 2, 3].slice(0, q.choix.length));
      return {
        ref: q,
        choix: idx.map(function (i) { return q.choix[i]; }),
        reponse: idx.indexOf(q.reponse),
        donnee: null,
        tempsEcoule: false
      };
    });
  }

  /* ---------------- examen ---------------- */

  function startExam() {
    var count = parseInt(el['opt-count'].value, 10) || 20;
    var time = parseInt(el['opt-time'].value, 10);
    state = {
      items: buildExam(count),
      index: 0,
      duree: isNaN(time) ? 30 : time,
      instant: el['opt-instant'].checked,
      phase: 'answer',
      restant: 0,
      debut: Date.now()
    };
    show('quiz');
    renderQuestion();
  }

  function current() { return state.items[state.index]; }

  function renderQuestion() {
    var item = current();
    var q = item.ref;

    el['chip-progress'].textContent = 'Question ' + (state.index + 1) + ' / ' + state.items.length;
    el['progress-fill'].style.width = (state.index / state.items.length * 100) + '%';

    el['q-theme'].textContent = themeName(q.theme);
    el['q-diff'].textContent = DIFF_LABEL[q.difficulte] || q.difficulte;
    el['q-diff'].className = 'badge badge-diff ' + q.difficulte;
    el['q-text'].textContent = q.question;

    el['choices'].innerHTML = item.choix.map(function (c, i) {
      return '<li><button class="choice" type="button" data-i="' + i + '">' +
        '<span class="letter">' + LETTERS[i] + '</span>' +
        '<span class="label">' + escapeHtml(c) + '</span></button></li>';
    }).join('');

    el['feedback'].hidden = true;
    el['feedback'].className = 'feedback';
    state.phase = 'answer';
    el['btn-next'].textContent = 'Valider';
    el['btn-next'].disabled = true;

    startTimer();
  }

  function selectChoice(i) {
    if (state.phase !== 'answer') return;
    var item = current();
    item.donnee = i;
    Array.prototype.forEach.call(el['choices'].querySelectorAll('.choice'), function (b) {
      b.classList.toggle('selected', parseInt(b.dataset.i, 10) === i);
    });
    el['btn-next'].disabled = false;
  }

  function lockChoices() {
    Array.prototype.forEach.call(el['choices'].querySelectorAll('.choice'), function (b) {
      b.disabled = true;
    });
  }

  function revealAnswer() {
    var item = current();
    lockChoices();
    Array.prototype.forEach.call(el['choices'].querySelectorAll('.choice'), function (b) {
      var i = parseInt(b.dataset.i, 10);
      b.classList.remove('selected');
      if (i === item.reponse) b.classList.add('correct');
      else if (i === item.donnee) b.classList.add('wrong');
    });

    var ok = item.donnee === item.reponse;
    el['feedback'].hidden = false;
    el['feedback'].className = 'feedback ' + (ok ? 'ok' : 'ko');
    el['feedback-title'].textContent = ok
      ? '✅ Bonne réponse'
      : (item.donnee === null ? '⏱️ Temps écoulé — ' : '❌ Réponse incorrecte — ') +
        'la bonne réponse était ' + LETTERS[item.reponse] + '.';
    el['feedback-text'].textContent = item.ref.explication;
  }

  function onNext() {
    if (state.phase === 'answer') {
      stopTimer();
      if (state.instant) {
        state.phase = 'review';
        revealAnswer();
        el['btn-next'].textContent = state.index === state.items.length - 1
          ? 'Voir ma correction' : 'Question suivante';
        el['btn-next'].disabled = false;
        return;
      }
    }
    goNext();
  }

  function goNext() {
    stopTimer();
    if (state.index < state.items.length - 1) {
      state.index++;
      renderQuestion();
    } else {
      finish();
    }
  }

  function onTimeout() {
    stopTimer();
    var item = current();
    item.tempsEcoule = true;
    if (state.instant) {
      state.phase = 'review';
      revealAnswer();
      el['btn-next'].textContent = state.index === state.items.length - 1
        ? 'Voir ma correction' : 'Question suivante';
      el['btn-next'].disabled = false;
    } else {
      goNext();
    }
  }

  /* ---------------- chronomètre ---------------- */

  var RING_LEN = 2 * Math.PI * 19;

  function startTimer() {
    stopTimer();
    el['ring-fg'].style.strokeDasharray = RING_LEN;

    if (!state.duree) {
      el['timer-text'].textContent = '∞';
      el['chip-timer'].textContent = 'Sans limite';
      el['chip-timer'].classList.remove('is-urgent');
      el['timer-ring'].classList.remove('is-urgent');
      el['ring-fg'].style.strokeDashoffset = 0;
      return;
    }

    state.restant = state.duree;
    paintTimer();
    tickHandle = setInterval(function () {
      state.restant--;
      paintTimer();
      if (state.restant <= 0) onTimeout();
    }, 1000);
  }

  function paintTimer() {
    var r = Math.max(state.restant, 0);
    el['timer-text'].textContent = r;
    el['chip-timer'].textContent = r + ' s';
    el['ring-fg'].style.strokeDashoffset = RING_LEN * (1 - r / state.duree);
    var urgent = r <= 5;
    el['chip-timer'].classList.toggle('is-urgent', urgent);
    el['timer-ring'].classList.toggle('is-urgent', urgent);
  }

  function stopTimer() {
    if (tickHandle) { clearInterval(tickHandle); tickHandle = null; }
  }

  /* ---------------- résultats ---------------- */

  function finish() {
    stopTimer();
    var total = state.items.length;
    var bons = 0, sansReponse = 0;
    var parTheme = {};

    state.items.forEach(function (item) {
      var t = item.ref.theme;
      parTheme[t] = parTheme[t] || { ok: 0, total: 0 };
      parTheme[t].total++;
      if (item.donnee === null) sansReponse++;
      if (item.donnee === item.reponse) { bons++; parTheme[t].ok++; }
    });

    var note = Math.round(bons / total * 20 * 10) / 10;
    el['score-note'].textContent = String(note).replace('.', ',');

    var ringLen = 2 * Math.PI * 52;
    el['score-ring-fg'].style.strokeDasharray = ringLen;
    el['score-ring-fg'].style.strokeDashoffset = ringLen;
    el['score-ring'].className = 'score-ring ' + (note >= 14 ? 'is-good' : note < 10 ? 'is-bad' : '');
    setTimeout(function () {
      el['score-ring-fg'].style.strokeDashoffset = ringLen * (1 - bons / total);
    }, 60);

    el['score-title'].textContent = note >= 16 ? 'Excellent résultat !'
      : note >= 14 ? 'Bon niveau, continuez ainsi'
      : note >= 10 ? 'Niveau correct, à consolider'
      : 'Résultat insuffisant, reprenez les fiches';

    el['score-summary'].textContent = bons + ' bonne' + (bons > 1 ? 's' : '') + ' réponse' +
      (bons > 1 ? 's' : '') + ' sur ' + total + '.' +
      (sansReponse ? ' ' + sansReponse + ' question' + (sansReponse > 1 ? 's' : '') +
        ' sans réponse (temps écoulé).' : '');

    var minutes = Math.max(1, Math.round((Date.now() - state.debut) / 60000));
    el['score-meta'].textContent = 'Durée de l\'examen : environ ' + minutes + ' minute' +
      (minutes > 1 ? 's' : '') + ' · ' +
      (state.duree ? state.duree + ' s par question' : 'sans limite de temps');

    el['by-theme'].innerHTML = '<h3>Résultats par thème</h3>' +
      Object.keys(parTheme).sort(function (a, b) {
        return themeName(a).localeCompare(themeName(b), 'fr');
      }).map(function (t) {
        var s = parTheme[t];
        var pct = Math.round(s.ok / s.total * 100);
        return '<div class="theme-line"><div class="lbl"><span>' + escapeHtml(themeName(t)) +
          '</span><b>' + s.ok + '/' + s.total + '</b></div>' +
          '<div class="bar"><i class="' + (pct < 50 ? 'low' : '') + '" style="width:' + pct + '%"></i></div></div>';
      }).join('');

    el['review'].innerHTML = state.items.map(function (item, n) {
      var ok = item.donnee === item.reponse;
      var cls = ok ? '' : (item.donnee === null ? 'skip' : 'ko');
      var donnee = item.donnee === null
        ? '<div class="ans-bad">Votre réponse : aucune (temps écoulé)</div>'
        : (ok ? '' : '<div class="ans-bad">Votre réponse : ' + LETTERS[item.donnee] + '. ' +
            escapeHtml(item.choix[item.donnee]) + '</div>');

      return '<article class="review-item ' + cls + '" data-ok="' + ok + '">' +
        '<div class="review-head"><span class="badge badge-theme">' + escapeHtml(themeName(item.ref.theme)) +
        '</span><span class="badge badge-diff ' + item.ref.difficulte + '">' +
        (DIFF_LABEL[item.ref.difficulte] || '') + '</span></div>' +
        '<h4>' + (n + 1) + '. ' + escapeHtml(item.ref.question) + '</h4>' +
        '<div class="answers">' + donnee +
        '<div class="ans-good">Bonne réponse : ' + LETTERS[item.reponse] + '. ' +
        escapeHtml(item.choix[item.reponse]) + '</div></div>' +
        '<p class="explication"><b>Explication —</b> ' + escapeHtml(item.ref.explication) + '</p>' +
        '</article>';
    }).join('');

    el['btn-review-errors'].textContent = 'Voir mes erreurs';
    el['btn-review-errors'].dataset.mode = 'all';
    show('result');
  }

  function toggleErrors() {
    var showAll = el['btn-review-errors'].dataset.mode !== 'all';
    el['btn-review-errors'].dataset.mode = showAll ? 'all' : 'errors';
    el['btn-review-errors'].textContent = showAll ? 'Voir mes erreurs' : 'Voir toutes les questions';
    Array.prototype.forEach.call(el['review'].querySelectorAll('.review-item'), function (node) {
      node.hidden = !showAll && node.dataset.ok === 'true';
    });
  }

  /* ---------------- évènements ---------------- */

  el['btn-start'].addEventListener('click', startExam);
  el['btn-restart'].addEventListener('click', function () { show('home'); });
  el['btn-review-errors'].addEventListener('click', toggleErrors);
  el['btn-next'].addEventListener('click', onNext);

  el['btn-toggle-options'].addEventListener('click', function () {
    el['options-panel'].hidden = !el['options-panel'].hidden;
  });

  el['btn-quit'].addEventListener('click', function () {
    if (window.confirm('Abandonner l\'examen en cours ?')) {
      stopTimer();
      show('home');
    }
  });

  el['choices'].addEventListener('click', function (e) {
    var btn = e.target.closest('.choice');
    if (btn && !btn.disabled) selectChoice(parseInt(btn.dataset.i, 10));
  });

  document.addEventListener('keydown', function (e) {
    if (el['screen-quiz'].hidden) return;
    if (e.key >= '1' && e.key <= '4') selectChoice(parseInt(e.key, 10) - 1);
    if (e.key === 'Enter' && !el['btn-next'].disabled) onNext();
  });

  load();
})();
