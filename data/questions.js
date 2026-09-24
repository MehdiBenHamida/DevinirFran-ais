/* Banque de questions – source unique de l'application.
   Chargée directement par index.html (fonctionne aussi en file://).
   Format d'une question : { id, theme, difficulte, question, choix[4], reponse (index 0-3), explication } */
window.BANQUE_QUESTIONS = {
  "meta": {
    "version": "2.0.0",
    "titre": "Banque de questions – Entretien d'assimilation (naturalisation française)",
    "difficultes": [
      "facile",
      "moyen",
      "difficile"
    ],
    "total": 1000
  },
  "themes": [
    {
      "id": "valeurs",
      "nom": "Principes et valeurs de la République",
      "emoji": "🇫🇷"
    },
    {
      "id": "institutions",
      "nom": "Système politique et institutions",
      "emoji": "🏛️"
    },
    {
      "id": "histoire",
      "nom": "Histoire de France",
      "emoji": "📜"
    },
    {
      "id": "geographie",
      "nom": "Géographie",
      "emoji": "🗺️"
    },
    {
      "id": "culture",
      "nom": "Culture et patrimoine",
      "emoji": "🎨"
    },
    {
      "id": "vie-quotidienne",
      "nom": "Vie quotidienne en France",
      "emoji": "👨‍👩‍👧"
    },
    {
      "id": "europe",
      "nom": "France et Union européenne",
      "emoji": "🇪🇺"
    },
    {
      "id": "entretien",
      "nom": "Préparation spécifique à l'entretien",
      "emoji": "🗣️"
    },
    {
      "id": "situations",
      "nom": "Mises en situation et questions pièges",
      "emoji": "⚠️"
    }
  ],
  "questions": [
    {
      "id": "val-001",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Quelle est la devise de la République française ?",
      "choix": [
        "Liberté, Égalité, Fraternité",
        "Travail, Famille, Patrie",
        "Unité, Justice, Liberté",
        "Paix, Progrès, Solidarité"
      ],
      "reponse": 0,
      "explication": "La devise « Liberté, Égalité, Fraternité » est héritée de la Révolution française et figure à l'article 2 de la Constitution de 1958, ainsi que sur les frontons des mairies et des écoles."
    },
    {
      "id": "val-002",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Quelle est la date de la fête nationale française ?",
      "choix": [
        "Le 8 mai",
        "Le 14 juillet",
        "Le 11 novembre",
        "Le 1er mai"
      ],
      "reponse": 1,
      "explication": "Le 14 juillet est la fête nationale depuis 1880. Elle commémore la prise de la Bastille (14 juillet 1789) et la Fête de la Fédération (14 juillet 1790), symbole de l'unité de la Nation."
    },
    {
      "id": "val-003",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Que représente Marianne ?",
      "choix": [
        "Une reine de France",
        "Une sainte catholique",
        "L'allégorie de la République française",
        "La première femme présidente"
      ],
      "reponse": 2,
      "explication": "Marianne est l'allégorie (représentation symbolique) de la République française. Coiffée du bonnet phrygien, elle incarne la liberté et figure dans les mairies et sur les timbres."
    },
    {
      "id": "val-004",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Que signifie la laïcité en France ?",
      "choix": [
        "L'interdiction de toutes les religions",
        "L'obligation d'être athée",
        "La neutralité de l'État et la liberté de croire ou de ne pas croire",
        "La reconnaissance d'une religion officielle"
      ],
      "reponse": 2,
      "explication": "La laïcité garantit la neutralité de l'État vis-à-vis des religions, la liberté de conscience et le libre exercice des cultes. Elle n'oblige personne à croire ni à ne pas croire."
    },
    {
      "id": "val-005",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "En quelle année a été votée la loi de séparation des Églises et de l'État ?",
      "choix": [
        "1789",
        "1848",
        "1905",
        "1958"
      ],
      "reponse": 2,
      "explication": "La loi du 9 décembre 1905 pose le principe de séparation des Églises et de l'État : la République ne reconnaît, ne salarie ni ne subventionne aucun culte."
    },
    {
      "id": "val-006",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Qui a composé La Marseillaise ?",
      "choix": [
        "Rouget de Lisle",
        "Victor Hugo",
        "Hector Berlioz",
        "Jean-Jacques Rousseau"
      ],
      "reponse": 0,
      "explication": "Écrite par Claude-Joseph Rouget de Lisle à Strasbourg en 1792, La Marseillaise est devenue hymne national en 1795, puis définitivement sous la IIIe République en 1879."
    },
    {
      "id": "val-007",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Selon l'article 1er de la Constitution, la France est une République :",
      "choix": [
        "monarchique et fédérale",
        "indivisible, laïque, démocratique et sociale",
        "confessionnelle et décentralisée",
        "parlementaire et communautaire"
      ],
      "reponse": 1,
      "explication": "L'article 1er dispose : « La France est une République indivisible, laïque, démocratique et sociale. Elle assure l'égalité devant la loi de tous les citoyens sans distinction d'origine, de race ou de religion. »"
    },
    {
      "id": "val-008",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Quelle loi de 2004 encadre le port de signes religieux à l'école publique ?",
      "choix": [
        "Une loi interdisant les signes religieux ostensibles aux élèves des écoles, collèges et lycées publics",
        "Une loi interdisant la religion dans l'espace public",
        "Une loi interdisant les signes religieux aux étudiants à l'université",
        "Une loi interdisant les cours d'histoire des religions"
      ],
      "reponse": 0,
      "explication": "La loi du 15 mars 2004 interdit le port de signes ou tenues manifestant ostensiblement une appartenance religieuse aux élèves des établissements publics du primaire et du secondaire. Elle ne s'applique ni à l'université ni à la rue."
    },
    {
      "id": "val-009",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "La liberté d'expression en France :",
      "choix": [
        "est absolue et sans limite",
        "n'existe que pour la presse",
        "est limitée notamment par l'interdiction de l'injure, de la diffamation et de l'incitation à la haine",
        "est soumise à une autorisation préalable"
      ],
      "reponse": 2,
      "explication": "Proclamée par l'article 11 de la Déclaration de 1789 et la loi de 1881 sur la presse, la liberté d'expression connaît des limites légales : diffamation, injure, incitation à la haine ou à la violence, apologie du terrorisme, négationnisme."
    },
    {
      "id": "val-010",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Quel principe impose « à travail égal, salaire égal » entre les femmes et les hommes ?",
      "choix": [
        "Le principe d'égalité professionnelle inscrit dans le Code du travail",
        "La liberté contractuelle",
        "Le principe de fraternité",
        "Le droit de grève"
      ],
      "reponse": 0,
      "explication": "L'égalité femmes-hommes est un principe constitutionnel (Préambule de 1946) décliné dans le Code du travail : l'employeur doit assurer l'égalité de rémunération pour un même travail ou un travail de valeur égale."
    },
    {
      "id": "val-011",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Sur le drapeau français, dans quel ordre les couleurs apparaissent-elles quand on le regarde de face, de la hampe vers l'extérieur ?",
      "choix": [
        "Bleu, blanc, rouge",
        "Rouge, blanc, bleu",
        "Blanc, bleu, rouge",
        "Bleu, rouge, blanc"
      ],
      "reponse": 0,
      "explication": "Le drapeau tricolore français est composé de trois bandes verticales bleu, blanc et rouge. Le bleu est placé du côté de la hampe."
    },
    {
      "id": "val-012",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "La Marseillaise a aujourd'hui le statut de :",
      "choix": [
        "chant régional de Provence",
        "hymne national de la France",
        "marche militaire réservée à l'armée",
        "chant religieux officiel"
      ],
      "reponse": 1,
      "explication": "La Marseillaise est l'hymne national français. Elle est notamment chantée lors de cérémonies officielles et de certains événements publics."
    },
    {
      "id": "val-013",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Le coq gaulois est souvent associé à la France parce que :",
      "choix": [
        "il figure dans le texte de la Constitution comme emblème obligatoire",
        "il était l'animal sacré des rois de France",
        "un jeu de mots ancien rapproche le coq du mot latin désignant les Gaulois",
        "il remplace officiellement le drapeau dans les compétitions sportives"
      ],
      "reponse": 2,
      "explication": "Le rapprochement vient notamment du latin gallus, qui signifie à la fois coq et Gaulois selon le contexte. Le coq est un symbole courant de la France, sans être l'emblème constitutionnel de l'État."
    },
    {
      "id": "val-014",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Le Grand Sceau de France sert principalement à :",
      "choix": [
        "choisir les députés au suffrage universel",
        "fixer chaque année les jours fériés",
        "déterminer les paroles de l'hymne national",
        "authentifier certains actes solennels de la République"
      ],
      "reponse": 3,
      "explication": "Le sceau est un symbole d'authentification de l'État. Le ministre de la Justice porte traditionnellement le titre de garde des Sceaux."
    },
    {
      "id": "val-015",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Le faisceau de licteur, visible dans l'emblématique républicaine, renvoie surtout à l'idée de :",
      "choix": [
        "justice et autorité publique unies",
        "richesse agricole des régions",
        "victoire d'une religion d'État",
        "monarchie héréditaire"
      ],
      "reponse": 0,
      "explication": "Le faisceau de licteur est un symbole hérité de l'Antiquité romaine. Dans l'usage républicain français, il évoque notamment l'autorité de la loi et l'unité civique."
    },
    {
      "id": "val-016",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "La fête nationale française rappelle à la fois la prise de la Bastille et :",
      "choix": [
        "le sacre de Napoléon Ier",
        "la Fête de la Fédération de 1790",
        "la proclamation de la Ve République",
        "la signature du traité de Rome"
      ],
      "reponse": 1,
      "explication": "La fête nationale associe la mémoire de 1789 à celle de la Fête de la Fédération du 14 juillet 1790. Cette dernière célébrait l'unité de la Nation."
    },
    {
      "id": "val-017",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Dans de nombreuses mairies, quel symbole républicain trouve-t-on sous forme de buste ?",
      "choix": [
        "Vercingétorix",
        "Jeanne d'Arc",
        "Marianne",
        "Charlemagne"
      ],
      "reponse": 2,
      "explication": "Le buste de Marianne est fréquemment présent dans les mairies. Il matérialise la présence de la République dans la vie publique locale."
    },
    {
      "id": "val-018",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Dans un service public, la neutralité de l'État vise notamment à garantir que :",
      "choix": [
        "les usagers doivent cacher toute conviction personnelle",
        "une religion est privilégiée si elle est majoritaire localement",
        "les agents choisissent les règles selon leurs convictions",
        "les usagers sont traités sans préférence religieuse ou philosophique"
      ],
      "reponse": 3,
      "explication": "La neutralité impose au service public de ne favoriser ni défavoriser aucune conviction. Elle protège l'égalité de traitement des usagers."
    },
    {
      "id": "val-019",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Quelle affirmation décrit correctement la position de l'État français à l'égard des religions ?",
      "choix": [
        "L'État ne reconnaît aucune religion comme religion officielle",
        "L'État impose une croyance commune à tous les citoyens",
        "L'État interdit toute pratique religieuse privée",
        "L'État réserve les emplois publics aux personnes sans religion"
      ],
      "reponse": 0,
      "explication": "La France n'a pas de religion d'État. Les croyances relèvent de la liberté de conscience et doivent être respectées dans le cadre de la loi."
    },
    {
      "id": "val-020",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Un agent public, pendant son service, doit en principe :",
      "choix": [
        "promouvoir ses convictions auprès des usagers",
        "respecter une obligation de neutralité",
        "réserver le service aux personnes partageant ses opinions",
        "porter obligatoirement un symbole politique"
      ],
      "reponse": 1,
      "explication": "Les agents publics représentent le service public. Ils doivent donc exercer leurs fonctions avec neutralité, notamment religieuse et politique."
    },
    {
      "id": "val-021",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Dans un hôpital public, un usager peut en principe exprimer une conviction religieuse si :",
      "choix": [
        "le personnel médical adopte la même conviction",
        "la direction l'autorise seulement pour une religion reconnue",
        "cela ne trouble pas le fonctionnement du service ni les droits d'autrui",
        "il renonce à tous ses droits de patient"
      ],
      "reponse": 2,
      "explication": "Les usagers des services publics conservent leur liberté de conscience. Cette liberté s'exerce toutefois dans le respect de l'ordre public, du service et des droits des autres."
    },
    {
      "id": "val-022",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "La loi du 1er juillet 1901 est principalement associée à la liberté :",
      "choix": [
        "de culte",
        "d'aller et venir",
        "de la presse",
        "d'association"
      ],
      "reponse": 3,
      "explication": "La loi de 1901 organise le régime général des associations. Elle permet à des personnes de se regrouper autour d'un but commun licite."
    },
    {
      "id": "val-023",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "La liberté de la presse signifie notamment que :",
      "choix": [
        "les journaux peuvent paraître sans autorisation préalable générale",
        "les journalistes ne sont soumis à aucune loi",
        "l'État rédige les articles des journaux nationaux",
        "seuls les journaux publics peuvent critiquer le gouvernement"
      ],
      "reponse": 0,
      "explication": "La liberté de la presse exclut un contrôle préalable général par l'État. Les abus éventuels peuvent cependant engager une responsabilité prévue par la loi."
    },
    {
      "id": "val-024",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Pour organiser une manifestation sur la voie publique, le droit français prévoit généralement :",
      "choix": [
        "un vote obligatoire de tous les habitants concernés",
        "une déclaration préalable aux autorités",
        "une autorisation du maire pour chaque participant",
        "une interdiction systématique des cortèges politiques"
      ],
      "reponse": 1,
      "explication": "Les manifestations sur la voie publique font en principe l'objet d'une déclaration préalable. L'autorité administrative ne peut les interdire que pour des raisons sérieuses d'ordre public."
    },
    {
      "id": "val-025",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Le droit de grève est reconnu en France comme :",
      "choix": [
        "une simple tolérance sans valeur juridique",
        "un droit réservé uniquement aux fonctionnaires",
        "un droit à valeur constitutionnelle exercé dans le cadre des lois",
        "une obligation annuelle pour les salariés"
      ],
      "reponse": 2,
      "explication": "Le Préambule de la Constitution de 1946 reconnaît le droit de grève. Son exercice peut être encadré par la loi, notamment pour certains services."
    },
    {
      "id": "val-026",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Dans un État de droit, les pouvoirs publics :",
      "choix": [
        "peuvent ignorer les décisions des juges",
        "ne sont contrôlés que par les médias",
        "agissent hors de tout cadre juridique",
        "sont soumis au droit et au contrôle du juge"
      ],
      "reponse": 3,
      "explication": "L'État de droit signifie que l'administration et les gouvernants doivent respecter les règles juridiques. Des juges indépendants peuvent contrôler leurs actes."
    },
    {
      "id": "val-027",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "La séparation des pouvoirs distingue principalement :",
      "choix": [
        "le pouvoir de faire la loi, celui de l'exécuter et celui de juger",
        "les pouvoirs du Nord, du Sud et de l'Outre-mer",
        "les pouvoirs religieux, sportifs et culturels",
        "les pouvoirs des entreprises selon leur taille"
      ],
      "reponse": 0,
      "explication": "La séparation des pouvoirs évite qu'une même autorité concentre toutes les fonctions. Elle distingue classiquement les fonctions législative, exécutive et juridictionnelle."
    },
    {
      "id": "val-028",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "En France, la souveraineté nationale s'exerce notamment par :",
      "choix": [
        "les héritiers d'une famille régnante",
        "les représentants élus et le référendum",
        "les seules autorités religieuses",
        "les entreprises les plus importantes"
      ],
      "reponse": 1,
      "explication": "La Constitution prévoit que la souveraineté nationale appartient au peuple. Elle s'exerce par ses représentants et par la voie du référendum."
    },
    {
      "id": "val-029",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Dire que la République est indivisible signifie notamment que :",
      "choix": [
        "les communes n'ont aucune compétence locale",
        "les régions peuvent adopter une nationalité propre",
        "aucune partie du peuple ne détient seule la souveraineté nationale",
        "chaque territoire choisit librement sa monnaie"
      ],
      "reponse": 2,
      "explication": "L'indivisibilité affirme l'unité du peuple français et de la souveraineté nationale. Elle n'empêche pas l'existence de collectivités territoriales dotées de compétences."
    },
    {
      "id": "val-030",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Une République démocratique suppose notamment :",
      "choix": [
        "l'absence d'élections nationales",
        "un parti unique obligatoire",
        "la transmission héréditaire du pouvoir",
        "le pluralisme politique et le choix des gouvernants par les citoyens"
      ],
      "reponse": 3,
      "explication": "La démocratie repose sur la participation des citoyens et la compétition pacifique des idées politiques. Les élections libres en sont un élément essentiel."
    },
    {
      "id": "val-031",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quand la Constitution affirme que la France respecte toutes les croyances, cela implique que l'État doit :",
      "choix": [
        "protéger la liberté de conscience sans imposer une croyance officielle",
        "choisir la religion la plus pratiquée comme référence nationale",
        "remplacer toutes les fêtes religieuses par des fêtes obligatoires",
        "interdire les convictions philosophiques non religieuses"
      ],
      "reponse": 0,
      "explication": "Le respect de toutes les croyances accompagne la neutralité de l'État. Il protège aussi bien la liberté religieuse que le droit de ne pas avoir de religion."
    },
    {
      "id": "val-032",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quel principe la loi de séparation des Églises et de l'État pose-t-elle en matière de cultes ?",
      "choix": [
        "Les ministres des cultes sont automatiquement députés",
        "La République ne salarie ni ne subventionne les cultes, sauf régimes particuliers prévus par le droit",
        "Les cultes doivent être dirigés par les préfets",
        "Les cérémonies religieuses deviennent des actes d'état civil"
      ],
      "reponse": 1,
      "explication": "La loi de séparation affirme que la République ne reconnaît, ne salarie ni ne subventionne aucun culte. Des exceptions et régimes locaux particuliers existent toutefois dans le droit français."
    },
    {
      "id": "val-033",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "En Alsace-Moselle, le régime local des cultes se caractérise notamment par :",
      "choix": [
        "l'interdiction de tout enseignement religieux",
        "l'application intégrale et sans exception de la séparation de 1905",
        "un régime concordataire maintenu pour certains cultes reconnus",
        "l'absence totale de règles publiques concernant les religions"
      ],
      "reponse": 2,
      "explication": "L'Alsace-Moselle n'était pas française au moment de l'adoption de la loi de séparation. Un régime local y subsiste pour certains cultes reconnus, avec des règles différentes du droit commun."
    },
    {
      "id": "val-034",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Un fonctionnaire peut avoir des convictions religieuses ou politiques personnelles, mais dans l'exercice de ses fonctions il doit :",
      "choix": [
        "les faire approuver par les usagers",
        "les déclarer à chaque supérieur hiérarchique",
        "les inscrire sur les documents administratifs",
        "ne pas les manifester d'une manière contraire à la neutralité du service"
      ],
      "reponse": 3,
      "explication": "La liberté de conscience vaut aussi pour les agents publics. Leur comportement professionnel doit cependant respecter la neutralité du service public."
    },
    {
      "id": "val-035",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "À l'école publique, l'étude de faits religieux dans un cours d'histoire ou de culture générale est possible lorsqu'elle est :",
      "choix": [
        "présentée de façon laïque, objective et pédagogique",
        "réservée aux élèves d'une confession déterminée",
        "organisée comme une pratique cultuelle obligatoire",
        "interdite dans tous les programmes scolaires"
      ],
      "reponse": 0,
      "explication": "La laïcité scolaire n'interdit pas l'étude des faits religieux comme éléments d'histoire, d'art ou de société. Elle exclut en revanche le prosélytisme et l'enseignement confessionnel obligatoire dans l'école publique."
    },
    {
      "id": "val-036",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quelle phrase distingue correctement la laïcité d'une interdiction générale des religions ?",
      "choix": [
        "La laïcité supprime la liberté de culte dans l'espace privé",
        "La laïcité organise la neutralité de l'État tout en protégeant les convictions",
        "La laïcité oblige chaque citoyen à adopter l'athéisme",
        "La laïcité réserve les droits civiques aux personnes sans religion"
      ],
      "reponse": 1,
      "explication": "La laïcité n'est pas l'hostilité aux religions. Elle garantit que l'État reste neutre et que chacun dispose de la liberté de conscience."
    },
    {
      "id": "val-037",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "La liberté de réunion permet notamment à des personnes de :",
      "choix": [
        "se réunir uniquement si elles partagent la même nationalité",
        "se réunir armées sans aucune règle",
        "se rassembler pacifiquement, sous réserve du respect de l'ordre public",
        "se substituer aux tribunaux pour juger des litiges"
      ],
      "reponse": 2,
      "explication": "La liberté de réunion protège les rassemblements pacifiques. Comme les autres libertés, elle peut être encadrée pour prévenir des troubles à l'ordre public."
    },
    {
      "id": "val-038",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Dans le régime de la loi de 1901, une association acquiert en pratique la capacité juridique courante lorsqu'elle :",
      "choix": [
        "obtient un siège au Parlement",
        "est approuvée par un culte reconnu",
        "remplace une collectivité territoriale",
        "est déclarée selon les formalités prévues"
      ],
      "reponse": 3,
      "explication": "Une association peut exister sans déclaration, mais la déclaration lui donne une personnalité juridique utile. Elle peut alors agir en justice, recevoir des cotisations ou ouvrir un compte."
    },
    {
      "id": "val-039",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Parmi ces comportements, lequel peut engager la responsabilité d'un auteur ou d'un journal ?",
      "choix": [
        "Publier une diffamation visant une personne identifiable",
        "Critiquer une décision gouvernementale avec des arguments",
        "Enquêter sur l'utilisation de fonds publics",
        "Exprimer une opinion politique dans un éditorial"
      ],
      "reponse": 0,
      "explication": "La liberté de la presse protège la critique et l'enquête, mais elle n'autorise pas tout. La diffamation, l'injure ou certaines provocations peuvent être sanctionnées dans les conditions prévues par la loi."
    },
    {
      "id": "val-040",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quelle institution peut notamment contrôler la conformité d'une loi à la Constitution ?",
      "choix": [
        "La Cour des comptes",
        "Le Conseil constitutionnel",
        "Le Conseil économique, social et environnemental",
        "La Banque de France"
      ],
      "reponse": 1,
      "explication": "Le Conseil constitutionnel contrôle la constitutionnalité des lois dans les cas prévus par la Constitution. Il peut être saisi avant la promulgation d'une loi ou dans le cadre d'une question prioritaire de constitutionnalité."
    },
    {
      "id": "val-041",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Le juge administratif contrôle principalement :",
      "choix": [
        "la composition des équipes sportives nationales",
        "la validité des sacrements religieux",
        "la légalité des actes de l'administration",
        "les résultats des examens privés sans lien public"
      ],
      "reponse": 2,
      "explication": "Le juge administratif vérifie que l'administration respecte le droit. Ce contrôle est un élément important de l'État de droit."
    },
    {
      "id": "val-042",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Une autorité administrative qui limite une manifestation doit prendre une mesure :",
      "choix": [
        "fondée uniquement sur l'opinion des manifestants",
        "automatique dès qu'un cortège est annoncé",
        "décidée par les organisateurs eux-mêmes",
        "nécessaire et proportionnée à un risque réel pour l'ordre public"
      ],
      "reponse": 3,
      "explication": "La liberté de manifester est une liberté publique. Les restrictions doivent être justifiées par l'ordre public et proportionnées aux risques constatés."
    },
    {
      "id": "val-043",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Le pluralisme politique se traduit notamment par :",
      "choix": [
        "la possibilité pour plusieurs courants politiques de s'exprimer et de se présenter aux élections",
        "l'interdiction de toute opposition au gouvernement",
        "la nomination à vie des responsables politiques",
        "la suppression des débats parlementaires"
      ],
      "reponse": 0,
      "explication": "Le pluralisme permet la confrontation pacifique des idées. Il est indispensable au fonctionnement démocratique de la République."
    },
    {
      "id": "val-044",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Dans un guichet administratif, l'obligation de neutralité concerne d'abord :",
      "choix": [
        "les seuls visiteurs étrangers",
        "les agents chargés du service public",
        "les usagers dans leur vie privée",
        "les associations sportives locales"
      ],
      "reponse": 1,
      "explication": "La neutralité est une obligation professionnelle des agents publics et des personnes participant au service public. Les usagers conservent leurs libertés, sauf limites nécessaires au bon fonctionnement du service."
    },
    {
      "id": "val-045",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Le drapeau tricolore sur un bâtiment public signale principalement :",
      "choix": [
        "la propriété privée du bâtiment",
        "l'appartenance à une région historique seulement",
        "la présence ou l'autorité de la République française",
        "l'organisation d'une cérémonie religieuse"
      ],
      "reponse": 2,
      "explication": "Le drapeau est l'emblème national. Sa présence sur les bâtiments publics exprime l'autorité de la République et l'appartenance à la Nation."
    },
    {
      "id": "val-046",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "À propos du coq gaulois, quelle affirmation est correcte ?",
      "choix": [
        "Il remplace légalement Marianne dans toutes les mairies",
        "Il figure obligatoirement sur tous les actes d'état civil",
        "Il est la seule figure autorisée sur les timbres",
        "Il est un symbole populaire de la France, fréquent dans le sport et l'imagerie nationale"
      ],
      "reponse": 3,
      "explication": "Le coq est largement utilisé comme symbole populaire, notamment dans les contextes sportifs. Il ne remplace pas les emblèmes officiels comme le drapeau tricolore."
    },
    {
      "id": "val-047",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Avant de devenir hymne national, La Marseillaise était à l'origine :",
      "choix": [
        "un chant révolutionnaire composé dans le contexte de la guerre de 1792",
        "une chanson écrite pour le couronnement de Louis XIV",
        "un cantique liturgique médiéval",
        "une marche créée pour la Libération de 1944"
      ],
      "reponse": 0,
      "explication": "La Marseillaise est née pendant la Révolution française, dans le contexte de la guerre de 1792. Elle est ensuite devenue un symbole national."
    },
    {
      "id": "val-048",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Lors des révisions constitutionnelles, l'apposition du sceau manifeste surtout :",
      "choix": [
        "l'accord d'une autorité religieuse",
        "la solennité et l'authenticité de l'acte de l'État",
        "la consultation obligatoire de chaque commune",
        "l'entrée automatique dans l'Union européenne"
      ],
      "reponse": 1,
      "explication": "Le scellement donne une forme solennelle à certains actes importants. Il rappelle la continuité de l'État et l'authentification officielle de l'acte."
    },
    {
      "id": "val-049",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "La liberté de culte comprend notamment le droit de :",
      "choix": [
        "faire écarter les lois civiles par une règle religieuse",
        "contraindre ses voisins à participer à une cérémonie",
        "pratiquer une religion, seul ou avec d'autres, dans le respect de l'ordre public",
        "transformer toute décision administrative en décision confessionnelle"
      ],
      "reponse": 2,
      "explication": "La liberté de culte est une manifestation de la liberté de conscience. Elle s'exerce dans le cadre des lois de la République et de l'ordre public."
    },
    {
      "id": "val-050",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "La liberté d'aller et venir peut être limitée :",
      "choix": [
        "par une simple préférence personnelle d'un agent public",
        "uniquement pour les personnes qui ne votent pas",
        "par une entreprise privée sans aucun fondement",
        "dans les conditions prévues par la loi, par exemple pour la sécurité ou sur décision judiciaire"
      ],
      "reponse": 3,
      "explication": "La liberté d'aller et venir est une liberté fondamentale. Des restrictions sont possibles, mais elles doivent avoir une base légale et être contrôlables."
    },
    {
      "id": "val-051",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Dans la hiérarchie des normes en France, quelle proposition est correcte ?",
      "choix": [
        "La Constitution est supérieure aux lois ordinaires",
        "Un arrêté municipal est supérieur à la Constitution",
        "Une circulaire administrative peut abroger une loi",
        "Un règlement intérieur privé prime toujours sur les traités"
      ],
      "reponse": 0,
      "explication": "L'État de droit suppose une hiérarchie des normes. Les lois doivent respecter la Constitution, et les règlements doivent respecter les normes supérieures."
    },
    {
      "id": "val-052",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Pourquoi l'indépendance de l'autorité judiciaire est-elle importante dans une démocratie ?",
      "choix": [
        "Parce qu'elle permet aux juges de voter les lois fiscales",
        "Parce qu'elle évite que le pouvoir politique dicte l'issue d'une affaire individuelle",
        "Parce qu'elle supprime tout recours contre les décisions de justice",
        "Parce qu'elle confie les élections aux tribunaux religieux"
      ],
      "reponse": 1,
      "explication": "L'indépendance des juges protège les justiciables contre l'arbitraire. Elle participe à la séparation des pouvoirs et à la garantie des droits."
    },
    {
      "id": "val-053",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Comment concilier l'indivisibilité de la République avec l'existence de collectivités territoriales ?",
      "choix": [
        "Les collectivités détiennent chacune une souveraineté nationale distincte",
        "Les collectivités peuvent annuler seules la Constitution",
        "Les collectivités exercent des compétences prévues par la loi sans remettre en cause l'unité de la souveraineté",
        "Les collectivités remplacent l'État dans les relations diplomatiques"
      ],
      "reponse": 2,
      "explication": "La décentralisation confie des compétences à des collectivités territoriales. Elle ne divise pas la souveraineté nationale, qui demeure celle du peuple français dans son ensemble."
    },
    {
      "id": "val-054",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Pourquoi des communes peuvent-elles entretenir certaines églises construites avant la séparation des Églises et de l'État ?",
      "choix": [
        "Parce que toute commune doit financer le culte de son choix",
        "Parce que les édifices religieux appartiennent toujours aux associations privées",
        "Parce que cela remplace l'obligation de neutralité des agents publics",
        "Parce que beaucoup de ces édifices sont des propriétés publiques affectées au culte"
      ],
      "reponse": 3,
      "explication": "De nombreux édifices cultuels antérieurs à la séparation appartiennent à des personnes publiques, notamment aux communes. Leur entretien relève alors de la gestion du patrimoine public, sans créer une religion officielle."
    },
    {
      "id": "val-055",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Qualifier la République de sociale renvoie principalement à l'idée que :",
      "choix": [
        "la République doit poursuivre l'intérêt général et permettre des protections collectives",
        "un seul parti politique social est autorisé",
        "les libertés individuelles sont supprimées",
        "la propriété privée est toujours interdite"
      ],
      "reponse": 0,
      "explication": "La dimension sociale de la République renvoie à des objectifs de cohésion, de protection et d'accès effectif aux droits. Elle ne signifie pas l'adhésion obligatoire à une idéologie partisane."
    },
    {
      "id": "val-056",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Dans certains services publics, le droit de grève peut être encadré afin de préserver :",
      "choix": [
        "le droit de l'employeur à interdire toute opinion syndicale",
        "la continuité du service public et les besoins essentiels de la population",
        "l'obligation pour les usagers de remplacer les agents grévistes",
        "la suppression définitive du droit de négociation collective"
      ],
      "reponse": 1,
      "explication": "Le droit de grève est constitutionnellement reconnu, mais il se concilie avec d'autres exigences. La continuité du service public peut justifier des règles particulières."
    },
    {
      "id": "val-057",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "En matière d'expression publique, l'absence de censure préalable générale signifie surtout que :",
      "choix": [
        "les propos publiés ne peuvent jamais être poursuivis",
        "seuls les propos favorables au gouvernement peuvent paraître",
        "la responsabilité intervient en principe après publication en cas d'abus prévu par la loi",
        "chaque article doit être validé par un préfet avant diffusion"
      ],
      "reponse": 2,
      "explication": "La liberté d'expression et de la presse exclut un contrôle préalable général. Elle n'empêche pas des sanctions a posteriori en cas d'abus légalement définis."
    },
    {
      "id": "val-058",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Une association peut-elle être dissoute malgré la liberté d'association ?",
      "choix": [
        "Non, aucune association ne peut jamais être dissoute",
        "Oui, uniquement si elle change de trésorier",
        "Oui, dès qu'elle critique une politique publique",
        "Oui, dans des cas prévus par la loi, sous contrôle juridictionnel possible"
      ],
      "reponse": 3,
      "explication": "La liberté d'association est fondamentale, mais elle n'autorise pas des activités contraires à la loi. Une dissolution doit reposer sur une base légale et peut être contestée devant le juge."
    },
    {
      "id": "val-059",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Lorsqu'un référendum national est organisé, il illustre directement :",
      "choix": [
        "l'exercice de la souveraineté par le peuple",
        "la nomination héréditaire du chef de l'État",
        "la disparition du Parlement",
        "la transformation des citoyens en fonctionnaires"
      ],
      "reponse": 0,
      "explication": "Le référendum permet au peuple de se prononcer directement sur une question prévue par la Constitution. Il complète l'exercice de la souveraineté par les représentants élus."
    },
    {
      "id": "val-060",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "La question prioritaire de constitutionnalité permet, sous conditions, de contester :",
      "choix": [
        "un résultat sportif homologué par une fédération",
        "une disposition législative qui porterait atteinte aux droits et libertés garantis par la Constitution",
        "une opinion exprimée dans un débat privé",
        "un usage familial sans portée juridique"
      ],
      "reponse": 1,
      "explication": "La QPC permet à un justiciable de soutenir qu'une disposition législative porte atteinte aux droits et libertés constitutionnellement garantis. Le Conseil constitutionnel peut alors être amené à se prononcer."
    },
    {
      "id": "val-061",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Quel texte de 1789 affirme que les hommes naissent et demeurent libres et égaux en droits ?",
      "choix": [
        "La Déclaration des droits de l'homme et du citoyen",
        "Le Code civil",
        "Le traité de Versailles",
        "La Charte de l'environnement"
      ],
      "reponse": 0,
      "explication": "L'article 1er de la Déclaration de 1789 énonce ce principe fondamental. Ce texte fait partie des références constitutionnelles de la République."
    },
    {
      "id": "val-062",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Que signifie l'égalité devant la loi en France ?",
      "choix": [
        "Chacun peut choisir les lois qu'il applique",
        "La loi s'applique de la même manière à tous dans des situations comparables",
        "Seuls les citoyens français doivent respecter la loi",
        "Les élus ne sont jamais soumis aux lois ordinaires"
      ],
      "reponse": 1,
      "explication": "L'égalité devant la loi interdit les privilèges personnels. Des différences de traitement restent possibles si elles sont justifiées par une différence de situation ou un intérêt général."
    },
    {
      "id": "val-063",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "En quelle année les femmes françaises ont-elles obtenu le droit de vote et d'éligibilité ?",
      "choix": [
        "1789",
        "1905",
        "1944",
        "1975"
      ],
      "reponse": 2,
      "explication": "L'ordonnance du 21 avril 1944 accorde aux femmes le droit de vote et d'éligibilité. Elles votent pour la première fois lors des élections municipales de 1945."
    },
    {
      "id": "val-064",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Quelle institution indépendante peut être saisie en cas de discrimination en France ?",
      "choix": [
        "La Cour des comptes",
        "Le Sénat uniquement",
        "La Banque de France",
        "Le Défenseur des droits"
      ],
      "reponse": 3,
      "explication": "Le Défenseur des droits aide les personnes victimes de discriminations et peut enquêter ou recommander des solutions. Il peut être saisi gratuitement."
    },
    {
      "id": "val-065",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Lequel de ces motifs est un critère de discrimination interdit par la loi française ?",
      "choix": [
        "L'origine réelle ou supposée",
        "Le choix d'un plat au restaurant",
        "La couleur d'une voiture",
        "La préférence pour un sport"
      ],
      "reponse": 0,
      "explication": "La loi interdit notamment les discriminations fondées sur l'origine, le sexe, la religion, le handicap, l'âge ou l'orientation sexuelle. Ces protections s'appliquent dans des domaines comme l'emploi, le logement ou l'accès aux services."
    },
    {
      "id": "val-066",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Que protège principalement le principe de dignité de la personne humaine ?",
      "choix": [
        "Le droit d'imposer ses opinions aux autres",
        "Le respect dû à toute personne, quelles que soient sa situation ou ses origines",
        "Le droit de refuser toutes les règles collectives",
        "La priorité automatique des plus riches"
      ],
      "reponse": 1,
      "explication": "La dignité signifie que chaque être humain doit être traité comme une personne et non comme un objet. Elle fonde de nombreuses protections contre les traitements dégradants."
    },
    {
      "id": "val-067",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Dans la vie civique, quel comportement illustre le mieux le vivre-ensemble républicain ?",
      "choix": [
        "Refuser de parler aux personnes différentes de soi",
        "Diffuser des injures racistes en ligne",
        "Respecter les autres et les règles communes",
        "Faire passer son intérêt personnel avant toute loi"
      ],
      "reponse": 2,
      "explication": "Le vivre-ensemble repose sur le respect mutuel, la civilité et l'acceptation des règles communes. Il permet à des personnes différentes de partager un même espace civique."
    },
    {
      "id": "val-068",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Quel est l'un des devoirs civiques liés à la solidarité nationale ?",
      "choix": [
        "Refuser toute contribution publique",
        "Payer uniquement les impôts que l'on approuve",
        "Remplacer le vote par une pétition obligatoire",
        "Contribuer aux charges publiques selon les règles fiscales"
      ],
      "reponse": 3,
      "explication": "L'impôt finance les services publics et les politiques de solidarité. La Déclaration de 1789 prévoit une contribution commune répartie entre les citoyens selon leurs facultés."
    },
    {
      "id": "val-069",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Quel âge marque en principe l'obligation de recensement citoyen pour les jeunes Français ?",
      "choix": [
        "16 ans",
        "12 ans",
        "21 ans",
        "25 ans"
      ],
      "reponse": 0,
      "explication": "Tout jeune Français doit se faire recenser à partir de 16 ans. Cette démarche permet notamment la participation à la Journée défense et citoyenneté."
    },
    {
      "id": "val-070",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Quel principe protège un enfant contre un mariage imposé par sa famille ?",
      "choix": [
        "L'obligation d'obéir à toute décision familiale",
        "Le consentement libre au mariage et la protection des mineurs",
        "La priorité des traditions sur la loi française",
        "Le droit des parents de choisir seuls le conjoint"
      ],
      "reponse": 1,
      "explication": "En France, le mariage exige le consentement libre des époux. Le mariage forcé est contraire aux droits de la personne et peut être pénalement sanctionné."
    },
    {
      "id": "val-071",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Que finance principalement la Sécurité sociale ?",
      "choix": [
        "Uniquement les campagnes électorales",
        "Seulement les loisirs privés",
        "Des protections comme la maladie, la famille, la retraite ou les accidents du travail",
        "Exclusivement l'armée"
      ],
      "reponse": 2,
      "explication": "La Sécurité sociale est un pilier de la solidarité nationale. Elle protège contre plusieurs risques de la vie grâce à des cotisations et contributions."
    },
    {
      "id": "val-072",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Quel comportement est attendu d'un citoyen appelé à être juré d'assises ?",
      "choix": [
        "Voter selon les ordres d'un parti",
        "Refuser sans motif toute convocation",
        "Publier le délibéré sur les réseaux sociaux",
        "Participer sérieusement au jugement et respecter le secret du délibéré"
      ],
      "reponse": 3,
      "explication": "Les jurés participent à la justice pénale pour les crimes. Ils doivent être impartiaux et garder le secret des délibérations."
    },
    {
      "id": "val-073",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Quel texte a légalisé l'interruption volontaire de grossesse en France en 1975 ?",
      "choix": [
        "La loi Veil",
        "La loi Falloux",
        "La loi Pleven",
        "La loi Toubon"
      ],
      "reponse": 0,
      "explication": "La loi portée par Simone Veil a légalisé l'IVG en 1975. Elle constitue une étape majeure des droits des femmes en France."
    },
    {
      "id": "val-074",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Face à des violences conjugales, quelle affirmation est correcte ?",
      "choix": [
        "Elles relèvent toujours de la vie privée et jamais de la loi",
        "Elles sont interdites et peuvent donner lieu à une protection et à des poursuites",
        "Elles ne concernent que les couples mariés",
        "Elles sont autorisées si la victime retire sa plainte"
      ],
      "reponse": 1,
      "explication": "Les violences conjugales sont interdites, qu'elles soient physiques, psychologiques, sexuelles ou économiques. Des dispositifs comme l'ordonnance de protection peuvent protéger les victimes."
    },
    {
      "id": "val-075",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Quelle pratique est interdite et pénalement réprimée en France pour protéger les filles et les femmes ?",
      "choix": [
        "La scolarisation obligatoire",
        "La consultation médicale",
        "L'excision",
        "La pratique d'un sport"
      ],
      "reponse": 2,
      "explication": "L'excision est une mutilation sexuelle interdite par la loi française. Elle peut être poursuivie même lorsqu'elle est organisée à l'étranger dans certaines conditions."
    },
    {
      "id": "val-076",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Quel est le sens du droit d'asile ?",
      "choix": [
        "Un droit automatique au logement de luxe",
        "Une dispense générale de respecter les lois",
        "Un droit réservé aux ressortissants européens uniquement",
        "La protection accordée à une personne persécutée ou menacée selon les règles applicables"
      ],
      "reponse": 3,
      "explication": "Le droit d'asile protège les personnes qui craignent des persécutions ou des menaces graves. Il s'exerce dans un cadre légal, notamment avec l'examen de la demande par les autorités compétentes."
    },
    {
      "id": "val-077",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Quel est l'âge minimal légal du mariage en France pour les femmes et les hommes, sauf dispense exceptionnelle ?",
      "choix": [
        "18 ans",
        "15 ans",
        "16 ans",
        "21 ans"
      ],
      "reponse": 0,
      "explication": "Depuis 2006, l'âge minimal du mariage est fixé à 18 ans pour les femmes comme pour les hommes. Des dispenses exceptionnelles peuvent exister pour motifs graves."
    },
    {
      "id": "val-078",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Que signifie le consentement dans les relations personnelles ?",
      "choix": [
        "Un accord supposé dès qu'une personne ne crie pas",
        "Un accord libre, éclairé et pouvant être retiré",
        "Une autorisation donnée une fois pour toutes",
        "Une décision prise par l'entourage"
      ],
      "reponse": 1,
      "explication": "Le consentement doit être libre et réel. Le respect de la personne humaine implique de tenir compte du refus ou du retrait du consentement."
    },
    {
      "id": "val-079",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Quelle attitude correspond à la lutte contre l'antisémitisme et le racisme ?",
      "choix": [
        "Tolérer les insultes si elles sont présentées comme des blagues",
        "Refuser toute sanction contre les propos haineux",
        "Combattre les préjugés et respecter l'égale dignité de chacun",
        "Réserver certains emplois selon l'origine"
      ],
      "reponse": 2,
      "explication": "Le racisme et l'antisémitisme sont contraires aux valeurs républicaines et peuvent constituer des infractions. La loi protège l'égale dignité des personnes."
    },
    {
      "id": "val-080",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Quel devoir général s'impose à toute personne vivant en France ?",
      "choix": [
        "Ignorer les décisions de justice",
        "Obéir uniquement aux règles familiales",
        "Choisir les lois selon sa religion",
        "Respecter les lois de la République"
      ],
      "reponse": 3,
      "explication": "Le respect des lois garantit la vie commune et la protection des droits de chacun. Il s'impose aux citoyens comme aux étrangers présents sur le territoire."
    },
    {
      "id": "val-081",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Dans la Déclaration de 1789, quel article affirme que la loi est l'expression de la volonté générale ?",
      "choix": [
        "L'article 6",
        "L'article 2",
        "L'article 10",
        "L'article 17"
      ],
      "reponse": 0,
      "explication": "L'article 6 précise que la loi est l'expression de la volonté générale. Il affirme aussi que tous les citoyens sont admissibles aux emplois publics selon leur capacité."
    },
    {
      "id": "val-082",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Pourquoi la Déclaration de 1789 a-t-elle aujourd'hui une valeur constitutionnelle ?",
      "choix": [
        "Parce qu'elle est votée à nouveau chaque année",
        "Parce que le Préambule de la Constitution de 1958 y renvoie et qu'elle fait partie du bloc de constitutionnalité",
        "Parce qu'elle remplace tous les codes juridiques",
        "Parce qu'elle est un traité européen"
      ],
      "reponse": 1,
      "explication": "Le Préambule de 1958 renvoie à la Déclaration de 1789. Le Conseil constitutionnel l'utilise pour contrôler la conformité des lois à la Constitution."
    },
    {
      "id": "val-083",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quel droit social est reconnu par le Préambule de la Constitution de 1946 ?",
      "choix": [
        "Le droit de vendre son vote",
        "Le droit d'échapper à tout impôt",
        "Le droit de grève dans le cadre des lois qui le réglementent",
        "Le droit d'imposer une religion officielle"
      ],
      "reponse": 2,
      "explication": "Le Préambule de 1946 reconnaît notamment le droit de grève, le droit syndical et la protection de la santé. Ces principes font partie du bloc de constitutionnalité."
    },
    {
      "id": "val-084",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quel article de la Déclaration de 1789 garantit la libre communication des pensées et des opinions ?",
      "choix": [
        "L'article 1er",
        "L'article 4",
        "L'article 13",
        "L'article 11"
      ],
      "reponse": 3,
      "explication": "L'article 11 protège la libre communication des pensées et des opinions. Cette liberté s'exerce dans les limites fixées par la loi, notamment pour protéger autrui."
    },
    {
      "id": "val-085",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Que désigne le bloc de constitutionnalité ?",
      "choix": [
        "L'ensemble des normes de valeur constitutionnelle utilisées pour contrôler les lois",
        "Un bâtiment où siège le Conseil constitutionnel",
        "Un registre municipal des électeurs",
        "Une liste de simples conseils sans valeur juridique"
      ],
      "reponse": 0,
      "explication": "Le bloc de constitutionnalité comprend la Constitution de 1958 et des textes ou principes auxquels elle renvoie. Il inclut notamment la Déclaration de 1789 et le Préambule de 1946."
    },
    {
      "id": "val-086",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quelle réforme constitutionnelle de 2024 concerne l'IVG ?",
      "choix": [
        "Elle supprime la loi Veil",
        "Elle inscrit dans la Constitution la liberté garantie de recourir à l'IVG",
        "Elle réserve l'IVG aux seules personnes mariées",
        "Elle transfère la décision aux maires"
      ],
      "reponse": 1,
      "explication": "La révision constitutionnelle promulguée en mars 2024 inscrit à l'article 34 la liberté garantie de la femme de recourir à l'IVG. La France est ainsi devenue le premier pays à inscrire explicitement cette protection dans sa Constitution."
    },
    {
      "id": "val-087",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quel mécanisme vise à favoriser l'égal accès des femmes et des hommes aux mandats électoraux ?",
      "choix": [
        "Le tirage au sort de tous les élus",
        "L'interdiction faite aux femmes d'être candidates",
        "La parité en politique",
        "La suppression des élections locales"
      ],
      "reponse": 2,
      "explication": "La parité vise à favoriser une représentation équilibrée des femmes et des hommes. Une révision constitutionnelle de 1999 a ouvert la voie aux lois sur la parité."
    },
    {
      "id": "val-088",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quel énoncé décrit correctement l'autorité parentale en France ?",
      "choix": [
        "Elle autorise les parents à refuser toute scolarisation",
        "Elle donne aux parents un droit de propriété sur l'enfant",
        "Elle permet de marier un enfant sans son accord",
        "Elle est un ensemble de droits et devoirs exercés dans l'intérêt de l'enfant"
      ],
      "reponse": 3,
      "explication": "L'autorité parentale doit protéger l'enfant dans sa sécurité, sa santé, sa moralité et son éducation. Elle s'exerce dans l'intérêt de l'enfant, non comme une domination."
    },
    {
      "id": "val-089",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Dans quel domaine la discrimination liée au handicap est-elle interdite ?",
      "choix": [
        "L'accès à l'emploi, au logement ou aux services, comme les autres critères protégés",
        "Uniquement dans les compétitions sportives",
        "Seulement dans les administrations nationales",
        "Jamais, car le handicap n'est pas un critère protégé"
      ],
      "reponse": 0,
      "explication": "Le handicap fait partie des critères de discrimination interdits. La loi impose aussi des obligations d'accessibilité et d'aménagements raisonnables dans certains contextes."
    },
    {
      "id": "val-090",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Que signifie l'interdiction de l'homophobie dans l'espace public et professionnel ?",
      "choix": [
        "Les opinions homophobes doivent être imposées par l'employeur",
        "Une personne ne doit pas être injuriée, écartée ou défavorisée en raison de son orientation sexuelle",
        "La loi ne protège que les couples mariés",
        "L'orientation sexuelle peut être exigée sur tous les formulaires"
      ],
      "reponse": 1,
      "explication": "L'orientation sexuelle est un critère protégé par la loi. Les injures, violences ou discriminations homophobes peuvent être sanctionnées."
    },
    {
      "id": "val-091",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quel organisme examine principalement les demandes d'asile en France ?",
      "choix": [
        "Le ministère de l'Éducation nationale",
        "La Banque centrale européenne",
        "L'Office français de protection des réfugiés et apatrides (OFPRA)",
        "Le Conseil municipal du lieu de résidence"
      ],
      "reponse": 2,
      "explication": "L'OFPRA examine les demandes de protection internationale. En cas de refus, un recours peut être porté devant la Cour nationale du droit d'asile."
    },
    {
      "id": "val-092",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quel énoncé correspond à la solidarité nationale ?",
      "choix": [
        "Chacun finance seulement les services qu'il utilise personnellement",
        "Les plus vulnérables sont exclus des droits sociaux",
        "Les aides publiques sont réservées aux personnes sans obligations",
        "La collectivité organise des protections financées par des contributions communes"
      ],
      "reponse": 3,
      "explication": "La solidarité nationale repose sur l'idée que chacun contribue selon les règles et que la collectivité protège contre certains risques. Elle s'exprime par les services publics et la protection sociale."
    },
    {
      "id": "val-093",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quelle affirmation est correcte au sujet du congé de paternité et d'accueil de l'enfant en France ?",
      "choix": [
        "Il vise à permettre au second parent de participer aux premiers temps de l'enfant",
        "Il est réservé aux députés",
        "Il a supprimé le congé de maternité",
        "Il interdit au père de reconnaître l'enfant"
      ],
      "reponse": 0,
      "explication": "Le congé de paternité et d'accueil de l'enfant favorise l'implication du second parent et l'égalité dans la vie familiale. Depuis 2021, sa durée de droit commun est de 25 jours calendaires, auxquels s'ajoute le congé de naissance."
    },
    {
      "id": "val-094",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quel devoir civique est lié à l'inscription sur les listes électorales et à la participation aux scrutins ?",
      "choix": [
        "Vendre son bulletin au candidat le plus offrant",
        "Voter librement, sans pression ni achat de vote",
        "Montrer publiquement son vote à son employeur",
        "Voter plusieurs fois si l'on possède plusieurs adresses"
      ],
      "reponse": 1,
      "explication": "Le vote est libre et secret. Même lorsqu'il n'est pas juridiquement obligatoire pour toutes les élections, il constitue un acte important de citoyenneté."
    },
    {
      "id": "val-095",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quel principe l'article 16 de la Déclaration de 1789 associe-t-il à l'existence d'une Constitution ?",
      "choix": [
        "La suppression des juges",
        "Le pouvoir absolu d'un seul chef",
        "La garantie des droits et la séparation des pouvoirs",
        "L'interdiction de toute opposition"
      ],
      "reponse": 2,
      "explication": "L'article 16 affirme qu'une société sans garantie des droits ni séparation des pouvoirs n'a point de Constitution. Il rappelle que le pouvoir doit être limité pour protéger les libertés."
    },
    {
      "id": "val-096",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quel symbole ou geste relève du civisme au quotidien ?",
      "choix": [
        "Dégrader volontairement un équipement public",
        "Refuser de secourir une personne en danger par indifférence",
        "Frauder systématiquement dans les transports",
        "Respecter les files d'attente, les agents publics et les biens communs"
      ],
      "reponse": 3,
      "explication": "Le civisme ne se limite pas aux élections. Il inclut le respect des autres, des biens collectifs et des règles nécessaires à la vie commune."
    },
    {
      "id": "val-097",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quelle est l'idée centrale de la protection des mineurs en droit français ?",
      "choix": [
        "L'intérêt supérieur de l'enfant doit guider les décisions qui le concernent",
        "Un mineur peut toujours renoncer seul à toute protection",
        "La famille peut écarter toutes les obligations scolaires",
        "La protection cesse dès l'âge de 10 ans"
      ],
      "reponse": 0,
      "explication": "La protection des mineurs vise leur sécurité, leur santé, leur éducation et leur développement. L'intérêt de l'enfant guide l'action des parents, des juges et des services compétents."
    },
    {
      "id": "val-098",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Pourquoi les propos appelant à la haine raciale peuvent-ils être sanctionnés ?",
      "choix": [
        "Parce que toute critique politique est interdite",
        "Parce qu'ils portent atteinte à la dignité et à l'égalité des personnes visées",
        "Parce qu'il faut une autorisation pour parler en public",
        "Parce que seules les opinions majoritaires sont protégées"
      ],
      "reponse": 1,
      "explication": "La liberté d'expression est protégée, mais la loi sanctionne notamment la provocation à la haine ou à la violence. Ces limites protègent les droits et la dignité d'autrui."
    },
    {
      "id": "val-099",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quel élément est typiquement protégé par le principe d'égalité d'accès aux emplois publics ?",
      "choix": [
        "La préférence systématique pour les proches des élus",
        "Le recrutement réservé à une seule origine sociale",
        "La sélection selon les capacités, le mérite et les règles du concours ou de la procédure",
        "La nomination sans aucune règle écrite"
      ],
      "reponse": 2,
      "explication": "L'article 6 de la Déclaration de 1789 prévoit l'admission aux emplois publics selon la capacité et sans autre distinction que les vertus et les talents. Les concours publics traduisent cette exigence."
    },
    {
      "id": "val-100",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quelle affirmation décrit correctement l'accueil des personnes étrangères en France ?",
      "choix": [
        "Il supprime automatiquement toutes les obligations légales",
        "Il interdit toute procédure administrative",
        "Il dépend seulement de décisions privées sans contrôle",
        "Il doit concilier hospitalité, respect des droits fondamentaux et application des lois"
      ],
      "reponse": 3,
      "explication": "L'accueil s'inscrit dans un cadre légal qui protège les droits fondamentaux et organise les démarches administratives. La fraternité invite au respect et à la solidarité sans supprimer les règles communes."
    },
    {
      "id": "val-101",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Quelle décision du Conseil constitutionnel est célèbre pour avoir reconnu la valeur constitutionnelle du Préambule de 1958 et des textes auxquels il renvoie ?",
      "choix": [
        "La décision Liberté d'association de 1971",
        "La décision Maastricht II de 1992 uniquement",
        "La décision sur la Nouvelle-Calédonie de 1985 uniquement",
        "La décision Hadopi de 2009 uniquement"
      ],
      "reponse": 0,
      "explication": "La décision du 16 juillet 1971 relative à la liberté d'association a joué un rôle majeur. Elle a confirmé que le contrôle constitutionnel pouvait s'appuyer sur le Préambule et les principes qu'il vise."
    },
    {
      "id": "val-102",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Quelle formule du Préambule de 1946 concerne expressément l'égalité entre les femmes et les hommes ?",
      "choix": [
        "La Nation réserve les droits politiques aux hommes",
        "La loi garantit à la femme, dans tous les domaines, des droits égaux à ceux de l'homme",
        "Les droits des femmes dépendent des coutumes locales",
        "L'égalité femmes-hommes ne relève que du Code du commerce"
      ],
      "reponse": 1,
      "explication": "Le Préambule de 1946 affirme l'égalité des droits entre les femmes et les hommes dans tous les domaines. Cette formule a une valeur constitutionnelle."
    },
    {
      "id": "val-103",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Quel article de la Déclaration de 1789 énonce que la propriété est un droit inviolable et sacré, sauf nécessité publique légalement constatée et indemnité ?",
      "choix": [
        "L'article 8",
        "L'article 14",
        "L'article 17",
        "L'article 3"
      ],
      "reponse": 2,
      "explication": "L'article 17 protège le droit de propriété. Il permet toutefois l'expropriation pour cause de nécessité publique, sous conditions légales et avec une juste indemnité préalable."
    },
    {
      "id": "val-104",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Quelle loi a instauré en 1972 un cadre important de lutte contre le racisme en France ?",
      "choix": [
        "La loi Veil",
        "La loi de séparation des Églises et de l'État",
        "La loi Taubira sur l'esclavage",
        "La loi Pleven"
      ],
      "reponse": 3,
      "explication": "La loi Pleven du 1er juillet 1972 a renforcé la répression des propos et actes racistes. Elle a notamment modifié la loi sur la liberté de la presse de 1881."
    },
    {
      "id": "val-105",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Depuis 2006, quelle évolution légale a renforcé la lutte contre les mariages forcés ?",
      "choix": [
        "L'alignement de l'âge légal du mariage à 18 ans pour les femmes et les hommes",
        "L'abaissement de l'âge du mariage à 13 ans",
        "La suppression du consentement des époux",
        "La possibilité de marier une personne absente sans contrôle"
      ],
      "reponse": 0,
      "explication": "La loi du 4 avril 2006 a fixé l'âge légal du mariage à 18 ans pour les femmes comme pour les hommes. Cette mesure participe à la protection contre les mariages précoces et forcés."
    },
    {
      "id": "val-106",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Quel principe a été reconnu par le Conseil constitutionnel en 2018 au sujet de l'aide désintéressée apportée à des personnes migrantes ?",
      "choix": [
        "Le principe d'indifférence obligatoire",
        "Le principe de fraternité",
        "Le principe de propriété absolue",
        "Le principe de fermeture générale des frontières"
      ],
      "reponse": 1,
      "explication": "Dans une décision de 2018, le Conseil constitutionnel a reconnu la fraternité comme principe à valeur constitutionnelle. Il en a déduit une protection pour l'aide humanitaire désintéressée, dans les limites prévues par la loi."
    },
    {
      "id": "val-107",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Quelle affirmation correspond au principe de nécessité et de proportionnalité des peines issu de la Déclaration de 1789 ?",
      "choix": [
        "Une peine peut être prononcée sans texte légal",
        "La même peine maximale doit toujours être appliquée",
        "La loi ne doit établir que des peines strictement et évidemment nécessaires",
        "Le juge doit ignorer les droits de la défense"
      ],
      "reponse": 2,
      "explication": "L'article 8 de la Déclaration de 1789 impose que les peines soient nécessaires et prévues par la loi. Ce principe protège contre l'arbitraire pénal."
    },
    {
      "id": "val-108",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Quel élément distingue une différence de traitement légale d'une discrimination interdite ?",
      "choix": [
        "Une simple préférence personnelle suffit toujours",
        "La décision n'a jamais besoin d'être justifiée",
        "La tradition locale autorise toute différence",
        "Elle repose sur un objectif légitime et des critères pertinents, sans viser un motif prohibé"
      ],
      "reponse": 3,
      "explication": "Le droit admet certaines différences de traitement lorsqu'elles sont justifiées et proportionnées. Une discrimination est interdite lorsqu'elle repose sur un critère prohibé dans un domaine protégé."
    },
    {
      "id": "val-109",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Quel texte international, ratifié par la France, affirme des droits spécifiques de l'enfant ?",
      "choix": [
        "La Convention internationale des droits de l'enfant de 1989",
        "Le traité de Rome de 1957 uniquement",
        "Le Code de la route",
        "La loi municipale de 1884"
      ],
      "reponse": 0,
      "explication": "La Convention internationale des droits de l'enfant a été adoptée par l'ONU en 1989 et ratifiée par la France. Elle reconnaît notamment le droit de l'enfant à être protégé et entendu selon son âge et sa maturité."
    },
    {
      "id": "val-110",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Quelle affirmation décrit correctement le Service national universel (SNU) en 2025 ?",
      "choix": [
        "Il remplace le droit de vote pour les jeunes",
        "Il est un dispositif d'engagement et de cohésion proposé aux jeunes, sans remplacer la Journée défense et citoyenneté",
        "Il est une peine pénale automatique",
        "Il supprime le recensement citoyen à 16 ans"
      ],
      "reponse": 1,
      "explication": "Le SNU vise la cohésion, l'engagement et la découverte de la citoyenneté. Il ne supprime ni le recensement citoyen ni la Journée défense et citoyenneté."
    },
    {
      "id": "ins-001",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Pour combien d'années le président de la République est-il élu ?",
      "choix": [
        "4 ans",
        "5 ans",
        "6 ans",
        "7 ans"
      ],
      "reponse": 1,
      "explication": "Depuis la réforme du quinquennat (référendum de 2000, appliquée en 2002), le président est élu pour 5 ans au suffrage universel direct, renouvelable une seule fois consécutivement."
    },
    {
      "id": "ins-002",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Combien de députés siègent à l'Assemblée nationale ?",
      "choix": [
        "348",
        "577",
        "925",
        "500"
      ],
      "reponse": 1,
      "explication": "L'Assemblée nationale compte 577 députés élus pour 5 ans au suffrage universel direct, au scrutin majoritaire à deux tours, dans les circonscriptions."
    },
    {
      "id": "ins-003",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Où siège le président de la République française ?",
      "choix": [
        "Au palais de l'Élysée",
        "À l'hôtel Matignon",
        "Au palais Bourbon",
        "Au palais du Luxembourg"
      ],
      "reponse": 0,
      "explication": "Le président réside au palais de l'Élysée. Matignon est la résidence du Premier ministre, le palais Bourbon abrite l'Assemblée nationale et le palais du Luxembourg le Sénat."
    },
    {
      "id": "ins-004",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "À partir de quel âge peut-on voter en France ?",
      "choix": [
        "16 ans",
        "18 ans",
        "21 ans",
        "20 ans"
      ],
      "reponse": 1,
      "explication": "Le droit de vote est acquis à 18 ans depuis la loi du 5 juillet 1974. Il faut être de nationalité française, majeur, inscrit sur les listes électorales et jouir de ses droits civiques."
    },
    {
      "id": "ins-005",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Qui nomme le Premier ministre ?",
      "choix": [
        "L'Assemblée nationale",
        "Le président de la République",
        "Le Conseil constitutionnel",
        "Le Sénat"
      ],
      "reponse": 1,
      "explication": "Selon l'article 8 de la Constitution, le président de la République nomme le Premier ministre. Celui-ci doit disposer de la confiance de l'Assemblée nationale, qui peut le renverser par une motion de censure."
    },
    {
      "id": "ins-006",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Comment les sénateurs sont-ils élus ?",
      "choix": [
        "Au suffrage universel direct",
        "Par tirage au sort",
        "Au suffrage universel indirect par de grands électeurs",
        "Par nomination du président"
      ],
      "reponse": 2,
      "explication": "Les 348 sénateurs sont élus pour 6 ans au suffrage universel indirect par un collège de grands électeurs (députés, conseillers régionaux et départementaux, délégués des conseils municipaux)."
    },
    {
      "id": "ins-007",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Qui est le représentant de l'État dans le département ?",
      "choix": [
        "Le maire",
        "Le président du conseil départemental",
        "Le préfet",
        "Le député"
      ],
      "reponse": 2,
      "explication": "Le préfet, nommé en conseil des ministres, représente l'État et le Gouvernement dans le département. Il veille au respect des lois et à l'ordre public. Le président du conseil départemental dirige la collectivité."
    },
    {
      "id": "ins-008",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quel est le rôle du Conseil constitutionnel ?",
      "choix": [
        "Juger les crimes les plus graves",
        "Vérifier la conformité des lois à la Constitution",
        "Conseiller les maires",
        "Élire le Premier ministre"
      ],
      "reponse": 1,
      "explication": "Composé de 9 membres nommés pour 9 ans (plus les anciens présidents de la République), le Conseil constitutionnel contrôle la conformité des lois à la Constitution et veille à la régularité des élections nationales et des référendums."
    },
    {
      "id": "ins-009",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "À quoi sert le Défenseur des droits ?",
      "choix": [
        "À défendre les intérêts du Gouvernement",
        "À juger les litiges commerciaux",
        "À défendre les droits des personnes face aux administrations et à lutter contre les discriminations",
        "À nommer les préfets"
      ],
      "reponse": 2,
      "explication": "Autorité indépendante créée en 2011, le Défenseur des droits est nommé pour 6 ans non renouvelables. Il peut être saisi gratuitement par toute personne victime d'une discrimination ou en litige avec un service public."
    },
    {
      "id": "ins-010",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle est la double mission du Conseil d'État ?",
      "choix": [
        "Conseiller le Gouvernement et juger les litiges avec l'administration",
        "Voter le budget et contrôler les impôts",
        "Nommer les ministres et dissoudre l'Assemblée",
        "Juger les crimes et délits"
      ],
      "reponse": 0,
      "explication": "Le Conseil d'État est à la fois conseiller juridique du Gouvernement (avis sur les projets de loi et décrets) et juge administratif suprême, statuant en dernier ressort sur les litiges entre les citoyens et l'administration."
    },
    {
      "id": "ins-011",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel tribunal juge la plupart des litiges civils du quotidien en première instance ?",
      "choix": [
        "Le tribunal judiciaire",
        "La Cour de cassation",
        "Le Conseil constitutionnel",
        "La Cour des comptes"
      ],
      "reponse": 0,
      "explication": "Le tribunal judiciaire est la juridiction civile de droit commun. Il traite notamment de nombreux litiges entre particuliers."
    },
    {
      "id": "ins-012",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle juridiction réexamine une affaire déjà jugée lorsqu'une partie fait appel ?",
      "choix": [
        "Le tribunal de police",
        "La cour d'appel",
        "Le conseil municipal",
        "La préfecture"
      ],
      "reponse": 1,
      "explication": "La cour d'appel examine de nouveau les affaires jugées en première instance. C'est l'application du double degré de juridiction."
    },
    {
      "id": "ins-013",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle juridiction juge les crimes les plus graves, comme les meurtres ?",
      "choix": [
        "Le tribunal administratif",
        "Le conseil de prud'hommes",
        "La cour d'assises",
        "Le tribunal de commerce"
      ],
      "reponse": 2,
      "explication": "La cour d'assises juge les crimes. Elle comprend des magistrats professionnels et, en principe, des jurés populaires."
    },
    {
      "id": "ins-014",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel principe signifie qu'une personne est considérée non coupable tant qu'elle n'a pas été condamnée ?",
      "choix": [
        "La séparation des pouvoirs",
        "La continuité du service",
        "La publicité des débats",
        "La présomption d'innocence"
      ],
      "reponse": 3,
      "explication": "La présomption d'innocence protège toute personne poursuivie. Sa culpabilité doit être établie par la justice."
    },
    {
      "id": "ins-015",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel professionnel du droit conseille et défend une personne devant la justice ?",
      "choix": [
        "L'avocat",
        "Le préfet",
        "Le maire",
        "Le député"
      ],
      "reponse": 0,
      "explication": "L'avocat assiste, conseille et représente son client. Il contribue au respect des droits de la défense."
    },
    {
      "id": "ins-016",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel juge intervient notamment pour le divorce, l'autorité parentale et la pension alimentaire ?",
      "choix": [
        "Le juge des enfants",
        "Le juge aux affaires familiales",
        "Le juge d'instruction",
        "Le juge de l'exécution"
      ],
      "reponse": 1,
      "explication": "Le juge aux affaires familiales traite les conflits familiaux. Il intervient notamment en matière de divorce, d'enfants et de pensions."
    },
    {
      "id": "ins-017",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle institution peut être saisie en cas de discrimination ou de difficulté avec un service public ?",
      "choix": [
        "La Cour de cassation",
        "La Cour des comptes",
        "Le Défenseur des droits",
        "Le Sénat"
      ],
      "reponse": 2,
      "explication": "Le Défenseur des droits protège les droits et libertés. Il peut intervenir notamment contre les discriminations et les difficultés avec l'administration."
    },
    {
      "id": "ins-018",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle autorité protège les données personnelles et veille au respect de la vie privée numérique ?",
      "choix": [
        "La Cour d'appel",
        "Le Conseil d'État",
        "La Cour d'assises",
        "La CNIL"
      ],
      "reponse": 3,
      "explication": "La CNIL est la Commission nationale de l'informatique et des libertés. Elle veille à la protection des données personnelles."
    },
    {
      "id": "ins-019",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle juridiction contrôle principalement les comptes publics et l'usage de l'argent public ?",
      "choix": [
        "La Cour des comptes",
        "Le tribunal de police",
        "Le conseil régional",
        "Le Conseil constitutionnel"
      ],
      "reponse": 0,
      "explication": "La Cour des comptes contrôle la régularité et la bonne gestion des comptes publics. Elle informe aussi les citoyens par ses rapports."
    },
    {
      "id": "ins-020",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle assemblée élue administre une commune ?",
      "choix": [
        "Le conseil départemental",
        "Le conseil municipal",
        "Le conseil régional",
        "Le conseil constitutionnel"
      ],
      "reponse": 1,
      "explication": "La commune est administrée par le conseil municipal. Ses membres sont élus par les habitants inscrits sur les listes électorales."
    },
    {
      "id": "ins-021",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Qui élit le maire dans une commune française ?",
      "choix": [
        "Les députés de la circonscription",
        "Le préfet du département",
        "Le conseil municipal",
        "Les sénateurs de la région"
      ],
      "reponse": 2,
      "explication": "Après les élections municipales, le conseil municipal élit le maire et ses adjoints. Le maire est donc choisi par les conseillers municipaux."
    },
    {
      "id": "ins-022",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle fonction le maire exerce-t-il pour enregistrer les naissances, mariages et décès ?",
      "choix": [
        "Comptable public",
        "Juge administratif",
        "Chef de juridiction",
        "Officier d'état civil"
      ],
      "reponse": 3,
      "explication": "Le maire est officier d'état civil. À ce titre, il enregistre les actes de naissance, de mariage et de décès."
    },
    {
      "id": "ins-023",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle collectivité territoriale est administrée par un conseil départemental ?",
      "choix": [
        "Le département",
        "La commune",
        "La région",
        "L'arrondissement"
      ],
      "reponse": 0,
      "explication": "Le département est une collectivité territoriale. Il est administré par un conseil départemental élu."
    },
    {
      "id": "ins-024",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle collectivité territoriale est administrée par un conseil régional ?",
      "choix": [
        "La commune",
        "La région",
        "Le canton",
        "Le quartier"
      ],
      "reponse": 1,
      "explication": "La région est administrée par le conseil régional. Ses membres sont élus lors des élections régionales."
    },
    {
      "id": "ins-025",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel représentant de l'État dirige les services de l'État dans un département ?",
      "choix": [
        "Le maire",
        "Le président du Sénat",
        "Le préfet",
        "Le procureur général"
      ],
      "reponse": 2,
      "explication": "Le préfet représente l'État dans le département. Il coordonne les services déconcentrés de l'État."
    },
    {
      "id": "ins-026",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Dans quel lieu un électeur se rend-il pour voter le jour d'une élection ?",
      "choix": [
        "Au tribunal judiciaire",
        "À la préfecture régionale",
        "À la cour d'appel",
        "Au bureau de vote"
      ],
      "reponse": 3,
      "explication": "Le vote se déroule dans un bureau de vote. C'est le lieu où l'électeur émarge et dépose son bulletin dans l'urne."
    },
    {
      "id": "ins-027",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "À quoi sert l'isoloir dans un bureau de vote ?",
      "choix": [
        "À garantir le secret du vote",
        "À vérifier les impôts locaux",
        "À contrôler les candidatures",
        "À compter les abstentions"
      ],
      "reponse": 0,
      "explication": "L'isoloir permet à l'électeur de choisir son bulletin à l'abri des regards. Il protège le secret du vote."
    },
    {
      "id": "ins-028",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Comment appelle-t-on le fait de ne pas aller voter lors d'une élection ?",
      "choix": [
        "Le vote nul",
        "L'abstention",
        "La procuration",
        "Le référendum"
      ],
      "reponse": 1,
      "explication": "L'abstention désigne le fait de ne pas participer au vote. Elle est mesurée parmi les électeurs inscrits."
    },
    {
      "id": "ins-029",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel document confirme l'inscription d'un citoyen sur les listes électorales ?",
      "choix": [
        "Le livret de famille",
        "Le passeport diplomatique",
        "La carte d'électeur",
        "Le casier judiciaire"
      ],
      "reponse": 2,
      "explication": "La carte d'électeur atteste l'inscription sur les listes électorales. Pour voter, une pièce d'identité peut aussi être demandée selon la commune."
    },
    {
      "id": "ins-030",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel mécanisme permet à un électeur absent de faire voter une autre personne à sa place ?",
      "choix": [
        "Le panachage",
        "Le tirage au sort",
        "Le vote blanc",
        "La procuration"
      ],
      "reponse": 3,
      "explication": "La procuration permet à un électeur de désigner un autre électeur pour voter en son nom. Elle doit être établie selon les règles prévues."
    },
    {
      "id": "ins-031",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle élection permet de choisir les conseillers municipaux ?",
      "choix": [
        "L'élection municipale",
        "L'élection présidentielle",
        "L'élection sénatoriale",
        "L'élection européenne"
      ],
      "reponse": 0,
      "explication": "Les élections municipales servent à élire les conseillers municipaux. Ceux-ci élisent ensuite le maire."
    },
    {
      "id": "ins-032",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle élection permet de choisir les députés à l'Assemblée nationale ?",
      "choix": [
        "L'élection régionale",
        "L'élection législative",
        "L'élection municipale",
        "L'élection prud'homale"
      ],
      "reponse": 1,
      "explication": "Les élections législatives permettent d'élire les députés. Les députés siègent à l'Assemblée nationale."
    },
    {
      "id": "ins-033",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel principe du service public impose de traiter les usagers sans discrimination ?",
      "choix": [
        "La rentabilité",
        "La concurrence",
        "L'égalité",
        "La spécialité pénale"
      ],
      "reponse": 2,
      "explication": "Le principe d'égalité impose un traitement égal des usagers placés dans une situation comparable. Il interdit les discriminations injustifiées."
    },
    {
      "id": "ins-034",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel principe exige qu'un service public essentiel fonctionne de manière régulière ?",
      "choix": [
        "La proportionnalité des peines",
        "La majorité absolue",
        "La collégialité municipale",
        "La continuité"
      ],
      "reponse": 3,
      "explication": "La continuité est un principe du service public. Elle signifie que le service doit fonctionner de façon régulière, même si des adaptations sont possibles."
    },
    {
      "id": "ins-035",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel principe impose aux agents publics de ne pas favoriser une opinion politique ou religieuse ?",
      "choix": [
        "La neutralité",
        "La coutume locale",
        "La préférence nationale",
        "La publicité électorale"
      ],
      "reponse": 0,
      "explication": "La neutralité impose aux agents publics de servir tous les usagers impartialement. Elle est liée à la laïcité du service public."
    },
    {
      "id": "ins-036",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel principe permet au service public d'évoluer avec les besoins de la société ?",
      "choix": [
        "La souveraineté monétaire",
        "L'adaptabilité",
        "L'inamovibilité électorale",
        "Le cumul obligatoire"
      ],
      "reponse": 1,
      "explication": "L'adaptabilité signifie que le service public peut évoluer. Il doit tenir compte des changements techniques, sociaux et des besoins des usagers."
    },
    {
      "id": "ins-037",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel est le rôle principal de la Cour de cassation dans l'ordre judiciaire ?",
      "choix": [
        "Rejuger tous les faits d'une affaire",
        "Élire les magistrats locaux",
        "Contrôler la bonne application du droit",
        "Nommer les jurés populaires"
      ],
      "reponse": 2,
      "explication": "La Cour de cassation ne rejugе pas les faits. Elle vérifie que les juges ont correctement appliqué la règle de droit."
    },
    {
      "id": "ins-038",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle juridiction juge surtout les contraventions les moins graves ?",
      "choix": [
        "La cour d'assises",
        "Le tribunal administratif",
        "La Cour des comptes",
        "Le tribunal de police"
      ],
      "reponse": 3,
      "explication": "Le tribunal de police juge les contraventions. Les infractions plus graves relèvent d'autres juridictions pénales."
    },
    {
      "id": "ins-039",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle juridiction tranche les litiges entre les particuliers et l'administration ?",
      "choix": [
        "Le tribunal administratif",
        "Le conseil de prud'hommes",
        "La cour d'assises",
        "Le tribunal de police"
      ],
      "reponse": 0,
      "explication": "Le tribunal administratif appartient à l'ordre administratif. Il juge notamment les litiges entre les administrés et les administrations."
    },
    {
      "id": "ins-040",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle juridiction règle les litiges individuels entre salariés et employeurs privés ?",
      "choix": [
        "Le tribunal judiciaire",
        "Le conseil de prud'hommes",
        "Le Conseil d'État",
        "La cour d'assises"
      ],
      "reponse": 1,
      "explication": "Le conseil de prud'hommes traite les conflits individuels liés au contrat de travail de droit privé. Il réunit des conseillers issus du monde du travail."
    },
    {
      "id": "ins-041",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "À quoi sert l'aide juridictionnelle ?",
      "choix": [
        "À remplacer le juge par un médiateur",
        "À accélérer automatiquement le procès",
        "À aider financièrement une personne à accéder à la justice",
        "À supprimer les frais d'amende"
      ],
      "reponse": 2,
      "explication": "L'aide juridictionnelle prend en charge tout ou partie des frais de justice pour les personnes ayant de faibles ressources. Elle facilite l'accès au juge."
    },
    {
      "id": "ins-042",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Que signifie le principe de publicité des débats judiciaires ?",
      "choix": [
        "Les jugements sont toujours diffusés à la télévision",
        "Les avocats publient leurs dossiers en ligne",
        "Les jurés annoncent leur vote publiquement",
        "Les audiences sont en principe ouvertes au public"
      ],
      "reponse": 3,
      "explication": "La publicité des débats permet au public d'assister aux audiences. Des exceptions existent, par exemple pour protéger des mineurs ou la vie privée."
    },
    {
      "id": "ins-043",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel magistrat représente la société et dirige l'action publique devant les juridictions pénales ?",
      "choix": [
        "Le procureur de la République",
        "Le juge aux affaires familiales",
        "Le greffier en chef",
        "Le président du conseil régional"
      ],
      "reponse": 0,
      "explication": "Le procureur de la République appartient au ministère public. Il décide des poursuites et représente les intérêts de la société."
    },
    {
      "id": "ins-044",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel juge conduit les investigations dans certaines affaires pénales complexes ?",
      "choix": [
        "Le juge des libertés",
        "Le juge d'instruction",
        "Le juge de paix",
        "Le juge consulaire"
      ],
      "reponse": 1,
      "explication": "Le juge d'instruction mène l'information judiciaire dans les affaires qui le nécessitent. Il instruit à charge et à décharge."
    },
    {
      "id": "ins-045",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel juge intervient pour protéger les mineurs en danger ou juger certains mineurs délinquants ?",
      "choix": [
        "Le juge administratif",
        "Le juge fiscal",
        "Le juge des enfants",
        "Le juge électoral"
      ],
      "reponse": 2,
      "explication": "Le juge des enfants intervient en assistance éducative pour les mineurs en danger. Il intervient aussi dans la justice pénale des mineurs."
    },
    {
      "id": "ins-046",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Combien de membres nommés compose le Conseil constitutionnel, hors anciens présidents de la République membres de droit ?",
      "choix": [
        "Six membres",
        "Huit membres",
        "Douze membres",
        "Neuf membres"
      ],
      "reponse": 3,
      "explication": "Le Conseil constitutionnel comprend neuf membres nommés. Ils sont désignés par le président de la République et les présidents des deux assemblées."
    },
    {
      "id": "ins-047",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle est la durée du mandat des membres nommés du Conseil constitutionnel ?",
      "choix": [
        "Neuf ans",
        "Cinq ans",
        "Six ans",
        "Douze ans"
      ],
      "reponse": 0,
      "explication": "Les membres nommés du Conseil constitutionnel exercent un mandat de neuf ans. Ce mandat n'est pas renouvelable."
    },
    {
      "id": "ins-048",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Qui nomme les membres du Conseil constitutionnel ?",
      "choix": [
        "Les préfets et les maires",
        "Le président de la République et les présidents des deux assemblées",
        "Les électeurs par scrutin direct",
        "La Cour de cassation seule"
      ],
      "reponse": 1,
      "explication": "Trois membres sont nommés par le président de la République, trois par le président de l'Assemblée nationale et trois par le président du Sénat. Cette répartition concerne les neuf membres nommés."
    },
    {
      "id": "ins-049",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Que permet une question prioritaire de constitutionnalité ?",
      "choix": [
        "Choisir directement un ministre",
        "Annuler automatiquement une élection locale",
        "Contester la conformité d'une loi aux droits et libertés constitutionnels",
        "Remplacer un référendum national"
      ],
      "reponse": 2,
      "explication": "La question prioritaire de constitutionnalité permet à un justiciable de contester une loi déjà applicable. Le contrôle porte sur les droits et libertés garantis par la Constitution."
    },
    {
      "id": "ins-050",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle institution contrôle la régularité de l'élection présidentielle et des référendums nationaux ?",
      "choix": [
        "La Cour des comptes",
        "Le Conseil d'État",
        "La CNIL",
        "Le Conseil constitutionnel"
      ],
      "reponse": 3,
      "explication": "Le Conseil constitutionnel veille à la régularité de l'élection présidentielle. Il contrôle aussi les référendums nationaux et proclame leurs résultats."
    },
    {
      "id": "ins-051",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle collectivité est principalement responsable des collèges publics ?",
      "choix": [
        "Le département",
        "La commune",
        "La région",
        "L'État européen"
      ],
      "reponse": 0,
      "explication": "Le département est chargé notamment de la construction, de l'entretien et du fonctionnement matériel des collèges publics. L'enseignement lui-même relève de l'État."
    },
    {
      "id": "ins-052",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle collectivité est principalement responsable des lycées publics ?",
      "choix": [
        "La commune",
        "La région",
        "Le département",
        "L'arrondissement"
      ],
      "reponse": 1,
      "explication": "La région est chargée notamment des lycées publics. Elle s'occupe de leur construction, entretien et fonctionnement matériel."
    },
    {
      "id": "ins-053",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle collectivité est principalement responsable des écoles maternelles et élémentaires publiques ?",
      "choix": [
        "La région",
        "Le département",
        "La commune",
        "Le canton"
      ],
      "reponse": 2,
      "explication": "La commune est responsable des écoles publiques du premier degré pour les bâtiments et le fonctionnement matériel. L'État reste responsable des enseignants."
    },
    {
      "id": "ins-054",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle collectivité joue un rôle majeur en matière d'action sociale, notamment pour l'aide aux personnes âgées ou handicapées ?",
      "choix": [
        "La commune uniquement",
        "La région uniquement",
        "Le Sénat",
        "Le département"
      ],
      "reponse": 3,
      "explication": "Le département est un acteur central de l'action sociale. Il intervient notamment pour l'aide sociale à l'enfance, les personnes âgées et les personnes handicapées."
    },
    {
      "id": "ins-055",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "À quoi sert l'intercommunalité ?",
      "choix": [
        "À permettre à plusieurs communes de gérer ensemble certains services",
        "À supprimer automatiquement les conseils municipaux",
        "À remplacer les départements par des cantons",
        "À élire directement le président de la République"
      ],
      "reponse": 0,
      "explication": "L'intercommunalité permet à des communes de se regrouper pour exercer des compétences en commun. Elle concerne par exemple les transports, les déchets ou l'aménagement."
    },
    {
      "id": "ins-056",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel est le rôle des services déconcentrés de l'État ?",
      "choix": [
        "Voter les lois nationales",
        "Appliquer localement les politiques de l'État",
        "Juger les crimes devant un jury",
        "Contrôler les partis politiques"
      ],
      "reponse": 1,
      "explication": "Les services déconcentrés représentent les ministères sur le territoire. Ils appliquent localement les politiques décidées par l'État."
    },
    {
      "id": "ins-057",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel mode de scrutin attribue les sièges en fonction du pourcentage de voix obtenu par les listes ?",
      "choix": [
        "Le scrutin nominal pur",
        "Le scrutin censitaire",
        "Le scrutin proportionnel",
        "Le tirage au sort civique"
      ],
      "reponse": 2,
      "explication": "Le scrutin proportionnel répartit les sièges selon les voix obtenues par chaque liste. Il favorise la représentation de plusieurs courants politiques."
    },
    {
      "id": "ins-058",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel type de bulletin est généralement considéré comme un vote nul ?",
      "choix": [
        "Une enveloppe contenant un bulletin officiel unique",
        "Une enveloppe déposée après passage par l'isoloir",
        "Une enveloppe correspondant au bon bureau",
        "Un bulletin déchiré ou comportant des signes de reconnaissance"
      ],
      "reponse": 3,
      "explication": "Un vote nul ne peut pas être valablement compté pour un candidat ou une liste. Un bulletin annoté, déchiré ou irrégulier peut être déclaré nul."
    },
    {
      "id": "ins-059",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "À quoi sert un référendum ?",
      "choix": [
        "À consulter directement les électeurs sur une question ou un texte",
        "À nommer les membres du gouvernement",
        "À choisir les magistrats d'un tribunal",
        "À fixer les notes des concours publics"
      ],
      "reponse": 0,
      "explication": "Le référendum permet aux électeurs de répondre directement à une question. Il peut porter sur certains textes ou décisions prévus par la Constitution."
    },
    {
      "id": "ins-060",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quel principe protège les juges contre les pressions des autres pouvoirs dans leurs décisions ?",
      "choix": [
        "La tutelle préfectorale",
        "L'indépendance de la justice",
        "La solidarité gouvernementale",
        "La discipline budgétaire"
      ],
      "reponse": 1,
      "explication": "L'indépendance de la justice garantit que les magistrats jugent selon le droit et leur conscience. Elle protège la fonction de juger contre les pressions extérieures."
    },
    {
      "id": "ins-061",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Que signifie le double degré de juridiction ?",
      "choix": [
        "Toute décision est rendue par deux juges le même jour",
        "Un procès pénal comporte toujours deux jurys",
        "Une affaire peut en principe être réexaminée par une juridiction supérieure",
        "Le Parlement vote deux fois chaque loi"
      ],
      "reponse": 2,
      "explication": "Le double degré de juridiction permet généralement de faire appel d'une décision. L'affaire est alors réexaminée par une juridiction supérieure."
    },
    {
      "id": "ins-062",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Que signifie la gratuité de la justice en France ?",
      "choix": [
        "Les avocats sont toujours payés par l'État",
        "Les amendes pénales sont supprimées",
        "Les expertises privées sont gratuites",
        "Les juges ne sont pas rémunérés par les parties"
      ],
      "reponse": 3,
      "explication": "La gratuité de la justice signifie notamment que les justiciables ne paient pas les juges. Des frais peuvent toutefois rester à la charge des parties, comme les honoraires d'avocat."
    },
    {
      "id": "ins-063",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quel est le sommet de l'ordre administratif français ?",
      "choix": [
        "Le Conseil d'État",
        "La Cour de cassation",
        "La cour d'appel",
        "Le tribunal judiciaire"
      ],
      "reponse": 0,
      "explication": "Le Conseil d'État est la juridiction suprême de l'ordre administratif. Il juge notamment certains recours contre les décisions administratives."
    },
    {
      "id": "ins-064",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quel contrôle le Conseil constitutionnel exerce-t-il sur les lois avant leur promulgation ?",
      "choix": [
        "Un contrôle de leur opportunité politique",
        "Un contrôle de constitutionnalité",
        "Un contrôle de leur rentabilité financière",
        "Un contrôle de leur popularité électorale"
      ],
      "reponse": 1,
      "explication": "Le Conseil constitutionnel peut vérifier qu'une loi respecte la Constitution avant sa promulgation. Il ne juge pas l'opportunité politique de la loi."
    },
    {
      "id": "ins-065",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Comment le renouvellement des membres nommés du Conseil constitutionnel est-il organisé ?",
      "choix": [
        "Tous les membres sont remplacés chaque année",
        "Le renouvellement dépend d'un tirage au sort mensuel",
        "Il se fait par tiers tous les trois ans",
        "Il suit chaque élection municipale"
      ],
      "reponse": 2,
      "explication": "Les membres nommés du Conseil constitutionnel ont un mandat de neuf ans. Le renouvellement s'effectue par tiers tous les trois ans."
    },
    {
      "id": "ins-066",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle juridiction intervient comme filtre avant qu'une question prioritaire de constitutionnalité soit transmise au Conseil constitutionnel ?",
      "choix": [
        "La Cour des comptes uniquement",
        "Le conseil municipal",
        "Le tribunal de police",
        "Le Conseil d'État ou la Cour de cassation"
      ],
      "reponse": 3,
      "explication": "Une QPC est d'abord examinée par la juridiction saisie, puis éventuellement par le Conseil d'État ou la Cour de cassation. Ces juridictions suprêmes peuvent la transmettre au Conseil constitutionnel."
    },
    {
      "id": "ins-067",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle institution peut contrôler les lieux de privation de liberté grâce à une autorité indépendante spécialisée intégrée à ses missions ?",
      "choix": [
        "Le Défenseur des droits",
        "La CNIL",
        "Le Conseil régional",
        "Le tribunal de commerce"
      ],
      "reponse": 0,
      "explication": "Le Contrôleur général des lieux de privation de liberté a été intégré au Défenseur des droits. Cette mission vise à protéger les droits des personnes privées de liberté."
    },
    {
      "id": "ins-068",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Dans quel cas la CNIL peut-elle intervenir auprès d'un organisme ?",
      "choix": [
        "Pour choisir son conseil d'administration",
        "Pour contrôler le respect des règles sur les données personnelles",
        "Pour fixer le montant des impôts locaux",
        "Pour nommer les magistrats administratifs"
      ],
      "reponse": 1,
      "explication": "La CNIL peut contrôler les traitements de données personnelles. Elle peut conseiller, mettre en demeure ou sanctionner selon les cas prévus par la loi."
    },
    {
      "id": "ins-069",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quel est le rôle principal du préfet à l'égard des actes des collectivités territoriales ?",
      "choix": [
        "Les rédiger à la place des élus",
        "Les voter avant leur publication",
        "Exercer le contrôle de légalité",
        "Les annuler seul sans juge"
      ],
      "reponse": 2,
      "explication": "Le préfet exerce le contrôle de légalité sur les actes des collectivités territoriales. S'il estime un acte illégal, il peut saisir le juge administratif."
    },
    {
      "id": "ins-070",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle affirmation décrit correctement le vote blanc en France ?",
      "choix": [
        "Il est automatiquement ajouté au candidat arrivé en tête",
        "Il annule tous les suffrages exprimés du bureau",
        "Il remplace une procuration non utilisée",
        "Il est décompté séparément mais n'est pas un suffrage exprimé"
      ],
      "reponse": 3,
      "explication": "Le vote blanc est comptabilisé séparément des votes nuls. Il n'est pas pris en compte dans les suffrages exprimés."
    },
    {
      "id": "ins-071",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle élection française utilise un scrutin majoritaire uninominal à deux tours ?",
      "choix": [
        "L'élection législative",
        "L'élection européenne",
        "L'élection régionale",
        "L'élection municipale dans les grandes communes"
      ],
      "reponse": 0,
      "explication": "Les députés sont élus dans des circonscriptions au scrutin majoritaire uninominal à deux tours. Ce mode de scrutin désigne un élu par circonscription."
    },
    {
      "id": "ins-072",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Pour quelle durée les conseillers régionaux sont-ils élus ?",
      "choix": [
        "Quatre ans",
        "Six ans",
        "Sept ans",
        "Neuf ans"
      ],
      "reponse": 1,
      "explication": "Les conseillers régionaux sont élus pour six ans. Ils siègent au conseil régional de leur région."
    },
    {
      "id": "ins-073",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle affirmation sur l'inscription sur les listes électorales est correcte ?",
      "choix": [
        "Elle se fait uniquement le jour du vote",
        "Elle est réservée aux propriétaires",
        "Elle est nécessaire pour pouvoir voter",
        "Elle remplace la nationalité française"
      ],
      "reponse": 2,
      "explication": "Pour voter, il faut être inscrit sur les listes électorales de sa commune ou de son consulat. L'inscription permet d'être rattaché à un bureau de vote."
    },
    {
      "id": "ins-074",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle règle caractérise le secret du vote ?",
      "choix": [
        "L'électeur doit montrer son bulletin au président du bureau",
        "Le vote doit être annoncé oralement aux assesseurs",
        "Les bulletins sont signés par les électeurs",
        "Personne ne doit pouvoir connaître le choix de l'électeur"
      ],
      "reponse": 3,
      "explication": "Le secret du vote garantit la liberté de l'électeur. L'isoloir, l'enveloppe et l'urne contribuent à protéger ce secret."
    },
    {
      "id": "ins-075",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle obligation s'impose à un fonctionnaire dans l'exercice d'un service public ?",
      "choix": [
        "Servir l'intérêt général avec impartialité",
        "Soutenir publiquement un parti au guichet",
        "Refuser les usagers sans motif légal",
        "Adapter la loi selon ses préférences"
      ],
      "reponse": 0,
      "explication": "Un fonctionnaire doit servir l'intérêt général et respecter ses obligations professionnelles. L'impartialité et la neutralité s'imposent dans le service public."
    },
    {
      "id": "ins-076",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle collectivité territoriale correspond généralement au niveau le plus proche des habitants ?",
      "choix": [
        "La commune",
        "La région",
        "Le Sénat",
        "L'Union européenne"
      ],
      "reponse": 0,
      "explication": "La commune est l'échelon local de base. Elle gère de nombreux services de proximité, comme l'état civil, certaines écoles et des équipements locaux."
    },
    {
      "id": "ins-077",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Que vote notamment le conseil municipal chaque année ?",
      "choix": [
        "Les arrêts de la Cour de cassation",
        "Le budget de la commune",
        "La Constitution européenne",
        "Les peines pénales"
      ],
      "reponse": 1,
      "explication": "Le conseil municipal règle les affaires de la commune par ses délibérations. Il vote notamment le budget communal et les projets locaux."
    },
    {
      "id": "ins-078",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel pouvoir permet au maire d'assurer le bon ordre, la sécurité et la salubrité publiques dans sa commune ?",
      "choix": [
        "Le pouvoir diplomatique",
        "Le pouvoir de cassation",
        "Le pouvoir de police municipale",
        "Le pouvoir de dissolution"
      ],
      "reponse": 2,
      "explication": "Le maire dispose de pouvoirs de police administrative municipale. Ils servent à prévenir les troubles à l'ordre public dans la commune."
    },
    {
      "id": "ins-079",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Que désigne un EPCI dans l'organisation locale française ?",
      "choix": [
        "Une juridiction pénale spéciale",
        "Une école publique nationale",
        "Un fichier électoral européen",
        "Un établissement regroupant plusieurs communes"
      ],
      "reponse": 3,
      "explication": "Un EPCI est un établissement public de coopération intercommunale. Il permet à plusieurs communes d'exercer ensemble certaines compétences."
    },
    {
      "id": "ins-080",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle collectivité entretient principalement les routes départementales ?",
      "choix": [
        "Le département",
        "Le Parlement européen",
        "Le tribunal administratif",
        "La Cour des comptes"
      ],
      "reponse": 0,
      "explication": "Le département est notamment compétent pour les routes départementales. Il intervient aussi dans l'action sociale et les collèges."
    },
    {
      "id": "ins-081",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle collectivité organise de nombreux trains express régionaux, les TER ?",
      "choix": [
        "La commune",
        "La région",
        "Le tribunal judiciaire",
        "Le Conseil constitutionnel"
      ],
      "reponse": 1,
      "explication": "La région joue un rôle important dans les transports régionaux. Elle organise notamment les TER avec les opérateurs concernés."
    },
    {
      "id": "ins-082",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Que signifie la décentralisation ?",
      "choix": [
        "La suppression des élections locales",
        "Le remplacement des communes par l'État",
        "Le transfert de compétences de l'État vers des collectivités territoriales",
        "La nomination des maires par les tribunaux"
      ],
      "reponse": 2,
      "explication": "La décentralisation donne des compétences propres aux collectivités territoriales. Celles-ci les exercent avec des assemblées élues."
    },
    {
      "id": "ins-083",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Pour quelle durée les conseillers municipaux sont-ils élus ?",
      "choix": [
        "Trois ans",
        "Quatre ans",
        "Cinq ans",
        "Six ans"
      ],
      "reponse": 3,
      "explication": "Les conseillers municipaux sont élus pour six ans. Ils participent aux décisions de la commune et élisent le maire."
    },
    {
      "id": "ins-084",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle élection permet de désigner les conseillers régionaux ?",
      "choix": [
        "Les élections régionales",
        "Les élections prud'homales",
        "Les élections sénatoriales",
        "Les élections consulaires"
      ],
      "reponse": 0,
      "explication": "Les élections régionales servent à élire les conseillers régionaux. Ceux-ci siègent au conseil régional."
    },
    {
      "id": "ins-085",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle élection permet de désigner les conseillers départementaux ?",
      "choix": [
        "L'élection européenne",
        "L'élection départementale",
        "L'élection présidentielle",
        "Le référendum constitutionnel"
      ],
      "reponse": 1,
      "explication": "Les conseillers départementaux sont élus lors des élections départementales. Ils administrent le département au sein du conseil départemental."
    },
    {
      "id": "ins-086",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Qui les élections européennes permettent-elles d'élire en France ?",
      "choix": [
        "Les préfets de région",
        "Les membres du Conseil d'État",
        "Les députés européens",
        "Les maires d'arrondissement"
      ],
      "reponse": 2,
      "explication": "Les élections européennes permettent d'élire les représentants français au Parlement européen. Elles ont lieu dans l'ensemble des États membres de l'Union européenne."
    },
    {
      "id": "ins-087",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Dans un référendum national, que font les électeurs ?",
      "choix": [
        "Ils choisissent les magistrats professionnels",
        "Ils tirent au sort les ministres",
        "Ils rédigent le budget de l'État",
        "Ils répondent directement à une question posée"
      ],
      "reponse": 3,
      "explication": "Le référendum permet aux électeurs de se prononcer directement. La réponse se fait généralement par oui ou par non."
    },
    {
      "id": "ins-088",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Où siège l'Assemblée nationale ?",
      "choix": [
        "Au Palais Bourbon",
        "Au Palais du Luxembourg",
        "À Matignon",
        "À l'Hôtel de Ville de Paris"
      ],
      "reponse": 0,
      "explication": "L'Assemblée nationale siège au Palais Bourbon, à Paris. Les députés y débattent et votent la loi."
    },
    {
      "id": "ins-089",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Où siège le Sénat ?",
      "choix": [
        "Au Palais Bourbon",
        "Au Palais du Luxembourg",
        "À l'Élysée",
        "À la Cour de cassation"
      ],
      "reponse": 1,
      "explication": "Le Sénat siège au Palais du Luxembourg, à Paris. Il participe au vote de la loi avec l'Assemblée nationale."
    },
    {
      "id": "ins-090",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel lieu est associé aux services du Premier ministre ?",
      "choix": [
        "Le Palais du Luxembourg",
        "Le Panthéon",
        "Matignon",
        "Le Palais Bourbon"
      ],
      "reponse": 2,
      "explication": "Matignon désigne couramment l'hôtel de Matignon et les services du Premier ministre. C'est un lieu central du gouvernement."
    },
    {
      "id": "ins-091",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel vote peut obliger le gouvernement à démissionner devant l'Assemblée nationale ?",
      "choix": [
        "Un vote blanc",
        "Une question écrite",
        "Une investiture municipale",
        "Une motion de censure"
      ],
      "reponse": 3,
      "explication": "Une motion de censure adoptée par l'Assemblée nationale met en cause la responsabilité du gouvernement. Si elle est adoptée, le gouvernement doit démissionner."
    },
    {
      "id": "ins-092",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle juridiction traite notamment les litiges entre commerçants ou sociétés commerciales ?",
      "choix": [
        "Le tribunal de commerce",
        "Le conseil régional",
        "La cour d'assises",
        "Le bureau de vote"
      ],
      "reponse": 0,
      "explication": "Le tribunal de commerce juge de nombreux litiges commerciaux. Il intervient par exemple dans des conflits entre commerçants ou entreprises."
    },
    {
      "id": "ins-093",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Comment appelle-t-on l'ensemble des magistrats qui défendent l'intérêt de la société dans les procès pénaux ?",
      "choix": [
        "Le conseil municipal",
        "Le ministère public",
        "Le jury électoral",
        "La commission régionale"
      ],
      "reponse": 1,
      "explication": "Le ministère public est composé notamment de procureurs. Il représente les intérêts de la société et peut exercer l'action publique."
    },
    {
      "id": "ins-094",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Que permettent les droits de la défense dans un procès ?",
      "choix": [
        "Empêcher toute audience publique",
        "Supprimer automatiquement la peine",
        "Être informé des accusations et pouvoir se défendre",
        "Remplacer le juge par le préfet"
      ],
      "reponse": 2,
      "explication": "Les droits de la défense garantissent qu'une personne puisse connaître ce qui lui est reproché. Elle doit pouvoir présenter ses arguments et être assistée si nécessaire."
    },
    {
      "id": "ins-095",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel juge peut annuler une décision administrative illégale prise par une administration ?",
      "choix": [
        "Le conseil de prud'hommes",
        "La cour d'assises",
        "Le tribunal de commerce",
        "Le tribunal administratif"
      ],
      "reponse": 3,
      "explication": "Le tribunal administratif contrôle la légalité de nombreuses décisions administratives. Il peut les annuler si elles sont contraires au droit."
    },
    {
      "id": "ins-096",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Que désigne la fonction publique ?",
      "choix": [
        "L'ensemble des agents qui travaillent pour des personnes publiques et des services publics",
        "Un parti politique représenté au Parlement",
        "Une liste de candidats aux élections européennes",
        "Une juridiction spécialisée dans les crimes"
      ],
      "reponse": 0,
      "explication": "La fonction publique regroupe les agents publics de l'État, des collectivités territoriales et des hôpitaux publics. Elle sert l'intérêt général."
    },
    {
      "id": "ins-097",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Que sont les services déconcentrés de l'État ?",
      "choix": [
        "Des entreprises privées sans contrôle public",
        "Des services de l'État présents localement dans les territoires",
        "Des juridictions composées uniquement de jurés",
        "Des conseils municipaux élus au niveau national"
      ],
      "reponse": 1,
      "explication": "Les services déconcentrés sont des services de l'État implantés localement. Ils mettent en œuvre les politiques publiques sur le territoire."
    },
    {
      "id": "ins-098",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Que signifie le sigle CNIL ?",
      "choix": [
        "Conseil national des impôts locaux",
        "Cour nationale de l'instruction législative",
        "Commission nationale de l'informatique et des libertés",
        "Comité national des institutions locales"
      ],
      "reponse": 2,
      "explication": "La CNIL est la Commission nationale de l'informatique et des libertés. Elle protège les données personnelles et les libertés numériques."
    },
    {
      "id": "ins-099",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle autorité publique contrôle notamment certaines déclarations de patrimoine et d'intérêts des responsables publics ?",
      "choix": [
        "La cour d'appel",
        "Le conseil municipal",
        "Le tribunal de police",
        "La HATVP"
      ],
      "reponse": 3,
      "explication": "La HATVP est la Haute Autorité pour la transparence de la vie publique. Elle contribue à prévenir les conflits d'intérêts et à renforcer la transparence."
    },
    {
      "id": "ins-100",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel type de document la Cour des comptes publie-t-elle régulièrement pour informer les citoyens ?",
      "choix": [
        "Des rapports publics",
        "Des bulletins de vote",
        "Des actes de naissance",
        "Des permis de conduire"
      ],
      "reponse": 0,
      "explication": "La Cour des comptes publie des rapports sur la gestion publique. Ces rapports contribuent à l'information des citoyens et du Parlement."
    },
    {
      "id": "ins-101",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "La carte d'électeur est-elle toujours le seul document indispensable pour voter ?",
      "choix": [
        "Oui, aucune autre preuve n'est admise",
        "Non, l'inscription sur la liste électorale et une pièce d'identité peuvent suffire selon les règles applicables",
        "Oui, elle remplace toute pièce d'identité",
        "Non, il faut obligatoirement un passeport diplomatique"
      ],
      "reponse": 1,
      "explication": "La carte d'électeur facilite les opérations de vote, mais l'essentiel est d'être inscrit sur la liste électorale. Une pièce d'identité est généralement demandée, surtout dans les communes de 1 000 habitants ou plus."
    },
    {
      "id": "ins-102",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Dans les communes de 1 000 habitants ou plus, quel mode de scrutin est utilisé aux élections municipales ?",
      "choix": [
        "Un tirage au sort parmi les habitants",
        "Un scrutin uninominal dans toute la commune",
        "Un scrutin de liste à deux tours avec une part proportionnelle et une prime majoritaire",
        "Un vote indirect par les sénateurs"
      ],
      "reponse": 2,
      "explication": "Dans ces communes, les électeurs votent pour des listes. La liste arrivée en tête obtient une prime majoritaire, puis les autres sièges sont répartis à la proportionnelle."
    },
    {
      "id": "ins-103",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Comment les conseillers départementaux sont-ils élus dans chaque canton ?",
      "choix": [
        "Par une liste nationale unique",
        "Par les seuls maires du département",
        "Par un jury de citoyens tirés au sort",
        "Par un binôme femme-homme"
      ],
      "reponse": 3,
      "explication": "Chaque canton élit un binôme composé d'une femme et d'un homme. Cette règle vise à assurer la parité au conseil départemental."
    },
    {
      "id": "ins-104",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle règle caractérise les élections régionales en France ?",
      "choix": [
        "Elles se font au scrutin de liste avec représentation proportionnelle et prime majoritaire",
        "Elles désignent directement les préfets",
        "Elles se déroulent chaque année",
        "Elles sont réservées aux conseillers municipaux"
      ],
      "reponse": 0,
      "explication": "Les régionales utilisent des listes avec une prime majoritaire pour la liste arrivée en tête. Les sièges sont ensuite répartis en tenant compte des résultats par section départementale."
    },
    {
      "id": "ins-105",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel mode de vote désigne le président de la République en France ?",
      "choix": [
        "Un vote du seul Sénat",
        "Un scrutin universel direct à deux tours",
        "Une nomination par le Premier ministre",
        "Un tirage au sort national"
      ],
      "reponse": 1,
      "explication": "Le président de la République est élu au suffrage universel direct. Si aucun candidat n'obtient la majorité absolue au premier tour, un second tour est organisé."
    },
    {
      "id": "ins-106",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Lors des élections législatives, que représente une circonscription ?",
      "choix": [
        "Une salle d'audience de la Cour de cassation",
        "Une commune obligatoirement entière",
        "Un territoire qui élit un député",
        "Un ministère dirigé par un préfet"
      ],
      "reponse": 2,
      "explication": "Les députés sont élus dans des circonscriptions législatives. Chaque circonscription désigne un député à l'Assemblée nationale."
    },
    {
      "id": "ins-107",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle affirmation est correcte concernant le renouvellement du Sénat ?",
      "choix": [
        "Tous les sénateurs sont élus pour trois ans",
        "Le Sénat est renouvelé seulement après chaque présidentielle",
        "Les sénateurs sont nommés à vie",
        "Le Sénat est renouvelé par moitié tous les trois ans"
      ],
      "reponse": 3,
      "explication": "Les sénateurs ont un mandat de six ans. Le Sénat est renouvelé par moitié tous les trois ans, ce qui assure une certaine continuité."
    },
    {
      "id": "ins-108",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel mode de scrutin est utilisé en France pour les élections européennes ?",
      "choix": [
        "Un scrutin proportionnel de liste",
        "Un scrutin majoritaire par canton",
        "Un vote des seuls députés nationaux",
        "Un référendum local"
      ],
      "reponse": 0,
      "explication": "En France, les élections européennes se déroulent au scrutin proportionnel de liste. Les sièges sont attribués selon les voix obtenues par les listes."
    },
    {
      "id": "ins-109",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "En règle générale, jusqu'à quand peut-on s'inscrire sur les listes électorales avant un scrutin ?",
      "choix": [
        "Uniquement le matin du vote",
        "Jusqu'au sixième vendredi précédant le scrutin, sauf cas particuliers",
        "Uniquement cinq ans avant l'élection",
        "Seulement après la publication des résultats"
      ],
      "reponse": 1,
      "explication": "La règle générale fixe une limite au sixième vendredi avant le scrutin. Des situations particulières permettent parfois une inscription plus tardive."
    },
    {
      "id": "ins-110",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Depuis les règles récentes sur la procuration, où le mandataire doit-il voter pour la personne qui lui donne procuration ?",
      "choix": [
        "Dans n'importe quel bureau de vote européen",
        "Au tribunal judiciaire le plus proche",
        "Dans le bureau de vote de l'électeur qui a donné procuration",
        "Au siège de la préfecture"
      ],
      "reponse": 2,
      "explication": "Le mandataire peut être inscrit dans une autre commune que le mandant. Mais il doit se rendre dans le bureau de vote du mandant pour voter à sa place."
    },
    {
      "id": "ins-111",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Qu'est-ce que le référendum d'initiative partagée, appelé RIP ?",
      "choix": [
        "Une élection organisée uniquement par les régions",
        "Une consultation réservée aux maires",
        "Un référendum décidé librement par une seule association",
        "Une procédure associant une initiative parlementaire et le soutien d'électeurs"
      ],
      "reponse": 3,
      "explication": "Le RIP est prévu par la Constitution. Il suppose notamment une proposition soutenue par une fraction des parlementaires puis par un nombre important d'électeurs."
    },
    {
      "id": "ins-112",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle juridiction juge en première instance certains crimes punis de quinze ou vingt ans de réclusion, sans jury populaire ?",
      "choix": [
        "La cour criminelle départementale",
        "Le tribunal de commerce",
        "La cour administrative d'appel",
        "Le conseil municipal"
      ],
      "reponse": 0,
      "explication": "La cour criminelle départementale est composée de magistrats professionnels. Elle juge certains crimes en première instance, notamment pour réduire les délais de jugement."
    },
    {
      "id": "ins-113",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle particularité distingue traditionnellement la cour d'assises en première instance ?",
      "choix": [
        "Elle juge uniquement les impôts locaux",
        "Elle associe des magistrats professionnels et des jurés citoyens",
        "Elle dépend du conseil régional",
        "Elle remplace le Parlement pour voter la loi"
      ],
      "reponse": 1,
      "explication": "La cour d'assises juge les crimes les plus graves. Elle comprend des magistrats professionnels et, en principe, des jurés tirés au sort."
    },
    {
      "id": "ins-114",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Que peut faire la Cour de cassation si elle constate une mauvaise application du droit ?",
      "choix": [
        "Nommer un nouveau maire",
        "Voter une nouvelle loi",
        "Casser la décision et renvoyer l'affaire devant une autre juridiction",
        "Organiser un référendum local"
      ],
      "reponse": 2,
      "explication": "La Cour de cassation contrôle l'application du droit. Si elle casse une décision, l'affaire peut être rejugée par une juridiction de renvoi."
    },
    {
      "id": "ins-115",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle juridiction examine en appel de nombreux jugements rendus par les tribunaux administratifs ?",
      "choix": [
        "La cour d'assises",
        "Le tribunal de commerce",
        "Le conseil de prud'hommes",
        "La cour administrative d'appel"
      ],
      "reponse": 3,
      "explication": "La cour administrative d'appel appartient à l'ordre administratif. Elle réexamine de nombreuses décisions des tribunaux administratifs."
    },
    {
      "id": "ins-116",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Que signifie une mise en examen dans une information judiciaire ?",
      "choix": [
        "Une personne est officiellement mise en cause par le juge d'instruction lorsqu'il existe des indices graves ou concordants",
        "Une personne est automatiquement condamnée",
        "Une personne devient ministre de la Justice",
        "Une personne est radiée des listes électorales"
      ],
      "reponse": 0,
      "explication": "La mise en examen ne vaut pas culpabilité. Elle signifie qu'il existe des indices justifiant que la personne participe à la procédure avec des droits de défense renforcés."
    },
    {
      "id": "ins-117",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Après une plainte ou une enquête, quelle décision peut prendre le procureur de la République ?",
      "choix": [
        "Dissoudre l'Assemblée nationale",
        "Classer l'affaire, proposer une alternative ou engager des poursuites",
        "Élire les jurés de la cour d'assises",
        "Promulguer une loi"
      ],
      "reponse": 1,
      "explication": "Le procureur apprécie les suites à donner à une affaire pénale. Il peut classer sans suite, proposer une mesure alternative ou poursuivre devant une juridiction."
    },
    {
      "id": "ins-118",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Qui sont les juges consulaires des tribunaux de commerce ?",
      "choix": [
        "Des préfets nommés par décret",
        "Des sénateurs en mission temporaire",
        "Des juges élus issus du monde économique et commercial",
        "Des jurés tirés au sort pour chaque procès"
      ],
      "reponse": 2,
      "explication": "Les tribunaux de commerce sont composés de juges consulaires. Ce sont des acteurs du monde économique élus selon des règles spécifiques."
    },
    {
      "id": "ins-119",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle est une caractéristique du conseil de prud'hommes ?",
      "choix": [
        "Il siège uniquement au Parlement européen",
        "Il juge les crimes avec un jury populaire",
        "Il contrôle les fichiers informatiques de l'État",
        "Il réunit des conseillers représentant salariés et employeurs"
      ],
      "reponse": 3,
      "explication": "Le conseil de prud'hommes est une juridiction paritaire. Il traite les litiges individuels du travail avec des conseillers issus des salariés et des employeurs."
    },
    {
      "id": "ins-120",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Dans un procès pénal, qui doit en principe prouver la culpabilité ?",
      "choix": [
        "L'accusation",
        "Le maire de la commune",
        "La personne poursuivie elle-même",
        "Le conseil régional"
      ],
      "reponse": 0,
      "explication": "La charge de la preuve pèse sur l'accusation. La personne poursuivie bénéficie de la présomption d'innocence tant que sa culpabilité n'est pas établie."
    },
    {
      "id": "ins-121",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Pourquoi dit-on qu'une autorité administrative indépendante est indépendante ?",
      "choix": [
        "Parce qu'elle peut remplacer le gouvernement",
        "Parce qu'elle n'est pas soumise à des instructions hiérarchiques du gouvernement dans ses décisions",
        "Parce qu'elle vote les lois à la place du Parlement",
        "Parce qu'elle élit directement les magistrats"
      ],
      "reponse": 1,
      "explication": "Une autorité administrative indépendante agit au nom de l'État mais avec une autonomie de décision. La CNIL ou la HATVP en sont des exemples."
    },
    {
      "id": "ins-122",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Que peut faire la CNIL lorsqu'un organisme ne respecte pas les règles sur les données personnelles ?",
      "choix": [
        "Organiser des élections municipales",
        "Attribuer les logements sociaux",
        "Contrôler, mettre en demeure ou sanctionner selon les cas",
        "Annuler une condamnation pénale"
      ],
      "reponse": 2,
      "explication": "La CNIL dispose de pouvoirs de contrôle et de sanction. Elle peut intervenir pour faire respecter le RGPD et la loi Informatique et libertés."
    },
    {
      "id": "ins-123",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel est l'objectif principal de la HATVP ?",
      "choix": [
        "Fixer les programmes scolaires",
        "Juger les crimes commis par les mineurs",
        "Distribuer les cartes d'électeur",
        "Renforcer la transparence et prévenir les conflits d'intérêts dans la vie publique"
      ],
      "reponse": 3,
      "explication": "La HATVP contrôle notamment des déclarations d'intérêts et de patrimoine. Elle aide à prévenir les situations de conflit d'intérêts."
    },
    {
      "id": "ins-124",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle mission la Cour des comptes exerce-t-elle aussi sur les comptes de l'État ?",
      "choix": [
        "Elle certifie les comptes de l'État",
        "Elle élit les ministres du budget",
        "Elle fixe les taux d'impôt à la place du Parlement",
        "Elle juge les crimes financiers avec un jury"
      ],
      "reponse": 0,
      "explication": "La Cour des comptes certifie les comptes de l'État et du régime général de la sécurité sociale. Elle apprécie leur régularité, leur sincérité et leur fidélité."
    },
    {
      "id": "ins-125",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Que permet l'article 49, alinéa 3, de la Constitution ?",
      "choix": [
        "Supprimer définitivement le Sénat",
        "Faire adopter un texte sauf si une motion de censure est adoptée",
        "Nommer les maires des grandes villes",
        "Annuler une élection européenne"
      ],
      "reponse": 1,
      "explication": "Le gouvernement peut engager sa responsabilité sur un texte. Le texte est considéré comme adopté sauf si l'Assemblée nationale adopte une motion de censure."
    },
    {
      "id": "ins-126",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle assemblée peut être dissoute par le président de la République ?",
      "choix": [
        "Le Sénat",
        "Le Conseil constitutionnel",
        "L'Assemblée nationale",
        "La Cour de cassation"
      ],
      "reponse": 2,
      "explication": "La dissolution concerne l'Assemblée nationale. Elle provoque l'organisation de nouvelles élections législatives."
    },
    {
      "id": "ins-127",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Que désigne la cohabitation sous la Ve République ?",
      "choix": [
        "La réunion annuelle des maires et des préfets",
        "Le partage d'une circonscription par deux députés",
        "La fusion du Sénat et de l'Assemblée nationale",
        "Une situation où le président et la majorité de l'Assemblée nationale appartiennent à des camps opposés"
      ],
      "reponse": 3,
      "explication": "En cohabitation, le président doit tenir compte d'une majorité parlementaire opposée. Le Premier ministre est alors issu de cette majorité."
    },
    {
      "id": "ins-128",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Dans quel contexte l'article 16 de la Constitution peut-il donner des pouvoirs exceptionnels au président de la République ?",
      "choix": [
        "En cas de crise grave menaçant les institutions ou la Nation, lorsque le fonctionnement régulier des pouvoirs publics est interrompu",
        "À chaque changement de gouvernement",
        "Pour toutes les lois de finances ordinaires",
        "Pour organiser les élections municipales"
      ],
      "reponse": 0,
      "explication": "L'article 16 vise des circonstances exceptionnelles très graves. Il prévoit des consultations préalables et des contrôles pour encadrer ces pouvoirs."
    },
    {
      "id": "ins-129",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Dans la procédure de révision constitutionnelle de l'article 89, quelle majorité est requise au Congrès pour approuver un projet de révision ?",
      "choix": [
        "La majorité simple des députés présents",
        "La majorité des trois cinquièmes des suffrages exprimés",
        "L'unanimité des sénateurs",
        "La majorité des maires de France"
      ],
      "reponse": 1,
      "explication": "Pour un projet de révision, le président peut choisir le Congrès plutôt que le référendum. Dans ce cas, l'approbation exige la majorité des trois cinquièmes des suffrages exprimés."
    },
    {
      "id": "ins-130",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Qu'est-ce que le Congrès du Parlement réuni à Versailles ?",
      "choix": [
        "Une juridiction administrative spéciale",
        "Une réunion des seuls présidents de région",
        "La réunion des députés et des sénateurs dans certaines procédures constitutionnelles",
        "Un bureau de vote pour les Français de l'étranger"
      ],
      "reponse": 2,
      "explication": "Le Congrès réunit les deux assemblées parlementaires à Versailles. Il intervient notamment pour certaines révisions constitutionnelles ou pour entendre une déclaration du président de la République."
    },
    {
      "id": "ins-131",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Que contient principalement une loi de finances ?",
      "choix": [
        "La liste des jurés d'assises",
        "Le règlement intérieur des conseils municipaux",
        "Le calendrier des élections européennes",
        "Les recettes et les dépenses de l'État pour une année"
      ],
      "reponse": 3,
      "explication": "La loi de finances détermine le budget de l'État. Elle autorise notamment la perception des ressources et fixe les charges de l'État."
    },
    {
      "id": "ins-132",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Que signifie la navette parlementaire ?",
      "choix": [
        "L'examen successif d'un texte par l'Assemblée nationale et le Sénat",
        "Le transport des députés entre Paris et Versailles",
        "Le remplacement automatique d'un ministre absent",
        "Le vote d'une loi par les seuls préfets"
      ],
      "reponse": 0,
      "explication": "La navette parlementaire est le va-et-vient d'un texte entre les deux assemblées. Elle cherche à parvenir à un texte adopté dans les mêmes termes."
    },
    {
      "id": "ins-133",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "À quoi servent les questions au gouvernement à l'Assemblée nationale ou au Sénat ?",
      "choix": [
        "À élire les juges administratifs",
        "À permettre aux parlementaires d'interroger publiquement le gouvernement",
        "À promulguer directement les lois",
        "À remplacer les débats judiciaires"
      ],
      "reponse": 1,
      "explication": "Les questions au gouvernement sont un moyen de contrôle parlementaire. Elles permettent aux députés ou sénateurs d'interroger les ministres sur leur action."
    },
    {
      "id": "ins-134",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle institution peut prononcer la destitution du président de la République dans le cadre de l'article 68 ?",
      "choix": [
        "Le tribunal judiciaire de Paris",
        "La Cour des comptes",
        "La Haute Cour",
        "Le conseil régional d'Île-de-France"
      ],
      "reponse": 2,
      "explication": "La Haute Cour peut prononcer la destitution du président en cas de manquement à ses devoirs manifestement incompatible avec l'exercice de son mandat. Cette procédure est exceptionnelle."
    },
    {
      "id": "ins-135",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Que couvre l'irresponsabilité parlementaire ?",
      "choix": [
        "Tous les actes privés d'un parlementaire",
        "Les décisions du gouvernement",
        "Les infractions routières des élus",
        "Les opinions et votes émis par un parlementaire dans l'exercice de ses fonctions"
      ],
      "reponse": 3,
      "explication": "L'irresponsabilité protège les parlementaires pour leurs opinions et votes liés à leur mandat. Elle garantit la liberté du débat parlementaire."
    },
    {
      "id": "ins-136",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle condition est nécessaire pour qu'une motion de censure spontanée soit déposée à l'Assemblée nationale ?",
      "choix": [
        "La signature d'au moins un dixième des membres de l'Assemblée nationale",
        "L'accord préalable du Sénat",
        "La décision d'un tribunal administratif",
        "Une pétition de tous les maires"
      ],
      "reponse": 0,
      "explication": "Une motion de censure doit être signée par au moins un dixième des députés. Pour renverser le gouvernement, elle doit ensuite être adoptée à la majorité absolue des membres de l'Assemblée."
    },
    {
      "id": "ins-137",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Depuis la révision de 2008, sur quels textes l'article 49.3 peut-il toujours être utilisé sans compter dans la limite d'un autre texte par session ?",
      "choix": [
        "Uniquement les lois constitutionnelles",
        "Les projets de loi de finances et de financement de la sécurité sociale",
        "Toutes les propositions de loi locales",
        "Les règlements municipaux"
      ],
      "reponse": 1,
      "explication": "L'article 49.3 reste utilisable pour les textes financiers majeurs. Pour les autres textes, son usage est limité à un par session parlementaire."
    },
    {
      "id": "ins-138",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "En cas de désaccord persistant entre l'Assemblée nationale et le Sénat sur une loi ordinaire, que peut faire le gouvernement après l'échec de la commission mixte paritaire ?",
      "choix": [
        "Transmettre le texte à la Cour de cassation pour adoption",
        "Organiser automatiquement une élection sénatoriale",
        "Demander à l'Assemblée nationale de statuer définitivement",
        "Confier le vote final aux conseils régionaux"
      ],
      "reponse": 2,
      "explication": "Pour une loi ordinaire, le gouvernement peut donner le dernier mot à l'Assemblée nationale après certaines étapes. Cette règle reflète la responsabilité politique du gouvernement devant l'Assemblée."
    },
    {
      "id": "ins-139",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quel principe constitutionnel encadre l'administration des collectivités territoriales ?",
      "choix": [
        "La nomination des conseillers locaux par le Premier ministre",
        "La tutelle permanente du Sénat sur les communes",
        "La suppression du contrôle du juge",
        "La libre administration par des conseils élus, dans les conditions prévues par la loi"
      ],
      "reponse": 3,
      "explication": "Les collectivités territoriales s'administrent librement par des conseils élus. Cette liberté s'exerce dans le cadre fixé par la Constitution et la loi."
    },
    {
      "id": "ins-140",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle différence essentielle existe entre déconcentration et décentralisation ?",
      "choix": [
        "La déconcentration déplace des services de l'État localement, tandis que la décentralisation confie des compétences à des collectivités élues",
        "La déconcentration supprime les préfets, tandis que la décentralisation supprime les maires",
        "La déconcentration concerne seulement les tribunaux, tandis que la décentralisation concerne seulement les entreprises privées",
        "Il n'existe aucune différence juridique entre les deux"
      ],
      "reponse": 0,
      "explication": "La déconcentration reste dans l'organisation de l'État, avec des services locaux. La décentralisation donne des compétences à des collectivités territoriales dotées d'élus."
    },
    {
      "id": "his-001",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel événement s'est produit le 14 juillet 1789 ?",
      "choix": [
        "Le couronnement de Napoléon",
        "La prise de la Bastille",
        "La proclamation de la Ve République",
        "La fin de la Seconde Guerre mondiale"
      ],
      "reponse": 1,
      "explication": "La prise de la Bastille, prison symbole de l'arbitraire royal, marque le début de la Révolution française. La Déclaration des droits de l'homme et du citoyen est adoptée le 26 août 1789."
    },
    {
      "id": "his-002",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Qui fut le premier roi des Francs à se convertir au christianisme ?",
      "choix": [
        "Charlemagne",
        "Clovis",
        "Louis XIV",
        "Hugues Capet"
      ],
      "reponse": 1,
      "explication": "Clovis, roi des Francs, est baptisé à Reims vers 496 par l'évêque Remi. Reims deviendra ensuite la ville du sacre des rois de France."
    },
    {
      "id": "his-003",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "En quelle année les femmes ont-elles obtenu le droit de vote en France ?",
      "choix": [
        "1848",
        "1918",
        "1944",
        "1968"
      ],
      "reponse": 2,
      "explication": "L'ordonnance du 21 avril 1944 accorde le droit de vote aux femmes ; elles votent pour la première fois lors des élections municipales d'avril 1945."
    },
    {
      "id": "his-004",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Qui a lancé l'appel du 18 juin 1940 depuis Londres ?",
      "choix": [
        "Philippe Pétain",
        "Jean Moulin",
        "Charles de Gaulle",
        "Georges Clemenceau"
      ],
      "reponse": 2,
      "explication": "Le général de Gaulle appelle depuis la BBC à poursuivre le combat contre l'Allemagne nazie. Cet appel est considéré comme l'acte fondateur de la France libre et de la Résistance."
    },
    {
      "id": "his-005",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "En quelle année l'esclavage a-t-il été définitivement aboli en France ?",
      "choix": [
        "1789",
        "1794",
        "1848",
        "1905"
      ],
      "reponse": 2,
      "explication": "Aboli une première fois en 1794 puis rétabli par Napoléon en 1802, l'esclavage est définitivement aboli par le décret du 27 avril 1848, à l'initiative de Victor Schœlcher. Le 10 mai est la journée de commémoration."
    },
    {
      "id": "his-006",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "En quelle année Charlemagne fut-il couronné empereur ?",
      "choix": [
        "En 496",
        "En 800",
        "En 1515",
        "En 1789"
      ],
      "reponse": 1,
      "explication": "Charlemagne est couronné empereur d'Occident à Rome le 25 décembre 800 par le pape Léon III. Il est aussi connu pour avoir favorisé le développement des écoles."
    },
    {
      "id": "his-007",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Qui est devenu empereur des Français en 1804 ?",
      "choix": [
        "Louis XVI",
        "Napoléon Bonaparte",
        "Napoléon III",
        "Robespierre"
      ],
      "reponse": 1,
      "explication": "Napoléon Bonaparte se fait sacrer empereur le 2 décembre 1804. On lui doit notamment le Code civil (1804), le franc germinal, les préfets, les lycées et la Légion d'honneur."
    },
    {
      "id": "his-008",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "En quelle année la Ve République a-t-elle été instaurée ?",
      "choix": [
        "1946",
        "1958",
        "1962",
        "1968"
      ],
      "reponse": 1,
      "explication": "La Constitution de la Ve République est adoptée par référendum le 28 septembre 1958, sous l'impulsion du général de Gaulle. L'élection du président au suffrage universel direct date du référendum de 1962."
    },
    {
      "id": "his-009",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Qui était le garde des Sceaux lors de l'abolition de la peine de mort en 1981 ?",
      "choix": [
        "Robert Badinter",
        "Simone Veil",
        "Jacques Chirac",
        "Michel Rocard"
      ],
      "reponse": 0,
      "explication": "La loi du 9 octobre 1981, portée par Robert Badinter sous la présidence de François Mitterrand, abolit la peine de mort. Cette abolition est inscrite dans la Constitution en 2007."
    },
    {
      "id": "his-010",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quelles lois des années 1881-1882 rendent l'école primaire gratuite, laïque et obligatoire ?",
      "choix": [
        "Les lois Ferry",
        "Les lois Waldeck-Rousseau",
        "Les lois Jules Guesde",
        "Les lois Gambetta"
      ],
      "reponse": 0,
      "explication": "Portées par Jules Ferry, ministre de l'Instruction publique, ces lois instaurent la gratuité (1881) puis l'obligation scolaire et la laïcité de l'enseignement public (1882)."
    },
    {
      "id": "his-011",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Comment appelait-on le territoire correspondant en grande partie à la France actuelle avant la conquête romaine ?",
      "choix": [
        "La Gaule",
        "La Germanie",
        "La Bretagne",
        "La Dacie"
      ],
      "reponse": 0,
      "explication": "Avant la conquête romaine, une grande partie du territoire de la France actuelle était appelée la Gaule. Elle était peuplée de nombreux peuples gaulois, sans former un État unique."
    },
    {
      "id": "his-012",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Qui dirigea la résistance gauloise contre Jules César avant la défaite d'Alésia ?",
      "choix": [
        "Clovis",
        "Vercingétorix",
        "Charlemagne",
        "Hugues Capet"
      ],
      "reponse": 1,
      "explication": "Vercingétorix, chef arverne, rassembla une partie des peuples gaulois contre Jules César. Il fut vaincu à Alésia en 52 av. J.-C."
    },
    {
      "id": "his-013",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "En quelle année la bataille d'Alésia opposa-t-elle Vercingétorix à Jules César ?",
      "choix": [
        "58 av. J.-C.",
        "55 av. J.-C.",
        "52 av. J.-C.",
        "49 av. J.-C."
      ],
      "reponse": 2,
      "explication": "La bataille d'Alésia eut lieu en 52 av. J.-C. Elle marque la victoire décisive de César dans la guerre des Gaules."
    },
    {
      "id": "his-014",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel général romain conquit la Gaule au Ier siècle avant J.-C. ?",
      "choix": [
        "Auguste",
        "Pompée",
        "Néron",
        "Jules César"
      ],
      "reponse": 3,
      "explication": "Jules César mena la guerre des Gaules entre 58 et 51 av. J.-C. Cette conquête intégra progressivement la Gaule au monde romain."
    },
    {
      "id": "his-015",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel nom romain portait la ville de Lyon dans l'Antiquité ?",
      "choix": [
        "Lugdunum",
        "Massilia",
        "Nemausus",
        "Burdigala"
      ],
      "reponse": 0,
      "explication": "Lyon s'appelait Lugdunum à l'époque romaine. Fondée en 43 av. J.-C., elle devint une ville majeure de la Gaule romaine."
    },
    {
      "id": "his-016",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "À quoi servait principalement le pont du Gard dans la Gaule romaine ?",
      "choix": [
        "À défendre une frontière",
        "À conduire de l'eau",
        "À accueillir des combats",
        "À frapper la monnaie"
      ],
      "reponse": 1,
      "explication": "Le pont du Gard est un aqueduc romain. Il servait à transporter l'eau vers la ville antique de Nîmes."
    },
    {
      "id": "his-017",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Dans quelle ville peut-on voir de célèbres arènes romaines encore conservées ?",
      "choix": [
        "Tours",
        "Rouen",
        "Nîmes",
        "Dijon"
      ],
      "reponse": 2,
      "explication": "Les arènes de Nîmes sont un amphithéâtre romain très bien conservé. Elles témoignent de l'importance de la culture urbaine romaine en Gaule."
    },
    {
      "id": "his-018",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle langue s'imposa progressivement en Gaule après la conquête romaine ?",
      "choix": [
        "Le grec",
        "Le gaulois",
        "Le francique",
        "Le latin"
      ],
      "reponse": 3,
      "explication": "Après la conquête, le latin se diffusa dans l'administration, l'armée et les villes. Il est à l'origine des langues romanes, dont le français."
    },
    {
      "id": "his-019",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel peuple germanique donna son nom à la France ?",
      "choix": [
        "Les Francs",
        "Les Wisigoths",
        "Les Vandales",
        "Les Huns"
      ],
      "reponse": 0,
      "explication": "Les Francs s'installèrent en Gaule à la fin de l'Antiquité. Leur nom est à l'origine de celui de la France."
    },
    {
      "id": "his-020",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel roi des Francs fut baptisé à Reims par l'évêque Rémi ?",
      "choix": [
        "Pépin le Bref",
        "Clovis",
        "Dagobert",
        "Charles Martel"
      ],
      "reponse": 1,
      "explication": "Clovis fut baptisé à Reims par l'évêque Rémi, selon la tradition. Ce baptême renforça l'alliance entre la royauté franque et l'Église catholique."
    },
    {
      "id": "his-021",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle dynastie Clovis fonda-t-il chez les rois francs ?",
      "choix": [
        "Les Carolingiens",
        "Les Capétiens",
        "Les Mérovingiens",
        "Les Valois"
      ],
      "reponse": 2,
      "explication": "Clovis appartient à la dynastie mérovingienne. Les Mérovingiens régnèrent sur les royaumes francs jusqu'au VIIIe siècle."
    },
    {
      "id": "his-022",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Vers quelle date situe-t-on traditionnellement le baptême de Clovis ?",
      "choix": [
        "451",
        "476",
        "732",
        "496"
      ],
      "reponse": 3,
      "explication": "Le baptême de Clovis est traditionnellement situé vers 496. La date exacte reste discutée par les historiens."
    },
    {
      "id": "his-023",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Qui remporta la bataille de Poitiers contre des troupes musulmanes en 732 ?",
      "choix": [
        "Charles Martel",
        "Charlemagne",
        "Louis IX",
        "Philippe Auguste"
      ],
      "reponse": 0,
      "explication": "Charles Martel remporta la bataille de Poitiers en 732. Cette victoire consolida le pouvoir des maires du palais francs."
    },
    {
      "id": "his-024",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel titre portait Charles Martel dans le royaume franc ?",
      "choix": [
        "Empereur romain",
        "Maire du palais",
        "Duc de Normandie",
        "Roi capétien"
      ],
      "reponse": 1,
      "explication": "Charles Martel n'était pas roi : il était maire du palais. Cette fonction lui donnait un pouvoir politique et militaire considérable."
    },
    {
      "id": "his-025",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel souverain carolingien fut couronné empereur à Rome en l'an 800 ?",
      "choix": [
        "Clotaire II",
        "Pépin le Bref",
        "Charlemagne",
        "Louis le Pieux"
      ],
      "reponse": 2,
      "explication": "Charlemagne fut couronné empereur à Rome le 25 décembre 800 par le pape Léon III. Ce couronnement symbolisa le renouveau de l'Empire en Occident."
    },
    {
      "id": "his-026",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel pape couronna Charlemagne empereur en 800 ?",
      "choix": [
        "Grégoire Ier",
        "Urbain II",
        "Innocent III",
        "Léon III"
      ],
      "reponse": 3,
      "explication": "Le pape Léon III couronna Charlemagne empereur à Rome. La cérémonie eut lieu dans la basilique Saint-Pierre le 25 décembre 800."
    },
    {
      "id": "his-027",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel traité partagea l'empire de Charlemagne entre ses petits-fils en 843 ?",
      "choix": [
        "Le traité de Verdun",
        "Le traité de Troyes",
        "Le traité de Paris",
        "Le traité de Brétigny"
      ],
      "reponse": 0,
      "explication": "Le traité de Verdun fut conclu en 843. Il partagea l'empire carolingien entre les trois petits-fils de Charlemagne."
    },
    {
      "id": "his-028",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Qui reçut la Francie occidentale lors du traité de Verdun ?",
      "choix": [
        "Lothaire Ier",
        "Charles le Chauve",
        "Louis le Germanique",
        "Pépin d'Aquitaine"
      ],
      "reponse": 1,
      "explication": "Charles le Chauve reçut la Francie occidentale en 843. Ce territoire est souvent présenté comme un ancêtre politique du royaume de France."
    },
    {
      "id": "his-029",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel roi élu en 987 inaugura la dynastie capétienne ?",
      "choix": [
        "Louis VI",
        "Philippe le Bel",
        "Hugues Capet",
        "Charles le Simple"
      ],
      "reponse": 2,
      "explication": "Hugues Capet fut élu roi en 987. Son accession au trône marque le début de la dynastie capétienne."
    },
    {
      "id": "his-030",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle dynastie régna directement sur le royaume de France après l'élection d'Hugues Capet ?",
      "choix": [
        "Les Mérovingiens",
        "Les Carolingiens",
        "Les Bourbons",
        "Les Capétiens"
      ],
      "reponse": 3,
      "explication": "Les Capétiens succédèrent aux Carolingiens à partir de 987. Leur pouvoir s'affirma progressivement autour du domaine royal."
    },
    {
      "id": "his-031",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel système social et politique domina une grande partie du Moyen Âge occidental ?",
      "choix": [
        "La féodalité",
        "La démocratie directe",
        "Le bonapartisme",
        "Le communisme"
      ],
      "reponse": 0,
      "explication": "La féodalité reposait sur des liens de dépendance entre seigneurs, vassaux et paysans. Elle structura largement la société médiévale."
    },
    {
      "id": "his-032",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Comment appelle-t-on les grands édifices religieux construits dans les villes médiévales, souvent dans le style gothique ?",
      "choix": [
        "Des abbayes fortifiées",
        "Des cathédrales",
        "Des amphithéâtres",
        "Des palais consulaires"
      ],
      "reponse": 1,
      "explication": "Les cathédrales sont les églises principales des diocèses. Au Moyen Âge, le style gothique permit d'élever de vastes édifices lumineux."
    },
    {
      "id": "his-033",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "En quelle année commença la construction de la cathédrale Notre-Dame de Paris ?",
      "choix": [
        "1147",
        "1154",
        "1163",
        "1180"
      ],
      "reponse": 2,
      "explication": "La construction de Notre-Dame de Paris commença en 1163. Le chantier se poursuivit pendant près de deux siècles."
    },
    {
      "id": "his-034",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel pape appela à la première croisade au concile de Clermont en 1095 ?",
      "choix": [
        "Léon IX",
        "Grégoire VII",
        "Innocent III",
        "Urbain II"
      ],
      "reponse": 3,
      "explication": "Urbain II lança l'appel à la première croisade en 1095 à Clermont. Cet appel entraîna une expédition militaire vers Jérusalem."
    },
    {
      "id": "his-035",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel roi de France est aussi connu sous le nom de Saint Louis ?",
      "choix": [
        "Louis IX",
        "Louis VI",
        "Louis XI",
        "Louis XIII"
      ],
      "reponse": 0,
      "explication": "Saint Louis est le nom donné à Louis IX. Il régna au XIIIe siècle et fut canonisé après sa mort."
    },
    {
      "id": "his-036",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Dans quelle ville Louis IX mourut-il en 1270 lors d'une croisade ?",
      "choix": [
        "Acre",
        "Tunis",
        "Jérusalem",
        "Damiette"
      ],
      "reponse": 1,
      "explication": "Louis IX mourut à Tunis en 1270 pendant la huitième croisade. Sa mort renforça son image de roi chrétien exemplaire."
    },
    {
      "id": "his-037",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel roi de France remporta la bataille de Bouvines en 1214 ?",
      "choix": [
        "Louis VIII",
        "Jean le Bon",
        "Philippe Auguste",
        "Charles V"
      ],
      "reponse": 2,
      "explication": "Philippe Auguste remporta la bataille de Bouvines en 1214. Cette victoire renforça considérablement l'autorité royale en France."
    },
    {
      "id": "his-038",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Contre quel roi d'Angleterre Philippe Auguste lutta-t-il longuement au début du XIIIe siècle ?",
      "choix": [
        "Henri V",
        "Édouard III",
        "Richard III",
        "Jean sans Terre"
      ],
      "reponse": 3,
      "explication": "Philippe Auguste affronta Jean sans Terre et lui enleva une grande partie de ses possessions continentales. Cette lutte renforça le domaine royal français."
    },
    {
      "id": "his-039",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel conflit opposa durablement les royaumes de France et d'Angleterre de 1337 à 1453 ?",
      "choix": [
        "La guerre de Cent Ans",
        "La Fronde",
        "La guerre de Trente Ans",
        "La Ligue d'Augsbourg"
      ],
      "reponse": 0,
      "explication": "La guerre de Cent Ans opposa principalement la France et l'Angleterre entre 1337 et 1453. Elle fut marquée par des crises dynastiques, militaires et sociales."
    },
    {
      "id": "his-040",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle héroïne contribua à la levée du siège d'Orléans en 1429 ?",
      "choix": [
        "Aliénor d'Aquitaine",
        "Jeanne d'Arc",
        "Catherine de Médicis",
        "Anne de Bretagne"
      ],
      "reponse": 1,
      "explication": "Jeanne d'Arc joua un rôle décisif dans la levée du siège d'Orléans en 1429. Cet événement relança le camp de Charles VII."
    },
    {
      "id": "his-041",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel roi fut conduit à Reims pour être sacré grâce à l'action de Jeanne d'Arc ?",
      "choix": [
        "Charles VI",
        "Louis XI",
        "Charles VII",
        "François Ier"
      ],
      "reponse": 2,
      "explication": "Jeanne d'Arc conduisit Charles VII vers Reims, où il fut sacré en 1429. Ce sacre renforça sa légitimité face aux Anglais et aux Bourguignons."
    },
    {
      "id": "his-042",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "En quelle année Jeanne d'Arc fut-elle brûlée à Rouen ?",
      "choix": [
        "1428",
        "1429",
        "1430",
        "1431"
      ],
      "reponse": 3,
      "explication": "Jeanne d'Arc fut brûlée vive à Rouen en 1431 après un procès politique et religieux. Elle fut réhabilitée en 1456."
    },
    {
      "id": "his-043",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle période culturelle et artistique se développa en France au XVIe siècle sous l'influence italienne ?",
      "choix": [
        "La Renaissance",
        "Le romantisme",
        "Le classicisme",
        "La Belle Époque"
      ],
      "reponse": 0,
      "explication": "La Renaissance se développa en France au XVIe siècle, notamment sous l'influence de l'Italie. Elle toucha les arts, les sciences et les lettres."
    },
    {
      "id": "his-044",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel roi de France remporta la bataille de Marignan en 1515 ?",
      "choix": [
        "Henri II",
        "François Ier",
        "Charles IX",
        "Henri III"
      ],
      "reponse": 1,
      "explication": "François Ier remporta la bataille de Marignan en 1515. Cette victoire est l'un des repères célèbres du début de son règne."
    },
    {
      "id": "his-045",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel artiste et savant italien François Ier invita-t-il en France à la fin de sa vie ?",
      "choix": [
        "Michel-Ange",
        "Raphaël",
        "Léonard de Vinci",
        "Le Titien"
      ],
      "reponse": 2,
      "explication": "François Ier invita Léonard de Vinci en France en 1516. Léonard vécut au Clos Lucé, près d'Amboise, jusqu'à sa mort en 1519."
    },
    {
      "id": "his-046",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel château de la Loire est particulièrement associé à François Ier et à la Renaissance française ?",
      "choix": [
        "Chinon",
        "Blois",
        "Azay-le-Rideau",
        "Chambord"
      ],
      "reponse": 3,
      "explication": "Le château de Chambord est étroitement associé à François Ier. Sa construction commença en 1519 et illustre l'architecture de la Renaissance."
    },
    {
      "id": "his-047",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle ordonnance de 1539 imposa le français dans les actes administratifs et judiciaires du royaume ?",
      "choix": [
        "L'ordonnance de Villers-Cotterêts",
        "L'édit de Nantes",
        "L'ordonnance de Blois",
        "L'édit de Fontainebleau"
      ],
      "reponse": 0,
      "explication": "L'ordonnance de Villers-Cotterêts fut signée en 1539 par François Ier. Elle imposa notamment l'usage du français dans les actes de justice et d'administration."
    },
    {
      "id": "his-048",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel autre effet important de l'ordonnance de Villers-Cotterêts concerne les registres paroissiaux ?",
      "choix": [
        "Elle supprima les impôts seigneuriaux",
        "Elle rendit obligatoire l'enregistrement des baptêmes",
        "Elle interdit les universités provinciales",
        "Elle créa les intendants du royaume"
      ],
      "reponse": 1,
      "explication": "L'ordonnance de Villers-Cotterêts imposa la tenue de registres de baptêmes par les paroisses. Cette mesure est importante pour l'histoire de l'état civil en France."
    },
    {
      "id": "his-049",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quels groupes s'affrontèrent principalement pendant les guerres de Religion en France ?",
      "choix": [
        "Royalistes et bonapartistes",
        "Jacobins et girondins",
        "Catholiques et protestants",
        "Capétiens et Carolingiens"
      ],
      "reponse": 2,
      "explication": "Les guerres de Religion opposèrent principalement catholiques et protestants, appelés aussi huguenots. Elles déchirèrent le royaume dans la seconde moitié du XVIe siècle."
    },
    {
      "id": "his-050",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel massacre de protestants commença à Paris le 24 août 1572 ?",
      "choix": [
        "La Terreur blanche",
        "La journée des Barricades",
        "Le massacre de Wassy",
        "La Saint-Barthélemy"
      ],
      "reponse": 3,
      "explication": "Le massacre de la Saint-Barthélemy commença à Paris dans la nuit du 23 au 24 août 1572. Il s'étendit ensuite à plusieurs villes du royaume."
    },
    {
      "id": "his-051",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel roi promulgua l'édit de Nantes en 1598 ?",
      "choix": [
        "Henri IV",
        "Louis XIII",
        "François II",
        "Charles IX"
      ],
      "reponse": 0,
      "explication": "Henri IV promulgua l'édit de Nantes en 1598. Cet édit accordait des droits aux protestants et visait à pacifier le royaume."
    },
    {
      "id": "his-052",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle formule est souvent associée à la conversion d'Henri IV au catholicisme ?",
      "choix": [
        "L'État, c'est moi",
        "Paris vaut bien une messe",
        "Impossible n'est pas français",
        "Après moi, le déluge"
      ],
      "reponse": 1,
      "explication": "La formule « Paris vaut bien une messe » est traditionnellement associée à Henri IV, même si son authenticité est discutée. Sa conversion facilita son acceptation comme roi."
    },
    {
      "id": "his-053",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel roi révoqua l'édit de Nantes par l'édit de Fontainebleau ?",
      "choix": [
        "Louis XIII",
        "Henri III",
        "Louis XIV",
        "Louis XV"
      ],
      "reponse": 2,
      "explication": "Louis XIV révoqua l'édit de Nantes en 1685 par l'édit de Fontainebleau. Cette décision mit fin à la tolérance légale accordée aux protestants."
    },
    {
      "id": "his-054",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "En quelle année Henri IV fut-il assassiné par Ravaillac ?",
      "choix": [
        "1601",
        "1607",
        "1615",
        "1610"
      ],
      "reponse": 3,
      "explication": "Henri IV fut assassiné à Paris par François Ravaillac en 1610. Son fils Louis XIII lui succéda alors sous la régence de Marie de Médicis."
    },
    {
      "id": "his-055",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel cardinal fut le principal ministre de Louis XIII ?",
      "choix": [
        "Richelieu",
        "Mazarin",
        "Fleury",
        "Colbert"
      ],
      "reponse": 0,
      "explication": "Le cardinal de Richelieu devint le principal ministre de Louis XIII en 1624. Il renforça l'autorité de l'État royal."
    },
    {
      "id": "his-056",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel objectif politique Richelieu poursuivit-il au service de Louis XIII ?",
      "choix": [
        "Rétablir l'empire carolingien",
        "Renforcer l'autorité royale",
        "Supprimer la monarchie",
        "Installer une république"
      ],
      "reponse": 1,
      "explication": "Richelieu chercha à renforcer l'autorité du roi face aux grands nobles et aux puissances rivales. Sa politique contribua à la centralisation de l'État."
    },
    {
      "id": "his-057",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel roi de France est surnommé le Roi-Soleil ?",
      "choix": [
        "Louis XII",
        "Louis XIII",
        "Louis XIV",
        "Louis XVI"
      ],
      "reponse": 2,
      "explication": "Louis XIV est surnommé le Roi-Soleil. Son règne personnel symbolise l'apogée de la monarchie absolue en France."
    },
    {
      "id": "his-058",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "En quelle année Louis XIV installa-t-il officiellement la cour et le gouvernement à Versailles ?",
      "choix": [
        "1661",
        "1672",
        "1678",
        "1682"
      ],
      "reponse": 3,
      "explication": "Louis XIV installa officiellement la cour et le gouvernement à Versailles en 1682. Le château devint le centre politique de la monarchie française."
    },
    {
      "id": "his-059",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel château est devenu le symbole de la monarchie absolue de Louis XIV ?",
      "choix": [
        "Versailles",
        "Fontainebleau",
        "Compiègne",
        "Vincennes"
      ],
      "reponse": 0,
      "explication": "Le château de Versailles est le symbole le plus célèbre de la monarchie absolue de Louis XIV. Il servait à la fois de résidence royale et de centre du pouvoir."
    },
    {
      "id": "his-060",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel ministre de Louis XIV est associé au développement des manufactures et du mercantilisme ?",
      "choix": [
        "Vauban",
        "Colbert",
        "Louvois",
        "Sully"
      ],
      "reponse": 1,
      "explication": "Jean-Baptiste Colbert fut contrôleur général des finances de Louis XIV. Il favorisa les manufactures, le commerce et une politique économique mercantiliste."
    },
    {
      "id": "his-061",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "À partir de quelle année Louis XIV gouverna-t-il personnellement sans principal ministre ?",
      "choix": [
        "1643",
        "1654",
        "1661",
        "1682"
      ],
      "reponse": 2,
      "explication": "Louis XIV gouverna personnellement à partir de 1661, après la mort de Mazarin. Il choisit de ne pas reprendre de principal ministre."
    },
    {
      "id": "his-062",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel mouvement intellectuel du XVIIIe siècle défendit la raison, le progrès et la critique des abus ?",
      "choix": [
        "La Contre-Réforme",
        "La chevalerie",
        "L'humanisme médiéval",
        "Les Lumières"
      ],
      "reponse": 3,
      "explication": "Les Lumières furent un mouvement intellectuel majeur du XVIIIe siècle. Les philosophes y valorisaient la raison, les sciences et la critique des injustices."
    },
    {
      "id": "his-063",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel philosophe des Lumières est célèbre pour sa défense de la tolérance et sa critique du fanatisme ?",
      "choix": [
        "Voltaire",
        "Bossuet",
        "Rabelais",
        "Calvin"
      ],
      "reponse": 0,
      "explication": "Voltaire défendit la tolérance religieuse et combattit le fanatisme. Son action dans l'affaire Calas est souvent citée comme exemple."
    },
    {
      "id": "his-064",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel penseur des Lumières développa l'idée de séparation des pouvoirs ?",
      "choix": [
        "Diderot",
        "Montesquieu",
        "Condorcet",
        "Beaumarchais"
      ],
      "reponse": 1,
      "explication": "Montesquieu développa la théorie de la séparation des pouvoirs, notamment dans De l'esprit des lois publié en 1748. Cette idée influença durablement les régimes constitutionnels."
    },
    {
      "id": "his-065",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel ouvrage collectif du XVIIIe siècle fut dirigé notamment par Diderot et d'Alembert ?",
      "choix": [
        "Le Contrat social",
        "Les Lettres persanes",
        "L'Encyclopédie",
        "Les Provinciales"
      ],
      "reponse": 2,
      "explication": "L'Encyclopédie fut dirigée par Diderot et d'Alembert. Elle cherchait à rassembler et diffuser les connaissances de son temps."
    },
    {
      "id": "his-066",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel philosophe publia Du contrat social en 1762 ?",
      "choix": [
        "Voltaire",
        "Montesquieu",
        "Diderot",
        "Rousseau"
      ],
      "reponse": 3,
      "explication": "Jean-Jacques Rousseau publia Du contrat social en 1762. L'ouvrage réfléchit à la souveraineté du peuple et à la légitimité politique."
    },
    {
      "id": "his-067",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Sous l'Ancien Régime, quels étaient les trois ordres de la société française ?",
      "choix": [
        "Clergé, noblesse et tiers état",
        "Bourgeoisie, armée et paysans",
        "Juges, marchands et artisans",
        "Roi, ministres et intendants"
      ],
      "reponse": 0,
      "explication": "La société d'Ancien Régime était officiellement divisée en trois ordres : le clergé, la noblesse et le tiers état. Le tiers état regroupait la majorité de la population."
    },
    {
      "id": "his-068",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel ordre de l'Ancien Régime regroupait la majorité de la population ?",
      "choix": [
        "Le clergé",
        "Le tiers état",
        "La noblesse",
        "La chevalerie"
      ],
      "reponse": 1,
      "explication": "Le tiers état regroupait l'immense majorité des Français, des paysans aux bourgeois. Le clergé et la noblesse formaient les deux ordres privilégiés."
    },
    {
      "id": "his-069",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel roi convoqua les États généraux qui s'ouvrirent en mai 1789 ?",
      "choix": [
        "Louis XV",
        "Louis XIV",
        "Louis XVI",
        "Charles X"
      ],
      "reponse": 2,
      "explication": "Louis XVI convoqua les États généraux pour tenter de résoudre la crise financière et politique du royaume. Ils s'ouvrirent à Versailles le 5 mai 1789."
    },
    {
      "id": "his-070",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Depuis quelle année les États généraux n'avaient-ils pas été réunis avant leur convocation pour 1789 ?",
      "choix": [
        "1610",
        "1648",
        "1715",
        "1614"
      ],
      "reponse": 3,
      "explication": "Les États généraux n'avaient pas été réunis depuis 1614. Leur convocation en 1789 marqua donc un événement politique exceptionnel."
    },
    {
      "id": "his-071",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Dans quelle ville les États généraux de 1789 s'ouvrirent-ils ?",
      "choix": [
        "Versailles",
        "Paris",
        "Reims",
        "Orléans"
      ],
      "reponse": 0,
      "explication": "Les États généraux s'ouvrirent à Versailles le 5 mai 1789. Le roi et la cour y résidaient alors."
    },
    {
      "id": "his-072",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel problème financier pesa fortement sur la décision de convoquer les États généraux en 1789 ?",
      "choix": [
        "La faillite des banques italiennes",
        "L'endettement de l'État royal",
        "La disparition de la monnaie",
        "La suppression des impôts"
      ],
      "reponse": 1,
      "explication": "La monarchie française faisait face à un endettement très important et à une crise fiscale. Cette situation poussa Louis XVI à convoquer les États généraux."
    },
    {
      "id": "his-073",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel ministre des finances populaire fut rappelé par Louis XVI avant l'ouverture des États généraux ?",
      "choix": [
        "Turgot",
        "Calonne",
        "Necker",
        "Colbert"
      ],
      "reponse": 2,
      "explication": "Jacques Necker fut rappelé par Louis XVI en 1788, avant l'ouverture des États généraux. Sa popularité auprès de l'opinion était importante."
    },
    {
      "id": "his-074",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel document les Français furent invités à rédiger en 1789 pour exprimer leurs doléances ?",
      "choix": [
        "Les ordonnances royales",
        "Les capitulaires impériaux",
        "Les lettres de cachet",
        "Les cahiers de doléances"
      ],
      "reponse": 3,
      "explication": "En 1789, les Français furent invités à rédiger des cahiers de doléances. Ces textes recueillaient plaintes, demandes et propositions adressées au roi."
    },
    {
      "id": "his-075",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel principe de vote opposa fortement le tiers état aux ordres privilégiés lors des États généraux ?",
      "choix": [
        "Le vote par ordre",
        "Le suffrage universel féminin",
        "Le scrutin proportionnel",
        "Le référendum local"
      ],
      "reponse": 0,
      "explication": "Le vote par ordre donnait une voix à chacun des trois ordres, ce qui favorisait le clergé et la noblesse. Le tiers état réclamait plutôt le vote par tête."
    },
    {
      "id": "his-076",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel chef gaulois est associé à l'union de plusieurs peuples gaulois contre Rome en 52 av. J.-C. ?",
      "choix": [
        "Vercingétorix",
        "Clovis",
        "Brennus",
        "Arioviste"
      ],
      "reponse": 0,
      "explication": "Vercingétorix, chef arverne, tenta de fédérer des peuples gaulois contre Jules César. Sa défaite à Alésia marque un tournant dans la conquête de la Gaule."
    },
    {
      "id": "his-077",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle fut la conséquence principale de la défaite gauloise à Alésia ?",
      "choix": [
        "La naissance du royaume des Francs",
        "La domination romaine s'imposa durablement en Gaule",
        "La fondation de Paris par les Romains",
        "Le départ immédiat de Jules César pour l'Égypte"
      ],
      "reponse": 1,
      "explication": "Après Alésia, la résistance organisée des Gaulois fut brisée. La Gaule fut progressivement intégrée au monde romain."
    },
    {
      "id": "his-078",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Pourquoi Lugdunum, l'actuelle Lyon, était-elle importante dans la Gaule romaine ?",
      "choix": [
        "Elle était la capitale du royaume mérovingien",
        "Elle était le port principal de la Méditerranée",
        "Elle devint un grand centre administratif et religieux des Gaules",
        "Elle fut le lieu du sacre de Charlemagne"
      ],
      "reponse": 2,
      "explication": "Lugdunum fut une ville majeure de la Gaule romaine et le siège du sanctuaire fédéral des Trois Gaules. Sa position en faisait aussi un carrefour important."
    },
    {
      "id": "his-079",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que désigne la romanisation de la Gaule ?",
      "choix": [
        "L'expulsion de tous les Gaulois vers Rome",
        "La conversion immédiate de la Gaule à l'islam",
        "La destruction de toutes les villes gauloises",
        "L'adoption progressive de la langue, du droit et des modes de vie romains"
      ],
      "reponse": 3,
      "explication": "La romanisation correspond à l'intégration culturelle et politique de la Gaule à l'Empire romain. Elle se traduit notamment par le latin, les routes, les villes et le droit romain."
    },
    {
      "id": "his-080",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "À quel épisode la bataille de Tolbiac est-elle traditionnellement liée dans l'histoire de Clovis ?",
      "choix": [
        "À son engagement en faveur du Dieu des chrétiens",
        "À son couronnement impérial à Rome",
        "À la signature de l'édit de Nantes",
        "À la prise de Jérusalem"
      ],
      "reponse": 0,
      "explication": "La tradition rapporte que Clovis aurait invoqué le Dieu de son épouse chrétienne lors de la bataille de Tolbiac. Cet épisode est associé à son rapprochement avec le christianisme."
    },
    {
      "id": "his-081",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Dans les royaumes mérovingiens tardifs, quel groupe de responsables exerça souvent une influence politique croissante auprès des rois ?",
      "choix": [
        "Les intendants de province",
        "Les maires du palais",
        "Les députés des États généraux",
        "Les préfets napoléoniens"
      ],
      "reponse": 1,
      "explication": "Les maires du palais étaient à l'origine des administrateurs de la maison royale. Leur pouvoir augmenta jusqu'à préparer l'ascension des Carolingiens."
    },
    {
      "id": "his-082",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Pourquoi la bataille de Poitiers de 732 est-elle souvent présentée comme importante ?",
      "choix": [
        "Elle mit fin à la guerre de Cent Ans",
        "Elle permit la prise de Constantinople",
        "Elle renforça le prestige de Charles Martel après l'arrêt d'une expédition musulmane",
        "Elle proclama la Première République"
      ],
      "reponse": 2,
      "explication": "La victoire franque de 732 renforça l'autorité de Charles Martel. Elle est traditionnellement associée à l'arrêt d'une avancée musulmane au nord des Pyrénées."
    },
    {
      "id": "his-083",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel souverain, père de Charlemagne, fonda la dynastie carolingienne en devenant roi des Francs ?",
      "choix": [
        "Louis le Pieux",
        "Charles le Chauve",
        "Hugues Capet",
        "Pépin le Bref"
      ],
      "reponse": 3,
      "explication": "Pépin le Bref devint roi des Francs en 751. Il est le père de Charlemagne et marque le début de la dynastie carolingienne."
    },
    {
      "id": "his-084",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que provoqua le traité de Verdun de 843 dans l'empire carolingien ?",
      "choix": [
        "Le partage de l'empire entre trois petits-fils de Charlemagne",
        "La fondation de l'Université de Paris",
        "La fin des croisades",
        "La révocation de l'édit de Nantes"
      ],
      "reponse": 0,
      "explication": "Le traité de Verdun partagea l'empire carolingien en trois ensembles. Il est souvent vu comme une étape dans la formation future de la France et de l'Allemagne."
    },
    {
      "id": "his-085",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "À quoi servaient les missi dominici dans l'Empire carolingien ?",
      "choix": [
        "À commander uniquement les croisades",
        "À contrôler localement l'application des décisions impériales",
        "À élire les rois capétiens",
        "À juger les philosophes des Lumières"
      ],
      "reponse": 1,
      "explication": "Les missi dominici étaient des envoyés de l'empereur. Ils inspectaient les comtés et veillaient à l'obéissance aux décisions du pouvoir central."
    },
    {
      "id": "his-086",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Au début de la dynastie capétienne, autour de quelle région le domaine royal était-il surtout concentré ?",
      "choix": [
        "La Provence et la Corse",
        "La Bretagne et l'Aquitaine",
        "L'Île-de-France autour de Paris et Orléans",
        "L'Alsace et la Lorraine actuelles"
      ],
      "reponse": 2,
      "explication": "Les premiers Capétiens disposaient d'un domaine royal relativement limité. Leur pouvoir direct était surtout fort en Île-de-France."
    },
    {
      "id": "his-087",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle conquête de Philippe Auguste affaiblit fortement les Plantagenêts au début du XIIIe siècle ?",
      "choix": [
        "La Savoie",
        "La Flandre espagnole",
        "La Franche-Comté",
        "La Normandie"
      ],
      "reponse": 3,
      "explication": "Philippe Auguste reprit la Normandie au roi d'Angleterre Jean sans Terre en 1204. Cette conquête renforça considérablement le domaine royal français."
    },
    {
      "id": "his-088",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle image est souvent associée à Saint Louis rendant la justice ?",
      "choix": [
        "Le roi jugeant sous un chêne",
        "Le roi écrivant l'Encyclopédie",
        "Le roi traversant les Alpes à dos d'éléphant",
        "Le roi signant l'armistice de 1918"
      ],
      "reponse": 0,
      "explication": "La tradition représente Louis IX rendant la justice sous un chêne, notamment à Vincennes. Cette image illustre l'idéal médiéval d'un roi justicier."
    },
    {
      "id": "his-089",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel conflit opposa Philippe le Bel au pape Boniface VIII au début du XIVe siècle ?",
      "choix": [
        "Une querelle sur la construction de Versailles",
        "Une confrontation sur l'autorité du roi et du pape",
        "Une guerre pour reprendre Jérusalem",
        "Une dispute sur le calendrier révolutionnaire"
      ],
      "reponse": 1,
      "explication": "Philippe le Bel défendit l'indépendance du pouvoir royal face aux prétentions pontificales. Cette crise illustre l'affirmation de l'État monarchique."
    },
    {
      "id": "his-090",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Dans la féodalité, comment appelle-t-on le lien personnel par lequel un vassal promet fidélité à un seigneur ?",
      "choix": [
        "La dîme",
        "La taille",
        "L'hommage",
        "Le concordat"
      ],
      "reponse": 2,
      "explication": "L'hommage établissait un lien de fidélité entre le vassal et son seigneur. En échange, le vassal pouvait recevoir une terre appelée fief."
    },
    {
      "id": "his-091",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel était l'un des objectifs principaux des premières croisades médiévales ?",
      "choix": [
        "Abolir les privilèges féodaux",
        "Fonder la République",
        "Créer l'Académie française",
        "Reprendre ou protéger les lieux saints de Terre sainte"
      ],
      "reponse": 3,
      "explication": "Les croisades furent des expéditions militaires et religieuses vers l'Orient. Elles visaient notamment Jérusalem et les lieux saints du christianisme."
    },
    {
      "id": "his-092",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel élément architectural est caractéristique des cathédrales gothiques ?",
      "choix": [
        "Les arcs-boutants et de grandes verrières",
        "Les pyramides à degrés",
        "Les minarets ottomans",
        "Les coupoles de béton armé"
      ],
      "reponse": 0,
      "explication": "L'art gothique utilise notamment l'arc brisé, la voûte d'ogives et les arcs-boutants. Ces techniques permettent des édifices plus hauts et plus lumineux."
    },
    {
      "id": "his-093",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Sur quelle île de Paris se trouve la cathédrale Notre-Dame de Paris ?",
      "choix": [
        "L'île Saint-Louis",
        "L'île de la Cité",
        "L'île Seguin",
        "L'île de Ré"
      ],
      "reponse": 1,
      "explication": "Notre-Dame de Paris se situe sur l'île de la Cité, cœur historique de Paris. Sa construction médiévale en fait un monument majeur de l'art gothique."
    },
    {
      "id": "his-094",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle épidémie frappa durement l'Europe au milieu du XIVe siècle ?",
      "choix": [
        "La grippe espagnole",
        "Le choléra asiatique",
        "La peste noire",
        "La variole de 1870"
      ],
      "reponse": 2,
      "explication": "La peste noire arriva en Europe vers 1347 et provoqua une mortalité très élevée. Elle bouleversa profondément les sociétés médiévales."
    },
    {
      "id": "his-095",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle ville fut l'un des grands centres universitaires européens au Moyen Âge, notamment pour la théologie ?",
      "choix": [
        "Versailles",
        "Vichy",
        "Cherbourg",
        "Paris"
      ],
      "reponse": 3,
      "explication": "L'Université de Paris devint un centre intellectuel majeur au Moyen Âge. Elle était particulièrement réputée pour l'enseignement de la théologie."
    },
    {
      "id": "his-096",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "La bataille de Crécy en 1346 opposa principalement les Français à quelle armée ?",
      "choix": [
        "L'armée anglaise",
        "L'armée prussienne",
        "L'armée ottomane",
        "L'armée russe"
      ],
      "reponse": 0,
      "explication": "Crécy fut une grande victoire anglaise pendant la guerre de Cent Ans. L'usage efficace des archers anglais y joua un rôle important."
    },
    {
      "id": "his-097",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle bataille de 1415 fut une lourde défaite française face à Henri V d'Angleterre ?",
      "choix": [
        "Marignan",
        "Azincourt",
        "Valmy",
        "Austerlitz"
      ],
      "reponse": 1,
      "explication": "La bataille d'Azincourt eut lieu en 1415. Elle fut une victoire anglaise majeure durant la guerre de Cent Ans."
    },
    {
      "id": "his-098",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Que prévoyait le traité de Troyes signé en 1420 ?",
      "choix": [
        "La fin de la féodalité dans tout le royaume",
        "Le mariage de Louis XIV avec Marie-Thérèse",
        "La reconnaissance d'Henri V d'Angleterre comme héritier du royaume de France",
        "La création du Directoire"
      ],
      "reponse": 2,
      "explication": "Le traité de Troyes reconnaissait Henri V comme héritier de Charles VI, au détriment du dauphin Charles. Il reflète la grave crise politique française pendant la guerre de Cent Ans."
    },
    {
      "id": "his-099",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Par qui Jeanne d'Arc fut-elle capturée en 1430 avant d'être livrée aux Anglais ?",
      "choix": [
        "Les troupes espagnoles",
        "Les soldats suisses",
        "Les chevaliers teutoniques",
        "Les Bourguignons"
      ],
      "reponse": 3,
      "explication": "Jeanne d'Arc fut capturée près de Compiègne par les Bourguignons. Ceux-ci la livrèrent ensuite aux Anglais, qui soutinrent son procès à Rouen."
    },
    {
      "id": "his-100",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle bataille de 1453 est généralement considérée comme la fin de la guerre de Cent Ans ?",
      "choix": [
        "Castillon",
        "Bouvines",
        "Poitiers",
        "Rocroi"
      ],
      "reponse": 0,
      "explication": "La bataille de Castillon en 1453 marque la victoire française finale en Guyenne. Elle met fin aux grandes opérations de la guerre de Cent Ans."
    },
    {
      "id": "his-101",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel mouvement intellectuel de la Renaissance remet à l'honneur l'étude des textes antiques et la dignité de l'être humain ?",
      "choix": [
        "Le mercantilisme",
        "L'humanisme",
        "Le jacobinisme",
        "Le romantisme"
      ],
      "reponse": 1,
      "explication": "L'humanisme valorise l'éducation, les langues anciennes et l'étude des auteurs antiques. Il occupe une place centrale dans la Renaissance européenne."
    },
    {
      "id": "his-102",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Où Léonard de Vinci passa-t-il les dernières années de sa vie après son invitation par François Ier ?",
      "choix": [
        "Au château de Versailles",
        "À la Bastille",
        "Au Clos Lucé près d'Amboise",
        "À Avignon"
      ],
      "reponse": 2,
      "explication": "Léonard de Vinci vécut au Clos Lucé, près d'Amboise, à la fin de sa vie. Il mourut en France en 1519."
    },
    {
      "id": "his-103",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel élément célèbre du château de Chambord est souvent associé au génie de la Renaissance ?",
      "choix": [
        "Une tour Eiffel miniature",
        "Un amphithéâtre romain",
        "Une pyramide de verre",
        "Un escalier à double révolution"
      ],
      "reponse": 3,
      "explication": "Chambord est célèbre pour son escalier à double révolution, formé de deux rampes qui s'entrecroisent sans se rencontrer. Le château illustre l'ambition artistique de la Renaissance française."
    },
    {
      "id": "his-104",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel roi signa l'ordonnance de Villers-Cotterêts en 1539 ?",
      "choix": [
        "François Ier",
        "Henri IV",
        "Louis XIV",
        "Charles IX"
      ],
      "reponse": 0,
      "explication": "François Ier signa l'ordonnance de Villers-Cotterêts en 1539. Ce texte est notamment célèbre pour le rôle qu'il donne au français dans les actes officiels."
    },
    {
      "id": "his-105",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Comment appelait-on souvent les protestants français aux XVIe et XVIIe siècles ?",
      "choix": [
        "Les sans-culottes",
        "Les huguenots",
        "Les Girondins",
        "Les Templiers"
      ],
      "reponse": 1,
      "explication": "Les protestants français furent souvent appelés huguenots. Ils furent au cœur des tensions religieuses du XVIe siècle."
    },
    {
      "id": "his-106",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Dans quel contexte immédiat le massacre de la Saint-Barthélemy commença-t-il à Paris en 1572 ?",
      "choix": [
        "Le sacre de Charlemagne",
        "La prise de la Bastille",
        "Les fêtes du mariage d'Henri de Navarre et de Marguerite de Valois",
        "La signature du traité de Verdun"
      ],
      "reponse": 2,
      "explication": "Le massacre débuta quelques jours après le mariage d'Henri de Navarre avec Marguerite de Valois. De nombreux nobles protestants étaient alors présents à Paris."
    },
    {
      "id": "his-107",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel était l'objectif principal de l'édit de Nantes de 1598 ?",
      "choix": [
        "Instaurer le calendrier révolutionnaire",
        "Supprimer les États généraux",
        "Rattacher la Bretagne au royaume",
        "Accorder des droits encadrés aux protestants pour rétablir la paix religieuse"
      ],
      "reponse": 3,
      "explication": "L'édit de Nantes accorda aux protestants une liberté de culte limitée et des garanties politiques. Il visait à mettre fin aux guerres de Religion."
    },
    {
      "id": "his-108",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle conséquence eut la révocation de l'édit de Nantes en 1685 pour de nombreux protestants ?",
      "choix": [
        "L'exil ou la conversion forcée de nombreux huguenots",
        "La création de la Première République",
        "La convocation des États généraux",
        "La fin immédiate de la monarchie"
      ],
      "reponse": 0,
      "explication": "La révocation supprima la tolérance accordée aux protestants par l'édit de Nantes. Beaucoup de huguenots quittèrent le royaume malgré les interdictions."
    },
    {
      "id": "his-109",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Henri IV est le premier roi de France issu de quelle dynastie ?",
      "choix": [
        "Les Carolingiens",
        "Les Bourbons",
        "Les Mérovingiens",
        "Les Valois directs"
      ],
      "reponse": 1,
      "explication": "Henri IV devient roi en 1589 et inaugure la dynastie des Bourbons sur le trône de France. Son règne suit les troubles des guerres de Religion."
    },
    {
      "id": "his-110",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Sous Louis XIII, quelle orientation politique Richelieu chercha-t-il à renforcer ?",
      "choix": [
        "L'indépendance totale des grands seigneurs",
        "Le retour aux royaumes mérovingiens",
        "L'autorité de l'État royal",
        "Le pouvoir des communes révolutionnaires"
      ],
      "reponse": 2,
      "explication": "Richelieu chercha à affermir l'autorité du roi contre les grands féodaux et les puissances rivales. Cette politique prépare le renforcement de l'absolutisme."
    },
    {
      "id": "his-111",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel cardinal gouverna avec Anne d'Autriche pendant la minorité de Louis XIV ?",
      "choix": [
        "Richelieu",
        "Fleury",
        "Talleyrand",
        "Mazarin"
      ],
      "reponse": 3,
      "explication": "Mazarin fut le principal ministre pendant la régence d'Anne d'Autriche. Il dut notamment faire face aux troubles de la Fronde."
    },
    {
      "id": "his-112",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Que désigne la Fronde au XVIIe siècle ?",
      "choix": [
        "Une série de révoltes contre l'autorité royale pendant la minorité de Louis XIV",
        "Une campagne militaire de Jules César",
        "Un traité entre les petits-fils de Charlemagne",
        "Un mouvement philosophique dirigé par Diderot"
      ],
      "reponse": 0,
      "explication": "La Fronde regroupe des révoltes parlementaires et nobiliaires entre 1648 et 1653. Elle marqua durablement le jeune Louis XIV."
    },
    {
      "id": "his-113",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Pourquoi Versailles servit-il aussi d'instrument politique sous Louis XIV ?",
      "choix": [
        "Parce qu'il remplaçait les États généraux permanents",
        "Parce qu'il permettait de rassembler et contrôler la noblesse autour du roi",
        "Parce qu'il était le siège du Parlement européen",
        "Parce qu'il abritait les légions romaines"
      ],
      "reponse": 1,
      "explication": "La cour de Versailles mettait la noblesse sous le regard du roi et organisait la hiérarchie sociale autour de lui. Le château symbolisait aussi la puissance monarchique."
    },
    {
      "id": "his-114",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Comment appelle-t-on souvent la politique économique de Colbert fondée sur les manufactures, le commerce et l'intervention de l'État ?",
      "choix": [
        "Le libéralisme classique",
        "Le fédéralisme",
        "Le colbertisme",
        "Le collectivisme soviétique"
      ],
      "reponse": 2,
      "explication": "Le colbertisme désigne une politique mercantiliste associée à Jean-Baptiste Colbert. Elle vise à enrichir le royaume par la production, les exportations et l'action de l'État."
    },
    {
      "id": "his-115",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle conception du pouvoir caractérise le mieux la monarchie de Louis XIV ?",
      "choix": [
        "La démocratie parlementaire",
        "La république fédérale",
        "La monarchie élective",
        "La monarchie absolue de droit divin"
      ],
      "reponse": 3,
      "explication": "Louis XIV incarne la monarchie absolue, où le roi concentre l'essentiel du pouvoir. Le droit divin affirme que son autorité vient de Dieu."
    },
    {
      "id": "his-116",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Dans quel ouvrage Montesquieu analyse-t-il notamment la séparation des pouvoirs ?",
      "choix": [
        "De l'esprit des lois",
        "Le Code civil",
        "Les Misérables",
        "Le Roman de Renart"
      ],
      "reponse": 0,
      "explication": "Montesquieu publie De l'esprit des lois en 1748. Il y développe une réflexion majeure sur les institutions et la séparation des pouvoirs."
    },
    {
      "id": "his-117",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quelle affaire judiciaire du XVIIIe siècle Voltaire rendit-il célèbre dans son combat contre l'intolérance ?",
      "choix": [
        "L'affaire Dreyfus",
        "L'affaire Calas",
        "L'affaire des Placards",
        "L'affaire du collier de la reine"
      ],
      "reponse": 1,
      "explication": "Voltaire défendit la mémoire de Jean Calas, protestant injustement condamné. Cette affaire devint un symbole de son combat pour la tolérance et contre le fanatisme."
    },
    {
      "id": "his-118",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Chez Rousseau, quelle idée politique est centrale dans Du contrat social ?",
      "choix": [
        "Le pouvoir héréditaire des nobles",
        "La supériorité politique du clergé",
        "La souveraineté du peuple",
        "Le retour à l'Empire romain"
      ],
      "reponse": 2,
      "explication": "Rousseau affirme que la souveraineté appartient au peuple, exprimée par la volonté générale. Cette idée influença fortement la culture politique révolutionnaire."
    },
    {
      "id": "his-119",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel était l'un des buts de l'Encyclopédie au XVIIIe siècle ?",
      "choix": [
        "Remplacer les cathédrales par des palais",
        "Codifier les lois de Napoléon",
        "Organiser les armées de croisade",
        "Rassembler et diffuser les connaissances selon l'esprit critique des Lumières"
      ],
      "reponse": 3,
      "explication": "L'Encyclopédie visait à réunir les savoirs de son temps et à les rendre accessibles. Elle reflète l'esprit critique et la confiance dans la raison des Lumières."
    },
    {
      "id": "his-120",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Que critiquaient fréquemment les philosophes des Lumières dans la société d'Ancien Régime ?",
      "choix": [
        "L'absolutisme, l'intolérance et les privilèges",
        "La chute de l'Empire romain",
        "La construction des cathédrales gothiques",
        "La découverte de l'imprimerie"
      ],
      "reponse": 0,
      "explication": "Les Lumières remettent en cause l'arbitraire, le fanatisme religieux et les inégalités juridiques. Leurs idées nourrissent les débats politiques du XVIIIe siècle."
    },
    {
      "id": "his-121",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Sous l'Ancien Régime, quels ordres bénéficiaient généralement de privilèges fiscaux importants ?",
      "choix": [
        "Les ouvriers et les paysans",
        "Le clergé et la noblesse",
        "Les soldats et les marins",
        "Les étudiants et les artisans"
      ],
      "reponse": 1,
      "explication": "Le clergé et la noblesse formaient les deux ordres privilégiés. Le tiers état supportait une grande part des impôts."
    },
    {
      "id": "his-122",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "En juin 1789, quelle assemblée les députés du tiers état proclamèrent-ils représenter ?",
      "choix": [
        "Le Sénat impérial",
        "Le Parlement de Paris",
        "L'Assemblée nationale",
        "Le Directoire"
      ],
      "reponse": 2,
      "explication": "Les députés du tiers état se proclamèrent Assemblée nationale le 17 juin 1789. Ils affirmaient représenter la nation, et non seulement leur ordre."
    },
    {
      "id": "his-123",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Que jurèrent les députés lors du serment du Jeu de paume le 20 juin 1789 ?",
      "choix": [
        "De restaurer la féodalité",
        "De quitter Versailles immédiatement",
        "De couronner Louis XVI empereur",
        "De ne pas se séparer avant d'avoir donné une constitution à la France"
      ],
      "reponse": 3,
      "explication": "Le serment du Jeu de paume exprime la volonté des députés de poursuivre leur mission constituante. Il marque une étape décisive dans l'affirmation de la souveraineté nationale."
    },
    {
      "id": "his-124",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que décida principalement la nuit du 4 août 1789 ?",
      "choix": [
        "L'abolition des privilèges féodaux",
        "La restauration de l'esclavage",
        "La fondation de l'Empire",
        "La signature du traité de Verdun"
      ],
      "reponse": 0,
      "explication": "Dans la nuit du 4 août, l'Assemblée vota la suppression des privilèges et des droits féodaux. Cet événement marque la fin juridique de l'Ancien Régime social."
    },
    {
      "id": "his-125",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel principe figure dans la Déclaration des droits de l'homme et du citoyen de 1789 ?",
      "choix": [
        "La supériorité héréditaire de la noblesse",
        "Les hommes naissent et demeurent libres et égaux en droits",
        "Le rétablissement du servage",
        "L'interdiction de toute propriété"
      ],
      "reponse": 1,
      "explication": "La Déclaration de 1789 proclame l'égalité en droits, la liberté et la souveraineté de la nation. Elle est un texte fondateur de la Révolution française."
    },
    {
      "id": "his-126",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Pourquoi la fuite à Varennes en juin 1791 affaiblit-elle fortement Louis XVI ?",
      "choix": [
        "Elle prouva qu'il voulait rejoindre l'armée romaine",
        "Elle mit fin à la guerre de Cent Ans",
        "Elle fit douter de sa loyauté envers la Révolution",
        "Elle transforma immédiatement la France en empire"
      ],
      "reponse": 2,
      "explication": "La tentative de fuite du roi fut perçue comme une trahison par une partie de l'opinion. Elle accéléra la rupture entre la monarchie et la Révolution."
    },
    {
      "id": "his-127",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel événement du 10 août 1792 entraîna la chute effective de la monarchie constitutionnelle ?",
      "choix": [
        "La prise d'Alésia",
        "Le sacre de Reims",
        "La signature de l'édit de Nantes",
        "La prise du palais des Tuileries"
      ],
      "reponse": 3,
      "explication": "Le 10 août 1792, les insurgés parisiens prirent le palais des Tuileries. Louis XVI fut suspendu, ce qui ouvrit la voie à l'abolition de la royauté."
    },
    {
      "id": "his-128",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quelle décision de septembre 1792 marque la naissance de la Première République ?",
      "choix": [
        "L'abolition de la royauté",
        "La convocation des États généraux",
        "La mort de Richelieu",
        "La construction de Chambord"
      ],
      "reponse": 0,
      "explication": "La Convention nationale abolit la royauté le 21 septembre 1792. Le lendemain devint le premier jour de l'an I du calendrier républicain."
    },
    {
      "id": "his-129",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quand Louis XVI fut-il exécuté à Paris ?",
      "choix": [
        "14 juillet 1789",
        "21 janvier 1793",
        "9 thermidor an II",
        "18 brumaire an VIII"
      ],
      "reponse": 1,
      "explication": "Louis XVI fut guillotiné le 21 janvier 1793, après son procès devant la Convention. Cet événement radicalisa encore la Révolution et la guerre européenne."
    },
    {
      "id": "his-130",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel régime gouverna la France après la Convention, de 1795 à 1799 ?",
      "choix": [
        "Le Consulat",
        "La monarchie de Juillet",
        "Le Directoire",
        "Le Second Empire"
      ],
      "reponse": 2,
      "explication": "Le Directoire fut instauré par la Constitution de l'an III en 1795. Il dura jusqu'au coup d'État du 18 Brumaire en 1799."
    },
    {
      "id": "his-131",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel texte de 1804 a durablement organisé le droit civil français sous le Consulat puis l'Empire ?",
      "choix": [
        "Le Code civil",
        "La loi de séparation des Églises et de l'État",
        "Le traité de Versailles",
        "La Charte de 1830"
      ],
      "reponse": 0,
      "explication": "Le Code civil, promulgué en 1804, unifie de nombreuses règles de droit privé en France. Il traite notamment de la famille, de la propriété et des contrats."
    },
    {
      "id": "his-132",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle fonction administrative créée sous Napoléon Bonaparte représente l'État dans les départements ?",
      "choix": [
        "Le maire élu au suffrage universel direct",
        "Le préfet",
        "Le président de région",
        "Le député européen"
      ],
      "reponse": 1,
      "explication": "Les préfets sont institués en 1800 pour représenter le pouvoir central dans les départements. Ils restent aujourd'hui des acteurs importants de l'administration de l'État."
    },
    {
      "id": "his-133",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel type d'établissement scolaire Napoléon Bonaparte développe-t-il pour former les élites administratives et militaires ?",
      "choix": [
        "Les écoles maternelles",
        "Les collèges jésuites",
        "Les lycées",
        "Les universités populaires"
      ],
      "reponse": 2,
      "explication": "Les lycées sont créés en 1802 sous le Consulat. Ils visent à former des cadres instruits au service de l'État."
    },
    {
      "id": "his-134",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle bataille de 1805 est souvent considérée comme la plus grande victoire militaire de Napoléon Ier ?",
      "choix": [
        "Waterloo",
        "Sedan",
        "Valmy",
        "Austerlitz"
      ],
      "reponse": 3,
      "explication": "La bataille d'Austerlitz, le 2 décembre 1805, oppose Napoléon aux armées russe et autrichienne. Elle est aussi appelée la bataille des Trois Empereurs."
    },
    {
      "id": "his-135",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle défaite de 1815 marque la fin définitive du pouvoir de Napoléon Ier ?",
      "choix": [
        "Waterloo",
        "Iéna",
        "Marengo",
        "Wagram"
      ],
      "reponse": 0,
      "explication": "Napoléon est vaincu à Waterloo le 18 juin 1815 par les armées coalisées. Cette défaite met fin aux Cent-Jours et conduit à son exil."
    },
    {
      "id": "his-136",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Sur quelle île Napoléon Ier est-il exilé après Waterloo, jusqu'à sa mort en 1821 ?",
      "choix": [
        "L'île d'Elbe",
        "Sainte-Hélène",
        "La Corse",
        "Malte"
      ],
      "reponse": 1,
      "explication": "Après Waterloo, Napoléon est envoyé par les Britanniques à Sainte-Hélène, dans l'Atlantique sud. Il y meurt en 1821."
    },
    {
      "id": "his-137",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel roi monte sur le trône lors de la Restauration après la chute de Napoléon Ier ?",
      "choix": [
        "Louis-Philippe",
        "Napoléon III",
        "Louis XVIII",
        "Charles de Gaulle"
      ],
      "reponse": 2,
      "explication": "Louis XVIII, frère de Louis XVI, règne pendant la Restauration. Il cherche à rétablir la monarchie tout en conservant certains acquis révolutionnaires."
    },
    {
      "id": "his-138",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Comment appelle-t-on les journées révolutionnaires de juillet 1830 qui renversent Charles X ?",
      "choix": [
        "Les journées de Juin",
        "La Semaine sanglante",
        "La Terreur blanche",
        "Les Trois Glorieuses"
      ],
      "reponse": 3,
      "explication": "Les Trois Glorieuses se déroulent les 27, 28 et 29 juillet 1830. Elles entraînent la chute de Charles X et l'installation de la monarchie de Juillet."
    },
    {
      "id": "his-139",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel souverain règne sur la France pendant la monarchie de Juillet ?",
      "choix": [
        "Louis-Philippe",
        "Louis XVIII",
        "Charles X",
        "Napoléon III"
      ],
      "reponse": 0,
      "explication": "Louis-Philippe devient roi des Français en 1830. Son régime, appelé monarchie de Juillet, dure jusqu'à la révolution de 1848."
    },
    {
      "id": "his-140",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle grande réforme électorale accompagne la naissance de la IIe République en 1848 ?",
      "choix": [
        "Le vote réservé aux propriétaires",
        "Le suffrage universel masculin",
        "Le vote obligatoire",
        "Le suffrage universel féminin"
      ],
      "reponse": 1,
      "explication": "La IIe République instaure le suffrage universel masculin en 1848. Tous les hommes majeurs peuvent alors voter, sans condition de richesse."
    },
    {
      "id": "his-141",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel homme politique est particulièrement associé au décret qui abolit l'esclavage dans les colonies françaises en 1848 ?",
      "choix": [
        "Adolphe Thiers",
        "Jules Ferry",
        "Victor Schoelcher",
        "Georges Clemenceau"
      ],
      "reponse": 2,
      "explication": "Victor Schoelcher joue un rôle majeur dans la préparation du décret d'abolition de 1848. Cette mesure concerne les colonies françaises où l'esclavage existait encore."
    },
    {
      "id": "his-142",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel dirigeant fonde le Second Empire après avoir été président de la IIe République ?",
      "choix": [
        "Louis XVIII",
        "Charles X",
        "Adolphe Thiers",
        "Napoléon III"
      ],
      "reponse": 3,
      "explication": "Louis-Napoléon Bonaparte est élu président en 1848, puis réalise un coup d'État en 1851. Il devient Napoléon III et fonde le Second Empire."
    },
    {
      "id": "his-143",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel préfet est chargé de transformer profondément Paris sous le Second Empire ?",
      "choix": [
        "Georges-Eugène Haussmann",
        "Jean Moulin",
        "Jules Ferry",
        "Léon Gambetta"
      ],
      "reponse": 0,
      "explication": "Le baron Haussmann dirige de grands travaux à Paris sous Napoléon III. Boulevards, parcs et réseaux modernes transforment alors la capitale."
    },
    {
      "id": "his-144",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle défaite française de 1870 entraîne la capture de Napoléon III et la chute du Second Empire ?",
      "choix": [
        "Berezina",
        "Sedan",
        "Austerlitz",
        "Fontenoy"
      ],
      "reponse": 1,
      "explication": "La défaite de Sedan, le 2 septembre 1870, oppose la France à la Prusse et à ses alliés. Napoléon III est fait prisonnier, ce qui précipite la fin du Second Empire."
    },
    {
      "id": "his-145",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel mouvement insurrectionnel gouverne brièvement Paris en 1871 avant d'être réprimé ?",
      "choix": [
        "La Fronde",
        "La Ligue",
        "La Commune de Paris",
        "Le Directoire"
      ],
      "reponse": 2,
      "explication": "La Commune de Paris se déroule de mars à mai 1871, dans le contexte de la défaite contre la Prusse. Elle est écrasée lors de la Semaine sanglante."
    },
    {
      "id": "his-146",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Que proclame-t-on à Paris le 4 septembre 1870, après l'annonce de la défaite de Sedan ?",
      "choix": [
        "Le retour de la monarchie absolue",
        "La création du Consulat",
        "L'annexion de l'Alsace-Lorraine",
        "La IIIe République"
      ],
      "reponse": 3,
      "explication": "La IIIe République est proclamée le 4 septembre 1870 à Paris. Elle s'installe dans un contexte difficile, marqué par la guerre et l'instabilité politique."
    },
    {
      "id": "his-147",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel principe institutionnel la loi de 1905 affirme-t-elle en France ?",
      "choix": [
        "La séparation des Églises et de l'État",
        "La restauration de la monarchie",
        "La suppression des communes",
        "La création de l'Empire colonial"
      ],
      "reponse": 0,
      "explication": "La loi de 1905 établit la séparation des Églises et de l'État. Elle est une étape majeure dans l'affirmation de la laïcité républicaine."
    },
    {
      "id": "his-148",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Que permet principalement la loi de 1901 en France ?",
      "choix": [
        "La création des régions",
        "La liberté d'association",
        "Le droit de grève des fonctionnaires",
        "L'élection du président au suffrage direct"
      ],
      "reponse": 1,
      "explication": "La loi de 1901 garantit un cadre juridique aux associations. Elle facilite l'organisation de la vie civile, culturelle, sportive ou militante."
    },
    {
      "id": "his-149",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel écrivain publie « J'accuse...! » pendant l'affaire Dreyfus ?",
      "choix": [
        "Victor Hugo",
        "Marcel Proust",
        "Émile Zola",
        "Albert Camus"
      ],
      "reponse": 2,
      "explication": "Émile Zola publie « J'accuse...! » en 1898 pour défendre Alfred Dreyfus. L'affaire révèle de fortes tensions autour de l'antisémitisme, de l'armée et de la justice."
    },
    {
      "id": "his-150",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel dirigeant socialiste, défenseur de la paix, est assassiné à Paris le 31 juillet 1914 ?",
      "choix": [
        "Léon Blum",
        "Aristide Briand",
        "Raymond Poincaré",
        "Jean Jaurès"
      ],
      "reponse": 3,
      "explication": "Jean Jaurès est assassiné à la veille de la Première Guerre mondiale. Il était une figure majeure du socialisme français et du pacifisme."
    },
    {
      "id": "his-151",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel homme politique français est surnommé « le Père la Victoire » après la Première Guerre mondiale ?",
      "choix": [
        "Georges Clemenceau",
        "Jules Grévy",
        "Adolphe Thiers",
        "Pierre Mendès France"
      ],
      "reponse": 0,
      "explication": "Georges Clemenceau dirige le gouvernement français à partir de 1917. Son rôle pendant la fin de la guerre lui vaut le surnom de « Père la Victoire »."
    },
    {
      "id": "his-152",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle bataille de 1914 arrête l'avancée allemande vers Paris au début de la Première Guerre mondiale ?",
      "choix": [
        "La Somme",
        "La Marne",
        "Verdun",
        "Chemin des Dames"
      ],
      "reponse": 1,
      "explication": "La première bataille de la Marne a lieu en septembre 1914. Elle empêche une victoire rapide allemande et contribue à l'installation de la guerre de position."
    },
    {
      "id": "his-153",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle bataille de 1916 est devenue un symbole de la résistance et des souffrances des soldats français ?",
      "choix": [
        "Austerlitz",
        "Waterloo",
        "Verdun",
        "Bouvines"
      ],
      "reponse": 2,
      "explication": "Verdun dure de février à décembre 1916. La bataille symbolise l'extrême violence de la guerre de tranchées."
    },
    {
      "id": "his-154",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Comment appelle-t-on familièrement les soldats français de la Première Guerre mondiale ?",
      "choix": [
        "Les grognards",
        "Les hussards",
        "Les tirailleurs",
        "Les poilus"
      ],
      "reponse": 3,
      "explication": "Les soldats français de 1914-1918 sont souvent appelés les poilus. Ce terme évoque leur endurance et les conditions difficiles du front."
    },
    {
      "id": "his-155",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle date commémore l'armistice qui met fin aux combats de la Première Guerre mondiale ?",
      "choix": [
        "Le 11 novembre 1918",
        "Le 14 juillet 1789",
        "Le 8 mai 1945",
        "Le 2 décembre 1805"
      ],
      "reponse": 0,
      "explication": "L'armistice est signé le 11 novembre 1918. Cette date est devenue une journée nationale de commémoration en France."
    },
    {
      "id": "his-156",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel traité de 1919 fixe les conditions de paix avec l'Allemagne après la Première Guerre mondiale ?",
      "choix": [
        "Le traité de Rome",
        "Le traité de Versailles",
        "Le traité de Maastricht",
        "Le traité de Tilsit"
      ],
      "reponse": 1,
      "explication": "Le traité de Versailles est signé en 1919. Il redessine une partie de l'Europe et impose de lourdes conditions à l'Allemagne vaincue."
    },
    {
      "id": "his-157",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle avancée sociale est associée au Front populaire en 1936 ?",
      "choix": [
        "La création des départements",
        "La suppression du Parlement",
        "Les congés payés",
        "La restauration de la monarchie"
      ],
      "reponse": 2,
      "explication": "Le Front populaire adopte en 1936 des mesures sociales importantes, dont les congés payés. Il est dirigé par Léon Blum."
    },
    {
      "id": "his-158",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle défaite française de 1954 marque la fin prochaine de la guerre d'Indochine ?",
      "choix": [
        "Mers el-Kébir",
        "Sétif",
        "Bir Hakeim",
        "Diên Biên Phu"
      ],
      "reponse": 3,
      "explication": "La bataille de Diên Biên Phu se termine par une défaite française en mai 1954. Elle précède les accords de Genève qui mettent fin à la présence coloniale française en Indochine."
    },
    {
      "id": "his-159",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle période correspond à la guerre d'Algérie ?",
      "choix": [
        "1954-1962",
        "1914-1918",
        "1939-1945",
        "1870-1871"
      ],
      "reponse": 0,
      "explication": "La guerre d'Algérie commence en 1954 et s'achève en 1962. Elle conduit à l'indépendance de l'Algérie après une guerre longue et violente."
    },
    {
      "id": "his-160",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quels accords ouvrent la voie au cessez-le-feu et à l'indépendance de l'Algérie en 1962 ?",
      "choix": [
        "Les accords de Matignon",
        "Les accords d'Évian",
        "Les accords de Munich",
        "Les accords de Grenelle"
      ],
      "reponse": 1,
      "explication": "Les accords d'Évian sont signés en mars 1962 entre le gouvernement français et le FLN. Ils prévoient notamment un cessez-le-feu et un processus d'autodétermination."
    },
    {
      "id": "his-161",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel acte signé en juin 1940 met fin aux combats entre la France vaincue et l'Allemagne nazie ?",
      "choix": [
        "Le traité de Versailles",
        "Les accords d'Évian",
        "L'armistice de 1940",
        "Le pacte de Varsovie"
      ],
      "reponse": 2,
      "explication": "L'armistice du 22 juin 1940 est signé après la défaite militaire française. Il entraîne l'occupation d'une partie du territoire et l'installation du régime de Vichy."
    },
    {
      "id": "his-162",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle politique le régime de Vichy mène-t-il vis-à-vis de l'Allemagne nazie ?",
      "choix": [
        "La neutralité armée totale",
        "L'alliance avec les Alliés",
        "La guerre contre l'Allemagne",
        "La collaboration"
      ],
      "reponse": 3,
      "explication": "Le régime de Vichy, dirigé par le maréchal Pétain, engage une politique de collaboration avec l'Allemagne nazie. Il adopte aussi des mesures autoritaires et antisémites."
    },
    {
      "id": "his-163",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel résistant est chargé par de Gaulle d'unifier les mouvements de Résistance intérieure ?",
      "choix": [
        "Jean Moulin",
        "Pierre Laval",
        "Philippe Pétain",
        "Marcel Déat"
      ],
      "reponse": 0,
      "explication": "Jean Moulin joue un rôle central dans l'unification de la Résistance intérieure. Il contribue à la création du Conseil national de la Résistance en 1943."
    },
    {
      "id": "his-164",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel organisme de la Résistance adopte en 1944 un programme de réformes sociales et démocratiques ?",
      "choix": [
        "Le Directoire",
        "Le Conseil national de la Résistance",
        "La Chambre des pairs",
        "Le Sénat conservateur"
      ],
      "reponse": 1,
      "explication": "Le Conseil national de la Résistance rassemble des mouvements de résistance, partis et syndicats. Son programme inspire plusieurs réformes de la Libération."
    },
    {
      "id": "his-165",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Que désigne la rafle du Vél d'Hiv de juillet 1942 ?",
      "choix": [
        "Une bataille de la Libération",
        "Une grève générale à Paris",
        "L'arrestation massive de Juifs par la police française",
        "Un bombardement allié"
      ],
      "reponse": 2,
      "explication": "La rafle du Vél d'Hiv est une arrestation massive de Juifs à Paris et en banlieue par la police française. Les victimes sont ensuite déportées, pour la plupart vers Auschwitz."
    },
    {
      "id": "his-166",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Que signifie le terme Shoah dans l'histoire de la Seconde Guerre mondiale ?",
      "choix": [
        "La reconstruction de l'Europe",
        "La guerre sous-marine",
        "La défaite de 1940",
        "L'extermination des Juifs d'Europe par les nazis"
      ],
      "reponse": 3,
      "explication": "La Shoah désigne le génocide des Juifs d'Europe organisé par l'Allemagne nazie et ses complices. Environ six millions de Juifs furent assassinés."
    },
    {
      "id": "his-167",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel débarquement allié du 6 juin 1944 contribue à libérer la France occupée ?",
      "choix": [
        "Le débarquement de Normandie",
        "Le débarquement de Gallipoli",
        "Le débarquement de Suez",
        "Le débarquement de Crimée"
      ],
      "reponse": 0,
      "explication": "Le débarquement de Normandie commence le 6 juin 1944. Il ouvre un front majeur contre l'Allemagne nazie en Europe occidentale."
    },
    {
      "id": "his-168",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle ville est libérée en août 1944 avec l'entrée de la 2e DB du général Leclerc ?",
      "choix": [
        "Lyon",
        "Paris",
        "Bordeaux",
        "Strasbourg"
      ],
      "reponse": 1,
      "explication": "Paris est libérée en août 1944 après une insurrection et l'arrivée des forces alliées. La 2e division blindée du général Leclerc y joue un rôle important."
    },
    {
      "id": "his-169",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que commémore le 8 mai 1945 en France ?",
      "choix": [
        "La prise de la Bastille",
        "La fin de la guerre d'Algérie",
        "La victoire sur l'Allemagne nazie en Europe",
        "La proclamation de la IIIe République"
      ],
      "reponse": 2,
      "explication": "Le 8 mai 1945 marque la capitulation de l'Allemagne nazie en Europe. En France, c'est une date de commémoration de la fin de la Seconde Guerre mondiale en Europe."
    },
    {
      "id": "his-170",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle institution sociale est créée en France à la Libération pour protéger les travailleurs et leurs familles ?",
      "choix": [
        "La Banque de France",
        "L'Académie française",
        "Le Conseil constitutionnel",
        "La Sécurité sociale"
      ],
      "reponse": 3,
      "explication": "La Sécurité sociale est créée en 1945 dans le contexte des réformes de la Libération. Elle vise à couvrir notamment les risques liés à la maladie, à la vieillesse et à la famille."
    },
    {
      "id": "his-171",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Que désigne l'expression « Trente Glorieuses » ?",
      "choix": [
        "Une période de forte croissance et de modernisation après 1945",
        "Les trente jours de la Commune de Paris",
        "Une série de victoires napoléoniennes",
        "La durée exacte de la IIIe République"
      ],
      "reponse": 0,
      "explication": "Les Trente Glorieuses désignent la période de croissance économique et de transformation sociale qui suit la Seconde Guerre mondiale. L'expression couvre généralement les années 1945 à 1975."
    },
    {
      "id": "his-172",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel général devient le premier président de la Ve République ?",
      "choix": [
        "Georges Pompidou",
        "Charles de Gaulle",
        "François Mitterrand",
        "Jacques Chirac"
      ],
      "reponse": 1,
      "explication": "Charles de Gaulle revient au pouvoir lors de la crise de 1958. Il devient ensuite le premier président de la Ve République."
    },
    {
      "id": "his-173",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel mouvement de contestation étudiante et sociale secoue la France au printemps 1968 ?",
      "choix": [
        "La Commune de Paris",
        "Les Trois Glorieuses",
        "Mai 68",
        "Le Front populaire"
      ],
      "reponse": 2,
      "explication": "Mai 68 commence par une contestation étudiante puis s'étend à une grève générale. Le mouvement remet en cause l'autorité, le travail et les normes sociales de l'époque."
    },
    {
      "id": "his-174",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Sous la présidence de Valéry Giscard d'Estaing, à quel âge la majorité civile est-elle abaissée ?",
      "choix": [
        "16 ans",
        "20 ans",
        "21 ans",
        "18 ans"
      ],
      "reponse": 3,
      "explication": "La majorité civile est abaissée de 21 à 18 ans en 1974. Cette réforme marque une reconnaissance plus précoce de la pleine capacité civique des jeunes adultes."
    },
    {
      "id": "his-175",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle loi de 1975, portée par Simone Veil, légalise l'interruption volontaire de grossesse ?",
      "choix": [
        "La loi Veil",
        "La loi Falloux",
        "La loi Waldeck-Rousseau",
        "La loi Debré"
      ],
      "reponse": 0,
      "explication": "La loi Veil de 1975 légalise l'interruption volontaire de grossesse sous certaines conditions. Elle est portée par Simone Veil, alors ministre de la Santé."
    },
    {
      "id": "his-176",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quelle alternance politique majeure se produit avec l'élection présidentielle de 1981 ?",
      "choix": [
        "Le retour d'un roi",
        "L'arrivée de François Mitterrand, premier président socialiste de la Ve République",
        "La suppression de l'élection présidentielle",
        "La création du Second Empire"
      ],
      "reponse": 1,
      "explication": "François Mitterrand est élu président en 1981. Son élection marque la première alternance gauche-droite à la présidence sous la Ve République."
    },
    {
      "id": "his-177",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel président de la République française succède à Jacques Chirac en 2007 ?",
      "choix": [
        "François Hollande",
        "Emmanuel Macron",
        "Georges Pompidou",
        "Nicolas Sarkozy"
      ],
      "reponse": 3,
      "explication": "Nicolas Sarkozy est élu président de la République en 2007. Il exerce un mandat jusqu'en 2012, avant l'élection de François Hollande."
    },
    {
      "id": "his-178",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle loi promulguée en 2013 ouvre le mariage aux couples de même sexe ?",
      "choix": [
        "La loi ouvrant le mariage aux couples de même sexe",
        "La loi sur les congés payés",
        "La loi de séparation de 1905",
        "La loi sur les associations"
      ],
      "reponse": 0,
      "explication": "La loi de 2013, souvent appelée « mariage pour tous », ouvre le mariage et l'adoption aux couples de même sexe. Le quinquennat de François Hollande est aussi marqué par les attentats terroristes de 2015, commémorés avec solennité."
    },
    {
      "id": "his-179",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel monument parisien est gravement endommagé par un incendie en avril 2019 ?",
      "choix": [
        "Le Panthéon",
        "La cathédrale Notre-Dame de Paris",
        "L'Arc de Triomphe",
        "Le palais de l'Élysée"
      ],
      "reponse": 1,
      "explication": "Notre-Dame de Paris est touchée par un incendie majeur le 15 avril 2019. Les années récentes sont aussi marquées par des cérémonies mémorielles au Panthéon, comme l'entrée de Joséphine Baker en 2021."
    },
    {
      "id": "his-180",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "En 1984, quel geste symbolique a scellé la réconciliation franco-allemande sur le champ de bataille de Verdun ?",
      "choix": [
        "La signature d’un nouveau traité de paix entre la France et l’Allemagne",
        "La poignée de main entre François Mitterrand et le chancelier Helmut Kohl",
        "L’entrée conjointe des deux pays dans l’OTAN",
        "La création de la Communauté économique européenne"
      ],
      "reponse": 1,
      "explication": "Le 22 septembre 1984, le président François Mitterrand et le chancelier allemand Helmut Kohl se sont tenus la main devant l’ossuaire de Douaumont, à Verdun. Cette image est devenue le symbole de la réconciliation entre la France et l’Allemagne."
    },
    {
      "id": "geo-001",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Combien la France compte-t-elle de régions ?",
      "choix": [
        "13",
        "18",
        "22",
        "27"
      ],
      "reponse": 1,
      "explication": "La France compte 18 régions : 13 en métropole (depuis la réforme de 2016) et 5 régions d'outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte)."
    },
    {
      "id": "geo-002",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel est le plus haut sommet de France ?",
      "choix": [
        "Le pic du Midi",
        "Le mont Blanc",
        "Le puy de Dôme",
        "Le mont Ventoux"
      ],
      "reponse": 1,
      "explication": "Le mont Blanc, dans les Alpes (Haute-Savoie), culmine à environ 4 808 mètres. C'est aussi le plus haut sommet d'Europe occidentale."
    },
    {
      "id": "geo-003",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel est le plus long fleuve de France ?",
      "choix": [
        "La Seine",
        "Le Rhône",
        "La Loire",
        "La Garonne"
      ],
      "reponse": 2,
      "explication": "La Loire mesure environ 1 000 km et se jette dans l'océan Atlantique à Saint-Nazaire. Les autres grands fleuves sont la Seine, le Rhône, la Garonne et le Rhin."
    },
    {
      "id": "geo-004",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle est la deuxième ville de France par sa population ?",
      "choix": [
        "Lyon",
        "Marseille",
        "Toulouse",
        "Bordeaux"
      ],
      "reponse": 1,
      "explication": "Marseille, sur la Méditerranée, est la deuxième commune la plus peuplée après Paris, suivie de Lyon et Toulouse."
    },
    {
      "id": "geo-005",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Combien de départements compte la France ?",
      "choix": [
        "96",
        "100",
        "101",
        "110"
      ],
      "reponse": 2,
      "explication": "La France compte 101 départements : 96 en métropole et 5 en outre-mer. Ils ont été créés en 1790 pendant la Révolution française."
    },
    {
      "id": "geo-006",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Lequel de ces territoires est un département et région d'outre-mer (DROM) ?",
      "choix": [
        "La Nouvelle-Calédonie",
        "La Polynésie française",
        "La Réunion",
        "Saint-Pierre-et-Miquelon"
      ],
      "reponse": 2,
      "explication": "Les 5 DROM sont la Guadeloupe, la Martinique, la Guyane, La Réunion et Mayotte. La Nouvelle-Calédonie et la Polynésie française ont des statuts particuliers."
    },
    {
      "id": "geo-007",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Dans quel océan se situe La Réunion ?",
      "choix": [
        "L'océan Atlantique",
        "L'océan Indien",
        "L'océan Pacifique",
        "La mer Méditerranée"
      ],
      "reponse": 1,
      "explication": "La Réunion est située dans l'océan Indien, près de Madagascar et de l'île Maurice. Son chef-lieu est Saint-Denis et son volcan actif est le piton de la Fournaise."
    },
    {
      "id": "geo-008",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Où se trouve la base spatiale française de Kourou ?",
      "choix": [
        "En Guadeloupe",
        "En Guyane",
        "À La Réunion",
        "En Martinique"
      ],
      "reponse": 1,
      "explication": "Le Centre spatial guyanais, à Kourou en Guyane (Amérique du Sud), sert de base de lancement européenne depuis 1968, notamment pour les fusées Ariane."
    },
    {
      "id": "geo-009",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Avec lequel de ces pays la France métropolitaine n'a-t-elle PAS de frontière terrestre ?",
      "choix": [
        "Le Portugal",
        "La Belgique",
        "La Suisse",
        "L'Andorre"
      ],
      "reponse": 0,
      "explication": "La France métropolitaine a 8 voisins terrestres : Belgique, Luxembourg, Allemagne, Suisse, Italie, Espagne, Andorre et Monaco. Le Portugal n'est pas frontalier. La Guyane est voisine du Brésil et du Suriname."
    },
    {
      "id": "geo-010",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle chaîne de montagnes sépare la France de l'Espagne ?",
      "choix": [
        "Les Alpes",
        "Le Jura",
        "Les Pyrénées",
        "Les Vosges"
      ],
      "reponse": 2,
      "explication": "Les Pyrénées forment la frontière naturelle avec l'Espagne et l'Andorre. Les Alpes bordent l'Italie et la Suisse, le Jura la Suisse, et les Vosges se situent près de l'Allemagne."
    },
    {
      "id": "geo-011",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel est le chef-lieu de la région Bretagne ?",
      "choix": [
        "Rennes",
        "Nantes",
        "Brest",
        "Vannes"
      ],
      "reponse": 0,
      "explication": "Rennes est le chef-lieu de la Bretagne. Nantes est aujourd'hui le chef-lieu des Pays de la Loire, même si elle a une histoire liée à la Bretagne."
    },
    {
      "id": "geo-012",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Dans quelle région se trouve Strasbourg ?",
      "choix": [
        "Bourgogne-Franche-Comté",
        "Grand Est",
        "Hauts-de-France",
        "Normandie"
      ],
      "reponse": 1,
      "explication": "Strasbourg se situe dans le Grand Est, en Alsace. Elle est aussi le chef-lieu de cette région."
    },
    {
      "id": "geo-013",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle mer borde Marseille ?",
      "choix": [
        "La Manche",
        "L'océan Atlantique",
        "La mer Méditerranée",
        "La mer du Nord"
      ],
      "reponse": 2,
      "explication": "Marseille est située sur le littoral méditerranéen. C'est le grand port français de la Méditerranée."
    },
    {
      "id": "geo-014",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel fleuve traverse Paris ?",
      "choix": [
        "La Loire",
        "La Garonne",
        "Le Rhône",
        "La Seine"
      ],
      "reponse": 3,
      "explication": "La Seine traverse Paris d'est en ouest. Ses quais font partie des paysages les plus connus de la capitale."
    },
    {
      "id": "geo-015",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel est le chef-lieu de la région Auvergne-Rhône-Alpes ?",
      "choix": [
        "Lyon",
        "Grenoble",
        "Clermont-Ferrand",
        "Saint-Étienne"
      ],
      "reponse": 0,
      "explication": "Lyon est le chef-lieu d'Auvergne-Rhône-Alpes. La région réunit notamment l'ancienne Auvergne et l'ancienne région Rhône-Alpes."
    },
    {
      "id": "geo-016",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Dans quelle partie de la France se situe Lille ?",
      "choix": [
        "Le Sud-Ouest",
        "Le Nord",
        "Le Centre",
        "La Corse"
      ],
      "reponse": 1,
      "explication": "Lille se situe dans le nord de la France, près de la frontière belge. C'est le chef-lieu des Hauts-de-France."
    },
    {
      "id": "geo-017",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle ville est le chef-lieu de la région Nouvelle-Aquitaine ?",
      "choix": [
        "Poitiers",
        "Limoges",
        "Bordeaux",
        "La Rochelle"
      ],
      "reponse": 2,
      "explication": "Bordeaux est le chef-lieu de la Nouvelle-Aquitaine. Cette grande région s'étend du Poitou au Pays basque et au Limousin."
    },
    {
      "id": "geo-018",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Sur quelle île française se trouve Ajaccio ?",
      "choix": [
        "Belle-Île",
        "L'île d'Oléron",
        "L'île de Ré",
        "La Corse"
      ],
      "reponse": 3,
      "explication": "Ajaccio se trouve en Corse, en mer Méditerranée. C'est la préfecture de la Corse-du-Sud."
    },
    {
      "id": "geo-019",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle chaîne de montagnes se trouve à l'est de la France, près de la Suisse et de l'Italie ?",
      "choix": [
        "Les Alpes",
        "Les Vosges",
        "Les Ardennes",
        "Le Massif armoricain"
      ],
      "reponse": 0,
      "explication": "Les Alpes occupent une partie de l'est et du sud-est de la France. Elles s'étendent aussi en Suisse, en Italie et dans d'autres pays européens."
    },
    {
      "id": "geo-020",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel océan borde la façade ouest de la France métropolitaine ?",
      "choix": [
        "L'océan Indien",
        "L'océan Atlantique",
        "L'océan Pacifique",
        "L'océan Arctique"
      ],
      "reponse": 1,
      "explication": "La façade ouest de la France métropolitaine donne sur l'océan Atlantique. On y trouve notamment la Bretagne, la Vendée et la côte aquitaine."
    },
    {
      "id": "geo-021",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle ville est connue comme capitale de l'Occitanie administrative ?",
      "choix": [
        "Montpellier",
        "Perpignan",
        "Toulouse",
        "Nîmes"
      ],
      "reponse": 2,
      "explication": "Toulouse est le chef-lieu de la région Occitanie. Montpellier est également une grande ville importante de cette région."
    },
    {
      "id": "geo-022",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "La Côte d'Azur se trouve principalement sur quel littoral ?",
      "choix": [
        "Le littoral de la Manche",
        "La côte atlantique",
        "La mer du Nord",
        "Le littoral méditerranéen"
      ],
      "reponse": 3,
      "explication": "La Côte d'Azur se situe sur le littoral méditerranéen, autour de Nice, Cannes et Monaco. Elle fait partie de la région Provence-Alpes-Côte d'Azur."
    },
    {
      "id": "geo-023",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle ville est le chef-lieu des Pays de la Loire ?",
      "choix": [
        "Nantes",
        "Angers",
        "Le Mans",
        "Tours"
      ],
      "reponse": 0,
      "explication": "Nantes est le chef-lieu de la région Pays de la Loire. Elle est située près de l'estuaire de la Loire."
    },
    {
      "id": "geo-024",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Où se situe Grenoble ?",
      "choix": [
        "En Bretagne",
        "Dans les Alpes",
        "Dans les Ardennes",
        "Sur la côte atlantique"
      ],
      "reponse": 1,
      "explication": "Grenoble est située dans les Alpes, au cœur d'une vallée entourée de massifs montagneux. Elle est la préfecture de l'Isère."
    },
    {
      "id": "geo-025",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel fleuve passe par Lyon avant de rejoindre la Méditerranée ?",
      "choix": [
        "La Seine",
        "La Loire",
        "Le Rhône",
        "La Garonne"
      ],
      "reponse": 2,
      "explication": "Le Rhône traverse Lyon puis descend vers le sud. Il se jette dans la mer Méditerranée par un delta en Camargue."
    },
    {
      "id": "geo-026",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle ville normande est un grand port sur l'estuaire de la Seine ?",
      "choix": [
        "Caen",
        "Cherbourg",
        "Rouen",
        "Le Havre"
      ],
      "reponse": 3,
      "explication": "Le Havre est un grand port maritime situé à l'embouchure de la Seine. Il se trouve en Normandie, sur la Manche."
    },
    {
      "id": "geo-027",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel est le chef-lieu de la région Centre-Val de Loire ?",
      "choix": [
        "Orléans",
        "Tours",
        "Bourges",
        "Blois"
      ],
      "reponse": 0,
      "explication": "Orléans est le chef-lieu de la région Centre-Val de Loire. La région est traversée par la Loire et comprend plusieurs villes historiques."
    },
    {
      "id": "geo-028",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle ville est le chef-lieu de la Bourgogne-Franche-Comté ?",
      "choix": [
        "Besançon",
        "Dijon",
        "Auxerre",
        "Nevers"
      ],
      "reponse": 1,
      "explication": "Dijon est le chef-lieu de la région Bourgogne-Franche-Comté. Besançon reste une grande ville régionale importante."
    },
    {
      "id": "geo-029",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle ville se situe sur la Garonne, dans le Sud-Ouest ?",
      "choix": [
        "Nice",
        "Nantes",
        "Toulouse",
        "Reims"
      ],
      "reponse": 2,
      "explication": "Toulouse est située sur la Garonne. La ville est un grand pôle urbain du Sud-Ouest de la France."
    },
    {
      "id": "geo-030",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle région a pour chef-lieu Rouen ?",
      "choix": [
        "Bretagne",
        "Hauts-de-France",
        "Grand Est",
        "Normandie"
      ],
      "reponse": 3,
      "explication": "Rouen est le chef-lieu de la Normandie. La région comprend aussi Caen, Le Havre et Cherbourg-en-Cotentin."
    },
    {
      "id": "geo-031",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle région métropolitaine a pour chef-lieu Marseille ?",
      "choix": [
        "Provence-Alpes-Côte d'Azur",
        "Occitanie",
        "Corse",
        "Auvergne-Rhône-Alpes"
      ],
      "reponse": 0,
      "explication": "Marseille est le chef-lieu de Provence-Alpes-Côte d'Azur. Cette région comprend notamment les Bouches-du-Rhône, le Var, les Alpes-Maritimes et les Alpes du Sud."
    },
    {
      "id": "geo-032",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Dans quelle région administrative se trouve Amiens ?",
      "choix": [
        "Normandie",
        "Hauts-de-France",
        "Grand Est",
        "Île-de-France"
      ],
      "reponse": 1,
      "explication": "Amiens se trouve dans les Hauts-de-France et est la préfecture de la Somme. Le chef-lieu régional est Lille."
    },
    {
      "id": "geo-033",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel cours d'eau forme une partie de la frontière entre la France et l'Allemagne ?",
      "choix": [
        "La Moselle",
        "La Marne",
        "Le Rhin",
        "La Saône"
      ],
      "reponse": 2,
      "explication": "Le Rhin marque une partie de la frontière franco-allemande en Alsace. Il est aussi un axe majeur de navigation en Europe."
    },
    {
      "id": "geo-034",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "La Dordogne rejoint la Garonne pour former quel estuaire ?",
      "choix": [
        "L'estuaire de la Seine",
        "L'estuaire de la Loire",
        "L'estuaire du Rhône",
        "L'estuaire de la Gironde"
      ],
      "reponse": 3,
      "explication": "La Dordogne et la Garonne se rejoignent pour former l'estuaire de la Gironde. Cet estuaire s'ouvre sur l'océan Atlantique."
    },
    {
      "id": "geo-035",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle ville est la préfecture du département du Puy-de-Dôme ?",
      "choix": [
        "Clermont-Ferrand",
        "Vichy",
        "Aurillac",
        "Le Puy-en-Velay"
      ],
      "reponse": 0,
      "explication": "Clermont-Ferrand est la préfecture du Puy-de-Dôme. La ville se situe au pied de la chaîne des Puys, dans le Massif central."
    },
    {
      "id": "geo-036",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle grande ville est située près de la confluence du Rhône et de la Saône ?",
      "choix": [
        "Avignon",
        "Lyon",
        "Dijon",
        "Valence"
      ],
      "reponse": 1,
      "explication": "Lyon est située à la confluence du Rhône et de la Saône. Cette position a contribué à son importance historique et économique."
    },
    {
      "id": "geo-037",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle ville est le chef-lieu de la région Île-de-France ?",
      "choix": [
        "Versailles",
        "Saint-Denis",
        "Paris",
        "Créteil"
      ],
      "reponse": 2,
      "explication": "Paris est le chef-lieu de l'Île-de-France. La région regroupe Paris et les départements de sa couronne urbaine."
    },
    {
      "id": "geo-038",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel département porte le numéro 75 ?",
      "choix": [
        "Les Hauts-de-Seine",
        "La Seine-Saint-Denis",
        "Le Val-de-Marne",
        "Paris"
      ],
      "reponse": 3,
      "explication": "Le département 75 correspond à Paris. Depuis 1968, Paris est à la fois une commune et un département."
    },
    {
      "id": "geo-039",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel site naturel se trouve sur le littoral aquitain, près du bassin d'Arcachon ?",
      "choix": [
        "La dune du Pilat",
        "Le mont Ventoux",
        "La pointe du Raz",
        "Le cap Gris-Nez"
      ],
      "reponse": 0,
      "explication": "La dune du Pilat se situe en Gironde, près du bassin d'Arcachon. C'est la plus haute dune naturelle d'Europe."
    },
    {
      "id": "geo-040",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "La Camargue est surtout associée à quel milieu naturel ?",
      "choix": [
        "Des plateaux granitiques",
        "Un delta et des zones humides",
        "Des falaises de craie",
        "Des glaciers alpins"
      ],
      "reponse": 1,
      "explication": "La Camargue correspond au delta du Rhône et à de vastes zones humides. Elle est connue pour ses étangs, ses flamants roses, ses chevaux et ses taureaux."
    },
    {
      "id": "geo-041",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel lac alpin est situé en Haute-Savoie, près de la ville du même nom ?",
      "choix": [
        "Le lac du Bourget",
        "Le lac de Gérardmer",
        "Le lac d'Annecy",
        "Le lac de Grand-Lieu"
      ],
      "reponse": 2,
      "explication": "Le lac d'Annecy se situe en Haute-Savoie, près de la ville d'Annecy. Il est réputé pour ses eaux claires et son cadre alpin."
    },
    {
      "id": "geo-042",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle île est reliée au continent par un pont entre La Rochelle et la Charente-Maritime ?",
      "choix": [
        "Ouessant",
        "Belle-Île-en-Mer",
        "L'île d'Oléron",
        "L'île de Ré"
      ],
      "reponse": 3,
      "explication": "L'île de Ré est reliée à La Rochelle par un pont. Elle fait partie du département de la Charente-Maritime."
    },
    {
      "id": "geo-043",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle ville est le chef-lieu de la région Corse ?",
      "choix": [
        "Ajaccio",
        "Bastia",
        "Corte",
        "Porto-Vecchio"
      ],
      "reponse": 0,
      "explication": "Ajaccio est le chef-lieu de la collectivité de Corse. Bastia est une autre grande ville corse, située au nord-est de l'île."
    },
    {
      "id": "geo-044",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle ville de l'Est est située en Lorraine, sur la Moselle ?",
      "choix": [
        "Dijon",
        "Metz",
        "Besançon",
        "Mulhouse"
      ],
      "reponse": 1,
      "explication": "Metz se situe en Lorraine, dans le département de la Moselle. La rivière Moselle traverse l'agglomération."
    },
    {
      "id": "geo-045",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Dans quel massif se trouvent les volcans d'Auvergne ?",
      "choix": [
        "Le Jura",
        "Les Vosges",
        "Le Massif central",
        "Les Ardennes"
      ],
      "reponse": 2,
      "explication": "Les volcans d'Auvergne se trouvent dans le Massif central. La chaîne des Puys en est l'un des ensembles les plus connus."
    },
    {
      "id": "geo-046",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel type de climat caractérise le mieux les régions proches de l'Atlantique, comme la Bretagne ?",
      "choix": [
        "Montagnard",
        "Méditerranéen",
        "Continental marqué",
        "Océanique"
      ],
      "reponse": 3,
      "explication": "Le climat océanique domine sur une grande partie de la façade atlantique. Il se caractérise par des hivers modérés, des étés tempérés et des pluies assez régulières."
    },
    {
      "id": "geo-047",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle ville est le chef-lieu de la région Hauts-de-France ?",
      "choix": [
        "Lille",
        "Amiens",
        "Arras",
        "Dunkerque"
      ],
      "reponse": 0,
      "explication": "Lille est le chef-lieu des Hauts-de-France. Amiens, ancienne capitale régionale de Picardie, reste une grande ville de la région."
    },
    {
      "id": "geo-048",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "La pointe du Raz se situe dans quel département breton ?",
      "choix": [
        "Le Morbihan",
        "Le Finistère",
        "Les Côtes-d'Armor",
        "L'Ille-et-Vilaine"
      ],
      "reponse": 1,
      "explication": "La pointe du Raz se trouve dans le Finistère, à l'extrémité occidentale de la Bretagne. C'est un site emblématique du littoral atlantique."
    },
    {
      "id": "geo-049",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel département porte le numéro 13 ?",
      "choix": [
        "Le Var",
        "Le Vaucluse",
        "Les Bouches-du-Rhône",
        "Les Alpes-Maritimes"
      ],
      "reponse": 2,
      "explication": "Le numéro 13 correspond aux Bouches-du-Rhône. Marseille en est la préfecture."
    },
    {
      "id": "geo-050",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle ville est située sur la Loire et connue pour son rôle historique dans la vallée des châteaux ?",
      "choix": [
        "Limoges",
        "Amiens",
        "Nancy",
        "Tours"
      ],
      "reponse": 3,
      "explication": "Tours est située sur la Loire, dans la région Centre-Val de Loire. La ville est proche de plusieurs châteaux célèbres de la vallée de la Loire."
    },
    {
      "id": "geo-051",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle affirmation décrit correctement La Défense ?",
      "choix": [
        "C'est un quartier d'affaires à l'ouest de Paris, dans les Hauts-de-Seine",
        "C'est une île de la Seine dans Paris",
        "C'est le nom administratif du 21e arrondissement",
        "C'est une commune située en Seine-et-Marne"
      ],
      "reponse": 0,
      "explication": "La Défense est un grand quartier d'affaires situé à l'ouest de Paris, principalement dans les Hauts-de-Seine. Paris ne compte que 20 arrondissements."
    },
    {
      "id": "geo-052",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle ville est le chef-lieu régional de la région Grand Est ?",
      "choix": [
        "Metz",
        "Strasbourg",
        "Nancy",
        "Reims"
      ],
      "reponse": 1,
      "explication": "Strasbourg est le chef-lieu de la région Grand Est. Metz, Nancy et Reims sont aussi des villes importantes de cette région."
    },
    {
      "id": "geo-053",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quel numéro de département correspond aux Alpes-Maritimes ?",
      "choix": [
        "06",
        "13",
        "73",
        "83"
      ],
      "reponse": 0,
      "explication": "Les Alpes-Maritimes portent le numéro 06. Nice en est la préfecture."
    },
    {
      "id": "geo-054",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle association région-chef-lieu est correcte ?",
      "choix": [
        "Occitanie — Montpellier",
        "Normandie — Rouen",
        "Bretagne — Nantes",
        "Pays de la Loire — Angers"
      ],
      "reponse": 1,
      "explication": "Rouen est le chef-lieu de la Normandie. L'Occitanie a pour chef-lieu Toulouse, la Bretagne Rennes et les Pays de la Loire Nantes."
    },
    {
      "id": "geo-055",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quel lac est partagé entre la France et la Suisse ?",
      "choix": [
        "Le lac du Bourget",
        "Le lac d'Annecy",
        "Le lac Léman",
        "Le lac de Serre-Ponçon"
      ],
      "reponse": 2,
      "explication": "Le lac Léman est partagé entre la France et la Suisse. Sa rive française se trouve notamment en Haute-Savoie."
    },
    {
      "id": "geo-056",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle ville est située sur la Marne et connue pour être au cœur de la Champagne historique ?",
      "choix": [
        "Troyes",
        "Metz",
        "Dijon",
        "Reims"
      ],
      "reponse": 3,
      "explication": "Reims est une grande ville de la Champagne historique, dans la région Grand Est. La Marne coule dans son département et traverse notamment Châlons-en-Champagne ; Reims est surtout associée au vignoble champenois et aux sacres royaux."
    },
    {
      "id": "geo-057",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle estimation correspond le mieux à la population totale de la France au 1er janvier 2025 selon les ordres de grandeur de l'Insee ?",
      "choix": [
        "Environ 68,6 millions d'habitants",
        "Environ 52 millions d'habitants",
        "Environ 75 millions d'habitants",
        "Environ 90 millions d'habitants"
      ],
      "reponse": 0,
      "explication": "La France compte environ 68,6 millions d'habitants au 1er janvier 2025, en incluant les territoires d'outre-mer. La France métropolitaine représente la très grande majorité de cette population."
    },
    {
      "id": "geo-058",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle superficie correspond le mieux à la France métropolitaine ?",
      "choix": [
        "Environ 430 000 km²",
        "Environ 552 000 km²",
        "Environ 675 000 km²",
        "Environ 1 000 000 km²"
      ],
      "reponse": 1,
      "explication": "La France métropolitaine couvre environ 552 000 km². La superficie de la France entière est plus élevée si l'on inclut les territoires ultramarins."
    },
    {
      "id": "geo-059",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle ville est le chef-lieu du département du Bas-Rhin ?",
      "choix": [
        "Colmar",
        "Mulhouse",
        "Strasbourg",
        "Metz"
      ],
      "reponse": 2,
      "explication": "Strasbourg est la préfecture du Bas-Rhin. Colmar est la préfecture du Haut-Rhin, l'autre département alsacien historique."
    },
    {
      "id": "geo-060",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle description correspond au boulevard périphérique de Paris ?",
      "choix": [
        "Un canal reliant la Seine à la Marne",
        "Une avenue uniquement piétonne du centre de Paris",
        "Une ligne ferroviaire souterraine autour de la capitale",
        "Une voie rapide formant une ceinture autour de Paris"
      ],
      "reponse": 3,
      "explication": "Le boulevard périphérique forme une ceinture routière autour de Paris. Il marque souvent une limite symbolique entre Paris intra-muros et la proche banlieue."
    },
    {
      "id": "geo-061",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel est le chef-lieu de la Guadeloupe ?",
      "choix": [
        "Basse-Terre",
        "Fort-de-France",
        "Cayenne",
        "Mamoudzou"
      ],
      "reponse": 0,
      "explication": "Basse-Terre est le chef-lieu de la Guadeloupe. Pointe-à-Pitre est une grande ville et un port important, mais ce n'est pas le chef-lieu."
    },
    {
      "id": "geo-062",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel est le chef-lieu de la Martinique ?",
      "choix": [
        "Saint-Denis",
        "Fort-de-France",
        "Basse-Terre",
        "Saint-Pierre"
      ],
      "reponse": 1,
      "explication": "Fort-de-France est le chef-lieu de la Martinique. La ville concentre de nombreuses fonctions administratives de ce territoire caribéen."
    },
    {
      "id": "geo-063",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel est le chef-lieu de la Guyane ?",
      "choix": [
        "Kourou",
        "Saint-Laurent-du-Maroni",
        "Cayenne",
        "Matoury"
      ],
      "reponse": 2,
      "explication": "Cayenne est le chef-lieu de la Guyane. La Guyane est située en Amérique du Sud et possède une vaste couverture forestière."
    },
    {
      "id": "geo-064",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel est le chef-lieu de La Réunion ?",
      "choix": [
        "Saint-Pierre",
        "Le Tampon",
        "Saint-Paul",
        "Saint-Denis"
      ],
      "reponse": 3,
      "explication": "Saint-Denis est le chef-lieu de La Réunion. C'est la principale ville administrative de l'île."
    },
    {
      "id": "geo-065",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel est le chef-lieu de Mayotte ?",
      "choix": [
        "Mamoudzou",
        "Dzaoudzi",
        "Koungou",
        "Tsingoni"
      ],
      "reponse": 0,
      "explication": "Mamoudzou est le chef-lieu de Mayotte. Mayotte est un département et région d'outre-mer situé dans l'archipel des Comores."
    },
    {
      "id": "geo-066",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel territoire français d'outre-mer se trouve sur le continent sud-américain ?",
      "choix": [
        "La Martinique",
        "La Guyane",
        "Mayotte",
        "La Réunion"
      ],
      "reponse": 1,
      "explication": "La Guyane se situe sur le continent sud-américain. Elle partage des frontières terrestres avec le Brésil et le Suriname."
    },
    {
      "id": "geo-067",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Avec quels États la Guyane française a-t-elle des frontières terrestres ?",
      "choix": [
        "Argentine et Uruguay",
        "Venezuela et Colombie",
        "Brésil et Suriname",
        "Pérou et Bolivie"
      ],
      "reponse": 2,
      "explication": "La Guyane française est frontalière du Brésil à l'est et au sud, et du Suriname à l'ouest. Ces frontières donnent à la France des limites terrestres en Amérique du Sud."
    },
    {
      "id": "geo-068",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle particularité frontalière concerne l'île de Saint-Martin ?",
      "choix": [
        "Elle est entièrement française",
        "Elle dépend administrativement de la Guyane",
        "Elle est reliée à la Guadeloupe par un pont",
        "Elle est partagée entre la France et le Royaume des Pays-Bas"
      ],
      "reponse": 3,
      "explication": "L'île de Saint-Martin est partagée entre une collectivité française au nord et Sint Maarten, pays constitutif du Royaume des Pays-Bas, au sud. Cela crée une frontière terrestre franco-néerlandaise."
    },
    {
      "id": "geo-069",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel volcan actif se trouve à La Réunion ?",
      "choix": [
        "Le Piton de la Fournaise",
        "La Montagne Pelée",
        "Le Puy de Dôme",
        "Le Vésuve"
      ],
      "reponse": 0,
      "explication": "Le Piton de la Fournaise est un volcan actif de La Réunion. Il est l'un des volcans les plus surveillés et les plus actifs du monde."
    },
    {
      "id": "geo-070",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel volcan martiniquais est connu pour l'éruption de 1902 ?",
      "choix": [
        "Le Piton des Neiges",
        "La Montagne Pelée",
        "Le Maïdo",
        "Le Mont-Dore"
      ],
      "reponse": 1,
      "explication": "La Montagne Pelée domine le nord de la Martinique. Son éruption de 1902 a détruit la ville de Saint-Pierre."
    },
    {
      "id": "geo-071",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel territoire français possède une grande partie de la forêt amazonienne française ?",
      "choix": [
        "La Guadeloupe",
        "La Martinique",
        "La Guyane",
        "Mayotte"
      ],
      "reponse": 2,
      "explication": "La Guyane est largement couverte par la forêt amazonienne. Cette forêt constitue un enjeu majeur de biodiversité et de protection environnementale."
    },
    {
      "id": "geo-072",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel phénomène naturel touche régulièrement les Antilles françaises et peut provoquer des dégâts importants ?",
      "choix": [
        "Les avalanches",
        "Les tornades de neige",
        "Les marées glaciaires",
        "Les cyclones tropicaux"
      ],
      "reponse": 3,
      "explication": "Les Antilles françaises sont exposées aux cyclones tropicaux, surtout pendant la saison cyclonique. Ces phénomènes peuvent provoquer vents violents, pluies intenses et submersions."
    },
    {
      "id": "geo-073",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel statut a Saint-Pierre-et-Miquelon dans l'organisation territoriale française ?",
      "choix": [
        "Une collectivité d'outre-mer",
        "Une commune de Bretagne",
        "Un État associé indépendant",
        "Un département métropolitain"
      ],
      "reponse": 0,
      "explication": "Saint-Pierre-et-Miquelon est une collectivité d'outre-mer située près du Canada. Ce statut diffère de celui des départements et régions d'outre-mer."
    },
    {
      "id": "geo-074",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quel territoire français d'outre-mer dispose d'une large autonomie et n'est pas une collectivité territoriale classique ?",
      "choix": [
        "Wallis-et-Futuna",
        "La Nouvelle-Calédonie",
        "Saint-Barthélemy",
        "Saint-Pierre-et-Miquelon"
      ],
      "reponse": 1,
      "explication": "La Nouvelle-Calédonie possède un statut particulier issu notamment de l'accord de Nouméa. Elle dispose d'institutions propres et de compétences importantes."
    },
    {
      "id": "geo-075",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Dans quelle zone du monde se situe principalement la Polynésie française ?",
      "choix": [
        "Dans l'Atlantique Nord",
        "Dans l'océan Indien occidental",
        "Dans le Pacifique Sud",
        "Dans la mer Baltique"
      ],
      "reponse": 2,
      "explication": "La Polynésie française se situe dans le Pacifique Sud. Elle comprend plusieurs archipels, dont les îles de la Société et les Marquises."
    },
    {
      "id": "geo-076",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Que désigne le sigle TAAF ?",
      "choix": [
        "Les transports aériens africains français",
        "Les territoires agricoles atlantiques français",
        "Les terres antillaises administrées par la France",
        "Les Terres australes et antarctiques françaises"
      ],
      "reponse": 3,
      "explication": "Les TAAF sont les Terres australes et antarctiques françaises. Elles comprennent notamment des îles australes et la Terre Adélie, avec un statut particulier."
    },
    {
      "id": "geo-077",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel atout naturel majeur caractérise Mayotte et favorise la biodiversité marine ?",
      "choix": [
        "Un grand lagon entouré d'une barrière de corail",
        "Une calotte glaciaire permanente",
        "Un désert de sable froid",
        "Un réseau de fjords profonds"
      ],
      "reponse": 0,
      "explication": "Mayotte possède un vaste lagon protégé par une barrière de corail. Cet espace abrite une biodiversité marine remarquable mais fragile."
    },
    {
      "id": "geo-078",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quand il est midi à Paris en hiver, quelle heure est-il généralement à Fort-de-France en Martinique ?",
      "choix": [
        "Midi",
        "7 heures du matin",
        "18 heures",
        "3 heures du matin"
      ],
      "reponse": 1,
      "explication": "En hiver, la Martinique est généralement à UTC-4 et Paris à UTC+1, soit 5 heures de décalage. Quand il est midi à Paris, il est donc environ 7 heures à Fort-de-France."
    },
    {
      "id": "geo-079",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel pays partage une frontière terrestre avec la France au nord-est, près de Lille et de Dunkerque ?",
      "choix": [
        "Le Portugal",
        "L'Autriche",
        "La Belgique",
        "La Norvège"
      ],
      "reponse": 2,
      "explication": "La Belgique partage une longue frontière avec le nord de la France. Cette frontière concerne notamment les régions Hauts-de-France et Grand Est."
    },
    {
      "id": "geo-080",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel petit État est enclavé entre les Alpes-Maritimes et la mer Méditerranée ?",
      "choix": [
        "Andorre",
        "Saint-Marin",
        "Liechtenstein",
        "Monaco"
      ],
      "reponse": 3,
      "explication": "Monaco est un petit État situé sur la Côte d'Azur, au bord de la Méditerranée. Il est enclavé dans le territoire français, sauf pour son ouverture maritime."
    },
    {
      "id": "geo-081",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quels pays bordent la frontière française dans la région du Rhin et de l'Alsace ?",
      "choix": [
        "L'Allemagne et la Suisse",
        "L'Espagne et le Portugal",
        "L'Italie et la Slovénie",
        "La Belgique et les Pays-Bas"
      ],
      "reponse": 0,
      "explication": "L'Alsace est voisine de l'Allemagne le long du Rhin et proche de la Suisse au sud. Ces frontières jouent un rôle important dans les échanges transfrontaliers."
    },
    {
      "id": "geo-082",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel État se trouve entre la France et l'Espagne dans les montagnes, avec une frontière terrestre française ?",
      "choix": [
        "Malte",
        "Andorre",
        "Chypre",
        "Luxembourg"
      ],
      "reponse": 1,
      "explication": "Andorre est un petit État situé entre la France et l'Espagne. Il partage une frontière avec le département de l'Ariège et les Pyrénées-Orientales."
    },
    {
      "id": "geo-083",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel ouvrage relie la France au Royaume-Uni par voie ferroviaire sous la mer ?",
      "choix": [
        "Le tunnel du Mont-Blanc",
        "Le pont de Normandie",
        "Le tunnel sous la Manche",
        "Le viaduc de Millau"
      ],
      "reponse": 2,
      "explication": "Le tunnel sous la Manche relie Coquelles, près de Calais, à Folkestone au Royaume-Uni. Il est utilisé par les trains Eurostar et des navettes ferroviaires."
    },
    {
      "id": "geo-084",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel tunnel routier relie la France et l'Italie sous les Alpes ?",
      "choix": [
        "Le tunnel de Fréjus ferroviaire uniquement",
        "Le tunnel de la Croix-Rousse",
        "Le tunnel Prado-Carénage",
        "Le tunnel du Mont-Blanc"
      ],
      "reponse": 3,
      "explication": "Le tunnel du Mont-Blanc relie Chamonix en France à Courmayeur en Italie. C'est un axe routier majeur à travers les Alpes."
    },
    {
      "id": "geo-085",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel ouvrage autoroutier du sud de la France est célèbre pour ses piles très hautes au-dessus du Tarn ?",
      "choix": [
        "Le viaduc de Millau",
        "Le pont d'Avignon",
        "Le pont du Gard",
        "Le pont de Tancarville"
      ],
      "reponse": 0,
      "explication": "Le viaduc de Millau franchit la vallée du Tarn dans l'Aveyron. Il est connu pour sa hauteur exceptionnelle et son rôle dans l'axe autoroutier A75."
    },
    {
      "id": "geo-086",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel pont franchit l'estuaire de la Seine entre la région du Havre et Honfleur ?",
      "choix": [
        "Le pont de l'île de Ré",
        "Le pont de Normandie",
        "Le pont Saint-Bénézet",
        "Le pont Valentré"
      ],
      "reponse": 1,
      "explication": "Le pont de Normandie franchit l'estuaire de la Seine. Il relie la zone du Havre à Honfleur et facilite les déplacements en Normandie."
    },
    {
      "id": "geo-087",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Que désigne une LGV dans les transports français ?",
      "choix": [
        "Une ligne de gare virtuelle",
        "Une liaison générale de véhicules",
        "Une ligne à grande vitesse",
        "Une limite géographique verte"
      ],
      "reponse": 2,
      "explication": "Une LGV est une ligne à grande vitesse conçue pour les trains rapides comme le TGV. Elle réduit les temps de parcours entre les grandes métropoles."
    },
    {
      "id": "geo-088",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quels sont les deux grands aéroports parisiens les plus connus pour les vols nationaux et internationaux ?",
      "choix": [
        "Brest et Biarritz",
        "Nantes et Rennes",
        "Lille et Metz",
        "Roissy-Charles-de-Gaulle et Orly"
      ],
      "reponse": 3,
      "explication": "Roissy-Charles-de-Gaulle et Orly sont les principaux aéroports de l'agglomération parisienne. Roissy est aussi l'un des grands hubs aériens européens."
    },
    {
      "id": "geo-089",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel port français est un grand port maritime de la façade méditerranéenne ?",
      "choix": [
        "Marseille-Fos",
        "Dunkerque uniquement",
        "Cherbourg",
        "Saint-Malo"
      ],
      "reponse": 0,
      "explication": "Marseille-Fos est le principal grand port maritime français en Méditerranée. Il joue un rôle important pour les hydrocarbures, les conteneurs et les échanges internationaux."
    },
    {
      "id": "geo-090",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel grand port de la Manche est situé à l'embouchure de la Seine ?",
      "choix": [
        "La Rochelle",
        "Le Havre",
        "Sète",
        "Bayonne"
      ],
      "reponse": 1,
      "explication": "Le Havre est situé à l'embouchure de la Seine. C'est un grand port français pour les conteneurs et le commerce maritime."
    },
    {
      "id": "geo-091",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "À quoi sert principalement le RER en Île-de-France ?",
      "choix": [
        "À relier uniquement les stations de ski",
        "À transporter des marchandises agricoles",
        "À relier Paris et sa banlieue par un réseau ferroviaire régional",
        "À remplacer les autoroutes nationales"
      ],
      "reponse": 2,
      "explication": "Le RER est un réseau ferroviaire régional qui traverse Paris et dessert de nombreuses communes d'Île-de-France. Il complète le métro, les trains de banlieue et les bus."
    },
    {
      "id": "geo-092",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle source d'énergie fournit la plus grande part de l'électricité produite en France ?",
      "choix": [
        "Le charbon",
        "Le pétrole",
        "La biomasse uniquement",
        "Le nucléaire"
      ],
      "reponse": 3,
      "explication": "Le nucléaire fournit la plus grande part de l'électricité produite en France, souvent autour des deux tiers selon les années récentes. Les renouvelables progressent mais restent globalement moins dominantes dans le mix électrique."
    },
    {
      "id": "geo-093",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel type d'installation produit de l'électricité grâce à la force de l'eau retenue ou en mouvement ?",
      "choix": [
        "Un barrage hydroélectrique",
        "Une raffinerie",
        "Une cimenterie",
        "Un terminal méthanier"
      ],
      "reponse": 0,
      "explication": "Un barrage hydroélectrique utilise l'énergie de l'eau pour produire de l'électricité. Les massifs montagneux français offrent plusieurs sites favorables à cette production."
    },
    {
      "id": "geo-094",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quel site normand accueille un réacteur EPR destiné à produire de l'électricité nucléaire ?",
      "choix": [
        "Gravelines",
        "Flamanville",
        "Tricastin",
        "Fessenheim"
      ],
      "reponse": 1,
      "explication": "L'EPR de Flamanville se trouve dans la Manche, en Normandie. Il s'agit d'un réacteur nucléaire de nouvelle génération dont la mise en service est un enjeu industriel important."
    },
    {
      "id": "geo-095",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle région naturelle est connue pour ses vastes cultures de blé au sud-ouest de Paris ?",
      "choix": [
        "La Camargue",
        "Le Morvan",
        "La Beauce",
        "Le Médoc"
      ],
      "reponse": 2,
      "explication": "La Beauce est une grande région céréalière située notamment en Eure-et-Loir et dans le Loiret. Elle est souvent associée à la culture du blé."
    },
    {
      "id": "geo-096",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel rang agricole la France occupe-t-elle généralement dans l'Union européenne en valeur de production ?",
      "choix": [
        "Le dernier rang",
        "Le troisième rang derrière Malte et Chypre",
        "Un rang marginal",
        "Le premier rang"
      ],
      "reponse": 3,
      "explication": "La France est généralement la première puissance agricole de l'Union européenne en valeur de production. Ses productions sont diversifiées : céréales, vins, élevage, fruits et légumes."
    },
    {
      "id": "geo-097",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle activité agricole est particulièrement associée à Bordeaux, Bourgogne et Champagne ?",
      "choix": [
        "La viticulture",
        "La riziculture polaire",
        "La culture du coton",
        "L'élevage de rennes"
      ],
      "reponse": 0,
      "explication": "Bordeaux, Bourgogne et Champagne sont de grands vignobles français. La viticulture contribue fortement à l'image gastronomique et économique de ces régions."
    },
    {
      "id": "geo-098",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle ville française est un pôle majeur de l'aéronautique et du spatial, notamment autour d'Airbus ?",
      "choix": [
        "Roubaix",
        "Toulouse",
        "Limoges",
        "Dijon"
      ],
      "reponse": 1,
      "explication": "Toulouse est un pôle majeur de l'aéronautique et du spatial en Europe. La présence d'Airbus et de nombreux sous-traitants structure son économie."
    },
    {
      "id": "geo-099",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel secteur industriel français est associé à des marques mondiales de mode, parfums, maroquinerie et joaillerie ?",
      "choix": [
        "La sidérurgie lourde uniquement",
        "La pêche hauturière",
        "Le luxe",
        "L'extraction de charbon"
      ],
      "reponse": 2,
      "explication": "Le luxe est un secteur important de l'économie française. Il regroupe notamment la mode, les parfums, la maroquinerie, les cosmétiques et la joaillerie."
    },
    {
      "id": "geo-100",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel rang la France occupe-t-elle couramment pour l'accueil de touristes internationaux ?",
      "choix": [
        "Le dixième rang européen",
        "Un rang inférieur à celui de tous ses voisins",
        "Le dernier rang mondial",
        "Le premier rang mondial"
      ],
      "reponse": 3,
      "explication": "La France est couramment présentée comme le premier pays touristique mondial en nombre d'arrivées internationales. Paris, les littoraux, les massifs et le patrimoine culturel expliquent en partie cette attractivité."
    },
    {
      "id": "geo-101",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quels espaces français attirent fortement les touristes en hiver pour les sports de neige ?",
      "choix": [
        "Les stations de ski des massifs montagneux",
        "Les plaines betteravières uniquement",
        "Les zones industrielles portuaires",
        "Les marais salants exclusivement"
      ],
      "reponse": 0,
      "explication": "Les stations de ski des Alpes, des Pyrénées, du Massif central, du Jura et des Vosges attirent de nombreux touristes. Elles dépendent toutefois de plus en plus des conditions d'enneigement."
    },
    {
      "id": "geo-102",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Environ combien d'habitants compte la France, outre-mer compris, au milieu des années 2020 ?",
      "choix": [
        "18 millions",
        "68 millions",
        "105 millions",
        "150 millions"
      ],
      "reponse": 1,
      "explication": "La France compte environ 68 millions d'habitants, outre-mer compris, au milieu des années 2020. Ce chiffre évolue lentement avec les naissances, les décès et les migrations."
    },
    {
      "id": "geo-103",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Que signifie la métropolisation en géographie ?",
      "choix": [
        "La disparition de toutes les villes moyennes",
        "Le remplacement des campagnes par des frontières",
        "La concentration des populations et des activités dans les grandes villes",
        "La création d'un seul département national"
      ],
      "reponse": 2,
      "explication": "La métropolisation désigne le renforcement du poids des grandes villes dans l'économie, les emplois qualifiés et les services. En France, Paris domine, mais d'autres métropoles comme Lyon, Toulouse ou Lille jouent aussi un rôle important."
    },
    {
      "id": "geo-104",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle évolution démographique caractérise la France récente par rapport à beaucoup de pays européens ?",
      "choix": [
        "Un solde naturel toujours extrêmement élevé",
        "Une population divisée par deux depuis 2000",
        "Aucune naissance enregistrée depuis 2020",
        "Un solde naturel affaibli mais longtemps resté positif"
      ],
      "reponse": 3,
      "explication": "La France a longtemps eu un solde naturel positif, avec plus de naissances que de décès, mais celui-ci s'est nettement affaibli dans les années 2020. Le vieillissement et la baisse de la natalité expliquent cette évolution."
    },
    {
      "id": "geo-105",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel risque naturel concerne particulièrement les littoraux bas et urbanisés lors de tempêtes ?",
      "choix": [
        "La submersion marine",
        "La chute de météorites quotidienne",
        "La désertification polaire",
        "L'éruption de geysers"
      ],
      "reponse": 0,
      "explication": "La submersion marine peut toucher les littoraux bas lors de tempêtes et de fortes marées. L'élévation du niveau de la mer augmente la vulnérabilité de certains espaces côtiers."
    },
    {
      "id": "geo-106",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel risque estival s'aggrave dans plusieurs régions françaises avec les sécheresses et les fortes chaleurs ?",
      "choix": [
        "Les avalanches sous-marines",
        "Les incendies de forêt",
        "Les banquises continentales",
        "Les tsunamis quotidiens"
      ],
      "reponse": 1,
      "explication": "Les incendies de forêt sont favorisés par la sécheresse, la chaleur et le vent. Le risque concerne surtout le Sud, mais il s'étend aussi vers d'autres régions lors des étés très secs."
    },
    {
      "id": "geo-107",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "À quoi servent les parcs nationaux en France ?",
      "choix": [
        "À supprimer toute activité scientifique",
        "À transformer les montagnes en zones industrielles",
        "À protéger des espaces naturels remarquables",
        "À remplacer les communes"
      ],
      "reponse": 2,
      "explication": "Les parcs nationaux protègent des milieux naturels remarquables, leur faune, leur flore et leurs paysages. Ils peuvent aussi accueillir le public dans un cadre réglementé."
    },
    {
      "id": "geo-108",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Que désigne principalement le réseau Natura 2000 ?",
      "choix": [
        "Un réseau d'autoroutes privées",
        "Un classement des seules plages touristiques",
        "Une liste de centrales nucléaires",
        "Un réseau européen de sites protégés pour la biodiversité"
      ],
      "reponse": 3,
      "explication": "Natura 2000 est un réseau européen de sites désignés pour protéger des habitats et des espèces remarquables. La France y contribue avec de nombreux sites terrestres et marins."
    },
    {
      "id": "geo-109",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Pourquoi la France possède-t-elle l'une des plus grandes zones économiques exclusives du monde ?",
      "choix": [
        "Grâce à l'étendue de ses territoires ultramarins dans plusieurs océans",
        "Parce que la mer Méditerranée lui appartient entièrement",
        "Parce qu'elle a supprimé toutes ses frontières terrestres",
        "Grâce uniquement aux lacs alpins"
      ],
      "reponse": 0,
      "explication": "La zone économique exclusive française est très vaste grâce aux territoires ultramarins dispersés dans l'Atlantique, l'océan Indien, le Pacifique et les mers australes. Elle place la France parmi les tout premiers rangs maritimes mondiaux."
    },
    {
      "id": "geo-110",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quel territoire du Pacifique est associé à de vastes récifs et lagons inscrits au patrimoine mondial de l'UNESCO ?",
      "choix": [
        "Saint-Pierre-et-Miquelon",
        "La Nouvelle-Calédonie",
        "La Martinique",
        "La Guyane"
      ],
      "reponse": 1,
      "explication": "Les lagons de Nouvelle-Calédonie sont reconnus pour leur biodiversité et certains sont inscrits au patrimoine mondial de l'UNESCO. Les récifs coralliens y constituent un patrimoine naturel majeur."
    },
    {
      "id": "cul-001",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Dans quel musée se trouve La Joconde ?",
      "choix": [
        "Le musée d'Orsay",
        "Le musée du Louvre",
        "Le centre Pompidou",
        "Le château de Versailles"
      ],
      "reponse": 1,
      "explication": "La Joconde, peinte par Léonard de Vinci, est exposée au musée du Louvre à Paris, le musée le plus visité au monde, reconnaissable à sa pyramide de verre."
    },
    {
      "id": "cul-002",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel roi a fait construire le château de Versailles dans sa forme actuelle ?",
      "choix": [
        "François Ier",
        "Louis XIV",
        "Napoléon Ier",
        "Henri IV"
      ],
      "reponse": 1,
      "explication": "Louis XIV, le « Roi-Soleil », transforme le pavillon de chasse de son père en un immense palais où il installe la cour en 1682. La galerie des Glaces en est la pièce la plus célèbre."
    },
    {
      "id": "cul-003",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Qui a écrit Les Misérables ?",
      "choix": [
        "Victor Hugo",
        "Émile Zola",
        "Albert Camus",
        "Molière"
      ],
      "reponse": 0,
      "explication": "Victor Hugo (1802-1885), poète, romancier et homme politique, a écrit Les Misérables (1862) et Notre-Dame de Paris. Il repose au Panthéon."
    },
    {
      "id": "cul-004",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Pour quel événement la tour Eiffel a-t-elle été construite ?",
      "choix": [
        "Les Jeux olympiques de 1900",
        "L'Exposition universelle de 1889",
        "Le couronnement de Napoléon",
        "La Libération de Paris"
      ],
      "reponse": 1,
      "explication": "Conçue par Gustave Eiffel, la tour a été édifiée pour l'Exposition universelle de 1889, qui célébrait le centenaire de la Révolution française. Elle mesure environ 330 mètres."
    },
    {
      "id": "cul-005",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Molière est célèbre pour être :",
      "choix": [
        "un peintre impressionniste",
        "un auteur de comédies de théâtre",
        "un compositeur",
        "un philosophe des Lumières"
      ],
      "reponse": 1,
      "explication": "Molière (1622-1673) est le plus grand auteur comique français : Le Malade imaginaire, L'Avare, Tartuffe. Le français est souvent appelé « la langue de Molière »."
    },
    {
      "id": "cul-006",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Claude Monet est un représentant de quel mouvement artistique ?",
      "choix": [
        "Le cubisme",
        "Le surréalisme",
        "L'impressionnisme",
        "Le romantisme"
      ],
      "reponse": 2,
      "explication": "Claude Monet est le chef de file de l'impressionnisme, né de son tableau Impression, soleil levant (1872). On peut voir ses Nymphéas au musée de l'Orangerie et ses œuvres au musée d'Orsay."
    },
    {
      "id": "cul-007",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Dans quelle région se trouve le Mont-Saint-Michel ?",
      "choix": [
        "En Bretagne",
        "En Normandie",
        "En Provence",
        "Dans les Hauts-de-France"
      ],
      "reponse": 1,
      "explication": "Le Mont-Saint-Michel, abbaye édifiée sur un îlot rocheux dans la baie du même nom, est situé en Normandie (département de la Manche). Il est classé au patrimoine mondial de l'UNESCO."
    },
    {
      "id": "cul-008",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Qui a écrit Le Deuxième Sexe, ouvrage majeur du féminisme ?",
      "choix": [
        "Simone Veil",
        "Marguerite Duras",
        "Simone de Beauvoir",
        "George Sand"
      ],
      "reponse": 2,
      "explication": "Simone de Beauvoir publie Le Deuxième Sexe en 1949 : « On ne naît pas femme, on le devient. » À ne pas confondre avec Simone Veil, qui fit voter la loi sur l'IVG en 1975."
    },
    {
      "id": "cul-009",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Marie Curie est célèbre pour :",
      "choix": [
        "avoir découvert le vaccin contre la rage",
        "avoir reçu deux prix Nobel pour ses travaux sur la radioactivité",
        "avoir peint des cathédrales",
        "avoir fondé la Croix-Rouge"
      ],
      "reponse": 1,
      "explication": "Marie Curie a obtenu le prix Nobel de physique (1903) et celui de chimie (1911). Elle est la première femme entrée au Panthéon pour ses mérites (1995). Louis Pasteur, lui, a mis au point le vaccin contre la rage."
    },
    {
      "id": "cul-010",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Que sont les grottes de Lascaux ?",
      "choix": [
        "Des grottes ornées de peintures préhistoriques en Dordogne",
        "Des carrières romaines en Provence",
        "Des abris de la Résistance",
        "Des mines de charbon du Nord"
      ],
      "reponse": 0,
      "explication": "Découvertes en 1940 en Dordogne, les grottes de Lascaux abritent des peintures pariétales vieilles d'environ 18 000 ans. Fermées au public, elles sont visibles via des répliques (Lascaux IV)."
    },
    {
      "id": "cul-011",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel auteur de la Renaissance a créé les personnages de Gargantua et Pantagruel ?",
      "choix": [
        "François Rabelais",
        "Pierre Corneille",
        "Émile Zola",
        "Marcel Proust"
      ],
      "reponse": 0,
      "explication": "François Rabelais publie les aventures de Gargantua et Pantagruel au XVIe siècle. Son œuvre mêle satire, érudition et humour."
    },
    {
      "id": "cul-012",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel écrivain est l’auteur des Essais ?",
      "choix": [
        "Jean de La Fontaine",
        "Michel de Montaigne",
        "Victor Hugo",
        "Albert Camus"
      ],
      "reponse": 1,
      "explication": "Michel de Montaigne publie les Essais à la fin du XVIe siècle. Ce texte est un jalon majeur de la littérature humaniste française."
    },
    {
      "id": "cul-013",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle œuvre de La Fontaine met en scène des animaux pour transmettre une morale ?",
      "choix": [
        "Les Contemplations",
        "Germinal",
        "Les Fables",
        "À la recherche du temps perdu"
      ],
      "reponse": 2,
      "explication": "Les Fables de Jean de La Fontaine utilisent souvent des animaux pour illustrer des comportements humains. Elles sont célèbres pour leurs morales courtes et mémorables."
    },
    {
      "id": "cul-014",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel conte est associé à Charles Perrault ?",
      "choix": [
        "Le Petit Prince",
        "Madame Bovary",
        "Le Père Goriot",
        "Le Petit Chaperon rouge"
      ],
      "reponse": 3,
      "explication": "Charles Perrault a fixé par écrit plusieurs contes traditionnels au XVIIe siècle. Le Petit Chaperon rouge fait partie de ses récits les plus connus."
    },
    {
      "id": "cul-015",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel écrivain a publié Candide en 1759 ?",
      "choix": [
        "Voltaire",
        "Jean-Jacques Rousseau",
        "Denis Diderot",
        "Stendhal"
      ],
      "reponse": 0,
      "explication": "Candide est un conte philosophique de Voltaire. Il critique notamment l’optimisme naïf et certains abus de la société de son temps."
    },
    {
      "id": "cul-016",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel romancier a créé le vaste ensemble intitulé La Comédie humaine ?",
      "choix": [
        "Gustave Flaubert",
        "Honoré de Balzac",
        "Émile Zola",
        "Guy de Maupassant"
      ],
      "reponse": 1,
      "explication": "Honoré de Balzac regroupe ses romans et nouvelles sous le titre La Comédie humaine. Il y décrit de nombreux milieux sociaux de la France du XIXe siècle."
    },
    {
      "id": "cul-017",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel roman de Flaubert raconte la vie d’Emma Bovary ?",
      "choix": [
        "L’Assommoir",
        "Le Rouge et le Noir",
        "Madame Bovary",
        "Bel-Ami"
      ],
      "reponse": 2,
      "explication": "Madame Bovary est publié par Gustave Flaubert en 1857. Le roman est connu pour son style précis et son regard critique sur les illusions romantiques."
    },
    {
      "id": "cul-018",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel écrivain est associé au cycle romanesque des Rougon-Macquart ?",
      "choix": [
        "Alphonse Daudet",
        "Jules Verne",
        "Prosper Mérimée",
        "Émile Zola"
      ],
      "reponse": 3,
      "explication": "Émile Zola a écrit Les Rougon-Macquart, une série de vingt romans. Ce cycle illustre le naturalisme et observe la société du Second Empire."
    },
    {
      "id": "cul-019",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel poète a publié Les Fleurs du mal ?",
      "choix": [
        "Charles Baudelaire",
        "Paul Verlaine",
        "Arthur Rimbaud",
        "Stéphane Mallarmé"
      ],
      "reponse": 0,
      "explication": "Les Fleurs du mal de Charles Baudelaire paraissent en 1857. Le recueil marque profondément la poésie moderne."
    },
    {
      "id": "cul-020",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel livre de Saint-Exupéry met en scène un enfant venu d’une petite planète ?",
      "choix": [
        "Vol de nuit",
        "Le Petit Prince",
        "Terre des hommes",
        "Pilote de guerre"
      ],
      "reponse": 1,
      "explication": "Le Petit Prince paraît en 1943. Ce conte poétique d’Antoine de Saint-Exupéry est l’un des livres français les plus traduits au monde."
    },
    {
      "id": "cul-021",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel auteur a écrit L’Étranger ?",
      "choix": [
        "Jean-Paul Sartre",
        "André Gide",
        "Albert Camus",
        "Patrick Modiano"
      ],
      "reponse": 2,
      "explication": "L’Étranger est un roman d’Albert Camus publié en 1942. Il est souvent étudié avec les thèmes de l’absurde et de la responsabilité humaine."
    },
    {
      "id": "cul-022",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel prix littéraire français récompense chaque année un roman et porte le nom de deux frères écrivains ?",
      "choix": [
        "Le prix Femina",
        "Le prix Renaudot",
        "Le prix Médicis",
        "Le prix Goncourt"
      ],
      "reponse": 3,
      "explication": "Le prix Goncourt est l’une des distinctions littéraires les plus prestigieuses en France. Il récompense principalement un roman publié dans l’année."
    },
    {
      "id": "cul-023",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle institution fondée au XVIIe siècle veille notamment sur la langue française ?",
      "choix": [
        "L’Académie française",
        "La Comédie-Française",
        "Le Collège de France",
        "La Bibliothèque nationale de France"
      ],
      "reponse": 0,
      "explication": "L’Académie française a été fondée en 1635 par Richelieu. Elle travaille notamment à l’élaboration du Dictionnaire de l’Académie française."
    },
    {
      "id": "cul-024",
      "theme": "culture",
      "difficulte": "facile",
      "question": "De quelle langue le français est-il principalement issu ?",
      "choix": [
        "Du grec ancien",
        "Du latin",
        "Du gaulois uniquement",
        "De l’anglais médiéval"
      ],
      "reponse": 1,
      "explication": "Le français est une langue romane issue principalement du latin populaire parlé en Gaule. Il a ensuite évolué au contact d’autres langues et dialectes."
    },
    {
      "id": "cul-025",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle organisation internationale rassemble des États et gouvernements autour de la langue française ?",
      "choix": [
        "L’OCDE",
        "L’OTAN",
        "L’OIF",
        "L’UNESCO uniquement"
      ],
      "reponse": 2,
      "explication": "L’OIF signifie Organisation internationale de la Francophonie. Elle promeut la langue française, la coopération et la diversité culturelle."
    },
    {
      "id": "cul-026",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Que signifie l’expression « donner sa langue au chat » ?",
      "choix": [
        "Parler très vite",
        "Mentir volontairement",
        "Traduire un texte",
        "Renoncer à deviner une réponse"
      ],
      "reponse": 3,
      "explication": "« Donner sa langue au chat » signifie abandonner une devinette ou demander la solution. C’est une expression courante en français familier."
    },
    {
      "id": "cul-027",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle troupe nationale est surnommée la « Maison de Molière » ?",
      "choix": [
        "La Comédie-Française",
        "Le Théâtre du Soleil",
        "L’Opéra de Paris",
        "Le Théâtre de la Colline"
      ],
      "reponse": 0,
      "explication": "La Comédie-Française est souvent appelée la Maison de Molière. Elle conserve et joue une grande partie du répertoire théâtral français."
    },
    {
      "id": "cul-028",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel festival de théâtre et de spectacle vivant a lieu chaque été dans le Vaucluse ?",
      "choix": [
        "Le Printemps de Bourges",
        "Le Festival d’Avignon",
        "Les Francofolies",
        "Le Festival de Deauville"
      ],
      "reponse": 1,
      "explication": "Le Festival d’Avignon est un rendez-vous majeur du théâtre et du spectacle vivant. Il se déroule chaque été dans la ville d’Avignon."
    },
    {
      "id": "cul-029",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quels frères sont associés aux débuts du cinématographe en France ?",
      "choix": [
        "Les frères Goncourt",
        "Les frères Montgolfier",
        "Les frères Lumière",
        "Les frères Grimm"
      ],
      "reponse": 2,
      "explication": "Auguste et Louis Lumière organisent en 1895 des projections publiques payantes à Paris. Leur cinématographe marque une étape essentielle dans l’histoire du cinéma."
    },
    {
      "id": "cul-030",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel festival français remet la Palme d’or ?",
      "choix": [
        "Le Festival d’Annecy",
        "Le Festival d’Avignon",
        "Le Festival de Canneseries",
        "Le Festival de Cannes"
      ],
      "reponse": 3,
      "explication": "La Palme d’or est la récompense principale du Festival de Cannes. Ce festival international de cinéma se tient chaque année sur la Croisette."
    },
    {
      "id": "cul-031",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle cérémonie récompense chaque année le cinéma français ?",
      "choix": [
        "Les César",
        "Les Molières",
        "Les Victoires de la musique",
        "Les Globes de cristal"
      ],
      "reponse": 0,
      "explication": "Les César sont des prix attribués par l’Académie des arts et techniques du cinéma. Ils récompensent les films et professionnels du cinéma français."
    },
    {
      "id": "cul-032",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle chanteuse est associée à la chanson La Vie en rose ?",
      "choix": [
        "Barbara",
        "Édith Piaf",
        "Juliette Gréco",
        "Dalida"
      ],
      "reponse": 1,
      "explication": "Édith Piaf a popularisé La Vie en rose, devenue un symbole de la chanson française. Sa voix et son répertoire ont marqué le XXe siècle."
    },
    {
      "id": "cul-033",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle fête culturelle a lieu en France le 21 juin ?",
      "choix": [
        "La Nuit de la lecture",
        "Les Journées du patrimoine",
        "La Fête de la musique",
        "Le Printemps des poètes"
      ],
      "reponse": 2,
      "explication": "La Fête de la musique se déroule le 21 juin. Elle encourage les concerts gratuits et la participation de musiciens amateurs et professionnels."
    },
    {
      "id": "cul-034",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel personnage de bande dessinée gaulois est créé par René Goscinny et Albert Uderzo ?",
      "choix": [
        "Lucky Luke",
        "Tintin",
        "Gaston Lagaffe",
        "Astérix"
      ],
      "reponse": 3,
      "explication": "Astérix est créé en 1959 par le scénariste René Goscinny et le dessinateur Albert Uderzo. La série joue avec l’histoire antique et l’humour français."
    },
    {
      "id": "cul-035",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel dramaturge a écrit Le Cid ?",
      "choix": [
        "Pierre Corneille",
        "Jean Racine",
        "Molière",
        "Marivaux"
      ],
      "reponse": 0,
      "explication": "Le Cid est une tragi-comédie de Pierre Corneille créée en 1637. L’œuvre a suscité une célèbre querelle littéraire au XVIIe siècle."
    },
    {
      "id": "cul-036",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle tragédie est de Jean Racine ?",
      "choix": [
        "Le Misanthrope",
        "Phèdre",
        "Le Cid",
        "Lorenzaccio"
      ],
      "reponse": 1,
      "explication": "Phèdre est une tragédie de Jean Racine créée en 1677. Elle illustre la rigueur classique et l’analyse des passions."
    },
    {
      "id": "cul-037",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel écrivain des Lumières est l’auteur du Contrat social ?",
      "choix": [
        "Montesquieu",
        "Voltaire",
        "Jean-Jacques Rousseau",
        "Beaumarchais"
      ],
      "reponse": 2,
      "explication": "Du contrat social est publié par Jean-Jacques Rousseau en 1762. L’ouvrage interroge la souveraineté, la loi et la volonté générale."
    },
    {
      "id": "cul-038",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel roman de Stendhal suit l’ambition de Julien Sorel ?",
      "choix": [
        "Illusions perdues",
        "Nana",
        "Bouvard et Pécuchet",
        "Le Rouge et le Noir"
      ],
      "reponse": 3,
      "explication": "Le Rouge et le Noir est publié par Stendhal en 1830. Le roman analyse l’ascension sociale et les tensions de la France postnapoléonienne."
    },
    {
      "id": "cul-039",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel écrivain a écrit la nouvelle Boule de Suif ?",
      "choix": [
        "Guy de Maupassant",
        "Émile Zola",
        "Alphonse Daudet",
        "Prosper Mérimée"
      ],
      "reponse": 0,
      "explication": "Boule de Suif est une nouvelle de Guy de Maupassant publiée en 1880. Elle se déroule pendant la guerre franco-prussienne et critique l’hypocrisie sociale."
    },
    {
      "id": "cul-040",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel poète a écrit Le Bateau ivre ?",
      "choix": [
        "Paul Verlaine",
        "Arthur Rimbaud",
        "Charles Péguy",
        "Guillaume Apollinaire"
      ],
      "reponse": 1,
      "explication": "Le Bateau ivre est un poème d’Arthur Rimbaud composé en 1871. Il est célèbre pour ses images audacieuses et son souffle visionnaire."
    },
    {
      "id": "cul-041",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel écrivain est l’auteur d’À la recherche du temps perdu ?",
      "choix": [
        "André Malraux",
        "Louis-Ferdinand Céline",
        "Marcel Proust",
        "François Mauriac"
      ],
      "reponse": 2,
      "explication": "Marcel Proust a publié À la recherche du temps perdu entre 1913 et 1927. Cette œuvre monumentale explore la mémoire, le temps et la société."
    },
    {
      "id": "cul-042",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel philosophe et écrivain a publié Huis clos et Les Mains sales ?",
      "choix": [
        "Albert Camus",
        "Raymond Aron",
        "Michel Foucault",
        "Jean-Paul Sartre"
      ],
      "reponse": 3,
      "explication": "Jean-Paul Sartre est l’auteur de plusieurs pièces de théâtre, dont Huis clos. Il est aussi une figure majeure de l’existentialisme."
    },
    {
      "id": "cul-043",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle autrice a écrit la série des Claudine ?",
      "choix": [
        "Colette",
        "Marguerite Yourcenar",
        "Nathalie Sarraute",
        "George Sand"
      ],
      "reponse": 0,
      "explication": "Colette publie les romans de Claudine au début du XXe siècle. Son œuvre accorde une grande place aux sensations, à l’indépendance et à l’observation sociale."
    },
    {
      "id": "cul-044",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel roman court de Marguerite Duras a reçu le prix Goncourt en 1984 ?",
      "choix": [
        "Moderato cantabile",
        "L’Amant",
        "Un barrage contre le Pacifique",
        "Hiroshima mon amour"
      ],
      "reponse": 1,
      "explication": "L’Amant de Marguerite Duras obtient le prix Goncourt en 1984. Le livre s’inspire de souvenirs d’enfance en Indochine."
    },
    {
      "id": "cul-045",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel poète martiniquais a écrit Cahier d’un retour au pays natal ?",
      "choix": [
        "Léopold Sédar Senghor",
        "René Depestre",
        "Aimé Césaire",
        "Édouard Glissant"
      ],
      "reponse": 2,
      "explication": "Aimé Césaire publie Cahier d’un retour au pays natal en 1939. Il est l’une des grandes voix de la négritude."
    },
    {
      "id": "cul-046",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel écrivain français a reçu le prix Nobel de littérature en 2014 ?",
      "choix": [
        "J. M. G. Le Clézio",
        "Annie Ernaux",
        "Claude Simon",
        "Patrick Modiano"
      ],
      "reponse": 3,
      "explication": "Patrick Modiano reçoit le prix Nobel de littérature en 2014. Ses romans explorent souvent la mémoire, l’identité et l’Occupation."
    },
    {
      "id": "cul-047",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle écrivaine française a reçu le prix Nobel de littérature en 2022 ?",
      "choix": [
        "Annie Ernaux",
        "Leïla Slimani",
        "Marie NDiaye",
        "Amélie Nothomb"
      ],
      "reponse": 0,
      "explication": "Annie Ernaux reçoit le prix Nobel de littérature en 2022. Son œuvre mêle récit personnel, mémoire collective et analyse sociale."
    },
    {
      "id": "cul-048",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle ordonnance de 1539 impose notamment l’usage du français dans les actes de justice et d’administration ?",
      "choix": [
        "L’ordonnance de Nantes",
        "L’ordonnance de Villers-Cotterêts",
        "L’ordonnance de Montils-lès-Tours",
        "L’ordonnance de Blois"
      ],
      "reponse": 1,
      "explication": "L’ordonnance de Villers-Cotterêts est signée par François Ier en 1539. Elle renforce l’usage du français dans les documents officiels du royaume."
    },
    {
      "id": "cul-049",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Environ combien de locuteurs utilisent le français dans le monde selon les estimations récentes de l’OIF ?",
      "choix": [
        "80 millions",
        "120 millions",
        "plus de 300 millions",
        "près d’un milliard"
      ],
      "reponse": 2,
      "explication": "L’OIF estime que le français compte plus de 300 millions de locuteurs dans le monde. Ce chiffre inclut des situations très diverses de langue maternelle, seconde ou d’usage."
    },
    {
      "id": "cul-050",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel cinéaste est l’un des pionniers des effets spéciaux et a réalisé Le Voyage dans la Lune ?",
      "choix": [
        "Jean Renoir",
        "François Truffaut",
        "Louis Feuillade",
        "Georges Méliès"
      ],
      "reponse": 3,
      "explication": "Georges Méliès réalise Le Voyage dans la Lune en 1902. Il est célèbre pour son imagination visuelle et ses trucages de cinéma."
    },
    {
      "id": "cul-051",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel mouvement cinématographique français est associé à Truffaut et Godard à la fin des années 1950 ?",
      "choix": [
        "La Nouvelle Vague",
        "Le réalisme poétique",
        "Le cinéma vérité soviétique",
        "Le néoréalisme italien"
      ],
      "reponse": 0,
      "explication": "La Nouvelle Vague renouvelle le cinéma français autour de jeunes critiques et réalisateurs. François Truffaut et Jean-Luc Godard en sont deux figures majeures."
    },
    {
      "id": "cul-052",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel film de François Truffaut raconte l’enfance d’Antoine Doinel ?",
      "choix": [
        "À bout de souffle",
        "Les Quatre Cents Coups",
        "Jules et Jim",
        "La Nuit américaine"
      ],
      "reponse": 1,
      "explication": "Les Quatre Cents Coups sort en 1959 et révèle le personnage d’Antoine Doinel. Le film est l’un des emblèmes de la Nouvelle Vague."
    },
    {
      "id": "cul-053",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel acteur français est célèbre pour ses rôles dans La Grande Vadrouille et Le Gendarme de Saint-Tropez ?",
      "choix": [
        "Jean Gabin",
        "Alain Delon",
        "Louis de Funès",
        "Jean-Paul Belmondo"
      ],
      "reponse": 2,
      "explication": "Louis de Funès est l’un des grands acteurs comiques du cinéma français. Ses films populaires continuent d’être largement diffusés."
    },
    {
      "id": "cul-054",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel film français de 2011 met en scène l’amitié entre Philippe et Driss, interprété par Omar Sy ?",
      "choix": [
        "Bienvenue chez les Ch’tis",
        "Le Fabuleux Destin d’Amélie Poulain",
        "La Famille Bélier",
        "Intouchables"
      ],
      "reponse": 3,
      "explication": "Intouchables est réalisé par Éric Toledano et Olivier Nakache. Le rôle de Driss a valu à Omar Sy le César du meilleur acteur."
    },
    {
      "id": "cul-055",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel compositeur français a écrit l’opéra Carmen ?",
      "choix": [
        "Georges Bizet",
        "Hector Berlioz",
        "Claude Debussy",
        "Maurice Ravel"
      ],
      "reponse": 0,
      "explication": "Carmen de Georges Bizet est créé en 1875. Cet opéra est devenu l’un des plus joués au monde."
    },
    {
      "id": "cul-056",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel compositeur français est associé au Boléro ?",
      "choix": [
        "Camille Saint-Saëns",
        "Maurice Ravel",
        "Gabriel Fauré",
        "Charles Gounod"
      ],
      "reponse": 1,
      "explication": "Le Boléro de Maurice Ravel est créé en 1928. L’œuvre est célèbre pour son crescendo et son rythme obstiné."
    },
    {
      "id": "cul-057",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel chanteur a interprété Ne me quitte pas et a fait une grande partie de sa carrière en français ?",
      "choix": [
        "Georges Brassens",
        "Charles Aznavour",
        "Jacques Brel",
        "Serge Gainsbourg"
      ],
      "reponse": 2,
      "explication": "Jacques Brel, artiste belge francophone, a marqué la chanson française. Ne me quitte pas est l’une de ses chansons les plus célèbres."
    },
    {
      "id": "cul-058",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel festival français est un grand rendez-vous international de la bande dessinée ?",
      "choix": [
        "Le Festival de Cannes",
        "Les Eurockéennes",
        "Le Festival d’Avignon",
        "Le Festival d’Angoulême"
      ],
      "reponse": 3,
      "explication": "Le Festival international de la bande dessinée d’Angoulême est un événement majeur du neuvième art. Il remet notamment des prix appelés Fauves."
    },
    {
      "id": "cul-059",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel recueil de Paul Verlaine contient notamment le poème Art poétique ?",
      "choix": [
        "Jadis et Naguère",
        "Les Illuminations",
        "Alcools",
        "Les Châtiments"
      ],
      "reponse": 0,
      "explication": "Art poétique paraît dans Jadis et Naguère en 1884. Verlaine y formule une conception musicale et nuancée de la poésie."
    },
    {
      "id": "cul-060",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel poète et homme d’État sénégalais, membre de l’Académie française, est lié au mouvement de la négritude ?",
      "choix": [
        "Aimé Césaire",
        "Léopold Sédar Senghor",
        "Frantz Fanon",
        "Léon-Gontran Damas"
      ],
      "reponse": 1,
      "explication": "Léopold Sédar Senghor a été président du Sénégal et poète francophone. Il est élu à l’Académie française en 1983."
    },
    {
      "id": "cul-061",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel écrivain français a obtenu le prix Nobel de littérature en 2008 ?",
      "choix": [
        "Patrick Modiano",
        "Claude Simon",
        "J. M. G. Le Clézio",
        "Albert Camus"
      ],
      "reponse": 2,
      "explication": "J. M. G. Le Clézio reçoit le prix Nobel de littérature en 2008. Son œuvre s’intéresse souvent aux voyages, aux cultures et à la mémoire."
    },
    {
      "id": "cul-062",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel auteur a reçu le prix Goncourt en 1903 pour Force ennemie, lors de la première attribution du prix ?",
      "choix": [
        "Marcel Proust",
        "Anatole France",
        "Romain Rolland",
        "John-Antoine Nau"
      ],
      "reponse": 3,
      "explication": "John-Antoine Nau est le premier lauréat du prix Goncourt en 1903. Il est récompensé pour Force ennemie."
    },
    {
      "id": "cul-063",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quelle pièce de Molière a été longtemps contestée pour sa critique de l’hypocrisie religieuse ?",
      "choix": [
        "Tartuffe",
        "Les Fourberies de Scapin",
        "L’Avare",
        "Le Bourgeois gentilhomme"
      ],
      "reponse": 0,
      "explication": "Tartuffe attaque l’hypocrisie sous couvert de dévotion. La pièce a connu des interdictions avant d’être finalement autorisée."
    },
    {
      "id": "cul-064",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel événement théâtral a été créé en 1947 par Jean Vilar ?",
      "choix": [
        "Le Printemps de Bourges",
        "Le Festival d’Avignon",
        "Les Nuits de Fourvière",
        "Le Festival de Cannes"
      ],
      "reponse": 1,
      "explication": "Jean Vilar fonde le Festival d’Avignon en 1947. Il voulait rendre le théâtre accessible à un large public."
    },
    {
      "id": "cul-065",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel film de Jean-Luc Godard, sorti en 1960, est emblématique de la Nouvelle Vague ?",
      "choix": [
        "Hiroshima mon amour",
        "Les Enfants du paradis",
        "À bout de souffle",
        "Le Quai des brumes"
      ],
      "reponse": 2,
      "explication": "À bout de souffle sort en 1960 et devient un symbole de la Nouvelle Vague. Le film se distingue par son style libre et son montage novateur."
    },
    {
      "id": "cul-066",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quelle actrice française joue dans Les Parapluies de Cherbourg de Jacques Demy ?",
      "choix": [
        "Jeanne Moreau",
        "Simone Signoret",
        "Isabelle Huppert",
        "Catherine Deneuve"
      ],
      "reponse": 3,
      "explication": "Catherine Deneuve tient le rôle principal dans Les Parapluies de Cherbourg, sorti en 1964. Le film musical de Jacques Demy a reçu la Palme d’or à Cannes."
    },
    {
      "id": "cul-067",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel compositeur français a écrit La Mer et le Prélude à l’après-midi d’un faune ?",
      "choix": [
        "Claude Debussy",
        "Gabriel Fauré",
        "Hector Berlioz",
        "Camille Saint-Saëns"
      ],
      "reponse": 0,
      "explication": "Claude Debussy est une figure majeure de la musique française du tournant du XXe siècle. La Mer et le Prélude à l’après-midi d’un faune comptent parmi ses œuvres les plus célèbres."
    },
    {
      "id": "cul-068",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel compositeur a écrit la Symphonie fantastique ?",
      "choix": [
        "Maurice Ravel",
        "Hector Berlioz",
        "Georges Bizet",
        "Jules Massenet"
      ],
      "reponse": 1,
      "explication": "Hector Berlioz compose la Symphonie fantastique en 1830. Cette œuvre est un jalon du romantisme musical français."
    },
    {
      "id": "cul-069",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quelle chanson de Serge Gainsbourg a été popularisée en duo avec Jane Birkin en 1969 ?",
      "choix": [
        "La Bohème",
        "Nantes",
        "Je t’aime… moi non plus",
        "L’Aigle noir"
      ],
      "reponse": 2,
      "explication": "Je t’aime… moi non plus est écrite par Serge Gainsbourg et chantée avec Jane Birkin. La chanson a suscité des controverses tout en devenant très connue."
    },
    {
      "id": "cul-070",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel reporter de bande dessinée a été créé par Hergé, auteur belge francophone ?",
      "choix": [
        "Astérix",
        "Blueberry",
        "Spirou",
        "Tintin"
      ],
      "reponse": 3,
      "explication": "Tintin est créé par Hergé en 1929. Même si son auteur est belge, la série occupe une place importante dans la bande dessinée francophone."
    },
    {
      "id": "cul-071",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel artiste a peint La Liberté guidant le peuple en 1830 ?",
      "choix": [
        "Eugène Delacroix",
        "Jacques-Louis David",
        "Gustave Courbet",
        "Édouard Manet"
      ],
      "reponse": 0,
      "explication": "Eugène Delacroix a peint cette œuvre après les Trois Glorieuses de juillet 1830. Elle est devenue une image majeure du romantisme français."
    },
    {
      "id": "cul-072",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel musée parisien est installé dans une ancienne gare construite pour l'Exposition universelle de 1900 ?",
      "choix": [
        "Le Centre Pompidou",
        "Le musée d'Orsay",
        "Le musée du quai Branly",
        "Le Grand Palais"
      ],
      "reponse": 1,
      "explication": "Le musée d'Orsay occupe l'ancienne gare d'Orsay. Il est particulièrement connu pour ses collections du XIXe siècle et de l'impressionnisme."
    },
    {
      "id": "cul-073",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle tradition française est associée à la galette des rois ?",
      "choix": [
        "La Chandeleur",
        "La Toussaint",
        "L'Épiphanie",
        "Le 1er mai"
      ],
      "reponse": 2,
      "explication": "La galette des rois est consommée autour de l'Épiphanie, début janvier. Une fève y est cachée et celui qui la trouve devient symboliquement roi ou reine."
    },
    {
      "id": "cul-074",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel événement cycliste parcourt chaque été les routes de France ?",
      "choix": [
        "Paris-Roubaix",
        "Le Critérium du Dauphiné",
        "La Route du Rhum",
        "Le Tour de France"
      ],
      "reponse": 3,
      "explication": "Le Tour de France est la plus célèbre course cycliste par étapes. Il se déroule généralement en juillet et attire des coureurs du monde entier."
    },
    {
      "id": "cul-075",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel scientifique français est associé à la pasteurisation et à des travaux majeurs sur la vaccination ?",
      "choix": [
        "Louis Pasteur",
        "André-Marie Ampère",
        "Antoine Lavoisier",
        "Henri Becquerel"
      ],
      "reponse": 0,
      "explication": "Louis Pasteur a montré le rôle des microbes et développé des méthodes de prévention. Ses travaux ont marqué l'histoire de la vaccination, notamment contre la rage."
    },
    {
      "id": "cul-076",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle fête française célèbre la musique dans les rues le 21 juin ?",
      "choix": [
        "Les Journées du patrimoine",
        "La Fête de la musique",
        "Le 14 juillet",
        "La Nuit blanche"
      ],
      "reponse": 1,
      "explication": "La Fête de la musique a lieu chaque 21 juin, jour du solstice d'été. Elle encourage les concerts gratuits et la pratique musicale par tous."
    },
    {
      "id": "cul-077",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel monument parisien honore notamment le Soldat inconnu sous sa voûte ?",
      "choix": [
        "Le Panthéon",
        "La Sainte-Chapelle",
        "L'Arc de triomphe",
        "Le Sacré-Cœur"
      ],
      "reponse": 2,
      "explication": "La tombe du Soldat inconnu se trouve sous l'Arc de triomphe. La flamme du souvenir y est ravivée chaque soir."
    },
    {
      "id": "cul-078",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle ville accueille le tournoi de tennis de Roland-Garros ?",
      "choix": [
        "Lyon",
        "Nice",
        "Bordeaux",
        "Paris"
      ],
      "reponse": 3,
      "explication": "Roland-Garros se joue à Paris, porte d'Auteuil. C'est l'un des quatre tournois du Grand Chelem et il se dispute sur terre battue."
    },
    {
      "id": "cul-079",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel aliment français a été inscrit en 2022 au patrimoine culturel immatériel de l'UNESCO ?",
      "choix": [
        "La baguette de pain",
        "La ratatouille",
        "Le croissant",
        "La quiche lorraine"
      ],
      "reponse": 0,
      "explication": "Les savoir-faire artisanaux et la culture de la baguette ont été inscrits à l'UNESCO en 2022. Cette inscription souligne son rôle dans la vie quotidienne française."
    },
    {
      "id": "cul-080",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel jour offre-t-on traditionnellement du muguet en France ?",
      "choix": [
        "Le 11 novembre",
        "Le 1er mai",
        "Le 8 mai",
        "Le 14 juillet"
      ],
      "reponse": 1,
      "explication": "Le muguet est offert le 1er mai, jour de la Fête du travail. Il est considéré comme un porte-bonheur."
    },
    {
      "id": "cul-081",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel château de la Loire est célèbre pour enjamber le Cher avec ses galeries ?",
      "choix": [
        "Chambord",
        "Fontainebleau",
        "Chenonceau",
        "Vaux-le-Vicomte"
      ],
      "reponse": 2,
      "explication": "Le château de Chenonceau est construit en partie sur le Cher. Il est parfois surnommé le château des Dames en raison de figures féminines importantes de son histoire."
    },
    {
      "id": "cul-082",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Dans quel sport la France a-t-elle remporté la Coupe du monde masculine en 1998 et en 2018 ?",
      "choix": [
        "Rugby",
        "Handball",
        "Basket-ball",
        "Football"
      ],
      "reponse": 3,
      "explication": "L'équipe de France masculine de football a gagné la Coupe du monde en 1998 puis en 2018. Ces victoires font partie des grands souvenirs sportifs nationaux."
    },
    {
      "id": "cul-083",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel musée parisien est consacré aux arts et civilisations d'Afrique, d'Asie, d'Océanie et des Amériques ?",
      "choix": [
        "Le musée du quai Branly - Jacques Chirac",
        "Le musée Carnavalet",
        "Le musée de l'Orangerie",
        "Le musée Rodin"
      ],
      "reponse": 0,
      "explication": "Le musée du quai Branly - Jacques Chirac présente des collections extra-européennes. Il se situe près de la tour Eiffel à Paris."
    },
    {
      "id": "cul-084",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel monument parisien est connu pour sa grande coupole blanche sur la butte Montmartre ?",
      "choix": [
        "Le Grand Palais",
        "La basilique du Sacré-Cœur",
        "Le Panthéon",
        "La Conciergerie"
      ],
      "reponse": 1,
      "explication": "La basilique du Sacré-Cœur domine Paris depuis Montmartre. Sa silhouette blanche est l'un des repères visuels de la capitale."
    },
    {
      "id": "cul-085",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel ingénieur français a donné son nom à une célèbre structure métallique parisienne ?",
      "choix": [
        "Le Corbusier",
        "Vauban",
        "Gustave Eiffel",
        "Jean Nouvel"
      ],
      "reponse": 2,
      "explication": "Gustave Eiffel était un ingénieur spécialiste des constructions métalliques. Son nom est associé à plusieurs ouvrages, dont la tour parisienne qui porte son nom."
    },
    {
      "id": "cul-086",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle fête marque traditionnellement les crêpes en France ?",
      "choix": [
        "Pâques",
        "Noël",
        "L'Épiphanie",
        "La Chandeleur"
      ],
      "reponse": 3,
      "explication": "La Chandeleur est célébrée le 2 février. En France, elle est fortement associée à la préparation et au partage des crêpes."
    },
    {
      "id": "cul-087",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel concours ou guide attribue des étoiles très recherchées aux restaurants ?",
      "choix": [
        "Le guide Michelin",
        "Le Gault Millau des écoles",
        "Le Bottin mondain",
        "Le Salon de l'agriculture"
      ],
      "reponse": 0,
      "explication": "Le guide Michelin attribue des étoiles aux restaurants selon la qualité de leur cuisine. Ces distinctions ont une grande influence dans la gastronomie."
    },
    {
      "id": "cul-088",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel palais parisien est un grand musée national d'art moderne et contemporain ?",
      "choix": [
        "Le Petit Palais",
        "Le Centre Pompidou",
        "Le Palais Garnier",
        "Le Palais Bourbon"
      ],
      "reponse": 1,
      "explication": "Le Centre Pompidou abrite le Musée national d'art moderne. Son architecture apparente de tuyaux et de structures colorées est très reconnaissable."
    },
    {
      "id": "cul-089",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel site antique du sud de la France est un aqueduc romain inscrit à l'UNESCO ?",
      "choix": [
        "Les arènes de Lutèce",
        "Le théâtre d'Orange",
        "Le pont du Gard",
        "La colonne de Juillet"
      ],
      "reponse": 2,
      "explication": "Le pont du Gard est un aqueduc romain situé près de Nîmes. Il est inscrit au patrimoine mondial de l'UNESCO."
    },
    {
      "id": "cul-090",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel organisme public français est un grand centre national de recherche scientifique ?",
      "choix": [
        "L'INA",
        "L'ONF",
        "La SACEM",
        "Le CNRS"
      ],
      "reponse": 3,
      "explication": "Le CNRS signifie Centre national de la recherche scientifique. Il est l'un des principaux organismes de recherche en France."
    },
    {
      "id": "cul-091",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel mouvement artistique privilégie les effets de lumière et les scènes de la vie moderne au XIXe siècle ?",
      "choix": [
        "L'impressionnisme",
        "Le classicisme",
        "Le cubisme",
        "Le surréalisme"
      ],
      "reponse": 0,
      "explication": "L'impressionnisme s'attache aux impressions visuelles, à la lumière et aux moments fugitifs. Il s'est développé en France dans la seconde moitié du XIXe siècle."
    },
    {
      "id": "cul-092",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle commémoration française a lieu le 11 novembre ?",
      "choix": [
        "La fin de la Seconde Guerre mondiale en Europe",
        "L'armistice de 1918",
        "La prise de la Bastille",
        "La proclamation de la République"
      ],
      "reponse": 1,
      "explication": "Le 11 novembre commémore l'armistice de 1918 qui met fin aux combats de la Première Guerre mondiale. C'est un jour férié en France."
    },
    {
      "id": "cul-093",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel sport est associé au Tournoi des Six Nations ?",
      "choix": [
        "Le volley-ball",
        "Le cyclisme",
        "Le rugby à XV",
        "Le tennis"
      ],
      "reponse": 2,
      "explication": "Le Tournoi des Six Nations est une grande compétition européenne de rugby à XV. La France y affronte notamment l'Angleterre, l'Irlande, l'Écosse, le pays de Galles et l'Italie."
    },
    {
      "id": "cul-094",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle tradition humoristique du 1er avril consiste à faire des plaisanteries ?",
      "choix": [
        "Le bœuf gras",
        "La chasse aux œufs",
        "Le carnaval des fleurs",
        "Le poisson d'avril"
      ],
      "reponse": 3,
      "explication": "Le poisson d'avril est une tradition de farces et de canulars. Les enfants collent parfois un poisson en papier dans le dos des autres."
    },
    {
      "id": "cul-095",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel peintre néoclassique a réalisé Le Serment des Horaces ?",
      "choix": [
        "Jacques-Louis David",
        "Nicolas Poussin",
        "Jean-Honoré Fragonard",
        "Théodore Géricault"
      ],
      "reponse": 0,
      "explication": "Jacques-Louis David est une figure majeure du néoclassicisme français. Le Serment des Horaces illustre le goût pour l'Antiquité et la composition rigoureuse."
    },
    {
      "id": "cul-096",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel artiste réaliste a peint Un enterrement à Ornans ?",
      "choix": [
        "Édouard Manet",
        "Gustave Courbet",
        "Pierre-Auguste Renoir",
        "Edgar Degas"
      ],
      "reponse": 1,
      "explication": "Gustave Courbet a peint Un enterrement à Ornans en donnant une dimension monumentale à une scène ordinaire. Cette œuvre est emblématique du réalisme."
    },
    {
      "id": "cul-097",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel artiste français est célèbre pour Le Penseur et La Porte de l'Enfer ?",
      "choix": [
        "Aristide Maillol",
        "César",
        "Auguste Rodin",
        "Jean Tinguely"
      ],
      "reponse": 2,
      "explication": "Auguste Rodin a profondément renouvelé la sculpture à la fin du XIXe siècle. Le Penseur est l'une de ses œuvres les plus connues."
    },
    {
      "id": "cul-098",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle artiste a sculpté La Valse et fut longtemps liée à l'atelier de Rodin ?",
      "choix": [
        "Niki de Saint Phalle",
        "Germaine Richier",
        "Louise Bourgeois",
        "Camille Claudel"
      ],
      "reponse": 3,
      "explication": "Camille Claudel est une grande sculptrice française. Son œuvre a été redécouverte et reconnue pour sa force expressive."
    },
    {
      "id": "cul-099",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel mouvement associé à Matisse se caractérise par l'usage de couleurs vives et expressives ?",
      "choix": [
        "Le fauvisme",
        "Le réalisme",
        "Le classicisme",
        "Le dadaïsme"
      ],
      "reponse": 0,
      "explication": "Le fauvisme apparaît au début du XXe siècle. Henri Matisse en est l'une des figures principales, avec une peinture fondée sur la couleur libre."
    },
    {
      "id": "cul-100",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel artiste est connu pour ses Nanas, sculptures féminines colorées et monumentales ?",
      "choix": [
        "Sonia Delaunay",
        "Niki de Saint Phalle",
        "Berthe Morisot",
        "Rosa Bonheur"
      ],
      "reponse": 1,
      "explication": "Niki de Saint Phalle a créé les Nanas, figures féminines joyeuses et colorées. Elles participent à son langage artistique très reconnaissable."
    },
    {
      "id": "cul-101",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel monument parisien accueille des personnalités honorées par la Nation française ?",
      "choix": [
        "Le Grand Palais",
        "L'Opéra Bastille",
        "Le Panthéon",
        "La Madeleine"
      ],
      "reponse": 2,
      "explication": "Le Panthéon reçoit les restes de personnalités que la République souhaite honorer. Sa devise indique : « Aux grands hommes, la patrie reconnaissante »."
    },
    {
      "id": "cul-102",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel édifice parisien est célèbre pour ses vitraux du XIIIe siècle sur l'île de la Cité ?",
      "choix": [
        "La basilique Saint-Denis",
        "Le Val-de-Grâce",
        "L'église Saint-Sulpice",
        "La Sainte-Chapelle"
      ],
      "reponse": 3,
      "explication": "La Sainte-Chapelle a été construite au XIIIe siècle sous Louis IX. Ses hautes verrières constituent un chef-d'œuvre de l'art gothique rayonnant."
    },
    {
      "id": "cul-103",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle cathédrale parisienne a rouvert au public en décembre 2024 après l'incendie de 2019 ?",
      "choix": [
        "Notre-Dame de Paris",
        "Saint-Étienne-du-Mont",
        "Saint-Germain-des-Prés",
        "Saint-Eustache"
      ],
      "reponse": 0,
      "explication": "Notre-Dame de Paris a été gravement touchée par un incendie en avril 2019. Sa réouverture au public a eu lieu en décembre 2024 après un vaste chantier de restauration."
    },
    {
      "id": "cul-104",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel château de la Loire possède un célèbre escalier à double révolution ?",
      "choix": [
        "Azay-le-Rideau",
        "Chambord",
        "Cheverny",
        "Saumur"
      ],
      "reponse": 1,
      "explication": "Le château de Chambord est célèbre pour son grand escalier à double révolution. Il est un symbole de la Renaissance française dans le Val de Loire."
    },
    {
      "id": "cul-105",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle cité médiévale fortifiée de l'Aude est inscrite au patrimoine mondial de l'UNESCO ?",
      "choix": [
        "Aigues-Mortes",
        "Provins",
        "Carcassonne",
        "Guérande"
      ],
      "reponse": 2,
      "explication": "La cité de Carcassonne est célèbre pour ses remparts et ses tours. Elle est inscrite au patrimoine mondial de l'UNESCO depuis 1997."
    },
    {
      "id": "cul-106",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel style architectural médiéval se reconnaît notamment aux arcs-boutants et aux voûtes d'ogives ?",
      "choix": [
        "Le style roman",
        "Le style haussmannien",
        "Le style brutaliste",
        "Le style gothique"
      ],
      "reponse": 3,
      "explication": "L'architecture gothique utilise la voûte d'ogives et l'arc-boutant pour élever les édifices et ouvrir de grands vitraux. Elle marque de nombreuses cathédrales françaises."
    },
    {
      "id": "cul-107",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel préfet a transformé Paris au XIXe siècle par de grands boulevards et immeubles alignés ?",
      "choix": [
        "Georges-Eugène Haussmann",
        "Jean-Baptiste Colbert",
        "Sébastien Le Prestre de Vauban",
        "André Malraux"
      ],
      "reponse": 0,
      "explication": "Le baron Haussmann a dirigé de grands travaux à Paris sous le Second Empire. Les boulevards, places et immeubles de cette période ont fortement marqué la capitale."
    },
    {
      "id": "cul-108",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel architecte franco-suisse a conçu la Cité radieuse de Marseille ?",
      "choix": [
        "Auguste Perret",
        "Le Corbusier",
        "Hector Guimard",
        "Dominique Perrault"
      ],
      "reponse": 1,
      "explication": "Le Corbusier a conçu la Cité radieuse, inaugurée en 1952. Plusieurs de ses œuvres architecturales sont inscrites au patrimoine mondial de l'UNESCO."
    },
    {
      "id": "cul-109",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel savant a donné son nom à l'unité de courant électrique ?",
      "choix": [
        "Blaise Pascal",
        "Henri Poincaré",
        "André-Marie Ampère",
        "Denis Papin"
      ],
      "reponse": 2,
      "explication": "L'ampère, unité d'intensité du courant électrique, porte le nom d'André-Marie Ampère. Il a joué un rôle important dans l'étude de l'électromagnétisme."
    },
    {
      "id": "cul-110",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel chimiste français est souvent considéré comme l'un des fondateurs de la chimie moderne ?",
      "choix": [
        "Claude Bernard",
        "Jean Perrin",
        "Paul Langevin",
        "Antoine Lavoisier"
      ],
      "reponse": 3,
      "explication": "Antoine Lavoisier a clarifié le rôle de l'oxygène et contribué à une nomenclature chimique moderne. Son œuvre a transformé la chimie au XVIIIe siècle."
    },
    {
      "id": "cul-111",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle invention de Louis Braille a profondément amélioré l'accès à la lecture des personnes aveugles ?",
      "choix": [
        "Un système d'écriture tactile à points en relief",
        "Un appareil de photographie instantanée",
        "Un télégraphe sans fil",
        "Un microscope électronique"
      ],
      "reponse": 0,
      "explication": "Louis Braille a mis au point un alphabet tactile composé de points en relief. Le braille est utilisé dans de nombreuses langues."
    },
    {
      "id": "cul-112",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quels frères sont associés au premier vol humain en ballon à air chaud en 1783 ?",
      "choix": [
        "Les frères Lumière",
        "Les frères Montgolfier",
        "Les frères Michelin",
        "Les frères Perret"
      ],
      "reponse": 1,
      "explication": "Joseph et Étienne Montgolfier ont développé la montgolfière. Leurs expériences ont marqué les débuts de l'aérostation."
    },
    {
      "id": "cul-113",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel pionnier français a traversé la Manche en avion en 1909 ?",
      "choix": [
        "Roland Garros",
        "Henri Farman",
        "Louis Blériot",
        "Clément Ader"
      ],
      "reponse": 2,
      "explication": "Louis Blériot a traversé la Manche en avion le 25 juillet 1909. Cet exploit a marqué l'histoire de l'aviation."
    },
    {
      "id": "cul-114",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle agence française est chargée de la politique spatiale nationale ?",
      "choix": [
        "L'INRAE",
        "Météo-France",
        "L'Ifremer",
        "Le CNES"
      ],
      "reponse": 3,
      "explication": "Le CNES est le Centre national d'études spatiales. Il coordonne la politique spatiale française et participe à des programmes européens comme Ariane."
    },
    {
      "id": "cul-115",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel label français protège l'origine géographique et le savoir-faire d'un produit alimentaire ?",
      "choix": [
        "L'AOC ou l'AOP",
        "Le numéro ISBN",
        "La marque NF habitat",
        "Le label rouge numérique"
      ],
      "reponse": 0,
      "explication": "L'AOC et l'AOP protègent des produits dont les qualités sont liées à un terroir et à un savoir-faire. Elles concernent par exemple des fromages, des vins ou des huiles."
    },
    {
      "id": "cul-116",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle région viticole française est particulièrement célèbre pour ses vins mousseux élaborés selon une méthode réglementée ?",
      "choix": [
        "Le Beaujolais",
        "La Champagne",
        "Le Jura",
        "La Provence"
      ],
      "reponse": 1,
      "explication": "La Champagne produit le champagne, vin effervescent soumis à des règles précises. Le nom est protégé et lié à une aire géographique déterminée."
    },
    {
      "id": "cul-117",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel plat alsacien associe traditionnellement chou fermenté, charcuteries et pommes de terre ?",
      "choix": [
        "Le cassoulet",
        "La bouillabaisse",
        "La choucroute garnie",
        "L'aligot"
      ],
      "reponse": 2,
      "explication": "La choucroute garnie est une spécialité d'Alsace. Elle illustre la diversité régionale de la gastronomie française."
    },
    {
      "id": "cul-118",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel chef français a codifié la cuisine moderne et organisé le travail en brigade ?",
      "choix": [
        "Paul Bocuse",
        "Antonin Carême",
        "Fernand Point",
        "Auguste Escoffier"
      ],
      "reponse": 3,
      "explication": "Auguste Escoffier a modernisé l'organisation des cuisines professionnelles. Son système de brigade reste une référence dans la restauration."
    },
    {
      "id": "cul-119",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel peintre français du XVIIe siècle est une référence du classicisme et a souvent représenté des scènes antiques ou bibliques ?",
      "choix": [
        "Nicolas Poussin",
        "Jean-Baptiste Greuze",
        "Eugène Boudin",
        "Raoul Dufy"
      ],
      "reponse": 0,
      "explication": "Nicolas Poussin est une figure majeure du classicisme français. Ses compositions recherchent l'ordre, la clarté et l'équilibre."
    },
    {
      "id": "cul-120",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel peintre a réalisé Le Déjeuner sur l'herbe, œuvre qui fit scandale au Salon des refusés de 1863 ?",
      "choix": [
        "Paul Cézanne",
        "Édouard Manet",
        "Paul Gauguin",
        "Pierre-Auguste Renoir"
      ],
      "reponse": 1,
      "explication": "Édouard Manet a présenté Le Déjeuner sur l'herbe au Salon des refusés. L'œuvre a choqué par sa modernité et sa rupture avec les conventions académiques."
    },
    {
      "id": "cul-121",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel artiste, souvent lié au postimpressionnisme, est né à Aix-en-Provence et a beaucoup peint la montagne Sainte-Victoire ?",
      "choix": [
        "Henri de Toulouse-Lautrec",
        "Georges Seurat",
        "Paul Cézanne",
        "Maurice Utrillo"
      ],
      "reponse": 2,
      "explication": "Paul Cézanne est né à Aix-en-Provence. Ses séries sur la montagne Sainte-Victoire ont influencé l'art moderne."
    },
    {
      "id": "cul-122",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel artiste français a vécu en Polynésie et peint des œuvres comme D'où venons-nous ? Que sommes-nous ? Où allons-nous ?",
      "choix": [
        "Edgar Degas",
        "Henri Matisse",
        "Georges Braque",
        "Paul Gauguin"
      ],
      "reponse": 3,
      "explication": "Paul Gauguin a séjourné en Polynésie à la fin du XIXe siècle. Ses tableaux utilisent souvent des couleurs intenses et des compositions symboliques."
    },
    {
      "id": "cul-123",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel monument romain de Nîmes est un amphithéâtre antique encore utilisé pour des spectacles ?",
      "choix": [
        "Les arènes de Nîmes",
        "Le théâtre de Fourvière",
        "La Maison Carrée d'Arles",
        "Le trophée d'Auguste"
      ],
      "reponse": 0,
      "explication": "Les arènes de Nîmes sont un amphithéâtre romain très bien conservé. Elles accueillent encore aujourd'hui des événements culturels."
    },
    {
      "id": "cul-124",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel château de Seine-et-Marne a inspiré des éléments de l'architecture classique française avant le grand essor des palais royaux ?",
      "choix": [
        "Pierrefonds",
        "Vaux-le-Vicomte",
        "Chantilly",
        "Malmaison"
      ],
      "reponse": 1,
      "explication": "Vaux-le-Vicomte a été construit pour Nicolas Fouquet au XVIIe siècle. Son architecture et ses jardins ont eu une influence majeure sur l'art classique français."
    },
    {
      "id": "cul-125",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel physicien français a découvert la radioactivité naturelle en 1896 ?",
      "choix": [
        "Irène Joliot-Curie",
        "Pierre Curie",
        "Henri Becquerel",
        "Frédéric Joliot-Curie"
      ],
      "reponse": 2,
      "explication": "Henri Becquerel a observé en 1896 un rayonnement émis spontanément par des sels d'uranium. Cette découverte a ouvert la voie aux recherches sur la radioactivité."
    },
    {
      "id": "cul-126",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel inventeur français est associé au daguerréotype, premier procédé photographique largement diffusé ?",
      "choix": [
        "Nicéphore Niépce",
        "Gaspard Monge",
        "Étienne-Jules Marey",
        "Louis Daguerre"
      ],
      "reponse": 3,
      "explication": "Louis Daguerre a donné son nom au daguerréotype, présenté officiellement en 1839. Ce procédé a joué un rôle central dans les débuts de la photographie."
    },
    {
      "id": "cul-127",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel explorateur et océanographe français est associé au navire Calypso et à la popularisation de la protection des océans ?",
      "choix": [
        "Jacques-Yves Cousteau",
        "Paul-Émile Victor",
        "Jean-Baptiste Charcot",
        "Alain Bombard"
      ],
      "reponse": 0,
      "explication": "Jacques-Yves Cousteau a fait connaître le monde sous-marin au grand public. Ses films et expéditions ont contribué à sensibiliser à la protection des océans."
    },
    {
      "id": "cul-128",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel médecin et bactériologiste a identifié le bacille de la peste à Hong Kong en 1894 ?",
      "choix": [
        "Albert Calmette",
        "Alexandre Yersin",
        "Charles Nicolle",
        "Émile Roux"
      ],
      "reponse": 1,
      "explication": "Alexandre Yersin a identifié l'agent de la peste en 1894. La bactérie Yersinia pestis porte son nom."
    },
    {
      "id": "cul-129",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel lanceur européen, développé avec une forte participation française, est lié au Centre spatial guyanais de Kourou ?",
      "choix": [
        "Soyouz",
        "Falcon 9",
        "Ariane",
        "Atlas V"
      ],
      "reponse": 2,
      "explication": "Ariane est une famille de lanceurs européens opérée depuis Kourou, en Guyane française. La France joue un rôle important dans cette filière spatiale européenne."
    },
    {
      "id": "cul-130",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel rénovateur des Jeux olympiques modernes était un pédagogue français ?",
      "choix": [
        "Jules Rimet",
        "Henri Desgrange",
        "Jean Borotra",
        "Pierre de Coubertin"
      ],
      "reponse": 3,
      "explication": "Pierre de Coubertin a joué un rôle décisif dans la renaissance des Jeux olympiques modernes à la fin du XIXe siècle. Les premiers Jeux de l'ère moderne ont eu lieu à Athènes en 1896."
    },
    {
      "id": "vie-001",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "À quoi sert la carte Vitale ?",
      "choix": [
        "À voter aux élections",
        "À justifier son identité à la banque",
        "À attester de ses droits à l'Assurance maladie et être remboursé des soins",
        "À payer ses impôts"
      ],
      "reponse": 2,
      "explication": "La carte Vitale contient les informations nécessaires au remboursement des soins par l'Assurance maladie (Sécurité sociale). Elle n'est pas une pièce d'identité."
    },
    {
      "id": "vie-002",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel numéro faut-il composer pour joindre les pompiers ?",
      "choix": [
        "Le 15",
        "Le 17",
        "Le 18",
        "Le 115"
      ],
      "reponse": 2,
      "explication": "Le 18 correspond aux pompiers, le 15 au SAMU (urgences médicales), le 17 à la police/gendarmerie, le 112 au numéro d'urgence européen et le 115 au SAMU social (hébergement d'urgence)."
    },
    {
      "id": "vie-003",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Que signifie le sigle SMIC ?",
      "choix": [
        "Salaire minimum interprofessionnel de croissance",
        "Système médical d'indemnisation des chômeurs",
        "Service municipal d'information des citoyens",
        "Statut minimal des indépendants et commerçants"
      ],
      "reponse": 0,
      "explication": "Le SMIC est le salaire horaire minimum légal en dessous duquel aucun salarié ne peut être payé. Il est revalorisé au moins une fois par an."
    },
    {
      "id": "vie-004",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quelle est la durée légale du travail hebdomadaire en France pour un salarié à temps plein ?",
      "choix": [
        "32 heures",
        "35 heures",
        "39 heures",
        "40 heures"
      ],
      "reponse": 1,
      "explication": "La durée légale est de 35 heures par semaine depuis les lois Aubry (1998-2000). Au-delà, les heures effectuées sont des heures supplémentaires, majorées ou récupérées."
    },
    {
      "id": "vie-005",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Entre quels âges l'instruction est-elle obligatoire en France ?",
      "choix": [
        "De 6 à 16 ans",
        "De 3 à 16 ans",
        "De 3 à 18 ans",
        "De 5 à 15 ans"
      ],
      "reponse": 1,
      "explication": "Depuis la rentrée 2019, l'instruction est obligatoire de 3 à 16 ans. S'y ajoute une obligation de formation jusqu'à 18 ans (études, apprentissage ou insertion)."
    },
    {
      "id": "vie-006",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Qui exerce l'autorité parentale après un divorce, en principe ?",
      "choix": [
        "Uniquement la mère",
        "Uniquement le père",
        "Les deux parents conjointement",
        "Le juge des enfants"
      ],
      "reponse": 2,
      "explication": "L'autorité parentale reste en principe conjointe après une séparation : les deux parents prennent ensemble les décisions importantes concernant l'enfant, quelle que soit la résidence de celui-ci."
    },
    {
      "id": "vie-007",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "En France, le mariage civil :",
      "choix": [
        "est facultatif si l'on est marié religieusement",
        "doit être célébré à la mairie et précéder toute cérémonie religieuse",
        "peut être célébré par un notaire",
        "est réservé aux personnes de nationalité française"
      ],
      "reponse": 1,
      "explication": "Seul le mariage civil, célébré par l'officier d'état civil à la mairie, a une valeur légale. Une cérémonie religieuse ne peut avoir lieu qu'après le mariage civil. Le mariage est ouvert aux couples de même sexe depuis 2013."
    },
    {
      "id": "vie-008",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Que finance principalement l'impôt en France ?",
      "choix": [
        "Les partis politiques",
        "Les services publics (école, hôpital, justice, sécurité…)",
        "Les entreprises privées",
        "Les cultes religieux"
      ],
      "reponse": 1,
      "explication": "L'impôt finance les dépenses publiques et les services publics. La Déclaration de 1789 (article 13) prévoit une contribution commune répartie entre les citoyens « à raison de leurs facultés »."
    },
    {
      "id": "vie-009",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quel organisme verse principalement les aides au logement (APL) ?",
      "choix": [
        "La CAF (Caisse d'allocations familiales)",
        "Pôle emploi / France Travail",
        "La CPAM",
        "Le Trésor public"
      ],
      "reponse": 0,
      "explication": "La CAF verse les prestations familiales et les aides au logement (APL). La CPAM gère l'assurance maladie et France Travail l'accompagnement des demandeurs d'emploi."
    },
    {
      "id": "vie-010",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Un locataire peut-il être expulsé de son logement à tout moment de l'année ?",
      "choix": [
        "Oui, sans condition",
        "Non, la trêve hivernale suspend les expulsions du 1er novembre au 31 mars",
        "Non, les expulsions sont interdites en France",
        "Oui, mais seulement en été"
      ],
      "reponse": 1,
      "explication": "Une expulsion suppose une décision de justice et le concours de la force publique. La trêve hivernale (1er novembre – 31 mars) suspend en principe les expulsions locatives."
    },
    {
      "id": "vie-011",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel organisme gère le plus souvent vos remboursements de soins dans le régime général ?",
      "choix": [
        "La CPAM",
        "La mairie",
        "France Travail",
        "L'URSSAF"
      ],
      "reponse": 0,
      "explication": "La caisse primaire d'assurance maladie (CPAM) gère les droits et remboursements des assurés du régime général. Elle dépend de l'Assurance maladie."
    },
    {
      "id": "vie-012",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Pourquoi déclare-t-on un médecin traitant à l'Assurance maladie ?",
      "choix": [
        "Pour ne consulter que ce médecin toute sa vie",
        "Pour être mieux remboursé dans le parcours de soins coordonnés",
        "Pour obtenir automatiquement une mutuelle",
        "Pour éviter toute avance de frais à l'hôpital"
      ],
      "reponse": 1,
      "explication": "Le médecin traitant coordonne le suivi médical et oriente si besoin vers des spécialistes. Le déclarer permet de respecter le parcours de soins et d'éviter une baisse de remboursement."
    },
    {
      "id": "vie-013",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Que permet généralement le tiers payant chez un professionnel de santé qui l'accepte ?",
      "choix": [
        "Choisir librement le montant remboursé",
        "Remplacer la consultation médicale",
        "Ne pas avancer tout ou partie des frais pris en charge",
        "Recevoir un salaire pendant un arrêt maladie"
      ],
      "reponse": 2,
      "explication": "Le tiers payant évite à l'assuré d'avancer la part couverte par l'Assurance maladie et parfois par la complémentaire santé. Il ne rend pas les soins gratuits dans tous les cas."
    },
    {
      "id": "vie-014",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "À quoi sert une mutuelle ou complémentaire santé ?",
      "choix": [
        "À remplacer le médecin traitant",
        "À inscrire une personne à France Travail",
        "À payer les cotisations patronales",
        "À compléter les remboursements de l'Assurance maladie"
      ],
      "reponse": 3,
      "explication": "La complémentaire santé prend en charge tout ou partie des frais restant après le remboursement de l'Assurance maladie. Elle peut être individuelle ou proposée par l'employeur."
    },
    {
      "id": "vie-015",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel numéro faut-il appeler en priorité pour une urgence médicale vitale en France ?",
      "choix": [
        "Le 15, le SAMU",
        "Le 36 46",
        "Le 39 49",
        "Le 119"
      ],
      "reponse": 0,
      "explication": "Le 15 permet de joindre le SAMU pour une urgence médicale. Un médecin régulateur évalue la situation et déclenche les secours adaptés."
    },
    {
      "id": "vie-016",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Que doit faire un salarié lorsqu'il reçoit un arrêt de travail pour maladie ?",
      "choix": [
        "Le garder jusqu'à la reprise du travail",
        "Le transmettre dans les délais à l'Assurance maladie et à son employeur",
        "L'envoyer uniquement à la mairie",
        "Le publier sur son espace France Travail"
      ],
      "reponse": 1,
      "explication": "Un arrêt maladie doit être transmis rapidement aux organismes concernés, selon les modalités indiquées. Cela permet l'étude des indemnités journalières et justifie l'absence auprès de l'employeur."
    },
    {
      "id": "vie-017",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Qui est tenu au secret médical ?",
      "choix": [
        "Uniquement les directeurs d'hôpital",
        "Seulement les pharmaciens de garde",
        "Les professionnels de santé au sujet des informations confiées par le patient",
        "Les employeurs après une visite médicale"
      ],
      "reponse": 2,
      "explication": "Le secret médical protège les informations concernant la santé d'une personne. Les professionnels de santé ne peuvent les divulguer que dans les cas prévus par la loi."
    },
    {
      "id": "vie-018",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Que signifie signer un CDI ?",
      "choix": [
        "Signer un contrat limité à une saison",
        "Travailler sans contrat écrit obligatoire dans tous les cas",
        "Être inscrit automatiquement au chômage",
        "Avoir un contrat de travail sans date de fin prévue"
      ],
      "reponse": 3,
      "explication": "Le contrat à durée indéterminée n'a pas de terme fixé à l'avance. Il peut toutefois prendre fin par démission, licenciement, rupture conventionnelle ou d'autres modes légaux."
    },
    {
      "id": "vie-019",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "À quoi sert la période d'essai dans un contrat de travail ?",
      "choix": [
        "À vérifier si le poste convient au salarié et à l'employeur",
        "À travailler sans rémunération",
        "À supprimer tous les droits du salarié",
        "À éviter toute déclaration à l'URSSAF"
      ],
      "reponse": 0,
      "explication": "La période d'essai permet d'apprécier les compétences du salarié et au salarié d'évaluer si le poste lui convient. Elle est encadrée par la loi ou la convention collective."
    },
    {
      "id": "vie-020",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel document récapitule chaque mois le salaire, les cotisations et le net à payer ?",
      "choix": [
        "Le certificat de nationalité",
        "La fiche de paie",
        "Le livret de famille",
        "La carte européenne d'assurance maladie"
      ],
      "reponse": 1,
      "explication": "La fiche de paie détaille la rémunération, les cotisations sociales et le montant versé au salarié. Elle doit être conservée sans limitation de durée."
    },
    {
      "id": "vie-021",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Que sont les congés payés ?",
      "choix": [
        "Des absences toujours non rémunérées",
        "Une aide versée par la CAF",
        "Des jours de repos acquis par le salarié et rémunérés",
        "Une sanction disciplinaire"
      ],
      "reponse": 2,
      "explication": "Les salariés acquièrent des congés payés pendant leur période de travail. Ces jours de repos sont rémunérés selon les règles applicables."
    },
    {
      "id": "vie-022",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel organisme public accompagne les demandeurs d'emploi depuis 2024, à la place de Pôle emploi ?",
      "choix": [
        "La CPAM",
        "La CAF",
        "La PMI",
        "France Travail"
      ],
      "reponse": 3,
      "explication": "Pôle emploi est devenu France Travail au 1er janvier 2024. Cet organisme accompagne l'inscription, la recherche d'emploi et l'indemnisation selon les droits."
    },
    {
      "id": "vie-023",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel est le rôle principal d'un syndicat de salariés ?",
      "choix": [
        "Défendre les intérêts professionnels des salariés",
        "Attribuer les remboursements de santé",
        "Fixer l'âge de départ à la retraite",
        "Remplacer le tribunal"
      ],
      "reponse": 0,
      "explication": "Un syndicat représente et défend les intérêts matériels et moraux des travailleurs. Il peut négocier, informer et accompagner les salariés."
    },
    {
      "id": "vie-024",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Le harcèlement sexuel au travail est-il autorisé s'il est présenté comme une plaisanterie ?",
      "choix": [
        "Oui, si cela ne dure qu'une journée",
        "Non, il est interdit et peut être sanctionné",
        "Oui, si l'employeur n'est pas informé",
        "Oui, seulement pendant la période d'essai"
      ],
      "reponse": 1,
      "explication": "Le harcèlement sexuel au travail est interdit, quelle que soit la manière dont il est présenté. L'employeur doit prévenir ces situations et agir lorsqu'il en a connaissance."
    },
    {
      "id": "vie-025",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel organisme recouvre notamment les cotisations sociales des employeurs et indépendants ?",
      "choix": [
        "Le Conseil constitutionnel",
        "La préfecture",
        "L'URSSAF",
        "La pharmacie de garde"
      ],
      "reponse": 2,
      "explication": "L'URSSAF collecte des cotisations et contributions sociales qui financent la protection sociale. Elle intervient notamment auprès des employeurs et des travailleurs indépendants."
    },
    {
      "id": "vie-026",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Que financent principalement les cotisations sociales ?",
      "choix": [
        "Les passeports",
        "Les péages autoroutiers",
        "Les élections municipales",
        "Une partie de la protection sociale, comme santé, retraite ou famille"
      ],
      "reponse": 3,
      "explication": "Les cotisations sociales participent au financement des prestations sociales. Elles contribuent notamment aux risques maladie, vieillesse, famille, accidents du travail et chômage selon les dispositifs."
    },
    {
      "id": "vie-027",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Qui verse généralement les allocations familiales en France ?",
      "choix": [
        "La CAF ou la MSA selon le régime",
        "La police nationale",
        "Le tribunal judiciaire",
        "Le conseil de prud'hommes"
      ],
      "reponse": 0,
      "explication": "Les caisses d'allocations familiales versent de nombreuses prestations familiales pour le régime général. La MSA joue ce rôle pour le régime agricole."
    },
    {
      "id": "vie-028",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "À quoi sert la prime d'activité ?",
      "choix": [
        "À rembourser les lunettes uniquement",
        "À compléter les revenus des travailleurs aux ressources modestes",
        "À financer une rupture conventionnelle",
        "À remplacer toutes les pensions de retraite"
      ],
      "reponse": 1,
      "explication": "La prime d'activité est destinée aux personnes qui travaillent et ont des revenus modestes. Elle vise à soutenir le pouvoir d'achat et l'activité professionnelle."
    },
    {
      "id": "vie-029",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Que permet le congé parental d'éducation ?",
      "choix": [
        "De refuser définitivement tout emploi",
        "De remplacer un arrêt maladie",
        "De réduire ou suspendre son activité pour s'occuper de son enfant",
        "De supprimer les cotisations sociales"
      ],
      "reponse": 2,
      "explication": "Le congé parental permet à un parent salarié de suspendre ou réduire son activité pour élever son enfant. Il obéit à des conditions d'ancienneté et de durée."
    },
    {
      "id": "vie-030",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Qu'est-ce qu'un accident du travail ?",
      "choix": [
        "Un accident survenu uniquement pendant les vacances",
        "Une maladie sans lien avec l'emploi",
        "Une faute qui supprime tous les droits sociaux",
        "Un accident survenu par le fait ou à l'occasion du travail"
      ],
      "reponse": 3,
      "explication": "Un accident du travail est lié à l'activité professionnelle et survient par le fait ou à l'occasion du travail. Il ouvre des règles spécifiques de déclaration et de prise en charge."
    },
    {
      "id": "vie-031",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que couvre la Complémentaire santé solidaire ?",
      "choix": [
        "Une aide à la complémentaire santé pour les personnes aux ressources modestes",
        "Une allocation chômage réservée aux jeunes",
        "Un contrat de travail temporaire",
        "Une retraite complémentaire obligatoire"
      ],
      "reponse": 0,
      "explication": "La Complémentaire santé solidaire aide à payer les dépenses de santé non couvertes par l'Assurance maladie. Elle est attribuée sous conditions de ressources et peut être gratuite ou avec participation limitée."
    },
    {
      "id": "vie-032",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "L'aide médicale de l'État (AME) s'adresse principalement à quelles personnes ?",
      "choix": [
        "Aux touristes pour tous leurs loisirs",
        "Aux personnes étrangères en situation irrégulière remplissant notamment des conditions de résidence et de ressources",
        "Aux salariés en CDI uniquement",
        "Aux retraités propriétaires de leur logement"
      ],
      "reponse": 1,
      "explication": "L'AME permet une prise en charge de soins pour certaines personnes étrangères en situation irrégulière. Elle est soumise à des conditions, notamment de résidence en France et de ressources."
    },
    {
      "id": "vie-033",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Dans le parcours de soins, que se passe-t-il en général si l'on consulte directement un spécialiste sans orientation, hors exceptions ?",
      "choix": [
        "La consultation devient illégale",
        "La mutuelle est annulée",
        "Le remboursement par l'Assurance maladie peut être diminué",
        "Le médecin traitant est automatiquement radié"
      ],
      "reponse": 2,
      "explication": "Le parcours de soins coordonnés encourage à passer par le médecin traitant avant certains spécialistes. Hors accès direct autorisé et situations particulières, le remboursement peut être moins favorable."
    },
    {
      "id": "vie-034",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Qu'est-ce qu'une affection de longue durée (ALD) reconnue par l'Assurance maladie ?",
      "choix": [
        "Un simple rendez-vous annuel obligatoire",
        "Une dispense de déclarer un médecin traitant",
        "Un contrat de travail adapté",
        "Une maladie grave ou chronique ouvrant une prise en charge spécifique pour les soins liés"
      ],
      "reponse": 3,
      "explication": "Une ALD concerne certaines maladies nécessitant un traitement prolongé et coûteux. Les soins en lien avec l'ALD peuvent être pris en charge selon des règles spécifiques."
    },
    {
      "id": "vie-035",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Comment trouver une pharmacie de garde en dehors des horaires habituels ?",
      "choix": [
        "En consultant les informations locales prévues à cet effet, par exemple affichage, téléphone dédié ou site officiel selon le département",
        "En se présentant toujours à la préfecture",
        "En appelant France Travail",
        "En demandant uniquement à son employeur"
      ],
      "reponse": 0,
      "explication": "Les pharmacies de garde assurent l'accès aux médicaments urgents la nuit, le dimanche ou les jours fériés. Les modalités d'information peuvent varier localement et sont souvent affichées en pharmacie."
    },
    {
      "id": "vie-036",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Quel est le rôle de la PMI, protection maternelle et infantile ?",
      "choix": [
        "Contrôler les déclarations d'impôt",
        "Proposer un suivi de prévention pour les femmes enceintes, les jeunes enfants et les familles",
        "Fixer le salaire minimum",
        "Organiser les élections professionnelles"
      ],
      "reponse": 1,
      "explication": "La PMI est un service départemental de prévention et de santé publique. Elle accompagne notamment les femmes enceintes, les jeunes enfants et les parents."
    },
    {
      "id": "vie-037",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "À quoi sert la médecine du travail ?",
      "choix": [
        "À délivrer les passeports biométriques",
        "À remplacer le médecin traitant pour toute la famille",
        "À prévenir les risques professionnels et suivre la santé des salariés en lien avec le travail",
        "À décider du montant de l'allocation chômage"
      ],
      "reponse": 2,
      "explication": "Les services de prévention et de santé au travail suivent l'état de santé des travailleurs. Ils conseillent aussi employeurs et salariés pour prévenir les risques professionnels."
    },
    {
      "id": "vie-038",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Le consentement du patient est-il un principe important avant un soin ?",
      "choix": [
        "Non, le médecin décide toujours seul",
        "Non, seulement pour les soins coûteux",
        "Oui, mais uniquement à l'hôpital public",
        "Oui, le patient doit recevoir une information adaptée et consentir aux soins, sauf cas prévus par la loi"
      ],
      "reponse": 3,
      "explication": "Le consentement libre et éclairé est un principe central du droit des patients. Des exceptions existent, par exemple en urgence vitale ou dans certains cadres strictement encadrés."
    },
    {
      "id": "vie-039",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que sont les directives anticipées ?",
      "choix": [
        "Des volontés écrites concernant sa fin de vie si l'on ne peut plus s'exprimer",
        "Un contrat d'apprentissage",
        "Une demande de logement social",
        "Une déclaration mensuelle de revenus à la CAF"
      ],
      "reponse": 0,
      "explication": "Les directives anticipées permettent d'indiquer ses souhaits pour les décisions médicales de fin de vie. Elles guident l'équipe soignante si la personne n'est plus en mesure d'exprimer sa volonté."
    },
    {
      "id": "vie-040",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "En France, le don du sang repose principalement sur quel principe ?",
      "choix": [
        "La rémunération obligatoire du donneur",
        "Le volontariat, l'anonymat et la gratuité",
        "L'obligation annuelle pour tous les adultes",
        "La décision de l'employeur"
      ],
      "reponse": 1,
      "explication": "Le don du sang est fondé sur des principes éthiques de volontariat, anonymat, bénévolat et non-profit. Il existe aussi des critères de sécurité pour protéger donneurs et receveurs."
    },
    {
      "id": "vie-041",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Quelle est la différence générale entre un CDD et un CDI ?",
      "choix": [
        "Le CDD donne toujours moins de droits sociaux",
        "Le CDI est forcément à temps partiel",
        "Le CDD a un terme prévu ou un motif temporaire, le CDI n'a pas de date de fin prévue",
        "Le CDD interdit toute rémunération"
      ],
      "reponse": 2,
      "explication": "Un CDD répond à un besoin temporaire et doit respecter des motifs et durées encadrés. Le CDI est la forme normale et générale de la relation de travail."
    },
    {
      "id": "vie-042",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Qu'est-ce que le travail intérimaire ?",
      "choix": [
        "Un bénévolat obligatoire",
        "Un CDI sans salaire",
        "Un statut réservé aux fonctionnaires",
        "Une mission effectuée pour une entreprise utilisatrice via une entreprise de travail temporaire"
      ],
      "reponse": 3,
      "explication": "L'intérim implique une entreprise de travail temporaire, un salarié intérimaire et une entreprise utilisatrice. Il sert à répondre à des besoins temporaires encadrés par la loi."
    },
    {
      "id": "vie-043",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Comment les heures supplémentaires sont-elles généralement traitées ?",
      "choix": [
        "Elles ouvrent droit à une majoration de salaire ou à un repos compensateur selon les règles applicables",
        "Elles sont toujours bénévoles",
        "Elles suppriment les congés payés",
        "Elles ne doivent jamais apparaître sur la fiche de paie"
      ],
      "reponse": 0,
      "explication": "Les heures supplémentaires effectuées au-delà de la durée de référence donnent en principe lieu à une contrepartie. Celle-ci peut être une majoration salariale ou du repos selon les règles légales et conventionnelles."
    },
    {
      "id": "vie-044",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que désignent les RTT dans certaines entreprises ?",
      "choix": [
        "Une taxe médicale",
        "Des jours ou demi-journées de repos liés à l'organisation du temps de travail",
        "Une aide versée par la CPAM",
        "Un titre de séjour pour travailler"
      ],
      "reponse": 1,
      "explication": "Les RTT compensent une organisation du temps de travail dépassant la durée légale sur une période donnée. Ils dépendent des accords et règles applicables dans l'entreprise."
    },
    {
      "id": "vie-045",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Qu'est-ce qu'une rupture conventionnelle individuelle ?",
      "choix": [
        "Une sanction pénale automatique",
        "Une démission imposée par l'employeur",
        "Un accord entre l'employeur et le salarié pour rompre un CDI, soumis à une procédure et homologation",
        "Un arrêt maladie de longue durée"
      ],
      "reponse": 2,
      "explication": "La rupture conventionnelle permet à l'employeur et au salarié de convenir de la fin d'un CDI. Elle suppose un consentement libre, une indemnité minimale et une validation administrative."
    },
    {
      "id": "vie-046",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Lorsqu'un salarié démissionne d'un CDI, que doit-il généralement respecter ?",
      "choix": [
        "Une inscription obligatoire à la CAF",
        "Une autorisation de la CPAM",
        "Un vote du CSE",
        "Un préavis, sauf dispense ou cas particulier"
      ],
      "reponse": 3,
      "explication": "La démission manifeste la volonté claire du salarié de quitter son emploi. Un préavis est généralement dû, sauf dispense de l'employeur ou disposition particulière."
    },
    {
      "id": "vie-047",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "À quoi sert le CSE dans les entreprises où il est obligatoire ?",
      "choix": [
        "À représenter le personnel et être consulté sur certains sujets de l'entreprise",
        "À délivrer les cartes Vitale",
        "À fixer les taux de remboursement médicaux",
        "À attribuer les pensions de retraite"
      ],
      "reponse": 0,
      "explication": "Le comité social et économique représente les salariés dans les entreprises atteignant les seuils prévus. Il exerce des attributions en matière économique, sociale et de santé-sécurité selon la taille de l'entreprise."
    },
    {
      "id": "vie-048",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Le droit de grève est-il reconnu aux salariés en France ?",
      "choix": [
        "Non, il est interdit dans toutes les entreprises",
        "Oui, c'est un droit constitutionnel, avec des règles particulières dans certains services",
        "Oui, mais seulement pour les cadres",
        "Non, sauf pendant les jours fériés"
      ],
      "reponse": 1,
      "explication": "Le droit de grève est reconnu par la Constitution. Dans certains secteurs, notamment des services publics, des règles spécifiques peuvent organiser la continuité ou un service minimum."
    },
    {
      "id": "vie-049",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que recouvre l'égalité professionnelle entre les femmes et les hommes ?",
      "choix": [
        "L'interdiction pour les femmes de travailler la nuit",
        "Le droit pour l'employeur de payer différemment sans raison",
        "L'égalité de traitement, notamment en rémunération, carrière et accès aux responsabilités",
        "La suppression des congés parentaux"
      ],
      "reponse": 2,
      "explication": "L'égalité professionnelle impose de lutter contre les discriminations liées au sexe. Elle concerne notamment le recrutement, la rémunération, la promotion et les conditions de travail."
    },
    {
      "id": "vie-050",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Quel est le principe de l'apprentissage ou de l'alternance ?",
      "choix": [
        "Étudier sans jamais travailler en entreprise",
        "Travailler sans formation",
        "Être bénévole dans une administration",
        "Alterner formation théorique et travail en entreprise sous contrat"
      ],
      "reponse": 3,
      "explication": "L'alternance combine une formation dans un organisme ou établissement et une activité en entreprise. Elle repose sur un contrat, avec rémunération et accompagnement."
    },
    {
      "id": "vie-051",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Depuis la réforme de 2023, comment évolue l'âge légal de départ à la retraite dans le régime général ?",
      "choix": [
        "Il est relevé progressivement jusqu'à 64 ans pour les générations concernées",
        "Il est abaissé définitivement à 60 ans pour tous",
        "Il est supprimé et chacun part quand il veut",
        "Il est fixé à 70 ans pour tous les salariés"
      ],
      "reponse": 0,
      "explication": "La réforme de 2023 relève progressivement l'âge légal de 62 à 64 ans selon l'année de naissance. Des dispositifs spécifiques peuvent exister pour certaines carrières longues, incapacités ou situations particulières."
    },
    {
      "id": "vie-052",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "À quoi servent les trimestres dans le calcul de la retraite de base ?",
      "choix": [
        "À choisir sa caisse de mutuelle",
        "À déterminer la durée d'assurance prise en compte pour le taux de pension",
        "À calculer le nombre de jours de RTT",
        "À remplacer les cotisations sociales"
      ],
      "reponse": 1,
      "explication": "Les trimestres validés constituent la durée d'assurance retenue pour la retraite. Atteindre la durée requise permet en principe d'obtenir une pension sans décote, sous réserve des autres règles."
    },
    {
      "id": "vie-053",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelle est la fonction de la retraite complémentaire des salariés du privé, comme l'Agirc-Arrco ?",
      "choix": [
        "Remplacer l'Assurance maladie",
        "Financer les arrêts maladie",
        "Ajouter une pension complémentaire à la retraite de base",
        "Supprimer l'âge légal de départ"
      ],
      "reponse": 2,
      "explication": "Les salariés du privé cotisent à un régime complémentaire obligatoire, principalement Agirc-Arrco. Il verse une pension qui s'ajoute à la retraite de base."
    },
    {
      "id": "vie-054",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Qu'est-ce que l'ASPA, souvent appelée minimum vieillesse ?",
      "choix": [
        "Une prime de rentrée scolaire",
        "Une indemnité versée à tous les salariés licenciés",
        "Une taxe sur les pensions élevées",
        "Une allocation destinée aux personnes âgées ayant de faibles ressources, sous conditions"
      ],
      "reponse": 3,
      "explication": "L'allocation de solidarité aux personnes âgées garantit un minimum de ressources aux personnes âgées remplissant les conditions. Elle dépend notamment des ressources et de la résidence."
    },
    {
      "id": "vie-055",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelles sont les grandes branches historiques de la Sécurité sociale ?",
      "choix": [
        "Maladie, famille, vieillesse et accidents du travail-maladies professionnelles, auxquelles s'ajoute notamment l'autonomie",
        "Police, justice, armée et diplomatie",
        "École, logement, transport et culture",
        "Banque, assurance, commerce et industrie"
      ],
      "reponse": 0,
      "explication": "La Sécurité sociale couvre plusieurs risques sociaux, notamment maladie, famille, vieillesse et accidents du travail-maladies professionnelles. Une branche autonomie existe aussi pour la perte d'autonomie."
    },
    {
      "id": "vie-056",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Que risque un employeur qui pratique le travail dissimulé ?",
      "choix": [
        "Une simple obligation de changer de logo",
        "Des sanctions administratives, financières et pénales",
        "La délivrance automatique d'un CDI sans autre conséquence",
        "Une exonération de cotisations"
      ],
      "reponse": 1,
      "explication": "Le travail dissimulé consiste notamment à ne pas déclarer une activité ou un salarié. Il expose l'employeur à des redressements et à des sanctions pouvant être pénales."
    },
    {
      "id": "vie-057",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelles conditions générales un étranger non européen doit-il remplir pour travailler légalement en France ?",
      "choix": [
        "Être inscrit à une bibliothèque municipale",
        "Avoir seulement une promesse orale d'emploi",
        "Détenir un titre de séjour ou une autorisation permettant l'activité professionnelle concernée",
        "Payer une mutuelle privée"
      ],
      "reponse": 2,
      "explication": "Le droit au travail dépend du titre de séjour détenu ou d'une autorisation de travail. L'employeur doit vérifier que la personne est autorisée à exercer l'emploi proposé."
    },
    {
      "id": "vie-058",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Comment est généralement indemnisé le chômage après une perte involontaire d'emploi ?",
      "choix": [
        "Par la CPAM sans inscription",
        "Par l'employeur à vie",
        "Par la CAF automatiquement",
        "Par l'allocation d'aide au retour à l'emploi, si les conditions d'affiliation et d'inscription sont remplies"
      ],
      "reponse": 3,
      "explication": "L'allocation chômage dépend de conditions, notamment d'activité antérieure, de perte involontaire d'emploi et d'inscription comme demandeur d'emploi. France Travail accompagne l'indemnisation et le retour à l'emploi."
    },
    {
      "id": "vie-059",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "À qui s'adresse principalement l'AAH ?",
      "choix": [
        "Aux personnes en situation de handicap remplissant des conditions d'incapacité, d'âge, de résidence et de ressources",
        "À tous les parents sans condition",
        "Aux salariés effectuant des heures supplémentaires",
        "Aux personnes partant en vacances"
      ],
      "reponse": 0,
      "explication": "L'allocation aux adultes handicapés vise à garantir un minimum de ressources à certaines personnes handicapées. Son attribution dépend de critères médicaux et administratifs, examinés notamment par la MDPH."
    },
    {
      "id": "vie-060",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelle est l'idée centrale du RSA ?",
      "choix": [
        "Rembourser les soins dentaires uniquement",
        "Assurer un revenu minimum aux personnes ayant peu ou pas de ressources, avec des droits et devoirs d'insertion",
        "Accorder automatiquement une retraite à 55 ans",
        "Remplacer le contrat de travail"
      ],
      "reponse": 1,
      "explication": "Le revenu de solidarité active garantit un niveau minimal de ressources aux personnes éligibles. Il s'accompagne souvent d'un accompagnement vers l'emploi ou l'insertion sociale."
    },
    {
      "id": "vie-061",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Où célèbre-t-on le mariage civil en France ?",
      "choix": [
        "À la mairie",
        "Au commissariat",
        "Au tribunal correctionnel",
        "À la préfecture"
      ],
      "reponse": 0,
      "explication": "Le mariage civil est célébré par un officier d'état civil, le plus souvent le maire ou un adjoint, à la mairie. Il produit les effets juridiques du mariage en France."
    },
    {
      "id": "vie-062",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel document prouve généralement la composition d'une famille après un mariage ou une naissance ?",
      "choix": [
        "Un avis d'imposition",
        "Un livret de famille",
        "Un RIB",
        "Une quittance de loyer"
      ],
      "reponse": 1,
      "explication": "Le livret de famille regroupe des extraits d'actes d'état civil concernant les parents et les enfants. Il est délivré notamment lors d'un mariage ou de la naissance du premier enfant."
    },
    {
      "id": "vie-063",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel document doit être établi à l'entrée et à la sortie d'un logement loué pour décrire son état ?",
      "choix": [
        "Une carte grise",
        "Un acte de naissance",
        "Un état des lieux",
        "Un bulletin scolaire"
      ],
      "reponse": 2,
      "explication": "L'état des lieux décrit précisément le logement et ses équipements au début et à la fin de la location. Il sert à comparer l'état du logement et à justifier d'éventuelles retenues sur le dépôt de garantie."
    },
    {
      "id": "vie-064",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel numéro peut-on appeler dans l'Union européenne pour joindre les secours en cas d'urgence ?",
      "choix": [
        "115",
        "119",
        "3939",
        "112"
      ],
      "reponse": 3,
      "explication": "Le 112 est le numéro d'appel d'urgence européen. Il permet de contacter les services de secours dans les pays de l'Union européenne."
    },
    {
      "id": "vie-065",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "À quoi sert une quittance de loyer ?",
      "choix": [
        "À prouver que le loyer et les charges dus ont été payés",
        "À remplacer un bail écrit",
        "À obtenir automatiquement un logement social",
        "À modifier le montant de la taxe foncière"
      ],
      "reponse": 0,
      "explication": "La quittance de loyer atteste que le locataire a payé les sommes dues pour une période donnée. Le propriétaire doit la fournir gratuitement au locataire qui la demande."
    },
    {
      "id": "vie-066",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel organisme public gère les dossiers de surendettement des particuliers ?",
      "choix": [
        "La préfecture",
        "La Banque de France",
        "La mairie",
        "Le rectorat"
      ],
      "reponse": 1,
      "explication": "Les commissions de surendettement sont gérées par la Banque de France. Elles examinent la situation des particuliers qui ne peuvent plus faire face à leurs dettes non professionnelles."
    },
    {
      "id": "vie-067",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel site officiel donne des informations fiables sur les démarches administratives françaises ?",
      "choix": [
        "unforum-public.fr",
        "mespapiers-prives.net",
        "service-public.fr",
        "administration-payante.com"
      ],
      "reponse": 2,
      "explication": "service-public.fr est le site officiel de l'administration française pour informer les usagers. Il présente les démarches, les droits et les formulaires utiles."
    },
    {
      "id": "vie-068",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel document d'identité français permet aussi de voyager dans de nombreux pays hors de l'espace national, notamment hors Union européenne ?",
      "choix": [
        "Le RIB",
        "La quittance de loyer",
        "Le livret scolaire",
        "Le passeport"
      ],
      "reponse": 3,
      "explication": "Le passeport est un document de voyage et d'identité. Il est généralement nécessaire pour voyager dans de nombreux pays situés hors de l'Union européenne."
    },
    {
      "id": "vie-069",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Qui paie normalement la taxe foncière sur un logement ?",
      "choix": [
        "Le propriétaire du bien",
        "Le locataire étudiant",
        "Le facteur",
        "Le syndic de copropriété à titre personnel"
      ],
      "reponse": 0,
      "explication": "La taxe foncière est due par le propriétaire du bien immobilier au 1er janvier de l'année. Elle est différente de la taxe d'habitation et du loyer."
    },
    {
      "id": "vie-070",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel numéro appelle-t-on pour joindre la police ou la gendarmerie en cas d'urgence ?",
      "choix": [
        "15",
        "17",
        "114",
        "3919"
      ],
      "reponse": 1,
      "explication": "Le 17 permet de joindre la police ou la gendarmerie lorsqu'une intervention urgente est nécessaire. Il ne doit pas être utilisé pour une simple demande de renseignement."
    },
    {
      "id": "vie-071",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Dans l'enseignement public, que signifie la gratuité de l'école ?",
      "choix": [
        "Les familles ne paient jamais la cantine",
        "Les sorties scolaires sont toujours gratuites",
        "L'enseignement est gratuit dans les écoles, collèges et lycées publics",
        "Les fournitures personnelles sont toutes fournies par l'État"
      ],
      "reponse": 2,
      "explication": "L'enseignement public est gratuit pour les élèves dans les écoles, collèges et lycées publics. Certaines dépenses peuvent rester à la charge des familles, comme la cantine ou certaines fournitures."
    },
    {
      "id": "vie-072",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel document bancaire contient notamment l'IBAN et permet de recevoir un virement ?",
      "choix": [
        "Un acte de naissance",
        "Un permis de conduire",
        "Un bulletin de vote",
        "Un RIB"
      ],
      "reponse": 3,
      "explication": "Le relevé d'identité bancaire, ou RIB, indique les coordonnées d'un compte bancaire. Il permet notamment de recevoir des virements ou de mettre en place certains prélèvements."
    },
    {
      "id": "vie-073",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Qu'est-ce qu'un bail d'habitation ?",
      "choix": [
        "Un contrat de location entre un propriétaire et un locataire",
        "Un diplôme obtenu au lycée",
        "Une autorisation de conduire",
        "Une décision de conseil de classe"
      ],
      "reponse": 0,
      "explication": "Le bail d'habitation fixe les droits et obligations du propriétaire et du locataire. Il précise notamment le logement loué, le loyer et la durée de la location."
    },
    {
      "id": "vie-074",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "À quoi sert la cantine scolaire ?",
      "choix": [
        "À délivrer les cartes d'identité",
        "À proposer un repas aux élèves pendant la journée d'école",
        "À enregistrer les PACS",
        "À percevoir la TVA"
      ],
      "reponse": 1,
      "explication": "La cantine scolaire permet aux élèves de prendre un repas dans l'établissement ou dans un service organisé par la commune. Son tarif peut varier selon les ressources des familles."
    },
    {
      "id": "vie-075",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quelle administration délivre principalement les titres de séjour aux étrangers en France ?",
      "choix": [
        "La bibliothèque municipale",
        "Le syndic de copropriété",
        "La préfecture",
        "La cantine scolaire"
      ],
      "reponse": 2,
      "explication": "Les demandes de titre de séjour relèvent principalement de la préfecture du département de résidence. Les démarches peuvent être en partie dématérialisées selon la situation."
    },
    {
      "id": "vie-076",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel service téléphonique aide les personnes sourdes, malentendantes ou ayant des difficultés à parler à contacter les secours ?",
      "choix": [
        "3919",
        "17",
        "15",
        "114"
      ],
      "reponse": 3,
      "explication": "Le 114 est un numéro d'urgence accessible notamment par SMS, visiophonie, tchat ou fax. Il permet aux personnes qui ne peuvent pas téléphoner d'alerter les secours."
    },
    {
      "id": "vie-077",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Que doit faire un conducteur et ses passagers avec la ceinture de sécurité ?",
      "choix": [
        "La porter lorsque le véhicule circule",
        "La porter seulement sur autoroute",
        "La porter uniquement à l'avant",
        "La retirer en ville"
      ],
      "reponse": 0,
      "explication": "Le port de la ceinture de sécurité est obligatoire pour le conducteur et les passagers lorsque le véhicule circule. Cette règle vise à réduire la gravité des accidents."
    },
    {
      "id": "vie-078",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel document peut-on demander en mairie pour prouver une naissance enregistrée à l'état civil ?",
      "choix": [
        "Une quittance EDF",
        "Un acte de naissance",
        "Un contrat d'assurance habitation",
        "Un relevé de notes"
      ],
      "reponse": 1,
      "explication": "L'acte de naissance est un document d'état civil qui atteste la naissance d'une personne. Il peut être demandé à la mairie du lieu de naissance ou en ligne selon les cas."
    },
    {
      "id": "vie-079",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Que désigne la TVA dans la vie courante ?",
      "choix": [
        "Une aide pour obtenir un logement social",
        "Un diplôme de fin de collège",
        "Un impôt indirect inclus dans de nombreux prix de vente",
        "Un numéro d'appel d'urgence"
      ],
      "reponse": 2,
      "explication": "La taxe sur la valeur ajoutée est un impôt indirect payé par les consommateurs lorsqu'ils achètent de nombreux biens ou services. Le commerçant la collecte puis la reverse à l'État."
    },
    {
      "id": "vie-080",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "À quoi sert France Services ?",
      "choix": [
        "À remplacer toutes les écoles",
        "À vendre des billets de train uniquement",
        "À juger les divorces",
        "À aider les usagers dans plusieurs démarches administratives du quotidien"
      ],
      "reponse": 3,
      "explication": "Les espaces France Services accompagnent les personnes dans leurs démarches auprès de plusieurs administrations et organismes publics. Ils sont utiles notamment pour les démarches en ligne."
    },
    {
      "id": "vie-081",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "À quoi correspond la carte scolaire dans l'enseignement public ?",
      "choix": [
        "À l'affectation d'un élève dans un établissement selon son lieu de résidence",
        "À une carte de réduction obligatoire pour acheter des fournitures",
        "À un diplôme délivré en fin de collège",
        "À l'autorisation de conduire un véhicule scolaire"
      ],
      "reponse": 0,
      "explication": "La carte scolaire organise l'affectation des élèves dans les écoles et établissements publics selon leur domicile. Des demandes de dérogation peuvent exister, mais elles ne sont pas automatiques."
    },
    {
      "id": "vie-082",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Quel diplôme est généralement préparé en lycée professionnel ou en centre de formation d'apprentis pour apprendre un métier ?",
      "choix": [
        "Le brevet des collèges",
        "Le CAP",
        "Le PACS",
        "Le DPE"
      ],
      "reponse": 1,
      "explication": "Le certificat d'aptitude professionnelle, ou CAP, forme à un métier précis. Il peut être préparé notamment en lycée professionnel ou par apprentissage."
    },
    {
      "id": "vie-083",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Quel est le rôle principal de Parcoursup ?",
      "choix": [
        "Déclarer les revenus aux impôts",
        "Demander un passeport biométrique",
        "Formuler et suivre des voeux d'inscription dans l'enseignement supérieur",
        "Déposer une plainte en ligne"
      ],
      "reponse": 2,
      "explication": "Parcoursup est la plateforme nationale de préinscription en première année de l'enseignement supérieur. Les lycéens et étudiants en réorientation y formulent des voeux pour de nombreuses formations."
    },
    {
      "id": "vie-084",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que se passe-t-il en conseil de classe ?",
      "choix": [
        "On vote les lois de la République",
        "On fixe la taxe foncière",
        "On enregistre les mariages",
        "On examine la scolarité des élèves d'une classe et on donne des avis"
      ],
      "reponse": 3,
      "explication": "Le conseil de classe réunit l'équipe éducative et des représentants pour faire le point sur la classe et les élèves. Il formule des appréciations et des avis d'orientation selon le niveau."
    },
    {
      "id": "vie-085",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que signifie l'obligation d'assiduité scolaire pour un élève inscrit ?",
      "choix": [
        "L'élève doit suivre régulièrement les cours prévus à son emploi du temps",
        "L'élève choisit librement les cours chaque matin",
        "Les absences n'ont jamais à être justifiées",
        "Les parents peuvent remplacer tous les cours par des loisirs"
      ],
      "reponse": 0,
      "explication": "Un élève inscrit doit assister aux enseignements obligatoires. Les absences doivent être justifiées, et l'absentéisme répété peut entraîner des démarches de l'établissement et de l'administration."
    },
    {
      "id": "vie-086",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Quelle affirmation décrit une école privée sous contrat avec l'État ?",
      "choix": [
        "Elle n'a aucun lien avec l'Éducation nationale",
        "Elle suit les programmes officiels et reçoit des financements publics sous conditions",
        "Elle peut refuser tout contrôle de l'État",
        "Elle délivre seule les passeports scolaires"
      ],
      "reponse": 1,
      "explication": "Une école privée sous contrat s'engage notamment à suivre les programmes de l'Éducation nationale. En contrepartie, l'État prend en charge certaines dépenses, comme la rémunération des enseignants."
    },
    {
      "id": "vie-087",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Quel principe s'impose aux enseignants des écoles publiques dans l'exercice de leurs fonctions ?",
      "choix": [
        "Faire la promotion d'un parti politique en classe",
        "Favoriser une religion selon la majorité locale",
        "Respecter la neutralité du service public",
        "Remplacer les programmes officiels par leurs opinions personnelles"
      ],
      "reponse": 2,
      "explication": "Les enseignants du service public doivent respecter la neutralité, notamment religieuse et politique. Ils transmettent les connaissances dans le cadre des programmes officiels."
    },
    {
      "id": "vie-088",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Quelle différence principale existe entre PACS et concubinage ?",
      "choix": [
        "Le concubinage est toujours célébré à la mairie",
        "Le PACS est interdit aux majeurs",
        "Le concubinage crée automatiquement un régime matrimonial",
        "Le PACS est un contrat enregistré, alors que le concubinage est une union de fait"
      ],
      "reponse": 3,
      "explication": "Le pacte civil de solidarité est un contrat conclu entre deux majeurs et enregistré en mairie ou chez un notaire. Le concubinage est une vie commune stable et continue sans contrat comparable au PACS."
    },
    {
      "id": "vie-089",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "À quoi sert la reconnaissance d'un enfant ?",
      "choix": [
        "À établir un lien de filiation lorsqu'il n'est pas automatiquement établi",
        "À inscrire l'enfant sur les listes électorales",
        "À obtenir un permis de conduire pour l'enfant",
        "À remplacer l'acte de décès d'un parent"
      ],
      "reponse": 0,
      "explication": "La reconnaissance permet d'établir officiellement la filiation entre un parent et un enfant lorsque ce lien n'est pas établi automatiquement. Elle se fait devant un officier d'état civil ou un notaire selon les cas."
    },
    {
      "id": "vie-090",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que peut organiser une tutelle pour un majeur ?",
      "choix": [
        "L'attribution automatique d'un logement HLM",
        "La protection d'une personne majeure qui ne peut pas défendre seule ses intérêts",
        "L'inscription d'un adolescent au brevet",
        "La suppression de tous les impôts"
      ],
      "reponse": 1,
      "explication": "La tutelle est une mesure de protection juridique destinée aux majeurs dont les facultés sont altérées. Elle permet à un tuteur d'accomplir ou d'autoriser certains actes dans l'intérêt de la personne protégée."
    },
    {
      "id": "vie-091",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que couvre généralement l'assurance habitation obligatoire du locataire ?",
      "choix": [
        "Les notes scolaires des enfants",
        "Les droits de succession",
        "Les risques locatifs comme l'incendie, l'explosion ou le dégât des eaux",
        "Les contraventions routières"
      ],
      "reponse": 2,
      "explication": "Le locataire doit en principe assurer le logement contre les risques locatifs. Cette assurance protège notamment contre certains dommages causés au logement, comme un dégât des eaux ou un incendie."
    },
    {
      "id": "vie-092",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que permet le droit au logement opposable, appelé DALO ?",
      "choix": [
        "De ne jamais payer de loyer",
        "D'acheter obligatoirement un logement social",
        "De supprimer le bail",
        "De saisir une commission si l'on n'arrive pas à obtenir un logement malgré des démarches"
      ],
      "reponse": 3,
      "explication": "Le DALO permet à certaines personnes mal logées ou sans logement de saisir une commission de médiation. Si elles sont reconnues prioritaires, l'État doit leur proposer une solution adaptée dans les délais prévus."
    },
    {
      "id": "vie-093",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que désigne le dépôt de garantie dans une location ?",
      "choix": [
        "Une somme versée par le locataire pour couvrir d'éventuels manquements à la fin du bail",
        "Une taxe payée uniquement par les propriétaires de maisons",
        "Une allocation versée par la Banque de France",
        "Un diplôme de fin d'études"
      ],
      "reponse": 0,
      "explication": "Le dépôt de garantie est versé au propriétaire au début de la location. Il peut servir à couvrir des sommes dues ou des dégradations constatées à la sortie, dans les limites prévues par la loi."
    },
    {
      "id": "vie-094",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Quel document informe sur la performance énergétique d'un logement ?",
      "choix": [
        "Le brevet",
        "Le diagnostic de performance énergétique",
        "La carte nationale d'identité",
        "Le livret de famille"
      ],
      "reponse": 1,
      "explication": "Le diagnostic de performance énergétique, ou DPE, estime la consommation d'énergie et les émissions de gaz à effet de serre d'un logement. Il est obligatoire dans de nombreuses ventes et locations."
    },
    {
      "id": "vie-095",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "À quoi sert l'avis d'imposition ?",
      "choix": [
        "À remplacer le permis de conduire",
        "À prouver un mariage religieux",
        "À récapituler la situation fiscale d'un foyer pour une année",
        "À inscrire automatiquement un enfant à l'université"
      ],
      "reponse": 2,
      "explication": "L'avis d'imposition indique notamment les revenus déclarés, le nombre de parts et le montant d'impôt dû ou non dû. Il est souvent demandé comme justificatif de ressources."
    },
    {
      "id": "vie-096",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que signifie le prélèvement à la source de l'impôt sur le revenu ?",
      "choix": [
        "L'impôt est payé uniquement en espèces à la mairie",
        "L'impôt est supprimé pour les salariés",
        "La déclaration annuelle devient toujours inutile",
        "Une partie de l'impôt est prélevée au moment du versement du revenu"
      ],
      "reponse": 3,
      "explication": "Le prélèvement à la source consiste à prélever l'impôt au moment où le revenu est versé, par exemple sur le salaire ou la pension. Une déclaration annuelle reste en général nécessaire pour régulariser la situation."
    },
    {
      "id": "vie-097",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Quel est l'effet du quotient familial dans le calcul de l'impôt sur le revenu ?",
      "choix": [
        "Il tient compte de la composition du foyer fiscal au moyen de parts",
        "Il remplace le compte bancaire",
        "Il fixe les limitations de vitesse",
        "Il détermine le programme du collège"
      ],
      "reponse": 0,
      "explication": "Le quotient familial divise le revenu imposable par un nombre de parts lié à la situation familiale. Il permet de prendre en compte certaines charges de famille dans le calcul de l'impôt."
    },
    {
      "id": "vie-098",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "À quoi sert l'ANTS dans les démarches administratives ?",
      "choix": [
        "À organiser les conseils de classe",
        "À effectuer en ligne certaines démarches de titres comme carte d'identité, passeport, permis ou certificat d'immatriculation",
        "À juger les litiges de voisinage",
        "À collecter les frais de cantine"
      ],
      "reponse": 1,
      "explication": "L'Agence nationale des titres sécurisés, ou ANTS, permet de réaliser ou suivre plusieurs démarches liées aux titres officiels. Elle intervient notamment pour les cartes d'identité, passeports, permis de conduire et certificats d'immatriculation."
    },
    {
      "id": "vie-099",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que doit faire un jeune Français lors du recensement citoyen ?",
      "choix": [
        "Déclarer ses revenus fonciers",
        "Acheter une assurance habitation",
        "Se faire recenser à la mairie à partir de 16 ans",
        "Signer un bail commercial"
      ],
      "reponse": 2,
      "explication": "Le recensement citoyen concerne les jeunes Français à partir de 16 ans. Il se fait en mairie ou en ligne et permet notamment la convocation à la Journée défense et citoyenneté."
    },
    {
      "id": "vie-100",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Quelle est une conséquence possible de l'usage du téléphone tenu en main au volant ?",
      "choix": [
        "Une remise automatique de points",
        "Une dispense d'assurance",
        "Une inscription à Parcoursup",
        "Une amende et un retrait de points sur le permis"
      ],
      "reponse": 3,
      "explication": "Tenir un téléphone en main en conduisant est interdit. Cette infraction expose notamment à une amende et à un retrait de points sur le permis de conduire."
    },
    {
      "id": "vie-101",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "À quoi servent les bourses nationales de collège ou de lycée ?",
      "choix": [
        "À aider financièrement certaines familles selon leurs ressources et leur situation",
        "À payer les contraventions routières des élèves",
        "À remplacer le diplôme du brevet",
        "À garantir une place automatique dans une université"
      ],
      "reponse": 0,
      "explication": "Les bourses nationales de collège ou de lycée sont attribuées sous conditions, notamment de ressources. Elles visent à aider les familles à faire face aux dépenses liées à la scolarité."
    },
    {
      "id": "vie-102",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quel est le rôle des représentants de parents d'élèves dans un établissement scolaire ?",
      "choix": [
        "Ils remplacent les enseignants absents",
        "Ils représentent les familles dans certaines instances et facilitent le dialogue avec l'établissement",
        "Ils délivrent les diplômes nationaux",
        "Ils fixent seuls les programmes scolaires"
      ],
      "reponse": 1,
      "explication": "Les représentants de parents d'élèves participent à certaines instances, comme le conseil d'école ou le conseil d'administration. Ils contribuent au dialogue entre les familles et l'établissement."
    },
    {
      "id": "vie-103",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelle règle s'applique généralement aux sorties scolaires obligatoires organisées pendant le temps scolaire ?",
      "choix": [
        "Elles doivent toujours être payantes",
        "Elles remplacent définitivement les cours",
        "Elles doivent être gratuites pour les familles",
        "Elles sont décidées par la préfecture"
      ],
      "reponse": 2,
      "explication": "Une sortie scolaire obligatoire, organisée pendant le temps scolaire et liée aux enseignements, doit être gratuite pour les familles. Les sorties facultatives peuvent parfois demander une participation financière."
    },
    {
      "id": "vie-104",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelle affirmation est correcte concernant la procréation médicalement assistée en France ?",
      "choix": [
        "Elle est réservée aux couples mariés ayant déjà un enfant",
        "Elle est interdite aux couples de femmes",
        "Elle dépend uniquement d'une décision de la mairie",
        "Elle est ouverte aux couples de femmes et aux femmes non mariées, sous conditions légales"
      ],
      "reponse": 3,
      "explication": "Depuis la loi de bioéthique de 2021, l'assistance médicale à la procréation est ouverte aux couples de femmes et aux femmes non mariées, sous conditions. Elle reste encadrée par la loi et le suivi médical."
    },
    {
      "id": "vie-105",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Que signifie l'obligation alimentaire dans la famille ?",
      "choix": [
        "Certains proches peuvent devoir aider financièrement un membre de la famille dans le besoin",
        "Chaque citoyen doit acheter des produits français",
        "Les parents doivent inscrire leurs enfants à la cantine",
        "Les héritiers perdent automatiquement tout héritage"
      ],
      "reponse": 0,
      "explication": "L'obligation alimentaire impose à certains membres d'une famille, comme les parents et enfants, de s'entraider en cas de besoin. Elle peut prendre la forme d'une aide financière décidée à l'amiable ou par un juge."
    },
    {
      "id": "vie-106",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Dans une copropriété, à quoi sert le syndic ?",
      "choix": [
        "À délivrer les passeports des habitants",
        "À administrer l'immeuble et exécuter les décisions de l'assemblée générale",
        "À fixer l'impôt sur le revenu",
        "À choisir les sujets du baccalauréat"
      ],
      "reponse": 1,
      "explication": "Le syndic gère les parties communes et l'administration de la copropriété. Il exécute les décisions votées par l'assemblée générale des copropriétaires."
    },
    {
      "id": "vie-107",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Que peut faire une personne victime de troubles anormaux du voisinage, par exemple des bruits répétés la nuit ?",
      "choix": [
        "Retenir elle-même la taxe foncière du voisin",
        "Annuler le bail de tous les habitants",
        "Chercher une solution amiable puis, si nécessaire, saisir les autorités ou la justice",
        "Supprimer le règlement de copropriété"
      ],
      "reponse": 2,
      "explication": "En cas de nuisances, il est souvent conseillé de commencer par un dialogue ou un courrier. Si le trouble persiste, on peut faire constater les faits et saisir les autorités compétentes ou la justice."
    },
    {
      "id": "vie-108",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Que prévoit le droit au compte bancaire en France ?",
      "choix": [
        "Toute banque doit accorder un crédit immobilier",
        "Un compte bancaire donne automatiquement droit à une bourse",
        "Un chèque ne peut jamais être refusé",
        "Une personne sans compte peut demander à la Banque de France de désigner une banque"
      ],
      "reponse": 3,
      "explication": "Si une personne domiciliée en France se voit refuser l'ouverture d'un compte, elle peut exercer le droit au compte. La Banque de France désigne alors un établissement qui doit ouvrir un compte avec des services bancaires de base."
    },
    {
      "id": "vie-109",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Dans quel cas le droit de rétractation s'applique-t-il souvent pour un consommateur ?",
      "choix": [
        "Lors d'un achat à distance, avec un délai légal généralement de 14 jours",
        "Pour annuler librement un mariage civil après un mois",
        "Pour refuser de payer tous ses impôts",
        "Pour effacer automatiquement une contravention"
      ],
      "reponse": 0,
      "explication": "Pour de nombreux achats à distance, le consommateur dispose d'un délai de rétractation de 14 jours. Il existe toutefois des exceptions prévues par la loi, par exemple pour certains produits personnalisés ou périssables."
    },
    {
      "id": "vie-110",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "À quoi sert la garantie légale de conformité lors d'un achat ?",
      "choix": [
        "À obtenir une place en logement social",
        "À faire réparer, remplacer ou rembourser un bien non conforme dans les conditions prévues par la loi",
        "À contester un conseil de classe",
        "À remplacer une assurance habitation"
      ],
      "reponse": 1,
      "explication": "La garantie légale de conformité protège le consommateur lorsque le bien acheté n'est pas conforme au contrat ou présente un défaut. Elle permet de demander réparation, remplacement ou remboursement selon les conditions légales."
    },
    {
      "id": "eur-001",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Combien d'États membres compte l'Union européenne aujourd'hui ?",
      "choix": [
        "25",
        "27",
        "28",
        "30"
      ],
      "reponse": 1,
      "explication": "L'Union européenne compte 27 États membres depuis le retrait du Royaume-Uni (Brexit) en 2020. La France en est un membre fondateur."
    },
    {
      "id": "eur-002",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quelle est la monnaie utilisée en France ?",
      "choix": [
        "Le franc",
        "L'euro",
        "Le dollar",
        "La livre"
      ],
      "reponse": 1,
      "explication": "L'euro a remplacé le franc : il est introduit en 1999 comme monnaie de compte, et les pièces et billets circulent depuis le 1er janvier 2002."
    },
    {
      "id": "eur-003",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Que représente le drapeau européen ?",
      "choix": [
        "Un cercle de 12 étoiles dorées sur fond bleu",
        "27 étoiles blanches sur fond bleu",
        "Trois bandes bleu, blanc, rouge",
        "Une carte de l'Europe sur fond vert"
      ],
      "reponse": 0,
      "explication": "Le drapeau européen présente 12 étoiles dorées en cercle sur fond bleu. Le nombre 12 symbolise la perfection et l'unité, et ne correspond pas au nombre d'États membres."
    },
    {
      "id": "eur-004",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Dans quelle ville française siège le Parlement européen ?",
      "choix": [
        "Paris",
        "Lyon",
        "Strasbourg",
        "Bruxelles"
      ],
      "reponse": 2,
      "explication": "Le Parlement européen tient ses sessions plénières à Strasbourg. Il dispose aussi de locaux à Bruxelles et d'un secrétariat à Luxembourg."
    },
    {
      "id": "eur-005",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel traité de 1992 a créé l'Union européenne et la citoyenneté européenne ?",
      "choix": [
        "Le traité de Rome",
        "Le traité de Maastricht",
        "Le traité de Lisbonne",
        "Le traité de Schengen"
      ],
      "reponse": 1,
      "explication": "Le traité de Maastricht, signé en 1992 et ratifié en France par référendum, institue l'Union européenne, la citoyenneté européenne et prépare la monnaie unique."
    },
    {
      "id": "eur-006",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Les députés européens sont élus :",
      "choix": [
        "par les gouvernements nationaux",
        "au suffrage universel direct par les citoyens européens",
        "par la Commission européenne",
        "par tirage au sort"
      ],
      "reponse": 1,
      "explication": "Depuis 1979, les députés européens sont élus au suffrage universel direct tous les 5 ans. En France, l'élection a lieu à la proportionnelle."
    },
    {
      "id": "eur-007",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Un citoyen européen non français résidant en France peut voter :",
      "choix": [
        "à l'élection présidentielle",
        "aux élections municipales et européennes",
        "aux élections législatives",
        "à aucune élection"
      ],
      "reponse": 1,
      "explication": "La citoyenneté européenne ouvre le droit de vote et d'éligibilité aux élections municipales et européennes dans l'État de résidence, mais pas aux élections nationales (présidentielle, législatives)."
    },
    {
      "id": "eur-008",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Où siège la Banque centrale européenne (BCE) ?",
      "choix": [
        "À Bruxelles",
        "À Francfort",
        "À Luxembourg",
        "À La Haye"
      ],
      "reponse": 1,
      "explication": "La BCE, installée à Francfort (Allemagne), définit la politique monétaire de la zone euro : elle fixe les taux directeurs et veille à la stabilité des prix."
    },
    {
      "id": "eur-009",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Quel est le rôle principal de la Commission européenne ?",
      "choix": [
        "Voter le budget des États",
        "Proposer les textes législatifs européens et veiller à leur application",
        "Juger les criminels de guerre",
        "Commander l'armée européenne"
      ],
      "reponse": 1,
      "explication": "Basée à Bruxelles, la Commission européenne détient l'initiative législative, exécute le budget de l'UE et veille au respect des traités. Le Parlement et le Conseil adoptent les textes."
    },
    {
      "id": "eur-010",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Quelle est la place de la France au Conseil de sécurité de l'ONU ?",
      "choix": [
        "Elle n'en est pas membre",
        "Elle est membre permanent avec droit de veto",
        "Elle est membre élu tous les deux ans",
        "Elle préside le Conseil en permanence"
      ],
      "reponse": 1,
      "explication": "La France est l'un des 5 membres permanents du Conseil de sécurité (avec les États-Unis, la Russie, la Chine et le Royaume-Uni) et dispose du droit de veto."
    },
    {
      "id": "eur-011",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quelle date est associée à la déclaration Schuman, considérée comme un point de départ de la construction européenne ?",
      "choix": [
        "Le 9 mai 1950",
        "Le 14 juillet 1789",
        "Le 11 novembre 1918",
        "Le 1er janvier 2002"
      ],
      "reponse": 0,
      "explication": "Le 9 mai 1950, Robert Schuman propose de mettre en commun les productions française et allemande de charbon et d'acier. Cette date est devenue la Journée de l'Europe."
    },
    {
      "id": "eur-012",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quel était l'objectif concret du plan Schuman au début des années 1950 ?",
      "choix": [
        "Créer une armée européenne unique",
        "Mettre en commun le charbon et l'acier",
        "Supprimer toutes les monnaies nationales",
        "Fonder immédiatement l'Union européenne actuelle"
      ],
      "reponse": 1,
      "explication": "Le plan Schuman visait à placer le charbon et l'acier sous une autorité commune. L'idée était de rendre une nouvelle guerre entre la France et l'Allemagne matériellement plus difficile."
    },
    {
      "id": "eur-013",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quels pays ont fondé la CECA en 1951 ?",
      "choix": [
        "La France, le Royaume-Uni, l'Espagne, le Portugal, la Grèce et l'Irlande",
        "L'Allemagne, l'Autriche, la Suisse, la Belgique, les Pays-Bas et le Luxembourg",
        "La France, l'Allemagne de l'Ouest, l'Italie, la Belgique, les Pays-Bas et le Luxembourg",
        "La France, la Pologne, la Hongrie, la Tchéquie, la Slovaquie et la Slovénie"
      ],
      "reponse": 2,
      "explication": "La Communauté européenne du charbon et de l'acier réunit six États fondateurs. Ce sont aussi les six pays qui signent ensuite les traités de Rome."
    },
    {
      "id": "eur-014",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quel Français est souvent présenté comme l'un des principaux inspirateurs de la méthode communautaire européenne ?",
      "choix": [
        "Charles de Gaulle",
        "Victor Hugo",
        "François Mitterrand",
        "Jean Monnet"
      ],
      "reponse": 3,
      "explication": "Jean Monnet a joué un rôle majeur dans la conception d'institutions supranationales. Sa méthode reposait sur des réalisations concrètes créant des solidarités entre États."
    },
    {
      "id": "eur-015",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Que créent principalement les traités de Rome signés en 1957 ?",
      "choix": [
        "La Communauté économique européenne et Euratom",
        "L'espace Schengen et Europol",
        "La Banque centrale européenne et l'euro",
        "Le Conseil de l'Europe et la CEDH"
      ],
      "reponse": 0,
      "explication": "Les traités de Rome créent la CEE et la Communauté européenne de l'énergie atomique, appelée Euratom. Ils approfondissent la coopération économique entre les six États fondateurs."
    },
    {
      "id": "eur-016",
      "theme": "europe",
      "difficulte": "facile",
      "question": "À quoi sert l'accord de Schengen signé en 1985 ?",
      "choix": [
        "À choisir le président de la Commission européenne",
        "À préparer la suppression des contrôles aux frontières intérieures entre certains États",
        "À instaurer la monnaie unique dans tous les États européens",
        "À créer la Cour européenne des droits de l'homme"
      ],
      "reponse": 1,
      "explication": "Schengen organise la libre circulation sans contrôles systématiques aux frontières intérieures entre pays participants. Il ne faut pas le confondre avec l'Union européenne ni avec la zone euro."
    },
    {
      "id": "eur-017",
      "theme": "europe",
      "difficulte": "facile",
      "question": "En quelle année la convention de Schengen commence-t-elle à être effectivement appliquée ?",
      "choix": [
        "1957",
        "1985",
        "1995",
        "2009"
      ],
      "reponse": 2,
      "explication": "L'accord est signé en 1985, mais la suppression effective des contrôles aux frontières intérieures commence en 1995. Tous les États de l'UE ne font pas partie de Schengen."
    },
    {
      "id": "eur-018",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quand le Brexit devient-il juridiquement effectif ?",
      "choix": [
        "Le 1er janvier 1993",
        "Le 29 mai 2005",
        "Le 23 juin 2016",
        "Le 31 janvier 2020"
      ],
      "reponse": 3,
      "explication": "Le Royaume-Uni quitte officiellement l'Union européenne le 31 janvier 2020. Le référendum britannique avait eu lieu en juin 2016."
    },
    {
      "id": "eur-019",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quel jour célèbre-t-on chaque année la Journée de l'Europe de l'Union européenne ?",
      "choix": [
        "Le 9 mai",
        "Le 8 mai",
        "Le 14 juillet",
        "Le 1er novembre"
      ],
      "reponse": 0,
      "explication": "La Journée de l'Europe est célébrée le 9 mai, en référence à la déclaration Schuman de 1950. Elle fait partie des symboles de l'Union européenne."
    },
    {
      "id": "eur-020",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Sur quelle œuvre musicale est fondé l'hymne européen ?",
      "choix": [
        "La Marseillaise de Rouget de Lisle",
        "L'Hymne à la joie de Beethoven",
        "Le Boléro de Ravel",
        "Les Quatre Saisons de Vivaldi"
      ],
      "reponse": 1,
      "explication": "L'hymne européen reprend le thème de l'Hymne à la joie de Ludwig van Beethoven. Il est utilisé sans paroles officielles par l'Union européenne."
    },
    {
      "id": "eur-021",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quelle est la devise de l'Union européenne ?",
      "choix": [
        "Liberté, égalité, fraternité",
        "Paix, travail, solidarité",
        "Unie dans la diversité",
        "Toujours plus haut"
      ],
      "reponse": 2,
      "explication": "La devise de l'Union européenne est « Unie dans la diversité ». Elle exprime l'idée d'une coopération entre peuples aux cultures et langues différentes."
    },
    {
      "id": "eur-022",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quelle organisation a adopté le drapeau bleu aux douze étoiles avant les Communautés européennes ?",
      "choix": [
        "L'OTAN",
        "L'ONU",
        "L'UNESCO",
        "Le Conseil de l'Europe"
      ],
      "reponse": 3,
      "explication": "Le drapeau a d'abord été adopté par le Conseil de l'Europe en 1955. Les Communautés européennes l'ont ensuite repris comme symbole européen."
    },
    {
      "id": "eur-023",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Avec quelle institution le Parlement européen partage-t-il le plus souvent le pouvoir d'adopter les lois européennes ?",
      "choix": [
        "Le Conseil de l'Union européenne",
        "La Cour des comptes européenne",
        "La Banque européenne d'investissement",
        "Le Conseil de l'Europe"
      ],
      "reponse": 0,
      "explication": "Dans la procédure législative ordinaire, le Parlement européen et le Conseil de l'Union européenne adoptent ensemble les textes. Le Conseil réunit des ministres des États membres."
    },
    {
      "id": "eur-024",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Comment est composé le collège de la Commission européenne ?",
      "choix": [
        "Uniquement de députés européens",
        "D'un commissaire par État membre, dont la présidence de la Commission",
        "De juges élus par les parlements nationaux",
        "Des chefs d'État ou de gouvernement des pays membres"
      ],
      "reponse": 1,
      "explication": "La Commission comprend un commissaire par État membre, y compris sa présidente ou son président. Chaque commissaire prête serment d'agir dans l'intérêt général européen."
    },
    {
      "id": "eur-025",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Qui siège au Conseil de l'Union européenne ?",
      "choix": [
        "Les maires des capitales européennes",
        "Les juges de la Cour de justice",
        "Les ministres des États membres selon le sujet traité",
        "Les députés nationaux tirés au sort"
      ],
      "reponse": 2,
      "explication": "Le Conseil de l'Union européenne réunit les ministres des États membres compétents pour le domaine discuté. Il ne doit pas être confondu avec le Conseil européen ni avec le Conseil de l'Europe."
    },
    {
      "id": "eur-026",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quelle formation réunit les chefs d'État ou de gouvernement des États membres de l'Union européenne ?",
      "choix": [
        "La Cour de justice de l'Union européenne",
        "Le Comité des régions",
        "La Cour des comptes européenne",
        "Le Conseil européen"
      ],
      "reponse": 3,
      "explication": "Le Conseil européen réunit les chefs d'État ou de gouvernement, ainsi que ses présidents institutionnels. Il fixe les grandes orientations politiques de l'Union."
    },
    {
      "id": "eur-027",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quelle est la mission centrale de la Cour de justice de l'Union européenne ?",
      "choix": [
        "Assurer l'interprétation uniforme du droit de l'Union",
        "Financer les projets agricoles nationaux",
        "Élire les députés européens",
        "Commanditer les opérations militaires de l'OTAN"
      ],
      "reponse": 0,
      "explication": "La Cour de justice de l'Union européenne veille à ce que le droit de l'Union soit interprété et appliqué de la même manière. Elle siège à Luxembourg."
    },
    {
      "id": "eur-028",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Que contrôle principalement la Cour des comptes européenne ?",
      "choix": [
        "Les frontières extérieures de l'espace Schengen",
        "La bonne gestion des finances de l'Union européenne",
        "La conformité des élections municipales françaises",
        "Les décisions de politique monétaire de la Réserve fédérale américaine"
      ],
      "reponse": 1,
      "explication": "La Cour des comptes européenne vérifie les recettes et les dépenses de l'Union. Elle contribue à la transparence et à la bonne utilisation des fonds européens."
    },
    {
      "id": "eur-029",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Combien de temps dure en principe la présidence tournante du Conseil de l'Union européenne ?",
      "choix": [
        "Un mois",
        "Trois ans",
        "Six mois",
        "Cinq ans"
      ],
      "reponse": 2,
      "explication": "La présidence du Conseil de l'Union européenne change tous les six mois. Elle organise les travaux du Conseil, sauf pour certaines formations comme les Affaires étrangères."
    },
    {
      "id": "eur-030",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quelle caractéristique distingue un règlement européen ?",
      "choix": [
        "Il doit toujours être approuvé par référendum national",
        "Il ne concerne que les États de la zone euro",
        "Il n'a qu'une valeur consultative",
        "Il est directement applicable dans les États membres"
      ],
      "reponse": 3,
      "explication": "Un règlement européen s'applique directement dans les États membres sans nécessiter de loi nationale de transposition. Il se distingue ainsi d'une directive."
    },
    {
      "id": "eur-031",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Que fait une directive européenne ?",
      "choix": [
        "Elle fixe un résultat à atteindre tout en laissant aux États le choix des moyens",
        "Elle remplace automatiquement toutes les constitutions nationales",
        "Elle nomme les ministres des États membres",
        "Elle ne s'applique qu'aux entreprises américaines"
      ],
      "reponse": 0,
      "explication": "Une directive lie les États membres quant au résultat à atteindre. Les autorités nationales doivent généralement la transposer dans leur droit interne."
    },
    {
      "id": "eur-032",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Que signifie le principe de primauté du droit de l'Union européenne ?",
      "choix": [
        "Les élections européennes annulent les élections nationales",
        "Une règle nationale contraire au droit de l'Union applicable doit être écartée",
        "La Cour européenne des droits de l'homme dirige la Commission",
        "Les traités européens sont votés par les régions"
      ],
      "reponse": 1,
      "explication": "La primauté signifie que le droit de l'Union prévaut sur les règles nationales incompatibles dans son champ d'application. Ce principe garantit l'efficacité et l'unité du droit européen."
    },
    {
      "id": "eur-033",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quel traité rend la Charte des droits fondamentaux de l'Union européenne juridiquement contraignante ?",
      "choix": [
        "Le traité de Versailles",
        "Le traité de Rome de 1957",
        "Le traité de Lisbonne",
        "Le traité de l'Atlantique nord"
      ],
      "reponse": 2,
      "explication": "Le traité de Lisbonne donne à la Charte la même valeur juridique que les traités de l'Union. La Charte rassemble des droits civils, politiques, économiques et sociaux."
    },
    {
      "id": "eur-034",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quel traité intègre l'acquis de Schengen dans le cadre de l'Union européenne ?",
      "choix": [
        "Le traité de Paris de 1951",
        "Le traité de Nice",
        "Le traité de Maastricht",
        "Le traité d'Amsterdam"
      ],
      "reponse": 3,
      "explication": "Le traité d'Amsterdam intègre l'acquis de Schengen dans le cadre de l'Union européenne. Il est signé en 1997 et entre en vigueur en 1999."
    },
    {
      "id": "eur-035",
      "theme": "europe",
      "difficulte": "facile",
      "question": "À quoi le traité de Nice a-t-il principalement préparé les institutions européennes ?",
      "choix": [
        "À l'élargissement de l'Union vers de nouveaux États membres",
        "À la création de l'ONU",
        "À l'abandon de toute politique agricole",
        "À la sortie de la France de l'espace Schengen"
      ],
      "reponse": 0,
      "explication": "Le traité de Nice, signé en 2001, adapte les institutions en vue des grands élargissements. Il intervient avant l'entrée de nombreux pays d'Europe centrale et orientale."
    },
    {
      "id": "eur-036",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quand le traité de Lisbonne entre-t-il en vigueur ?",
      "choix": [
        "Le 1er janvier 1958",
        "Le 1er décembre 2009",
        "Le 9 mai 1950",
        "Le 31 janvier 2020"
      ],
      "reponse": 1,
      "explication": "Le traité de Lisbonne est signé en 2007 et entre en vigueur le 1er décembre 2009. Il modifie notamment le fonctionnement institutionnel de l'Union."
    },
    {
      "id": "eur-037",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Que décide le référendum organisé en France le 29 mai 2005 sur le traité constitutionnel européen ?",
      "choix": [
        "Une approbation massive du traité",
        "La sortie immédiate de la France de l'Union européenne",
        "Le rejet du traité par une majorité de votants",
        "L'adoption automatique de l'euro par le Royaume-Uni"
      ],
      "reponse": 2,
      "explication": "Les électeurs français rejettent le projet de traité établissant une Constitution pour l'Europe. Ce vote ne signifie pas la sortie de la France de l'Union européenne."
    },
    {
      "id": "eur-038",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quel État est le dernier à avoir rejoint l'Union européenne, en 2013 ?",
      "choix": [
        "La Norvège",
        "La Suisse",
        "L'Islande",
        "La Croatie"
      ],
      "reponse": 3,
      "explication": "La Croatie rejoint l'Union européenne le 1er juillet 2013. Depuis le Brexit, l'Union compte 27 États membres en 2025-2026."
    },
    {
      "id": "eur-039",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Par quel traité la citoyenneté européenne est-elle introduite ?",
      "choix": [
        "Le traité de Maastricht",
        "Le traité de Paris de 1951",
        "Le traité de l'Élysée",
        "La Convention de Genève"
      ],
      "reponse": 0,
      "explication": "Le traité de Maastricht introduit la citoyenneté de l'Union. Elle s'ajoute à la citoyenneté nationale et ne la remplace pas."
    },
    {
      "id": "eur-040",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel droit concret découle de la libre circulation des citoyens de l'Union ?",
      "choix": [
        "Recevoir automatiquement la nationalité de tout État membre",
        "Séjourner, travailler ou étudier dans un autre État membre sous certaines conditions",
        "Élire le secrétaire général de l'ONU",
        "Échapper à toute règle fiscale nationale"
      ],
      "reponse": 1,
      "explication": "La libre circulation permet de se déplacer et de séjourner dans d'autres États membres, avec des règles prévues par le droit de l'Union. Elle ne supprime pas toutes les conditions administratives."
    },
    {
      "id": "eur-041",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "À quoi sert la carte européenne d'assurance maladie ?",
      "choix": [
        "À obtenir un passeport diplomatique",
        "À voter dans toutes les élections nationales",
        "À faciliter la prise en charge de soins nécessaires lors d'un séjour temporaire en Europe",
        "À remplacer une assurance automobile"
      ],
      "reponse": 2,
      "explication": "La carte européenne d'assurance maladie facilite l'accès aux soins médicalement nécessaires pendant un séjour temporaire dans un pays participant. Elle ne remplace pas toujours une assurance voyage complète."
    },
    {
      "id": "eur-042",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel est l'objectif du programme Erasmus+ ?",
      "choix": [
        "Financer exclusivement les armées nationales",
        "Organiser les sommets du G20",
        "Contrôler les frontières extérieures de Schengen",
        "Soutenir la mobilité et les projets dans l'éducation, la formation, la jeunesse et le sport"
      ],
      "reponse": 3,
      "explication": "Erasmus+ favorise les échanges d'étudiants, d'apprentis, d'enseignants et d'acteurs associatifs. Le programme contribue à l'ouverture européenne des parcours."
    },
    {
      "id": "eur-043",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle affirmation est correcte au sujet de la reconnaissance des diplômes dans l'Union européenne ?",
      "choix": [
        "Elle peut nécessiter des procédures, surtout pour les professions réglementées",
        "Elle est toujours automatique pour tous les métiers",
        "Elle dépend uniquement de l'OTAN",
        "Elle interdit d'étudier hors de son pays d'origine"
      ],
      "reponse": 0,
      "explication": "La reconnaissance des diplômes peut être facilitée, mais elle n'est pas toujours automatique. Les professions réglementées peuvent exiger des démarches ou des conditions particulières."
    },
    {
      "id": "eur-044",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel domaine est principalement encadré par le RGPD ?",
      "choix": [
        "La fabrication des pièces en euro",
        "La protection des données personnelles",
        "La nomination des ambassadeurs",
        "La pêche en haute mer uniquement"
      ],
      "reponse": 1,
      "explication": "Le Règlement général sur la protection des données encadre le traitement des données personnelles. Il s'applique depuis 2018 dans l'Union européenne."
    },
    {
      "id": "eur-045",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Que peut faire un citoyen de l'Union dans un pays tiers où son État n'a ni ambassade ni consulat ?",
      "choix": [
        "Demander automatiquement l'asile à l'Union européenne",
        "Exiger la nationalité du pays tiers",
        "Solliciter la protection consulaire d'un autre État membre de l'Union",
        "Saisir directement la Banque centrale européenne"
      ],
      "reponse": 2,
      "explication": "La citoyenneté européenne donne droit à la protection consulaire d'un autre État membre lorsque son propre pays n'est pas représenté. Ce droit s'exerce dans les pays tiers."
    },
    {
      "id": "eur-046",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel État membre de l'Union européenne n'utilise pas l'euro comme monnaie officielle en 2025-2026 ?",
      "choix": [
        "L'Italie",
        "L'Espagne",
        "La Croatie",
        "La Pologne"
      ],
      "reponse": 3,
      "explication": "La Pologne est membre de l'Union européenne mais n'appartient pas à la zone euro. La zone euro compte 20 pays en 2025-2026."
    },
    {
      "id": "eur-047",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel pays est devenu le 20e membre de la zone euro en 2023 ?",
      "choix": [
        "La Croatie",
        "La Bulgarie",
        "La Suède",
        "La Roumanie"
      ],
      "reponse": 0,
      "explication": "La Croatie a adopté l'euro le 1er janvier 2023. Elle est ainsi devenue le 20e pays de la zone euro."
    },
    {
      "id": "eur-048",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle affirmation est vraie concernant les billets en euros ?",
      "choix": [
        "Ils portent chacun le portrait d'un président français",
        "Ils ont des dessins communs à toute la zone euro",
        "Ils changent de valeur selon le pays d'utilisation",
        "Ils ne sont valables que dans le pays où ils sont retirés"
      ],
      "reponse": 1,
      "explication": "Les billets en euros ont des dessins communs dans toute la zone euro. Les pièces, elles, comportent une face européenne et une face nationale."
    },
    {
      "id": "eur-049",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle particularité ont les pièces en euros ?",
      "choix": [
        "Elles n'ont aucune face commune",
        "Elles sont interdites hors de leur pays d'émission",
        "Elles comportent une face commune et une face nationale",
        "Elles sont fabriquées uniquement à Francfort"
      ],
      "reponse": 2,
      "explication": "Les pièces en euros ont une face commune et une face nationale propre au pays émetteur. Elles circulent cependant dans toute la zone euro."
    },
    {
      "id": "eur-050",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelles sont les quatre grandes libertés du marché unique européen ?",
      "choix": [
        "Pêche, défense, justice et fiscalité",
        "Langue, religion, éducation et culture",
        "Police, monnaie, armée et diplomatie",
        "Libre circulation des biens, des services, des personnes et des capitaux"
      ],
      "reponse": 3,
      "explication": "Le marché unique repose sur la libre circulation des biens, des services, des personnes et des capitaux. Il vise à faciliter les échanges dans l'Union européenne."
    },
    {
      "id": "eur-051",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel secteur est historiquement soutenu par la Politique agricole commune ?",
      "choix": [
        "L'agriculture",
        "La conquête spatiale uniquement",
        "Les compagnies pétrolières américaines",
        "Les clubs sportifs professionnels"
      ],
      "reponse": 0,
      "explication": "La PAC soutient l'agriculture et les territoires ruraux européens. Elle vise notamment la sécurité alimentaire, les revenus agricoles et certaines transitions environnementales."
    },
    {
      "id": "eur-052",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "À quoi sert le Fonds européen de développement régional (FEDER) ?",
      "choix": [
        "À financer les campagnes présidentielles nationales",
        "À réduire les écarts de développement entre régions européennes",
        "À gérer les passeports biométriques américains",
        "À fixer les taux directeurs de la BCE"
      ],
      "reponse": 1,
      "explication": "Le FEDER finance des projets de développement régional, d'innovation, d'infrastructures ou de transition. Il fait partie de la politique de cohésion de l'Union."
    },
    {
      "id": "eur-053",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel est l'objectif général du Fonds de cohésion de l'Union européenne ?",
      "choix": [
        "Financer uniquement les musées nationaux des pays fondateurs",
        "Accorder des prêts personnels aux citoyens européens",
        "Aider les États moins prospères dans des projets comme l'environnement et les transports",
        "Remplacer les budgets militaires nationaux"
      ],
      "reponse": 2,
      "explication": "Le Fonds de cohésion soutient les États membres dont le revenu national brut par habitant est plus faible. Il finance notamment des infrastructures de transport et des projets environnementaux."
    },
    {
      "id": "eur-054",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel État membre de l'Union européenne n'appartient pas à l'espace Schengen en 2025-2026 ?",
      "choix": [
        "L'Allemagne",
        "Le Portugal",
        "La Slovénie",
        "L'Irlande"
      ],
      "reponse": 3,
      "explication": "L'Irlande est membre de l'Union européenne mais ne fait pas partie de l'espace Schengen. L'espace Schengen et l'Union européenne ne recouvrent donc pas exactement les mêmes pays."
    },
    {
      "id": "eur-055",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel pays non membre de l'Union européenne participe à l'espace Schengen ?",
      "choix": [
        "La Suisse",
        "Le Canada",
        "Le Maroc",
        "Le Japon"
      ],
      "reponse": 0,
      "explication": "La Suisse n'est pas membre de l'Union européenne mais participe à l'espace Schengen. D'autres pays non membres de l'UE, comme la Norvège ou l'Islande, y participent aussi."
    },
    {
      "id": "eur-056",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle affirmation décrit correctement le Conseil de l'Europe ?",
      "choix": [
        "C'est la réunion mensuelle des ministres de la zone euro",
        "C'est une organisation distincte de l'Union européenne, centrée notamment sur les droits de l'homme",
        "C'est l'autre nom de la Commission européenne",
        "C'est une agence militaire de l'OTAN"
      ],
      "reponse": 1,
      "explication": "Le Conseil de l'Europe est une organisation internationale séparée de l'Union européenne. Il compte davantage d'États que l'UE et agit notamment autour de la Convention européenne des droits de l'homme."
    },
    {
      "id": "eur-057",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle juridiction contrôle le respect de la Convention européenne des droits de l'homme ?",
      "choix": [
        "La Cour pénale internationale",
        "La Cour de justice de l'Union européenne",
        "La Cour européenne des droits de l'homme",
        "La Cour des comptes française"
      ],
      "reponse": 2,
      "explication": "La Cour européenne des droits de l'homme siège à Strasbourg et relève du Conseil de l'Europe. Elle ne doit pas être confondue avec la Cour de justice de l'Union européenne."
    },
    {
      "id": "eur-058",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle affirmation est correcte au sujet de la Convention européenne des droits de l'homme ?",
      "choix": [
        "Elle ne concerne que les pays de la zone euro",
        "Elle est un traité de l'OTAN",
        "Elle a été rédigée par la Banque centrale européenne",
        "Tous les États membres de l'UE y sont parties, mais elle relève du Conseil de l'Europe"
      ],
      "reponse": 3,
      "explication": "Les États membres de l'Union européenne sont parties à la Convention européenne des droits de l'homme. Cependant, le système de la CEDH appartient au Conseil de l'Europe, pas à l'Union européenne."
    },
    {
      "id": "eur-059",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel texte protège notamment le droit à la vie, l'interdiction de la torture et le droit à un procès équitable en Europe ?",
      "choix": [
        "La Convention européenne des droits de l'homme",
        "Le traité de l'Atlantique nord",
        "Le règlement intérieur de l'Assemblée nationale",
        "Le traité de Marrakech sur le commerce"
      ],
      "reponse": 0,
      "explication": "La Convention européenne des droits de l'homme est adoptée dans le cadre du Conseil de l'Europe. La Cour européenne des droits de l'homme veille à son respect."
    },
    {
      "id": "eur-060",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle organisation internationale a son siège à Paris et agit dans les domaines de l'éducation, de la science et de la culture ?",
      "choix": [
        "L'Organisation mondiale de la santé",
        "L'UNESCO",
        "La Cour pénale internationale",
        "La Banque mondiale"
      ],
      "reponse": 1,
      "explication": "L'UNESCO est une institution spécialisée des Nations unies dont le siège est à Paris. Elle œuvre notamment pour l'éducation, la culture, le patrimoine et la science."
    },
    {
      "id": "eur-061",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle organisation rassemble des États et gouvernements autour de la langue française et de valeurs communes ?",
      "choix": [
        "L'OCDE uniquement",
        "Le Conseil de sécurité de l'ONU",
        "L'Organisation internationale de la Francophonie",
        "L'Organisation mondiale du commerce"
      ],
      "reponse": 2,
      "explication": "L'Organisation internationale de la Francophonie rassemble des membres liés à l'usage du français et à la coopération politique, éducative et culturelle. La France y joue un rôle important."
    },
    {
      "id": "eur-062",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel est le principe central de l'article 5 du traité de l'Atlantique nord ?",
      "choix": [
        "La création d'une monnaie unique militaire",
        "La suppression de toutes les frontières européennes",
        "L'élection directe du secrétaire général de l'ONU",
        "La défense collective entre alliés"
      ],
      "reponse": 3,
      "explication": "L'article 5 de l'OTAN prévoit qu'une attaque armée contre un allié est considérée comme une attaque contre tous. C'est le cœur de la défense collective de l'Alliance."
    },
    {
      "id": "eur-063",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "En quelle année la France réintègre-t-elle pleinement le commandement militaire intégré de l'OTAN ?",
      "choix": [
        "2009",
        "1957",
        "1992",
        "2020"
      ],
      "reponse": 0,
      "explication": "La France réintègre pleinement le commandement militaire intégré de l'OTAN en 2009. Elle était restée membre de l'Alliance atlantique depuis sa création."
    },
    {
      "id": "eur-064",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel est un rôle typique d'un consulat français à l'étranger ?",
      "choix": [
        "Négocier seul les traités européens",
        "Aider les ressortissants français et délivrer certains documents administratifs",
        "Voter les lois de l'Union européenne",
        "Commander les forces armées du pays d'accueil"
      ],
      "reponse": 1,
      "explication": "Un consulat assure des services administratifs et une assistance aux Français à l'étranger. L'ambassade représente plus largement l'État français auprès des autorités du pays d'accueil."
    },
    {
      "id": "eur-065",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Que désigne le G7 ?",
      "choix": [
        "Une juridiction européenne de sept juges",
        "Un programme scolaire commun à sept pays",
        "Un groupe de grandes démocraties industrialisées qui se concertent sur des enjeux internationaux",
        "Une monnaie utilisée dans sept États"
      ],
      "reponse": 2,
      "explication": "Le G7 rassemble le Canada, les États-Unis, le Japon, le Royaume-Uni, la France, l'Allemagne et l'Italie, avec la participation de l'Union européenne. Il traite de questions économiques et politiques mondiales."
    },
    {
      "id": "eur-066",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle affirmation correspond au G20 ?",
      "choix": [
        "Il est limité aux pays de la zone euro",
        "Il remplace le Conseil de sécurité de l'ONU",
        "Il est une cour de justice spécialisée dans les crimes de guerre",
        "Il réunit de grandes économies mondiales, dont l'Union européenne et l'Union africaine"
      ],
      "reponse": 3,
      "explication": "Le G20 est un forum de coopération économique internationale. L'Union européenne en est membre, et l'Union africaine a rejoint le groupe en 2023."
    },
    {
      "id": "eur-067",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Après le traité de Lisbonne, quels sont les deux principaux traités sur lesquels repose l'Union européenne ?",
      "choix": [
        "Le traité sur l'Union européenne et le traité sur le fonctionnement de l'Union européenne",
        "Le traité de Versailles et le traité de Paris",
        "La Charte de l'ONU et le traité de l'Atlantique nord",
        "La Convention de Genève et le traité de Marrakech"
      ],
      "reponse": 0,
      "explication": "Depuis Lisbonne, l'Union repose principalement sur le traité sur l'Union européenne et le traité sur le fonctionnement de l'Union européenne. Ils organisent les compétences, les institutions et les procédures de l'Union."
    },
    {
      "id": "eur-068",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Que désigne la procédure législative ordinaire de l'Union européenne ?",
      "choix": [
        "Une décision prise seulement par la Banque centrale européenne",
        "L'adoption d'un texte par le Parlement européen et le Conseil de l'Union européenne sur proposition de la Commission",
        "Un vote obligatoire dans chaque commune européenne",
        "Une procédure réservée aux pays non membres de l'Union"
      ],
      "reponse": 1,
      "explication": "La procédure législative ordinaire correspond à l'ancienne codécision. Elle associe le Parlement européen et le Conseil comme colégislateurs dans de nombreux domaines."
    },
    {
      "id": "eur-069",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Dans de nombreux votes du Conseil de l'Union européenne, que signifie la majorité qualifiée ordinaire ?",
      "choix": [
        "L'accord unanime de tous les parlements nationaux",
        "La majorité simple des députés européens seulement",
        "Au moins 55 % des États membres représentant au moins 65 % de la population de l'Union",
        "L'accord de trois pays fondateurs uniquement"
      ],
      "reponse": 2,
      "explication": "La majorité qualifiée repose généralement sur une double majorité : 55 % des États membres et 65 % de la population de l'Union. Des règles particulières existent dans certains cas."
    },
    {
      "id": "eur-070",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "À quoi sert une coopération renforcée dans l'Union européenne ?",
      "choix": [
        "À exclure automatiquement un État membre de l'Union",
        "À transformer le Conseil de l'Europe en institution de l'UE",
        "À remplacer toutes les directives par des référendums",
        "À permettre à au moins neuf États membres d'avancer ensemble dans un domaine autorisé"
      ],
      "reponse": 3,
      "explication": "La coopération renforcée permet à un groupe d'États membres d'aller plus loin lorsque tous ne souhaitent pas participer. Elle doit respecter les traités et rester ouverte aux autres États membres."
    },
    {
      "id": "eur-071",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Quel est l'objectif principal de la Banque centrale européenne dans les traités ?",
      "choix": [
        "Maintenir la stabilité des prix",
        "Financer directement les campagnes électorales nationales",
        "Élire les gouverneurs des régions européennes",
        "Rendre les arrêts de la CEDH"
      ],
      "reponse": 0,
      "explication": "La BCE a pour objectif principal de maintenir la stabilité des prix dans la zone euro. Elle conduit la politique monétaire des pays qui utilisent l'euro."
    },
    {
      "id": "eur-072",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Qu'est-ce que l'Eurogroupe ?",
      "choix": [
        "Un tribunal chargé de juger les fraudes douanières",
        "La réunion des ministres des finances des États de la zone euro",
        "Un parti politique présent dans tous les États membres",
        "Une agence de l'ONU située à Paris"
      ],
      "reponse": 1,
      "explication": "L'Eurogroupe réunit les ministres des finances des pays de la zone euro. Il coordonne des questions économiques et budgétaires propres à la monnaie unique."
    },
    {
      "id": "eur-073",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Quel est le rôle du Mécanisme européen de stabilité ?",
      "choix": [
        "Organiser les élections européennes",
        "Gérer les programmes Erasmus+",
        "Aider financièrement des États de la zone euro en difficulté sous conditions",
        "Protéger les monuments inscrits au patrimoine mondial"
      ],
      "reponse": 2,
      "explication": "Le Mécanisme européen de stabilité peut accorder une assistance financière à des États de la zone euro confrontés à de graves difficultés. Cette aide est généralement assortie de conditions."
    },
    {
      "id": "eur-074",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Quel État membre bénéficie d'une exemption durable qui l'oblige moins directement à adopter l'euro ?",
      "choix": [
        "La Slovénie",
        "La Lettonie",
        "Le Portugal",
        "Le Danemark"
      ],
      "reponse": 3,
      "explication": "Le Danemark bénéficie d'une clause d'exemption concernant l'euro. D'autres États membres hors zone euro sont en principe engagés à l'adopter lorsqu'ils remplissent les conditions."
    },
    {
      "id": "eur-075",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Quel est le statut de la Guadeloupe au regard de l'Union européenne ?",
      "choix": [
        "C'est une région ultrapériphérique faisant partie de l'Union européenne",
        "C'est un pays tiers associé à l'espace Schengen",
        "C'est un État membre indépendant de l'Union",
        "C'est un territoire relevant du Conseil de l'Europe seulement"
      ],
      "reponse": 0,
      "explication": "La Guadeloupe est une région ultrapériphérique de l'Union européenne, car elle fait partie de la République française. Le droit de l'Union s'y applique avec des adaptations possibles."
    },
    {
      "id": "eur-076",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Quel statut européen correspond le mieux à la Nouvelle-Calédonie ?",
      "choix": [
        "Une région ultrapériphérique de l'Union européenne",
        "Un pays et territoire d'outre-mer associé à l'Union européenne",
        "Un État membre de la zone euro",
        "Un siège de la Cour de justice de l'Union européenne"
      ],
      "reponse": 1,
      "explication": "La Nouvelle-Calédonie est un pays et territoire d'outre-mer associé à l'Union européenne. Elle ne fait pas partie du territoire de l'Union au même titre qu'une région ultrapériphérique."
    },
    {
      "id": "eur-077",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Quelle juridiction internationale juge notamment les crimes de génocide, crimes contre l'humanité et crimes de guerre lorsque les conditions sont réunies ?",
      "choix": [
        "La Cour des comptes européenne",
        "La Cour de cassation belge",
        "La Cour pénale internationale",
        "Le Conseil européen"
      ],
      "reponse": 2,
      "explication": "La Cour pénale internationale siège à La Haye et applique le Statut de Rome. La France est partie à ce statut."
    },
    {
      "id": "eur-078",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Quelle institution spécialisée des Nations unies coordonne la coopération internationale en matière de santé publique ?",
      "choix": [
        "L'OCDE",
        "L'OTAN",
        "La Cour de justice de l'Union européenne",
        "L'Organisation mondiale de la santé"
      ],
      "reponse": 3,
      "explication": "L'Organisation mondiale de la santé est une institution spécialisée de l'ONU. Son siège est à Genève et elle agit sur les enjeux internationaux de santé publique."
    },
    {
      "id": "eur-079",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Dans le fonctionnement du Conseil de sécurité de l'ONU, que permet un droit de veto ?",
      "choix": [
        "Empêcher l'adoption d'une résolution de fond malgré une majorité suffisante",
        "Accorder automatiquement la nationalité française",
        "Nommer les commissaires européens",
        "Créer une monnaie internationale obligatoire"
      ],
      "reponse": 0,
      "explication": "Le droit de veto permet à un membre permanent du Conseil de sécurité de bloquer une résolution substantielle. Il constitue un pouvoir diplomatique majeur dans le système des Nations unies."
    },
    {
      "id": "eur-080",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "En France, quelle autorité détient la responsabilité ultime de l'emploi de la dissuasion nucléaire ?",
      "choix": [
        "Le président de la Commission européenne",
        "Le président de la République",
        "Le secrétaire général de l'OTAN",
        "Le président de la Cour européenne des droits de l'homme"
      ],
      "reponse": 1,
      "explication": "La dissuasion nucléaire relève de la souveraineté nationale française. Le président de la République, chef des armées, détient la responsabilité ultime de son emploi."
    },
    {
      "id": "ent-001",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Lors de l'entretien d'assimilation, l'agent de préfecture évalue notamment :",
      "choix": [
        "votre fortune personnelle",
        "votre connaissance de la langue, de l'histoire, de la culture et des valeurs de la République",
        "vos convictions religieuses",
        "votre opinion politique"
      ],
      "reponse": 1,
      "explication": "L'entretien vise à vérifier l'assimilation : maîtrise suffisante du français, connaissance de l'histoire, de la culture, de la société françaises et adhésion aux principes et valeurs de la République."
    },
    {
      "id": "ent-002",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel document devrez-vous signer en fin de procédure de naturalisation ?",
      "choix": [
        "La charte des droits et devoirs du citoyen français",
        "Un contrat de travail",
        "Une déclaration de revenus",
        "Un acte notarié"
      ],
      "reponse": 0,
      "explication": "Le candidat signe la charte des droits et devoirs du citoyen français, qui rappelle les principes, valeurs et symboles de la République ainsi que les droits et obligations attachés à la nationalité."
    },
    {
      "id": "ent-003",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "À la question « Pourquoi voulez-vous devenir français ? », quelle attitude est la plus appropriée ?",
      "choix": [
        "Répondre uniquement « pour avoir un passeport plus pratique »",
        "Exprimer un attachement sincère à la France, à ses valeurs et à votre projet de vie ici",
        "Dire que l'on n'a pas d'avis",
        "Critiquer son pays d'origine"
      ],
      "reponse": 1,
      "explication": "Il est attendu une réponse personnelle et sincère : parcours en France, attaches familiales et professionnelles, adhésion aux valeurs républicaines et volonté de s'inscrire durablement dans la communauté nationale."
    },
    {
      "id": "ent-004",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quelle information devez-vous impérativement connaître sur votre commune de résidence ?",
      "choix": [
        "Le nom du maire et votre département/région",
        "Le budget exact de la commune",
        "Le nom de tous les conseillers municipaux",
        "Le nombre de commerces"
      ],
      "reponse": 0,
      "explication": "L'agent vérifie souvent votre ancrage local : nom du maire, département, région, chef-lieu, monuments et spécificités de votre ville. Ces réponses montrent votre intégration concrète."
    },
    {
      "id": "ent-005",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Concernant votre parcours professionnel, l'entretien cherche surtout à vérifier :",
      "choix": [
        "que vous gagnez beaucoup d'argent",
        "votre insertion professionnelle et la stabilité de vos ressources",
        "que vous êtes fonctionnaire",
        "que vous avez créé une entreprise"
      ],
      "reponse": 1,
      "explication": "L'administration apprécie l'insertion professionnelle et l'autonomie financière (ressources stables et suffisantes, régularité fiscale), sans exiger un niveau de revenus élevé ou un statut particulier."
    },
    {
      "id": "ent-006",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quel niveau de français est en principe exigé pour la naturalisation ?",
      "choix": [
        "Le niveau A1",
        "Le niveau A2",
        "Le niveau B1 oral",
        "Le niveau C1"
      ],
      "reponse": 2,
      "explication": "Le niveau exigé est au minimum B1 du cadre européen commun de référence, apprécié notamment à l'oral, et justifié par un diplôme ou un test linguistique agréé."
    },
    {
      "id": "ent-007",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Devenir français implique :",
      "choix": [
        "seulement des droits",
        "seulement des devoirs",
        "des droits (voter, être protégé) et des devoirs (respecter les lois, payer ses impôts, respecter les valeurs républicaines)",
        "de renoncer à toute culture d'origine"
      ],
      "reponse": 2,
      "explication": "La citoyenneté française associe des droits (vote, éligibilité, accès à l'emploi public, protection consulaire) et des devoirs (respect des lois et des valeurs, contribution fiscale, solidarité nationale)."
    },
    {
      "id": "ent-008",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Le devoir de réserve et de loyauté attendu d'un futur citoyen implique notamment :",
      "choix": [
        "l'adhésion aux principes de la République et le rejet de tout projet contraire à ses valeurs",
        "l'interdiction de toute critique politique",
        "l'obligation d'adhérer à un parti",
        "l'interdiction de manifester"
      ],
      "reponse": 0,
      "explication": "L'assimilation suppose l'adhésion aux principes essentiels de la République (laïcité, égalité femmes-hommes, respect des lois). La critique politique, la manifestation et l'engagement associatif restent des libertés garanties."
    },
    {
      "id": "ent-009",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "En cas de décision défavorable sur votre demande de naturalisation, vous pouvez :",
      "choix": [
        "ne rien faire, la décision est définitive",
        "former un recours administratif puis, le cas échéant, un recours devant le juge administratif",
        "saisir directement la Cour de cassation",
        "demander un second entretien de droit immédiat"
      ],
      "reponse": 1,
      "explication": "La décision peut être contestée par un recours gracieux ou hiérarchique (ministre chargé des naturalisations) dans les délais indiqués, puis devant le tribunal administratif compétent."
    },
    {
      "id": "ent-010",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Parmi ces éléments, lequel peut justifier un ajournement ou un rejet ?",
      "choix": [
        "Avoir des enfants scolarisés",
        "Être bénévole dans une association",
        "Une situation irrégulière au regard de l'impôt ou des condamnations pénales significatives",
        "Parler plusieurs langues étrangères"
      ],
      "reponse": 2,
      "explication": "L'administration examine la moralité, le respect des lois (condamnations, fraude, travail dissimulé) et la régularité fiscale. L'engagement associatif et la scolarisation des enfants sont au contraire des éléments favorables."
    },
    {
      "id": "ent-011",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quelle voie permet à un étranger majeur de demander la nationalité française par décision de l'État, après examen de son dossier ?",
      "choix": [
        "La naturalisation par décret",
        "Le renouvellement du titre de séjour",
        "La demande d'asile",
        "L'inscription consulaire"
      ],
      "reponse": 0,
      "explication": "La naturalisation par décret est une décision de l'administration après vérification des conditions légales. Elle n'est pas automatique, même si le dossier est complet."
    },
    {
      "id": "ent-012",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Dans le cas d'un mariage avec une personne française, quelle procédure peut permettre d'acquérir la nationalité française ?",
      "choix": [
        "Une demande de visa long séjour",
        "Une déclaration de nationalité par mariage",
        "Une simple inscription à la mairie",
        "Un changement de nom automatique"
      ],
      "reponse": 1,
      "explication": "Le conjoint d'une personne française peut, sous conditions, souscrire une déclaration de nationalité par mariage. La communauté de vie et la conservation de la nationalité française par le conjoint sont notamment vérifiées."
    },
    {
      "id": "ent-013",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Pour un enfant, quel lien familial peut transmettre la nationalité française dès la naissance ?",
      "choix": [
        "Avoir un parrain français",
        "Être scolarisé en France",
        "Avoir au moins un parent français",
        "Habiter près d'une frontière française"
      ],
      "reponse": 2,
      "explication": "La nationalité française peut se transmettre par filiation lorsqu'au moins l'un des parents est français. C'est ce qu'on appelle souvent le droit du sang."
    },
    {
      "id": "ent-014",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel est le principe général du droit du sol pour un enfant né en France de parents étrangers ?",
      "choix": [
        "Il devient français dès sa première inscription à l'école",
        "Il devient français seulement si ses parents achètent un logement",
        "Il ne peut jamais devenir français par la naissance en France",
        "Il peut acquérir la nationalité française sous conditions de résidence"
      ],
      "reponse": 3,
      "explication": "La naissance en France peut ouvrir un droit à la nationalité, mais elle est accompagnée de conditions, notamment de résidence. L'acquisition n'est donc pas toujours automatique dès la naissance."
    },
    {
      "id": "ent-015",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quelle condition d'âge concerne en principe une demande de naturalisation par décret déposée à titre personnel ?",
      "choix": [
        "Être majeur",
        "Avoir moins de 25 ans",
        "Être retraité",
        "Avoir exactement 18 ans le jour de l'entretien"
      ],
      "reponse": 0,
      "explication": "La naturalisation par décret est en principe demandée par une personne majeure. Des règles particulières existent pour les enfants mineurs rattachés à la demande de leurs parents."
    },
    {
      "id": "ent-016",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Que signifie généralement la résidence habituelle en France dans un dossier de naturalisation ?",
      "choix": [
        "Venir en France uniquement pour les vacances",
        "Avoir le centre stable de sa vie en France",
        "Posséder un compte bancaire français sans y vivre",
        "Connaître une personne française"
      ],
      "reponse": 1,
      "explication": "L'administration vérifie que la France est le lieu de vie stable du demandeur. Elle examine notamment la présence, les attaches familiales et l'activité en France."
    },
    {
      "id": "ent-017",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quelle durée de résidence régulière est généralement attendue avant une naturalisation par décret, sauf réduction ou dispense ?",
      "choix": [
        "Un an",
        "Trois ans",
        "Cinq ans",
        "Dix ans obligatoirement"
      ],
      "reponse": 2,
      "explication": "La durée de stage de droit commun est en principe de cinq ans. La loi prévoit toutefois des réductions ou dispenses dans certaines situations."
    },
    {
      "id": "ent-018",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel élément le demandeur doit-il normalement pouvoir justifier concernant son séjour en France ?",
      "choix": [
        "Un séjour uniquement touristique",
        "Une absence totale de documents administratifs",
        "Un hébergement exclusivement à l'hôtel",
        "Un séjour régulier au regard du droit des étrangers"
      ],
      "reponse": 3,
      "explication": "La régularité du séjour fait partie des conditions examinées. Le demandeur doit produire les titres ou justificatifs correspondant à sa situation."
    },
    {
      "id": "ent-019",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "À quoi servent les justificatifs de ressources dans une demande de naturalisation ?",
      "choix": [
        "À apprécier l'autonomie matérielle et l'insertion du demandeur",
        "À choisir la préfecture compétente",
        "À remplacer l'entretien individuel",
        "À obtenir automatiquement un passeport"
      ],
      "reponse": 0,
      "explication": "Les ressources permettent d'apprécier la stabilité de la situation du demandeur. L'administration les examine avec l'ensemble de son parcours d'insertion."
    },
    {
      "id": "ent-020",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Pourquoi les avis d'imposition peuvent-ils être demandés dans le dossier ?",
      "choix": [
        "Pour attribuer un numéro de sécurité sociale",
        "Pour vérifier que la situation fiscale est déclarée et suivie",
        "Pour remplacer l'acte de naissance",
        "Pour prouver la nationalité des parents"
      ],
      "reponse": 1,
      "explication": "L'administration vérifie que le demandeur respecte ses obligations fiscales. Être à jour de ses déclarations et paiements est un élément de civisme."
    },
    {
      "id": "ent-021",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel type de document peut servir à justifier la maîtrise du français dans une procédure de nationalité ?",
      "choix": [
        "Une carte de transport",
        "Une facture d'électricité",
        "Un diplôme ou une attestation de test linguistique reconnu",
        "Un certificat de vaccination"
      ],
      "reponse": 2,
      "explication": "La maîtrise du français se prouve par des diplômes ou tests reconnus, selon les règles en vigueur. Des dispenses ou aménagements peuvent exister dans certaines situations."
    },
    {
      "id": "ent-022",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel organisme ou examen est souvent utilisé pour attester le niveau de français requis ?",
      "choix": [
        "Le permis de conduire uniquement",
        "Un abonnement à une bibliothèque",
        "Une attestation de voisinage",
        "Un test reconnu comme le TCF ou le TEF"
      ],
      "reponse": 3,
      "explication": "Des tests linguistiques officiellement reconnus, comme le TCF ou le TEF adaptés à l'intégration, peuvent être produits. Ils doivent correspondre aux exigences réglementaires au moment du dépôt."
    },
    {
      "id": "ent-023",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel sujet peut être abordé pour apprécier la connaissance de la société française ?",
      "choix": [
        "Les institutions de la République",
        "La marque de son téléphone",
        "La couleur préférée de l'agent",
        "Le classement d'un jeu vidéo"
      ],
      "reponse": 0,
      "explication": "L'entretien peut porter sur les institutions, les valeurs, l'histoire et la vie civique en France. L'objectif est de vérifier une connaissance concrète de la société française."
    },
    {
      "id": "ent-024",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel principe fait partie des valeurs républicaines françaises ?",
      "choix": [
        "Le privilège héréditaire",
        "L'égalité devant la loi",
        "La censure systématique des opinions",
        "La préférence officielle pour une religion"
      ],
      "reponse": 1,
      "explication": "L'égalité devant la loi est un principe fondamental de la République. Elle s'accompagne notamment de la liberté, de la fraternité et de la laïcité."
    },
    {
      "id": "ent-025",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Que rappelle la laïcité dans le cadre des principes républicains ?",
      "choix": [
        "L'obligation d'avoir une religion",
        "La suppression de toute liberté religieuse",
        "La neutralité de l'État et la liberté de conscience",
        "Le choix d'une religion officielle par la mairie"
      ],
      "reponse": 2,
      "explication": "La laïcité garantit la liberté de conscience et la neutralité de l'État à l'égard des religions. Elle protège aussi le droit de croire ou de ne pas croire."
    },
    {
      "id": "ent-026",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quelle est une bonne pratique le jour de l'entretien en préfecture ?",
      "choix": [
        "Arriver volontairement en retard",
        "Laisser tous les justificatifs chez soi",
        "Inventer une réponse si l'on ne sait pas",
        "Se présenter à l'heure avec les documents demandés"
      ],
      "reponse": 3,
      "explication": "La ponctualité et la préparation des documents facilitent le déroulement de l'entretien. Elles montrent aussi le sérieux du candidat."
    },
    {
      "id": "ent-027",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quelle attitude est recommandée si une question n'est pas comprise pendant l'entretien ?",
      "choix": [
        "Demander poliment à l'agent de reformuler",
        "Répondre au hasard sans le dire",
        "Quitter immédiatement la salle",
        "Accuser l'agent de poser une question interdite"
      ],
      "reponse": 0,
      "explication": "Il est préférable de demander une reformulation plutôt que de répondre au hasard. L'entretien vise à permettre un échange clair et sincère."
    },
    {
      "id": "ent-028",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Pourquoi est-il important de répondre avec sincérité pendant l'entretien ?",
      "choix": [
        "Parce que les réponses fausses donnent automatiquement plus de points",
        "Parce que la cohérence et l'honnêteté du dossier sont examinées",
        "Parce que l'agent ne peut jamais vérifier les informations",
        "Parce que la sincérité remplace toutes les pièces justificatives"
      ],
      "reponse": 1,
      "explication": "Les déclarations doivent rester cohérentes avec les pièces du dossier. Mentir peut fragiliser la demande et être lourd de conséquences."
    },
    {
      "id": "ent-029",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Après une naturalisation par décret, où le décret est-il publié ?",
      "choix": [
        "Dans le journal municipal uniquement",
        "Sur le contrat de travail du demandeur",
        "Au Journal officiel de la République française",
        "Dans le carnet de santé"
      ],
      "reponse": 2,
      "explication": "Le décret de naturalisation est publié au Journal officiel. Cette publication permet d'établir officiellement l'acquisition de la nationalité française."
    },
    {
      "id": "ent-030",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel document peut-on demander après l'acquisition de la nationalité française pour prouver son identité française ?",
      "choix": [
        "Un nouveau titre de séjour étranger",
        "Une carte d'étudiant obligatoire",
        "Un permis de chasse",
        "Une carte nationale d'identité française"
      ],
      "reponse": 3,
      "explication": "Une personne devenue française peut demander une carte nationale d'identité, et éventuellement un passeport. Ces documents ne sont pas la décision de naturalisation elle-même, mais ils prouvent l'identité et la nationalité."
    },
    {
      "id": "ent-031",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel droit politique est lié à la nationalité française pour les citoyens majeurs remplissant les conditions légales ?",
      "choix": [
        "Le droit de vote aux élections nationales",
        "Le droit de ne jamais payer d'impôts",
        "Le droit automatique à un logement gratuit",
        "Le droit de supprimer les lois"
      ],
      "reponse": 0,
      "explication": "La nationalité française ouvre l'accès aux droits politiques, dont le vote, sous réserve des conditions habituelles. L'inscription sur les listes électorales est ensuite nécessaire pour voter."
    },
    {
      "id": "ent-032",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "La France oblige-t-elle en principe une personne naturalisée à renoncer à toute autre nationalité ?",
      "choix": [
        "Oui, toujours avant la cérémonie",
        "Non, la France admet en principe la double nationalité",
        "Oui, sauf si la personne est née en Europe",
        "Oui, uniquement pour les personnes mariées"
      ],
      "reponse": 1,
      "explication": "Le droit français admet en principe la pluralité de nationalités. Il faut toutefois vérifier les règles de l'autre État, qui peuvent être différentes."
    },
    {
      "id": "ent-033",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel événement officiel peut suivre l'acquisition de la nationalité française ?",
      "choix": [
        "Une audience obligatoire devant une cour d'assises",
        "Une visite médicale de nationalité",
        "Une cérémonie d'accueil dans la citoyenneté française",
        "Un examen de conduite"
      ],
      "reponse": 2,
      "explication": "Une cérémonie d'accueil peut être organisée pour remettre des documents et rappeler les droits et devoirs du citoyen. Elle marque symboliquement l'entrée dans la communauté nationale."
    },
    {
      "id": "ent-034",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel principe déontologique doit guider l'agent qui conduit l'entretien ?",
      "choix": [
        "Favoriser les personnes ayant la même opinion que lui",
        "Demander des cadeaux pour accélérer le dossier",
        "Publier le dossier du demandeur sur internet",
        "Agir avec impartialité et respecter la confidentialité"
      ],
      "reponse": 3,
      "explication": "L'agent instructeur doit respecter la neutralité, l'impartialité et la confidentialité des informations personnelles. Le traitement du dossier doit rester professionnel."
    },
    {
      "id": "ent-035",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Dans quel cas la durée de stage préalable à la naturalisation peut-elle être réduite de cinq à deux ans ?",
      "choix": [
        "Après deux années d'études supérieures réussies en France menant à un diplôme",
        "Parce qu'un ami français se porte garant",
        "Après l'achat d'une voiture française",
        "Dès la première déclaration d'impôt"
      ],
      "reponse": 0,
      "explication": "La loi prévoit notamment une réduction du stage à deux ans pour certains parcours d'études supérieures réussies en France. D'autres situations particulières peuvent aussi ouvrir droit à une réduction."
    },
    {
      "id": "ent-036",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quelle situation peut dispenser de la durée de stage de cinq ans avant une naturalisation par décret ?",
      "choix": [
        "Avoir changé d'adresse trois fois",
        "Être reconnu réfugié, sous réserve des autres conditions",
        "Avoir un abonnement téléphonique français",
        "Posséder un véhicule immatriculé en France"
      ],
      "reponse": 1,
      "explication": "Certaines catégories, comme les réfugiés, peuvent être dispensées de la durée de stage. Les autres conditions de naturalisation restent examinées."
    },
    {
      "id": "ent-037",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "À quoi sert l'enquête administrative dans une procédure de naturalisation ?",
      "choix": [
        "À choisir la photo du passeport",
        "À remplacer tous les actes d'état civil",
        "À vérifier des éléments de sécurité, de moralité et de comportement civique",
        "À donner automatiquement une réponse favorable"
      ],
      "reponse": 2,
      "explication": "L'enquête administrative permet à l'État de vérifier certains éléments du dossier et du comportement du demandeur. Elle ne préjuge pas à elle seule de la décision finale."
    },
    {
      "id": "ent-038",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quel est l'objet principal de la plateforme NATALI ?",
      "choix": [
        "Organiser les élections municipales",
        "Délivrer directement les passeports en mairie",
        "Publier les lois au Journal officiel",
        "Permettre le dépôt et le suivi en ligne de certaines demandes de nationalité"
      ],
      "reponse": 3,
      "explication": "NATALI est la plateforme numérique utilisée pour déposer ou suivre des demandes de nationalité relevant de procédures dématérialisées. Les modalités peuvent dépendre du lieu de résidence et du type de demande."
    },
    {
      "id": "ent-039",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quel est le rôle du récépissé ou accusé de réception dans une procédure déposée en ligne ou auprès de l'administration ?",
      "choix": [
        "Attester que le dossier a été reçu ou enregistré à une étape donnée",
        "Accorder immédiatement la nationalité française",
        "Remplacer définitivement l'acte de naissance",
        "Annuler l'entretien individuel"
      ],
      "reponse": 0,
      "explication": "Un récépissé ou accusé de réception confirme la réception ou l'enregistrement du dossier selon la procédure. Il ne signifie pas que la demande est acceptée."
    },
    {
      "id": "ent-040",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Pourquoi l'administration demande-t-elle souvent un acte de naissance récent et légalisé ou apostillé selon le pays ?",
      "choix": [
        "Pour calculer le montant du loyer",
        "Pour établir l'état civil du demandeur de manière fiable",
        "Pour remplacer l'attestation de français",
        "Pour inscrire automatiquement le demandeur à une association"
      ],
      "reponse": 1,
      "explication": "L'état civil doit être établi avec des documents fiables et conformes aux règles applicables. Selon le pays d'origine, une légalisation, une apostille ou une traduction peut être nécessaire."
    },
    {
      "id": "ent-041",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Que signifie une décision d'irrecevabilité dans une demande de naturalisation ?",
      "choix": [
        "La nationalité est accordée mais plus tard",
        "Le dossier est transféré à la mairie pour vote",
        "Une condition légale nécessaire n'est pas remplie ou le dossier ne peut pas être examiné favorablement en l'état",
        "Le demandeur obtient automatiquement un passeport provisoire"
      ],
      "reponse": 2,
      "explication": "L'irrecevabilité signifie qu'une condition requise fait défaut ou que la demande ne peut pas aboutir juridiquement en l'état. Elle se distingue d'une appréciation d'opportunité sur un dossier recevable."
    },
    {
      "id": "ent-042",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Que caractérise un ajournement dans une procédure de naturalisation ?",
      "choix": [
        "Une acquisition immédiate de la nationalité",
        "Une inscription automatique sur les listes électorales",
        "Une impossibilité définitive de redéposer un dossier",
        "Le report de la demande, généralement avec un délai ou des conditions à remplir"
      ],
      "reponse": 3,
      "explication": "L'ajournement ne ferme pas nécessairement toute possibilité future. Il indique que l'administration estime préférable de différer l'examen favorable du dossier."
    },
    {
      "id": "ent-043",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Dans quel délai agit généralement une personne qui veut contester une décision administrative de naturalisation ?",
      "choix": [
        "Dans les deux mois suivant la notification, sauf règle particulière indiquée",
        "Dans les dix ans sans formalité",
        "Uniquement le jour même de l'entretien",
        "Après l'obtention du passeport"
      ],
      "reponse": 0,
      "explication": "Les décisions administratives mentionnent normalement les voies et délais de contestation. Le délai de deux mois est une référence générale fréquente en droit administratif."
    },
    {
      "id": "ent-044",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quel tribunal est spécialement compétent pour de nombreux contentieux administratifs relatifs à la naturalisation par décret ?",
      "choix": [
        "Le tribunal de commerce de Paris",
        "Le tribunal administratif de Nantes",
        "Le conseil de prud'hommes local",
        "La cour d'assises du département"
      ],
      "reponse": 1,
      "explication": "Le tribunal administratif de Nantes est compétent pour de nombreux recours concernant les décisions ministérielles de naturalisation. Avant le juge, un recours administratif préalable peut être obligatoire selon la décision."
    },
    {
      "id": "ent-045",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quel effet la naturalisation d'un parent peut-elle avoir sur ses enfants mineurs ?",
      "choix": [
        "Aucun enfant ne peut jamais en bénéficier",
        "Tous les enfants majeurs du parent deviennent automatiquement français",
        "Certains enfants mineurs peuvent devenir français s'ils remplissent les conditions, notamment de résidence et de mention dans la procédure",
        "Les enfants perdent automatiquement toute autre nationalité"
      ],
      "reponse": 2,
      "explication": "L'effet collectif de la naturalisation peut bénéficier à des enfants mineurs dans les conditions prévues par la loi. La résidence avec le parent et la mention dans le décret sont des éléments importants."
    },
    {
      "id": "ent-046",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "À quoi sert la francisation du nom ou du prénom lors d'une acquisition de nationalité ?",
      "choix": [
        "À supprimer l'état civil d'origine sans trace",
        "À éviter toute cérémonie d'accueil",
        "À obtenir un titre de séjour plus long",
        "À demander une forme française ou plus facilement prononçable de son nom ou prénom"
      ],
      "reponse": 3,
      "explication": "La francisation est une possibilité encadrée, non une obligation. Elle peut concerner le prénom, le nom ou les deux, selon les règles applicables."
    },
    {
      "id": "ent-047",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quel élément est central dans une déclaration de nationalité par mariage ?",
      "choix": [
        "La communauté de vie affective et matérielle avec le conjoint français",
        "Le nombre de voyages touristiques effectués ensemble",
        "La possession d'une résidence secondaire",
        "La participation à une émission de télévision"
      ],
      "reponse": 0,
      "explication": "La communauté de vie entre les époux est une condition essentielle. L'administration vérifie également d'autres éléments, dont la durée du mariage et la nationalité française du conjoint."
    },
    {
      "id": "ent-048",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quel principe s'applique à la connaissance de l'histoire et de la culture françaises attendue à l'entretien ?",
      "choix": [
        "Il faut connaître par cœur toutes les dates de l'histoire de France",
        "Il faut montrer une compréhension générale des repères essentiels et de la vie civique",
        "Il suffit de citer un seul monument sans explication",
        "Il est interdit de parler de la vie quotidienne en France"
      ],
      "reponse": 1,
      "explication": "L'entretien n'est pas un concours d'érudition. Il vise une connaissance raisonnable des repères historiques, culturels, institutionnels et civiques."
    },
    {
      "id": "ent-049",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quel document explique notamment les droits et devoirs attachés à la citoyenneté française ?",
      "choix": [
        "Le bail d'habitation",
        "La carte Vitale",
        "La Charte des droits et devoirs du citoyen français",
        "Le règlement intérieur d'une entreprise"
      ],
      "reponse": 2,
      "explication": "La Charte présente des principes comme la liberté, l'égalité, la fraternité, la laïcité et le respect des lois. Elle sert de support à l'engagement civique du futur citoyen."
    },
    {
      "id": "ent-050",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "À quel moment la charte liée aux droits et devoirs du citoyen est-elle généralement présentée et signée dans le parcours de naturalisation ?",
      "choix": [
        "Avant même toute création de dossier, sans lecture possible",
        "Uniquement après la délivrance du passeport",
        "Lors du paiement des impôts locaux",
        "Au cours de l'instruction, notamment à l'occasion de l'entretien ou de la procédure prévue"
      ],
      "reponse": 3,
      "explication": "La signature intervient dans le cadre de la procédure de nationalité, selon les modalités prévues par l'administration. Elle matérialise l'adhésion aux principes de la République."
    },
    {
      "id": "ent-051",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Pourquoi faut-il signaler un changement d'adresse pendant l'instruction du dossier ?",
      "choix": [
        "Pour que l'administration puisse continuer à communiquer correctement avec le demandeur",
        "Pour annuler automatiquement l'entretien",
        "Pour éviter toute enquête administrative",
        "Pour modifier la loi applicable"
      ],
      "reponse": 0,
      "explication": "L'administration doit pouvoir envoyer les convocations, demandes de pièces et décisions à la bonne adresse. Ne pas signaler un changement peut nuire au suivi du dossier."
    },
    {
      "id": "ent-052",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quel comportement adopter face à une erreur constatée dans son dossier avant l'entretien ?",
      "choix": [
        "La cacher en espérant qu'elle ne sera pas vue",
        "La corriger ou la signaler avec les justificatifs utiles",
        "Détruire les documents concernés",
        "Demander à un tiers d'inventer une attestation"
      ],
      "reponse": 1,
      "explication": "Il est préférable de corriger les informations inexactes et de produire des justificatifs. La transparence renforce la cohérence du dossier."
    },
    {
      "id": "ent-053",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Que doit faire un candidat lorsqu'il ne peut pas fournir une pièce demandée dans le délai indiqué ?",
      "choix": [
        "Ignorer la demande de l'administration",
        "Envoyer une pièce fabriquée pour gagner du temps",
        "Expliquer la difficulté et fournir, si possible, une preuve des démarches entreprises",
        "Déposer un nouveau dossier sans prévenir"
      ],
      "reponse": 2,
      "explication": "L'administration peut tenir compte des explications et des démarches entreprises. Fournir un faux document expose à de graves conséquences."
    },
    {
      "id": "ent-054",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quel est le sens de l'inscription sur les listes électorales après l'acquisition de la nationalité ?",
      "choix": [
        "Elle remplace la carte nationale d'identité",
        "Elle annule la cérémonie d'accueil",
        "Elle donne automatiquement un emploi public",
        "Elle permet d'exercer concrètement le droit de vote"
      ],
      "reponse": 3,
      "explication": "Devenir citoyen français ouvre le droit de vote sous conditions, mais l'inscription sur les listes électorales permet de voter effectivement. Les modalités peuvent dépendre de la commune et de la situation personnelle."
    },
    {
      "id": "ent-055",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quel point peut relever de la moralité examinée dans une procédure de naturalisation ?",
      "choix": [
        "L'absence de certaines condamnations graves incompatibles avec la naturalisation",
        "La préférence pour un sport plutôt qu'un autre",
        "Le choix d'une couleur de vêtement à l'entretien",
        "La marque du véhicule familial"
      ],
      "reponse": 0,
      "explication": "L'administration examine notamment le casier judiciaire et le comportement civique. Certaines condamnations peuvent faire obstacle à la naturalisation."
    },
    {
      "id": "ent-056",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quel est l'intérêt de pouvoir présenter clairement ses attaches familiales en France ?",
      "choix": [
        "Remplacer toutes les conditions légales",
        "Montrer la réalité de son ancrage personnel et social en France",
        "Éviter de parler de son état civil",
        "Obtenir automatiquement une dispense de langue"
      ],
      "reponse": 1,
      "explication": "Les attaches familiales peuvent éclairer la stabilité de la vie en France. Elles sont appréciées avec les autres éléments du dossier, sans remplacer les conditions légales."
    },
    {
      "id": "ent-057",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Dans une procédure de réintégration, quel est l'objectif général ?",
      "choix": [
        "Obtenir un simple visa touristique",
        "Changer uniquement de prénom",
        "Recouvrer la nationalité française lorsqu'on l'a perdue, sous conditions",
        "Devenir automatiquement fonctionnaire"
      ],
      "reponse": 2,
      "explication": "La réintégration vise le retour dans la nationalité française d'une personne qui l'a perdue. Elle peut relever de procédures différentes selon la situation."
    },
    {
      "id": "ent-058",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Dans le cadre d'une déclaration anticipée, quel enfant né en France de parents étrangers peut être concerné ?",
      "choix": [
        "Un enfant né à l'étranger n'ayant jamais vécu en France",
        "Un enfant majeur déjà naturalisé par décret",
        "Un enfant sans aucun lien de résidence avec la France",
        "Un mineur né en France remplissant des conditions d'âge et de résidence"
      ],
      "reponse": 3,
      "explication": "La déclaration anticipée concerne des mineurs nés en France de parents étrangers, sous conditions d'âge et de résidence habituelle en France. Les règles diffèrent notamment selon que la démarche est faite à 13 ans ou à 16 ans."
    },
    {
      "id": "ent-059",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Pourquoi la naturalisation par décret est-elle qualifiée de mesure discrétionnaire ?",
      "choix": [
        "Parce que l'administration conserve un pouvoir d'appréciation même lorsque les conditions de recevabilité sont réunies",
        "Parce qu'elle est décidée par tirage au sort",
        "Parce qu'elle dépend uniquement de l'avis des voisins",
        "Parce qu'elle est accordée automatiquement après cinq ans"
      ],
      "reponse": 0,
      "explication": "La naturalisation par décret n'est pas un droit automatique. L'administration apprécie l'ensemble du dossier, notamment l'insertion, la moralité et l'intérêt de l'admission à la nationalité française."
    },
    {
      "id": "ent-060",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Quelle différence générale existe entre naturalisation par décret et acquisition par déclaration ?",
      "choix": [
        "La déclaration sert uniquement à obtenir une carte grise",
        "La déclaration repose sur une situation prévue par la loi, tandis que le décret implique une décision d'admission par l'État",
        "Le décret ne concerne que les mineurs nés en France",
        "Il n'existe aucune différence juridique"
      ],
      "reponse": 1,
      "explication": "La déclaration s'appuie sur un cas légal d'acquisition, comme le mariage ou certaines situations de naissance et résidence. La naturalisation par décret relève d'une appréciation administrative plus large."
    },
    {
      "id": "ent-061",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Dans une déclaration de nationalité par mariage, quel pouvoir particulier l'État conserve-t-il après la souscription ?",
      "choix": [
        "Il peut obliger les époux à divorcer",
        "Il peut remplacer le mariage par un PACS",
        "Il peut s'opposer à l'acquisition pour indignité ou défaut d'assimilation dans les conditions prévues par la loi",
        "Il peut supprimer automatiquement la nationalité du conjoint français"
      ],
      "reponse": 2,
      "explication": "Le gouvernement peut s'opposer à certaines acquisitions par déclaration, notamment en cas d'indignité ou de défaut d'assimilation. Ce pouvoir est encadré par la loi et les délais applicables."
    },
    {
      "id": "ent-062",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Quel principe protège les informations personnelles communiquées pendant l'instruction d'une demande de nationalité ?",
      "choix": [
        "La publicité obligatoire de tout le dossier",
        "Le droit pour chaque voisin de consulter les pièces",
        "La diffusion libre des justificatifs sur les réseaux sociaux",
        "La confidentialité et la protection des données personnelles"
      ],
      "reponse": 3,
      "explication": "Les informations du dossier sont traitées par l'administration dans un cadre professionnel et confidentiel. Elles ne doivent pas être divulguées à des personnes non autorisées."
    },
    {
      "id": "ent-063",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Pourquoi l'administration peut-elle examiner les séjours prolongés à l'étranger du demandeur ?",
      "choix": [
        "Pour vérifier que le centre des intérêts et la résidence habituelle restent bien en France",
        "Pour compter le nombre de tampons décoratifs sur le passeport",
        "Pour interdire tout voyage familial",
        "Pour remplacer l'entretien par un contrôle aux frontières"
      ],
      "reponse": 0,
      "explication": "Des absences longues ou répétées peuvent interroger sur la stabilité de la résidence en France. Elles sont appréciées au regard de l'ensemble de la situation personnelle et professionnelle."
    },
    {
      "id": "ent-064",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Quelle est l'utilité d'un recours administratif préalable obligatoire dans certaines décisions de naturalisation ?",
      "choix": [
        "Permettre à la mairie d'organiser une cérémonie avant la décision",
        "Demander au ministre de réexaminer la décision avant une éventuelle saisine du juge",
        "Remplacer le dépôt initial du dossier",
        "Obtenir immédiatement une carte d'identité"
      ],
      "reponse": 1,
      "explication": "Pour certaines décisions, le recours auprès du ministre est une étape préalable avant le tribunal administratif. Il doit respecter les délais indiqués dans la notification."
    },
    {
      "id": "ent-065",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "En matière de langue française, pourquoi faut-il vérifier la date et le type du test produit ?",
      "choix": [
        "Parce qu'un test de langue remplace toujours l'acte de naissance",
        "Parce que tous les tests du monde sont valables sans limite",
        "Parce que seuls certains tests ou diplômes reconnus et encore valables peuvent satisfaire l'exigence réglementaire",
        "Parce que le test sert uniquement à choisir la préfecture"
      ],
      "reponse": 2,
      "explication": "Les attestations linguistiques doivent correspondre aux formats acceptés et à leur durée de validité. Les exigences peuvent évoluer, d'où l'importance de vérifier les règles applicables au moment du dépôt."
    },
    {
      "id": "ent-066",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Pourquoi une personne naturalisée doit-elle parfois vérifier la loi de son autre pays de nationalité ?",
      "choix": [
        "Parce que la France interdit toujours la double nationalité",
        "Parce que le passeport français n'est valable qu'à l'étranger",
        "Parce que la mairie française décide de la nationalité étrangère",
        "Parce que l'autre État peut limiter ou retirer sa nationalité en cas d'acquisition d'une autre"
      ],
      "reponse": 3,
      "explication": "La France accepte en principe la double nationalité, mais chaque État fixe ses propres règles. Une acquisition française peut donc avoir des effets différents selon la loi étrangère."
    },
    {
      "id": "ent-067",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Quel est le lien entre adhésion aux valeurs républicaines et entretien d'assimilation ?",
      "choix": [
        "Le demandeur doit montrer qu'il comprend et accepte les principes fondamentaux de la République",
        "Le demandeur doit choisir un parti politique officiel",
        "Le demandeur doit renoncer à toute opinion personnelle",
        "Le demandeur doit apprendre un discours unique fourni par l'administration"
      ],
      "reponse": 0,
      "explication": "L'adhésion porte sur les principes communs, comme la liberté, l'égalité, la laïcité et le respect des lois. Elle n'impose pas une opinion politique unique."
    },
    {
      "id": "ent-068",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Pourquoi l'apprentissage par cœur de réponses toutes faites est-il déconseillé pour l'entretien ?",
      "choix": [
        "Parce que l'entretien est toujours écrit et anonyme",
        "Parce qu'il vaut mieux être capable d'expliquer naturellement son parcours et ses connaissances",
        "Parce que l'agent interdit tout exemple personnel",
        "Parce que seules les réponses en anglais sont acceptées"
      ],
      "reponse": 1,
      "explication": "L'entretien est un échange individualisé. Des réponses mécaniques peuvent paraître peu sincères et ne pas montrer la compréhension réelle du candidat."
    },
    {
      "id": "ent-069",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Quel risque présente la production d'un faux justificatif dans une demande de nationalité ?",
      "choix": [
        "Aucun, si le document est bien présenté",
        "Un simple report automatique de la cérémonie",
        "Une remise en cause grave du dossier, avec de possibles conséquences administratives ou pénales",
        "L'obtention plus rapide du décret"
      ],
      "reponse": 2,
      "explication": "Un faux document porte atteinte à la sincérité de la procédure. Il peut entraîner un refus et exposer son auteur à des poursuites ou sanctions."
    },
    {
      "id": "ent-070",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Pourquoi l'agent instructeur ne doit-il pas poser de questions discriminatoires ou sans lien avec la procédure ?",
      "choix": [
        "Parce que le dossier doit être instruit uniquement par la famille du demandeur",
        "Parce que seules les questions économiques sont autorisées",
        "Parce que l'entretien doit durer moins de cinq minutes",
        "Parce que l'instruction doit respecter la neutralité, l'égalité de traitement et la finalité administrative du dossier"
      ],
      "reponse": 3,
      "explication": "L'agent doit rester dans le cadre légal et déontologique de sa mission. Les questions doivent être utiles à l'instruction et respecter la dignité de la personne."
    },
    {
      "id": "sit-001",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Un employeur refuse d'embaucher une personne à cause de son origine. Que fait-il ?",
      "choix": [
        "Il exerce sa liberté de recrutement",
        "Il commet une discrimination, interdite et punie par la loi",
        "Il applique une règle du Code du travail",
        "Il respecte la laïcité"
      ],
      "reponse": 1,
      "explication": "La discrimination à l'embauche fondée sur l'origine, le sexe, la religion, le handicap, l'âge, etc. est un délit puni par le Code pénal. La victime peut saisir le Défenseur des droits ou la justice."
    },
    {
      "id": "sit-002",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Votre employeur vous propose de travailler « au noir », sans déclaration. Que faut-il faire ?",
      "choix": [
        "Accepter, c'est plus avantageux",
        "Refuser : le travail dissimulé est illégal et vous prive de droits sociaux",
        "Accepter à condition d'être payé en espèces",
        "Accepter si c'est temporaire"
      ],
      "reponse": 1,
      "explication": "Le travail dissimulé est un délit pour l'employeur comme pour le salarié qui l'accepte sciemment. Il prive de couverture maladie, de droits à la retraite et au chômage, et peut compromettre une naturalisation."
    },
    {
      "id": "sit-003",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Dans une administration, un agent public peut-il porter un signe religieux visible ?",
      "choix": [
        "Oui, c'est la liberté de religion",
        "Non, il est soumis à une stricte obligation de neutralité",
        "Oui, si c'est discret",
        "Cela dépend de son grade"
      ],
      "reponse": 1,
      "explication": "Les agents publics sont tenus à la neutralité et ne peuvent manifester leurs convictions religieuses dans l'exercice de leurs fonctions. Les usagers du service public, eux, conservent leur liberté sous réserve des règles applicables."
    },
    {
      "id": "sit-004",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Vous êtes témoin d'une personne en grand danger. Que dit la loi française ?",
      "choix": [
        "Vous n'avez aucune obligation",
        "Vous avez un devoir d'assistance : ne pas porter secours est un délit",
        "Vous devez intervenir physiquement, même au péril de votre vie",
        "Vous devez prévenir uniquement la famille"
      ],
      "reponse": 1,
      "explication": "La non-assistance à personne en danger est punie par le Code pénal. Il faut porter secours ou, au minimum, alerter les secours (15, 17, 18 ou 112), sans se mettre soi-même en danger."
    },
    {
      "id": "sit-005",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un homme frappe sa conjointe. Comment la loi française qualifie-t-elle ces faits ?",
      "choix": [
        "Un différend privé qui ne regarde pas la justice",
        "Un délit aggravé, sévèrement puni",
        "Une faute civile uniquement",
        "Une cause de divorce sans sanction pénale"
      ],
      "reponse": 1,
      "explication": "Les violences conjugales sont des infractions pénales aggravées par la qualité de conjoint. La victime peut porter plainte, obtenir une ordonnance de protection et appeler le 3919 (écoute) ou le 17 en urgence."
    },
    {
      "id": "sit-006",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Votre fille refuse d'aller au cours de natation à l'école pour un motif religieux. Que prévoit la règle ?",
      "choix": [
        "L'école doit la dispenser",
        "Les enseignements sont obligatoires : aucune dispense pour motif religieux",
        "Elle peut être dispensée si les parents écrivent au maire",
        "Le professeur doit organiser un cours séparé"
      ],
      "reponse": 1,
      "explication": "Dans l'école publique, aucune dispense d'enseignement ne peut être accordée pour un motif religieux (sport, natation, sciences, éducation à la sexualité). Seules les raisons médicales justifient une dispense."
    },
    {
      "id": "sit-007",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Vous publiez sur les réseaux sociaux des propos injurieux visant un groupe ethnique. Quelle est la conséquence ?",
      "choix": [
        "Aucune, Internet est un espace de liberté totale",
        "C'est un délit : les propos racistes en ligne sont punis par la loi",
        "Seul le site peut être sanctionné",
        "Cela n'est punissable que si le compte est public et vérifié"
      ],
      "reponse": 1,
      "explication": "Les propos racistes, injurieux, diffamatoires ou d'incitation à la haine publiés en ligne engagent la responsabilité pénale de leur auteur, au même titre que dans la presse."
    },
    {
      "id": "sit-008",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Un patient refuse d'être soigné par une femme médecin à l'hôpital public. Que prévoit le droit ?",
      "choix": [
        "L'hôpital doit satisfaire sa demande",
        "Il ne peut pas choisir son soignant selon le sexe : ce refus est contraire à l'égalité et au principe de neutralité du service public",
        "Le médecin doit s'effacer",
        "La demande est valable si elle est religieuse"
      ],
      "reponse": 1,
      "explication": "Le service public est fondé sur l'égalité et la neutralité. Un usager ne peut récuser un agent en raison de son sexe, de son origine ou de sa religion ; ces exigences sont systématiquement refusées."
    },
    {
      "id": "sit-009",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Un employeur peut-il refuser d'embaucher une femme parce qu'elle est enceinte ?",
      "choix": [
        "Oui, pour des raisons d'organisation",
        "Non, c'est une discrimination interdite par la loi",
        "Oui, si le poste est physique",
        "Oui, s'il s'agit d'un CDD"
      ],
      "reponse": 1,
      "explication": "La loi interdit toute discrimination liée à la grossesse ou à la situation de famille. La candidate n'a pas à déclarer son état de grossesse lors de l'entretien d'embauche."
    },
    {
      "id": "sit-010",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Pour un mariage en France, quelle condition est absolument requise ?",
      "choix": [
        "L'accord des familles",
        "Le consentement libre et personnel des deux époux majeurs",
        "Une cérémonie religieuse préalable",
        "La même nationalité pour les deux époux"
      ],
      "reponse": 1,
      "explication": "Le mariage suppose un consentement libre et éclairé des deux époux, majeurs. Le mariage forcé est une infraction ; l'officier d'état civil doit s'assurer de la réalité du consentement et peut saisir le procureur."
    },
    {
      "id": "sit-011",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Votre enfant veut porter en classe un signe religieux très visible dans un collège public. Que dit la loi ?",
      "choix": [
        "Les signes religieux ostensibles sont interdits dans les écoles, collèges et lycées publics.",
        "Chaque élève peut porter tout signe religieux en classe sans limite.",
        "Seul le chef de famille décide des signes autorisés à l'école.",
        "L'interdiction ne concerne que les enseignants, jamais les élèves."
      ],
      "reponse": 0,
      "explication": "La loi de 2004 interdit aux élèves des écoles, collèges et lycées publics le port de signes ou tenues manifestant ostensiblement une appartenance religieuse. Cette règle découle du principe de laïcité de l'école publique."
    },
    {
      "id": "sit-012",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Une étudiante porte un signe religieux discret à l'université et suit normalement les cours. Quelle règle s'applique ?",
      "choix": [
        "Elle doit être exclue automatiquement de tout établissement public.",
        "Les étudiants de l'université peuvent en principe exprimer leurs convictions, tant que l'ordre public et le fonctionnement des cours sont respectés.",
        "L'université impose les mêmes interdictions que l'école primaire aux étudiants.",
        "La loi oblige l'étudiante à demander l'autorisation de chaque professeur."
      ],
      "reponse": 1,
      "explication": "Dans l'enseignement supérieur, les étudiants bénéficient des libertés d'expression et de conscience. Des restrictions ne sont possibles que si elles sont justifiées, notamment par l'ordre public ou le bon fonctionnement du service."
    },
    {
      "id": "sit-013",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Dans la rue, une personne porte un vêtement exprimant une conviction religieuse mais son visage reste visible. Quelle est la bonne réponse ?",
      "choix": [
        "C'est interdit dans tout espace public.",
        "C'est autorisé uniquement avec une autorisation de la mairie.",
        "C'est en principe permis, car la liberté de conscience s'exerce aussi dans l'espace public.",
        "C'est permis seulement les jours de fête religieuse."
      ],
      "reponse": 2,
      "explication": "La laïcité n'interdit pas aux particuliers d'exprimer leurs convictions dans l'espace public. La loi interdit en revanche la dissimulation du visage dans l'espace public, sauf exceptions prévues."
    },
    {
      "id": "sit-014",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Une entreprise privée veut limiter le port de signes visibles au contact de la clientèle. Quelle condition est nécessaire ?",
      "choix": [
        "L'employeur peut l'imposer oralement à une seule personne.",
        "La règle peut viser une religion particulière.",
        "La règle est valable même si elle n'a aucun lien avec l'activité.",
        "La restriction doit être justifiée par la nature des tâches, proportionnée et prévue de manière générale, notamment dans le règlement intérieur."
      ],
      "reponse": 3,
      "explication": "Dans une entreprise privée, une clause de neutralité peut exister si elle est générale, indifférenciée, justifiée et proportionnée. Elle ne doit pas cibler une religion ou une conviction particulière."
    },
    {
      "id": "sit-015",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Des parents exigent qu'une cantine scolaire publique crée un menu conforme à une prescription religieuse. Que doit-on répondre ?",
      "choix": [
        "La commune n'a pas l'obligation légale de proposer un menu religieux, même si elle peut organiser des choix compatibles avec l'égalité des usagers.",
        "La commune doit toujours préparer un menu religieux distinct.",
        "Les enfants qui ne mangent pas le plat principal doivent être privés de repas.",
        "La cantine doit demander la religion de chaque enfant à l'inscription."
      ],
      "reponse": 0,
      "explication": "Le service public de restauration scolaire doit respecter l'égalité et la neutralité. Il n'existe pas d'obligation générale de fournir des menus religieux, mais des solutions non discriminatoires peuvent être proposées."
    },
    {
      "id": "sit-016",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Des salariés demandent une salle de prière permanente dans leur entreprise privée. Quelle est la règle ?",
      "choix": [
        "L'employeur doit créer une salle de prière pour chaque conviction.",
        "L'employeur n'y est pas obligé, mais il peut aménager une solution si elle ne perturbe pas le travail et respecte l'égalité.",
        "La demande autorise les salariés à quitter leur poste à tout moment.",
        "La loi interdit toute prière dans une entreprise privée."
      ],
      "reponse": 1,
      "explication": "La liberté religieuse existe dans l'entreprise, mais elle doit se concilier avec l'organisation du travail, la sécurité et les droits d'autrui. L'employeur n'a pas d'obligation générale de créer un lieu de culte."
    },
    {
      "id": "sit-017",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Lors d'une démarche administrative, une personne refuse de saluer un agent public parce qu'il est d'un autre sexe. Quelle est la bonne réaction ?",
      "choix": [
        "L'agent doit accepter toute différence de traitement liée au sexe.",
        "La démarche administrative doit être refusée sans examen du dossier.",
        "Le service rappelle que les agents doivent être traités avec respect et sans discrimination liée au sexe.",
        "La personne peut choisir uniquement les agents qu'elle accepte de rencontrer."
      ],
      "reponse": 2,
      "explication": "Le principe d'égalité impose le respect des femmes et des hommes dans les services publics. Une conviction personnelle ne permet pas d'imposer une discrimination à un agent public."
    },
    {
      "id": "sit-018",
      "theme": "situations",
      "difficulte": "facile",
      "question": "À l'hôpital public, un patient demande à pratiquer un rite personnel dans sa chambre sans gêner les soins. Quelle réponse est conforme au droit ?",
      "choix": [
        "Toute pratique personnelle est interdite dans un hôpital public.",
        "Le patient peut empêcher les soignants d'entrer pendant les soins urgents.",
        "Le patient peut imposer sa pratique aux autres patients de la chambre.",
        "La pratique peut être respectée si elle ne perturbe pas les soins, l'ordre du service et les droits d'autrui."
      ],
      "reponse": 3,
      "explication": "Les usagers du service public hospitalier conservent leur liberté de conscience. Cette liberté doit toutefois rester compatible avec la continuité des soins, la sécurité et le respect des autres patients."
    },
    {
      "id": "sit-019",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Une crèche privée participant à une mission d'accueil collectif prévoit une règle de neutralité pour le personnel en contact avec les enfants. Quand cette règle peut-elle être admise ?",
      "choix": [
        "Si elle est justifiée par la nature des fonctions, précise et proportionnée.",
        "Si elle ne concerne qu'une seule salariée nommément désignée.",
        "Si elle interdit aussi aux parents d'avoir des convictions personnelles.",
        "Si elle remplace le contrat de travail sans information préalable."
      ],
      "reponse": 0,
      "explication": "Une restriction à la liberté de manifester ses convictions au travail doit être justifiée et proportionnée. Elle ne peut pas être arbitraire ni viser une personne ou une conviction particulière."
    },
    {
      "id": "sit-020",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Un salarié demande une journée d'absence pour une fête religieuse. Que doit faire l'employeur privé ?",
      "choix": [
        "Il doit toujours accepter, même si l'entreprise ne peut plus fonctionner.",
        "Il examine la demande sans discrimination et peut refuser pour une raison objective liée à l'organisation du travail.",
        "Il doit demander au salarié de prouver sa religion.",
        "Il peut refuser uniquement parce qu'il désapprouve cette fête."
      ],
      "reponse": 1,
      "explication": "L'employeur doit traiter les demandes de façon non discriminatoire. Une absence peut être refusée pour des nécessités objectives de service, mais pas en raison d'une hostilité envers une conviction."
    },
    {
      "id": "sit-021",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Un salarié refuse d'obéir aux consignes de sa supérieure hiérarchique parce que c'est une femme. Quelle affirmation est correcte ?",
      "choix": [
        "Il peut choisir de ne recevoir d'ordres que d'un homme.",
        "La supérieure doit déléguer son autorité à un collègue masculin.",
        "Ce refus est contraire à l'égalité femmes-hommes et peut justifier une sanction disciplinaire.",
        "L'entreprise doit organiser des équipes séparées selon le sexe."
      ],
      "reponse": 2,
      "explication": "La loi interdit les discriminations fondées sur le sexe. Dans le travail, l'autorité hiérarchique d'une femme a la même valeur que celle d'un homme."
    },
    {
      "id": "sit-022",
      "theme": "situations",
      "difficulte": "facile",
      "question": "La famille d'une femme lui ordonne d'arrêter son emploi contre sa volonté. Quelle est la position du droit français ?",
      "choix": [
        "La famille peut décider si elle estime protéger son honneur.",
        "L'époux peut interdire légalement à sa femme de travailler.",
        "L'employeur doit licencier la salariée pour éviter un conflit familial.",
        "Une personne majeure choisit librement de travailler ; les pressions ou violences pour l'en empêcher peuvent être sanctionnées."
      ],
      "reponse": 3,
      "explication": "L'égalité femmes-hommes et la liberté individuelle protègent le choix de travailler. Les pressions, menaces ou violences au sein de la famille ne sont pas admises par la loi."
    },
    {
      "id": "sit-023",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Une jeune adulte dit qu'elle accepte un mariage uniquement parce que sa famille la menace. Que faut-il retenir ?",
      "choix": [
        "Le mariage exige un consentement libre ; les menaces peuvent conduire à refuser ou annuler le mariage et à demander protection.",
        "Le mariage reste valable si la famille a déjà organisé la cérémonie.",
        "La peur ne compte pas si les futurs époux ont le même âge.",
        "Le maire doit célébrer le mariage pour éviter un conflit familial."
      ],
      "reponse": 0,
      "explication": "Le mariage civil repose sur le consentement libre des deux époux. Un mariage forcé est contraire à la loi et des mesures de protection peuvent être demandées."
    },
    {
      "id": "sit-024",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Une personne déjà mariée veut se marier une seconde fois en France sans divorce préalable. Que dit la loi ?",
      "choix": [
        "C'est possible si tous les adultes sont d'accord.",
        "La bigamie est interdite : il faut être libre de tout mariage précédent pour se remarier.",
        "C'est possible si le second mariage est seulement religieux.",
        "La mairie peut fermer les yeux si la famille approuve."
      ],
      "reponse": 1,
      "explication": "Le mariage civil français est monogamique. Contracter un nouveau mariage civil alors qu'un précédent mariage subsiste est interdit et peut entraîner des sanctions."
    },
    {
      "id": "sit-025",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Un époux déclare seul qu'il répudie son épouse et pense que le mariage est terminé en France. Quelle réponse est juste ?",
      "choix": [
        "Sa déclaration suffit si elle est faite devant des proches.",
        "Le mariage prend fin automatiquement après trois déclarations.",
        "Seule une procédure de divorce reconnue par le droit français peut mettre fin au mariage civil.",
        "L'épouse perd immédiatement ses droits familiaux."
      ],
      "reponse": 2,
      "explication": "En France, le divorce relève d'une procédure juridique respectant les droits des deux époux. Une répudiation unilatérale ne remplace pas le divorce civil français."
    },
    {
      "id": "sit-026",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Une famille demande à un médecin un certificat de virginité avant un mariage. Que prévoit la loi ?",
      "choix": [
        "Le médecin doit le délivrer si la famille paie la consultation.",
        "Le certificat est obligatoire pour se marier civilement.",
        "Le médecin peut le faire si la future épouse est majeure.",
        "La délivrance d'un certificat de virginité est interdite et sanctionnée."
      ],
      "reponse": 3,
      "explication": "La loi française interdit les certificats de virginité. Le mariage civil ne dépend pas de la virginité et le respect du corps et de la dignité de la personne est protégé."
    },
    {
      "id": "sit-027",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Une voisine vous confie subir des violences dans son couple et cherche de l'aide. Quel numéro peut l'informer et l'orienter ?",
      "choix": [
        "Le 3919, et en cas de danger immédiat il faut appeler le 17 ou le 112.",
        "Le 3919 remplace toujours la police en urgence.",
        "Aucun service ne peut intervenir dans la vie conjugale.",
        "Il faut attendre une décision familiale avant d'appeler."
      ],
      "reponse": 0,
      "explication": "Le 3919 informe et oriente les femmes victimes de violences. En cas de danger immédiat, les services d'urgence comme le 17 ou le 112 doivent être contactés."
    },
    {
      "id": "sit-028",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Vous apprenez qu'une adolescente risque de subir une excision lors d'un voyage. Quelle réaction est conforme au droit ?",
      "choix": [
        "Ne rien dire car cela relève de la tradition familiale.",
        "Alerter les services de protection ou les autorités, car l'excision est une infraction grave.",
        "Attendre son retour pour vérifier si l'acte a eu lieu.",
        "Demander seulement une promesse orale à la famille."
      ],
      "reponse": 1,
      "explication": "Les mutilations sexuelles féminines sont interdites et pénalement sanctionnées. Lorsqu'un mineur est en danger, les autorités ou les services de protection doivent être alertés."
    },
    {
      "id": "sit-029",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Une mineure souhaite obtenir une contraception et craint que ses parents soient informés. Quelle réponse est correcte ?",
      "choix": [
        "Elle doit obligatoirement obtenir l'accord écrit de ses parents.",
        "La contraception est interdite aux mineures non mariées.",
        "Elle peut accéder à une contraception dans des conditions de confidentialité prévues par la loi.",
        "Seul le futur époux peut autoriser la contraception."
      ],
      "reponse": 2,
      "explication": "Le droit français permet l'accès des mineures à la contraception avec une protection de la confidentialité. Cette règle participe à la liberté et à la santé des personnes."
    },
    {
      "id": "sit-030",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Une femme majeure envisage une IVG dans les délais légaux et son conjoint s'y oppose. Que dit le droit français ?",
      "choix": [
        "Le conjoint doit signer une autorisation.",
        "La famille peut interdire l'IVG pour des raisons morales.",
        "L'IVG est toujours interdite en France.",
        "La décision appartient à la femme concernée, dans le cadre des conditions et délais prévus par la loi."
      ],
      "reponse": 3,
      "explication": "L'interruption volontaire de grossesse est légale en France dans les conditions fixées par la loi. Le consentement du conjoint ou de la famille n'est pas requis."
    },
    {
      "id": "sit-031",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Dans la rue, une personne suit quelqu'un en faisant des remarques sexuelles humiliantes. Comment la loi qualifie-t-elle ce comportement ?",
      "choix": [
        "Il peut constituer un outrage sexiste ou sexuel sanctionné par la loi.",
        "C'est toujours une simple plaisanterie sans conséquence.",
        "C'est autorisé si la personne ne touche pas la victime.",
        "La victime doit prouver qu'elle était accompagnée."
      ],
      "reponse": 0,
      "explication": "La loi sanctionne les comportements à connotation sexuelle ou sexiste qui portent atteinte à la dignité ou créent une situation intimidante. L'absence de contact physique n'empêche pas la sanction."
    },
    {
      "id": "sit-032",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Deux collègues, une femme et un homme, occupent le même poste avec la même qualification. L'employeur paie systématiquement moins la femme. Quelle règle s'applique ?",
      "choix": [
        "L'employeur peut fixer un salaire inférieur parce qu'elle est une femme.",
        "Le principe est l'égalité de rémunération pour un même travail ou un travail de valeur égale.",
        "La différence est légale si elle reste secrète.",
        "La salariée doit accepter si elle a signé le contrat."
      ],
      "reponse": 1,
      "explication": "Le Code du travail impose l'égalité de rémunération entre les femmes et les hommes pour un même travail ou un travail de valeur égale. Une différence doit reposer sur des critères objectifs étrangers au sexe."
    },
    {
      "id": "sit-033",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Une personne veut circuler dans un magasin avec le visage entièrement dissimulé sans motif légal. Que prévoit la loi ?",
      "choix": [
        "C'est toujours autorisé dans les commerces privés ouverts au public.",
        "Seule la police municipale peut l'interdire par arrêté local.",
        "La dissimulation du visage dans l'espace public est interdite sauf exceptions prévues par la loi.",
        "L'interdiction ne s'applique qu'aux bâtiments administratifs."
      ],
      "reponse": 2,
      "explication": "La loi interdit de dissimuler son visage dans l'espace public, notamment dans les lieux ouverts au public, sauf exceptions comme la santé, la sécurité ou certaines pratiques encadrées. Cette règle vise l'ordre public et le vivre ensemble."
    },
    {
      "id": "sit-034",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Une personne menacée par son ex-conjoint veut être protégée rapidement avant le procès pénal. Quelle mesure peut être demandée ?",
      "choix": [
        "Aucune mesure n'est possible avant une condamnation définitive.",
        "Seule la famille peut décider d'éloigner l'auteur des menaces.",
        "La victime doit quitter obligatoirement son logement.",
        "Une ordonnance de protection peut être demandée au juge aux affaires familiales."
      ],
      "reponse": 3,
      "explication": "L'ordonnance de protection permet au juge de prendre rapidement des mesures pour protéger une personne victime de violences ou menaces. Elle peut notamment organiser l'éloignement de l'auteur et la protection du logement."
    },
    {
      "id": "sit-035",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Des parents veulent marier civilement leur enfant de 16 ans. Quelle est la règle générale en France ?",
      "choix": [
        "Le mariage civil est en principe réservé aux majeurs ; une dispense exceptionnelle ne suffit pas sans garanties légales strictes.",
        "Les parents peuvent décider seuls du mariage d'un mineur.",
        "Le mariage d'un mineur est libre si le futur conjoint est majeur.",
        "Un mariage religieux suffit à rendre le mariage civil valable."
      ],
      "reponse": 0,
      "explication": "En France, l'âge légal du mariage est 18 ans. Des dispenses exceptionnelles existent mais le consentement libre et le contrôle des autorités restent indispensables."
    },
    {
      "id": "sit-036",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un parent veut garder son enfant de 8 ans à la maison sans assurer son instruction. Que rappelle la loi ?",
      "choix": [
        "L'instruction est facultative avant 12 ans.",
        "L'instruction est obligatoire pour les enfants de 3 à 16 ans, selon les modalités prévues par la loi.",
        "L'enfant décide seul s'il veut apprendre à lire.",
        "L'obligation ne concerne que les enfants inscrits dans une école publique."
      ],
      "reponse": 1,
      "explication": "L'instruction obligatoire concerne tous les enfants de 3 à 16 ans résidant en France. Les parents doivent respecter les règles applicables à la scolarisation ou à l'instruction en famille."
    },
    {
      "id": "sit-037",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un collégien manque souvent les cours sans motif valable et ses parents minimisent la situation. Que dit le droit ?",
      "choix": [
        "L'établissement doit ignorer les absences si les parents ne se plaignent pas.",
        "L'enfant peut arrêter les cours dès qu'il se sent fatigué.",
        "Les parents doivent veiller à l'assiduité scolaire ; l'absentéisme peut entraîner des démarches et sanctions prévues par la loi.",
        "L'assiduité ne concerne que les examens de fin d'année."
      ],
      "reponse": 2,
      "explication": "L'assiduité scolaire fait partie de l'obligation d'instruction. Les absences injustifiées peuvent conduire à un dialogue avec l'établissement, à un signalement et à des sanctions dans les cas prévus."
    },
    {
      "id": "sit-038",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un adulte estime qu'une gifle éducative est un droit parental normal. Quelle est la règle actuelle ?",
      "choix": [
        "Les coups sont permis s'ils ne laissent pas de trace.",
        "La loi autorise les violences si l'enfant a désobéi.",
        "Seuls les enseignants sont concernés par l'interdiction.",
        "L'autorité parentale s'exerce sans violences physiques ou psychologiques."
      ],
      "reponse": 3,
      "explication": "Le Code civil précise que l'autorité parentale s'exerce sans violences physiques ou psychologiques. Les violences sur mineur peuvent aussi constituer des infractions pénales."
    },
    {
      "id": "sit-039",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Vous pensez qu'un enfant est maltraité ou en danger chez lui. Quel numéro national pouvez-vous appeler ?",
      "choix": [
        "Le 119, service national d'accueil téléphonique pour l'enfance en danger.",
        "Le numéro du syndic de copropriété.",
        "Le 3919, qui remplace tous les services de protection de l'enfance.",
        "Aucun numéro ne peut être appelé sans preuve judiciaire."
      ],
      "reponse": 0,
      "explication": "Le 119 permet de signaler une situation d'enfant en danger ou en risque de danger. Il n'est pas nécessaire d'attendre une certitude judiciaire pour demander conseil ou alerter."
    },
    {
      "id": "sit-040",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Une adolescente est fortement poussée à accepter un mariage arrangé qu'elle refuse. Quelle attitude respecte la loi française ?",
      "choix": [
        "La volonté de la famille l'emporte toujours sur celle du mineur.",
        "Il faut respecter son refus et alerter si des pressions ou menaces la mettent en danger.",
        "Elle doit accepter si les deux familles se sont entendues.",
        "Le mariage devient valable dès qu'une fête familiale a eu lieu."
      ],
      "reponse": 1,
      "explication": "Le mariage suppose un consentement libre. Les pressions exercées sur un mineur peuvent relever de la protection de l'enfance et justifier une alerte aux autorités compétentes."
    },
    {
      "id": "sit-041",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Après une séparation, un parent décide seul de ne plus remettre l'enfant à l'autre parent malgré une décision du juge. Que faut-il faire ?",
      "choix": [
        "Le parent peut ignorer la décision s'il est en colère.",
        "Les grands-parents décident à la place du juge.",
        "Il faut respecter la décision de justice ou demander sa modification au juge compétent.",
        "L'enfant perd automatiquement tout lien avec l'autre parent."
      ],
      "reponse": 2,
      "explication": "Les décisions relatives à l'autorité parentale et à la résidence de l'enfant doivent être respectées. En cas de difficulté ou de danger, il faut saisir le juge plutôt que se faire justice soi-même."
    },
    {
      "id": "sit-042",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un parent laisse régulièrement un très jeune enfant seul la nuit pour sortir. Quelle appréciation juridique est la plus juste ?",
      "choix": [
        "C'est un choix éducatif toujours privé.",
        "C'est légal si l'enfant dort au moment du départ.",
        "C'est autorisé si un voisin a les clés sans être prévenu.",
        "Cela peut constituer une mise en danger ou une carence justifiant l'intervention des services de protection."
      ],
      "reponse": 3,
      "explication": "Les parents doivent assurer la sécurité et la santé de l'enfant. Laisser un jeune enfant seul dans des conditions dangereuses peut entraîner une intervention administrative ou judiciaire."
    },
    {
      "id": "sit-043",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un propriétaire refuse de louer un appartement à une personne parce qu'elle se déplace en fauteuil roulant. Quelle règle s'applique ?",
      "choix": [
        "Le refus fondé sur le handicap est une discrimination interdite.",
        "Le propriétaire choisit librement selon l'apparence physique des candidats.",
        "Le refus est légal si l'immeuble est ancien.",
        "La personne doit cacher son handicap pour visiter."
      ],
      "reponse": 0,
      "explication": "Le handicap est un critère protégé par la loi contre les discriminations, notamment pour l'accès au logement. Des recours existent, y compris auprès du Défenseur des droits ou de la justice."
    },
    {
      "id": "sit-044",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un bar ouvert au public refuse l'entrée à deux personnes parce qu'elles forment un couple de même sexe. Que dit la loi ?",
      "choix": [
        "Un commerce peut refuser selon l'orientation sexuelle de ses clients.",
        "C'est une discrimination interdite dans l'accès à un bien ou service.",
        "Le refus est légal si aucun panneau ne l'annonce.",
        "Les clients doivent demander une autorisation préalable à la mairie."
      ],
      "reponse": 1,
      "explication": "L'orientation sexuelle fait partie des critères protégés par la loi. Refuser un service ouvert au public pour ce motif est discriminatoire et peut être sanctionné."
    },
    {
      "id": "sit-045",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Une annonce d'emploi indique « moins de 35 ans uniquement » sans justification liée au poste. Quelle analyse est correcte ?",
      "choix": [
        "L'âge peut toujours être utilisé pour trier les candidats.",
        "La limite est valable si l'annonce est claire.",
        "Une condition d'âge non justifiée peut constituer une discrimination.",
        "La discrimination n'existe qu'après l'embauche."
      ],
      "reponse": 2,
      "explication": "L'âge est un critère protégé. Une différence de traitement n'est possible que si elle est objectivement et raisonnablement justifiée par un but légitime et proportionné."
    },
    {
      "id": "sit-046",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un magasin refuse de servir une cliente uniquement parce qu'elle porte un signe religieux visible, sans problème de sécurité ni trouble. Quelle est la bonne réponse ?",
      "choix": [
        "Le magasin peut exclure toute conviction visible sans motif.",
        "Le client perd ses droits en entrant dans un commerce.",
        "Le refus est légal si d'autres clients sont gênés subjectivement.",
        "Un refus de service fondé sur la religion peut constituer une discrimination interdite."
      ],
      "reponse": 3,
      "explication": "La religion fait partie des critères protégés contre les discriminations. Un commerce ouvert au public ne peut pas refuser un service pour ce motif, sauf exigence légitime et proportionnée prévue par la loi."
    },
    {
      "id": "sit-047",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Une personne pense avoir été discriminée pour louer un logement et cherche une autorité indépendante à saisir gratuitement. Vers qui peut-elle se tourner ?",
      "choix": [
        "Le Défenseur des droits.",
        "Uniquement le maire de sa commune.",
        "Le conseil syndical de l'immeuble.",
        "Un voisin choisi par le propriétaire."
      ],
      "reponse": 0,
      "explication": "Le Défenseur des droits peut être saisi gratuitement en matière de discriminations. Cette saisine n'empêche pas d'autres démarches, comme un dépôt de plainte."
    },
    {
      "id": "sit-048",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Une candidate pense qu'on lui a refusé un service en raison de sa religion. Quels éléments peuvent l'aider à faire valoir ses droits ?",
      "choix": [
        "Elle ne peut rien utiliser tant qu'une caméra officielle n'a pas filmé la scène.",
        "Des messages, témoignages, annonces ou éléments de comparaison peuvent constituer des indices utiles.",
        "Elle doit obligatoirement provoquer une dispute pour obtenir une preuve.",
        "Les discriminations ne peuvent jamais être prouvées par des témoins."
      ],
      "reponse": 1,
      "explication": "En matière de discrimination, des éléments laissant supposer l'existence d'une discrimination peuvent être présentés. Les écrits, témoignages ou comparaisons peuvent aider les autorités ou le juge à apprécier la situation."
    },
    {
      "id": "sit-049",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un restaurant refuse l'entrée à une personne aveugle accompagnée de son chien guide. Quelle règle est applicable ?",
      "choix": [
        "Le restaurateur décide librement d'accepter ou non les chiens guides.",
        "Le chien guide est interdit dans tout lieu où l'on sert de la nourriture.",
        "Le refus peut être illégal, car les chiens guides bénéficient d'un droit d'accès dans de nombreux lieux ouverts au public.",
        "La personne doit payer un supplément obligatoire."
      ],
      "reponse": 2,
      "explication": "Les chiens guides ou d'assistance bénéficient d'un accès aux transports, lieux ouverts au public et lieux permettant une activité professionnelle, formatrice ou éducative, sauf exceptions légales. Refuser cet accès peut être discriminatoire."
    },
    {
      "id": "sit-050",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Une personne victime de menaces discriminatoires veut agir pénalement. Quelle démarche est possible ?",
      "choix": [
        "Elle doit se limiter à en parler à ses proches.",
        "Elle doit attendre que l'auteur reconnaisse les faits par écrit.",
        "Elle ne peut agir que si l'auteur est son employeur.",
        "Elle peut déposer plainte auprès de la police, de la gendarmerie ou écrire au procureur de la République."
      ],
      "reponse": 3,
      "explication": "Les victimes d'infractions peuvent déposer plainte auprès des forces de l'ordre ou saisir le procureur. Le caractère discriminatoire peut aggraver certaines infractions."
    },
    {
      "id": "sit-051",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Pour obtenir un emploi, une personne modifie un diplôme scanné afin de faire croire qu'elle l'a obtenu. Que dit la loi ?",
      "choix": [
        "Fabriquer ou utiliser un faux document peut constituer une infraction.",
        "C'est permis si les compétences sont réelles.",
        "C'est légal tant que l'employeur ne vérifie pas.",
        "Seuls les faux passeports sont sanctionnés."
      ],
      "reponse": 0,
      "explication": "Le faux et l'usage de faux sont punis par le Code pénal. La confiance dans les documents officiels et les démarches administratives fait partie du respect de la loi."
    },
    {
      "id": "sit-052",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un usager propose de l'argent à un agent public pour obtenir plus vite une autorisation. Quelle qualification est possible ?",
      "choix": [
        "C'est une simple récompense si le dossier est complet.",
        "Cela peut constituer une tentative de corruption, même si l'agent refuse.",
        "C'est autorisé si le paiement est discret.",
        "C'est légal lorsque le service public est débordé."
      ],
      "reponse": 1,
      "explication": "Proposer un avantage indu à un agent public pour qu'il accomplisse ou facilite un acte relève de la corruption. La probité des agents publics protège l'égalité des usagers."
    },
    {
      "id": "sit-053",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un vendeur de rue propose une montre de marque manifestement contrefaite à très bas prix. Quelle est la bonne attitude ?",
      "choix": [
        "L'acheter est légal si c'est pour un usage personnel.",
        "Il suffit de ne pas la revendre ensuite.",
        "Il faut éviter l'achat, car la détention ou l'achat de contrefaçons peut être sanctionné.",
        "La contrefaçon n'est interdite que pour les médicaments."
      ],
      "reponse": 2,
      "explication": "La contrefaçon porte atteinte aux droits de propriété intellectuelle et peut être sanctionnée. Acheter des produits contrefaits alimente une activité illégale."
    },
    {
      "id": "sit-054",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Vous organisez une fête très bruyante dans un appartement à deux heures du matin et les voisins se plaignent. Quelle règle s'applique ?",
      "choix": [
        "La nuit, chacun fait ce qu'il veut chez lui.",
        "Le bruit est autorisé si la fête est exceptionnelle.",
        "Les voisins doivent déménager s'ils sont sensibles au bruit.",
        "Le tapage nocturne peut être sanctionné, même à domicile."
      ],
      "reponse": 3,
      "explication": "Le bruit troublant la tranquillité d'autrui la nuit peut constituer un tapage nocturne. Le respect du voisinage fait partie de la vie collective."
    },
    {
      "id": "sit-055",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Une personne dépose un canapé usagé sur un trottoir au lieu d'utiliser la collecte prévue. Que dit la loi ?",
      "choix": [
        "Le dépôt sauvage de déchets est interdit et peut être sanctionné.",
        "C'est permis si l'objet est trop lourd.",
        "C'est autorisé après minuit.",
        "La commune doit ramasser sans pouvoir verbaliser."
      ],
      "reponse": 0,
      "explication": "Abandonner des déchets sur la voie publique constitue un dépôt sauvage. Les communes organisent des collectes ou déchèteries et des sanctions peuvent être prononcées."
    },
    {
      "id": "sit-056",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un conducteur franchit un feu rouge parce qu'il n'y a personne sur la route. Quelle est la règle ?",
      "choix": [
        "Le Code de la route ne s'applique que lorsqu'il y a du trafic.",
        "Les feux et règles de circulation doivent être respectés même si la route paraît vide.",
        "Le conducteur peut décider selon son expérience.",
        "Le feu rouge n'est obligatoire que pour les jeunes conducteurs."
      ],
      "reponse": 1,
      "explication": "Le Code de la route s'applique à tous les usagers. Respecter les signalisations protège la sécurité collective, même lorsqu'un danger n'est pas immédiatement visible."
    },
    {
      "id": "sit-057",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Une personne porte un couteau sur elle « pour se protéger » lors de ses déplacements quotidiens. Que faut-il savoir ?",
      "choix": [
        "C'est toujours autorisé si l'arme reste cachée.",
        "La peur personnelle suffit toujours comme justification légale.",
        "Le port d'une arme est réglementé et peut être interdit sans motif légitime.",
        "Seuls les mineurs sont concernés par l'interdiction."
      ],
      "reponse": 2,
      "explication": "Le port et le transport d'armes sont encadrés par la loi. Se protéger soi-même ne justifie pas automatiquement le port d'une arme dans l'espace public."
    },
    {
      "id": "sit-058",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un ami vous propose de consommer du cannabis pour vous détendre. Quelle réponse correspond au droit français ?",
      "choix": [
        "L'usage récréatif est libre entre adultes consentants.",
        "L'usage est légal si la quantité est faible.",
        "La consommation est autorisée uniquement à domicile.",
        "L'usage de stupéfiants est interdit et peut être sanctionné."
      ],
      "reponse": 3,
      "explication": "L'usage de stupéfiants, dont le cannabis hors cadre autorisé, est interdit par la loi française. Cette interdiction relève de la protection de la santé publique et de l'ordre public."
    },
    {
      "id": "sit-059",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Un journal publie une caricature qui choque certaines croyances mais ne vise pas des personnes par des appels à la haine. Quel principe s'applique ?",
      "choix": [
        "La liberté d'expression protège aussi la satire, dans les limites fixées par la loi.",
        "Toute caricature religieuse est interdite en France.",
        "Une croyance offensée suffit toujours à faire condamner le journal.",
        "La liberté d'expression disparaît dès qu'un sujet est sensible."
      ],
      "reponse": 0,
      "explication": "La liberté d'expression inclut la critique, la satire et la caricature. Elle connaît toutefois des limites, notamment l'injure, la diffamation et l'incitation à la haine ou à la violence."
    },
    {
      "id": "sit-060",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Lors d'un débat, une personne critique vivement une religion sans attaquer les croyants comme personnes. Que dit le droit français ?",
      "choix": [
        "Le blasphème est un délit général en France.",
        "La critique des religions est permise ; ce sont notamment les attaques illégales contre les personnes qui peuvent être sanctionnées.",
        "Toute critique d'une religion doit être autorisée par un juge.",
        "La laïcité interdit de parler des religions en public."
      ],
      "reponse": 1,
      "explication": "Il n'existe pas en droit français de délit général de blasphème. La liberté d'expression protège la critique des idées, mais pas les injures, diffamations ou appels à la haine visant des personnes."
    },
    {
      "id": "sit-061",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Sur un réseau social, quelqu'un accuse nominativement son voisin d'être un voleur sans preuve. Quel risque juridique existe ?",
      "choix": [
        "Aucun risque si le message reçoit peu de vues.",
        "Ce n'est sanctionné que si le voisin répond.",
        "Cela peut constituer une diffamation si l'allégation porte atteinte à l'honneur ou à la considération.",
        "Les réseaux sociaux échappent au droit de la presse."
      ],
      "reponse": 2,
      "explication": "La diffamation consiste à imputer un fait précis portant atteinte à l'honneur ou à la considération d'une personne. Les propos publiés en ligne peuvent engager la responsabilité de leur auteur."
    },
    {
      "id": "sit-062",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Une personne publie un message félicitant les auteurs d'un attentat terroriste. Quelle est la règle ?",
      "choix": [
        "C'est protégé par la liberté d'opinion sans limite.",
        "C'est légal si le compte est privé.",
        "C'est interdit seulement si un attentat a lieu en France.",
        "L'apologie du terrorisme est une infraction pénale."
      ],
      "reponse": 3,
      "explication": "La liberté d'expression ne protège pas l'apologie du terrorisme. La loi pénale sanctionne les propos qui présentent favorablement des actes terroristes."
    },
    {
      "id": "sit-063",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Lors d'une réunion publique, une personne nie l'existence de crimes contre l'humanité reconnus par la justice internationale, comme la Shoah. Que prévoit la loi ?",
      "choix": [
        "La contestation de certains crimes contre l'humanité reconnus peut être pénalement sanctionnée.",
        "Toute opinion historique est toujours libre, même dans ce cas.",
        "La sanction n'existe que si les propos sont tenus à la télévision.",
        "La loi ne protège que les personnes encore vivantes."
      ],
      "reponse": 0,
      "explication": "La loi réprime la contestation de l'existence de certains crimes contre l'humanité reconnus. Cette limite vise à lutter contre le négationnisme et la haine."
    },
    {
      "id": "sit-064",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Plusieurs élèves créent un groupe en ligne pour humilier chaque jour un camarade. Quelle qualification est possible ?",
      "choix": [
        "C'est une plaisanterie privée sans conséquence juridique.",
        "Cela peut constituer du cyberharcèlement, sanctionné par la loi.",
        "La victime doit quitter les réseaux sociaux pour que la loi s'applique.",
        "Seul l'administrateur du réseau social peut être responsable."
      ],
      "reponse": 1,
      "explication": "Le harcèlement moral peut être commis au moyen d'outils numériques. La répétition de propos ou comportements dégradants en ligne peut entraîner des sanctions pénales."
    },
    {
      "id": "sit-065",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Vous êtes tiré au sort comme juré d'assises et vous recevez une convocation. Quelle est l'attitude civique attendue ?",
      "choix": [
        "Ignorer la convocation si l'affaire ne vous intéresse pas.",
        "Demander à un proche d'y aller à votre place.",
        "Se présenter, sauf motif légitime reconnu, car participer au jury est un devoir civique.",
        "Refuser automatiquement si l'accusé vous est inconnu."
      ],
      "reponse": 2,
      "explication": "Les citoyens tirés au sort peuvent être appelés à participer à la justice pénale comme jurés. L'absence sans motif légitime peut être sanctionnée."
    },
    {
      "id": "sit-066",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Un témoin appelé devant un tribunal ment volontairement pour protéger un ami. Que risque-t-il ?",
      "choix": [
        "Rien, car l'amitié justifie le mensonge.",
        "Rien si le juge ne découvre pas immédiatement la vérité.",
        "Seulement une remarque morale du tribunal.",
        "Un faux témoignage peut être pénalement sanctionné."
      ],
      "reponse": 3,
      "explication": "Le témoignage devant la justice doit être sincère. Le faux témoignage porte atteinte au fonctionnement de la justice et constitue une infraction."
    },
    {
      "id": "sit-067",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Des habitants créent une association pour nettoyer leur quartier et dialoguer avec la mairie. Quel principe républicain illustre cette démarche ?",
      "choix": [
        "La participation des citoyens à la vie collective, dans le respect de la loi.",
        "L'obligation de remplacer les services publics par des bénévoles.",
        "Le droit de décider seuls des règles de police municipale.",
        "La possibilité d'exclure les habitants qui pensent différemment."
      ],
      "reponse": 0,
      "explication": "La liberté d'association permet aux citoyens de s'engager dans la vie collective. Cet engagement doit respecter la loi, l'égalité et les institutions démocratiques."
    },
    {
      "id": "sit-068",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Au guichet d'une mairie, un agent conseille aux usagers de voter pour son parti préféré pendant le service. Quelle règle rappelle la séparation entre convictions privées et fonction publique ?",
      "choix": [
        "L'agent peut utiliser son poste pour faire campagne s'il reste poli.",
        "Pendant le service, l'agent public doit respecter la neutralité ; ses opinions politiques relèvent de sa vie privée hors service, avec les limites légales applicables.",
        "La mairie doit afficher les préférences politiques de chaque agent.",
        "Les usagers doivent suivre le conseil de l'agent public."
      ],
      "reponse": 1,
      "explication": "Les agents publics sont soumis à une obligation de neutralité dans l'exercice de leurs fonctions. Ils conservent des libertés personnelles, mais ne doivent pas utiliser le service public pour promouvoir leurs convictions."
    },
    {
      "id": "sit-069",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Des parents refusent pour leur enfant un soin indispensable qui met sa vie en danger. Quelle est la règle ?",
      "choix": [
        "Le refus des parents s'impose toujours aux médecins.",
        "L'enfant doit attendre d'être majeur pour être soigné.",
        "La protection de la santé et de la vie de l'enfant peut justifier l'intervention médicale et judiciaire malgré le refus parental.",
        "Les médecins doivent seulement faire signer une décharge et partir."
      ],
      "reponse": 2,
      "explication": "L'autorité parentale s'exerce dans l'intérêt de l'enfant. Lorsque la santé ou la vie d'un mineur est gravement menacée, les professionnels peuvent saisir les autorités compétentes pour assurer sa protection."
    },
    {
      "id": "sit-070",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Un groupe exige que la piscine municipale exclue durablement tous les hommes de certains horaires ordinaires pour respecter une préférence de non-mixité. Quelle réponse est la plus conforme aux principes du service public ?",
      "choix": [
        "La demande doit toujours être acceptée si elle est collective.",
        "Chaque groupe peut privatiser un service public selon ses règles.",
        "La mixité est interdite dans les équipements sportifs municipaux.",
        "La commune doit respecter l'égalité des usagers et ne peut instaurer une exclusion discriminatoire sans base légale et justification proportionnée."
      ],
      "reponse": 3,
      "explication": "Les services publics doivent respecter l'égalité et la neutralité. Des aménagements ne sont possibles que s'ils reposent sur un motif légal, objectif et proportionné, sans discrimination injustifiée."
    }
  ]
};
