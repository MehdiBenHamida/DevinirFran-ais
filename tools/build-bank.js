#!/usr/bin/env node
/**
 * Génère data/questions.js à partir de data/questions.json.
 * Ce wrapper permet d'ouvrir index.html directement (protocole file://),
 * sans serveur local, car fetch() y est bloqué par le navigateur.
 *
 * Usage : npm run bank
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'data', 'questions.json');
const out = path.join(root, 'data', 'questions.js');

const bank = JSON.parse(fs.readFileSync(src, 'utf8'));

const themes = new Set(bank.themes.map((t) => t.id));
bank.questions.forEach((q) => {
  if (!themes.has(q.theme)) throw new Error(`${q.id} : thème inconnu « ${q.theme} »`);
  if (!Array.isArray(q.choix) || q.choix.length !== 4) throw new Error(`${q.id} : 4 choix attendus`);
  if (!(q.reponse >= 0 && q.reponse < 4)) throw new Error(`${q.id} : index de réponse invalide`);
  if (!q.explication) throw new Error(`${q.id} : explication manquante`);
});

const banner = '/* Fichier généré automatiquement depuis data/questions.json — ne pas éditer.\n' +
  '   Régénérer avec : npm run bank */\n';

fs.writeFileSync(out, banner + 'window.BANQUE_QUESTIONS = ' + JSON.stringify(bank, null, 2) + ';\n', 'utf8');

console.log(`✔ ${path.relative(root, out)} généré — ${bank.questions.length} questions, ${bank.themes.length} thèmes.`);
