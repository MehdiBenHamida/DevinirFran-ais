/* Banque de questions - source unique de l'application.
   Alignee sur le livret du citoyen et l'examen civique 2026.
   Chargee directement par index.html (fonctionne aussi en file://).
   Format : { id, theme, difficulte, question, choix[4], reponse (index 0-3), explication } */
window.BANQUE_QUESTIONS = {
  "meta": {
    "version": "3.0.0",
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
      "question": "Comment la Constitution décrit-elle la République française ?",
      "choix": [
        "Monarchique et fédérale",
        "Indivisible, laïque, démocratique et sociale",
        "Confessionnelle et communautaire",
        "Dirigée par une religion officielle"
      ],
      "reponse": 1,
      "explication": "La Constitution affirme que la France est une République indivisible, laïque, démocratique et sociale. Elle garantit aussi l’égalité devant la loi."
    },
    {
      "id": "val-008",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "À l’école publique, que dit la laïcité sur les signes religieux ostensibles des élèves ?",
      "choix": [
        "Ils sont toujours obligatoires",
        "Ils sont autorisés seulement pour la religion majoritaire",
        "Ils remplacent les règles scolaires",
        "Ils sont encadrés par la loi dans les écoles, collèges et lycées publics"
      ],
      "reponse": 3,
      "explication": "À l’école publique, la laïcité entraîne des règles particulières sur les signes ou tenues manifestant ostensiblement une appartenance religieuse. Cela ne signifie pas l’interdiction générale des religions."
    },
    {
      "id": "val-009",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "La liberté d’expression est-elle absolue en France ?",
      "choix": [
        "Oui, aucun propos ne peut être sanctionné",
        "Non, la loi peut sanctionner certains abus",
        "Oui, mais seulement sur Internet",
        "Non, elle n’existe que pour les élus"
      ],
      "reponse": 1,
      "explication": "La liberté d’expression est un droit fondamental, mais elle a des limites. La loi peut sanctionner par exemple la diffamation, l’injure ou l’incitation à la haine."
    },
    {
      "id": "val-010",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Les femmes et les hommes ont-ils les mêmes droits en France ?",
      "choix": [
        "Non, les droits civiques sont réservés aux hommes",
        "Oui, mais seulement dans la vie familiale",
        "Non, cela dépend de la profession",
        "Oui, en droit ils ont les mêmes droits et libertés"
      ],
      "reponse": 3,
      "explication": "L’égalité entre les femmes et les hommes est un principe républicain. Une femme peut notamment voter, travailler, gérer ses biens et exercer une profession sans autorisation de son mari."
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
      "difficulte": "moyen",
      "question": "À quoi sert le sceau de la République ?",
      "choix": [
        "À choisir les députés",
        "À fixer les jours fériés",
        "À remplacer le drapeau",
        "À authentifier certains actes solennels"
      ],
      "reponse": 3,
      "explication": "Le sceau de la République est un emblème officiel. Il est utilisé notamment pour certains actes solennels de l’État."
    },
    {
      "id": "val-015",
      "theme": "valeurs",
      "difficulte": "facile",
      "question": "Quel symbole représente la République sous forme de buste dans beaucoup de mairies ?",
      "choix": [
        "Le coq gaulois",
        "Le mont Blanc",
        "La Tour Eiffel",
        "Marianne"
      ],
      "reponse": 3,
      "explication": "Marianne est la figure allégorique de la République. Son buste est souvent présent dans les mairies."
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
      "difficulte": "moyen",
      "question": "La presse peut-elle critiquer le gouvernement en France ?",
      "choix": [
        "Non, toute critique est interdite",
        "Oui, seulement si le gouvernement l’écrit",
        "Non, seuls les élus peuvent critiquer",
        "Oui, dans le respect de la loi"
      ],
      "reponse": 3,
      "explication": "La liberté de la presse permet la critique et l’information. Les abus comme la diffamation ou l’incitation à la haine peuvent toutefois être sanctionnés."
    },
    {
      "id": "val-024",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Une manifestation sur la voie publique peut-elle être encadrée ?",
      "choix": [
        "Non, aucune règle n’est possible",
        "Oui, notamment pour protéger l’ordre public",
        "Oui, seulement pour interdire toute opinion",
        "Non, seules les fêtes privées sont concernées"
      ],
      "reponse": 1,
      "explication": "La liberté de manifester existe, mais elle peut être encadrée par la loi. Les autorités peuvent agir en cas de risque sérieux pour l’ordre public."
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
      "question": "Quel est le principe central de la loi de 1905 ?",
      "choix": [
        "La création d’une religion officielle",
        "La séparation des Églises et de l’État",
        "L’interdiction de croire",
        "Le vote obligatoire"
      ],
      "reponse": 1,
      "explication": "La loi de 1905 est un repère majeur de la laïcité. Elle pose la séparation des Églises et de l’État."
    },
    {
      "id": "val-033",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Peut-on changer de religion en France ?",
      "choix": [
        "Non, la religion est fixée à la naissance",
        "Oui, seulement avec l’accord du maire",
        "Non, sauf pour les agents publics",
        "Oui, la liberté de conscience le permet"
      ],
      "reponse": 3,
      "explication": "La liberté de conscience protège le droit de croire, de ne pas croire et de changer de religion. Cette liberté s’exerce dans le respect de la loi."
    },
    {
      "id": "val-034",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Un fonctionnaire peut-il afficher ses convictions religieuses dans son service ?",
      "choix": [
        "Oui, s’il veut convaincre les usagers",
        "Non, il doit respecter la neutralité du service public",
        "Oui, si sa religion est majoritaire",
        "Non, il doit ne plus avoir de convictions"
      ],
      "reponse": 1,
      "explication": "Un agent public a une liberté de conscience personnelle. Mais dans l’exercice de ses fonctions, il doit respecter la neutralité du service public."
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
      "difficulte": "facile",
      "question": "Que permet la liberté d’association ?",
      "choix": [
        "Créer un tribunal privé",
        "Ne plus respecter la loi",
        "Interdire toute opinion différente",
        "Se regrouper autour d’un but commun licite"
      ],
      "reponse": 3,
      "explication": "La liberté d’association permet à des personnes de se regrouper pour une activité ou une cause commune. Cette liberté s’exerce dans le cadre de la loi."
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
      "question": "Le coq gaulois est-il le principal emblème constitutionnel de la France ?",
      "choix": [
        "Oui, il remplace le drapeau",
        "Non, c’est un symbole traditionnel de la France",
        "Oui, il est obligatoire dans toutes les mairies",
        "Non, il est interdit dans le sport"
      ],
      "reponse": 1,
      "explication": "Le coq gaulois est un symbole traditionnel et populaire de la France. L’emblème national est le drapeau tricolore."
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
      "question": "La laïcité interdit-elle toute religion dans l’espace public ?",
      "choix": [
        "Oui, toute expression religieuse est interdite partout",
        "Non, elle garantit la liberté de conscience et la neutralité de l’État",
        "Oui, seules les opinions athées sont autorisées",
        "Non, car l’État choisit une religion officielle"
      ],
      "reponse": 1,
      "explication": "La laïcité n’est pas l’interdiction générale des religions. Elle organise la neutralité de l’État et protège la liberté de conscience."
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
      "question": "Pourquoi le contrôle de constitutionnalité est-il important ?",
      "choix": [
        "Il remplace toutes les élections",
        "Il autorise le gouvernement à ignorer les juges",
        "Il donne une valeur supérieure aux règlements privés",
        "Il permet de vérifier que certaines lois respectent la Constitution"
      ],
      "reponse": 3,
      "explication": "Le contrôle de constitutionnalité contribue à l’État de droit. Il aide à garantir que les lois respectent les droits et principes constitutionnels."
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
      "difficulte": "difficile",
      "question": "Que signifie dire que la loi exprime la volonté générale ?",
      "choix": [
        "La loi doit venir d’une religion",
        "La loi est adoptée au nom du peuple par les institutions compétentes",
        "La loi dépend de chaque famille",
        "La loi ne s’applique qu’aux étrangers"
      ],
      "reponse": 1,
      "explication": "Dans une démocratie, la loi est adoptée par les représentants du peuple ou directement par référendum selon les cas. Elle doit s’appliquer dans le respect de la Constitution."
    },
    {
      "id": "val-082",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Pourquoi la Déclaration de 1789 reste-t-elle importante aujourd’hui ?",
      "choix": [
        "Elle fixe le prix des impôts chaque année",
        "Elle remplace le Code de la route",
        "Elle concerne seulement les historiens",
        "Elle fait partie des textes de référence de la Constitution"
      ],
      "reponse": 3,
      "explication": "La Déclaration des droits de l’homme et du citoyen de 1789 fait partie des textes fondamentaux de la République. Elle protège notamment la liberté et l’égalité en droits."
    },
    {
      "id": "val-083",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quel droit social est reconnu en France ?",
      "choix": [
        "Le droit de vendre son vote",
        "Le droit de refuser tout impôt",
        "Le droit de grève dans le cadre des lois",
        "Le droit d’imposer une religion officielle"
      ],
      "reponse": 2,
      "explication": "Le droit de grève est reconnu, mais il s’exerce dans le cadre des lois qui le réglementent. Il peut être encadré dans certains services publics."
    },
    {
      "id": "val-084",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quel texte de 1789 protège notamment la liberté d’expression ?",
      "choix": [
        "Le traité de Maastricht",
        "Le Code de la route",
        "Le livret de famille",
        "La Déclaration des droits de l’homme et du citoyen"
      ],
      "reponse": 3,
      "explication": "La Déclaration de 1789 affirme de grands droits et libertés. La liberté d’expression en fait partie, avec des limites prévues par la loi."
    },
    {
      "id": "val-085",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Quels textes font partie des références constitutionnelles françaises ?",
      "choix": [
        "Un règlement de copropriété privé",
        "Les statuts d’un club sportif",
        "Un programme électoral",
        "La DDHC de 1789, le Préambule de 1946 et la Constitution de 1958"
      ],
      "reponse": 3,
      "explication": "La DDHC de 1789, le Préambule de 1946, la Constitution de 1958 et la Charte de l’environnement sont des textes fondamentaux. Ils servent de références pour protéger les droits et libertés."
    },
    {
      "id": "val-086",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "En France, une femme peut-elle travailler sans l’autorisation de son mari ?",
      "choix": [
        "Non, l’autorisation du mari est obligatoire",
        "Oui, seulement dans le secteur public",
        "Oui, elle dispose des mêmes droits et libertés",
        "Non, sauf si elle est élue"
      ],
      "reponse": 2,
      "explication": "L’égalité femmes-hommes signifie que les femmes ont les mêmes droits que les hommes. Elles peuvent travailler, créer une entreprise et gérer leurs biens."
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
      "question": "Que signifie le droit d’asile ?",
      "choix": [
        "Une protection pour certaines personnes persécutées ou menacées",
        "Une dispense de respecter les lois",
        "Un droit réservé aux touristes",
        "Une obligation de voter en France"
      ],
      "reponse": 0,
      "explication": "Le droit d’asile permet de protéger des personnes qui craignent des persécutions ou des menaces graves. Il s’exerce selon les règles prévues par la loi."
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
      "difficulte": "difficile",
      "question": "Pourquoi la solidarité nationale est-elle importante ?",
      "choix": [
        "Elle interdit tout service public",
        "Elle permet d’organiser des protections financées collectivement",
        "Elle supprime les devoirs des citoyens",
        "Elle réserve les droits aux plus riches"
      ],
      "reponse": 1,
      "explication": "La solidarité nationale finance des services publics et des protections sociales. Elle repose sur des contributions communes et des règles partagées."
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
      "difficulte": "difficile",
      "question": "Comment la France doit-elle traiter les personnes étrangères ?",
      "choix": [
        "En supprimant toutes les règles",
        "En refusant tout droit fondamental",
        "En conciliant accueil, droits fondamentaux et respect des lois",
        "En laissant seulement les décisions privées agir"
      ],
      "reponse": 2,
      "explication": "L’accueil des personnes étrangères s’inscrit dans un cadre légal. Il doit respecter les droits fondamentaux et les règles de la République."
    },
    {
      "id": "val-101",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Quel est le rôle d’un juge dans un État de droit ?",
      "choix": [
        "Obéir toujours aux ordres d’un parti",
        "Remplacer les élections",
        "Écrire les articles des journaux",
        "Contrôler le respect du droit et protéger les droits des personnes"
      ],
      "reponse": 3,
      "explication": "Dans un État de droit, les pouvoirs publics et les citoyens sont soumis au droit. Les juges contribuent à contrôler les actes et à protéger les droits."
    },
    {
      "id": "val-102",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Pourquoi l’indépendance de la justice est-elle une garantie pour les citoyens ?",
      "choix": [
        "Elle permet d’éviter l’arbitraire du pouvoir politique",
        "Elle supprime les recours",
        "Elle donne aux juges le pouvoir de voter les lois",
        "Elle interdit toute défense"
      ],
      "reponse": 0,
      "explication": "L’indépendance de la justice aide à garantir un jugement impartial. Elle protège les citoyens contre les pressions et l’arbitraire."
    },
    {
      "id": "val-103",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Le droit de propriété est-il protégé en France ?",
      "choix": [
        "Oui, c’est un droit reconnu, avec des limites prévues par la loi",
        "Non, il n’existe pas",
        "Oui, mais seulement pour l’État",
        "Non, il dépend uniquement des coutumes familiales"
      ],
      "reponse": 0,
      "explication": "Le droit de propriété fait partie des droits et libertés essentiels. Comme d’autres droits, il peut connaître des limites prévues par la loi et justifiées par l’intérêt général."
    },
    {
      "id": "val-104",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Pourquoi le racisme est-il contraire aux valeurs de la République ?",
      "choix": [
        "Parce qu’il nie l’égalité et la dignité des personnes",
        "Parce qu’il remplace le vote obligatoire",
        "Parce qu’il protège la liberté de conscience",
        "Parce qu’il est une simple règle administrative"
      ],
      "reponse": 0,
      "explication": "Le racisme contredit l’égalité en droits et la dignité de chaque personne. Des propos ou actes racistes peuvent être sanctionnés par la loi."
    },
    {
      "id": "val-105",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Le mariage peut-il être imposé par la famille en France ?",
      "choix": [
        "Non, il exige le consentement libre des époux",
        "Oui, si la famille est d’accord",
        "Oui, si une tradition le prévoit",
        "Non, sauf si l’un des époux est mineur"
      ],
      "reponse": 0,
      "explication": "Le mariage suppose le consentement libre des deux époux. Le mariage forcé est contraire aux droits de la personne et peut être sanctionné."
    },
    {
      "id": "val-106",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Que signifie la fraternité dans la devise républicaine ?",
      "choix": [
        "La solidarité et l’attention aux autres",
        "L’obligation d’avoir la même religion",
        "La suppression des libertés",
        "La priorité donnée à une seule origine"
      ],
      "reponse": 0,
      "explication": "La fraternité renvoie au vivre-ensemble et à la solidarité. Elle rappelle que les citoyens doivent respecter les autres et contribuer à la cohésion sociale."
    },
    {
      "id": "val-107",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Une sanction pénale peut-elle être décidée sans loi ?",
      "choix": [
        "Non, les peines doivent être prévues par la loi",
        "Oui, si l’opinion publique le demande",
        "Oui, si un agent public le souhaite",
        "Non, sauf pour les étrangers uniquement"
      ],
      "reponse": 0,
      "explication": "L’État de droit impose que les sanctions pénales aient une base légale. Ce principe protège contre l’arbitraire."
    },
    {
      "id": "val-108",
      "theme": "valeurs",
      "difficulte": "difficile",
      "question": "Toute différence de traitement est-elle une discrimination ?",
      "choix": [
        "Oui, toute différence est interdite",
        "Non, mais une différence fondée sur un critère interdit peut être une discrimination",
        "Oui, sauf si elle est décidée oralement",
        "Non, aucune discrimination n’est jamais sanctionnée"
      ],
      "reponse": 1,
      "explication": "Certaines différences de traitement peuvent être légales si elles sont justifiées. Une discrimination est interdite lorsqu’elle repose sur un critère prohibé dans un domaine protégé."
    },
    {
      "id": "val-109",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quelle idée guide la protection des enfants en France ?",
      "choix": [
        "L’intérêt de l’enfant",
        "La propriété des parents sur l’enfant",
        "L’absence d’école obligatoire",
        "La priorité des coutumes sur la loi"
      ],
      "reponse": 0,
      "explication": "La protection des mineurs vise leur sécurité, leur santé, leur éducation et leur développement. Les décisions doivent tenir compte de l’intérêt de l’enfant."
    },
    {
      "id": "val-110",
      "theme": "valeurs",
      "difficulte": "moyen",
      "question": "Quel devoir citoyen concerne les jeunes Français à partir de 16 ans ?",
      "choix": [
        "Le recensement citoyen",
        "Le vote obligatoire",
        "Le paiement automatique d’un impôt sur le revenu",
        "L’obligation d’être juré d’assises"
      ],
      "reponse": 0,
      "explication": "Les jeunes Français doivent se faire recenser à partir de 16 ans. Cette démarche est liée au parcours citoyen et à la Journée défense et citoyenneté."
    },
    {
      "id": "ins-001",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Pour combien d'années le président de la République est-il élu ?",
      "choix": [
        "5 ans",
        "4 ans",
        "6 ans",
        "7 ans"
      ],
      "reponse": 0,
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
        "À l'hôtel Matignon",
        "Au palais Bourbon",
        "Au palais de l'Élysée",
        "Au palais du Luxembourg"
      ],
      "reponse": 2,
      "explication": "Le président réside au palais de l'Élysée. Matignon est la résidence du Premier ministre, le palais Bourbon abrite l'Assemblée nationale et le palais du Luxembourg le Sénat."
    },
    {
      "id": "ins-004",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "À partir de quel âge peut-on voter en France ?",
      "choix": [
        "16 ans",
        "21 ans",
        "20 ans",
        "18 ans"
      ],
      "reponse": 3,
      "explication": "Le droit de vote est acquis à 18 ans depuis la loi du 5 juillet 1974. Il faut être de nationalité française, majeur, inscrit sur les listes électorales et jouir de ses droits civiques."
    },
    {
      "id": "ins-005",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Qui nomme le Premier ministre ?",
      "choix": [
        "Le président de la République",
        "L'Assemblée nationale",
        "Le Conseil constitutionnel",
        "Le Sénat"
      ],
      "reponse": 0,
      "explication": "Selon l'article 8 de la Constitution, le président de la République nomme le Premier ministre. Celui-ci doit disposer de la confiance de l'Assemblée nationale, qui peut le renverser par une motion de censure."
    },
    {
      "id": "ins-006",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Comment les sénateurs sont-ils élus ?",
      "choix": [
        "Au suffrage universel direct",
        "Au suffrage universel indirect par de grands électeurs",
        "Par tirage au sort",
        "Par nomination du président"
      ],
      "reponse": 1,
      "explication": "Les 348 sénateurs sont élus pour 6 ans au suffrage universel indirect par un collège de grands électeurs (députés, conseillers régionaux et départementaux, délégués des conseils municipaux)."
    },
    {
      "id": "ins-007",
      "theme": "institutions",
      "difficulte": "facile",
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
      "difficulte": "facile",
      "question": "Quel est le rôle du Conseil constitutionnel ?",
      "choix": [
        "Juger les crimes les plus graves",
        "Conseiller les maires",
        "Élire le Premier ministre",
        "Vérifier la conformité des lois à la Constitution"
      ],
      "reponse": 3,
      "explication": "Composé de 9 membres nommés pour 9 ans (plus les anciens présidents de la République), le Conseil constitutionnel contrôle la conformité des lois à la Constitution et veille à la régularité des élections nationales et des référendums."
    },
    {
      "id": "ins-009",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "À quoi sert le Défenseur des droits ?",
      "choix": [
        "À défendre les droits des personnes face aux administrations et à lutter contre les discriminations",
        "À défendre les intérêts du Gouvernement",
        "À juger les litiges commerciaux",
        "À nommer les préfets"
      ],
      "reponse": 0,
      "explication": "Autorité indépendante créée en 2011, le Défenseur des droits est nommé pour 6 ans non renouvelables. Il peut être saisi gratuitement par toute personne victime d'une discrimination ou en litige avec un service public."
    },
    {
      "id": "ins-010",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle est la double mission du Conseil d'État ?",
      "choix": [
        "Voter le budget et contrôler les impôts",
        "Conseiller le Gouvernement et juger les litiges avec l'administration",
        "Nommer les ministres et dissoudre l'Assemblée",
        "Juger les crimes et délits"
      ],
      "reponse": 1,
      "explication": "Le Conseil d'État est à la fois conseiller juridique du Gouvernement (avis sur les projets de loi et décrets) et juge administratif suprême, statuant en dernier ressort sur les litiges entre les citoyens et l'administration."
    },
    {
      "id": "ins-011",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle Constitution fonde la Ve République ?",
      "choix": [
        "La Constitution de 1789",
        "La Constitution de 1905",
        "La Constitution de 1958",
        "La Constitution de 2002"
      ],
      "reponse": 2,
      "explication": "La Constitution actuelle date de 1958. Elle fonde la Ve République."
    },
    {
      "id": "ins-012",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Sous quelle République la France vit-elle aujourd'hui ?",
      "choix": [
        "La IIIe République",
        "La IVe République",
        "La VIe République",
        "La Ve République"
      ],
      "reponse": 3,
      "explication": "La France vit sous la Ve République depuis 1958."
    },
    {
      "id": "ins-013",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Comment le président de la République est-il élu ?",
      "choix": [
        "Au suffrage universel direct",
        "Par les sénateurs seulement",
        "Par les préfets",
        "Par le Conseil constitutionnel"
      ],
      "reponse": 0,
      "explication": "Le président est élu directement par les citoyens inscrits."
    },
    {
      "id": "ins-014",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel principe signifie qu'une personne est considérée non coupable tant qu'elle n'a pas été condamnée ?",
      "choix": [
        "La séparation des pouvoirs",
        "La présomption d'innocence",
        "La continuité du service",
        "La publicité des débats"
      ],
      "reponse": 1,
      "explication": "La présomption d'innocence protège toute personne poursuivie. Sa culpabilité doit être établie par la justice."
    },
    {
      "id": "ins-015",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel professionnel du droit conseille et défend une personne devant la justice ?",
      "choix": [
        "Le préfet",
        "Le maire",
        "L'avocat",
        "Le député"
      ],
      "reponse": 2,
      "explication": "L'avocat assiste, conseille et représente son client. Il contribue au respect des droits de la défense."
    },
    {
      "id": "ins-016",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel rôle militaire le président exerce-t-il ?",
      "choix": [
        "Il commande les maires",
        "Il juge les procès",
        "Il préside les collèges",
        "Il est chef des armées"
      ],
      "reponse": 3,
      "explication": "Le président de la République est chef des armées."
    },
    {
      "id": "ins-017",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle institution peut être saisie en cas de discrimination ou de difficulté avec un service public ?",
      "choix": [
        "Le Défenseur des droits",
        "La Cour de cassation",
        "La Cour des comptes",
        "Le Sénat"
      ],
      "reponse": 0,
      "explication": "Le Défenseur des droits protège les droits et libertés. Il peut intervenir notamment contre les discriminations et les difficultés avec l'administration."
    },
    {
      "id": "ins-018",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Le vote est-il obligatoire en France ?",
      "choix": [
        "Oui, à toutes les élections",
        "Non",
        "Oui, seulement aux municipales",
        "Oui, seulement aux référendums"
      ],
      "reponse": 1,
      "explication": "En France, le vote n'est pas obligatoire. C'est un droit civique important."
    },
    {
      "id": "ins-019",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle juridiction contrôle principalement les comptes publics et l'usage de l'argent public ?",
      "choix": [
        "Le tribunal de police",
        "Le conseil régional",
        "La Cour des comptes",
        "Le Conseil constitutionnel"
      ],
      "reponse": 2,
      "explication": "La Cour des comptes contrôle la régularité et la bonne gestion des comptes publics. Elle informe aussi les citoyens par ses rapports."
    },
    {
      "id": "ins-020",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle assemblée élue administre une commune ?",
      "choix": [
        "Le conseil départemental",
        "Le conseil régional",
        "Le conseil constitutionnel",
        "Le conseil municipal"
      ],
      "reponse": 3,
      "explication": "La commune est administrée par le conseil municipal. Ses membres sont élus par les habitants inscrits sur les listes électorales."
    },
    {
      "id": "ins-021",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Qui élit le maire dans une commune française ?",
      "choix": [
        "Le conseil municipal",
        "Les députés de la circonscription",
        "Le préfet du département",
        "Les sénateurs de la région"
      ],
      "reponse": 0,
      "explication": "Après les élections municipales, le conseil municipal élit le maire et ses adjoints. Le maire est donc choisi par les conseillers municipaux."
    },
    {
      "id": "ins-022",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle fonction le maire exerce-t-il pour enregistrer les naissances, mariages et décès ?",
      "choix": [
        "Comptable public",
        "Officier d'état civil",
        "Juge administratif",
        "Chef de juridiction"
      ],
      "reponse": 1,
      "explication": "Le maire est officier d'état civil. À ce titre, il enregistre les actes de naissance, de mariage et de décès."
    },
    {
      "id": "ins-023",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle collectivité territoriale est administrée par un conseil départemental ?",
      "choix": [
        "La commune",
        "La région",
        "Le département",
        "L'arrondissement"
      ],
      "reponse": 2,
      "explication": "Le département est une collectivité territoriale. Il est administré par un conseil départemental élu."
    },
    {
      "id": "ins-024",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle collectivité territoriale est administrée par un conseil régional ?",
      "choix": [
        "La commune",
        "Le canton",
        "Le quartier",
        "La région"
      ],
      "reponse": 3,
      "explication": "La région est administrée par le conseil régional. Ses membres sont élus lors des élections régionales."
    },
    {
      "id": "ins-025",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel représentant de l'État dirige les services de l'État dans un département ?",
      "choix": [
        "Le préfet",
        "Le maire",
        "Le président du Sénat",
        "Le procureur général"
      ],
      "reponse": 0,
      "explication": "Le préfet représente l'État dans le département. Il coordonne les services déconcentrés de l'État."
    },
    {
      "id": "ins-026",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Dans quel lieu un électeur se rend-il pour voter le jour d'une élection ?",
      "choix": [
        "Au tribunal judiciaire",
        "Au bureau de vote",
        "À la préfecture régionale",
        "À la cour d'appel"
      ],
      "reponse": 1,
      "explication": "Le vote se déroule dans un bureau de vote. C'est le lieu où l'électeur émarge et dépose son bulletin dans l'urne."
    },
    {
      "id": "ins-027",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "À quoi sert l'isoloir dans un bureau de vote ?",
      "choix": [
        "À vérifier les impôts locaux",
        "À contrôler les candidatures",
        "À garantir le secret du vote",
        "À compter les abstentions"
      ],
      "reponse": 2,
      "explication": "L'isoloir permet à l'électeur de choisir son bulletin à l'abri des regards. Il protège le secret du vote."
    },
    {
      "id": "ins-028",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Comment appelle-t-on le fait de ne pas aller voter lors d'une élection ?",
      "choix": [
        "Le vote nul",
        "La procuration",
        "Le référendum",
        "L'abstention"
      ],
      "reponse": 3,
      "explication": "L'abstention désigne le fait de ne pas participer au vote. Elle est mesurée parmi les électeurs inscrits."
    },
    {
      "id": "ins-029",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle condition est nécessaire pour voter ?",
      "choix": [
        "Être inscrit sur les listes électorales",
        "Être membre d'un parti",
        "Avoir un mandat local",
        "Être propriétaire"
      ],
      "reponse": 0,
      "explication": "L'inscription sur les listes électorales est nécessaire pour voter."
    },
    {
      "id": "ins-030",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel mécanisme permet à un électeur absent de faire voter une autre personne à sa place ?",
      "choix": [
        "Le panachage",
        "La procuration",
        "Le tirage au sort",
        "Le vote blanc"
      ],
      "reponse": 1,
      "explication": "La procuration permet à un électeur de désigner un autre électeur pour voter en son nom. Elle doit être établie selon les règles prévues."
    },
    {
      "id": "ins-031",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle élection permet de choisir les conseillers municipaux ?",
      "choix": [
        "L'élection présidentielle",
        "L'élection sénatoriale",
        "L'élection municipale",
        "L'élection européenne"
      ],
      "reponse": 2,
      "explication": "Les élections municipales servent à élire les conseillers municipaux. Ceux-ci élisent ensuite le maire."
    },
    {
      "id": "ins-032",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle élection permet de choisir les députés à l'Assemblée nationale ?",
      "choix": [
        "L'élection régionale",
        "L'élection municipale",
        "L'élection prud'homale",
        "L'élection législative"
      ],
      "reponse": 3,
      "explication": "Les élections législatives permettent d'élire les députés. Les députés siègent à l'Assemblée nationale."
    },
    {
      "id": "ins-033",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel principe du service public impose de traiter les usagers sans discrimination ?",
      "choix": [
        "L'égalité",
        "La rentabilité",
        "La concurrence",
        "La spécialité pénale"
      ],
      "reponse": 0,
      "explication": "Le principe d'égalité impose un traitement égal des usagers placés dans une situation comparable. Il interdit les discriminations injustifiées."
    },
    {
      "id": "ins-034",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel principe exige qu'un service public essentiel fonctionne de manière régulière ?",
      "choix": [
        "La proportionnalité des peines",
        "La continuité",
        "La majorité absolue",
        "La collégialité municipale"
      ],
      "reponse": 1,
      "explication": "La continuité est un principe du service public. Elle signifie que le service doit fonctionner de façon régulière, même si des adaptations sont possibles."
    },
    {
      "id": "ins-035",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel principe impose aux agents publics de ne pas favoriser une opinion politique ou religieuse ?",
      "choix": [
        "La coutume locale",
        "La préférence nationale",
        "La neutralité",
        "La publicité électorale"
      ],
      "reponse": 2,
      "explication": "La neutralité impose aux agents publics de servir tous les usagers impartialement. Elle est liée à la laïcité du service public."
    },
    {
      "id": "ins-036",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel principe permet au service public d'évoluer avec les besoins ?",
      "choix": [
        "La dissolution",
        "La cassation",
        "La cohabitation",
        "L'adaptabilité"
      ],
      "reponse": 3,
      "explication": "Le service public peut évoluer pour s'adapter aux besoins de la société."
    },
    {
      "id": "ins-037",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel est le rôle principal de la Cour de cassation dans l'ordre judiciaire ?",
      "choix": [
        "Contrôler la bonne application du droit",
        "Rejuger tous les faits d'une affaire",
        "Élire les magistrats locaux",
        "Nommer les jurés populaires"
      ],
      "reponse": 0,
      "explication": "La Cour de cassation ne rejugе pas les faits. Elle vérifie que les juges ont correctement appliqué la règle de droit."
    },
    {
      "id": "ins-038",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel est le rôle principal du Parlement ?",
      "choix": [
        "Diriger les communes",
        "Voter la loi et contrôler le Gouvernement",
        "Juger les crimes",
        "Nommer les préfets"
      ],
      "reponse": 1,
      "explication": "Le Parlement vote les lois et contrôle l'action du Gouvernement."
    },
    {
      "id": "ins-039",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle juridiction tranche les litiges entre les particuliers et l'administration ?",
      "choix": [
        "Le conseil de prud'hommes",
        "La cour d'assises",
        "Le tribunal administratif",
        "Le tribunal de police"
      ],
      "reponse": 2,
      "explication": "Le tribunal administratif appartient à l'ordre administratif. Il juge notamment les litiges entre les administrés et les administrations."
    },
    {
      "id": "ins-040",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle juridiction règle les litiges individuels entre salariés et employeurs privés ?",
      "choix": [
        "Le tribunal judiciaire",
        "Le Conseil d'État",
        "La cour d'assises",
        "Le conseil de prud'hommes"
      ],
      "reponse": 3,
      "explication": "Le conseil de prud'hommes traite les conflits individuels liés au contrat de travail de droit privé. Il réunit des conseillers issus du monde du travail."
    },
    {
      "id": "ins-041",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "À qui appartient la souveraineté nationale ?",
      "choix": [
        "Au peuple",
        "Au préfet seul",
        "À une entreprise privée",
        "À un tribunal étranger"
      ],
      "reponse": 0,
      "explication": "La souveraineté nationale appartient au peuple."
    },
    {
      "id": "ins-042",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Comment le peuple exerce-t-il sa souveraineté ?",
      "choix": [
        "Uniquement par les préfets",
        "Par ses représentants et par référendum",
        "Uniquement par les entreprises",
        "Uniquement par les tribunaux"
      ],
      "reponse": 1,
      "explication": "Le peuple exerce sa souveraineté par ses représentants et par référendum."
    },
    {
      "id": "ins-043",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Que fait le Gouvernement ?",
      "choix": [
        "Il juge les litiges privés",
        "Il élit les sénateurs",
        "Il détermine et conduit la politique de la Nation",
        "Il remplace les communes"
      ],
      "reponse": 2,
      "explication": "Le Gouvernement détermine et conduit la politique de la Nation."
    },
    {
      "id": "ins-044",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Devant quelle institution le Gouvernement est-il responsable ?",
      "choix": [
        "Devant les seules communes",
        "Devant une entreprise",
        "Devant les bureaux de vote",
        "Devant le Parlement"
      ],
      "reponse": 3,
      "explication": "Le Gouvernement est responsable devant le Parlement selon la Constitution."
    },
    {
      "id": "ins-045",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Qui nomme les ministres ?",
      "choix": [
        "Le président de la République, sur proposition du Premier ministre",
        "Le maire",
        "Le Défenseur des droits",
        "La Cour des comptes"
      ],
      "reponse": 0,
      "explication": "Les ministres sont nommés par le président sur proposition du Premier ministre."
    },
    {
      "id": "ins-046",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel texte fixe les règles principales des institutions ?",
      "choix": [
        "Une carte électorale",
        "La Constitution",
        "Un rapport annuel",
        "Un règlement de copropriété"
      ],
      "reponse": 1,
      "explication": "La Constitution fixe les règles essentielles des pouvoirs publics."
    },
    {
      "id": "ins-047",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Que signifie une République démocratique ?",
      "choix": [
        "Le pouvoir est héréditaire",
        "Le vote est interdit",
        "Les citoyens participent au pouvoir par le vote",
        "Les lois sont secrètes"
      ],
      "reponse": 2,
      "explication": "Une République démocratique repose sur la participation des citoyens."
    },
    {
      "id": "ins-048",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Que signifie une République laïque ?",
      "choix": [
        "L'État impose une religion",
        "Le vote dépend de la religion",
        "Les maires choisissent les croyances",
        "L'État est neutre à l'égard des religions"
      ],
      "reponse": 3,
      "explication": "La laïcité implique la neutralité de l'État et des services publics."
    },
    {
      "id": "ins-049",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Que signifie une République sociale ?",
      "choix": [
        "Elle prend en compte la solidarité",
        "Elle refuse toute aide sociale",
        "Elle interdit les services publics",
        "Elle supprime les droits sociaux"
      ],
      "reponse": 0,
      "explication": "La République française est sociale et reconnaît l'importance de la solidarité."
    },
    {
      "id": "ins-050",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle institution contrôle la régularité de l'élection présidentielle et des référendums nationaux ?",
      "choix": [
        "La Cour des comptes",
        "Le Conseil constitutionnel",
        "Le Conseil d'État",
        "La CNIL"
      ],
      "reponse": 1,
      "explication": "Le Conseil constitutionnel veille à la régularité de l'élection présidentielle. Il contrôle aussi les référendums nationaux et proclame leurs résultats."
    },
    {
      "id": "ins-051",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle collectivité est principalement responsable des collèges publics ?",
      "choix": [
        "La commune",
        "La région",
        "Le département",
        "L'État européen"
      ],
      "reponse": 2,
      "explication": "Le département est chargé notamment de la construction, de l'entretien et du fonctionnement matériel des collèges publics. L'enseignement lui-même relève de l'État."
    },
    {
      "id": "ins-052",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle collectivité est principalement responsable des lycées publics ?",
      "choix": [
        "La commune",
        "Le département",
        "L'arrondissement",
        "La région"
      ],
      "reponse": 3,
      "explication": "La région est chargée notamment des lycées publics. Elle s'occupe de leur construction, entretien et fonctionnement matériel."
    },
    {
      "id": "ins-053",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle collectivité est principalement responsable des écoles maternelles et élémentaires publiques ?",
      "choix": [
        "La commune",
        "La région",
        "Le département",
        "Le canton"
      ],
      "reponse": 0,
      "explication": "La commune est responsable des écoles publiques du premier degré pour les bâtiments et le fonctionnement matériel. L'État reste responsable des enseignants."
    },
    {
      "id": "ins-054",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle collectivité joue un rôle majeur en matière d'action sociale, notamment pour l'aide aux personnes âgées ou handicapées ?",
      "choix": [
        "La commune uniquement",
        "Le département",
        "La région uniquement",
        "Le Sénat"
      ],
      "reponse": 1,
      "explication": "Le département est un acteur central de l'action sociale. Il intervient notamment pour l'aide sociale à l'enfance, les personnes âgées et les personnes handicapées."
    },
    {
      "id": "ins-055",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quelle collectivité est la plus proche des habitants ?",
      "choix": [
        "La région",
        "L'Union européenne",
        "La commune",
        "Le Sénat"
      ],
      "reponse": 2,
      "explication": "La commune est l'échelon local de proximité."
    },
    {
      "id": "ins-056",
      "theme": "institutions",
      "difficulte": "facile",
      "question": "Quel est le rôle des services déconcentrés de l'État ?",
      "choix": [
        "Voter les lois nationales",
        "Juger les crimes devant un jury",
        "Contrôler les partis politiques",
        "Appliquer localement les politiques de l'État"
      ],
      "reponse": 3,
      "explication": "Les services déconcentrés représentent les ministères sur le territoire. Ils appliquent localement les politiques décidées par l'État."
    },
    {
      "id": "ins-057",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Qui promulgue les lois ?",
      "choix": [
        "Le président de la République",
        "Le maire",
        "Le Défenseur des droits",
        "La Cour des comptes"
      ],
      "reponse": 0,
      "explication": "Le président de la République promulgue les lois."
    },
    {
      "id": "ins-058",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle institution contrôle l'élection présidentielle ?",
      "choix": [
        "La Cour des comptes",
        "Le Conseil constitutionnel",
        "Le conseil municipal",
        "Le Défenseur des droits"
      ],
      "reponse": 1,
      "explication": "Le Conseil constitutionnel contrôle notamment l'élection présidentielle."
    },
    {
      "id": "ins-059",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "À quoi sert un référendum ?",
      "choix": [
        "À nommer les membres du gouvernement",
        "À choisir les magistrats d'un tribunal",
        "À consulter directement les électeurs sur une question ou un texte",
        "À fixer les notes des concours publics"
      ],
      "reponse": 2,
      "explication": "Le référendum permet aux électeurs de répondre directement à une question. Il peut porter sur certains textes ou décisions prévus par la Constitution."
    },
    {
      "id": "ins-060",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel principe protège les juges contre les pressions des autres pouvoirs dans leurs décisions ?",
      "choix": [
        "La tutelle préfectorale",
        "La solidarité gouvernementale",
        "La discipline budgétaire",
        "L'indépendance de la justice"
      ],
      "reponse": 3,
      "explication": "L'indépendance de la justice garantit que les magistrats jugent selon le droit et leur conscience. Elle protège la fonction de juger contre les pressions extérieures."
    },
    {
      "id": "ins-061",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Qu'est-ce que l'État de droit ?",
      "choix": [
        "Un système où tous sont soumis au droit",
        "Un État sans tribunaux",
        "Un État sans élections",
        "Un État dirigé par une commune"
      ],
      "reponse": 0,
      "explication": "Dans un État de droit, les citoyens et les pouvoirs publics respectent le droit."
    },
    {
      "id": "ins-062",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel ordre juge souvent les litiges avec l'administration ?",
      "choix": [
        "L'ordre judiciaire",
        "L'ordre administratif",
        "L'ordre municipal",
        "L'ordre parlementaire"
      ],
      "reponse": 1,
      "explication": "Les litiges avec l'administration relèvent souvent de l'ordre administratif."
    },
    {
      "id": "ins-063",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel est le sommet de l'ordre administratif français ?",
      "choix": [
        "La Cour de cassation",
        "La cour d'appel",
        "Le Conseil d'État",
        "Le tribunal judiciaire"
      ],
      "reponse": 2,
      "explication": "Le Conseil d'État est la juridiction suprême de l'ordre administratif. Il juge notamment certains recours contre les décisions administratives."
    },
    {
      "id": "ins-064",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel contrôle le Conseil constitutionnel exerce-t-il sur les lois avant leur promulgation ?",
      "choix": [
        "Un contrôle de leur opportunité politique",
        "Un contrôle de leur rentabilité financière",
        "Un contrôle de leur popularité électorale",
        "Un contrôle de constitutionnalité"
      ],
      "reponse": 3,
      "explication": "Le Conseil constitutionnel peut vérifier qu'une loi respecte la Constitution avant sa promulgation. Il ne juge pas l'opportunité politique de la loi."
    },
    {
      "id": "ins-065",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle différence simple existe entre Conseil d'État et Cour de cassation ?",
      "choix": [
        "Le Conseil d'État est administratif, la Cour de cassation est judiciaire",
        "Les deux élisent les maires",
        "Les deux gèrent les lycées",
        "Les deux votent les lois"
      ],
      "reponse": 0,
      "explication": "Le Conseil d'État est le sommet administratif ; la Cour de cassation est le sommet judiciaire."
    },
    {
      "id": "ins-066",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "La Cour de cassation rejuge-t-elle les faits comme une cour d'appel ?",
      "choix": [
        "Oui, elle revote la loi",
        "Non, elle contrôle surtout l'application du droit",
        "Oui, elle élit les juges",
        "Oui, elle dirige l'administration"
      ],
      "reponse": 1,
      "explication": "La Cour de cassation vérifie surtout si le droit a été correctement appliqué."
    },
    {
      "id": "ins-067",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Qui peut aider en cas de difficulté avec un service public ?",
      "choix": [
        "Le Palais Bourbon",
        "Le conseil régional uniquement",
        "Le Défenseur des droits",
        "Le bureau de vote"
      ],
      "reponse": 2,
      "explication": "Le Défenseur des droits peut intervenir dans certaines difficultés avec les services publics."
    },
    {
      "id": "ins-068",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Qui organise notamment les transports régionaux ?",
      "choix": [
        "La commune",
        "Le département",
        "Le tribunal administratif",
        "La région"
      ],
      "reponse": 3,
      "explication": "La région organise notamment les transports régionaux."
    },
    {
      "id": "ins-069",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Le préfet dirige-t-il le conseil départemental ?",
      "choix": [
        "Non, il représente l'État",
        "Oui, il préside le département",
        "Oui, il élit les conseillers",
        "Oui, il vote le budget"
      ],
      "reponse": 0,
      "explication": "Le préfet représente l'État ; le département est dirigé par ses élus."
    },
    {
      "id": "ins-070",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Pourquoi le secret du vote est-il important ?",
      "choix": [
        "Pour empêcher le dépouillement",
        "Pour protéger la liberté de choix de l'électeur",
        "Pour supprimer les listes électorales",
        "Pour choisir les préfets"
      ],
      "reponse": 1,
      "explication": "Le secret du vote permet à chacun de voter librement."
    },
    {
      "id": "ins-071",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Lors des élections législatives, qui élit-on ?",
      "choix": [
        "Les préfets",
        "Les membres du Conseil constitutionnel",
        "Les députés",
        "Les juges"
      ],
      "reponse": 2,
      "explication": "Les élections législatives permettent d'élire les députés."
    },
    {
      "id": "ins-072",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel est le rôle d'un député ?",
      "choix": [
        "Diriger une préfecture",
        "Juger les procès",
        "Nommer le Premier ministre",
        "Représenter les citoyens et participer au vote de la loi"
      ],
      "reponse": 3,
      "explication": "Un député siège à l'Assemblée nationale et participe au vote de la loi."
    },
    {
      "id": "ins-073",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle affirmation sur l'inscription sur les listes électorales est correcte ?",
      "choix": [
        "Elle est nécessaire pour pouvoir voter",
        "Elle se fait uniquement le jour du vote",
        "Elle est réservée aux propriétaires",
        "Elle remplace la nationalité française"
      ],
      "reponse": 0,
      "explication": "Pour voter, il faut être inscrit sur les listes électorales de sa commune ou de son consulat. L'inscription permet d'être rattaché à un bureau de vote."
    },
    {
      "id": "ins-074",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle règle caractérise le secret du vote ?",
      "choix": [
        "L'électeur doit montrer son bulletin au président du bureau",
        "Personne ne doit pouvoir connaître le choix de l'électeur",
        "Le vote doit être annoncé oralement aux assesseurs",
        "Les bulletins sont signés par les électeurs"
      ],
      "reponse": 1,
      "explication": "Le secret du vote garantit la liberté de l'électeur. L'isoloir, l'enveloppe et l'urne contribuent à protéger ce secret."
    },
    {
      "id": "ins-075",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle obligation s'impose à un fonctionnaire dans l'exercice d'un service public ?",
      "choix": [
        "Soutenir publiquement un parti au guichet",
        "Refuser les usagers sans motif légal",
        "Servir l'intérêt général avec impartialité",
        "Adapter la loi selon ses préférences"
      ],
      "reponse": 2,
      "explication": "Un fonctionnaire doit servir l'intérêt général et respecter ses obligations professionnelles. L'impartialité et la neutralité s'imposent dans le service public."
    },
    {
      "id": "ins-076",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle collectivité territoriale correspond généralement au niveau le plus proche des habitants ?",
      "choix": [
        "La région",
        "Le Sénat",
        "L'Union européenne",
        "La commune"
      ],
      "reponse": 3,
      "explication": "La commune est l'échelon local de base. Elle gère de nombreux services de proximité, comme l'état civil, certaines écoles et des équipements locaux."
    },
    {
      "id": "ins-077",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle assemblée administre la commune ?",
      "choix": [
        "Le conseil municipal",
        "Le conseil régional",
        "Le Sénat",
        "La Cour des comptes"
      ],
      "reponse": 0,
      "explication": "La commune est administrée par le conseil municipal."
    },
    {
      "id": "ins-078",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel rôle le maire exerce-t-il pour l'état civil ?",
      "choix": [
        "Juge constitutionnel",
        "Officier d'état civil",
        "Président de région",
        "Procureur"
      ],
      "reponse": 1,
      "explication": "Le maire enregistre notamment les naissances, mariages et décès."
    },
    {
      "id": "ins-079",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle assemblée administre le département ?",
      "choix": [
        "Le conseil municipal",
        "Le Sénat",
        "Le conseil départemental",
        "Le Conseil constitutionnel"
      ],
      "reponse": 2,
      "explication": "Le département est administré par le conseil départemental."
    },
    {
      "id": "ins-080",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle collectivité entretient principalement les routes départementales ?",
      "choix": [
        "Le Parlement européen",
        "Le tribunal administratif",
        "La Cour des comptes",
        "Le département"
      ],
      "reponse": 3,
      "explication": "Le département est notamment compétent pour les routes départementales. Il intervient aussi dans l'action sociale et les collèges."
    },
    {
      "id": "ins-081",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle collectivité organise de nombreux trains express régionaux, les TER ?",
      "choix": [
        "La région",
        "La commune",
        "Le tribunal judiciaire",
        "Le Conseil constitutionnel"
      ],
      "reponse": 0,
      "explication": "La région joue un rôle important dans les transports régionaux. Elle organise notamment les TER avec les opérateurs concernés."
    },
    {
      "id": "ins-082",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Que signifie la décentralisation ?",
      "choix": [
        "La suppression des élections locales",
        "Le transfert de compétences de l'État vers des collectivités territoriales",
        "Le remplacement des communes par l'État",
        "La nomination des maires par les tribunaux"
      ],
      "reponse": 1,
      "explication": "La décentralisation donne des compétences propres aux collectivités territoriales. Celles-ci les exercent avec des assemblées élues."
    },
    {
      "id": "ins-083",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle assemblée administre la région ?",
      "choix": [
        "Le conseil municipal",
        "Le conseil de prud'hommes",
        "Le conseil régional",
        "La Cour des comptes"
      ],
      "reponse": 2,
      "explication": "La région est administrée par le conseil régional."
    },
    {
      "id": "ins-084",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle élection permet de désigner les conseillers régionaux ?",
      "choix": [
        "Les élections prud'homales",
        "Les élections sénatoriales",
        "Les élections consulaires",
        "Les élections régionales"
      ],
      "reponse": 3,
      "explication": "Les élections régionales servent à élire les conseillers régionaux. Ceux-ci siègent au conseil régional."
    },
    {
      "id": "ins-085",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle élection permet de désigner les conseillers départementaux ?",
      "choix": [
        "L'élection départementale",
        "L'élection européenne",
        "L'élection présidentielle",
        "Le référendum constitutionnel"
      ],
      "reponse": 0,
      "explication": "Les conseillers départementaux sont élus lors des élections départementales. Ils administrent le département au sein du conseil départemental."
    },
    {
      "id": "ins-086",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Qui les élections européennes permettent-elles d'élire en France ?",
      "choix": [
        "Les préfets de région",
        "Les députés européens",
        "Les membres du Conseil d'État",
        "Les maires d'arrondissement"
      ],
      "reponse": 1,
      "explication": "Les élections européennes permettent d'élire les représentants français au Parlement européen. Elles ont lieu dans l'ensemble des États membres de l'Union européenne."
    },
    {
      "id": "ins-087",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Dans un référendum national, que font les électeurs ?",
      "choix": [
        "Ils choisissent les magistrats professionnels",
        "Ils tirent au sort les ministres",
        "Ils répondent directement à une question posée",
        "Ils rédigent le budget de l'État"
      ],
      "reponse": 2,
      "explication": "Le référendum permet aux électeurs de se prononcer directement. La réponse se fait généralement par oui ou par non."
    },
    {
      "id": "ins-088",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Où siège l'Assemblée nationale ?",
      "choix": [
        "Au Palais du Luxembourg",
        "À Matignon",
        "À l'Hôtel de Ville de Paris",
        "Au Palais Bourbon"
      ],
      "reponse": 3,
      "explication": "L'Assemblée nationale siège au Palais Bourbon, à Paris. Les députés y débattent et votent la loi."
    },
    {
      "id": "ins-089",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Où siège le Sénat ?",
      "choix": [
        "Au Palais du Luxembourg",
        "Au Palais Bourbon",
        "À l'Élysée",
        "À la Cour de cassation"
      ],
      "reponse": 0,
      "explication": "Le Sénat siège au Palais du Luxembourg, à Paris. Il participe au vote de la loi avec l'Assemblée nationale."
    },
    {
      "id": "ins-090",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel lieu est associé aux services du Premier ministre ?",
      "choix": [
        "Le Palais du Luxembourg",
        "Matignon",
        "Le Panthéon",
        "Le Palais Bourbon"
      ],
      "reponse": 1,
      "explication": "Matignon désigne couramment l'hôtel de Matignon et les services du Premier ministre. C'est un lieu central du gouvernement."
    },
    {
      "id": "ins-091",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel vote peut obliger le gouvernement à démissionner devant l'Assemblée nationale ?",
      "choix": [
        "Un vote blanc",
        "Une question écrite",
        "Une motion de censure",
        "Une investiture municipale"
      ],
      "reponse": 2,
      "explication": "Une motion de censure adoptée par l'Assemblée nationale met en cause la responsabilité du gouvernement. Si elle est adoptée, le gouvernement doit démissionner."
    },
    {
      "id": "ins-092",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle juridiction traite les litiges du travail privé ?",
      "choix": [
        "La cour d'assises",
        "Le Conseil constitutionnel",
        "Le conseil régional",
        "Le conseil de prud'hommes"
      ],
      "reponse": 3,
      "explication": "Le conseil de prud'hommes traite les litiges entre salariés et employeurs privés."
    },
    {
      "id": "ins-093",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel est le rôle de l'avocat ?",
      "choix": [
        "Conseiller et défendre une personne",
        "Représenter l'État dans le département",
        "Voter les lois",
        "Diriger une région"
      ],
      "reponse": 0,
      "explication": "L'avocat conseille et défend les personnes devant la justice."
    },
    {
      "id": "ins-094",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Que permettent les droits de la défense dans un procès ?",
      "choix": [
        "Empêcher toute audience publique",
        "Être informé des accusations et pouvoir se défendre",
        "Supprimer automatiquement la peine",
        "Remplacer le juge par le préfet"
      ],
      "reponse": 1,
      "explication": "Les droits de la défense garantissent qu'une personne puisse connaître ce qui lui est reproché. Elle doit pouvoir présenter ses arguments et être assistée si nécessaire."
    },
    {
      "id": "ins-095",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel juge peut annuler une décision administrative illégale prise par une administration ?",
      "choix": [
        "Le conseil de prud'hommes",
        "La cour d'assises",
        "Le tribunal administratif",
        "Le tribunal de commerce"
      ],
      "reponse": 2,
      "explication": "Le tribunal administratif contrôle la légalité de nombreuses décisions administratives. Il peut les annuler si elles sont contraires au droit."
    },
    {
      "id": "ins-096",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel principe du service public interdit les discriminations entre usagers ?",
      "choix": [
        "La cohabitation",
        "La dissolution",
        "La cassation",
        "L'égalité"
      ],
      "reponse": 3,
      "explication": "Le principe d'égalité impose de traiter les usagers sans discrimination injustifiée."
    },
    {
      "id": "ins-097",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel principe impose l'impartialité religieuse et politique des agents publics ?",
      "choix": [
        "La neutralité",
        "La proportionnelle",
        "La navette",
        "La destitution"
      ],
      "reponse": 0,
      "explication": "La neutralité oblige les agents publics à rester impartiaux."
    },
    {
      "id": "ins-098",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Qui contrôle l'utilisation de l'argent public ?",
      "choix": [
        "Le Défenseur des droits",
        "La Cour des comptes",
        "Le conseil municipal",
        "Le bureau de vote"
      ],
      "reponse": 1,
      "explication": "La Cour des comptes contrôle l'utilisation de l'argent public."
    },
    {
      "id": "ins-099",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelle institution donne des avis économiques, sociaux et environnementaux ?",
      "choix": [
        "La Cour de cassation",
        "Le bureau de vote",
        "Le CESE",
        "La préfecture"
      ],
      "reponse": 2,
      "explication": "Le Conseil économique, social et environnemental est consultatif."
    },
    {
      "id": "ins-100",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel type de document la Cour des comptes publie-t-elle régulièrement pour informer les citoyens ?",
      "choix": [
        "Des bulletins de vote",
        "Des actes de naissance",
        "Des permis de conduire",
        "Des rapports publics"
      ],
      "reponse": 3,
      "explication": "La Cour des comptes publie des rapports sur la gestion publique. Ces rapports contribuent à l'information des citoyens et du Parlement."
    },
    {
      "id": "ins-101",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "La carte d'électeur est-elle toujours le seul document indispensable pour voter ?",
      "choix": [
        "Non, l'inscription sur la liste électorale et une pièce d'identité peuvent suffire selon les règles applicables",
        "Oui, aucune autre preuve n'est admise",
        "Oui, elle remplace toute pièce d'identité",
        "Non, il faut obligatoirement un passeport diplomatique"
      ],
      "reponse": 0,
      "explication": "La carte d'électeur facilite les opérations de vote, mais l'essentiel est d'être inscrit sur la liste électorale. Une pièce d'identité est généralement demandée, surtout dans les communes de 1 000 habitants ou plus."
    },
    {
      "id": "ins-102",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Combien de chambres composent le Parlement français ?",
      "choix": [
        "Une",
        "Deux",
        "Trois",
        "Quatre"
      ],
      "reponse": 1,
      "explication": "Le Parlement comprend l'Assemblée nationale et le Sénat."
    },
    {
      "id": "ins-103",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quelles chambres forment le Parlement ?",
      "choix": [
        "Le Gouvernement et le Sénat",
        "La mairie et la région",
        "L'Assemblée nationale et le Sénat",
        "Le Conseil d'État et la Cour de cassation"
      ],
      "reponse": 2,
      "explication": "Le Parlement se compose de l'Assemblée nationale et du Sénat."
    },
    {
      "id": "ins-104",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Qui élit directement les députés ?",
      "choix": [
        "Les préfets",
        "Les membres du Conseil constitutionnel",
        "Les juges",
        "Les électeurs"
      ],
      "reponse": 3,
      "explication": "Les députés sont élus au suffrage universel direct."
    },
    {
      "id": "ins-105",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel mode de vote désigne le président de la République en France ?",
      "choix": [
        "Un scrutin universel direct à deux tours",
        "Un vote du seul Sénat",
        "Une nomination par le Premier ministre",
        "Un tirage au sort national"
      ],
      "reponse": 0,
      "explication": "Le président de la République est élu au suffrage universel direct. Si aucun candidat n'obtient la majorité absolue au premier tour, un second tour est organisé."
    },
    {
      "id": "ins-106",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Lors des élections législatives, que représente une circonscription ?",
      "choix": [
        "Une salle d'audience de la Cour de cassation",
        "Un territoire qui élit un député",
        "Une commune obligatoirement entière",
        "Un ministère dirigé par un préfet"
      ],
      "reponse": 1,
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
        "Le Sénat est renouvelé par moitié tous les trois ans",
        "Les sénateurs sont nommés à vie"
      ],
      "reponse": 2,
      "explication": "Les sénateurs ont un mandat de six ans. Le Sénat est renouvelé par moitié tous les trois ans, ce qui assure une certaine continuité."
    },
    {
      "id": "ins-108",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "À quelles élections un citoyen de l'Union européenne peut-il voter en France sous conditions ?",
      "choix": [
        "À la présidentielle",
        "Aux législatives",
        "Aux référendums nationaux",
        "Aux municipales et aux européennes"
      ],
      "reponse": 3,
      "explication": "Les citoyens de l'Union européenne résidant en France peuvent voter aux municipales et européennes sous conditions."
    },
    {
      "id": "ins-109",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Un citoyen européen non français peut-il voter à la présidentielle française ?",
      "choix": [
        "Non",
        "Oui, toujours",
        "Oui, après un mois en France",
        "Oui, s'il vote aux municipales"
      ],
      "reponse": 0,
      "explication": "L'élection présidentielle française est réservée aux citoyens français."
    },
    {
      "id": "ins-110",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Comment voter si l'on est absent le jour du scrutin ?",
      "choix": [
        "Par tirage au sort",
        "Par procuration",
        "Par décision du maire",
        "Par nomination préfectorale"
      ],
      "reponse": 1,
      "explication": "La procuration permet de désigner une autre personne pour voter à sa place."
    },
    {
      "id": "ins-111",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Dans un référendum, que font les électeurs ?",
      "choix": [
        "Ils élisent les préfets",
        "Ils nomment les ministres",
        "Ils répondent directement à une question",
        "Ils jugent les crimes"
      ],
      "reponse": 2,
      "explication": "Le référendum consulte directement les électeurs."
    },
    {
      "id": "ins-112",
      "theme": "institutions",
      "difficulte": "moyen",
      "question": "Quel est le rôle du juge administratif ?",
      "choix": [
        "Organiser les mariages",
        "Élire les sénateurs",
        "Commander les armées",
        "Contrôler la légalité de décisions administratives"
      ],
      "reponse": 3,
      "explication": "Le juge administratif peut annuler une décision administrative illégale."
    },
    {
      "id": "ins-113",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Que signifie l'indépendance de la justice ?",
      "choix": [
        "Les juges décident sans pression des autres pouvoirs",
        "Les juges votent les lois",
        "Les juges dirigent les régions",
        "Les juges nomment le Gouvernement"
      ],
      "reponse": 0,
      "explication": "L'indépendance de la justice est essentielle à l'État de droit."
    },
    {
      "id": "ins-114",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Que peut faire la Cour de cassation si elle constate une mauvaise application du droit ?",
      "choix": [
        "Nommer un nouveau maire",
        "Casser la décision et renvoyer l'affaire devant une autre juridiction",
        "Voter une nouvelle loi",
        "Organiser un référendum local"
      ],
      "reponse": 1,
      "explication": "La Cour de cassation contrôle l'application du droit. Si elle casse une décision, l'affaire peut être rejugée par une juridiction de renvoi."
    },
    {
      "id": "ins-115",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle juridiction examine en appel de nombreux jugements rendus par les tribunaux administratifs ?",
      "choix": [
        "La cour d'assises",
        "Le tribunal de commerce",
        "La cour administrative d'appel",
        "Le conseil de prud'hommes"
      ],
      "reponse": 2,
      "explication": "La cour administrative d'appel appartient à l'ordre administratif. Elle réexamine de nombreuses décisions des tribunaux administratifs."
    },
    {
      "id": "ins-116",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Dans un procès pénal, qui doit prouver la culpabilité ?",
      "choix": [
        "La personne poursuivie",
        "Le maire",
        "Le témoin principal",
        "L'accusation"
      ],
      "reponse": 3,
      "explication": "La culpabilité doit être prouvée ; la personne poursuivie bénéficie de la présomption d'innocence."
    },
    {
      "id": "ins-117",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quels pouvoirs distingue la séparation des pouvoirs ?",
      "choix": [
        "Exécutif, législatif et judiciaire",
        "Communal, régional et européen",
        "Fiscal, scolaire et culturel",
        "Public, privé et associatif"
      ],
      "reponse": 0,
      "explication": "La séparation des pouvoirs distingue notamment l'exécutif, le législatif et l'autorité judiciaire."
    },
    {
      "id": "ins-118",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Pourquoi la séparation des pouvoirs protège-t-elle les citoyens ?",
      "choix": [
        "Elle supprime les élections",
        "Elle évite qu'un même pouvoir concentre toutes les fonctions",
        "Elle interdit les tribunaux",
        "Elle donne tout aux communes"
      ],
      "reponse": 1,
      "explication": "La séparation des pouvoirs limite les abus de pouvoir."
    },
    {
      "id": "ins-119",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle est une caractéristique du conseil de prud'hommes ?",
      "choix": [
        "Il siège uniquement au Parlement européen",
        "Il juge les crimes avec un jury populaire",
        "Il réunit des conseillers représentant salariés et employeurs",
        "Il contrôle les fichiers informatiques de l'État"
      ],
      "reponse": 2,
      "explication": "Le conseil de prud'hommes est une juridiction paritaire. Il traite les litiges individuels du travail avec des conseillers issus des salariés et des employeurs."
    },
    {
      "id": "ins-120",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Dans un procès pénal, qui doit en principe prouver la culpabilité ?",
      "choix": [
        "Le maire de la commune",
        "La personne poursuivie elle-même",
        "Le conseil régional",
        "L'accusation"
      ],
      "reponse": 3,
      "explication": "La charge de la preuve pèse sur l'accusation. La personne poursuivie bénéficie de la présomption d'innocence tant que sa culpabilité n'est pas établie."
    },
    {
      "id": "ins-121",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Pourquoi dit-on que le CESE est consultatif ?",
      "choix": [
        "Il donne des avis mais ne vote pas la loi",
        "Il juge les crimes",
        "Il nomme les préfets",
        "Il remplace l'Assemblée nationale"
      ],
      "reponse": 0,
      "explication": "Le CESE donne des avis ; le vote de la loi appartient au Parlement."
    },
    {
      "id": "ins-122",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Pourquoi la Cour des comptes publie-t-elle des rapports ?",
      "choix": [
        "Pour imprimer les cartes électorales",
        "Pour informer sur l'utilisation de l'argent public",
        "Pour nommer les députés",
        "Pour diriger les collèges"
      ],
      "reponse": 1,
      "explication": "Ses rapports contribuent à l'information des citoyens."
    },
    {
      "id": "ins-123",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Qui protège les droits face à certaines discriminations ?",
      "choix": [
        "Le président du Sénat",
        "La région",
        "Le Défenseur des droits",
        "Le conseil municipal uniquement"
      ],
      "reponse": 2,
      "explication": "Le Défenseur des droits peut intervenir dans certains cas de discrimination."
    },
    {
      "id": "ins-124",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle institution vérifie la bonne utilisation des fonds publics ?",
      "choix": [
        "Le Conseil constitutionnel",
        "Le Défenseur des droits",
        "Le Parlement européen uniquement",
        "La Cour des comptes"
      ],
      "reponse": 3,
      "explication": "La Cour des comptes contrôle l'argent public."
    },
    {
      "id": "ins-125",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Que permet l'article 49, alinéa 3, de la Constitution ?",
      "choix": [
        "Faire adopter un texte sauf si une motion de censure est adoptée",
        "Supprimer définitivement le Sénat",
        "Nommer les maires des grandes villes",
        "Annuler une élection européenne"
      ],
      "reponse": 0,
      "explication": "Le gouvernement peut engager sa responsabilité sur un texte. Le texte est considéré comme adopté sauf si l'Assemblée nationale adopte une motion de censure."
    },
    {
      "id": "ins-126",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle assemblée peut être dissoute par le président de la République ?",
      "choix": [
        "Le Sénat",
        "L'Assemblée nationale",
        "Le Conseil constitutionnel",
        "La Cour de cassation"
      ],
      "reponse": 1,
      "explication": "La dissolution concerne l'Assemblée nationale. Elle provoque l'organisation de nouvelles élections législatives."
    },
    {
      "id": "ins-127",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Que désigne la cohabitation sous la Ve République ?",
      "choix": [
        "La réunion annuelle des maires et des préfets",
        "Le partage d'une circonscription par deux députés",
        "Une situation où le président et la majorité de l'Assemblée nationale appartiennent à des camps opposés",
        "La fusion du Sénat et de l'Assemblée nationale"
      ],
      "reponse": 2,
      "explication": "En cohabitation, le président doit tenir compte d'une majorité parlementaire opposée. Le Premier ministre est alors issu de cette majorité."
    },
    {
      "id": "ins-128",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Que se passe-t-il si une motion de censure est adoptée ?",
      "choix": [
        "Le Sénat est supprimé",
        "Le président perd sa nationalité",
        "Les communes sont dissoutes",
        "Le Gouvernement doit démissionner"
      ],
      "reponse": 3,
      "explication": "Une motion de censure adoptée renverse le Gouvernement."
    },
    {
      "id": "ins-129",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Pourquoi le 49.3 est-il lié à la censure ?",
      "choix": [
        "Un texte peut être adopté sauf si une motion de censure est votée",
        "Il élit les maires",
        "Il juge les crimes",
        "Il remplace les référendums"
      ],
      "reponse": 0,
      "explication": "Le 49.3 engage la responsabilité du Gouvernement sur un texte."
    },
    {
      "id": "ins-130",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle est la conséquence d'une dissolution de l'Assemblée nationale ?",
      "choix": [
        "Le Sénat nomme le président",
        "De nouvelles élections législatives",
        "Les maires deviennent députés",
        "La Constitution disparaît"
      ],
      "reponse": 1,
      "explication": "La dissolution entraîne de nouvelles élections législatives."
    },
    {
      "id": "ins-131",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "En cohabitation, qui dirige l'action du Gouvernement ?",
      "choix": [
        "Le président du Sénat",
        "Le Défenseur des droits",
        "Le Premier ministre",
        "Le préfet de Paris"
      ],
      "reponse": 2,
      "explication": "Même en cohabitation, le Premier ministre dirige l'action du Gouvernement."
    },
    {
      "id": "ins-132",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Qu'est-ce qu'une question prioritaire de constitutionnalité ?",
      "choix": [
        "Une question posée au maire",
        "Un vote obligatoire",
        "Une demande de carte électorale",
        "Un moyen de contester une loi au regard des droits constitutionnels"
      ],
      "reponse": 3,
      "explication": "La QPC permet de vérifier si une loi respecte des droits et libertés constitutionnels."
    },
    {
      "id": "ins-133",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quand le Conseil constitutionnel peut-il contrôler certaines lois ?",
      "choix": [
        "Avant leur promulgation",
        "Uniquement après cent ans",
        "Seulement aux municipales",
        "Jamais"
      ],
      "reponse": 0,
      "explication": "Il peut contrôler certaines lois avant leur promulgation."
    },
    {
      "id": "ins-134",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quel est le rôle d'un sénateur ?",
      "choix": [
        "Diriger une commune à la place du maire",
        "Participer au travail du Parlement et représenter les collectivités",
        "Juger les litiges du travail",
        "Contrôler les données personnelles"
      ],
      "reponse": 1,
      "explication": "Le Sénat participe au vote de la loi et représente les collectivités territoriales."
    },
    {
      "id": "ins-135",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Qui représente les collectivités territoriales au Parlement ?",
      "choix": [
        "La Cour des comptes",
        "Le conseil de prud'hommes",
        "Le Sénat",
        "Le Défenseur des droits"
      ],
      "reponse": 2,
      "explication": "Le Sénat assure la représentation des collectivités territoriales."
    },
    {
      "id": "ins-136",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle collectivité gère les lycées publics ?",
      "choix": [
        "La commune",
        "Le département",
        "Le Conseil constitutionnel",
        "La région"
      ],
      "reponse": 3,
      "explication": "La région est compétente pour les lycées publics."
    },
    {
      "id": "ins-137",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle collectivité gère les collèges publics ?",
      "choix": [
        "Le département",
        "La région",
        "La commune seulement",
        "La Cour de cassation"
      ],
      "reponse": 0,
      "explication": "Le département est compétent pour les collèges publics."
    },
    {
      "id": "ins-138",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle collectivité gère les écoles maternelles et élémentaires publiques ?",
      "choix": [
        "La région",
        "La commune",
        "Le département",
        "Le Sénat"
      ],
      "reponse": 1,
      "explication": "Les communes s'occupent des écoles maternelles et élémentaires publiques."
    },
    {
      "id": "ins-139",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle différence simple existe entre préfet et maire ?",
      "choix": [
        "Le préfet dirige la commune, le maire dirige l'État",
        "Les deux sont des juges",
        "Le préfet représente l'État, le maire dirige la commune avec le conseil municipal",
        "Les deux siègent à la Cour de cassation"
      ],
      "reponse": 2,
      "explication": "Le préfet représente l'État ; le maire est l'exécutif de la commune."
    },
    {
      "id": "ins-140",
      "theme": "institutions",
      "difficulte": "difficile",
      "question": "Quelle différence essentielle existe entre déconcentration et décentralisation ?",
      "choix": [
        "La déconcentration supprime les préfets, tandis que la décentralisation supprime les maires",
        "La déconcentration concerne seulement les tribunaux, tandis que la décentralisation concerne seulement les entreprises privées",
        "Il n'existe aucune différence juridique entre les deux",
        "La déconcentration déplace des services de l'État localement, tandis que la décentralisation confie des compétences à des collectivités élues"
      ],
      "reponse": 3,
      "explication": "La déconcentration reste dans l'organisation de l'État, avec des services locaux. La décentralisation donne des compétences à des collectivités territoriales dotées d'élus."
    },
    {
      "id": "his-001",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel événement s'est produit le 14 juillet 1789 ?",
      "choix": [
        "La prise de la Bastille",
        "Le couronnement de Napoléon",
        "La proclamation de la Ve République",
        "La fin de la Seconde Guerre mondiale"
      ],
      "reponse": 0,
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
        "Georges Clemenceau",
        "Charles de Gaulle"
      ],
      "reponse": 3,
      "explication": "Le général de Gaulle appelle depuis la BBC à poursuivre le combat contre l'Allemagne nazie. Cet appel est considéré comme l'acte fondateur de la France libre et de la Résistance."
    },
    {
      "id": "his-005",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "En quelle année l'esclavage a-t-il été définitivement aboli en France ?",
      "choix": [
        "1848",
        "1789",
        "1794",
        "1905"
      ],
      "reponse": 0,
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
        "Napoléon III",
        "Napoléon Bonaparte",
        "Robespierre"
      ],
      "reponse": 2,
      "explication": "Napoléon Bonaparte se fait sacrer empereur le 2 décembre 1804. On lui doit notamment le Code civil (1804), le franc germinal, les préfets, les lycées et la Légion d'honneur."
    },
    {
      "id": "his-008",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "En quelle année la Ve République a-t-elle été instaurée ?",
      "choix": [
        "1946",
        "1962",
        "1968",
        "1958"
      ],
      "reponse": 3,
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
        "Les lois Waldeck-Rousseau",
        "Les lois Ferry",
        "Les lois Jules Guesde",
        "Les lois Gambetta"
      ],
      "reponse": 1,
      "explication": "Portées par Jules Ferry, ministre de l'Instruction publique, ces lois instaurent la gratuité (1881) puis l'obligation scolaire et la laïcité de l'enseignement public (1882)."
    },
    {
      "id": "his-011",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Comment appelait-on le territoire correspondant en grande partie à la France actuelle avant la conquête romaine ?",
      "choix": [
        "La Germanie",
        "La Bretagne",
        "La Gaule",
        "La Dacie"
      ],
      "reponse": 2,
      "explication": "Avant la conquête romaine, une grande partie du territoire de la France actuelle était appelée la Gaule. Elle était peuplée de nombreux peuples gaulois, sans former un État unique."
    },
    {
      "id": "his-012",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Qui dirigea la résistance gauloise contre Jules César avant la défaite d'Alésia ?",
      "choix": [
        "Clovis",
        "Charlemagne",
        "Hugues Capet",
        "Vercingétorix"
      ],
      "reponse": 3,
      "explication": "Vercingétorix, chef arverne, rassembla une partie des peuples gaulois contre Jules César. Il fut vaincu à Alésia en 52 av. J.-C."
    },
    {
      "id": "his-013",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "En quelle année la bataille d'Alésia opposa-t-elle Vercingétorix à Jules César ?",
      "choix": [
        "52 av. J.-C.",
        "58 av. J.-C.",
        "55 av. J.-C.",
        "49 av. J.-C."
      ],
      "reponse": 0,
      "explication": "La bataille d'Alésia eut lieu en 52 av. J.-C. Elle marque la victoire décisive de César dans la guerre des Gaules."
    },
    {
      "id": "his-014",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel général romain conquit la Gaule au Ier siècle avant J.-C. ?",
      "choix": [
        "Auguste",
        "Jules César",
        "Pompée",
        "Néron"
      ],
      "reponse": 1,
      "explication": "Jules César mena la guerre des Gaules entre 58 et 51 av. J.-C. Cette conquête intégra progressivement la Gaule au monde romain."
    },
    {
      "id": "his-015",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quels peuples vivaient en Gaule avant la conquête romaine ?",
      "choix": [
        "Les Vikings",
        "Les Huns",
        "Les Gaulois",
        "Les Ottomans"
      ],
      "reponse": 2,
      "explication": "Les Gaulois désignent des peuples présents sur une partie du territoire avant la conquête romaine. Ce repère aide à situer les origines antiques de l'histoire de France."
    },
    {
      "id": "his-016",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que rappelle la bataille d'Alésia en 52 av. J.-C. ?",
      "choix": [
        "Le sacre de Charlemagne",
        "La prise de la Bastille",
        "La victoire de Jeanne d'Arc",
        "La défaite de Vercingétorix face à Jules César"
      ],
      "reponse": 3,
      "explication": "En 52 av. J.-C., Vercingétorix est vaincu par Jules César à Alésia. La Gaule passe ensuite durablement sous domination romaine."
    },
    {
      "id": "his-017",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Pourquoi Clovis est-il une figure importante de l'histoire de France ?",
      "choix": [
        "Il est un roi des Francs baptisé vers 496",
        "Il proclame la République",
        "Il fonde la Ve République",
        "Il signe le traité de Maastricht"
      ],
      "reponse": 0,
      "explication": "Clovis est un roi des Francs dont le baptême est traditionnellement situé vers 496. Il est associé à la construction du royaume franc."
    },
    {
      "id": "his-018",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle ville est traditionnellement liée au baptême de Clovis ?",
      "choix": [
        "Marseille",
        "Reims",
        "Bordeaux",
        "Lyon"
      ],
      "reponse": 1,
      "explication": "Clovis est baptisé à Reims selon la tradition historique. Reims deviendra ensuite une ville importante pour le sacre des rois de France."
    },
    {
      "id": "his-019",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel peuple germanique donna son nom à la France ?",
      "choix": [
        "Les Wisigoths",
        "Les Vandales",
        "Les Francs",
        "Les Huns"
      ],
      "reponse": 2,
      "explication": "Les Francs s'installèrent en Gaule à la fin de l'Antiquité. Leur nom est à l'origine de celui de la France."
    },
    {
      "id": "his-020",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel roi des Francs fut baptisé à Reims par l'évêque Rémi ?",
      "choix": [
        "Pépin le Bref",
        "Dagobert",
        "Charles Martel",
        "Clovis"
      ],
      "reponse": 3,
      "explication": "Clovis fut baptisé à Reims par l'évêque Rémi, selon la tradition. Ce baptême renforça l'alliance entre la royauté franque et l'Église catholique."
    },
    {
      "id": "his-021",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "À quel événement associe-t-on souvent Clovis ?",
      "choix": [
        "Son baptême",
        "La bataille de Waterloo",
        "L'appel du 18 juin",
        "La loi de 1905"
      ],
      "reponse": 0,
      "explication": "Le baptême de Clovis marque son rapprochement avec le christianisme. C'est un grand repère du haut Moyen Âge."
    },
    {
      "id": "his-022",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Vers quelle date situe-t-on traditionnellement le baptême de Clovis ?",
      "choix": [
        "451",
        "496",
        "476",
        "732"
      ],
      "reponse": 1,
      "explication": "Le baptême de Clovis est traditionnellement situé vers 496. La date exacte reste discutée par les historiens."
    },
    {
      "id": "his-023",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel grand repère retient-on pour Charlemagne en 800 ?",
      "choix": [
        "La proclamation de la République",
        "L'abolition de l'esclavage",
        "Son couronnement comme empereur",
        "La création de l'euro"
      ],
      "reponse": 2,
      "explication": "Charlemagne est couronné empereur en l'an 800. Son empire marque une étape majeure de l'histoire européenne."
    },
    {
      "id": "his-024",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Que marque l'année 987 dans l'histoire de France ?",
      "choix": [
        "La prise de la Bastille",
        "Le couronnement de Napoléon",
        "La fin de la Seconde Guerre mondiale",
        "L'avènement d'Hugues Capet"
      ],
      "reponse": 3,
      "explication": "En 987, Hugues Capet devient roi. Cette date marque le début traditionnel de la dynastie capétienne."
    },
    {
      "id": "his-025",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel souverain carolingien fut couronné empereur à Rome en l'an 800 ?",
      "choix": [
        "Charlemagne",
        "Clotaire II",
        "Pépin le Bref",
        "Louis le Pieux"
      ],
      "reponse": 0,
      "explication": "Charlemagne fut couronné empereur à Rome le 25 décembre 800 par le pape Léon III. Ce couronnement symbolisa le renouveau de l'Empire en Occident."
    },
    {
      "id": "his-026",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel événement de 1429 est associé à Jeanne d'Arc ?",
      "choix": [
        "La bataille d'Alésia",
        "La libération d'Orléans",
        "La loi de séparation de 1905",
        "La signature de Maastricht"
      ],
      "reponse": 1,
      "explication": "Jeanne d'Arc est associée à la levée du siège d'Orléans en 1429. Elle contribue ensuite au sacre de Charles VII."
    },
    {
      "id": "his-027",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel roi est sacré à Reims après l'action de Jeanne d'Arc ?",
      "choix": [
        "Louis XIV",
        "Henri IV",
        "Charles VII",
        "Napoléon III"
      ],
      "reponse": 2,
      "explication": "Jeanne d'Arc conduit Charles VII vers Reims pour son sacre. Cet épisode est un repère de la guerre de Cent Ans."
    },
    {
      "id": "his-028",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel roi est associé à la Renaissance française et à l'année 1515 ?",
      "choix": [
        "Clovis",
        "Hugues Capet",
        "Charles de Gaulle",
        "François Ier"
      ],
      "reponse": 3,
      "explication": "François Ier règne au XVIe siècle et incarne la Renaissance en France. La date de 1515 est souvent associée à son règne."
    },
    {
      "id": "his-029",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel roi élu en 987 inaugura la dynastie capétienne ?",
      "choix": [
        "Hugues Capet",
        "Louis VI",
        "Philippe le Bel",
        "Charles le Simple"
      ],
      "reponse": 0,
      "explication": "Hugues Capet fut élu roi en 987. Son accession au trône marque le début de la dynastie capétienne."
    },
    {
      "id": "his-030",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle dynastie régna directement sur le royaume de France après l'élection d'Hugues Capet ?",
      "choix": [
        "Les Mérovingiens",
        "Les Capétiens",
        "Les Carolingiens",
        "Les Bourbons"
      ],
      "reponse": 1,
      "explication": "Les Capétiens succédèrent aux Carolingiens à partir de 987. Leur pouvoir s'affirma progressivement autour du domaine royal."
    },
    {
      "id": "his-031",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que prévoit surtout l'ordonnance de Villers-Cotterêts de 1539 ?",
      "choix": [
        "Le droit de vote des femmes",
        "La séparation des Églises et de l'État",
        "L'usage du français dans les actes administratifs et judiciaires",
        "La création de la Sécurité sociale"
      ],
      "reponse": 2,
      "explication": "L'ordonnance de Villers-Cotterêts est un repère important pour la place du français dans l'administration. Elle est signée sous François Ier."
    },
    {
      "id": "his-032",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel roi signe l'édit de Nantes en 1598 ?",
      "choix": [
        "Louis XVI",
        "Charlemagne",
        "Louis-Philippe",
        "Henri IV"
      ],
      "reponse": 3,
      "explication": "Henri IV signe l'édit de Nantes en 1598. Ce texte vise à apaiser les guerres de Religion en accordant des droits aux protestants."
    },
    {
      "id": "his-033",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "À quel lieu Louis XIV est-il fortement associé ?",
      "choix": [
        "Versailles",
        "Alésia",
        "Waterloo",
        "Maastricht"
      ],
      "reponse": 0,
      "explication": "Louis XIV fait de Versailles le symbole de la monarchie absolue. Le château manifeste la puissance royale."
    },
    {
      "id": "his-034",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel type de monarchie Louis XIV symbolise-t-il ?",
      "choix": [
        "La République parlementaire",
        "La monarchie absolue",
        "La démocratie directe",
        "La fédération européenne"
      ],
      "reponse": 1,
      "explication": "Louis XIV, surnommé le Roi-Soleil, incarne la monarchie absolue. Le roi concentre alors l'essentiel du pouvoir politique."
    },
    {
      "id": "his-035",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que désigne le mouvement des Lumières ?",
      "choix": [
        "Une dynastie médiévale",
        "Une bataille napoléonienne",
        "Un courant qui valorise la raison, le progrès et la critique des abus",
        "Un traité européen"
      ],
      "reponse": 2,
      "explication": "Au XVIIIe siècle, les philosophes des Lumières défendent la raison, les libertés et la critique des privilèges. Leurs idées préparent les débats de la Révolution."
    },
    {
      "id": "his-036",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel philosophe des Lumières est lié à la défense de la tolérance ?",
      "choix": [
        "Colbert",
        "Ravaillac",
        "Pétain",
        "Voltaire"
      ],
      "reponse": 3,
      "explication": "Voltaire est connu pour ses combats contre l'intolérance et le fanatisme. Il fait partie des grandes figures des Lumières."
    },
    {
      "id": "his-037",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel penseur est associé à la séparation des pouvoirs ?",
      "choix": [
        "Montesquieu",
        "Clovis",
        "Jules Ferry",
        "Georges Clemenceau"
      ],
      "reponse": 0,
      "explication": "Montesquieu développe l'idée de séparation des pouvoirs. Cette notion influence la pensée politique moderne."
    },
    {
      "id": "his-038",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quelle idée politique est associée à Rousseau ?",
      "choix": [
        "La monarchie absolue",
        "La souveraineté du peuple",
        "La collaboration avec l'occupant",
        "Le droit divin du roi"
      ],
      "reponse": 1,
      "explication": "Rousseau est une figure des Lumières. Il met au centre la volonté générale et la souveraineté du peuple."
    },
    {
      "id": "his-039",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel conflit opposa durablement les royaumes de France et d'Angleterre de 1337 à 1453 ?",
      "choix": [
        "La Fronde",
        "La guerre de Trente Ans",
        "La guerre de Cent Ans",
        "La Ligue d'Augsbourg"
      ],
      "reponse": 2,
      "explication": "La guerre de Cent Ans opposa principalement la France et l'Angleterre entre 1337 et 1453. Elle fut marquée par des crises dynastiques, militaires et sociales."
    },
    {
      "id": "his-040",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle héroïne contribua à la levée du siège d'Orléans en 1429 ?",
      "choix": [
        "Aliénor d'Aquitaine",
        "Catherine de Médicis",
        "Anne de Bretagne",
        "Jeanne d'Arc"
      ],
      "reponse": 3,
      "explication": "Jeanne d'Arc joua un rôle décisif dans la levée du siège d'Orléans en 1429. Cet événement relança le camp de Charles VII."
    },
    {
      "id": "his-041",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel roi fut conduit à Reims pour être sacré grâce à l'action de Jeanne d'Arc ?",
      "choix": [
        "Charles VII",
        "Charles VI",
        "Louis XI",
        "François Ier"
      ],
      "reponse": 0,
      "explication": "Jeanne d'Arc conduisit Charles VII vers Reims, où il fut sacré en 1429. Ce sacre renforça sa légitimité face aux Anglais et aux Bourguignons."
    },
    {
      "id": "his-042",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quand commence la Révolution française ?",
      "choix": [
        "En 987",
        "En 1789",
        "En 1804",
        "En 1958"
      ],
      "reponse": 1,
      "explication": "La Révolution française commence en 1789. Elle transforme profondément la souveraineté politique, le droit et la société."
    },
    {
      "id": "his-043",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle période culturelle et artistique se développa en France au XVIe siècle sous l'influence italienne ?",
      "choix": [
        "Le romantisme",
        "Le classicisme",
        "La Renaissance",
        "La Belle Époque"
      ],
      "reponse": 2,
      "explication": "La Renaissance se développa en France au XVIe siècle, notamment sous l'influence de l'Italie. Elle toucha les arts, les sciences et les lettres."
    },
    {
      "id": "his-044",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel roi de France remporta la bataille de Marignan en 1515 ?",
      "choix": [
        "Henri II",
        "Charles IX",
        "Henri III",
        "François Ier"
      ],
      "reponse": 3,
      "explication": "François Ier remporta la bataille de Marignan en 1515. Cette victoire est l'un des repères célèbres du début de son règne."
    },
    {
      "id": "his-045",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel artiste et savant italien François Ier invita-t-il en France à la fin de sa vie ?",
      "choix": [
        "Léonard de Vinci",
        "Michel-Ange",
        "Raphaël",
        "Le Titien"
      ],
      "reponse": 0,
      "explication": "François Ier invita Léonard de Vinci en France en 1516. Léonard vécut au Clos Lucé, près d'Amboise, jusqu'à sa mort en 1519."
    },
    {
      "id": "his-046",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Que rappelle le 14 juillet 1789 ?",
      "choix": [
        "Le sacre de Clovis",
        "La prise de la Bastille",
        "La naissance de la Ve République",
        "La création de l'ONU"
      ],
      "reponse": 1,
      "explication": "Le 14 juillet 1789, la Bastille est prise à Paris. Cet événement est un symbole du début de la Révolution française."
    },
    {
      "id": "his-047",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle ordonnance de 1539 imposa le français dans les actes administratifs et judiciaires du royaume ?",
      "choix": [
        "L'édit de Nantes",
        "L'ordonnance de Blois",
        "L'ordonnance de Villers-Cotterêts",
        "L'édit de Fontainebleau"
      ],
      "reponse": 2,
      "explication": "L'ordonnance de Villers-Cotterêts fut signée en 1539 par François Ier. Elle imposa notamment l'usage du français dans les actes de justice et d'administration."
    },
    {
      "id": "his-048",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel texte est adopté le 26 août 1789 ?",
      "choix": [
        "Le Code civil",
        "Le traité de Maastricht",
        "La loi Veil",
        "La Déclaration des droits de l'homme et du citoyen"
      ],
      "reponse": 3,
      "explication": "La Déclaration des droits de l'homme et du citoyen affirme des principes fondamentaux. Elle est un repère central de la Révolution française."
    },
    {
      "id": "his-049",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quels groupes s'affrontèrent principalement pendant les guerres de Religion en France ?",
      "choix": [
        "Catholiques et protestants",
        "Royalistes et bonapartistes",
        "Jacobins et girondins",
        "Capétiens et Carolingiens"
      ],
      "reponse": 0,
      "explication": "Les guerres de Religion opposèrent principalement catholiques et protestants, appelés aussi huguenots. Elles déchirèrent le royaume dans la seconde moitié du XVIe siècle."
    },
    {
      "id": "his-050",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel massacre de protestants commença à Paris le 24 août 1572 ?",
      "choix": [
        "La Terreur blanche",
        "La Saint-Barthélemy",
        "La journée des Barricades",
        "Le massacre de Wassy"
      ],
      "reponse": 1,
      "explication": "Le massacre de la Saint-Barthélemy commença à Paris dans la nuit du 23 au 24 août 1572. Il s'étendit ensuite à plusieurs villes du royaume."
    },
    {
      "id": "his-051",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel roi promulgua l'édit de Nantes en 1598 ?",
      "choix": [
        "Louis XIII",
        "François II",
        "Henri IV",
        "Charles IX"
      ],
      "reponse": 2,
      "explication": "Henri IV promulgua l'édit de Nantes en 1598. Cet édit accordait des droits aux protestants et visait à pacifier le royaume."
    },
    {
      "id": "his-052",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Que proclame la France en 1792 ?",
      "choix": [
        "La Ve République",
        "Le Second Empire",
        "La monarchie de Juillet",
        "La Première République"
      ],
      "reponse": 3,
      "explication": "En 1792, la monarchie est abolie et la République est proclamée. C'est un repère essentiel de l'histoire politique française."
    },
    {
      "id": "his-053",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel roi est exécuté en 1793 pendant la Révolution ?",
      "choix": [
        "Louis XVI",
        "Louis XIV",
        "Henri IV",
        "Hugues Capet"
      ],
      "reponse": 0,
      "explication": "Louis XVI est exécuté en 1793. Cet événement marque une rupture majeure avec la monarchie."
    },
    {
      "id": "his-054",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Que se passe-t-il lors du coup d'État du 18 Brumaire en 1799 ?",
      "choix": [
        "La Bastille est prise",
        "Bonaparte prend le pouvoir",
        "La loi de 1905 est votée",
        "L'euro est mis en circulation"
      ],
      "reponse": 1,
      "explication": "En 1799, Bonaparte prend le pouvoir par le coup d'État du 18 Brumaire. Cet événement ouvre la période du Consulat."
    },
    {
      "id": "his-055",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel grand texte juridique est promulgué en 1804 ?",
      "choix": [
        "La Déclaration Schuman",
        "La loi de 1901",
        "Le Code civil",
        "La Constitution de 1958"
      ],
      "reponse": 2,
      "explication": "Le Code civil est promulgué en 1804. Il organise durablement le droit civil français."
    },
    {
      "id": "his-056",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle défaite de 1815 met fin au pouvoir de Napoléon Ier ?",
      "choix": [
        "Alésia",
        "Verdun",
        "Bouvines",
        "Waterloo"
      ],
      "reponse": 3,
      "explication": "Napoléon Ier est définitivement vaincu à Waterloo en 1815. Cette défaite met fin à l'Empire."
    },
    {
      "id": "his-057",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel roi de France est surnommé le Roi-Soleil ?",
      "choix": [
        "Louis XIV",
        "Louis XII",
        "Louis XIII",
        "Louis XVI"
      ],
      "reponse": 0,
      "explication": "Louis XIV est surnommé le Roi-Soleil. Son règne personnel symbolise l'apogée de la monarchie absolue en France."
    },
    {
      "id": "his-058",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Comment appelle-t-on la révolution de juillet 1830 ?",
      "choix": [
        "La Fronde",
        "Les Trois Glorieuses",
        "La Terreur",
        "Le Front populaire"
      ],
      "reponse": 1,
      "explication": "Les Trois Glorieuses sont les journées de juillet 1830 qui renversent Charles X. Elles ouvrent la monarchie de Juillet."
    },
    {
      "id": "his-059",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel château est devenu le symbole de la monarchie absolue de Louis XIV ?",
      "choix": [
        "Fontainebleau",
        "Compiègne",
        "Versailles",
        "Vincennes"
      ],
      "reponse": 2,
      "explication": "Le château de Versailles est le symbole le plus célèbre de la monarchie absolue de Louis XIV. Il servait à la fois de résidence royale et de centre du pouvoir."
    },
    {
      "id": "his-060",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Que naît en France en 1848 ?",
      "choix": [
        "La Ve République",
        "La Troisième République",
        "L'Union européenne",
        "La Deuxième République"
      ],
      "reponse": 3,
      "explication": "La révolution de 1848 entraîne la naissance de la Deuxième République. Elle s'accompagne de réformes politiques importantes."
    },
    {
      "id": "his-061",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quelle grande réforme électorale date de 1848 ?",
      "choix": [
        "Le suffrage universel masculin",
        "Le vote des femmes",
        "Le quinquennat",
        "L'élection du président au suffrage direct"
      ],
      "reponse": 0,
      "explication": "En 1848, le suffrage universel masculin est instauré. Les femmes n'obtiendront le droit de vote qu'en 1944."
    },
    {
      "id": "his-062",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel mouvement intellectuel du XVIIIe siècle défendit la raison, le progrès et la critique des abus ?",
      "choix": [
        "La Contre-Réforme",
        "Les Lumières",
        "La chevalerie",
        "L'humanisme médiéval"
      ],
      "reponse": 1,
      "explication": "Les Lumières furent un mouvement intellectuel majeur du XVIIIe siècle. Les philosophes y valorisaient la raison, les sciences et la critique des injustices."
    },
    {
      "id": "his-063",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel philosophe des Lumières est célèbre pour sa défense de la tolérance et sa critique du fanatisme ?",
      "choix": [
        "Bossuet",
        "Rabelais",
        "Voltaire",
        "Calvin"
      ],
      "reponse": 2,
      "explication": "Voltaire défendit la tolérance religieuse et combattit le fanatisme. Son action dans l'affaire Calas est souvent citée comme exemple."
    },
    {
      "id": "his-064",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel penseur des Lumières développa l'idée de séparation des pouvoirs ?",
      "choix": [
        "Diderot",
        "Condorcet",
        "Beaumarchais",
        "Montesquieu"
      ],
      "reponse": 3,
      "explication": "Montesquieu développa la théorie de la séparation des pouvoirs, notamment dans De l'esprit des lois publié en 1748. Cette idée influença durablement les régimes constitutionnels."
    },
    {
      "id": "his-065",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel ouvrage collectif du XVIIIe siècle fut dirigé notamment par Diderot et d'Alembert ?",
      "choix": [
        "L'Encyclopédie",
        "Le Contrat social",
        "Les Lettres persanes",
        "Les Provinciales"
      ],
      "reponse": 0,
      "explication": "L'Encyclopédie fut dirigée par Diderot et d'Alembert. Elle cherchait à rassembler et diffuser les connaissances de son temps."
    },
    {
      "id": "his-066",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Que décide la France en 1848 dans ses colonies ?",
      "choix": [
        "La création de l'euro",
        "L'abolition définitive de l'esclavage",
        "La séparation des Églises et de l'État",
        "La naissance de la Ve République"
      ],
      "reponse": 1,
      "explication": "L'esclavage est définitivement aboli dans les colonies françaises en 1848. Victor Schœlcher est associé à cette mesure."
    },
    {
      "id": "his-067",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Sous l'Ancien Régime, quels étaient les trois ordres de la société française ?",
      "choix": [
        "Bourgeoisie, armée et paysans",
        "Juges, marchands et artisans",
        "Clergé, noblesse et tiers état",
        "Roi, ministres et intendants"
      ],
      "reponse": 2,
      "explication": "La société d'Ancien Régime était officiellement divisée en trois ordres : le clergé, la noblesse et le tiers état. Le tiers état regroupait la majorité de la population."
    },
    {
      "id": "his-068",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel ordre de l'Ancien Régime regroupait la majorité de la population ?",
      "choix": [
        "Le clergé",
        "La noblesse",
        "La chevalerie",
        "Le tiers état"
      ],
      "reponse": 3,
      "explication": "Le tiers état regroupait l'immense majorité des Français, des paysans aux bourgeois. Le clergé et la noblesse formaient les deux ordres privilégiés."
    },
    {
      "id": "his-069",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel roi convoqua les États généraux qui s'ouvrirent en mai 1789 ?",
      "choix": [
        "Louis XVI",
        "Louis XV",
        "Louis XIV",
        "Charles X"
      ],
      "reponse": 0,
      "explication": "Louis XVI convoqua les États généraux pour tenter de résoudre la crise financière et politique du royaume. Ils s'ouvrirent à Versailles le 5 mai 1789."
    },
    {
      "id": "his-070",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel homme est associé à l'abolition de l'esclavage en 1848 ?",
      "choix": [
        "Robert Badinter",
        "Victor Schœlcher",
        "Jean Moulin",
        "Georges Clemenceau"
      ],
      "reponse": 1,
      "explication": "Victor Schœlcher joue un rôle important dans le décret d'abolition de 1848. Cette abolition concerne les colonies françaises."
    },
    {
      "id": "his-071",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Dans quelle ville les États généraux de 1789 s'ouvrirent-ils ?",
      "choix": [
        "Paris",
        "Reims",
        "Versailles",
        "Orléans"
      ],
      "reponse": 2,
      "explication": "Les États généraux s'ouvrirent à Versailles le 5 mai 1789. Le roi et la cour y résidaient alors."
    },
    {
      "id": "his-072",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel problème financier pesa fortement sur la décision de convoquer les États généraux en 1789 ?",
      "choix": [
        "La faillite des banques italiennes",
        "La disparition de la monnaie",
        "La suppression des impôts",
        "L'endettement de l'État royal"
      ],
      "reponse": 3,
      "explication": "La monarchie française faisait face à un endettement très important et à une crise fiscale. Cette situation poussa Louis XVI à convoquer les États généraux."
    },
    {
      "id": "his-073",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quelle République naît en 1870 ?",
      "choix": [
        "La Troisième République",
        "La Première République",
        "La Quatrième République",
        "La Cinquième République"
      ],
      "reponse": 0,
      "explication": "La Troisième République naît en 1870 après la chute du Second Empire. Elle dure jusqu'en 1940."
    },
    {
      "id": "his-074",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel document les Français furent invités à rédiger en 1789 pour exprimer leurs doléances ?",
      "choix": [
        "Les ordonnances royales",
        "Les cahiers de doléances",
        "Les capitulaires impériaux",
        "Les lettres de cachet"
      ],
      "reponse": 1,
      "explication": "En 1789, les Français furent invités à rédiger des cahiers de doléances. Ces textes recueillaient plaintes, demandes et propositions adressées au roi."
    },
    {
      "id": "his-075",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quelles lois rendent l'école primaire gratuite, laïque et obligatoire au début des années 1880 ?",
      "choix": [
        "Les lois Veil",
        "Les accords d'Évian",
        "Les lois Ferry",
        "Le traité de Maastricht"
      ],
      "reponse": 2,
      "explication": "Les lois Ferry de 1881-1882 organisent l'école primaire publique. Elles sont un repère majeur de l'école républicaine."
    },
    {
      "id": "his-076",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que rappelle l'affaire Dreyfus ?",
      "choix": [
        "La création de l'euro",
        "La construction de Versailles",
        "La fin de la guerre d'Algérie",
        "Une grave affaire judiciaire et politique liée à l'antisémitisme"
      ],
      "reponse": 3,
      "explication": "L'affaire Dreyfus divise la France à la fin du XIXe siècle. Elle pose des questions de justice, de vérité et d'antisémitisme."
    },
    {
      "id": "his-077",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle fut la conséquence principale de la défaite gauloise à Alésia ?",
      "choix": [
        "La domination romaine s'imposa durablement en Gaule",
        "La naissance du royaume des Francs",
        "La fondation de Paris par les Romains",
        "Le départ immédiat de Jules César pour l'Égypte"
      ],
      "reponse": 0,
      "explication": "Après Alésia, la résistance organisée des Gaulois fut brisée. La Gaule fut progressivement intégrée au monde romain."
    },
    {
      "id": "his-078",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Que dénonce l'affaire Dreyfus ?",
      "choix": [
        "L'abolition des privilèges",
        "La condamnation injuste d'un officier juif",
        "La défaite de Waterloo",
        "La mise en circulation de l'euro"
      ],
      "reponse": 1,
      "explication": "Alfred Dreyfus est condamné injustement avant d'être réhabilité. L'affaire devient un symbole de combat pour la justice."
    },
    {
      "id": "his-079",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que désigne la romanisation de la Gaule ?",
      "choix": [
        "L'expulsion de tous les Gaulois vers Rome",
        "La conversion immédiate de la Gaule à l'islam",
        "L'adoption progressive de la langue, du droit et des modes de vie romains",
        "La destruction de toutes les villes gauloises"
      ],
      "reponse": 2,
      "explication": "La romanisation correspond à l'intégration culturelle et politique de la Gaule à l'Empire romain. Elle se traduit notamment par le latin, les routes, les villes et le droit romain."
    },
    {
      "id": "his-080",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que décide la loi de 1905 ?",
      "choix": [
        "Le droit de vote des femmes",
        "L'abolition de la peine de mort",
        "La création de la Sécurité sociale",
        "La séparation des Églises et de l'État"
      ],
      "reponse": 3,
      "explication": "La loi de 1905 organise la séparation des Églises et de l'État. Elle est un repère majeur de la laïcité française."
    },
    {
      "id": "his-081",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelles années couvrent la Première Guerre mondiale ?",
      "choix": [
        "1914-1918",
        "1789-1792",
        "1939-1945",
        "1954-1962"
      ],
      "reponse": 0,
      "explication": "La Première Guerre mondiale dure de 1914 à 1918. Elle marque profondément la France et l'Europe."
    },
    {
      "id": "his-082",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel repère ancien oppose Vercingétorix à Jules César ?",
      "choix": [
        "Waterloo",
        "Alésia",
        "Verdun",
        "Maastricht"
      ],
      "reponse": 1,
      "explication": "La bataille d'Alésia, en 52 av. J.-C., oppose Vercingétorix à Jules César. C'est un repère simple de l'Antiquité en Gaule."
    },
    {
      "id": "his-083",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que commémore le 11 novembre ?",
      "choix": [
        "La prise de la Bastille",
        "L'appel du 18 juin",
        "L'armistice de 1918",
        "La loi de 1905"
      ],
      "reponse": 2,
      "explication": "Le 11 novembre commémore l'armistice qui met fin aux combats de la Première Guerre mondiale. C'est un jour de mémoire nationale."
    },
    {
      "id": "his-084",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que retient-on surtout de l'année 800 ?",
      "choix": [
        "La prise de la Bastille",
        "La loi de 1905",
        "La naissance de la Ve République",
        "Le couronnement de Charlemagne empereur"
      ],
      "reponse": 3,
      "explication": "Charlemagne est couronné empereur en l'an 800. Ce repère est plus important à mémoriser que les détails de partage de son empire."
    },
    {
      "id": "his-085",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle bataille de 1916 symbolise les souffrances de la Première Guerre mondiale en France ?",
      "choix": [
        "Verdun",
        "Alésia",
        "Waterloo",
        "Marignan"
      ],
      "reponse": 0,
      "explication": "Verdun, en 1916, est devenue un symbole de la résistance et des souffrances des soldats. Elle appartient aux grands repères de la Grande Guerre."
    },
    {
      "id": "his-086",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Comment appelle-t-on familièrement les soldats français de 1914-1918 ?",
      "choix": [
        "Les huguenots",
        "Les poilus",
        "Les sans-culottes",
        "Les préfets"
      ],
      "reponse": 1,
      "explication": "Les soldats français de la Première Guerre mondiale sont souvent appelés les poilus. Le terme est associé à la mémoire de 1914-1918."
    },
    {
      "id": "his-087",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle année est associée au Front populaire ?",
      "choix": [
        "1804",
        "1870",
        "1936",
        "2002"
      ],
      "reponse": 2,
      "explication": "Le Front populaire arrive au pouvoir en 1936. Il est notamment associé aux congés payés et à des avancées sociales."
    },
    {
      "id": "his-088",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelles années couvrent la Seconde Guerre mondiale ?",
      "choix": [
        "1914-1918",
        "1848-1870",
        "1958-1962",
        "1939-1945"
      ],
      "reponse": 3,
      "explication": "La Seconde Guerre mondiale dure de 1939 à 1945. Elle comprend l'Occupation, Vichy, la Résistance et la Libération."
    },
    {
      "id": "his-089",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Qui lance l'appel du 18 juin 1940 ?",
      "choix": [
        "Charles de Gaulle",
        "Philippe Pétain",
        "Louis XIV",
        "François Mitterrand"
      ],
      "reponse": 0,
      "explication": "Le général de Gaulle appelle depuis Londres à poursuivre le combat. Cet appel est un acte fondateur de la France libre."
    },
    {
      "id": "his-090",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que désigne le régime de Vichy ?",
      "choix": [
        "La Première République",
        "Le régime dirigé par le maréchal Pétain pendant l'Occupation",
        "Le gouvernement de la Commune",
        "La monarchie absolue"
      ],
      "reponse": 1,
      "explication": "Après la défaite de 1940, le régime de Vichy est dirigé par Philippe Pétain. Il mène une politique de collaboration avec l'Allemagne nazie."
    },
    {
      "id": "his-091",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle politique Vichy mène-t-il envers l'Allemagne nazie ?",
      "choix": [
        "La neutralité républicaine",
        "La décolonisation",
        "La collaboration",
        "La construction européenne"
      ],
      "reponse": 2,
      "explication": "Le régime de Vichy collabore avec l'Allemagne nazie. Cette période est abordée avec un devoir de mémoire et de vérité historique."
    },
    {
      "id": "his-092",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que désigne la Résistance pendant la Seconde Guerre mondiale ?",
      "choix": [
        "La monarchie de Louis XIV",
        "Le régime de Napoléon Ier",
        "La signature de Maastricht",
        "Les actions contre l'Occupation et Vichy"
      ],
      "reponse": 3,
      "explication": "La Résistance regroupe des mouvements et réseaux qui luttent contre l'occupant nazi et Vichy. Elle joue un rôle important dans la Libération."
    },
    {
      "id": "his-093",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Qui est Jean Moulin ?",
      "choix": [
        "Un résistant chargé d'unifier la Résistance intérieure",
        "Un roi capétien",
        "Un philosophe des Lumières",
        "Un président de la Ve République"
      ],
      "reponse": 0,
      "explication": "Jean Moulin est envoyé par de Gaulle pour unifier la Résistance intérieure. Il demeure une grande figure de la Résistance."
    },
    {
      "id": "his-094",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que signifie le mot Shoah ?",
      "choix": [
        "La Révolution française",
        "L'extermination des Juifs d'Europe par les nazis",
        "La guerre de Cent Ans",
        "La création de l'ONU"
      ],
      "reponse": 1,
      "explication": "La Shoah désigne le génocide des Juifs d'Europe par les nazis. C'est un repère majeur de la Seconde Guerre mondiale."
    },
    {
      "id": "his-095",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel débarquement du 6 juin 1944 contribue à libérer la France ?",
      "choix": [
        "Le débarquement d'Alger",
        "La bataille d'Alésia",
        "Le débarquement de Normandie",
        "La prise de la Bastille"
      ],
      "reponse": 2,
      "explication": "Le 6 juin 1944, les Alliés débarquent en Normandie. Cette opération ouvre la voie à la Libération de la France."
    },
    {
      "id": "his-096",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle ville française est libérée en août 1944 ?",
      "choix": [
        "Rome",
        "Berlin",
        "Madrid",
        "Paris"
      ],
      "reponse": 3,
      "explication": "Paris est libérée en août 1944 avec l'entrée de la 2e DB du général Leclerc. Cet épisode symbolise la Libération."
    },
    {
      "id": "his-097",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que commémore le 8 mai 1945 ?",
      "choix": [
        "La victoire sur l'Allemagne nazie en Europe",
        "Le début de la Révolution",
        "La naissance de la Ve République",
        "La signature de Maastricht"
      ],
      "reponse": 0,
      "explication": "Le 8 mai 1945 marque la capitulation allemande en Europe. En France, c'est une date de commémoration de la fin de la guerre en Europe."
    },
    {
      "id": "his-098",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel droit est accordé aux femmes françaises en 1944 ?",
      "choix": [
        "Le service militaire obligatoire",
        "Le droit de vote et d'éligibilité",
        "Le droit de sacre royal",
        "Le droit de créer l'euro"
      ],
      "reponse": 1,
      "explication": "En 1944, les femmes françaises obtiennent le droit de vote et d'éligibilité. Elles votent pour la première fois en 1945."
    },
    {
      "id": "his-099",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle organisation internationale est créée en 1945 ?",
      "choix": [
        "L'Union européenne",
        "La Banque centrale européenne",
        "L'Organisation des Nations unies",
        "Le Conseil constitutionnel"
      ],
      "reponse": 2,
      "explication": "L'ONU est créée en 1945 après la Seconde Guerre mondiale. Elle vise à favoriser la paix et la coopération entre États."
    },
    {
      "id": "his-100",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle institution sociale française est mise en place en 1945 ?",
      "choix": [
        "Le Sénat",
        "Le Code civil",
        "La monarchie de Juillet",
        "La Sécurité sociale"
      ],
      "reponse": 3,
      "explication": "La Sécurité sociale est mise en place en 1945. Elle protège notamment contre certains risques sociaux comme la maladie ou la vieillesse."
    },
    {
      "id": "his-101",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel mouvement intellectuel de la Renaissance remet à l'honneur l'étude des textes antiques et la dignité de l'être humain ?",
      "choix": [
        "L'humanisme",
        "Le mercantilisme",
        "Le jacobinisme",
        "Le romantisme"
      ],
      "reponse": 0,
      "explication": "L'humanisme valorise l'éducation, les langues anciennes et l'étude des auteurs antiques. Il occupe une place centrale dans la Renaissance européenne."
    },
    {
      "id": "his-102",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle République commence en 1946 ?",
      "choix": [
        "La Première République",
        "La Quatrième République",
        "La Deuxième République",
        "La Cinquième République"
      ],
      "reponse": 1,
      "explication": "La Quatrième République débute en 1946. Elle précède la Constitution de 1958 et la Ve République."
    },
    {
      "id": "his-103",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle République est instaurée en 1958 ?",
      "choix": [
        "La Troisième République",
        "La Quatrième République",
        "La Cinquième République",
        "La Deuxième République"
      ],
      "reponse": 2,
      "explication": "La Ve République est instaurée en 1958. C'est le régime politique actuel de la France."
    },
    {
      "id": "his-104",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel roi signa l'ordonnance de Villers-Cotterêts en 1539 ?",
      "choix": [
        "Henri IV",
        "Louis XIV",
        "Charles IX",
        "François Ier"
      ],
      "reponse": 3,
      "explication": "François Ier signa l'ordonnance de Villers-Cotterêts en 1539. Ce texte est notamment célèbre pour le rôle qu'il donne au français dans les actes officiels."
    },
    {
      "id": "his-105",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Comment appelait-on souvent les protestants français aux XVIe et XVIIe siècles ?",
      "choix": [
        "Les huguenots",
        "Les sans-culottes",
        "Les Girondins",
        "Les Templiers"
      ],
      "reponse": 0,
      "explication": "Les protestants français furent souvent appelés huguenots. Ils furent au cœur des tensions religieuses du XVIe siècle."
    },
    {
      "id": "his-106",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Qui est le premier président de la Ve République ?",
      "choix": [
        "Jules Ferry",
        "Charles de Gaulle",
        "Henri IV",
        "Robert Badinter"
      ],
      "reponse": 1,
      "explication": "Charles de Gaulle joue un rôle central dans la naissance de la Ve République. Il en devient le premier président."
    },
    {
      "id": "his-107",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel était l'objectif principal de l'édit de Nantes de 1598 ?",
      "choix": [
        "Instaurer le calendrier révolutionnaire",
        "Supprimer les États généraux",
        "Accorder des droits encadrés aux protestants pour rétablir la paix religieuse",
        "Rattacher la Bretagne au royaume"
      ],
      "reponse": 2,
      "explication": "L'édit de Nantes accorda aux protestants une liberté de culte limitée et des garanties politiques. Il visait à mettre fin aux guerres de Religion."
    },
    {
      "id": "his-108",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que change la réforme constitutionnelle de 1962 ?",
      "choix": [
        "L'abolition de l'esclavage",
        "La création du Code civil",
        "La fin de l'euro",
        "L'élection du président au suffrage universel direct"
      ],
      "reponse": 3,
      "explication": "Depuis la réforme de 1962, le président de la République est élu au suffrage universel direct. C'est un repère majeur de la Ve République."
    },
    {
      "id": "his-109",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle année marque l'indépendance de l'Algérie ?",
      "choix": [
        "1962",
        "1918",
        "1944",
        "2002"
      ],
      "reponse": 0,
      "explication": "L'Algérie devient indépendante en 1962, après la guerre d'Algérie. Cette date est un repère de la décolonisation."
    },
    {
      "id": "his-110",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quels accords ouvrent la voie à la fin de la guerre d'Algérie ?",
      "choix": [
        "Les accords de Munich",
        "Les accords d'Évian",
        "Le traité de Versailles",
        "Le traité de Maastricht"
      ],
      "reponse": 1,
      "explication": "Les accords d'Évian sont signés en 1962. Ils ouvrent la voie au cessez-le-feu et à l'indépendance de l'Algérie."
    },
    {
      "id": "his-111",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Que désigne Mai 68 ?",
      "choix": [
        "Une bataille médiévale",
        "Une loi sur la laïcité",
        "Un mouvement de contestation étudiante et sociale",
        "Un traité européen"
      ],
      "reponse": 2,
      "explication": "Mai 68 est un mouvement de contestation étudiante et sociale. Il marque la société française contemporaine."
    },
    {
      "id": "his-112",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle loi de 1975 est associée à Simone Veil ?",
      "choix": [
        "La loi de séparation des Églises et de l'État",
        "La loi sur l'euro",
        "La loi Ferry",
        "La loi légalisant l'interruption volontaire de grossesse"
      ],
      "reponse": 3,
      "explication": "La loi Veil de 1975 légalise l'IVG. Elle constitue un repère important de l'histoire des droits des femmes."
    },
    {
      "id": "his-113",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Pourquoi Versailles servit-il aussi d'instrument politique sous Louis XIV ?",
      "choix": [
        "Parce qu'il permettait de rassembler et contrôler la noblesse autour du roi",
        "Parce qu'il remplaçait les États généraux permanents",
        "Parce qu'il était le siège du Parlement européen",
        "Parce qu'il abritait les légions romaines"
      ],
      "reponse": 0,
      "explication": "La cour de Versailles mettait la noblesse sous le regard du roi et organisait la hiérarchie sociale autour de lui. Le château symbolisait aussi la puissance monarchique."
    },
    {
      "id": "his-114",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Qui devient président de la République en 1981 ?",
      "choix": [
        "Charles de Gaulle",
        "François Mitterrand",
        "Jacques Chirac",
        "Nicolas Sarkozy"
      ],
      "reponse": 1,
      "explication": "François Mitterrand est élu président en 1981. Son élection marque une alternance politique sous la Ve République."
    },
    {
      "id": "his-115",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle conception du pouvoir caractérise le mieux la monarchie de Louis XIV ?",
      "choix": [
        "La démocratie parlementaire",
        "La république fédérale",
        "La monarchie absolue de droit divin",
        "La monarchie élective"
      ],
      "reponse": 2,
      "explication": "Louis XIV incarne la monarchie absolue, où le roi concentre l'essentiel du pouvoir. Le droit divin affirme que son autorité vient de Dieu."
    },
    {
      "id": "his-116",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle idée politique est associée à Montesquieu ?",
      "choix": [
        "La monarchie absolue",
        "La collaboration",
        "L'abolition de l'euro",
        "La séparation des pouvoirs"
      ],
      "reponse": 3,
      "explication": "Montesquieu est une grande figure des Lumières. Il est surtout connu pour l'idée de séparation des pouvoirs."
    },
    {
      "id": "his-117",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Qui porte l'abolition de la peine de mort en 1981 ?",
      "choix": [
        "Robert Badinter",
        "Jean Moulin",
        "Victor Schœlcher",
        "Jules Ferry"
      ],
      "reponse": 0,
      "explication": "Robert Badinter, garde des Sceaux, porte la loi abolissant la peine de mort. Elle est adoptée sous la présidence de François Mitterrand."
    },
    {
      "id": "his-118",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle idée Rousseau met-il en avant ?",
      "choix": [
        "Le droit divin du roi",
        "La souveraineté du peuple",
        "La conquête de la Gaule",
        "La monarchie absolue"
      ],
      "reponse": 1,
      "explication": "Rousseau est une figure des Lumières. Il associe la légitimité politique à la souveraineté du peuple."
    },
    {
      "id": "his-119",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel était l'un des buts de l'Encyclopédie au XVIIIe siècle ?",
      "choix": [
        "Remplacer les cathédrales par des palais",
        "Codifier les lois de Napoléon",
        "Rassembler et diffuser les connaissances selon l'esprit critique des Lumières",
        "Organiser les armées de croisade"
      ],
      "reponse": 2,
      "explication": "L'Encyclopédie visait à réunir les savoirs de son temps et à les rendre accessibles. Elle reflète l'esprit critique et la confiance dans la raison des Lumières."
    },
    {
      "id": "his-120",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Que critiquaient fréquemment les philosophes des Lumières dans la société d'Ancien Régime ?",
      "choix": [
        "La chute de l'Empire romain",
        "La construction des cathédrales gothiques",
        "La découverte de l'imprimerie",
        "L'absolutisme, l'intolérance et les privilèges"
      ],
      "reponse": 3,
      "explication": "Les Lumières remettent en cause l'arbitraire, le fanatisme religieux et les inégalités juridiques. Leurs idées nourrissent les débats politiques du XVIIIe siècle."
    },
    {
      "id": "his-121",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Sous l'Ancien Régime, quels ordres bénéficiaient généralement de privilèges fiscaux importants ?",
      "choix": [
        "Le clergé et la noblesse",
        "Les ouvriers et les paysans",
        "Les soldats et les marins",
        "Les étudiants et les artisans"
      ],
      "reponse": 0,
      "explication": "Le clergé et la noblesse formaient les deux ordres privilégiés. Le tiers état supportait une grande part des impôts."
    },
    {
      "id": "his-122",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "En juin 1789, quelle assemblée les députés du tiers état proclamèrent-ils représenter ?",
      "choix": [
        "Le Sénat impérial",
        "L'Assemblée nationale",
        "Le Parlement de Paris",
        "Le Directoire"
      ],
      "reponse": 1,
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
        "De ne pas se séparer avant d'avoir donné une constitution à la France",
        "De couronner Louis XVI empereur"
      ],
      "reponse": 2,
      "explication": "Le serment du Jeu de paume exprime la volonté des députés de poursuivre leur mission constituante. Il marque une étape décisive dans l'affirmation de la souveraineté nationale."
    },
    {
      "id": "his-124",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que décida principalement la nuit du 4 août 1789 ?",
      "choix": [
        "La restauration de l'esclavage",
        "La fondation de l'Empire",
        "La signature du traité de Verdun",
        "L'abolition des privilèges féodaux"
      ],
      "reponse": 3,
      "explication": "Dans la nuit du 4 août, l'Assemblée vota la suppression des privilèges et des droits féodaux. Cet événement marque la fin juridique de l'Ancien Régime social."
    },
    {
      "id": "his-125",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel principe figure dans la Déclaration des droits de l'homme et du citoyen de 1789 ?",
      "choix": [
        "Les hommes naissent et demeurent libres et égaux en droits",
        "La supériorité héréditaire de la noblesse",
        "Le rétablissement du servage",
        "L'interdiction de toute propriété"
      ],
      "reponse": 0,
      "explication": "La Déclaration de 1789 proclame l'égalité en droits, la liberté et la souveraineté de la nation. Elle est un texte fondateur de la Révolution française."
    },
    {
      "id": "his-126",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel traité européen est signé en 1992 ?",
      "choix": [
        "L'édit de Nantes",
        "Le traité de Maastricht",
        "Le Code civil",
        "Les accords d'Évian"
      ],
      "reponse": 1,
      "explication": "Le traité de Maastricht est signé en 1992. Il marque une étape importante de la construction européenne."
    },
    {
      "id": "his-127",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Que se passe-t-il en France en 2002 concernant l'euro ?",
      "choix": [
        "La Révolution commence",
        "La Ve République naît",
        "Les billets et pièces en euros sont mis en circulation",
        "L'esclavage est aboli"
      ],
      "reponse": 2,
      "explication": "En 2002, les billets et pièces en euros remplacent le franc dans la vie quotidienne. C'est l'euro fiduciaire."
    },
    {
      "id": "his-128",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quelle décision de septembre 1792 marque la naissance de la Première République ?",
      "choix": [
        "La convocation des États généraux",
        "La mort de Richelieu",
        "La construction de Chambord",
        "L'abolition de la royauté"
      ],
      "reponse": 3,
      "explication": "La Convention nationale abolit la royauté le 21 septembre 1792. Le lendemain devint le premier jour de l'an I du calendrier républicain."
    },
    {
      "id": "his-129",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "En quelle année Louis XVI est-il exécuté ?",
      "choix": [
        "1793",
        "1789",
        "1804",
        "1958"
      ],
      "reponse": 0,
      "explication": "Louis XVI est exécuté en 1793 pendant la Révolution française. Ce repère marque la rupture avec la monarchie."
    },
    {
      "id": "his-130",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quelle loi de 2013 ouvre de nouveaux droits au mariage ?",
      "choix": [
        "La loi de 1905",
        "La loi ouvrant le mariage aux couples de même sexe",
        "Les lois Ferry",
        "La loi de 1848"
      ],
      "reponse": 1,
      "explication": "La loi de 2013 ouvre le mariage aux couples de même sexe. C'est un repère récent de l'évolution du droit civil."
    },
    {
      "id": "his-131",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel texte de 1804 a durablement organisé le droit civil français sous le Consulat puis l'Empire ?",
      "choix": [
        "La loi de séparation des Églises et de l'État",
        "Le traité de Versailles",
        "Le Code civil",
        "La Charte de 1830"
      ],
      "reponse": 2,
      "explication": "Le Code civil, promulgué en 1804, unifie de nombreuses règles de droit privé en France. Il traite notamment de la famille, de la propriété et des contrats."
    },
    {
      "id": "his-132",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle fonction administrative créée sous Napoléon Bonaparte représente l'État dans les départements ?",
      "choix": [
        "Le maire élu au suffrage universel direct",
        "Le président de région",
        "Le député européen",
        "Le préfet"
      ],
      "reponse": 3,
      "explication": "Les préfets sont institués en 1800 pour représenter le pouvoir central dans les départements. Ils restent aujourd'hui des acteurs importants de l'administration de l'État."
    },
    {
      "id": "his-133",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel événement tragique marque la France en 2015 ?",
      "choix": [
        "Des attentats terroristes meurtriers",
        "La bataille de Waterloo",
        "Le sacre de Charlemagne",
        "La signature de l'édit de Nantes"
      ],
      "reponse": 0,
      "explication": "La France est frappée par des attentats terroristes en 2015. Ces événements sont abordés avec neutralité et mémoire des victimes."
    },
    {
      "id": "his-134",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel monument brûle gravement à Paris en avril 2019 ?",
      "choix": [
        "Le château de Versailles",
        "Notre-Dame de Paris",
        "Le Panthéon",
        "L'Arc de Triomphe"
      ],
      "reponse": 1,
      "explication": "La cathédrale Notre-Dame de Paris est gravement endommagée par un incendie en 2019. Sa restauration devient un événement national."
    },
    {
      "id": "his-135",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle défaite de 1815 marque la fin définitive du pouvoir de Napoléon Ier ?",
      "choix": [
        "Iéna",
        "Marengo",
        "Waterloo",
        "Wagram"
      ],
      "reponse": 2,
      "explication": "Napoléon est vaincu à Waterloo le 18 juin 1815 par les armées coalisées. Cette défaite met fin aux Cent-Jours et conduit à son exil."
    },
    {
      "id": "his-136",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel événement sportif majeur Paris accueille-t-elle en 2024 ?",
      "choix": [
        "La Coupe du monde 1998",
        "L'Exposition universelle de 1889",
        "Le traité de Maastricht",
        "Les Jeux olympiques et paralympiques"
      ],
      "reponse": 3,
      "explication": "Paris accueille les Jeux olympiques et paralympiques en 2024. C'est un repère récent de portée internationale."
    },
    {
      "id": "his-137",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel château symbolise la monarchie absolue de Louis XIV ?",
      "choix": [
        "Versailles",
        "Chambord",
        "Fontainebleau",
        "Chenonceau"
      ],
      "reponse": 0,
      "explication": "Versailles est le symbole le plus connu du pouvoir de Louis XIV. La cour y manifeste la grandeur de la monarchie."
    },
    {
      "id": "his-138",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Comment appelle-t-on les journées révolutionnaires de juillet 1830 qui renversent Charles X ?",
      "choix": [
        "Les journées de Juin",
        "Les Trois Glorieuses",
        "La Semaine sanglante",
        "La Terreur blanche"
      ],
      "reponse": 1,
      "explication": "Les Trois Glorieuses se déroulent les 27, 28 et 29 juillet 1830. Elles entraînent la chute de Charles X et l'installation de la monarchie de Juillet."
    },
    {
      "id": "his-139",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel souverain règne sur la France pendant la monarchie de Juillet ?",
      "choix": [
        "Louis XVIII",
        "Charles X",
        "Louis-Philippe",
        "Napoléon III"
      ],
      "reponse": 2,
      "explication": "Louis-Philippe devient roi des Français en 1830. Son régime, appelé monarchie de Juillet, dure jusqu'à la révolution de 1848."
    },
    {
      "id": "his-140",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle grande réforme électorale accompagne la naissance de la IIe République en 1848 ?",
      "choix": [
        "Le vote réservé aux propriétaires",
        "Le vote obligatoire",
        "Le suffrage universel féminin",
        "Le suffrage universel masculin"
      ],
      "reponse": 3,
      "explication": "La IIe République instaure le suffrage universel masculin en 1848. Tous les hommes majeurs peuvent alors voter, sans condition de richesse."
    },
    {
      "id": "his-141",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel homme politique est particulièrement associé au décret qui abolit l'esclavage dans les colonies françaises en 1848 ?",
      "choix": [
        "Victor Schoelcher",
        "Adolphe Thiers",
        "Jules Ferry",
        "Georges Clemenceau"
      ],
      "reponse": 0,
      "explication": "Victor Schoelcher joue un rôle majeur dans la préparation du décret d'abolition de 1848. Cette mesure concerne les colonies françaises où l'esclavage existait encore."
    },
    {
      "id": "his-142",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel dirigeant fonde le Second Empire après avoir été président de la IIe République ?",
      "choix": [
        "Louis XVIII",
        "Napoléon III",
        "Charles X",
        "Adolphe Thiers"
      ],
      "reponse": 1,
      "explication": "Louis-Napoléon Bonaparte est élu président en 1848, puis réalise un coup d'État en 1851. Il devient Napoléon III et fonde le Second Empire."
    },
    {
      "id": "his-143",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel texte de 1789 proclame des droits fondamentaux ?",
      "choix": [
        "Le traité de Maastricht",
        "L'édit de Nantes",
        "La Déclaration des droits de l'homme et du citoyen",
        "Les accords d'Évian"
      ],
      "reponse": 2,
      "explication": "La Déclaration de 1789 affirme notamment la liberté et l'égalité en droits. Elle reste un repère central de la culture républicaine."
    },
    {
      "id": "his-144",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Que provoque la défaite française de 1870 ?",
      "choix": [
        "La naissance de la Ve République",
        "Le couronnement de Charlemagne",
        "La signature de Maastricht",
        "La chute du Second Empire"
      ],
      "reponse": 3,
      "explication": "La défaite de 1870 entraîne la chute du Second Empire. Elle ouvre la voie à la Troisième République."
    },
    {
      "id": "his-145",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Que signifie l'abolition de l'esclavage en 1848 ?",
      "choix": [
        "La fin légale de l'esclavage dans les colonies françaises",
        "La fin de la monarchie absolue en 1789",
        "La création de l'euro",
        "La naissance de la Ve République"
      ],
      "reponse": 0,
      "explication": "En 1848, la France abolit définitivement l'esclavage dans ses colonies. Cette décision est un repère majeur de l'histoire des libertés."
    },
    {
      "id": "his-146",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Que proclame-t-on à Paris le 4 septembre 1870, après l'annonce de la défaite de Sedan ?",
      "choix": [
        "Le retour de la monarchie absolue",
        "La IIIe République",
        "La création du Consulat",
        "L'annexion de l'Alsace-Lorraine"
      ],
      "reponse": 1,
      "explication": "La IIIe République est proclamée le 4 septembre 1870 à Paris. Elle s'installe dans un contexte difficile, marqué par la guerre et l'instabilité politique."
    },
    {
      "id": "his-147",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel principe institutionnel la loi de 1905 affirme-t-elle en France ?",
      "choix": [
        "La restauration de la monarchie",
        "La suppression des communes",
        "La séparation des Églises et de l'État",
        "La création de l'Empire colonial"
      ],
      "reponse": 2,
      "explication": "La loi de 1905 établit la séparation des Églises et de l'État. Elle est une étape majeure dans l'affirmation de la laïcité républicaine."
    },
    {
      "id": "his-148",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle guerre se termine pour la France par l'armistice du 11 novembre 1918 ?",
      "choix": [
        "La Seconde Guerre mondiale",
        "La guerre d'Algérie",
        "La guerre de Cent Ans",
        "La Première Guerre mondiale"
      ],
      "reponse": 3,
      "explication": "L'armistice du 11 novembre 1918 met fin aux combats de la Première Guerre mondiale. Cette date est commémorée chaque année."
    },
    {
      "id": "his-149",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel écrivain publie « J'accuse...! » pendant l'affaire Dreyfus ?",
      "choix": [
        "Émile Zola",
        "Victor Hugo",
        "Marcel Proust",
        "Albert Camus"
      ],
      "reponse": 0,
      "explication": "Émile Zola publie « J'accuse...! » en 1898 pour défendre Alfred Dreyfus. L'affaire révèle de fortes tensions autour de l'antisémitisme, de l'armée et de la justice."
    },
    {
      "id": "his-150",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel régime français siège à Vichy pendant la Seconde Guerre mondiale ?",
      "choix": [
        "La Cinquième République",
        "L'État français dirigé par Pétain",
        "La Commune de Paris",
        "Le Consulat"
      ],
      "reponse": 1,
      "explication": "Le régime de Vichy, appelé État français, remplace la République après la défaite de 1940. Il collabore avec l'Allemagne nazie."
    },
    {
      "id": "his-151",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel homme politique français est surnommé « le Père la Victoire » après la Première Guerre mondiale ?",
      "choix": [
        "Jules Grévy",
        "Adolphe Thiers",
        "Georges Clemenceau",
        "Pierre Mendès France"
      ],
      "reponse": 2,
      "explication": "Georges Clemenceau dirige le gouvernement français à partir de 1917. Son rôle pendant la fin de la guerre lui vaut le surnom de « Père la Victoire »."
    },
    {
      "id": "his-152",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel général refuse la défaite en juin 1940 depuis Londres ?",
      "choix": [
        "Napoléon Ier",
        "Louis XVI",
        "Jules Ferry",
        "Charles de Gaulle"
      ],
      "reponse": 3,
      "explication": "De Gaulle refuse l'armistice et appelle à continuer le combat. Son appel du 18 juin devient un grand symbole de la Résistance."
    },
    {
      "id": "his-153",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle bataille de 1916 est devenue un symbole de la résistance et des souffrances des soldats français ?",
      "choix": [
        "Verdun",
        "Austerlitz",
        "Waterloo",
        "Bouvines"
      ],
      "reponse": 0,
      "explication": "Verdun dure de février à décembre 1916. La bataille symbolise l'extrême violence de la guerre de tranchées."
    },
    {
      "id": "his-154",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Comment appelle-t-on familièrement les soldats français de la Première Guerre mondiale ?",
      "choix": [
        "Les grognards",
        "Les poilus",
        "Les hussards",
        "Les tirailleurs"
      ],
      "reponse": 1,
      "explication": "Les soldats français de 1914-1918 sont souvent appelés les poilus. Ce terme évoque leur endurance et les conditions difficiles du front."
    },
    {
      "id": "his-155",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle date commémore l'armistice qui met fin aux combats de la Première Guerre mondiale ?",
      "choix": [
        "Le 14 juillet 1789",
        "Le 8 mai 1945",
        "Le 11 novembre 1918",
        "Le 2 décembre 1805"
      ],
      "reponse": 2,
      "explication": "L'armistice est signé le 11 novembre 1918. Cette date est devenue une journée nationale de commémoration en France."
    },
    {
      "id": "his-156",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel événement a lieu en Normandie le 6 juin 1944 ?",
      "choix": [
        "La prise de la Bastille",
        "Le sacre de Charles VII",
        "La signature de Maastricht",
        "Le débarquement allié"
      ],
      "reponse": 3,
      "explication": "Le débarquement allié du 6 juin 1944 est une étape décisive de la Libération. Il commence en Normandie."
    },
    {
      "id": "his-157",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle avancée sociale est associée au Front populaire en 1936 ?",
      "choix": [
        "Les congés payés",
        "La création des départements",
        "La suppression du Parlement",
        "La restauration de la monarchie"
      ],
      "reponse": 0,
      "explication": "Le Front populaire adopte en 1936 des mesures sociales importantes, dont les congés payés. Il est dirigé par Léon Blum."
    },
    {
      "id": "his-158",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Que retient-on de l'année 1962 pour l'Algérie ?",
      "choix": [
        "La prise de la Bastille",
        "Son indépendance",
        "La création de l'ONU",
        "Le couronnement de Charlemagne"
      ],
      "reponse": 1,
      "explication": "L'indépendance de l'Algérie en 1962 s'inscrit dans l'histoire de la décolonisation. C'est un repère important de l'histoire contemporaine française."
    },
    {
      "id": "his-159",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle période correspond à la guerre d'Algérie ?",
      "choix": [
        "1914-1918",
        "1939-1945",
        "1954-1962",
        "1870-1871"
      ],
      "reponse": 2,
      "explication": "La guerre d'Algérie commence en 1954 et s'achève en 1962. Elle conduit à l'indépendance de l'Algérie après une guerre longue et violente."
    },
    {
      "id": "his-160",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quels accords ouvrent la voie au cessez-le-feu et à l'indépendance de l'Algérie en 1962 ?",
      "choix": [
        "Les accords de Matignon",
        "Les accords de Munich",
        "Les accords de Grenelle",
        "Les accords d'Évian"
      ],
      "reponse": 3,
      "explication": "Les accords d'Évian sont signés en mars 1962 entre le gouvernement français et le FLN. Ils prévoient notamment un cessez-le-feu et un processus d'autodétermination."
    },
    {
      "id": "his-161",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel acte signé en juin 1940 met fin aux combats entre la France vaincue et l'Allemagne nazie ?",
      "choix": [
        "L'armistice de 1940",
        "Le traité de Versailles",
        "Les accords d'Évian",
        "Le pacte de Varsovie"
      ],
      "reponse": 0,
      "explication": "L'armistice du 22 juin 1940 est signé après la défaite militaire française. Il entraîne l'occupation d'une partie du territoire et l'installation du régime de Vichy."
    },
    {
      "id": "his-162",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle politique le régime de Vichy mène-t-il vis-à-vis de l'Allemagne nazie ?",
      "choix": [
        "La neutralité armée totale",
        "La collaboration",
        "L'alliance avec les Alliés",
        "La guerre contre l'Allemagne"
      ],
      "reponse": 1,
      "explication": "Le régime de Vichy, dirigé par le maréchal Pétain, engage une politique de collaboration avec l'Allemagne nazie. Il adopte aussi des mesures autoritaires et antisémites."
    },
    {
      "id": "his-163",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel résistant est chargé par de Gaulle d'unifier les mouvements de Résistance intérieure ?",
      "choix": [
        "Pierre Laval",
        "Philippe Pétain",
        "Jean Moulin",
        "Marcel Déat"
      ],
      "reponse": 2,
      "explication": "Jean Moulin joue un rôle central dans l'unification de la Résistance intérieure. Il contribue à la création du Conseil national de la Résistance en 1943."
    },
    {
      "id": "his-164",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel organisme de la Résistance adopte en 1944 un programme de réformes sociales et démocratiques ?",
      "choix": [
        "Le Directoire",
        "La Chambre des pairs",
        "Le Sénat conservateur",
        "Le Conseil national de la Résistance"
      ],
      "reponse": 3,
      "explication": "Le Conseil national de la Résistance rassemble des mouvements de résistance, partis et syndicats. Son programme inspire plusieurs réformes de la Libération."
    },
    {
      "id": "his-165",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Que désigne la rafle du Vél d'Hiv de juillet 1942 ?",
      "choix": [
        "L'arrestation massive de Juifs par la police française",
        "Une bataille de la Libération",
        "Une grève générale à Paris",
        "Un bombardement allié"
      ],
      "reponse": 0,
      "explication": "La rafle du Vél d'Hiv est une arrestation massive de Juifs à Paris et en banlieue par la police française. Les victimes sont ensuite déportées, pour la plupart vers Auschwitz."
    },
    {
      "id": "his-166",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Que signifie le terme Shoah dans l'histoire de la Seconde Guerre mondiale ?",
      "choix": [
        "La reconstruction de l'Europe",
        "L'extermination des Juifs d'Europe par les nazis",
        "La guerre sous-marine",
        "La défaite de 1940"
      ],
      "reponse": 1,
      "explication": "La Shoah désigne le génocide des Juifs d'Europe organisé par l'Allemagne nazie et ses complices. Environ six millions de Juifs furent assassinés."
    },
    {
      "id": "his-167",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel débarquement allié du 6 juin 1944 contribue à libérer la France occupée ?",
      "choix": [
        "Le débarquement de Gallipoli",
        "Le débarquement de Suez",
        "Le débarquement de Normandie",
        "Le débarquement de Crimée"
      ],
      "reponse": 2,
      "explication": "Le débarquement de Normandie commence le 6 juin 1944. Il ouvre un front majeur contre l'Allemagne nazie en Europe occidentale."
    },
    {
      "id": "his-168",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle ville est libérée en août 1944 avec l'entrée de la 2e DB du général Leclerc ?",
      "choix": [
        "Lyon",
        "Bordeaux",
        "Strasbourg",
        "Paris"
      ],
      "reponse": 3,
      "explication": "Paris est libérée en août 1944 après une insurrection et l'arrivée des forces alliées. La 2e division blindée du général Leclerc y joue un rôle important."
    },
    {
      "id": "his-169",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Que commémore le 8 mai 1945 en France ?",
      "choix": [
        "La victoire sur l'Allemagne nazie en Europe",
        "La prise de la Bastille",
        "La fin de la guerre d'Algérie",
        "La proclamation de la IIIe République"
      ],
      "reponse": 0,
      "explication": "Le 8 mai 1945 marque la capitulation de l'Allemagne nazie en Europe. En France, c'est une date de commémoration de la fin de la Seconde Guerre mondiale en Europe."
    },
    {
      "id": "his-170",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle institution sociale est créée en France à la Libération pour protéger les travailleurs et leurs familles ?",
      "choix": [
        "La Banque de France",
        "La Sécurité sociale",
        "L'Académie française",
        "Le Conseil constitutionnel"
      ],
      "reponse": 1,
      "explication": "La Sécurité sociale est créée en 1945 dans le contexte des réformes de la Libération. Elle vise à couvrir notamment les risques liés à la maladie, à la vieillesse et à la famille."
    },
    {
      "id": "his-171",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "À quoi sert la Sécurité sociale créée en 1945 ?",
      "choix": [
        "À élire le président",
        "À diriger les communes",
        "À protéger la population contre certains risques sociaux",
        "À couronner les rois"
      ],
      "reponse": 2,
      "explication": "La Sécurité sociale protège notamment contre la maladie, la vieillesse et les accidents du travail. Elle est un acquis social de la Libération."
    },
    {
      "id": "his-172",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quel général devient le premier président de la Ve République ?",
      "choix": [
        "Georges Pompidou",
        "François Mitterrand",
        "Jacques Chirac",
        "Charles de Gaulle"
      ],
      "reponse": 3,
      "explication": "Charles de Gaulle revient au pouvoir lors de la crise de 1958. Il devient ensuite le premier président de la Ve République."
    },
    {
      "id": "his-173",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel mouvement de contestation étudiante et sociale secoue la France au printemps 1968 ?",
      "choix": [
        "Mai 68",
        "La Commune de Paris",
        "Les Trois Glorieuses",
        "Le Front populaire"
      ],
      "reponse": 0,
      "explication": "Mai 68 commence par une contestation étudiante puis s'étend à une grève générale. Le mouvement remet en cause l'autorité, le travail et les normes sociales de l'époque."
    },
    {
      "id": "his-174",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quelle réforme de 1962 concerne directement l'élection présidentielle ?",
      "choix": [
        "Le droit de vote des femmes",
        "Le suffrage universel direct",
        "La fin de la monarchie",
        "La création des régions"
      ],
      "reponse": 1,
      "explication": "La réforme de 1962 institue l'élection du président de la République au suffrage universel direct. Elle renforce le lien entre le président et les électeurs."
    },
    {
      "id": "his-175",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quelle loi de 1975, portée par Simone Veil, légalise l'interruption volontaire de grossesse ?",
      "choix": [
        "La loi Falloux",
        "La loi Waldeck-Rousseau",
        "La loi Veil",
        "La loi Debré"
      ],
      "reponse": 2,
      "explication": "La loi Veil de 1975 légalise l'interruption volontaire de grossesse sous certaines conditions. Elle est portée par Simone Veil, alors ministre de la Santé."
    },
    {
      "id": "his-176",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quelle alternance politique majeure se produit avec l'élection présidentielle de 1981 ?",
      "choix": [
        "Le retour d'un roi",
        "La suppression de l'élection présidentielle",
        "La création du Second Empire",
        "L'arrivée de François Mitterrand, premier président socialiste de la Ve République"
      ],
      "reponse": 3,
      "explication": "François Mitterrand est élu président en 1981. Son élection marque la première alternance gauche-droite à la présidence sous la Ve République."
    },
    {
      "id": "his-177",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel président est en fonction lors de l'abolition de la peine de mort ?",
      "choix": [
        "François Mitterrand",
        "Charles de Gaulle",
        "Valéry Giscard d'Estaing",
        "Emmanuel Macron"
      ],
      "reponse": 0,
      "explication": "L'abolition de la peine de mort est votée en 1981 sous la présidence de François Mitterrand. Robert Badinter en est le principal défenseur au gouvernement."
    },
    {
      "id": "his-178",
      "theme": "histoire",
      "difficulte": "facile",
      "question": "Quelle loi promulguée en 2013 ouvre le mariage aux couples de même sexe ?",
      "choix": [
        "La loi sur les congés payés",
        "La loi ouvrant le mariage aux couples de même sexe",
        "La loi de séparation de 1905",
        "La loi sur les associations"
      ],
      "reponse": 1,
      "explication": "La loi de 2013, souvent appelée « mariage pour tous », ouvre le mariage et l'adoption aux couples de même sexe. Le quinquennat de François Hollande est aussi marqué par les attentats terroristes de 2015, commémorés avec solennité."
    },
    {
      "id": "his-179",
      "theme": "histoire",
      "difficulte": "difficile",
      "question": "Quel monument parisien est gravement endommagé par un incendie en avril 2019 ?",
      "choix": [
        "Le Panthéon",
        "L'Arc de Triomphe",
        "La cathédrale Notre-Dame de Paris",
        "Le palais de l'Élysée"
      ],
      "reponse": 2,
      "explication": "Notre-Dame de Paris est touchée par un incendie majeur le 15 avril 2019. Les années récentes sont aussi marquées par des cérémonies mémorielles au Panthéon, comme l'entrée de Joséphine Baker en 2021."
    },
    {
      "id": "his-180",
      "theme": "histoire",
      "difficulte": "moyen",
      "question": "Quel grand événement international la France organise-t-elle en 2024 ?",
      "choix": [
        "La conférence de Yalta",
        "Le traité de Rome",
        "Le sacre de Napoléon",
        "Les Jeux olympiques et paralympiques de Paris"
      ],
      "reponse": 3,
      "explication": "Les Jeux olympiques et paralympiques de Paris 2024 sont un événement majeur récent. Ils font partie des repères contemporains à connaître."
    },
    {
      "id": "geo-001",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Combien la France compte-t-elle de régions ?",
      "choix": [
        "18",
        "13",
        "22",
        "27"
      ],
      "reponse": 0,
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
      "question": "Quelle grande ville française se trouve sur le littoral méditerranéen ?",
      "choix": [
        "Lille",
        "Rennes",
        "Strasbourg",
        "Marseille"
      ],
      "reponse": 3,
      "explication": "Marseille est une grande ville française située sur la mer Méditerranée. Elle est aussi le chef-lieu de Provence-Alpes-Côte d’Azur."
    },
    {
      "id": "geo-005",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Combien de départements compte la France ?",
      "choix": [
        "101",
        "96",
        "100",
        "110"
      ],
      "reponse": 0,
      "explication": "La France compte 101 départements : 96 en métropole et 5 en outre-mer. Ils ont été créés en 1790 pendant la Révolution française."
    },
    {
      "id": "geo-006",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Lequel de ces territoires est un département et région d'outre-mer (DROM) ?",
      "choix": [
        "La Nouvelle-Calédonie",
        "La Réunion",
        "La Polynésie française",
        "Saint-Pierre-et-Miquelon"
      ],
      "reponse": 1,
      "explication": "Les 5 DROM sont la Guadeloupe, la Martinique, la Guyane, La Réunion et Mayotte. La Nouvelle-Calédonie et la Polynésie française ont des statuts particuliers."
    },
    {
      "id": "geo-007",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Dans quel océan se situe La Réunion ?",
      "choix": [
        "L'océan Atlantique",
        "L'océan Pacifique",
        "L'océan Indien",
        "La mer Méditerranée"
      ],
      "reponse": 2,
      "explication": "La Réunion est située dans l'océan Indien, près de Madagascar et de l'île Maurice. Son chef-lieu est Saint-Denis et son volcan actif est le piton de la Fournaise."
    },
    {
      "id": "geo-008",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Où se trouve la base spatiale française de Kourou ?",
      "choix": [
        "En Guadeloupe",
        "À La Réunion",
        "En Martinique",
        "En Guyane"
      ],
      "reponse": 3,
      "explication": "Le Centre spatial guyanais, à Kourou en Guyane (Amérique du Sud), sert de base de lancement européenne depuis 1968, notamment pour les fusées Ariane."
    },
    {
      "id": "geo-009",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Lequel de ces pays n’est pas frontalier de la France métropolitaine ?",
      "choix": [
        "Le Portugal",
        "L’Espagne",
        "L’Italie",
        "La Suisse"
      ],
      "reponse": 0,
      "explication": "Le Portugal ne touche pas la France métropolitaine. L’Espagne, l’Italie et la Suisse sont des pays frontaliers."
    },
    {
      "id": "geo-010",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle chaîne de montagnes sépare la France de l'Espagne ?",
      "choix": [
        "Les Alpes",
        "Les Pyrénées",
        "Le Jura",
        "Les Vosges"
      ],
      "reponse": 1,
      "explication": "Les Pyrénées forment la frontière naturelle avec l'Espagne et l'Andorre. Les Alpes bordent l'Italie et la Suisse, le Jura la Suisse, et les Vosges se situent près de l'Allemagne."
    },
    {
      "id": "geo-011",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel est le chef-lieu de la région Bretagne ?",
      "choix": [
        "Nantes",
        "Brest",
        "Rennes",
        "Vannes"
      ],
      "reponse": 2,
      "explication": "Rennes est le chef-lieu de la Bretagne. Nantes est aujourd'hui le chef-lieu des Pays de la Loire, même si elle a une histoire liée à la Bretagne."
    },
    {
      "id": "geo-012",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Dans quelle région se trouve Strasbourg ?",
      "choix": [
        "Bourgogne-Franche-Comté",
        "Hauts-de-France",
        "Normandie",
        "Grand Est"
      ],
      "reponse": 3,
      "explication": "Strasbourg se situe dans le Grand Est, en Alsace. Elle est aussi le chef-lieu de cette région."
    },
    {
      "id": "geo-013",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle mer borde Marseille ?",
      "choix": [
        "La mer Méditerranée",
        "La Manche",
        "L'océan Atlantique",
        "La mer du Nord"
      ],
      "reponse": 0,
      "explication": "Marseille est située sur le littoral méditerranéen. C'est le grand port français de la Méditerranée."
    },
    {
      "id": "geo-014",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel fleuve traverse Paris ?",
      "choix": [
        "La Loire",
        "La Seine",
        "La Garonne",
        "Le Rhône"
      ],
      "reponse": 1,
      "explication": "La Seine traverse Paris d'est en ouest. Ses quais font partie des paysages les plus connus de la capitale."
    },
    {
      "id": "geo-015",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel est le chef-lieu de la région Auvergne-Rhône-Alpes ?",
      "choix": [
        "Grenoble",
        "Clermont-Ferrand",
        "Lyon",
        "Saint-Étienne"
      ],
      "reponse": 2,
      "explication": "Lyon est le chef-lieu d'Auvergne-Rhône-Alpes. La région réunit notamment l'ancienne Auvergne et l'ancienne région Rhône-Alpes."
    },
    {
      "id": "geo-016",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Dans quelle partie de la France se situe Lille ?",
      "choix": [
        "Le Sud-Ouest",
        "Le Centre",
        "La Corse",
        "Le Nord"
      ],
      "reponse": 3,
      "explication": "Lille se situe dans le nord de la France, près de la frontière belge. C'est le chef-lieu des Hauts-de-France."
    },
    {
      "id": "geo-017",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle ville est le chef-lieu de la région Nouvelle-Aquitaine ?",
      "choix": [
        "Bordeaux",
        "Poitiers",
        "Limoges",
        "La Rochelle"
      ],
      "reponse": 0,
      "explication": "Bordeaux est le chef-lieu de la Nouvelle-Aquitaine. Cette grande région s'étend du Poitou au Pays basque et au Limousin."
    },
    {
      "id": "geo-018",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Sur quelle île française se trouve Ajaccio ?",
      "choix": [
        "Belle-Île",
        "La Corse",
        "L'île d'Oléron",
        "L'île de Ré"
      ],
      "reponse": 1,
      "explication": "Ajaccio se trouve en Corse, en mer Méditerranée. C'est la préfecture de la Corse-du-Sud."
    },
    {
      "id": "geo-019",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle chaîne de montagnes se trouve à l'est de la France, près de la Suisse et de l'Italie ?",
      "choix": [
        "Les Vosges",
        "Les Ardennes",
        "Les Alpes",
        "Le Massif armoricain"
      ],
      "reponse": 2,
      "explication": "Les Alpes occupent une partie de l'est et du sud-est de la France. Elles s'étendent aussi en Suisse, en Italie et dans d'autres pays européens."
    },
    {
      "id": "geo-020",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel océan borde la façade ouest de la France métropolitaine ?",
      "choix": [
        "L'océan Indien",
        "L'océan Pacifique",
        "L'océan Arctique",
        "L'océan Atlantique"
      ],
      "reponse": 3,
      "explication": "La façade ouest de la France métropolitaine donne sur l'océan Atlantique. On y trouve notamment la Bretagne, la Vendée et la côte aquitaine."
    },
    {
      "id": "geo-021",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle ville est connue comme capitale de l'Occitanie administrative ?",
      "choix": [
        "Toulouse",
        "Montpellier",
        "Perpignan",
        "Nîmes"
      ],
      "reponse": 0,
      "explication": "Toulouse est le chef-lieu de la région Occitanie. Montpellier est également une grande ville importante de cette région."
    },
    {
      "id": "geo-022",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "La Côte d'Azur se trouve principalement sur quel littoral ?",
      "choix": [
        "Le littoral de la Manche",
        "Le littoral méditerranéen",
        "La côte atlantique",
        "La mer du Nord"
      ],
      "reponse": 1,
      "explication": "La Côte d'Azur se situe sur le littoral méditerranéen, autour de Nice, Cannes et Monaco. Elle fait partie de la région Provence-Alpes-Côte d'Azur."
    },
    {
      "id": "geo-023",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle ville est le chef-lieu des Pays de la Loire ?",
      "choix": [
        "Angers",
        "Le Mans",
        "Nantes",
        "Tours"
      ],
      "reponse": 2,
      "explication": "Nantes est le chef-lieu de la région Pays de la Loire. Elle est située près de l'estuaire de la Loire."
    },
    {
      "id": "geo-024",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Où se situe Grenoble ?",
      "choix": [
        "En Bretagne",
        "Dans les Ardennes",
        "Sur la côte atlantique",
        "Dans les Alpes"
      ],
      "reponse": 3,
      "explication": "Grenoble est située dans les Alpes, au cœur d'une vallée entourée de massifs montagneux. Elle est la préfecture de l'Isère."
    },
    {
      "id": "geo-025",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel fleuve passe par Lyon avant de rejoindre la Méditerranée ?",
      "choix": [
        "Le Rhône",
        "La Seine",
        "La Loire",
        "La Garonne"
      ],
      "reponse": 0,
      "explication": "Le Rhône traverse Lyon puis descend vers le sud. Il se jette dans la mer Méditerranée par un delta en Camargue."
    },
    {
      "id": "geo-026",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle ville normande est un grand port sur l'estuaire de la Seine ?",
      "choix": [
        "Caen",
        "Le Havre",
        "Cherbourg",
        "Rouen"
      ],
      "reponse": 1,
      "explication": "Le Havre est un grand port maritime situé à l'embouchure de la Seine. Il se trouve en Normandie, sur la Manche."
    },
    {
      "id": "geo-027",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel est le chef-lieu de la région Centre-Val de Loire ?",
      "choix": [
        "Tours",
        "Bourges",
        "Orléans",
        "Blois"
      ],
      "reponse": 2,
      "explication": "Orléans est le chef-lieu de la région Centre-Val de Loire. La région est traversée par la Loire et comprend plusieurs villes historiques."
    },
    {
      "id": "geo-028",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle ville est le chef-lieu de la Bourgogne-Franche-Comté ?",
      "choix": [
        "Besançon",
        "Auxerre",
        "Nevers",
        "Dijon"
      ],
      "reponse": 3,
      "explication": "Dijon est le chef-lieu de la région Bourgogne-Franche-Comté. Besançon reste une grande ville régionale importante."
    },
    {
      "id": "geo-029",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle ville se situe sur la Garonne, dans le Sud-Ouest ?",
      "choix": [
        "Toulouse",
        "Nice",
        "Nantes",
        "Reims"
      ],
      "reponse": 0,
      "explication": "Toulouse est située sur la Garonne. La ville est un grand pôle urbain du Sud-Ouest de la France."
    },
    {
      "id": "geo-030",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle région a pour chef-lieu Rouen ?",
      "choix": [
        "Bretagne",
        "Normandie",
        "Hauts-de-France",
        "Grand Est"
      ],
      "reponse": 1,
      "explication": "Rouen est le chef-lieu de la Normandie. La région comprend aussi Caen, Le Havre et Cherbourg-en-Cotentin."
    },
    {
      "id": "geo-031",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle région métropolitaine a pour chef-lieu Marseille ?",
      "choix": [
        "Occitanie",
        "Corse",
        "Provence-Alpes-Côte d'Azur",
        "Auvergne-Rhône-Alpes"
      ],
      "reponse": 2,
      "explication": "Marseille est le chef-lieu de Provence-Alpes-Côte d'Azur. Cette région comprend notamment les Bouches-du-Rhône, le Var, les Alpes-Maritimes et les Alpes du Sud."
    },
    {
      "id": "geo-032",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle région du nord de la France a Lille pour chef-lieu ?",
      "choix": [
        "La Bretagne",
        "La Corse",
        "La Nouvelle-Aquitaine",
        "Les Hauts-de-France"
      ],
      "reponse": 3,
      "explication": "Les Hauts-de-France se situent dans le nord du pays. Leur chef-lieu est Lille."
    },
    {
      "id": "geo-033",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel cours d'eau forme une partie de la frontière entre la France et l'Allemagne ?",
      "choix": [
        "Le Rhin",
        "La Moselle",
        "La Marne",
        "La Saône"
      ],
      "reponse": 0,
      "explication": "Le Rhin marque une partie de la frontière franco-allemande en Alsace. Il est aussi un axe majeur de navigation en Europe."
    },
    {
      "id": "geo-034",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Dans quel océan la Loire se jette-t-elle ?",
      "choix": [
        "L’océan Indien",
        "L’océan Atlantique",
        "L’océan Pacifique",
        "La mer du Nord"
      ],
      "reponse": 1,
      "explication": "La Loire coule vers l’ouest et se jette dans l’océan Atlantique."
    },
    {
      "id": "geo-035",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel massif montagneux se trouve au centre-sud de la France ?",
      "choix": [
        "Les Alpes",
        "Les Pyrénées",
        "Le Massif central",
        "Les Vosges"
      ],
      "reponse": 2,
      "explication": "Le Massif central est un grand massif situé au centre-sud de la France."
    },
    {
      "id": "geo-036",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle grande ville est située près de la confluence du Rhône et de la Saône ?",
      "choix": [
        "Avignon",
        "Dijon",
        "Valence",
        "Lyon"
      ],
      "reponse": 3,
      "explication": "Lyon est située à la confluence du Rhône et de la Saône. Cette position a contribué à son importance historique et économique."
    },
    {
      "id": "geo-037",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle ville est le chef-lieu de la région Île-de-France ?",
      "choix": [
        "Paris",
        "Versailles",
        "Saint-Denis",
        "Créteil"
      ],
      "reponse": 0,
      "explication": "Paris est le chef-lieu de l'Île-de-France. La région regroupe Paris et les départements de sa couronne urbaine."
    },
    {
      "id": "geo-038",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle région a Paris pour chef-lieu ?",
      "choix": [
        "La Bretagne",
        "L’Île-de-France",
        "La Normandie",
        "L’Occitanie"
      ],
      "reponse": 1,
      "explication": "Paris est le chef-lieu de la région Île-de-France."
    },
    {
      "id": "geo-039",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle façade maritime française est associée à l’ouest du pays ?",
      "choix": [
        "La façade arctique",
        "La façade baltique",
        "La façade atlantique",
        "La façade caspienne"
      ],
      "reponse": 2,
      "explication": "L’ouest de la France métropolitaine donne sur l’océan Atlantique."
    },
    {
      "id": "geo-040",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle chaîne de montagnes se trouve à l’est de la France, vers l’Italie et la Suisse ?",
      "choix": [
        "Les Pyrénées",
        "Les Vosges",
        "Le Massif central",
        "Les Alpes"
      ],
      "reponse": 3,
      "explication": "Les Alpes se trouvent à l’est de la France, vers l’Italie et la Suisse."
    },
    {
      "id": "geo-041",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel massif se trouve près de la frontière franco-suisse ?",
      "choix": [
        "Le Jura",
        "Les Landes",
        "Les Maures",
        "Les Ardennes"
      ],
      "reponse": 0,
      "explication": "Le Jura se situe à l’est de la France, près de la Suisse."
    },
    {
      "id": "geo-042",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle mer sépare la France du Royaume-Uni ?",
      "choix": [
        "La mer Égée",
        "La Manche",
        "La mer Noire",
        "La mer Adriatique"
      ],
      "reponse": 1,
      "explication": "La Manche sépare la France du Royaume-Uni."
    },
    {
      "id": "geo-043",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle ville est le chef-lieu de la région Corse ?",
      "choix": [
        "Bastia",
        "Corte",
        "Ajaccio",
        "Porto-Vecchio"
      ],
      "reponse": 2,
      "explication": "Ajaccio est le chef-lieu de la collectivité de Corse. Bastia est une autre grande ville corse, située au nord-est de l'île."
    },
    {
      "id": "geo-044",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle ville de l'Est est située en Lorraine, sur la Moselle ?",
      "choix": [
        "Dijon",
        "Besançon",
        "Mulhouse",
        "Metz"
      ],
      "reponse": 3,
      "explication": "Metz se situe en Lorraine, dans le département de la Moselle. La rivière Moselle traverse l'agglomération."
    },
    {
      "id": "geo-045",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Dans quel massif se trouvent les volcans d'Auvergne ?",
      "choix": [
        "Le Massif central",
        "Le Jura",
        "Les Vosges",
        "Les Ardennes"
      ],
      "reponse": 0,
      "explication": "Les volcans d'Auvergne se trouvent dans le Massif central. La chaîne des Puys en est l'un des ensembles les plus connus."
    },
    {
      "id": "geo-046",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle région française est située à l’ouest, entre Atlantique et Manche ?",
      "choix": [
        "Le Grand Est",
        "La Bretagne",
        "La Corse",
        "La Bourgogne-Franche-Comté"
      ],
      "reponse": 1,
      "explication": "La Bretagne est une région de l’ouest de la France, avec des côtes sur l’Atlantique et la Manche."
    },
    {
      "id": "geo-047",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle ville est le chef-lieu de la région Hauts-de-France ?",
      "choix": [
        "Amiens",
        "Arras",
        "Lille",
        "Dunkerque"
      ],
      "reponse": 2,
      "explication": "Lille est le chef-lieu des Hauts-de-France. Amiens, ancienne capitale régionale de Picardie, reste une grande ville de la région."
    },
    {
      "id": "geo-048",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel massif montagneux se trouve dans le nord-est de la France ?",
      "choix": [
        "Les Alpes",
        "Les Pyrénées",
        "Le Massif central",
        "Les Vosges"
      ],
      "reponse": 3,
      "explication": "Les Vosges sont un massif du nord-est de la France."
    },
    {
      "id": "geo-049",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle région comprend Marseille et une façade méditerranéenne ?",
      "choix": [
        "Provence-Alpes-Côte d’Azur",
        "Centre-Val de Loire",
        "Pays de la Loire",
        "Hauts-de-France"
      ],
      "reponse": 0,
      "explication": "Provence-Alpes-Côte d’Azur a Marseille pour chef-lieu et une façade sur la Méditerranée."
    },
    {
      "id": "geo-050",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle ville est située sur la Loire et connue pour son rôle historique dans la vallée des châteaux ?",
      "choix": [
        "Limoges",
        "Tours",
        "Amiens",
        "Nancy"
      ],
      "reponse": 1,
      "explication": "Tours est située sur la Loire, dans la région Centre-Val de Loire. La ville est proche de plusieurs châteaux célèbres de la vallée de la Loire."
    },
    {
      "id": "geo-051",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle affirmation décrit correctement Paris ?",
      "choix": [
        "Paris est un DROM",
        "Paris se trouve dans les Pyrénées",
        "Paris est la capitale de la France et le chef-lieu de l’Île-de-France",
        "Paris est le chef-lieu de la Bretagne"
      ],
      "reponse": 2,
      "explication": "Paris est la capitale de la France. C’est aussi le chef-lieu de la région Île-de-France."
    },
    {
      "id": "geo-052",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle ville est le chef-lieu régional de la région Grand Est ?",
      "choix": [
        "Metz",
        "Nancy",
        "Reims",
        "Strasbourg"
      ],
      "reponse": 3,
      "explication": "Strasbourg est le chef-lieu de la région Grand Est. Metz, Nancy et Reims sont aussi des villes importantes de cette région."
    },
    {
      "id": "geo-053",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle liste contient uniquement des frontières terrestres métropolitaines de la France ?",
      "choix": [
        "Belgique, Luxembourg, Allemagne et Suisse",
        "Portugal, Irlande, Grèce et Suède",
        "Norvège, Finlande, Estonie et Lettonie",
        "Pologne, Hongrie, Roumanie et Bulgarie"
      ],
      "reponse": 0,
      "explication": "La France métropolitaine a notamment des frontières avec la Belgique, le Luxembourg, l’Allemagne et la Suisse."
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
      "question": "Quelle liste correspond aux façades maritimes de la France métropolitaine ?",
      "choix": [
        "Atlantique, Pacifique, mer Rouge et Baltique",
        "Manche, mer Noire, Adriatique et Caspienne",
        "Atlantique, Manche, mer du Nord et Méditerranée",
        "Méditerranée, Arctique, Baltique et Égée"
      ],
      "reponse": 2,
      "explication": "La France métropolitaine possède des façades sur l’Atlantique, la Manche, la mer du Nord et la Méditerranée."
    },
    {
      "id": "geo-056",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle grande ville de l’est est proche de la frontière allemande ?",
      "choix": [
        "Marseille",
        "Nantes",
        "Ajaccio",
        "Strasbourg"
      ],
      "reponse": 3,
      "explication": "Strasbourg se situe dans l’est de la France, près de l’Allemagne. C’est le chef-lieu du Grand Est."
    },
    {
      "id": "geo-057",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Comment se répartissent les 18 régions françaises ?",
      "choix": [
        "13 en métropole et 5 outre-mer",
        "18 en métropole et aucune outre-mer",
        "5 en métropole et 13 outre-mer",
        "96 en métropole et 5 outre-mer"
      ],
      "reponse": 0,
      "explication": "La France compte 18 régions administratives : 13 en métropole et 5 DROM."
    },
    {
      "id": "geo-058",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Comment se répartissent les 101 départements français ?",
      "choix": [
        "101 en métropole et aucun outre-mer",
        "96 en métropole et 5 outre-mer",
        "13 en métropole et 88 outre-mer",
        "5 en métropole et 96 outre-mer"
      ],
      "reponse": 1,
      "explication": "La France compte 101 départements : 96 en métropole et 5 outre-mer."
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
      "question": "Quelle affirmation distingue correctement les Alpes et les Pyrénées ?",
      "choix": [
        "Les Alpes séparent la France et le Royaume-Uni",
        "Les Pyrénées sont dans les Antilles",
        "Les deux massifs se trouvent en Guyane",
        "Les Alpes sont vers l’Italie et la Suisse ; les Pyrénées vers l’Espagne"
      ],
      "reponse": 3,
      "explication": "Les Alpes sont à l’est vers l’Italie et la Suisse. Les Pyrénées séparent principalement la France et l’Espagne."
    },
    {
      "id": "geo-061",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel DROM se trouve dans les Antilles avec la Martinique ?",
      "choix": [
        "La Guadeloupe",
        "La Guyane",
        "La Réunion",
        "Mayotte"
      ],
      "reponse": 0,
      "explication": "La Guadeloupe et la Martinique sont les deux DROM situés dans les Antilles."
    },
    {
      "id": "geo-062",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel DROM des Antilles est une île de la Caraïbe ?",
      "choix": [
        "La Guyane",
        "La Martinique",
        "La Réunion",
        "Mayotte"
      ],
      "reponse": 1,
      "explication": "La Martinique est un département et région d’outre-mer situé dans les Antilles."
    },
    {
      "id": "geo-063",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel DROM français se trouve sur le continent sud-américain ?",
      "choix": [
        "La Réunion",
        "Mayotte",
        "La Guyane",
        "La Guadeloupe"
      ],
      "reponse": 2,
      "explication": "La Guyane est le DROM français situé en Amérique du Sud."
    },
    {
      "id": "geo-064",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel DROM français est une île de l’océan Indien ?",
      "choix": [
        "La Bretagne",
        "La Normandie",
        "L’Île-de-France",
        "La Réunion"
      ],
      "reponse": 3,
      "explication": "La Réunion est un DROM situé dans l’océan Indien."
    },
    {
      "id": "geo-065",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel DROM français se trouve dans l’océan Indien comme La Réunion ?",
      "choix": [
        "Mayotte",
        "La Martinique",
        "La Guyane",
        "La Guadeloupe"
      ],
      "reponse": 0,
      "explication": "Mayotte est un DROM situé dans l’océan Indien."
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
      "question": "Quel territoire français a une frontière avec le Suriname ?",
      "choix": [
        "La Guadeloupe",
        "La Réunion",
        "Mayotte",
        "La Guyane"
      ],
      "reponse": 3,
      "explication": "La Guyane française partage des frontières terrestres avec le Brésil et le Suriname."
    },
    {
      "id": "geo-069",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Dans quel océan se trouvent La Réunion et Mayotte ?",
      "choix": [
        "L’océan Indien",
        "L’océan Atlantique",
        "L’océan Pacifique",
        "La mer du Nord"
      ],
      "reponse": 0,
      "explication": "La Réunion et Mayotte sont deux DROM français de l’océan Indien."
    },
    {
      "id": "geo-070",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Dans quelle zone se trouvent la Guadeloupe et la Martinique ?",
      "choix": [
        "Les Alpes",
        "Les Antilles",
        "La mer du Nord",
        "Les Pyrénées"
      ],
      "reponse": 1,
      "explication": "La Guadeloupe et la Martinique se situent dans les Antilles."
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
      "question": "Pourquoi les outre-mer donnent-ils une présence mondiale à la France ?",
      "choix": [
        "Ils sont tous en Europe",
        "Ils sont uniquement en Méditerranée",
        "Ils sont tous dans les Alpes",
        "Ils sont répartis dans plusieurs océans et régions du monde"
      ],
      "reponse": 3,
      "explication": "Les territoires ultramarins français sont présents dans plusieurs océans et zones géographiques."
    },
    {
      "id": "geo-073",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Lequel de ces territoires est un département et région d’outre-mer ?",
      "choix": [
        "Mayotte",
        "La Polynésie française",
        "La Nouvelle-Calédonie",
        "Saint-Pierre-et-Miquelon"
      ],
      "reponse": 0,
      "explication": "Mayotte est l’un des cinq DROM français."
    },
    {
      "id": "geo-074",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle association entre un DROM et sa localisation est correcte ?",
      "choix": [
        "Guyane — Alpes",
        "Mayotte — océan Indien",
        "Martinique — mer du Nord",
        "La Réunion — Antilles"
      ],
      "reponse": 1,
      "explication": "Mayotte se trouve dans l’océan Indien. La Réunion y est aussi située."
    },
    {
      "id": "geo-075",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Dans quelle zone géographique se trouve la Guyane française ?",
      "choix": [
        "Dans les Alpes",
        "Dans la mer du Nord",
        "En Amérique du Sud",
        "Dans les Pyrénées"
      ],
      "reponse": 2,
      "explication": "La Guyane française est située en Amérique du Sud."
    },
    {
      "id": "geo-076",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle liste contient les cinq DROM français ?",
      "choix": [
        "Corse, Bretagne, Normandie, Guyane et Réunion",
        "Tahiti, Nouméa, Corse, Paris et Lyon",
        "Monaco, Andorre, Suisse, Italie et Espagne",
        "Guadeloupe, Martinique, Guyane, La Réunion et Mayotte"
      ],
      "reponse": 3,
      "explication": "Les cinq DROM sont la Guadeloupe, la Martinique, la Guyane, La Réunion et Mayotte."
    },
    {
      "id": "geo-077",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel DROM est frontalier du Brésil ?",
      "choix": [
        "La Guyane",
        "La Réunion",
        "La Guadeloupe",
        "Mayotte"
      ],
      "reponse": 0,
      "explication": "La Guyane française possède une frontière terrestre avec le Brésil."
    },
    {
      "id": "geo-078",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle phrase décrit correctement la France d’outre-mer ?",
      "choix": [
        "Elle se limite à la région parisienne",
        "Elle comprend des territoires aux statuts différents dans plusieurs océans",
        "Elle se trouve uniquement dans les Alpes",
        "Elle ne comprend aucun territoire habité"
      ],
      "reponse": 1,
      "explication": "Les territoires ultramarins ont des statuts différents et sont répartis dans plusieurs régions du monde."
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
      "question": "Quel pays est séparé de la France par la Manche ?",
      "choix": [
        "La Grèce",
        "La Finlande",
        "Le Royaume-Uni",
        "Le Portugal"
      ],
      "reponse": 2,
      "explication": "La Manche sépare la France du Royaume-Uni."
    },
    {
      "id": "geo-084",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Où se situe la frontière entre la France et l’Italie ?",
      "choix": [
        "Dans les Antilles",
        "Dans la Manche",
        "Dans l’Atlantique",
        "Dans les Alpes"
      ],
      "reponse": 3,
      "explication": "La France et l’Italie ont une frontière dans les Alpes."
    },
    {
      "id": "geo-085",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quel grand massif est associé aux volcans d’Auvergne ?",
      "choix": [
        "Le Massif central",
        "Les Pyrénées",
        "Les Vosges",
        "Le Jura"
      ],
      "reponse": 0,
      "explication": "Les volcans d’Auvergne se trouvent dans le Massif central."
    },
    {
      "id": "geo-086",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel port normand est cité comme grand ensemble portuaire français ?",
      "choix": [
        "Dijon",
        "Le Havre",
        "Rennes",
        "Toulouse"
      ],
      "reponse": 1,
      "explication": "Le Havre est un grand port français situé sur l’estuaire de la Seine."
    },
    {
      "id": "geo-087",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel port méditerranéen est cité comme grand ensemble portuaire français ?",
      "choix": [
        "Rouen",
        "Lille",
        "Marseille-Fos",
        "Strasbourg"
      ],
      "reponse": 2,
      "explication": "Marseille-Fos est un grand ensemble portuaire français sur la Méditerranée."
    },
    {
      "id": "geo-088",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle ville est le principal centre politique et administratif du pays ?",
      "choix": [
        "Nice",
        "Brest",
        "Grenoble",
        "Paris"
      ],
      "reponse": 3,
      "explication": "Paris est la capitale de la France et le principal centre politique national."
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
      "question": "Quelle région administrative entoure Paris ?",
      "choix": [
        "La Bretagne",
        "Le Grand Est",
        "L’Île-de-France",
        "La Corse"
      ],
      "reponse": 2,
      "explication": "L’Île-de-France est la région de Paris et de son agglomération."
    },
    {
      "id": "geo-092",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel grand fleuve français est associé à Paris ?",
      "choix": [
        "Le Rhône",
        "La Loire",
        "Le Rhin",
        "La Seine"
      ],
      "reponse": 3,
      "explication": "La Seine est le fleuve qui traverse Paris."
    },
    {
      "id": "geo-093",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quel grand fleuve français est associé à Lyon ?",
      "choix": [
        "Le Rhône",
        "La Seine",
        "La Loire",
        "La Garonne"
      ],
      "reponse": 0,
      "explication": "Le Rhône passe par Lyon avant de rejoindre la Méditerranée."
    },
    {
      "id": "geo-094",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle association est correcte pour Marseille ?",
      "choix": [
        "Marseille — Bretagne",
        "Marseille — Provence-Alpes-Côte d’Azur",
        "Marseille — Grand Est",
        "Marseille — Normandie"
      ],
      "reponse": 1,
      "explication": "Marseille est le chef-lieu de Provence-Alpes-Côte d’Azur."
    },
    {
      "id": "geo-095",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quelle région a Rennes pour chef-lieu ?",
      "choix": [
        "L’Occitanie",
        "La Corse",
        "La Bretagne",
        "Le Grand Est"
      ],
      "reponse": 2,
      "explication": "Rennes est le chef-lieu de la Bretagne."
    },
    {
      "id": "geo-096",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle région a Bordeaux pour chef-lieu ?",
      "choix": [
        "La Normandie",
        "Le Grand Est",
        "Les Hauts-de-France",
        "La Nouvelle-Aquitaine"
      ],
      "reponse": 3,
      "explication": "Bordeaux est le chef-lieu de la Nouvelle-Aquitaine."
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
      "question": "Quelle grande ville française est associée à l’aéronautique et à Airbus ?",
      "choix": [
        "Rouen",
        "Dijon",
        "Toulouse",
        "Rennes"
      ],
      "reponse": 2,
      "explication": "Toulouse est un grand pôle aéronautique, notamment autour d’Airbus."
    },
    {
      "id": "geo-100",
      "theme": "geographie",
      "difficulte": "facile",
      "question": "Quels espaces français attirent les touristes pour les sports d’hiver ?",
      "choix": [
        "Les préfectures uniquement",
        "Les plaines sans relief",
        "Les ports fluviaux uniquement",
        "Les montagnes, notamment les Alpes et les Pyrénées"
      ],
      "reponse": 3,
      "explication": "Les Alpes et les Pyrénées sont des espaces de montagne importants en France."
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
      "question": "Quel nombre faut-il retenir pour les régions françaises ?",
      "choix": [
        "101",
        "18",
        "96",
        "5 000"
      ],
      "reponse": 1,
      "explication": "Le repère civique à retenir est que la France compte 18 régions administratives au total."
    },
    {
      "id": "geo-103",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Que désigne une métropole comme Paris, Lyon ou Marseille ?",
      "choix": [
        "Un petit village isolé",
        "Une frontière terrestre",
        "Une grande ville qui concentre habitants, emplois et services",
        "Un massif montagneux"
      ],
      "reponse": 2,
      "explication": "Les grandes métropoles françaises sont des repères géographiques importants."
    },
    {
      "id": "geo-104",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle affirmation générale sur les grandes villes françaises est correcte ?",
      "choix": [
        "Elles sont toutes des DROM",
        "Elles sont toutes dans les Alpes",
        "Elles sont toutes hors d’Europe",
        "Paris, Lyon, Marseille, Toulouse, Bordeaux et Lille sont de grands repères urbains"
      ],
      "reponse": 3,
      "explication": "Ces villes font partie des grands repères urbains à connaître en France."
    },
    {
      "id": "geo-105",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle mer borde la région Provence-Alpes-Côte d’Azur ?",
      "choix": [
        "La mer Méditerranée",
        "La Manche",
        "La mer du Nord",
        "La mer Baltique"
      ],
      "reponse": 0,
      "explication": "Provence-Alpes-Côte d’Azur possède une façade sur la Méditerranée."
    },
    {
      "id": "geo-106",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle région a Rouen pour chef-lieu ?",
      "choix": [
        "L’Occitanie",
        "La Normandie",
        "La Corse",
        "La Bretagne"
      ],
      "reponse": 1,
      "explication": "Rouen est le chef-lieu de la Normandie."
    },
    {
      "id": "geo-107",
      "theme": "geographie",
      "difficulte": "moyen",
      "question": "Quelle région a Dijon pour chef-lieu ?",
      "choix": [
        "La Normandie",
        "L’Île-de-France",
        "La Bourgogne-Franche-Comté",
        "La Bretagne"
      ],
      "reponse": 2,
      "explication": "Dijon est le chef-lieu de la Bourgogne-Franche-Comté."
    },
    {
      "id": "geo-108",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Pourquoi les outre-mer donnent-ils à la France un espace maritime important ?",
      "choix": [
        "Ils sont tous au centre de Paris",
        "Ils se trouvent uniquement dans les Pyrénées",
        "Ils n’ont aucun littoral",
        "Ils sont répartis dans plusieurs océans"
      ],
      "reponse": 3,
      "explication": "Les territoires ultramarins sont présents dans plusieurs océans. Ils donnent à la France une présence mondiale."
    },
    {
      "id": "geo-109",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle association avec Ariane est correcte ?",
      "choix": [
        "Ariane — Kourou en Guyane",
        "Ariane — Mont-Saint-Michel en Normandie",
        "Ariane — Lille dans les Hauts-de-France",
        "Ariane — Dijon en Bourgogne"
      ],
      "reponse": 0,
      "explication": "La fusée Ariane est associée au Centre spatial guyanais situé à Kourou, en Guyane."
    },
    {
      "id": "geo-110",
      "theme": "geographie",
      "difficulte": "difficile",
      "question": "Quelle phrase décrit correctement la France métropolitaine ?",
      "choix": [
        "Elle est uniquement dans l’océan Indien",
        "Elle est en Europe occidentale et possède plusieurs façades maritimes",
        "Elle n’a aucune frontière terrestre",
        "Elle se trouve en Amérique du Sud"
      ],
      "reponse": 1,
      "explication": "La France métropolitaine est située en Europe occidentale. Elle a des façades sur l’Atlantique, la Manche, la mer du Nord et la Méditerranée."
    },
    {
      "id": "cul-001",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Dans quel musée se trouve La Joconde ?",
      "choix": [
        "Le musée du Louvre",
        "Le musée d’Orsay",
        "Le Centre Pompidou",
        "Le château de Versailles"
      ],
      "reponse": 0,
      "explication": "La Joconde de Léonard de Vinci est exposée au musée du Louvre, à Paris."
    },
    {
      "id": "cul-002",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel roi est associé au château de Versailles ?",
      "choix": [
        "François Ier",
        "Louis XIV",
        "Henri IV",
        "Napoléon Ier"
      ],
      "reponse": 1,
      "explication": "Louis XIV a fait de Versailles le grand symbole de la monarchie française."
    },
    {
      "id": "cul-003",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Qui a écrit Les Misérables ?",
      "choix": [
        "Émile Zola",
        "Molière",
        "Victor Hugo",
        "Albert Camus"
      ],
      "reponse": 2,
      "explication": "Victor Hugo est l’auteur des Misérables et de Notre-Dame de Paris."
    },
    {
      "id": "cul-004",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Pour quel événement la tour Eiffel a-t-elle été construite ?",
      "choix": [
        "Les Jeux olympiques de 1924",
        "La Libération de Paris",
        "Le couronnement de Napoléon",
        "L’Exposition universelle de 1889"
      ],
      "reponse": 3,
      "explication": "La tour Eiffel a été construite pour l’Exposition universelle de 1889, année du centenaire de la Révolution française."
    },
    {
      "id": "cul-005",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Molière est surtout célèbre comme :",
      "choix": [
        "un auteur de théâtre",
        "un peintre",
        "un scientifique",
        "un roi de France"
      ],
      "reponse": 0,
      "explication": "Molière est l’un des grands auteurs de comédies du théâtre français."
    },
    {
      "id": "cul-006",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Claude Monet est associé à quel mouvement artistique ?",
      "choix": [
        "Le cubisme",
        "L’impressionnisme",
        "Le surréalisme",
        "Le classicisme"
      ],
      "reponse": 1,
      "explication": "Monet est une figure majeure de l’impressionnisme, notamment connu pour ses Nymphéas."
    },
    {
      "id": "cul-007",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Dans quelle région se trouve le Mont-Saint-Michel ?",
      "choix": [
        "En Alsace",
        "En Provence",
        "En Normandie",
        "En Île-de-France"
      ],
      "reponse": 2,
      "explication": "Le Mont-Saint-Michel est un monument majeur situé en Normandie."
    },
    {
      "id": "cul-008",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Qui a écrit Le Deuxième Sexe ?",
      "choix": [
        "Simone Veil",
        "George Sand",
        "Marguerite Yourcenar",
        "Simone de Beauvoir"
      ],
      "reponse": 3,
      "explication": "Simone de Beauvoir est une écrivaine et philosophe associée à cet ouvrage majeur du féminisme."
    },
    {
      "id": "cul-009",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Marie Curie est surtout connue pour ses travaux sur :",
      "choix": [
        "la radioactivité",
        "la peinture",
        "le cinéma",
        "l’architecture"
      ],
      "reponse": 0,
      "explication": "Marie Curie a reçu deux prix Nobel pour ses travaux scientifiques, notamment sur la radioactivité."
    },
    {
      "id": "cul-010",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Que sont les grottes de Lascaux ?",
      "choix": [
        "Un château de la Loire",
        "Des grottes ornées de peintures préhistoriques",
        "Un musée parisien",
        "Une cathédrale gothique"
      ],
      "reponse": 1,
      "explication": "Les grottes de Lascaux, en Dordogne, sont célèbres pour leurs peintures préhistoriques."
    },
    {
      "id": "cul-011",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle œuvre de La Fontaine met souvent en scène des animaux ?",
      "choix": [
        "Les Misérables",
        "Le Petit Prince",
        "Les Fables",
        "Candide"
      ],
      "reponse": 2,
      "explication": "Les Fables de La Fontaine utilisent souvent des animaux pour transmettre une morale."
    },
    {
      "id": "cul-012",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel écrivain des Lumières est l’auteur de Candide ?",
      "choix": [
        "Molière",
        "Proust",
        "Baudelaire",
        "Voltaire"
      ],
      "reponse": 3,
      "explication": "Voltaire est une grande figure des Lumières et l’auteur de Candide."
    },
    {
      "id": "cul-013",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel écrivain est associé à J’accuse…! dans l’affaire Dreyfus ?",
      "choix": [
        "Émile Zola",
        "Victor Hugo",
        "Marcel Proust",
        "Albert Camus"
      ],
      "reponse": 0,
      "explication": "Émile Zola publie J’accuse…! pour défendre le capitaine Dreyfus."
    },
    {
      "id": "cul-014",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel poète a écrit Les Fleurs du mal ?",
      "choix": [
        "Paul Cézanne",
        "Charles Baudelaire",
        "Georges Bizet",
        "Louis Pasteur"
      ],
      "reponse": 1,
      "explication": "Charles Baudelaire est l’auteur du recueil Les Fleurs du mal."
    },
    {
      "id": "cul-015",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel livre de Saint-Exupéry met en scène un enfant venu d’une petite planète ?",
      "choix": [
        "L’Étranger",
        "Germinal",
        "Le Petit Prince",
        "Les Nymphéas"
      ],
      "reponse": 2,
      "explication": "Le Petit Prince est l’œuvre la plus célèbre d’Antoine de Saint-Exupéry."
    },
    {
      "id": "cul-016",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel auteur a écrit L’Étranger ?",
      "choix": [
        "Molière",
        "La Fontaine",
        "Gustave Eiffel",
        "Albert Camus"
      ],
      "reponse": 3,
      "explication": "Albert Camus est l’auteur de L’Étranger et a reçu le prix Nobel de littérature en 1957."
    },
    {
      "id": "cul-017",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle institution veille notamment sur la langue française ?",
      "choix": [
        "L’Académie française",
        "Le Sénat",
        "Le Conseil d’État",
        "Le musée du Louvre"
      ],
      "reponse": 0,
      "explication": "L’Académie française est connue pour son rôle lié à la langue française."
    },
    {
      "id": "cul-018",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle organisation internationale rassemble des pays autour de la langue française ?",
      "choix": [
        "L’OTAN",
        "L’Organisation internationale de la Francophonie",
        "La Banque centrale européenne",
        "Le Conseil constitutionnel"
      ],
      "reponse": 1,
      "explication": "L’OIF réunit des États et gouvernements ayant le français en partage."
    },
    {
      "id": "cul-019",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quels frères sont associés aux débuts du cinéma ?",
      "choix": [
        "Les frères Montgolfier",
        "Les frères Le Nain",
        "Les frères Lumière",
        "Les frères Goncourt"
      ],
      "reponse": 2,
      "explication": "Les frères Lumière sont des figures majeures des débuts du cinématographe."
    },
    {
      "id": "cul-020",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel festival français remet la Palme d’or ?",
      "choix": [
        "Le Tour de France",
        "La Fête de la musique",
        "Roland-Garros",
        "Le Festival de Cannes"
      ],
      "reponse": 3,
      "explication": "La Palme d’or est la récompense principale du Festival de Cannes."
    },
    {
      "id": "cul-021",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle chanteuse est associée à La Vie en rose ?",
      "choix": [
        "Édith Piaf",
        "Barbara",
        "Dalida",
        "Mireille Mathieu"
      ],
      "reponse": 0,
      "explication": "Édith Piaf est l’une des grandes voix de la chanson française."
    },
    {
      "id": "cul-022",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle fête culturelle a lieu le 21 juin ?",
      "choix": [
        "La Toussaint",
        "La Fête de la musique",
        "La Chandeleur",
        "L’Épiphanie"
      ],
      "reponse": 1,
      "explication": "La Fête de la musique est célébrée le 21 juin, souvent dans les rues."
    },
    {
      "id": "cul-023",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel personnage de bande dessinée est un célèbre Gaulois moustachu ?",
      "choix": [
        "Tintin",
        "Lucky Luke",
        "Astérix",
        "Gaston Lagaffe"
      ],
      "reponse": 2,
      "explication": "Astérix, créé par Goscinny et Uderzo, est un personnage très connu de la bande dessinée francophone."
    },
    {
      "id": "cul-024",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Qui a peint La Liberté guidant le peuple ?",
      "choix": [
        "Claude Monet",
        "Auguste Rodin",
        "Paul Cézanne",
        "Eugène Delacroix"
      ],
      "reponse": 3,
      "explication": "La Liberté guidant le peuple est un tableau célèbre d’Eugène Delacroix."
    },
    {
      "id": "cul-025",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle tradition est associée à la galette des rois ?",
      "choix": [
        "L’Épiphanie",
        "Le 14 juillet",
        "La fête du Travail",
        "La Toussaint"
      ],
      "reponse": 0,
      "explication": "La galette des rois est traditionnellement partagée autour de l’Épiphanie."
    },
    {
      "id": "cul-026",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel événement cycliste parcourt chaque été les routes de France ?",
      "choix": [
        "Roland-Garros",
        "Le Tour de France",
        "Le Festival de Cannes",
        "La Route du Rhum"
      ],
      "reponse": 1,
      "explication": "Le Tour de France est la grande course cycliste française."
    },
    {
      "id": "cul-027",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel scientifique est associé à la pasteurisation et aux vaccins ?",
      "choix": [
        "Gustave Eiffel",
        "Victor Hugo",
        "Louis Pasteur",
        "Claude Monet"
      ],
      "reponse": 2,
      "explication": "Louis Pasteur a mené des travaux majeurs sur les microbes, la vaccination et la pasteurisation."
    },
    {
      "id": "cul-028",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel monument parisien abrite la tombe du Soldat inconnu ?",
      "choix": [
        "La tour Eiffel",
        "Le Panthéon",
        "Le Centre Pompidou",
        "L’Arc de triomphe"
      ],
      "reponse": 3,
      "explication": "La tombe du Soldat inconnu se trouve sous l’Arc de triomphe à Paris."
    },
    {
      "id": "cul-029",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Dans quelle ville se déroule le tournoi de tennis de Roland-Garros ?",
      "choix": [
        "Paris",
        "Lyon",
        "Marseille",
        "Lille"
      ],
      "reponse": 0,
      "explication": "Roland-Garros est un grand tournoi de tennis organisé à Paris."
    },
    {
      "id": "cul-030",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel aliment français a été inscrit à l’UNESCO en 2022 ?",
      "choix": [
        "Le hamburger",
        "La baguette de pain",
        "Le sushi",
        "La paella"
      ],
      "reponse": 1,
      "explication": "Les savoir-faire artisanaux et la culture de la baguette ont été inscrits au patrimoine culturel immatériel de l’UNESCO."
    },
    {
      "id": "cul-031",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel jour offre-t-on traditionnellement du muguet en France ?",
      "choix": [
        "Le 14 juillet",
        "Le 11 novembre",
        "Le 1er mai",
        "Le 25 décembre"
      ],
      "reponse": 2,
      "explication": "Le muguet est traditionnellement offert le 1er mai, jour de la fête du Travail."
    },
    {
      "id": "cul-032",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Dans quel sport la France a-t-elle gagné la Coupe du monde masculine en 1998 et 2018 ?",
      "choix": [
        "Le rugby",
        "Le tennis",
        "Le cyclisme",
        "Le football"
      ],
      "reponse": 3,
      "explication": "L’équipe de France masculine de football a remporté la Coupe du monde en 1998 et en 2018."
    },
    {
      "id": "cul-033",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel ingénieur est associé à la tour Eiffel ?",
      "choix": [
        "Gustave Eiffel",
        "Louis Pasteur",
        "Marcel Proust",
        "Georges Bizet"
      ],
      "reponse": 0,
      "explication": "Gustave Eiffel est l’ingénieur dont le nom est associé à la tour Eiffel."
    },
    {
      "id": "cul-034",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle fête est traditionnellement associée aux crêpes ?",
      "choix": [
        "Pâques",
        "La Chandeleur",
        "Le 14 juillet",
        "Noël"
      ],
      "reponse": 1,
      "explication": "En France, la Chandeleur est souvent associée à la préparation de crêpes."
    },
    {
      "id": "cul-035",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel site antique du sud de la France est un aqueduc romain ?",
      "choix": [
        "Le Mont-Saint-Michel",
        "Le Sacré-Cœur",
        "Le pont du Gard",
        "Le château de Chambord"
      ],
      "reponse": 2,
      "explication": "Le pont du Gard est un aqueduc romain classé au patrimoine mondial de l’UNESCO."
    },
    {
      "id": "cul-036",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Que commémore le 11 novembre en France ?",
      "choix": [
        "La prise de la Bastille",
        "La fête de la musique",
        "La victoire de 1998",
        "L’armistice de 1918"
      ],
      "reponse": 3,
      "explication": "Le 11 novembre commémore l’armistice qui met fin aux combats de la Première Guerre mondiale."
    },
    {
      "id": "cul-037",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle tradition humoristique a lieu le 1er avril ?",
      "choix": [
        "Le poisson d’avril",
        "La galette des rois",
        "La fête nationale",
        "La Saint-Valentin"
      ],
      "reponse": 0,
      "explication": "Le poisson d’avril consiste à faire des plaisanteries le 1er avril."
    },
    {
      "id": "cul-038",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel monument parisien accueille des personnalités honorées par la Nation ?",
      "choix": [
        "Le Moulin Rouge",
        "Le Panthéon",
        "Le Parc des Princes",
        "La gare du Nord"
      ],
      "reponse": 1,
      "explication": "Le Panthéon accueille les sépultures de grandes personnalités françaises."
    },
    {
      "id": "cul-039",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle cathédrale parisienne est un grand monument gothique ?",
      "choix": [
        "La basilique de Fourvière",
        "La cathédrale de Reims",
        "Notre-Dame de Paris",
        "La cathédrale d’Albi"
      ],
      "reponse": 2,
      "explication": "Notre-Dame de Paris est l’une des cathédrales gothiques les plus connues de France."
    },
    {
      "id": "cul-040",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel château de la Loire est célèbre pour son grand escalier à double révolution ?",
      "choix": [
        "Versailles",
        "Vincennes",
        "Fontainebleau",
        "Chambord"
      ],
      "reponse": 3,
      "explication": "Le château de Chambord est connu pour son architecture de la Renaissance et son escalier à double révolution."
    },
    {
      "id": "cul-041",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel système a inventé Louis Braille ?",
      "choix": [
        "Un système d’écriture tactile pour les personnes aveugles",
        "Un vaccin contre la rage",
        "Un appareil de cinéma",
        "Une tour métallique"
      ],
      "reponse": 0,
      "explication": "Louis Braille a inventé un système d’écriture à points en relief qui facilite la lecture des personnes aveugles."
    },
    {
      "id": "cul-042",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle région est célèbre pour le champagne ?",
      "choix": [
        "La Bretagne",
        "La Champagne",
        "La Corse",
        "Le Pays basque"
      ],
      "reponse": 1,
      "explication": "Le champagne est un vin mousseux associé à la région de Champagne."
    },
    {
      "id": "cul-043",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel plat est une spécialité alsacienne à base de chou fermenté ?",
      "choix": [
        "La bouillabaisse",
        "Le cassoulet",
        "La choucroute",
        "La ratatouille"
      ],
      "reponse": 2,
      "explication": "La choucroute garnie est une spécialité connue d’Alsace."
    },
    {
      "id": "cul-044",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel événement sportif mondial s’est tenu à Paris en 2024 ?",
      "choix": [
        "La Coupe du monde de football",
        "Le Tournoi des Six Nations",
        "L’Eurovision",
        "Les Jeux olympiques et paralympiques"
      ],
      "reponse": 3,
      "explication": "Paris a accueilli les Jeux olympiques et paralympiques de 2024."
    },
    {
      "id": "cul-045",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle grande course de tennis se joue sur terre battue à Paris ?",
      "choix": [
        "Roland-Garros",
        "Wimbledon",
        "L’US Open",
        "L’Open d’Australie"
      ],
      "reponse": 0,
      "explication": "Roland-Garros est un tournoi du Grand Chelem joué sur terre battue à Paris."
    },
    {
      "id": "cul-046",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle chanteuse française est surnommée la Môme ?",
      "choix": [
        "Juliette Gréco",
        "Édith Piaf",
        "France Gall",
        "Zaz"
      ],
      "reponse": 1,
      "explication": "Édith Piaf est souvent surnommée la Môme Piaf."
    },
    {
      "id": "cul-047",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel chanteur franco-arménien est célèbre pour La Bohème ?",
      "choix": [
        "Jacques Brel",
        "Claude Debussy",
        "Charles Aznavour",
        "Georges Brassens"
      ],
      "reponse": 2,
      "explication": "Charles Aznavour est une figure majeure de la chanson française."
    },
    {
      "id": "cul-048",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel compositeur français a écrit l’opéra Carmen ?",
      "choix": [
        "Claude Debussy",
        "Maurice Ravel",
        "Hector Berlioz",
        "Georges Bizet"
      ],
      "reponse": 3,
      "explication": "Carmen est un opéra très célèbre de Georges Bizet."
    },
    {
      "id": "cul-049",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel compositeur français est associé à La Mer ?",
      "choix": [
        "Claude Debussy",
        "Georges Bizet",
        "Jacques Brel",
        "Charles Aznavour"
      ],
      "reponse": 0,
      "explication": "Claude Debussy est un compositeur français important, notamment connu pour La Mer."
    },
    {
      "id": "cul-050",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel sculpteur français a créé Le Penseur ?",
      "choix": [
        "Eugène Delacroix",
        "Auguste Rodin",
        "Claude Monet",
        "Paul Gauguin"
      ],
      "reponse": 1,
      "explication": "Le Penseur est l’une des sculptures les plus célèbres d’Auguste Rodin."
    },
    {
      "id": "cul-051",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quel peintre est célèbre pour les Nymphéas ?",
      "choix": [
        "Pablo Picasso",
        "Eugène Delacroix",
        "Claude Monet",
        "Gustave Courbet"
      ],
      "reponse": 2,
      "explication": "Les Nymphéas sont une série de tableaux de Claude Monet."
    },
    {
      "id": "cul-052",
      "theme": "culture",
      "difficulte": "facile",
      "question": "Quelle fête nationale française a lieu le 14 juillet ?",
      "choix": [
        "La fête de la musique",
        "La Chandeleur",
        "L’Épiphanie",
        "La fête nationale"
      ],
      "reponse": 3,
      "explication": "Le 14 juillet est la fête nationale française."
    },
    {
      "id": "cul-053",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Qui était George Sand ?",
      "choix": [
        "Une romancière française du XIXe siècle",
        "Une reine de France",
        "Une scientifique du XXe siècle",
        "Une chanteuse d’opéra"
      ],
      "reponse": 0,
      "explication": "George Sand est une grande romancière française du XIXe siècle."
    },
    {
      "id": "cul-054",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Pourquoi Marguerite Yourcenar est-elle importante pour l’Académie française ?",
      "choix": [
        "Elle a construit le Louvre",
        "Elle fut la première femme élue à l’Académie française",
        "Elle a inventé le cinéma",
        "Elle a composé La Marseillaise"
      ],
      "reponse": 1,
      "explication": "Marguerite Yourcenar est devenue en 1980 la première femme élue à l’Académie française."
    },
    {
      "id": "cul-055",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel écrivain est associé à À la recherche du temps perdu ?",
      "choix": [
        "Victor Hugo",
        "Émile Zola",
        "Marcel Proust",
        "Voltaire"
      ],
      "reponse": 2,
      "explication": "Marcel Proust est l’auteur d’À la recherche du temps perdu."
    },
    {
      "id": "cul-056",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel écrivain a reçu le prix Nobel de littérature en 1957 ?",
      "choix": [
        "Molière",
        "Baudelaire",
        "Saint-Exupéry",
        "Albert Camus"
      ],
      "reponse": 3,
      "explication": "Albert Camus a reçu le prix Nobel de littérature en 1957."
    },
    {
      "id": "cul-057",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel roman de Victor Hugo se déroule autour de la cathédrale parisienne célèbre ?",
      "choix": [
        "Notre-Dame de Paris",
        "Germinal",
        "L’Étranger",
        "Madame Bovary"
      ],
      "reponse": 0,
      "explication": "Notre-Dame de Paris est un roman de Victor Hugo lié à la célèbre cathédrale."
    },
    {
      "id": "cul-058",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel auteur est souvent appelé le grand écrivain comique du théâtre français ?",
      "choix": [
        "Renoir",
        "Molière",
        "Pasteur",
        "Eiffel"
      ],
      "reponse": 1,
      "explication": "Molière est particulièrement célèbre pour ses comédies."
    },
    {
      "id": "cul-059",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel ouvrage d’Émile Zola est un article célèbre publié pendant l’affaire Dreyfus ?",
      "choix": [
        "Les Nymphéas",
        "Le Penseur",
        "J’accuse…!",
        "La Bohème"
      ],
      "reponse": 2,
      "explication": "J’accuse…! est le texte par lequel Zola défend publiquement Dreyfus."
    },
    {
      "id": "cul-060",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel auteur a écrit des fables comme Le Corbeau et le Renard ?",
      "choix": [
        "Charles Baudelaire",
        "Marcel Proust",
        "Simone de Beauvoir",
        "Jean de La Fontaine"
      ],
      "reponse": 3,
      "explication": "Jean de La Fontaine est connu pour ses fables à morale."
    },
    {
      "id": "cul-061",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel philosophe des Lumières est souvent associé à la tolérance religieuse ?",
      "choix": [
        "Voltaire",
        "Napoléon",
        "Louis XIV",
        "Gustave Eiffel"
      ],
      "reponse": 0,
      "explication": "Voltaire est une figure des Lumières souvent associée à la défense de la tolérance."
    },
    {
      "id": "cul-062",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel peintre français a beaucoup peint la montagne Sainte-Victoire ?",
      "choix": [
        "Claude Monet",
        "Paul Cézanne",
        "Auguste Renoir",
        "Eugène Delacroix"
      ],
      "reponse": 1,
      "explication": "Paul Cézanne, né à Aix-en-Provence, a souvent peint la montagne Sainte-Victoire."
    },
    {
      "id": "cul-063",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Auguste Renoir est associé à quel mouvement ?",
      "choix": [
        "Le romantisme",
        "Le surréalisme",
        "L’impressionnisme",
        "Le baroque"
      ],
      "reponse": 2,
      "explication": "Renoir est une figure importante de l’impressionnisme."
    },
    {
      "id": "cul-064",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Que représente La Liberté guidant le peuple ?",
      "choix": [
        "Une scène de chasse royale",
        "Un paysage de Normandie",
        "Un portrait de Louis XIV",
        "Une allégorie de la liberté et du peuple en révolution"
      ],
      "reponse": 3,
      "explication": "Le tableau de Delacroix est devenu une image célèbre de la liberté et du peuple."
    },
    {
      "id": "cul-065",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "À quel domaine Gustave Eiffel appartient-il principalement ?",
      "choix": [
        "L’ingénierie",
        "La littérature",
        "La médecine",
        "La chanson"
      ],
      "reponse": 0,
      "explication": "Gustave Eiffel était ingénieur et entrepreneur, associé notamment aux constructions métalliques."
    },
    {
      "id": "cul-066",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel monument est un symbole de Paris construit en métal ?",
      "choix": [
        "Le pont du Gard",
        "La tour Eiffel",
        "Le château de Versailles",
        "Les grottes de Lascaux"
      ],
      "reponse": 1,
      "explication": "La tour Eiffel est l’un des monuments les plus connus de Paris et de la France."
    },
    {
      "id": "cul-067",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel musée parisien est aussi connu pour sa pyramide de verre ?",
      "choix": [
        "Le musée Rodin",
        "Le musée Picasso",
        "Le Louvre",
        "Le musée Carnavalet"
      ],
      "reponse": 2,
      "explication": "La pyramide de verre est l’un des accès emblématiques du musée du Louvre."
    },
    {
      "id": "cul-068",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel monument est lié à Louis XIV et à la monarchie absolue ?",
      "choix": [
        "Le Centre Pompidou",
        "Le pont du Gard",
        "Roland-Garros",
        "Versailles"
      ],
      "reponse": 3,
      "explication": "Versailles est un symbole de la monarchie de Louis XIV."
    },
    {
      "id": "cul-069",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel monument normand est une abbaye sur un îlot rocheux ?",
      "choix": [
        "Le Mont-Saint-Michel",
        "L’Arc de triomphe",
        "Le Panthéon",
        "Le château de Chenonceau"
      ],
      "reponse": 0,
      "explication": "Le Mont-Saint-Michel est célèbre pour son abbaye construite sur un îlot."
    },
    {
      "id": "cul-070",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Où se trouvent les peintures préhistoriques de Lascaux ?",
      "choix": [
        "En Savoie",
        "En Dordogne",
        "Dans le Nord",
        "À Paris"
      ],
      "reponse": 1,
      "explication": "Les grottes de Lascaux se trouvent en Dordogne."
    },
    {
      "id": "cul-071",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel monument parisien se trouve en haut de l’avenue des Champs-Élysées ?",
      "choix": [
        "La Sainte-Chapelle",
        "Le musée d’Orsay",
        "L’Arc de triomphe",
        "La Conciergerie"
      ],
      "reponse": 2,
      "explication": "L’Arc de triomphe se trouve place Charles-de-Gaulle, au bout des Champs-Élysées."
    },
    {
      "id": "cul-072",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel château de la Loire enjambe le Cher ?",
      "choix": [
        "Chambord",
        "Versailles",
        "Vaux-le-Vicomte",
        "Chenonceau"
      ],
      "reponse": 3,
      "explication": "Le château de Chenonceau est connu pour ses galeries au-dessus du Cher."
    },
    {
      "id": "cul-073",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle cité médiévale fortifiée est célèbre dans l’Aude ?",
      "choix": [
        "Carcassonne",
        "Lille",
        "Nantes",
        "Bordeaux"
      ],
      "reponse": 0,
      "explication": "Carcassonne est une cité médiévale fortifiée classée au patrimoine mondial de l’UNESCO."
    },
    {
      "id": "cul-074",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel style architectural est associé aux voûtes d’ogives et aux arcs-boutants ?",
      "choix": [
        "Le cubisme",
        "Le gothique",
        "L’impressionnisme",
        "Le fauvisme"
      ],
      "reponse": 1,
      "explication": "Le style gothique se reconnaît notamment aux arcs-boutants et aux voûtes d’ogives."
    },
    {
      "id": "cul-075",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel musée parisien est installé dans une ancienne gare ?",
      "choix": [
        "Le Louvre",
        "Le musée du quai Branly",
        "Le musée d’Orsay",
        "Le Centre Pompidou"
      ],
      "reponse": 2,
      "explication": "Le musée d’Orsay est installé dans une ancienne gare construite pour l’Exposition universelle de 1900."
    },
    {
      "id": "cul-076",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel musée parisien est consacré à l’art moderne et contemporain ?",
      "choix": [
        "Le château de Versailles",
        "Le musée de l’Armée",
        "Le palais du Luxembourg",
        "Le Centre Pompidou"
      ],
      "reponse": 3,
      "explication": "Le Centre Pompidou est un grand musée national d’art moderne et contemporain."
    },
    {
      "id": "cul-077",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle basilique parisienne est située sur la butte Montmartre ?",
      "choix": [
        "Le Sacré-Cœur",
        "Notre-Dame",
        "La Sainte-Chapelle",
        "La Madeleine"
      ],
      "reponse": 0,
      "explication": "La basilique du Sacré-Cœur domine Paris depuis la butte Montmartre."
    },
    {
      "id": "cul-078",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel organisme français est un grand centre national de recherche scientifique ?",
      "choix": [
        "L’OIF",
        "Le CNRS",
        "L’Académie française",
        "Le Festival de Cannes"
      ],
      "reponse": 1,
      "explication": "Le CNRS est un organisme public majeur de recherche scientifique."
    },
    {
      "id": "cul-079",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle agence française est chargée de la politique spatiale nationale ?",
      "choix": [
        "Le Louvre",
        "Le CNC",
        "Le CNES",
        "La Comédie-Française"
      ],
      "reponse": 2,
      "explication": "Le CNES est le Centre national d’études spatiales."
    },
    {
      "id": "cul-080",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quels frères sont associés au premier vol humain en ballon à air chaud ?",
      "choix": [
        "Les frères Lumière",
        "Les frères Goncourt",
        "Les frères Grimm",
        "Les frères Montgolfier"
      ],
      "reponse": 3,
      "explication": "Les frères Montgolfier sont associés aux débuts du ballon à air chaud."
    },
    {
      "id": "cul-081",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel explorateur français est associé au navire Calypso ?",
      "choix": [
        "Jacques-Yves Cousteau",
        "Louis Pasteur",
        "Auguste Rodin",
        "Antoine de Saint-Exupéry"
      ],
      "reponse": 0,
      "explication": "Jacques-Yves Cousteau a popularisé la découverte et la protection des océans."
    },
    {
      "id": "cul-082",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel lanceur européen est lié au Centre spatial guyanais de Kourou ?",
      "choix": [
        "Concorde",
        "Ariane",
        "TGV",
        "Mirage"
      ],
      "reponse": 1,
      "explication": "Ariane est une famille de lanceurs européens liée à Kourou en Guyane."
    },
    {
      "id": "cul-083",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel compositeur français est associé au Boléro ?",
      "choix": [
        "Georges Bizet",
        "Claude Debussy",
        "Maurice Ravel",
        "Charles Gounod"
      ],
      "reponse": 2,
      "explication": "Le Boléro est l’œuvre la plus célèbre de Maurice Ravel."
    },
    {
      "id": "cul-084",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel chanteur a interprété Ne me quitte pas ?",
      "choix": [
        "Charles Aznavour",
        "Édith Piaf",
        "Serge Gainsbourg",
        "Jacques Brel"
      ],
      "reponse": 3,
      "explication": "Jacques Brel, artiste belge francophone, est l’interprète de Ne me quitte pas."
    },
    {
      "id": "cul-085",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel chanteur français a interprété La Bohème ?",
      "choix": [
        "Charles Aznavour",
        "Jacques Brel",
        "Georges Bizet",
        "Maurice Ravel"
      ],
      "reponse": 0,
      "explication": "La Bohème est l’une des chansons les plus connues de Charles Aznavour."
    },
    {
      "id": "cul-086",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle cérémonie récompense le cinéma français ?",
      "choix": [
        "Les Molières",
        "Les César",
        "Les Victoires du jazz",
        "Le prix Goncourt"
      ],
      "reponse": 1,
      "explication": "Les César récompensent chaque année le cinéma français."
    },
    {
      "id": "cul-087",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel film français de 2011 met en scène l’amitié entre Philippe et Driss ?",
      "choix": [
        "Amélie Poulain",
        "La Grande Vadrouille",
        "Intouchables",
        "Les Choristes"
      ],
      "reponse": 2,
      "explication": "Intouchables est un grand succès du cinéma français contemporain."
    },
    {
      "id": "cul-088",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel acteur comique est célèbre pour La Grande Vadrouille et Le Gendarme de Saint-Tropez ?",
      "choix": [
        "Jean Gabin",
        "Alain Delon",
        "Omar Sy",
        "Louis de Funès"
      ],
      "reponse": 3,
      "explication": "Louis de Funès est l’un des acteurs comiques français les plus populaires."
    },
    {
      "id": "cul-089",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel festival de théâtre a lieu chaque été en Provence ?",
      "choix": [
        "Le Festival d’Avignon",
        "Le Festival de Cannes",
        "Les Vieilles Charrues",
        "Le Salon du livre"
      ],
      "reponse": 0,
      "explication": "Le Festival d’Avignon est un grand rendez-vous du théâtre et du spectacle vivant."
    },
    {
      "id": "cul-090",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle troupe nationale est surnommée la Maison de Molière ?",
      "choix": [
        "L’Opéra de Paris",
        "La Comédie-Française",
        "Le Moulin Rouge",
        "Le Théâtre du Soleil"
      ],
      "reponse": 1,
      "explication": "La Comédie-Française est souvent appelée la Maison de Molière."
    },
    {
      "id": "cul-091",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel festival est un grand rendez-vous de la bande dessinée en France ?",
      "choix": [
        "Le Festival de Cannes",
        "Le Tour de France",
        "Le Festival d’Angoulême",
        "La Fête de la musique"
      ],
      "reponse": 2,
      "explication": "Le Festival international de la bande dessinée d’Angoulême est très connu dans le monde francophone."
    },
    {
      "id": "cul-092",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel guide attribue des étoiles aux restaurants ?",
      "choix": [
        "Le Code civil",
        "Le Petit Robert",
        "Le Journal officiel",
        "Le guide Michelin"
      ],
      "reponse": 3,
      "explication": "Le guide Michelin est célèbre pour ses étoiles attribuées aux restaurants."
    },
    {
      "id": "cul-093",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel label protège l’origine géographique et le savoir-faire d’un produit alimentaire ?",
      "choix": [
        "L’AOC ou l’AOP",
        "Le permis de conduire",
        "Le livret de famille",
        "Le passeport"
      ],
      "reponse": 0,
      "explication": "Les labels AOC et AOP protègent l’origine et le savoir-faire de certains produits."
    },
    {
      "id": "cul-094",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel plat provençal associe souvent des légumes comme aubergine, courgette et tomate ?",
      "choix": [
        "La choucroute",
        "La ratatouille",
        "La galette des rois",
        "Le bœuf bourguignon"
      ],
      "reponse": 1,
      "explication": "La ratatouille est une spécialité provençale très connue."
    },
    {
      "id": "cul-095",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel plat du Sud-Ouest associe souvent haricots et viandes confites ?",
      "choix": [
        "La quiche lorraine",
        "La bouillabaisse",
        "Le cassoulet",
        "La crêpe complète"
      ],
      "reponse": 2,
      "explication": "Le cassoulet est une spécialité du Sud-Ouest."
    },
    {
      "id": "cul-096",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle soupe de poisson est associée à Marseille ?",
      "choix": [
        "Le pot-au-feu",
        "La choucroute",
        "La tartiflette",
        "La bouillabaisse"
      ],
      "reponse": 3,
      "explication": "La bouillabaisse est une spécialité marseillaise à base de poissons."
    },
    {
      "id": "cul-097",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel produit laitier est très associé à la diversité gastronomique française ?",
      "choix": [
        "Le fromage",
        "Le café soluble",
        "Le maïs soufflé",
        "Le ketchup"
      ],
      "reponse": 0,
      "explication": "La France est connue pour la grande diversité de ses fromages."
    },
    {
      "id": "cul-098",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle tradition française consiste à partager un repas reconnu par l’UNESCO ?",
      "choix": [
        "Le fast-food obligatoire",
        "Le repas gastronomique des Français",
        "Le thé de cinq heures",
        "Le barbecue national"
      ],
      "reponse": 1,
      "explication": "Le repas gastronomique des Français est inscrit au patrimoine culturel immatériel de l’UNESCO."
    },
    {
      "id": "cul-099",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel sport est associé au Tournoi des Six Nations ?",
      "choix": [
        "Le tennis",
        "Le handball",
        "Le rugby à XV",
        "Le cyclisme"
      ],
      "reponse": 2,
      "explication": "Le Tournoi des Six Nations est une grande compétition européenne de rugby à XV."
    },
    {
      "id": "cul-100",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel événement sportif est symbolisé par le maillot jaune ?",
      "choix": [
        "Roland-Garros",
        "Les César",
        "Le Festival de Cannes",
        "Le Tour de France"
      ],
      "reponse": 3,
      "explication": "Le maillot jaune distingue le leader du classement général du Tour de France."
    },
    {
      "id": "cul-101",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quel pays a accueilli et gagné la Coupe du monde de football masculine en 1998 ?",
      "choix": [
        "La France",
        "L’Espagne",
        "Le Brésil",
        "L’Allemagne"
      ],
      "reponse": 0,
      "explication": "La France a organisé et remporté la Coupe du monde masculine de football en 1998."
    },
    {
      "id": "cul-102",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle compétition sportive mondiale Paris a-t-elle accueillie en 2024 ?",
      "choix": [
        "La Coupe du monde de rugby",
        "Les Jeux olympiques et paralympiques",
        "Le Super Bowl",
        "La Coupe Davis uniquement"
      ],
      "reponse": 1,
      "explication": "Paris a accueilli les Jeux olympiques et paralympiques en 2024."
    },
    {
      "id": "cul-103",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Quelle langue est principalement à l’origine du français ?",
      "choix": [
        "Le grec moderne",
        "Le russe",
        "Le latin",
        "Le chinois"
      ],
      "reponse": 2,
      "explication": "Le français est une langue romane issue principalement du latin."
    },
    {
      "id": "cul-104",
      "theme": "culture",
      "difficulte": "moyen",
      "question": "Que signifie l’expression donner sa langue au chat ?",
      "choix": [
        "Parler très vite",
        "Apprendre une langue étrangère",
        "Refuser de répondre par politesse",
        "Renoncer à deviner une réponse"
      ],
      "reponse": 3,
      "explication": "Cette expression signifie que l’on abandonne l’idée de trouver la réponse."
    },
    {
      "id": "cul-105",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quelle ordonnance de 1539 a renforcé l’usage du français dans les actes officiels ?",
      "choix": [
        "L’ordonnance de Villers-Cotterêts",
        "L’édit de Nantes",
        "La loi de 1905",
        "Le Code noir"
      ],
      "reponse": 0,
      "explication": "L’ordonnance de Villers-Cotterêts est un repère important dans l’histoire administrative de la langue française."
    },
    {
      "id": "cul-106",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Environ combien de personnes parlent français dans le monde selon les estimations récentes ?",
      "choix": [
        "Environ 20 millions",
        "Plus de 300 millions",
        "Moins de 5 millions",
        "Plus de 2 milliards"
      ],
      "reponse": 1,
      "explication": "Les estimations récentes de la Francophonie dépassent les 300 millions de locuteurs."
    },
    {
      "id": "cul-107",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel écrivain martiniquais est associé au mouvement de la négritude ?",
      "choix": [
        "Marcel Proust",
        "Émile Zola",
        "Aimé Césaire",
        "Georges Bizet"
      ],
      "reponse": 2,
      "explication": "Aimé Césaire est un écrivain et homme politique martiniquais lié à la négritude."
    },
    {
      "id": "cul-108",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel poète et homme d’État sénégalais fut membre de l’Académie française ?",
      "choix": [
        "Louis Pasteur",
        "Gustave Eiffel",
        "Pierre de Coubertin",
        "Léopold Sédar Senghor"
      ],
      "reponse": 3,
      "explication": "Léopold Sédar Senghor est une grande figure francophone et a siégé à l’Académie française."
    },
    {
      "id": "cul-109",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel auteur a popularisé les personnages de Gargantua et Pantagruel ?",
      "choix": [
        "François Rabelais",
        "Jean de La Fontaine",
        "Albert Camus",
        "Paul Cézanne"
      ],
      "reponse": 0,
      "explication": "Rabelais est un auteur majeur de la Renaissance française."
    },
    {
      "id": "cul-110",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel écrivain est l’auteur des Essais ?",
      "choix": [
        "Voltaire",
        "Michel de Montaigne",
        "Victor Hugo",
        "Saint-Exupéry"
      ],
      "reponse": 1,
      "explication": "Montaigne est connu pour ses Essais, œuvre majeure de la littérature française."
    },
    {
      "id": "cul-111",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel romancier est associé à La Comédie humaine ?",
      "choix": [
        "Molière",
        "Claude Debussy",
        "Honoré de Balzac",
        "Auguste Rodin"
      ],
      "reponse": 2,
      "explication": "Balzac a rassemblé de nombreux romans sous le titre La Comédie humaine."
    },
    {
      "id": "cul-112",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel roman de Flaubert raconte l’histoire d’Emma Bovary ?",
      "choix": [
        "Les Misérables",
        "Le Petit Prince",
        "Le Deuxième Sexe",
        "Madame Bovary"
      ],
      "reponse": 3,
      "explication": "Madame Bovary est le roman le plus célèbre de Gustave Flaubert."
    },
    {
      "id": "cul-113",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel dramaturge a écrit Le Cid ?",
      "choix": [
        "Pierre Corneille",
        "Jean Racine",
        "Molière",
        "Victor Hugo"
      ],
      "reponse": 0,
      "explication": "Le Cid est une pièce célèbre de Pierre Corneille."
    },
    {
      "id": "cul-114",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quelle tragédie célèbre est de Jean Racine ?",
      "choix": [
        "Tartuffe",
        "Phèdre",
        "Cyrano de Bergerac",
        "Lorenzaccio"
      ],
      "reponse": 1,
      "explication": "Phèdre est l’une des tragédies les plus connues de Racine."
    },
    {
      "id": "cul-115",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel roman de Stendhal suit le personnage de Julien Sorel ?",
      "choix": [
        "Germinal",
        "L’Étranger",
        "Le Rouge et le Noir",
        "Notre-Dame de Paris"
      ],
      "reponse": 2,
      "explication": "Julien Sorel est le héros du Rouge et le Noir de Stendhal."
    },
    {
      "id": "cul-116",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel écrivain a écrit des nouvelles comme Boule de Suif ?",
      "choix": [
        "Paul Verlaine",
        "Marguerite Yourcenar",
        "Simone de Beauvoir",
        "Guy de Maupassant"
      ],
      "reponse": 3,
      "explication": "Maupassant est un auteur connu pour ses nouvelles réalistes."
    },
    {
      "id": "cul-117",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel poète est associé au Bateau ivre ?",
      "choix": [
        "Arthur Rimbaud",
        "Charles Baudelaire",
        "Jean de La Fontaine",
        "Voltaire"
      ],
      "reponse": 0,
      "explication": "Le Bateau ivre est un poème célèbre d’Arthur Rimbaud."
    },
    {
      "id": "cul-118",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel peintre français a réalisé Le Déjeuner sur l’herbe ?",
      "choix": [
        "Claude Monet",
        "Édouard Manet",
        "Auguste Renoir",
        "Eugène Delacroix"
      ],
      "reponse": 1,
      "explication": "Le Déjeuner sur l’herbe de Manet est une œuvre importante du XIXe siècle."
    },
    {
      "id": "cul-119",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel peintre français est une figure majeure du postimpressionnisme et de la peinture moderne ?",
      "choix": [
        "Louis Pasteur",
        "Georges Bizet",
        "Paul Cézanne",
        "Louis Braille"
      ],
      "reponse": 2,
      "explication": "Paul Cézanne est souvent présenté comme un précurseur de la peinture moderne."
    },
    {
      "id": "cul-120",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel artiste français a vécu en Polynésie et peint des scènes célèbres de Tahiti ?",
      "choix": [
        "Auguste Rodin",
        "Claude Monet",
        "Nicolas Poussin",
        "Paul Gauguin"
      ],
      "reponse": 3,
      "explication": "Paul Gauguin est connu pour une partie de son œuvre réalisée en Polynésie."
    },
    {
      "id": "cul-121",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel peintre français du XVIIe siècle est une référence du classicisme ?",
      "choix": [
        "Nicolas Poussin",
        "Henri Matisse",
        "Paul Gauguin",
        "Édouard Manet"
      ],
      "reponse": 0,
      "explication": "Nicolas Poussin est une grande référence de la peinture classique française."
    },
    {
      "id": "cul-122",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel monument antique de Nîmes est un amphithéâtre romain ?",
      "choix": [
        "Le Sacré-Cœur",
        "Les arènes de Nîmes",
        "Le Panthéon",
        "La tour Eiffel"
      ],
      "reponse": 1,
      "explication": "Les arènes de Nîmes sont un amphithéâtre romain encore utilisé pour des spectacles."
    },
    {
      "id": "cul-123",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel château a inspiré l’architecture classique française avant Versailles ?",
      "choix": [
        "Chambord",
        "Chenonceau",
        "Vaux-le-Vicomte",
        "Amboise"
      ],
      "reponse": 2,
      "explication": "Vaux-le-Vicomte est un château important de l’architecture classique française."
    },
    {
      "id": "cul-124",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel physicien français a découvert la radioactivité naturelle ?",
      "choix": [
        "Louis Braille",
        "Jacques-Yves Cousteau",
        "Georges Méliès",
        "Henri Becquerel"
      ],
      "reponse": 3,
      "explication": "Henri Becquerel a découvert la radioactivité naturelle, domaine lié ensuite aux travaux de Marie Curie."
    },
    {
      "id": "cul-125",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel inventeur est associé au daguerréotype, ancien procédé photographique ?",
      "choix": [
        "Louis Daguerre",
        "Louis Pasteur",
        "Gustave Eiffel",
        "Maurice Ravel"
      ],
      "reponse": 0,
      "explication": "Louis Daguerre est associé au daguerréotype, procédé important dans l’histoire de la photographie."
    },
    {
      "id": "cul-126",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel médecin et bactériologiste a identifié le bacille de la peste ?",
      "choix": [
        "Louis Blériot",
        "Alexandre Yersin",
        "Hector Berlioz",
        "Jean Vilar"
      ],
      "reponse": 1,
      "explication": "Alexandre Yersin a identifié le bacille responsable de la peste à la fin du XIXe siècle."
    },
    {
      "id": "cul-127",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel pionnier français a traversé la Manche en avion en 1909 ?",
      "choix": [
        "Pierre de Coubertin",
        "André-Marie Ampère",
        "Louis Blériot",
        "Marcel Proust"
      ],
      "reponse": 2,
      "explication": "Louis Blériot est célèbre pour sa traversée de la Manche en avion."
    },
    {
      "id": "cul-128",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel savant a donné son nom à l’unité de courant électrique ?",
      "choix": [
        "Antoine de Saint-Exupéry",
        "Eugène Delacroix",
        "Georges Bizet",
        "André-Marie Ampère"
      ],
      "reponse": 3,
      "explication": "L’ampère, unité de courant électrique, porte le nom d’André-Marie Ampère."
    },
    {
      "id": "cul-129",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel chimiste est souvent considéré comme un fondateur de la chimie moderne ?",
      "choix": [
        "Antoine Lavoisier",
        "Claude Monet",
        "Charles Aznavour",
        "Jean de La Fontaine"
      ],
      "reponse": 0,
      "explication": "Antoine Lavoisier est une grande figure de l’histoire de la chimie moderne."
    },
    {
      "id": "cul-130",
      "theme": "culture",
      "difficulte": "difficile",
      "question": "Quel Français est considéré comme le rénovateur des Jeux olympiques modernes ?",
      "choix": [
        "Louis Pasteur",
        "Pierre de Coubertin",
        "Victor Hugo",
        "Claude Debussy"
      ],
      "reponse": 1,
      "explication": "Pierre de Coubertin a joué un rôle majeur dans la renaissance des Jeux olympiques modernes."
    },
    {
      "id": "vie-001",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "À quoi sert la carte Vitale ?",
      "choix": [
        "À faciliter les remboursements de soins",
        "À voter aux élections",
        "À payer ses impôts",
        "À obtenir un logement"
      ],
      "reponse": 0,
      "explication": "La carte Vitale transmet électroniquement les informations nécessaires au remboursement par l'Assurance maladie. Elle n'est pas une pièce d'identité."
    },
    {
      "id": "vie-002",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel numéro faut-il composer pour joindre les pompiers ?",
      "choix": [
        "Le 17",
        "Le 18",
        "Le 115",
        "Le 15"
      ],
      "reponse": 1,
      "explication": "Le 18 permet de joindre les pompiers. Le 112 fonctionne aussi comme numéro d'urgence européen."
    },
    {
      "id": "vie-003",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Que signifie le sigle SMIC ?",
      "choix": [
        "Service médical intercommunal",
        "Statut minimal des indépendants",
        "Salaire minimum interprofessionnel de croissance",
        "Système municipal d'information"
      ],
      "reponse": 2,
      "explication": "Le SMIC est le salaire minimum légal pour les salariés. Il protège contre une rémunération inférieure au minimum prévu par la loi."
    },
    {
      "id": "vie-004",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quelle est la durée légale de référence du travail à temps complet ?",
      "choix": [
        "30 heures par semaine",
        "39 heures obligatoires",
        "45 heures par semaine",
        "35 heures par semaine"
      ],
      "reponse": 3,
      "explication": "La durée légale de référence est de 35 heures par semaine. Des heures supplémentaires peuvent exister dans les conditions prévues par le droit du travail."
    },
    {
      "id": "vie-005",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Entre quels âges l'instruction est-elle obligatoire en France ?",
      "choix": [
        "De 3 à 16 ans",
        "De 6 à 16 ans",
        "De 3 à 18 ans",
        "De 5 à 15 ans"
      ],
      "reponse": 0,
      "explication": "L'instruction est obligatoire de 3 à 16 ans. De 16 à 18 ans, une obligation de formation s'applique."
    },
    {
      "id": "vie-006",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Un divorce supprime-t-il automatiquement l'autorité parentale ?",
      "choix": [
        "Oui, toujours",
        "Non, pas automatiquement",
        "Oui, pour le parent qui déménage",
        "Oui, si l'enfant est mineur"
      ],
      "reponse": 1,
      "explication": "Le divorce ne supprime pas automatiquement l'autorité parentale. En principe, les parents continuent à exercer leurs droits et devoirs dans l'intérêt de l'enfant."
    },
    {
      "id": "vie-007",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Où célèbre-t-on le mariage civil en France ?",
      "choix": [
        "À la préfecture uniquement",
        "Au tribunal pénal",
        "À la mairie",
        "Dans une banque"
      ],
      "reponse": 2,
      "explication": "Le mariage civil est célébré selon les formes légales par l'officier d'état civil, généralement à la mairie. C'est le mariage reconnu par le droit français."
    },
    {
      "id": "vie-008",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Doit-on déclarer ses revenus en France ?",
      "choix": [
        "Non, jamais",
        "Seulement si l'on veut voter",
        "Seulement à la mairie",
        "Oui, lorsque la loi l'exige"
      ],
      "reponse": 3,
      "explication": "Les résidents doivent déclarer leurs revenus selon les règles fiscales applicables. Ils doivent aussi payer les impôts dus."
    },
    {
      "id": "vie-009",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Qui doit payer le loyer et les charges prévus dans un bail ?",
      "choix": [
        "Le locataire",
        "Le propriétaire",
        "Le voisin",
        "La mairie"
      ],
      "reponse": 0,
      "explication": "Le locataire doit respecter le bail, payer le loyer et les charges, et assurer l'entretien courant du logement."
    },
    {
      "id": "vie-010",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel organisme rembourse une partie des frais de santé ?",
      "choix": [
        "La mairie",
        "L'Assurance maladie",
        "Le conseil de classe",
        "Le syndic"
      ],
      "reponse": 1,
      "explication": "L'Assurance maladie rembourse une partie des frais de santé selon les règles applicables. Une mutuelle peut compléter ces remboursements."
    },
    {
      "id": "vie-011",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "À quoi sert une mutuelle ou complémentaire santé ?",
      "choix": [
        "À remplacer le médecin",
        "À délivrer un passeport",
        "À compléter certains remboursements de santé",
        "À inscrire un enfant à l'école"
      ],
      "reponse": 2,
      "explication": "Une complémentaire santé peut prendre en charge tout ou partie des frais restant après l'Assurance maladie. Son niveau de prise en charge dépend du contrat."
    },
    {
      "id": "vie-012",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Que permet le tiers payant ?",
      "choix": [
        "Ne jamais payer aucun soin",
        "Choisir le montant du remboursement",
        "Remplacer une ordonnance",
        "Ne pas avancer tout ou partie des frais pris en charge"
      ],
      "reponse": 3,
      "explication": "Le tiers payant permet, dans certaines situations, de ne pas avancer la part prise en charge. Il ne signifie pas que tous les soins sont toujours gratuits."
    },
    {
      "id": "vie-013",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel numéro appelle-t-on pour une urgence médicale vitale ?",
      "choix": [
        "Le 15",
        "Le 18",
        "Le 112",
        "Le 17"
      ],
      "reponse": 0,
      "explication": "Le 15 permet de joindre le SAMU pour les urgences médicales. Le 112 est le numéro d'urgence européen."
    },
    {
      "id": "vie-014",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel numéro appelle-t-on pour joindre la police ou la gendarmerie en urgence ?",
      "choix": [
        "Le 15",
        "Le 17",
        "Le 18",
        "Le 119"
      ],
      "reponse": 1,
      "explication": "Le 17 permet de joindre la police ou la gendarmerie en cas d'urgence. Il faut l'utiliser pour signaler un danger ou une infraction nécessitant une intervention."
    },
    {
      "id": "vie-015",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel est le numéro d'urgence européen ?",
      "choix": [
        "Le 36 46",
        "Le 39 49",
        "Le 112",
        "Le 115"
      ],
      "reponse": 2,
      "explication": "Le 112 est le numéro d'urgence européen. Il peut être composé dans l'Union européenne pour joindre les secours."
    },
    {
      "id": "vie-016",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Que doit contenir en général un contrat de travail ?",
      "choix": [
        "Une autorisation de ne pas payer le salarié",
        "Une dispense de sécurité",
        "Une interdiction de tout congé",
        "Des conditions de travail conformes à la loi"
      ],
      "reponse": 3,
      "explication": "Le contrat de travail fixe les conditions de la relation de travail. Il doit respecter la loi et les conventions collectives applicables."
    },
    {
      "id": "vie-017",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Le travail dissimulé est-il légal ?",
      "choix": [
        "Non, il est illégal",
        "Oui, si le salarié accepte",
        "Oui, pour quelques heures seulement",
        "Oui, sans contrat écrit"
      ],
      "reponse": 0,
      "explication": "Le travail dissimulé est illégal. Il prive notamment le salarié de droits sociaux et expose l'employeur à des sanctions."
    },
    {
      "id": "vie-018",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Un salarié peut-il se syndiquer ?",
      "choix": [
        "Non, jamais",
        "Oui, dans les conditions prévues par la loi",
        "Seulement avec l'accord du maire",
        "Seulement s'il est fonctionnaire"
      ],
      "reponse": 1,
      "explication": "Les salariés peuvent adhérer à un syndicat. Les syndicats défendent les intérêts professionnels des travailleurs."
    },
    {
      "id": "vie-019",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Le droit de grève est-il reconnu en France ?",
      "choix": [
        "Non, il est toujours interdit",
        "Seulement pour les retraités",
        "Oui, dans les conditions prévues par la loi",
        "Uniquement pendant les vacances"
      ],
      "reponse": 2,
      "explication": "Le droit de grève est reconnu. Son exercice doit respecter les conditions prévues par la loi."
    },
    {
      "id": "vie-020",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Les discriminations au travail sont-elles autorisées ?",
      "choix": [
        "Oui, si elles sont discrètes",
        "Oui, pour choisir un logement",
        "Oui, par tradition",
        "Non, elles sont interdites"
      ],
      "reponse": 3,
      "explication": "Les discriminations sont interdites, notamment dans l'emploi. Les femmes et les hommes doivent bénéficier de l'égalité professionnelle."
    },
    {
      "id": "vie-021",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Qui doit délivrer un logement décent au locataire ?",
      "choix": [
        "Le propriétaire",
        "Le locataire",
        "Le voisin",
        "L'école"
      ],
      "reponse": 0,
      "explication": "Le propriétaire doit délivrer un logement répondant aux exigences légales de décence. Il doit aussi respecter les droits du locataire."
    },
    {
      "id": "vie-022",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Le locataire peut-il transformer librement le logement sans autorisation ?",
      "choix": [
        "Oui, toujours",
        "Non, certaines transformations nécessitent une autorisation",
        "Oui, si les travaux sont bruyants",
        "Oui, sans prévenir personne"
      ],
      "reponse": 1,
      "explication": "Le locataire doit respecter le bail. Certaines transformations ou travaux nécessitent l'autorisation du propriétaire."
    },
    {
      "id": "vie-023",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "L'école publique est-elle laïque ?",
      "choix": [
        "Non, elle choisit une religion officielle",
        "Seulement au lycée",
        "Oui, elle respecte la neutralité religieuse",
        "Seulement dans les écoles privées"
      ],
      "reponse": 2,
      "explication": "L'école publique est laïque. Elle respecte la liberté de conscience et la neutralité du service public."
    },
    {
      "id": "vie-024",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "L'école publique obligatoire est-elle gratuite pour l'enseignement ?",
      "choix": [
        "Non, l'enseignement est toujours payant",
        "Seulement pour les adultes",
        "Seulement si l'enfant travaille",
        "Oui, l'enseignement public est gratuit"
      ],
      "reponse": 3,
      "explication": "L'enseignement public est gratuit. Des frais annexes peuvent exister, mais l'accès à l'enseignement public ne dépend pas du paiement de frais de scolarité."
    },
    {
      "id": "vie-025",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel établissement vient généralement après l'école élémentaire ?",
      "choix": [
        "Le collège",
        "Le lycée",
        "L'université",
        "La préfecture"
      ],
      "reponse": 0,
      "explication": "Après l'école élémentaire, les élèves vont généralement au collège. Le lycée vient ensuite."
    },
    {
      "id": "vie-026",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Les violences physiques ou psychologiques contre les enfants sont-elles un moyen d'éducation autorisé ?",
      "choix": [
        "Oui, si elles sont rares",
        "Non, elles sont interdites",
        "Oui, à la maison seulement",
        "Oui, avec accord de l'école"
      ],
      "reponse": 1,
      "explication": "Les violences éducatives ordinaires sont interdites. L'autorité parentale doit s'exercer dans l'intérêt et le respect de l'enfant."
    },
    {
      "id": "vie-027",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Le mariage forcé est-il admis par le droit français ?",
      "choix": [
        "Oui, si la famille est d'accord",
        "Oui, s'il existe une cérémonie",
        "Non, le consentement libre est indispensable",
        "Oui, pour les majeurs uniquement"
      ],
      "reponse": 2,
      "explication": "Le mariage repose sur le consentement libre des époux. Le mariage forcé n'est pas admis."
    },
    {
      "id": "vie-028",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "La polygamie est-elle reconnue par le droit français ?",
      "choix": [
        "Oui, partout en France",
        "Oui, avec autorisation préfectorale",
        "Oui, si elle existe à l'étranger",
        "Non, elle n'est pas reconnue"
      ],
      "reponse": 3,
      "explication": "La polygamie n'est pas reconnue par le droit français. Le mariage français repose sur les règles civiles applicables en France."
    },
    {
      "id": "vie-029",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "À quoi servent la carte nationale d'identité et le passeport ?",
      "choix": [
        "À prouver son identité et voyager selon les cas",
        "À remplacer un contrat de travail",
        "À payer le loyer",
        "À obtenir automatiquement une mutuelle"
      ],
      "reponse": 0,
      "explication": "La carte nationale d'identité et le passeport sont des documents d'identité. Le passeport sert aussi aux voyages selon les pays concernés."
    },
    {
      "id": "vie-030",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Où déclare-t-on une naissance à l'état civil ?",
      "choix": [
        "À la banque des parents",
        "À la mairie du lieu de naissance",
        "Au conseil de classe",
        "Chez le propriétaire"
      ],
      "reponse": 1,
      "explication": "Une naissance doit être déclarée à l'état civil dans le délai légal. La déclaration se fait auprès de la mairie du lieu de naissance."
    },
    {
      "id": "vie-031",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "L'autorité parentale concerne principalement quoi ?",
      "choix": [
        "Le paiement des impôts locaux",
        "La gestion d'une copropriété",
        "La protection, l'entretien et l'éducation de l'enfant",
        "Le vote aux élections"
      ],
      "reponse": 2,
      "explication": "L'autorité parentale réunit des droits et devoirs exercés dans l'intérêt de l'enfant. Elle concerne notamment sa protection, son entretien et son éducation."
    },
    {
      "id": "vie-032",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "La pension alimentaire est-elle la même chose que l'autorité parentale ?",
      "choix": [
        "Oui, c'est exactement la même chose",
        "Oui, seulement après un mariage",
        "Oui, si le juge le dit toujours",
        "Non, ce sont deux questions distinctes"
      ],
      "reponse": 3,
      "explication": "La pension alimentaire et la résidence des enfants sont distinctes de l'autorité parentale. Un parent peut avoir des obligations financières même si l'organisation familiale change."
    },
    {
      "id": "vie-033",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Doit-on respecter le code de la route ?",
      "choix": [
        "Oui, pour la sécurité de tous",
        "Non, seulement les conducteurs professionnels",
        "Seulement en ville",
        "Seulement en cas de pluie"
      ],
      "reponse": 0,
      "explication": "Le respect du code de la route protège les usagers. Il fait partie des règles de vie commune."
    },
    {
      "id": "vie-034",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Que doit-on faire face à une personne en danger grave et immédiat ?",
      "choix": [
        "Ignorer la situation",
        "Alerter les secours si possible",
        "Filmer sans appeler",
        "Attendre le lendemain"
      ],
      "reponse": 1,
      "explication": "Il faut alerter les secours lorsqu'une personne est en danger. Porter assistance, sans se mettre soi-même en danger, relève du devoir de solidarité."
    },
    {
      "id": "vie-035",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "L'obligation de formation concerne les jeunes jusqu'à quel âge ?",
      "choix": [
        "16 ans",
        "17 ans",
        "18 ans",
        "21 ans"
      ],
      "reponse": 2,
      "explication": "Après l'instruction obligatoire jusqu'à 16 ans, l'obligation de formation s'étend jusqu'à 18 ans. Elle peut prendre la forme d'études, d'apprentissage ou d'un accompagnement."
    },
    {
      "id": "vie-036",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Qui peut aider à résoudre un litige locatif avant le tribunal ?",
      "choix": [
        "Un jury de concours",
        "Un arbitre sportif",
        "Un bureau de vote",
        "Un dispositif de conciliation"
      ],
      "reponse": 3,
      "explication": "Les litiges locatifs peuvent être orientés vers la conciliation. Si cela ne suffit pas, les juridictions compétentes peuvent être saisies."
    },
    {
      "id": "vie-037",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Le divorce est-il organisé librement sans règle juridique ?",
      "choix": [
        "Non, il suit les procédures prévues par la loi",
        "Oui, chacun décide seul",
        "Oui, seulement par accord oral",
        "Oui, à la mairie sans conditions"
      ],
      "reponse": 0,
      "explication": "Le divorce est prononcé ou constaté selon les procédures prévues par la loi. Les conséquences familiales sont également encadrées."
    },
    {
      "id": "vie-038",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Les femmes et les hommes doivent-ils bénéficier de l'égalité professionnelle ?",
      "choix": [
        "Non, l'employeur choisit librement",
        "Oui, dans les conditions prévues par le droit",
        "Seulement dans le public",
        "Seulement après 35 ans"
      ],
      "reponse": 1,
      "explication": "L'égalité professionnelle entre les femmes et les hommes est un principe du droit du travail. Les discriminations sont interdites."
    },
    {
      "id": "vie-039",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "À quoi sert le conseil de prud'hommes ?",
      "choix": [
        "À délivrer des passeports",
        "À fixer les programmes scolaires",
        "À juger les litiges individuels liés au contrat de travail",
        "À gérer les urgences médicales"
      ],
      "reponse": 2,
      "explication": "Le conseil de prud'hommes traite les litiges individuels entre salariés et employeurs. Il concerne notamment le contrat de travail."
    },
    {
      "id": "vie-040",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Une cérémonie religieuse suffit-elle à créer un mariage reconnu par l'État ?",
      "choix": [
        "Oui, toujours",
        "Oui, si la famille accepte",
        "Oui, sans acte civil",
        "Non, le mariage reconnu est le mariage civil"
      ],
      "reponse": 3,
      "explication": "En France, le mariage reconnu par l'État est le mariage civil célébré selon les formes légales. Une cérémonie religieuse ne remplace pas le mariage civil."
    },
    {
      "id": "vie-041",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel numéro correspond au SAMU ?",
      "choix": [
        "Le 15",
        "Le 18",
        "Le 17",
        "Le 112"
      ],
      "reponse": 0,
      "explication": "Le 15 correspond au SAMU. Il sert aux urgences médicales."
    },
    {
      "id": "vie-042",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Quel est le rôle principal d'un syndicat de salariés ?",
      "choix": [
        "Vendre des logements",
        "Défendre les intérêts professionnels des salariés",
        "Remplacer le juge",
        "Organiser les examens scolaires"
      ],
      "reponse": 1,
      "explication": "Un syndicat défend les intérêts professionnels des salariés. Il peut informer, représenter et négocier dans le cadre prévu par la loi."
    },
    {
      "id": "vie-043",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Qui doit assurer l'entretien courant d'un logement loué ?",
      "choix": [
        "Le maire, toujours",
        "Le collège du quartier",
        "Le locataire, en général",
        "La police"
      ],
      "reponse": 2,
      "explication": "Le locataire doit assurer l'entretien courant du logement. Le propriétaire reste responsable de délivrer un logement décent."
    },
    {
      "id": "vie-044",
      "theme": "vie-quotidienne",
      "difficulte": "facile",
      "question": "Peut-on refuser de payer les impôts dus parce qu'on n'est pas d'accord ?",
      "choix": [
        "Oui, librement",
        "Oui, seulement en espèces",
        "Oui, si l'on écrit à l'école",
        "Non, les impôts dus doivent être payés"
      ],
      "reponse": 3,
      "explication": "Les impôts légalement dus doivent être payés. Le désaccord politique ne dispense pas de respecter la loi en vigueur."
    },
    {
      "id": "vie-045",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que fait l'Assurance maladie pour les frais de santé ?",
      "choix": [
        "Elle rembourse une partie selon les règles applicables",
        "Elle remplace tous les médecins",
        "Elle délivre les cartes d'identité",
        "Elle fixe les loyers"
      ],
      "reponse": 0,
      "explication": "L'Assurance maladie prend en charge une partie des frais de santé. Le reste peut être payé par l'assuré ou complété par une mutuelle."
    },
    {
      "id": "vie-046",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Pourquoi présenter sa carte Vitale chez un professionnel de santé ?",
      "choix": [
        "Pour obtenir un titre de séjour",
        "Pour transmettre les informations utiles au remboursement",
        "Pour prouver son droit de vote",
        "Pour signer un bail"
      ],
      "reponse": 1,
      "explication": "La carte Vitale facilite la transmission des feuilles de soins. Elle accélère les démarches de remboursement."
    },
    {
      "id": "vie-047",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que signifie l'expression « part restant à charge » en santé ?",
      "choix": [
        "Une amende routière",
        "Un salaire minimum",
        "La partie non prise en charge après remboursements",
        "Un devoir scolaire"
      ],
      "reponse": 2,
      "explication": "Après l'Assurance maladie, il peut rester une somme à payer. Une complémentaire santé peut en couvrir tout ou partie selon le contrat."
    },
    {
      "id": "vie-048",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Le tiers payant supprime-t-il toujours toute dépense de santé ?",
      "choix": [
        "Oui, dans tous les cas",
        "Oui, uniquement pour le passeport",
        "Oui, pour tous les soins privés",
        "Non, il évite seulement d'avancer certaines parts prises en charge"
      ],
      "reponse": 3,
      "explication": "Le tiers payant évite l'avance de frais sur les parts prises en charge. Il ne garantit pas l'absence totale de reste à payer."
    },
    {
      "id": "vie-049",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Quel réflexe adopter en cas d'accident avec blessés ?",
      "choix": [
        "Alerter les secours avec un numéro d'urgence",
        "Partir rapidement",
        "Déplacer toujours la victime sans avis",
        "Attendre la fin de journée"
      ],
      "reponse": 0,
      "explication": "En cas d'accident avec blessés, il faut alerter les secours, par exemple le 15, le 18 ou le 112. Il faut éviter d'aggraver la situation."
    },
    {
      "id": "vie-050",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que signifie signer un CDI ?",
      "choix": [
        "Signer un bail d'habitation",
        "Signer un contrat sans limitation de durée prévue",
        "Signer un certificat d'identité",
        "Signer un contrat scolaire"
      ],
      "reponse": 1,
      "explication": "Un CDI est un contrat de travail à durée indéterminée. Il reste soumis au droit du travail et peut prendre fin selon les règles prévues."
    },
    {
      "id": "vie-051",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "À quoi sert un contrat de travail écrit ou établi entre salarié et employeur ?",
      "choix": [
        "À remplacer l'Assurance maladie",
        "À supprimer le SMIC",
        "À fixer les droits et obligations de la relation de travail",
        "À éviter toute règle collective"
      ],
      "reponse": 2,
      "explication": "Le contrat précise les conditions de travail et de rémunération. Il doit respecter la loi et les conventions collectives applicables."
    },
    {
      "id": "vie-052",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Les heures au-delà de 35 heures sont-elles automatiquement interdites ?",
      "choix": [
        "Oui, toute heure de plus est illégale",
        "Oui, sauf à l'école",
        "Oui, pour les CDI seulement",
        "Non, elles peuvent exister selon les règles applicables"
      ],
      "reponse": 3,
      "explication": "Les 35 heures sont une durée légale de référence. Des heures supplémentaires peuvent être prévues et encadrées."
    },
    {
      "id": "vie-053",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Pourquoi le travail déclaré est-il important ?",
      "choix": [
        "Il ouvre des droits sociaux et respecte la loi",
        "Il évite de payer le salaire",
        "Il supprime les cotisations utiles",
        "Il interdit tout contrat"
      ],
      "reponse": 0,
      "explication": "Le travail déclaré protège le salarié et finance la protection sociale. Le travail dissimulé est illégal."
    },
    {
      "id": "vie-054",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que peut faire un salarié victime d'un litige individuel avec son employeur ?",
      "choix": [
        "Demander un passeport",
        "S'adresser au conseil de prud'hommes si nécessaire",
        "S'inscrire au collège",
        "Appeler uniquement les pompiers"
      ],
      "reponse": 1,
      "explication": "Le conseil de prud'hommes est compétent pour les litiges individuels liés au contrat de travail. La conciliation peut aussi être recherchée."
    },
    {
      "id": "vie-055",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "L'égalité professionnelle concerne notamment quelle situation ?",
      "choix": [
        "Le choix d'une religion par l'État",
        "La décoration d'un logement",
        "L'égalité de traitement entre femmes et hommes au travail",
        "La durée des vacances scolaires"
      ],
      "reponse": 2,
      "explication": "L'égalité professionnelle vise notamment les conditions de recrutement, de rémunération et d'évolution. Les discriminations sont interdites."
    },
    {
      "id": "vie-056",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Un employeur peut-il refuser un emploi pour un motif discriminatoire ?",
      "choix": [
        "Oui, librement",
        "Oui, si le candidat est locataire",
        "Oui, si le poste est à temps plein",
        "Non, la discrimination est interdite"
      ],
      "reponse": 3,
      "explication": "Le refus d'embauche fondé sur un motif discriminatoire est interdit. Le droit protège l'égalité d'accès à l'emploi."
    },
    {
      "id": "vie-057",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que doit faire le locataire en plus de payer son loyer ?",
      "choix": [
        "Payer les charges prévues et entretenir couramment le logement",
        "Décider seul de vendre le logement",
        "Supprimer le bail",
        "Refuser toute assurance"
      ],
      "reponse": 0,
      "explication": "Le locataire doit respecter le bail, payer les charges prévues et assurer l'entretien courant. Ces obligations permettent une occupation normale du logement."
    },
    {
      "id": "vie-058",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que signifie « logement décent » pour un propriétaire ?",
      "choix": [
        "Un logement obligatoirement luxueux",
        "Un logement répondant aux exigences légales minimales",
        "Un logement sans bail",
        "Un logement sans eau ni chauffage"
      ],
      "reponse": 1,
      "explication": "Le propriétaire doit fournir un logement répondant aux exigences de décence. Cela protège la santé, la sécurité et la dignité du locataire."
    },
    {
      "id": "vie-059",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "En cas de désaccord entre locataire et propriétaire, quelle démarche peut être utile ?",
      "choix": [
        "Changer les serrures sans prévenir",
        "Cesser toute communication définitivement",
        "Chercher une conciliation avant une procédure judiciaire",
        "Faire décider l'école"
      ],
      "reponse": 2,
      "explication": "Les litiges locatifs peuvent être orientés vers des dispositifs de conciliation. Le juge peut intervenir si aucune solution n'est trouvée."
    },
    {
      "id": "vie-060",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Pourquoi l'état civil est-il important ?",
      "choix": [
        "Il remplace le contrat de travail",
        "Il fixe les notes scolaires",
        "Il choisit le médecin traitant",
        "Il enregistre officiellement des événements comme la naissance ou le mariage"
      ],
      "reponse": 3,
      "explication": "L'état civil enregistre des événements essentiels de la vie des personnes. Il permet d'établir des actes officiels."
    },
    {
      "id": "vie-061",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Qui est officier d'état civil dans la commune ?",
      "choix": [
        "Le maire ou ses adjoints habilités",
        "Le banquier",
        "Le professeur principal",
        "Le propriétaire"
      ],
      "reponse": 0,
      "explication": "Le maire exerce des fonctions d'officier d'état civil. Il intervient notamment pour les naissances, mariages et décès."
    },
    {
      "id": "vie-062",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Pourquoi faut-il déclarer une naissance dans le délai légal ?",
      "choix": [
        "Pour obtenir automatiquement un emploi",
        "Pour établir l'acte de naissance de l'enfant",
        "Pour éviter toute vaccination",
        "Pour louer un logement"
      ],
      "reponse": 1,
      "explication": "La déclaration permet d'inscrire officiellement la naissance à l'état civil. Elle se fait à la mairie du lieu de naissance."
    },
    {
      "id": "vie-063",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Qu'exige le mariage civil concernant les époux ?",
      "choix": [
        "L'accord obligatoire de l'employeur",
        "La possession d'un logement",
        "Le consentement libre de chacun",
        "L'adhésion à un syndicat"
      ],
      "reponse": 2,
      "explication": "Le mariage repose sur le consentement libre des époux. Sans consentement libre, le mariage forcé est contraire au droit français."
    },
    {
      "id": "vie-064",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Pourquoi la carte nationale d'identité peut-elle être utile dans la vie courante ?",
      "choix": [
        "Pour remplacer une ordonnance",
        "Pour payer automatiquement le loyer",
        "Pour exercer l'autorité parentale",
        "Pour justifier son identité"
      ],
      "reponse": 3,
      "explication": "La carte nationale d'identité est un document officiel d'identité. Elle peut aussi permettre certains déplacements selon les pays."
    },
    {
      "id": "vie-065",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Le passeport sert surtout à quoi ?",
      "choix": [
        "À voyager et prouver son identité selon les situations",
        "À percevoir un salaire",
        "À inscrire un enfant au collège",
        "À remplacer une mutuelle"
      ],
      "reponse": 0,
      "explication": "Le passeport est un document d'identité et de voyage. Ses conditions de délivrance sont encadrées."
    },
    {
      "id": "vie-066",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que signifie la laïcité à l'école publique ?",
      "choix": [
        "L'obligation d'une religion officielle",
        "La neutralité du service public et le respect des consciences",
        "L'interdiction d'apprendre l'histoire",
        "La suppression des règles scolaires"
      ],
      "reponse": 1,
      "explication": "L'école publique est laïque. Elle respecte la liberté de conscience dans le cadre de la neutralité du service public."
    },
    {
      "id": "vie-067",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que recouvre l'obligation d'assiduité scolaire pour un élève inscrit ?",
      "choix": [
        "Choisir librement tous ses jours de présence",
        "Ne venir qu'aux examens",
        "Être présent aux cours obligatoires sauf motif légitime",
        "Remplacer l'école par un emploi à 10 ans"
      ],
      "reponse": 2,
      "explication": "Un élève inscrit doit suivre les enseignements obligatoires. Les absences doivent être justifiées selon les règles de l'établissement."
    },
    {
      "id": "vie-068",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Quel est l'ordre habituel des établissements après l'école élémentaire ?",
      "choix": [
        "Lycée puis collège",
        "Université puis collège",
        "Mairie puis lycée",
        "Collège puis lycée"
      ],
      "reponse": 3,
      "explication": "Le collège suit l'école élémentaire. Le lycée vient ensuite pour poursuivre la formation."
    },
    {
      "id": "vie-069",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Un enfant nouvellement arrivé qui ne maîtrise pas le français peut-il être accompagné ?",
      "choix": [
        "Oui, des dispositifs adaptés peuvent l'aider",
        "Non, aucun accompagnement n'existe",
        "Seulement s'il est majeur",
        "Seulement hors de l'école"
      ],
      "reponse": 0,
      "explication": "Le guide prévoit des dispositifs d'accompagnement pour les enfants nouvellement arrivés qui ne maîtrisent pas le français. L'objectif est de faciliter leur scolarisation."
    },
    {
      "id": "vie-070",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que signifie exercer l'autorité parentale dans l'intérêt de l'enfant ?",
      "choix": [
        "Décider uniquement du loyer des parents",
        "Prendre des décisions pour sa protection, son entretien et son éducation",
        "Remplacer tous les enseignants",
        "Supprimer toute règle familiale"
      ],
      "reponse": 1,
      "explication": "L'autorité parentale est un ensemble de droits et de devoirs. Elle doit viser l'intérêt de l'enfant."
    },
    {
      "id": "vie-071",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Après une séparation, la résidence de l'enfant règle-t-elle à elle seule l'autorité parentale ?",
      "choix": [
        "Oui, toujours",
        "Oui, seul le parent hébergeant décide de tout",
        "Non, résidence et autorité parentale sont distinctes",
        "Oui, cela supprime l'autre parent"
      ],
      "reponse": 2,
      "explication": "La résidence de l'enfant et l'autorité parentale sont deux questions distinctes. Le divorce ne supprime pas automatiquement l'autorité parentale."
    },
    {
      "id": "vie-072",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "À quoi sert une pension alimentaire pour un enfant ?",
      "choix": [
        "À payer les impôts d'une entreprise",
        "À remplacer l'école",
        "À financer un syndicat",
        "À contribuer à son entretien et son éducation"
      ],
      "reponse": 3,
      "explication": "La pension alimentaire sert à participer aux besoins de l'enfant. Elle est distincte de l'autorité parentale."
    },
    {
      "id": "vie-073",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Le divorce doit-il respecter une procédure prévue par la loi ?",
      "choix": [
        "Oui, il est prononcé ou constaté selon la loi",
        "Non, un simple message suffit toujours",
        "Non, seule la famille décide",
        "Oui, mais uniquement à l'étranger"
      ],
      "reponse": 0,
      "explication": "Le divorce n'est pas une démarche totalement libre et informelle. Il suit les procédures prévues par la loi."
    },
    {
      "id": "vie-074",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Pourquoi faut-il signaler un changement de situation familiale aux administrations concernées ?",
      "choix": [
        "Pour obtenir automatiquement un diplôme",
        "Parce qu'il peut modifier des droits ou obligations",
        "Pour éviter toute déclaration de revenus",
        "Pour changer la devise nationale"
      ],
      "reponse": 1,
      "explication": "Un mariage, divorce ou changement familial peut avoir des effets sur certains droits et obligations. Les administrations concernées doivent être informées lorsque c'est nécessaire."
    },
    {
      "id": "vie-075",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Quel comportement est attendu après un accident de la route ?",
      "choix": [
        "Fuir pour éviter les démarches",
        "Déplacer toutes les victimes sans précaution",
        "Sécuriser si possible, alerter les secours et porter assistance sans danger",
        "Publier la scène avant d'appeler"
      ],
      "reponse": 2,
      "explication": "Il faut protéger, alerter et secourir dans la mesure du possible. Le respect du code de la route et l'assistance aux personnes en danger protègent tous les usagers."
    },
    {
      "id": "vie-076",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Peut-on conduire en tenant son téléphone à la main ?",
      "choix": [
        "Oui, si l'appel est court",
        "Oui, en ville seulement",
        "Oui, si le passager regarde la route",
        "Non, c'est interdit et dangereux"
      ],
      "reponse": 3,
      "explication": "L'usage du téléphone tenu en main au volant est interdit. Il augmente le risque d'accident et peut être sanctionné."
    },
    {
      "id": "vie-077",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que signifie payer les impôts dus ?",
      "choix": [
        "Respecter une obligation légale de contribution aux charges publiques",
        "Faire un don facultatif à l'État",
        "Acheter une carte Vitale",
        "Remplacer un contrat de travail"
      ],
      "reponse": 0,
      "explication": "Les impôts financent les charges publiques et les services collectifs. Les impôts légalement dus doivent être payés."
    },
    {
      "id": "vie-078",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "À quoi servent les services publics financés par l'impôt ?",
      "choix": [
        "À financer uniquement des intérêts privés",
        "À répondre à des besoins collectifs comme l'école, la sécurité ou la justice",
        "À supprimer les droits sociaux",
        "À remplacer la famille"
      ],
      "reponse": 1,
      "explication": "L'impôt contribue au financement des services publics. Ces services répondent à des besoins d'intérêt général."
    },
    {
      "id": "vie-079",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Le travail à temps plein est-il toujours exactement de 35 heures sans exception ?",
      "choix": [
        "Oui, aucune autre organisation n'existe",
        "Oui, mais seulement à l'école",
        "Non, 35 heures est une référence légale avec règles d'aménagement possibles",
        "Oui, sauf pour les locataires"
      ],
      "reponse": 2,
      "explication": "La durée légale de référence est de 35 heures. Des aménagements, conventions ou heures supplémentaires peuvent exister dans le cadre légal."
    },
    {
      "id": "vie-080",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Pourquoi le bulletin de paie est-il utile au salarié ?",
      "choix": [
        "Il remplace une carte d'identité",
        "Il autorise le mariage",
        "Il fixe le loyer du logement",
        "Il récapitule la rémunération et les cotisations"
      ],
      "reponse": 3,
      "explication": "Le bulletin de paie permet de vérifier le salaire et les retenues sociales. Il constitue aussi un justificatif important dans la vie courante."
    },
    {
      "id": "vie-081",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Que sont les congés payés ?",
      "choix": [
        "Des périodes de repos rémunérées prévues par le droit du travail",
        "Des absences non autorisées",
        "Des impôts supplémentaires",
        "Des cours obligatoires"
      ],
      "reponse": 0,
      "explication": "Les congés payés permettent au salarié de prendre du repos tout en étant rémunéré. Ils font partie des droits sociaux liés au travail."
    },
    {
      "id": "vie-082",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Le harcèlement au travail peut-il être toléré comme une plaisanterie ?",
      "choix": [
        "Oui, si les collègues rient",
        "Non, le harcèlement est interdit",
        "Oui, s'il n'y a pas d'écrit",
        "Oui, si l'employeur l'ignore"
      ],
      "reponse": 1,
      "explication": "Le harcèlement au travail est interdit. Le respect de la dignité des personnes fait partie des règles de vie professionnelle."
    },
    {
      "id": "vie-083",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Quel est le rôle de la médecine du travail ?",
      "choix": [
        "Fixer les programmes scolaires",
        "Célébrer les mariages",
        "Contribuer à protéger la santé des travailleurs",
        "Délivrer les passeports"
      ],
      "reponse": 2,
      "explication": "La médecine du travail suit la santé des salariés en lien avec leur activité professionnelle. Elle participe à la prévention des risques au travail."
    },
    {
      "id": "vie-084",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Le consentement du patient est-il important avant un soin ?",
      "choix": [
        "Non, le patient ne décide jamais",
        "Seulement pour les enfants majeurs",
        "Seulement pour les soins gratuits",
        "Oui, l'information et le consentement sont des principes importants"
      ],
      "reponse": 3,
      "explication": "Le patient doit être informé et son consentement recherché selon les règles applicables. Cela respecte la dignité et la liberté de la personne."
    },
    {
      "id": "vie-085",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "À quoi sert une assurance habitation pour un locataire ?",
      "choix": [
        "À couvrir certains risques liés au logement",
        "À remplacer le paiement du loyer",
        "À obtenir un diplôme",
        "À supprimer le bail"
      ],
      "reponse": 0,
      "explication": "Le locataire doit généralement assurer le logement contre certains risques. L'assurance protège contre des dommages comme l'incendie ou le dégât des eaux selon le contrat."
    },
    {
      "id": "vie-086",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "À quoi sert une quittance de loyer ?",
      "choix": [
        "À célébrer un mariage",
        "À prouver que le loyer a été payé",
        "À remplacer la carte Vitale",
        "À juger un litige de travail"
      ],
      "reponse": 1,
      "explication": "La quittance atteste que le locataire a payé le loyer et les charges indiqués. Elle peut servir de justificatif."
    },
    {
      "id": "vie-087",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Qu'est-ce qu'un bail d'habitation ?",
      "choix": [
        "Un diplôme scolaire",
        "Un numéro d'urgence",
        "Un contrat de location entre propriétaire et locataire",
        "Une carte d'identité"
      ],
      "reponse": 2,
      "explication": "Le bail fixe les droits et obligations du propriétaire et du locataire. Il encadre l'occupation du logement."
    },
    {
      "id": "vie-088",
      "theme": "vie-quotidienne",
      "difficulte": "moyen",
      "question": "Pourquoi faut-il garder ses documents administratifs importants ?",
      "choix": [
        "Pour éviter toute loi",
        "Pour remplacer les secours",
        "Pour voter deux fois",
        "Pour justifier ses droits, démarches et obligations"
      ],
      "reponse": 3,
      "explication": "Les documents comme actes d'état civil, bail, bulletins de paie ou avis fiscaux peuvent être nécessaires. Ils permettent de prouver une situation ou d'accomplir une démarche."
    },
    {
      "id": "vie-089",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quel principe relie le mariage civil, le refus du mariage forcé et l'interdiction de la polygamie ?",
      "choix": [
        "Le respect du consentement libre et des règles civiles françaises",
        "La priorité d'une règle religieuse",
        "Le choix exclusif de la famille",
        "L'absence de tout acte officiel"
      ],
      "reponse": 0,
      "explication": "Le mariage reconnu en France est un mariage civil soumis à des règles légales. Le consentement libre est indispensable et la polygamie n'est pas reconnue."
    },
    {
      "id": "vie-090",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelle réponse résume correctement les obligations principales d'un locataire ?",
      "choix": [
        "Rénover tout l'immeuble à ses frais",
        "Payer le loyer et les charges, respecter le bail et entretenir couramment le logement",
        "Fixer seul le montant du loyer",
        "Vendre le logement s'il le souhaite"
      ],
      "reponse": 1,
      "explication": "Le locataire doit respecter les obligations du bail. Il paie le loyer et les charges et assure l'entretien courant."
    },
    {
      "id": "vie-091",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelle réponse résume correctement les obligations principales du propriétaire bailleur ?",
      "choix": [
        "Choisir librement d'interdire toute vie familiale",
        "Faire payer les réparations de décence au voisin",
        "Délivrer un logement décent et respecter les droits du locataire",
        "Supprimer le bail après chaque mois"
      ],
      "reponse": 2,
      "explication": "Le propriétaire doit fournir un logement répondant aux exigences de décence. Il doit également respecter les droits du locataire."
    },
    {
      "id": "vie-092",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "En cas de conflit avec son employeur sur le contrat de travail, quelle voie est la plus adaptée ?",
      "choix": [
        "Le bureau de vote",
        "Le service des passeports",
        "Le conseil de classe",
        "Le conseil de prud'hommes, après recherche éventuelle de solution amiable"
      ],
      "reponse": 3,
      "explication": "Le conseil de prud'hommes traite les litiges individuels liés au contrat de travail. Une solution amiable ou une conciliation peut être recherchée avant ou pendant la procédure."
    },
    {
      "id": "vie-093",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelle affirmation décrit le mieux les 35 heures ?",
      "choix": [
        "Une durée légale de référence, pas une interdiction absolue de toute heure au-delà",
        "Une limite de présence à l'école maternelle",
        "Une durée obligatoire pour tous les bénévoles",
        "Une règle uniquement pour les locataires"
      ],
      "reponse": 0,
      "explication": "Les 35 heures sont la durée légale de référence du travail à temps complet. Le droit encadre les heures supplémentaires et les organisations particulières."
    },
    {
      "id": "vie-094",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Pourquoi le travail dissimulé est-il contraire à la vie civique ?",
      "choix": [
        "Il facilite l'égalité professionnelle",
        "Il contourne la loi et prive de droits sociaux",
        "Il protège mieux les salariés",
        "Il remplace le contrat de travail légal"
      ],
      "reponse": 1,
      "explication": "Le travail dissimulé est illégal. Il nuit au salarié, aux finances sociales et à l'égalité entre employeurs."
    },
    {
      "id": "vie-095",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelle situation illustre une discrimination interdite au travail ?",
      "choix": [
        "Évaluer une compétence professionnelle réelle",
        "Organiser les horaires dans le cadre légal",
        "Refuser une promotion à cause de l'origine ou du sexe d'une personne",
        "Former les salariés à la sécurité"
      ],
      "reponse": 2,
      "explication": "Les décisions professionnelles ne doivent pas reposer sur des motifs discriminatoires. L'égalité de traitement protège notamment l'accès à l'emploi et l'évolution professionnelle."
    },
    {
      "id": "vie-096",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Pourquoi l'instruction obligatoire et l'obligation de formation sont-elles distinguées ?",
      "choix": [
        "L'instruction commence seulement à 18 ans",
        "La formation remplace l'école dès 6 ans",
        "Aucune règle ne concerne les mineurs",
        "L'instruction va de 3 à 16 ans, puis une formation doit se poursuivre jusqu'à 18 ans"
      ],
      "reponse": 3,
      "explication": "L'instruction est obligatoire de 3 à 16 ans. Une obligation de formation s'applique ensuite jusqu'à 18 ans."
    },
    {
      "id": "vie-097",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelle réponse respecte la laïcité dans une école publique ?",
      "choix": [
        "Les agents du service public restent neutres et respectent la liberté de conscience",
        "L'école impose une religion officielle",
        "Les cours sont remplacés par un culte",
        "Chaque classe choisit sa loi"
      ],
      "reponse": 0,
      "explication": "La laïcité implique la neutralité du service public et la liberté de conscience. Elle permet à l'école publique d'accueillir tous les élèves."
    },
    {
      "id": "vie-098",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelle affirmation sur l'autorité parentale après divorce est correcte ?",
      "choix": [
        "Elle disparaît toujours pour les deux parents",
        "Elle n'est pas supprimée automatiquement par le divorce",
        "Elle appartient toujours au seul parent le plus riche",
        "Elle dépend uniquement du propriétaire du logement"
      ],
      "reponse": 1,
      "explication": "Le divorce ne supprime pas automatiquement l'autorité parentale. Les décisions concernant l'enfant restent organisées dans son intérêt."
    },
    {
      "id": "vie-099",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelle différence faut-il faire entre pension alimentaire et résidence de l'enfant ?",
      "choix": [
        "Elles signifient toujours la même chose",
        "Elles remplacent l'autorité parentale",
        "Ce sont des questions distinctes de l'organisation familiale",
        "Elles relèvent du code de la route"
      ],
      "reponse": 2,
      "explication": "La pension alimentaire concerne la contribution financière aux besoins de l'enfant. La résidence concerne son lieu de vie habituel ou alterné."
    },
    {
      "id": "vie-100",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Pourquoi les changements de situation familiale peuvent-ils devoir être déclarés ?",
      "choix": [
        "Ils donnent automatiquement un passeport",
        "Ils annulent le paiement des impôts",
        "Ils suppriment l'école obligatoire",
        "Ils peuvent modifier des droits, prestations ou obligations"
      ],
      "reponse": 3,
      "explication": "Un mariage, divorce, naissance ou séparation peut avoir des conséquences administratives. Les organismes concernés doivent être informés lorsque la situation change les droits ou obligations."
    },
    {
      "id": "vie-101",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelle attitude est civique face aux numéros d'urgence ?",
      "choix": [
        "Les utiliser pour une vraie urgence et donner des informations utiles",
        "Les appeler pour tester son téléphone",
        "Les réserver aux démarches fiscales",
        "Les utiliser pour une question scolaire ordinaire"
      ],
      "reponse": 0,
      "explication": "Les numéros d'urgence doivent rester disponibles pour les situations nécessitant une intervention rapide. Il faut expliquer calmement le lieu, les faits et les dangers."
    },
    {
      "id": "vie-102",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelle réponse décrit le mieux le rôle d'une complémentaire santé ?",
      "choix": [
        "Remplacer entièrement la loi de santé",
        "Compléter selon le contrat les remboursements après l'Assurance maladie",
        "Délivrer les actes de naissance",
        "Fixer le SMIC"
      ],
      "reponse": 1,
      "explication": "La complémentaire santé intervient après l'Assurance maladie. Elle peut réduire le reste à charge selon les garanties souscrites."
    },
    {
      "id": "vie-103",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Pourquoi un résident doit-il connaître le 15, le 17, le 18 et le 112 ?",
      "choix": [
        "Pour déclarer ses revenus",
        "Pour signer un contrat de travail",
        "Pour alerter rapidement le bon service de secours",
        "Pour demander un logement social"
      ],
      "reponse": 2,
      "explication": "Ces numéros permettent de joindre le SAMU, la police ou gendarmerie, les pompiers et les urgences européennes. Les connaître peut sauver du temps en situation de danger."
    },
    {
      "id": "vie-104",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelle réponse illustre le respect du code de la route et de l'assistance à personne en danger ?",
      "choix": [
        "Partir pour éviter d'être témoin",
        "Déplacer violemment tout blessé sans nécessité",
        "Ignorer un accident mineur avec blessé",
        "S'arrêter en sécurité, prévenir les secours et éviter de créer un autre danger"
      ],
      "reponse": 3,
      "explication": "Le bon réflexe est de protéger, alerter et aider sans se mettre en danger. Ces comportements relèvent de la sécurité et de la solidarité."
    },
    {
      "id": "vie-105",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quel ensemble correspond à des démarches d'état civil ?",
      "choix": [
        "Déclaration de naissance, mariage civil, acte de naissance",
        "Bulletin de paie, grève, mutuelle",
        "Bail, état des lieux, quittance",
        "Code de la route, permis, assurance auto"
      ],
      "reponse": 0,
      "explication": "L'état civil enregistre les événements essentiels de la vie des personnes. La naissance et le mariage civil en font partie."
    },
    {
      "id": "vie-106",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quel choix décrit une situation conforme au droit français du mariage ?",
      "choix": [
        "Une personne est mariée de force par sa famille",
        "Deux personnes se marient librement devant l'officier d'état civil",
        "Une personne contracte plusieurs mariages reconnus en même temps",
        "Une cérémonie religieuse remplace toujours la mairie"
      ],
      "reponse": 1,
      "explication": "Le mariage suppose le consentement libre des époux et le respect des formes civiles. Le mariage forcé et la polygamie ne sont pas admis."
    },
    {
      "id": "vie-107",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelle réponse décrit correctement le rôle de l'impôt dans la vie collective ?",
      "choix": [
        "Remplacer les cotisations de tous les salariés",
        "Financer uniquement les loisirs privés",
        "Financer les charges publiques et les services d'intérêt général",
        "Permettre d'éviter les lois"
      ],
      "reponse": 2,
      "explication": "L'impôt participe au financement des services publics et des charges communes. Déclarer ses revenus et payer les impôts dus font partie des obligations civiques."
    },
    {
      "id": "vie-108",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quel comportement respecte le mieux les règles de location ?",
      "choix": [
        "Transformer librement le logement sans prévenir",
        "Cesser de payer le loyer pour tout désaccord",
        "Changer les serrures pour exclure le propriétaire de ses droits",
        "Demander l'autorisation requise avant des transformations importantes du logement"
      ],
      "reponse": 3,
      "explication": "Le locataire ne peut pas réaliser librement certaines transformations sans autorisation. En cas de litige, la conciliation ou le juge sont des voies adaptées."
    },
    {
      "id": "vie-109",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelle affirmation sur les enfants et la famille est correcte ?",
      "choix": [
        "Les violences éducatives sont interdites et l'autorité parentale vise l'intérêt de l'enfant",
        "La violence est toujours un droit parental",
        "Le divorce supprime toujours les devoirs envers l'enfant",
        "L'école n'a aucune règle avant 16 ans"
      ],
      "reponse": 0,
      "explication": "L'autorité parentale protège l'enfant et organise son entretien et son éducation. Les violences physiques ou psychologiques ne sont pas un moyen d'éducation autorisé."
    },
    {
      "id": "vie-110",
      "theme": "vie-quotidienne",
      "difficulte": "difficile",
      "question": "Quelle réponse montre une compréhension pratique de la vie en France ?",
      "choix": [
        "Choisir seulement les règles qui arrangent",
        "Respecter les lois, les contrats, les obligations fiscales et les secours en cas de danger",
        "Ignorer les démarches d'état civil",
        "Remplacer l'école obligatoire par un emploi précoce"
      ],
      "reponse": 1,
      "explication": "Vivre en France implique de connaître des règles concrètes de vie commune. Cela inclut l'état civil, l'école, le travail, le logement, les impôts et les secours."
    },
    {
      "id": "eur-001",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Combien d'États membres compte l'Union européenne aujourd'hui ?",
      "choix": [
        "27",
        "25",
        "28",
        "30"
      ],
      "reponse": 0,
      "explication": "Depuis le Brexit, l'Union européenne compte 27 États membres. La France en fait partie."
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
      "explication": "La monnaie utilisée en France est l'euro. Les pièces et billets en euros circulent en France depuis 2002."
    },
    {
      "id": "eur-003",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Que représente le drapeau européen ?",
      "choix": [
        "27 étoiles blanches sur fond bleu",
        "Trois bandes bleu, blanc, rouge",
        "Un cercle de 12 étoiles dorées sur fond bleu",
        "Une carte de l'Europe sur fond vert"
      ],
      "reponse": 2,
      "explication": "Le drapeau européen montre douze étoiles dorées en cercle sur fond bleu. Le nombre d'étoiles ne correspond pas au nombre d'États membres."
    },
    {
      "id": "eur-004",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Dans quelle ville française siège le Parlement européen ?",
      "choix": [
        "Paris",
        "Lyon",
        "Bruxelles",
        "Strasbourg"
      ],
      "reponse": 3,
      "explication": "Le Parlement européen tient ses sessions plénières à Strasbourg. C'est un symbole de la place de la France dans la construction européenne."
    },
    {
      "id": "eur-005",
      "theme": "europe",
      "difficulte": "facile",
      "question": "En quelle année le traité de Maastricht est-il signé ?",
      "choix": [
        "1992",
        "1950",
        "2002",
        "2020"
      ],
      "reponse": 0,
      "explication": "Le traité de Maastricht est signé en 1992. C'est un repère majeur de la construction de l'Union européenne."
    },
    {
      "id": "eur-006",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quel traité est un repère fondateur de l'Union européenne actuelle ?",
      "choix": [
        "Le traité de Versailles",
        "Le traité de Maastricht",
        "Le traité de l'Atlantique nord",
        "La Convention de Genève"
      ],
      "reponse": 1,
      "explication": "Le traité de Maastricht, signé en 1992, crée l'Union européenne et introduit la citoyenneté européenne. Il prépare aussi la monnaie unique."
    },
    {
      "id": "eur-007",
      "theme": "europe",
      "difficulte": "facile",
      "question": "À quoi est liée la citoyenneté européenne ?",
      "choix": [
        "À la résidence dans une capitale européenne",
        "À l'usage de l'euro",
        "À la nationalité d'un État membre de l'UE",
        "À l'inscription dans une université"
      ],
      "reponse": 2,
      "explication": "La citoyenneté européenne est liée à la nationalité d'un État membre. Elle s'ajoute à la citoyenneté nationale et ne la remplace pas."
    },
    {
      "id": "eur-008",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Un citoyen européen non français résidant en France peut voter :",
      "choix": [
        "à l'élection présidentielle",
        "aux élections législatives",
        "à aucune élection",
        "aux élections municipales et européennes"
      ],
      "reponse": 3,
      "explication": "Un citoyen de l'Union européenne résidant en France peut voter aux élections municipales et européennes sous conditions. Il ne vote pas aux élections nationales françaises."
    },
    {
      "id": "eur-009",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Qui élit les députés européens ?",
      "choix": [
        "Les citoyens de l'Union européenne au suffrage direct",
        "Les gouvernements seuls",
        "La Banque centrale européenne",
        "Les préfets de chaque pays"
      ],
      "reponse": 0,
      "explication": "Les députés européens sont élus directement par les citoyens de l'Union européenne. Leur mandat est européen, pas national."
    },
    {
      "id": "eur-010",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quel est le rôle principal de la Commission européenne ?",
      "choix": [
        "Commander l'armée française",
        "Proposer les textes européens et veiller à leur application",
        "Élire les maires européens",
        "Fixer les peines des tribunaux français"
      ],
      "reponse": 1,
      "explication": "La Commission européenne propose des textes, met en œuvre des politiques et veille à l'application du droit de l'Union. Elle ne remplace pas les gouvernements nationaux."
    },
    {
      "id": "eur-011",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Qui siège au Conseil de l'Union européenne ?",
      "choix": [
        "Les juges de la Cour de justice",
        "Les maires des capitales",
        "Les ministres des États membres selon le sujet traité",
        "Les députés européens uniquement"
      ],
      "reponse": 2,
      "explication": "Le Conseil de l'Union européenne réunit les ministres des États membres selon le thème abordé. Il ne doit pas être confondu avec le Conseil européen."
    },
    {
      "id": "eur-012",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quelle institution réunit les chefs d'État ou de gouvernement de l'Union européenne ?",
      "choix": [
        "La Cour de justice de l'Union européenne",
        "La Banque centrale européenne",
        "Le Parlement européen",
        "Le Conseil européen"
      ],
      "reponse": 3,
      "explication": "Le Conseil européen réunit les chefs d'État ou de gouvernement des États membres. Il fixe les grandes orientations politiques de l'Union."
    },
    {
      "id": "eur-013",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quel est le rôle de la Cour de justice de l'Union européenne ?",
      "choix": [
        "Interpréter et faire respecter le droit de l'Union",
        "Organiser les Jeux olympiques",
        "Gérer les consulats français",
        "Choisir la devise française"
      ],
      "reponse": 0,
      "explication": "La Cour de justice de l'Union européenne veille à l'interprétation et au respect du droit de l'Union. Elle est distincte de la Cour européenne des droits de l'homme."
    },
    {
      "id": "eur-014",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Où siège la Banque centrale européenne (BCE) ?",
      "choix": [
        "À Bruxelles",
        "À Francfort",
        "À Strasbourg",
        "À Madrid"
      ],
      "reponse": 1,
      "explication": "La Banque centrale européenne siège à Francfort, en Allemagne. Elle conduit la politique monétaire de la zone euro."
    },
    {
      "id": "eur-015",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quel est le rôle de la BCE pour la zone euro ?",
      "choix": [
        "Voter les lois françaises",
        "Nommer les ambassadeurs",
        "Conduire la politique monétaire",
        "Présider le Conseil de sécurité"
      ],
      "reponse": 2,
      "explication": "La BCE conduit la politique monétaire des pays de la zone euro. Elle ne fixe pas les lois nationales ni les impôts français."
    },
    {
      "id": "eur-016",
      "theme": "europe",
      "difficulte": "facile",
      "question": "À quoi sert l'espace Schengen ?",
      "choix": [
        "À créer une monnaie unique",
        "À élire le président français",
        "À remplacer l'ONU",
        "À permettre la circulation sans contrôles systématiques aux frontières intérieures"
      ],
      "reponse": 3,
      "explication": "Schengen facilite la circulation entre les pays participants en supprimant les contrôles systématiques aux frontières intérieures. Il ne faut pas le confondre avec l'Union européenne ni avec la zone euro."
    },
    {
      "id": "eur-017",
      "theme": "europe",
      "difficulte": "facile",
      "question": "L'espace Schengen et l'Union européenne sont-ils exactement la même chose ?",
      "choix": [
        "Non, leurs membres ne sont pas exactement les mêmes",
        "Oui, ce sont deux noms pour la même organisation",
        "Oui, seulement pour les pays qui utilisent l'euro",
        "Non, Schengen est une institution de l'ONU"
      ],
      "reponse": 0,
      "explication": "Schengen et l'Union européenne ne recouvrent pas exactement les mêmes pays. Certains États non membres de l'UE participent à Schengen, et certains États de l'UE n'y participent pas."
    },
    {
      "id": "eur-018",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quel pays a quitté l'Union européenne en 2020 ?",
      "choix": [
        "L'Espagne",
        "Le Royaume-Uni",
        "La Belgique",
        "La Pologne"
      ],
      "reponse": 1,
      "explication": "Le Royaume-Uni a quitté officiellement l'Union européenne en 2020. Ce départ est appelé le Brexit."
    },
    {
      "id": "eur-019",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quand le Brexit devient-il juridiquement effectif ?",
      "choix": [
        "Le 1er janvier 2002",
        "Le 9 mai 1950",
        "Le 31 janvier 2020",
        "Le 14 juillet 1789"
      ],
      "reponse": 2,
      "explication": "Le Royaume-Uni quitte officiellement l'Union européenne le 31 janvier 2020. Depuis ce départ, l'UE compte 27 États membres."
    },
    {
      "id": "eur-020",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quel jour célèbre-t-on la Journée de l'Europe de l'Union européenne ?",
      "choix": [
        "Le 8 mai",
        "Le 14 juillet",
        "Le 11 novembre",
        "Le 9 mai"
      ],
      "reponse": 3,
      "explication": "La Journée de l'Europe est célébrée le 9 mai. Elle rappelle la déclaration Schuman du 9 mai 1950."
    },
    {
      "id": "eur-021",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quelle date est associée à la déclaration Schuman ?",
      "choix": [
        "Le 9 mai 1950",
        "Le 1er janvier 2002",
        "Le 31 janvier 2020",
        "Le 11 novembre 1918"
      ],
      "reponse": 0,
      "explication": "La déclaration Schuman date du 9 mai 1950. Elle est considérée comme un point de départ important de la construction européenne."
    },
    {
      "id": "eur-022",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Sur quelle œuvre musicale est fondé l'hymne européen ?",
      "choix": [
        "La Marseillaise",
        "L'Ode à la joie de Beethoven",
        "Le Boléro de Ravel",
        "Carmen de Bizet"
      ],
      "reponse": 1,
      "explication": "L'hymne européen reprend le thème de l'Ode à la joie de Beethoven. Il fait partie des symboles européens."
    },
    {
      "id": "eur-023",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quelle est la devise de l'Union européenne ?",
      "choix": [
        "Liberté, Égalité, Fraternité",
        "Paix et sécurité",
        "Unie dans la diversité",
        "Travail, famille, patrie"
      ],
      "reponse": 2,
      "explication": "La devise de l'Union européenne est « Unie dans la diversité ». Elle exprime l'union de peuples et de cultures différentes."
    },
    {
      "id": "eur-024",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Depuis quand les pièces et billets en euros circulent-ils en France ?",
      "choix": [
        "Depuis 1958",
        "Depuis 1992",
        "Depuis 2020",
        "Depuis 2002"
      ],
      "reponse": 3,
      "explication": "L'euro fiduciaire, c'est-à-dire les pièces et billets, circule en France depuis 2002. Il a remplacé le franc."
    },
    {
      "id": "eur-025",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Que signifie « zone euro » ?",
      "choix": [
        "L'ensemble des pays qui utilisent l'euro comme monnaie",
        "Tous les pays du Conseil de l'Europe",
        "Tous les pays de l'OTAN",
        "Les pays qui ont une frontière avec la France"
      ],
      "reponse": 0,
      "explication": "La zone euro regroupe les États qui utilisent l'euro comme monnaie. Elle ne comprend pas forcément tous les États membres de l'Union européenne."
    },
    {
      "id": "eur-026",
      "theme": "europe",
      "difficulte": "facile",
      "question": "La France fait-elle partie de la zone euro ?",
      "choix": [
        "Non, elle utilise encore le franc",
        "Oui, elle utilise l'euro",
        "Seulement pour les élections européennes",
        "Seulement dans les territoires ultramarins"
      ],
      "reponse": 1,
      "explication": "La France fait partie de la zone euro et utilise l'euro. La BCE conduit la politique monétaire de cette zone."
    },
    {
      "id": "eur-027",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Tous les États membres de l'Union européenne utilisent-ils l'euro ?",
      "choix": [
        "Oui, obligatoirement depuis 1950",
        "Oui, seulement le 9 mai",
        "Non, certains États membres n'utilisent pas l'euro",
        "Non, aucun État membre ne l'utilise"
      ],
      "reponse": 2,
      "explication": "Tous les États membres de l'UE n'utilisent pas l'euro. Il faut donc distinguer l'Union européenne et la zone euro."
    },
    {
      "id": "eur-028",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Que permet la libre circulation des citoyens de l'Union européenne ?",
      "choix": [
        "De devenir automatiquement français",
        "De voter à toutes les élections nationales",
        "De ne plus respecter aucune loi",
        "De se déplacer, séjourner, étudier ou travailler dans un autre État membre sous conditions"
      ],
      "reponse": 3,
      "explication": "La libre circulation permet aux citoyens de l'UE de se déplacer et de séjourner dans d'autres États membres selon les règles prévues. Elle ne donne pas automatiquement une nouvelle nationalité."
    },
    {
      "id": "eur-029",
      "theme": "europe",
      "difficulte": "facile",
      "question": "La libre circulation donne-t-elle automatiquement la nationalité du pays où l'on s'installe ?",
      "choix": [
        "Non, elle ne donne pas automatiquement une nationalité",
        "Oui, après un simple passage à la frontière",
        "Oui, seulement avec un billet d'avion",
        "Oui, dans tous les pays du monde"
      ],
      "reponse": 0,
      "explication": "La libre circulation facilite le déplacement et le séjour dans l'Union européenne. Elle ne donne pas automatiquement la nationalité d'un autre État."
    },
    {
      "id": "eur-030",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Le Conseil de l'Europe fait-il partie de l'Union européenne ?",
      "choix": [
        "Oui, c'est la Commission européenne",
        "Non, c'est une organisation distincte",
        "Oui, c'est la zone euro",
        "Oui, c'est le Parlement européen"
      ],
      "reponse": 1,
      "explication": "Le Conseil de l'Europe est une organisation distincte de l'Union européenne. Il agit notamment dans le domaine des droits de l'homme."
    },
    {
      "id": "eur-031",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quelle cour est liée au Conseil de l'Europe et aux droits de l'homme ?",
      "choix": [
        "La Cour de justice de l'Union européenne",
        "La Banque centrale européenne",
        "La Cour européenne des droits de l'homme",
        "Le Conseil constitutionnel espagnol"
      ],
      "reponse": 2,
      "explication": "La Cour européenne des droits de l'homme relève du Conseil de l'Europe. Elle est différente de la Cour de justice de l'Union européenne."
    },
    {
      "id": "eur-032",
      "theme": "europe",
      "difficulte": "facile",
      "question": "Quelle est la place de la France au Conseil de sécurité de l'ONU ?",
      "choix": [
        "Elle n'en est pas membre",
        "Elle est membre élu seulement pour un an",
        "Elle le préside en permanence",
        "Elle est membre permanent"
      ],
      "reponse": 3,
      "explication": "La France est membre permanent du Conseil de sécurité de l'ONU. Cette place lui donne un rôle important dans la sécurité internationale."
    },
    {
      "id": "eur-033",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel pouvoir particulier possède la France comme membre permanent du Conseil de sécurité de l'ONU ?",
      "choix": [
        "Le droit de veto",
        "Le droit de nommer tous les ambassadeurs",
        "Le droit de créer seule l'euro",
        "Le droit d'élire les députés européens"
      ],
      "reponse": 0,
      "explication": "Comme les autres membres permanents, la France dispose d'un droit de veto au Conseil de sécurité. Ce pouvoir peut bloquer certaines décisions de fond."
    },
    {
      "id": "eur-034",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "La France est membre de quelle alliance militaire transatlantique ?",
      "choix": [
        "L'UNESCO",
        "L'OTAN",
        "La zone euro",
        "Le Conseil régional"
      ],
      "reponse": 1,
      "explication": "La France est membre de l'OTAN, l'Organisation du traité de l'Atlantique nord. L'OTAN est une alliance militaire, différente de l'Union européenne."
    },
    {
      "id": "eur-035",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle affirmation décrit correctement l'OTAN ?",
      "choix": [
        "C'est la monnaie commune européenne",
        "C'est la cour des droits de l'homme",
        "C'est une alliance militaire",
        "C'est le Parlement européen"
      ],
      "reponse": 2,
      "explication": "L'OTAN est une alliance militaire entre États alliés. Elle ne doit pas être confondue avec l'Union européenne."
    },
    {
      "id": "eur-036",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Que désigne le G7 ?",
      "choix": [
        "Une monnaie utilisée dans sept États",
        "Un tribunal européen",
        "Un programme scolaire obligatoire",
        "Un groupe de grandes démocraties industrialisées"
      ],
      "reponse": 3,
      "explication": "Le G7 rassemble de grandes démocraties industrialisées, dont la France. Il sert à se concerter sur des enjeux internationaux."
    },
    {
      "id": "eur-037",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Que désigne le G20 ?",
      "choix": [
        "Un forum de grandes économies mondiales",
        "Une élection européenne",
        "Une monnaie locale",
        "Un tribunal de l'ONU"
      ],
      "reponse": 0,
      "explication": "Le G20 réunit de grandes économies mondiales, dont la France et l'Union européenne. C'est un forum de coopération internationale."
    },
    {
      "id": "eur-038",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle organisation rassemble des États et gouvernements autour de la langue française ?",
      "choix": [
        "L'OTAN",
        "L'Organisation internationale de la Francophonie",
        "La Banque centrale européenne",
        "Le Conseil de l'Union européenne"
      ],
      "reponse": 1,
      "explication": "L'Organisation internationale de la Francophonie rassemble des membres liés à la langue française et à la coopération culturelle, éducative et politique. La France y joue un rôle important."
    },
    {
      "id": "eur-039",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Le français est-il une langue internationale ?",
      "choix": [
        "Non, il n'est parlé qu'en France métropolitaine",
        "Non, il n'existe dans aucune organisation",
        "Oui, il est notamment langue officielle de plusieurs organisations internationales",
        "Oui, mais seulement dans la zone euro"
      ],
      "reponse": 2,
      "explication": "Le français est une langue internationale. Il est l'une des langues officielles de plusieurs organisations internationales."
    },
    {
      "id": "eur-040",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "À quoi sert une ambassade française à l'étranger ?",
      "choix": [
        "À voter les lois européennes",
        "À gérer les frontières de Schengen",
        "À remplacer le gouvernement local",
        "À représenter la France auprès d'un autre État"
      ],
      "reponse": 3,
      "explication": "Une ambassade représente l'État français auprès des autorités d'un autre pays. Elle participe au réseau diplomatique français."
    },
    {
      "id": "eur-041",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel est un rôle typique d'un consulat français à l'étranger ?",
      "choix": [
        "Aider les ressortissants français et délivrer certains documents",
        "Élire les députés européens",
        "Fixer les taux de la BCE",
        "Commander l'OTAN"
      ],
      "reponse": 0,
      "explication": "Un consulat aide les Français à l'étranger et fournit certains services administratifs. Il complète l'action diplomatique de l'ambassade."
    },
    {
      "id": "eur-042",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Pourquoi l'outre-mer donne-t-il à la France une présence mondiale ?",
      "choix": [
        "Parce qu'il supprime les frontières européennes",
        "Parce que des territoires français se trouvent dans plusieurs océans",
        "Parce qu'il remplace l'ONU",
        "Parce qu'il crée une monnaie différente"
      ],
      "reponse": 1,
      "explication": "Les territoires ultramarins donnent à la France une présence dans plusieurs océans. Ils contribuent à son rôle mondial."
    },
    {
      "id": "eur-043",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel exemple illustre la présence française hors d'Europe ?",
      "choix": [
        "La Bretagne uniquement",
        "La ville de Strasbourg",
        "La Guyane",
        "La Banque centrale européenne"
      ],
      "reponse": 2,
      "explication": "La Guyane est un territoire français situé en Amérique du Sud. Elle illustre la présence française dans le monde grâce à l'outre-mer."
    },
    {
      "id": "eur-044",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle différence faut-il faire entre l'Union européenne et la zone euro ?",
      "choix": [
        "Il n'y a aucune différence",
        "La zone euro est l'ONU",
        "L'Union européenne ne concerne que l'armée",
        "La zone euro regroupe les pays qui utilisent l'euro, pas forcément tous les pays de l'UE"
      ],
      "reponse": 3,
      "explication": "L'Union européenne compte des États membres. La zone euro regroupe les États qui utilisent l'euro, ce qui n'est pas exactement la même liste."
    },
    {
      "id": "eur-045",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle différence faut-il faire entre Schengen et la zone euro ?",
      "choix": [
        "Schengen concerne surtout les frontières, la zone euro concerne la monnaie",
        "Schengen est une monnaie",
        "La zone euro est une cour de justice",
        "Les deux désignent l'OTAN"
      ],
      "reponse": 0,
      "explication": "Schengen concerne la circulation aux frontières intérieures entre pays participants. La zone euro concerne l'utilisation de l'euro."
    },
    {
      "id": "eur-046",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Le Conseil de l'Europe vote-t-il les lois de l'Union européenne ?",
      "choix": [
        "Oui, toujours",
        "Non, il est distinct de l'Union européenne",
        "Oui, seulement pour la zone euro",
        "Oui, à la place du Parlement européen"
      ],
      "reponse": 1,
      "explication": "Le Conseil de l'Europe est séparé de l'Union européenne. Les lois de l'UE sont adoptées par les institutions de l'Union, notamment le Parlement européen et le Conseil de l'UE."
    },
    {
      "id": "eur-047",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "La Commission européenne est-elle le gouvernement français ?",
      "choix": [
        "Oui, elle dirige les communes",
        "Oui, elle nomme les préfets",
        "Non, c'est une institution de l'Union européenne",
        "Oui, elle remplace le Parlement français"
      ],
      "reponse": 2,
      "explication": "La Commission européenne est une institution de l'Union européenne. Elle ne remplace pas le gouvernement français."
    },
    {
      "id": "eur-048",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Le Parlement européen élit-il le Président de la République française ?",
      "choix": [
        "Oui, tous les cinq ans",
        "Oui, après chaque traité européen",
        "Oui, avec les maires",
        "Non, le Président français est élu par les électeurs français"
      ],
      "reponse": 3,
      "explication": "Le Parlement européen représente les citoyens de l'Union dans l'UE. Le Président de la République française est élu au suffrage universel direct par les électeurs français."
    },
    {
      "id": "eur-049",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle phrase distingue le Conseil européen du Conseil de l'Union européenne ?",
      "choix": [
        "Le Conseil européen réunit les chefs d'État ou de gouvernement, le Conseil de l'UE réunit des ministres",
        "Les deux sont des tribunaux",
        "Les deux désignent la BCE",
        "Le Conseil de l'UE est l'autre nom de l'OTAN"
      ],
      "reponse": 0,
      "explication": "Le Conseil européen fixe les grandes orientations politiques de l'UE. Le Conseil de l'Union européenne réunit les ministres selon le sujet traité."
    },
    {
      "id": "eur-050",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Au Conseil de l'Union européenne, les ministres présents dépendent :",
      "choix": [
        "du tirage au sort",
        "du sujet traité",
        "du nombre d'étoiles du drapeau",
        "de la devise européenne"
      ],
      "reponse": 1,
      "explication": "Le Conseil de l'Union européenne se réunit par domaine : agriculture, finances, justice, etc. Les ministres présents sont ceux compétents pour le sujet."
    },
    {
      "id": "eur-051",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle affirmation distingue la CJUE et la CEDH ?",
      "choix": [
        "La CJUE relève de l'OTAN et la CEDH de la BCE",
        "La CJUE siège à Paris et la CEDH à Francfort",
        "La CJUE relève de l'UE, la CEDH relève du Conseil de l'Europe",
        "La CJUE et la CEDH sont la même cour"
      ],
      "reponse": 2,
      "explication": "La Cour de justice de l'Union européenne relève de l'UE. La Cour européenne des droits de l'homme relève du Conseil de l'Europe."
    },
    {
      "id": "eur-052",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "La BCE fixe-t-elle les impôts français ?",
      "choix": [
        "Oui, elle vote le budget national",
        "Oui, elle remplace l'Assemblée nationale",
        "Oui, elle décide les impôts locaux",
        "Non, elle conduit la politique monétaire de la zone euro"
      ],
      "reponse": 3,
      "explication": "La BCE conduit la politique monétaire de la zone euro. Les impôts et le budget de la France relèvent des institutions françaises selon la Constitution."
    },
    {
      "id": "eur-053",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel droit peut avoir un citoyen de l'UE dans un pays tiers où son pays n'a pas de consulat ?",
      "choix": [
        "Demander l'aide consulaire d'un autre État membre de l'UE",
        "Devenir automatiquement citoyen du pays tiers",
        "Élire le secrétaire général de l'ONU",
        "Créer une ambassade européenne privée"
      ],
      "reponse": 0,
      "explication": "La citoyenneté européenne peut donner droit à la protection consulaire d'un autre État membre lorsque son propre État n'est pas représenté. Ce droit s'exerce dans les pays tiers."
    },
    {
      "id": "eur-054",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Un citoyen de l'UE résidant en France peut-il être candidat aux élections municipales ?",
      "choix": [
        "Non, jamais",
        "Oui, sous conditions, comme électeur et candidat municipal",
        "Oui, seulement à l'élection présidentielle",
        "Oui, uniquement s'il travaille à la BCE"
      ],
      "reponse": 1,
      "explication": "Les citoyens de l'Union européenne résidant en France peuvent voter et être candidats aux élections municipales sous conditions. Certaines fonctions municipales exécutives restent réservées aux citoyens français."
    },
    {
      "id": "eur-055",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle date est propre à la Journée de l'Europe, et non à la fête nationale française ?",
      "choix": [
        "Le 14 juillet",
        "Le 11 novembre",
        "Le 9 mai",
        "Le 1er mai"
      ],
      "reponse": 2,
      "explication": "Le 9 mai est la Journée de l'Europe. Le 14 juillet est la fête nationale française."
    },
    {
      "id": "eur-056",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Pourquoi le drapeau européen a-t-il 12 étoiles ?",
      "choix": [
        "Parce que l'UE compte 12 États",
        "Parce que la zone euro compte 12 pays",
        "Parce que l'OTAN compte 12 membres",
        "Parce que 12 symbolise l'unité et l'harmonie"
      ],
      "reponse": 3,
      "explication": "Les 12 étoiles du drapeau européen sont un symbole d'unité et d'harmonie. Elles ne changent pas avec le nombre d'États membres."
    },
    {
      "id": "eur-057",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle devise correspond à la République française, et non à l'Union européenne ?",
      "choix": [
        "Liberté, Égalité, Fraternité",
        "Unie dans la diversité",
        "In God we trust",
        "Paix et justice"
      ],
      "reponse": 0,
      "explication": "La devise de la République française est « Liberté, Égalité, Fraternité ». La devise de l'Union européenne est « Unie dans la diversité »."
    },
    {
      "id": "eur-058",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Pourquoi le 9 mai est-il une date européenne importante ?",
      "choix": [
        "Parce que l'euro a été retiré",
        "Parce qu'elle rappelle la déclaration Schuman de 1950",
        "Parce que la France fête sa fête nationale",
        "Parce que l'ONU a été créée ce jour-là"
      ],
      "reponse": 1,
      "explication": "Le 9 mai rappelle la déclaration Schuman de 1950. Cette déclaration est un repère de la construction européenne."
    },
    {
      "id": "eur-059",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle affirmation est correcte depuis le Brexit ?",
      "choix": [
        "Le Royaume-Uni dirige la BCE",
        "Le Royaume-Uni utilise obligatoirement l'euro",
        "Le Royaume-Uni n'est plus membre de l'Union européenne",
        "Le Royaume-Uni est devenu un DROM français"
      ],
      "reponse": 2,
      "explication": "Depuis le Brexit, le Royaume-Uni n'est plus membre de l'Union européenne. Le retrait est effectif depuis 2020."
    },
    {
      "id": "eur-060",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Pourquoi dit-on que l'UE compte 27 États membres ?",
      "choix": [
        "Parce que l'ONU l'a limitée à 27",
        "Parce que la France compte 27 régions",
        "Parce que Schengen compte toujours 27 pays",
        "Parce que le Royaume-Uni a quitté l'UE"
      ],
      "reponse": 3,
      "explication": "L'Union européenne compte 27 États membres depuis la sortie du Royaume-Uni. Il faut distinguer ce nombre de ceux de Schengen ou de la zone euro."
    },
    {
      "id": "eur-061",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Que veut dire « euro fiduciaire » ?",
      "choix": [
        "Les pièces et billets en euros",
        "Le vote aux élections européennes",
        "Le drapeau européen",
        "Le siège de la BCE"
      ],
      "reponse": 0,
      "explication": "L'euro fiduciaire désigne les pièces et les billets. En France, ils circulent depuis 2002."
    },
    {
      "id": "eur-062",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quelle monnaie l'euro a-t-il remplacée en France ?",
      "choix": [
        "La livre sterling",
        "Le franc",
        "Le dollar",
        "Le mark"
      ],
      "reponse": 1,
      "explication": "L'euro a remplacé le franc en France. Les pièces et billets en euros sont utilisés depuis 2002."
    },
    {
      "id": "eur-063",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "Quel traité a introduit la citoyenneté européenne ?",
      "choix": [
        "Le traité de Versailles",
        "La déclaration des droits de l'homme",
        "Le traité de Maastricht",
        "Le traité de l'Élysée"
      ],
      "reponse": 2,
      "explication": "Le traité de Maastricht a introduit la citoyenneté européenne. Cette citoyenneté dépend de la nationalité d'un État membre."
    },
    {
      "id": "eur-064",
      "theme": "europe",
      "difficulte": "moyen",
      "question": "La citoyenneté européenne remplace-t-elle la nationalité française ?",
      "choix": [
        "Oui, dès qu'on vote aux européennes",
        "Oui, si l'on voyage dans Schengen",
        "Oui, depuis le Brexit",
        "Non, elle s'ajoute à la nationalité d'un État membre"
      ],
      "reponse": 3,
      "explication": "La citoyenneté européenne s'ajoute à la nationalité d'un État membre. Elle ne remplace pas la nationalité française."
    },
    {
      "id": "eur-065",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Quelle institution européenne propose les textes et veille à l'application du droit de l'Union ?",
      "choix": [
        "La Commission européenne",
        "Le Conseil de l'Europe",
        "La Cour européenne des droits de l'homme",
        "L'OTAN"
      ],
      "reponse": 0,
      "explication": "La Commission européenne propose des textes européens et veille à l'application du droit de l'Union. C'est une institution de l'UE."
    },
    {
      "id": "eur-066",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Quelle institution européenne représente directement les citoyens de l'Union ?",
      "choix": [
        "La BCE",
        "Le Parlement européen",
        "Le G20",
        "Le Conseil de sécurité"
      ],
      "reponse": 1,
      "explication": "Le Parlement européen est élu directement par les citoyens de l'Union européenne. Il participe à la législation et au contrôle démocratique."
    },
    {
      "id": "eur-067",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Quelle institution de l'UE réunit les ministres des États membres ?",
      "choix": [
        "Le Conseil européen",
        "Le Parlement européen",
        "Le Conseil de l'Union européenne",
        "La Cour des comptes française"
      ],
      "reponse": 2,
      "explication": "Le Conseil de l'Union européenne réunit les ministres des États membres selon les sujets. Il participe à l'adoption des textes européens."
    },
    {
      "id": "eur-068",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Quelle institution fixe les grandes orientations politiques de l'Union européenne ?",
      "choix": [
        "La BCE",
        "La CEDH",
        "L'UNESCO",
        "Le Conseil européen"
      ],
      "reponse": 3,
      "explication": "Le Conseil européen réunit les chefs d'État ou de gouvernement. Il fixe les grandes orientations politiques de l'Union européenne."
    },
    {
      "id": "eur-069",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Quelle institution fait respecter le droit de l'Union européenne ?",
      "choix": [
        "La Cour de justice de l'Union européenne",
        "L'Organisation internationale de la Francophonie",
        "Le G7",
        "Le Sénat français"
      ],
      "reponse": 0,
      "explication": "La Cour de justice de l'Union européenne interprète et fait respecter le droit de l'Union. Elle ne doit pas être confondue avec la CEDH."
    },
    {
      "id": "eur-070",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Dans quelle ville se trouve le siège de la BCE ?",
      "choix": [
        "Strasbourg",
        "Francfort",
        "Paris",
        "Luxembourg"
      ],
      "reponse": 1,
      "explication": "La Banque centrale européenne siège à Francfort. Elle est l'institution monétaire de la zone euro."
    },
    {
      "id": "eur-071",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Un citoyen de l'UE non français résidant en France peut-il voter à l'élection présidentielle française ?",
      "choix": [
        "Oui, comme aux municipales",
        "Oui, s'il utilise l'euro",
        "Non, seuls les citoyens français votent à cette élection",
        "Oui, s'il habite en France depuis un mois"
      ],
      "reponse": 2,
      "explication": "L'élection présidentielle française est une élection nationale. Les citoyens de l'UE non français résidant en France peuvent voter aux municipales et européennes, mais pas à la présidentielle."
    },
    {
      "id": "eur-072",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Un étranger non citoyen de l'UE peut-il voter aux élections municipales françaises du seul fait de sa résidence ?",
      "choix": [
        "Oui, automatiquement",
        "Oui, si la commune l'accepte",
        "Oui, grâce à Schengen",
        "Non, ce droit concerne les citoyens de l'UE sous conditions"
      ],
      "reponse": 3,
      "explication": "Le droit de vote municipal des étrangers en France concerne les citoyens de l'Union européenne sous conditions. La résidence seule ne donne pas ce droit aux ressortissants non européens."
    },
    {
      "id": "eur-073",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Quelle phrase résume correctement la citoyenneté européenne ?",
      "choix": [
        "Elle dépend de la nationalité d'un État membre de l'UE",
        "Elle remplace toutes les nationalités",
        "Elle dépend uniquement du lieu de naissance",
        "Elle est donnée par l'OTAN"
      ],
      "reponse": 0,
      "explication": "La citoyenneté européenne dépend de la nationalité d'un État membre de l'Union européenne. Elle donne certains droits, comme le vote municipal et européen dans l'État de résidence."
    },
    {
      "id": "eur-074",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Que supprime principalement Schengen entre pays participants ?",
      "choix": [
        "Les élections nationales",
        "Les contrôles systématiques aux frontières intérieures",
        "Les langues nationales",
        "Les consulats"
      ],
      "reponse": 1,
      "explication": "Schengen supprime les contrôles systématiques aux frontières intérieures entre pays participants. Des contrôles peuvent toutefois exister dans certaines situations prévues par les règles."
    },
    {
      "id": "eur-075",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Quel pays non membre de l'Union européenne participe à l'espace Schengen ?",
      "choix": [
        "Le Canada",
        "Le Japon",
        "La Suisse",
        "Le Brésil"
      ],
      "reponse": 2,
      "explication": "La Suisse n'est pas membre de l'Union européenne mais participe à l'espace Schengen. Cela montre que Schengen et l'UE ne sont pas identiques."
    },
    {
      "id": "eur-076",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Quel État membre de l'Union européenne ne fait pas partie de l'espace Schengen ?",
      "choix": [
        "L'Allemagne",
        "L'Espagne",
        "Le Portugal",
        "L'Irlande"
      ],
      "reponse": 3,
      "explication": "L'Irlande est membre de l'Union européenne mais ne fait pas partie de l'espace Schengen. Les frontières, la monnaie et l'appartenance à l'UE sont donc des notions différentes."
    },
    {
      "id": "eur-077",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Avec quels autres États la France est-elle membre permanent du Conseil de sécurité de l'ONU ?",
      "choix": [
        "États-Unis, Royaume-Uni, Chine et Russie",
        "Allemagne, Italie, Espagne et Portugal",
        "Canada, Japon, Brésil et Inde",
        "Belgique, Suisse, Norvège et Islande"
      ],
      "reponse": 0,
      "explication": "Les cinq membres permanents du Conseil de sécurité sont la France, les États-Unis, le Royaume-Uni, la Chine et la Russie. Ils disposent d'un droit de veto."
    },
    {
      "id": "eur-078",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Pourquoi la Francophonie est-elle importante pour le rôle international de la France ?",
      "choix": [
        "Elle remplace l'Union européenne",
        "Elle valorise la langue française et la coopération entre États et gouvernements",
        "Elle fixe les taux de l'euro",
        "Elle contrôle les frontières de Schengen"
      ],
      "reponse": 1,
      "explication": "La Francophonie met en valeur la langue française et soutient des coopérations culturelles, éducatives et politiques. Elle contribue à l'influence internationale de la France."
    },
    {
      "id": "eur-079",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Que montre le réseau diplomatique et consulaire français ?",
      "choix": [
        "Que la France n'a plus de relations internationales",
        "Que la France ne participe pas à l'ONU",
        "Que la France est présente et représentée dans le monde",
        "Que la France n'a pas d'ambassades"
      ],
      "reponse": 2,
      "explication": "La France dispose d'un réseau diplomatique et consulaire mondial. Ce réseau représente l'État français et accompagne les Français à l'étranger."
    },
    {
      "id": "eur-080",
      "theme": "europe",
      "difficulte": "difficile",
      "question": "Pourquoi les territoires ultramarins renforcent-ils la présence mondiale de la France ?",
      "choix": [
        "Parce qu'ils annulent la citoyenneté européenne",
        "Parce qu'ils remplacent les ambassades",
        "Parce qu'ils appartiennent à l'OTAN",
        "Parce qu'ils situent la France dans plusieurs océans"
      ],
      "reponse": 3,
      "explication": "Les territoires ultramarins donnent à la France une présence géographique dans plusieurs océans. Ils contribuent à son rôle européen et international."
    },
    {
      "id": "ent-001",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Que vérifie surtout l'entretien d'assimilation ?",
      "choix": [
        "La fortune personnelle du candidat",
        "Les convictions religieuses du candidat",
        "L'assimilation, l'adhésion aux valeurs républicaines et la cohérence du parcours",
        "L'opinion politique du candidat"
      ],
      "reponse": 2,
      "explication": "L'entretien sert à vérifier que le candidat comprend la France, ses valeurs et peut expliquer sa vie en France. Il ne doit pas porter sur la richesse, la religion ou les opinions partisanes."
    },
    {
      "id": "ent-002",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel document est signé à la fin de l'entretien d'assimilation ?",
      "choix": [
        "Un contrat de travail",
        "Une déclaration de revenus",
        "La Charte des droits et devoirs du citoyen français",
        "Un acte notarié"
      ],
      "reponse": 2,
      "explication": "À la fin de l'entretien, le candidat signe la Charte des droits et devoirs du citoyen français. Elle rappelle les droits, les devoirs et les principes républicains."
    },
    {
      "id": "ent-003",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "À la question « Pourquoi voulez-vous devenir français ? », quelle réponse est la meilleure ?",
      "choix": [
        "Dire seulement que le passeport est pratique",
        "Dire que l'on n'a pas d'avis",
        "Critiquer son pays d'origine",
        "Expliquer sincèrement son attachement à la France, à ses valeurs et à son projet de vie"
      ],
      "reponse": 3,
      "explication": "La réponse doit être personnelle, concrète et sincère. Elle peut évoquer le parcours en France, les liens familiaux ou professionnels et l'adhésion aux valeurs de la République."
    },
    {
      "id": "ent-004",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Que devez-vous connaître sur votre lieu de résidence pour l'entretien ?",
      "choix": [
        "Le budget exact de la commune",
        "Le nom de tous les conseillers municipaux",
        "Le nom du maire, votre commune, votre département et votre région",
        "Le nombre exact de commerces"
      ],
      "reponse": 2,
      "explication": "Le guide conseille de connaître sa commune, son département et sa région. Ces éléments montrent un ancrage local réel."
    },
    {
      "id": "ent-005",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quand l'agent vous interroge sur votre travail, que cherche-t-il surtout à comprendre ?",
      "choix": [
        "Si vous gagnez beaucoup d'argent",
        "Si vous êtes obligatoirement fonctionnaire",
        "Si vous avez créé une entreprise",
        "Votre insertion professionnelle, vos ressources et votre autonomie"
      ],
      "reponse": 3,
      "explication": "L'entretien peut porter sur le métier, les études, la recherche d'emploi ou les ressources. L'objectif est d'apprécier l'insertion et la stabilité de la situation."
    },
    {
      "id": "ent-006",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quel niveau de français est généralement exigé pour une naturalisation ?",
      "choix": [
        "A1",
        "A2",
        "B1",
        "C2"
      ],
      "reponse": 2,
      "explication": "La naturalisation suppose une maîtrise suffisante du français, généralement au niveau B1. Ce niveau peut être justifié par un diplôme ou un test reconnu."
    },
    {
      "id": "ent-007",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Devenir citoyen français signifie surtout :",
      "choix": [
        "Avoir seulement des droits",
        "Avoir seulement des devoirs",
        "Avoir des droits politiques et civiques, mais aussi respecter les lois et participer à la vie commune",
        "Abandonner toute culture d'origine"
      ],
      "reponse": 2,
      "explication": "La citoyenneté associe des droits et des devoirs. Elle n'impose pas d'effacer son histoire personnelle, mais elle suppose l'adhésion aux valeurs communes."
    },
    {
      "id": "ent-008",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Que signifie adhérer aux principes essentiels de la République ?",
      "choix": [
        "Ne jamais critiquer une décision politique",
        "Adhérer obligatoirement à un parti politique",
        "Respecter la liberté, l'égalité, la fraternité, la laïcité et les lois communes",
        "Renoncer au droit de manifester"
      ],
      "reponse": 2,
      "explication": "L'adhésion aux valeurs républicaines n'interdit pas la critique ou l'engagement citoyen. Elle implique de respecter les libertés, l'égalité, la laïcité et le cadre légal."
    },
    {
      "id": "ent-009",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Depuis 2026, quelle affirmation décrit correctement l'examen civique ?",
      "choix": [
        "Il remplace totalement l'entretien d'assimilation",
        "Il se déroule uniquement à l'oral devant l'agent",
        "Il ne concerne que les candidats mariés à un Français",
        "Il est un QCM numérique distinct de l'entretien d'assimilation"
      ],
      "reponse": 3,
      "explication": "Depuis le 1er janvier 2026, la naturalisation par décret comprend un examen civique distinct de l'entretien. Les deux exercices ne doivent pas être confondus."
    },
    {
      "id": "ent-010",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Quel élément peut défavoriser une demande de naturalisation ?",
      "choix": [
        "Avoir des enfants scolarisés",
        "Être bénévole dans une association",
        "Des condamnations pénales importantes ou une situation fiscale irrégulière",
        "Parler plusieurs langues étrangères"
      ],
      "reponse": 2,
      "explication": "L'administration examine notamment le respect des lois, la moralité et la régularité fiscale. Les liens familiaux, sociaux ou associatifs peuvent au contraire montrer l'insertion."
    },
    {
      "id": "ent-011",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quelle procédure permet à un étranger majeur de demander la nationalité française par décision de l'État ?",
      "choix": [
        "Le renouvellement du titre de séjour",
        "La demande d'asile",
        "La naturalisation par décret",
        "L'inscription consulaire"
      ],
      "reponse": 2,
      "explication": "La naturalisation par décret est une décision de l'administration après examen du dossier. Elle n'est pas automatique."
    },
    {
      "id": "ent-012",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Combien de questions comporte l'examen civique de naturalisation par décret ?",
      "choix": [
        "20 questions",
        "60 questions",
        "100 questions",
        "40 questions"
      ],
      "reponse": 3,
      "explication": "Le guide indique que l'examen civique est un QCM numérique de 40 questions. Il est distinct de l'entretien d'assimilation."
    },
    {
      "id": "ent-013",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quelle est la durée maximale de l'examen civique ?",
      "choix": [
        "15 minutes",
        "30 minutes",
        "45 minutes",
        "2 heures"
      ],
      "reponse": 2,
      "explication": "Le QCM numérique dure au maximum 45 minutes. Il faut donc répondre de façon attentive et efficace."
    },
    {
      "id": "ent-014",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel score faut-il atteindre à l'examen civique ?",
      "choix": [
        "20 bonnes réponses sur 40",
        "24 bonnes réponses sur 40",
        "28 bonnes réponses sur 40",
        "32 bonnes réponses sur 40"
      ],
      "reponse": 3,
      "explication": "Le seuil de réussite est de 80 %, soit 32 bonnes réponses sur 40. Ce seuil concerne l'examen civique, pas l'entretien oral."
    },
    {
      "id": "ent-015",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quelle condition d'âge concerne en principe une demande personnelle de naturalisation par décret ?",
      "choix": [
        "Avoir moins de 25 ans",
        "Être retraité",
        "Être majeur",
        "Avoir exactement 18 ans le jour de l'entretien"
      ],
      "reponse": 2,
      "explication": "La demande de naturalisation par décret est en principe déposée par une personne majeure. Des règles particulières peuvent exister pour les enfants rattachés à une demande."
    },
    {
      "id": "ent-016",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Que signifie avoir sa résidence habituelle en France ?",
      "choix": [
        "Venir seulement pendant les vacances",
        "Avoir un compte bancaire français sans y vivre",
        "Connaître une personne française",
        "Avoir le centre stable de sa vie en France"
      ],
      "reponse": 3,
      "explication": "La résidence habituelle signifie que la vie personnelle, familiale ou professionnelle est principalement en France. Ce n'est pas un simple séjour temporaire."
    },
    {
      "id": "ent-017",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quelle durée de résidence régulière est généralement attendue avant une naturalisation par décret ?",
      "choix": [
        "Un mois",
        "Un an dans tous les cas",
        "Cinq ans, sauf réduction ou dispense prévue",
        "Vingt ans obligatoirement"
      ],
      "reponse": 2,
      "explication": "La durée de résidence généralement attendue est de cinq ans. Certains cas peuvent permettre une réduction ou une dispense, mais il faut éviter les réponses trop automatiques."
    },
    {
      "id": "ent-018",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel élément faut-il normalement pouvoir justifier concernant son séjour en France ?",
      "choix": [
        "Une résidence secondaire à l'étranger",
        "Un abonnement à une chaîne de télévision",
        "Une situation de séjour régulière",
        "Un voyage récent hors d'Europe"
      ],
      "reponse": 2,
      "explication": "Le candidat doit en principe justifier d'un séjour régulier. C'est une condition générale importante de la naturalisation."
    },
    {
      "id": "ent-019",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "À quoi servent les justificatifs de ressources dans le dossier ?",
      "choix": [
        "À choisir une opinion politique",
        "À remplacer l'entretien d'assimilation",
        "À montrer l'autonomie financière et l'insertion",
        "À éviter l'examen civique"
      ],
      "reponse": 2,
      "explication": "Les ressources permettent d'apprécier l'insertion et la stabilité de la situation. Elles ne remplacent ni l'examen civique ni l'entretien."
    },
    {
      "id": "ent-020",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Pourquoi les avis d'imposition peuvent-ils être demandés ?",
      "choix": [
        "Pour connaître vos loisirs",
        "Pour choisir votre commune",
        "Pour supprimer vos droits sociaux",
        "Pour vérifier la régularité fiscale et la situation déclarée"
      ],
      "reponse": 3,
      "explication": "Les avis d'imposition aident à vérifier que le candidat respecte ses obligations fiscales. Le respect des lois et des devoirs compte dans l'examen du dossier."
    },
    {
      "id": "ent-021",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel document peut justifier le niveau de français demandé ?",
      "choix": [
        "Une carte de transport",
        "Une quittance de loyer seulement",
        "Un billet d'avion",
        "Un diplôme ou un test de français reconnu"
      ],
      "reponse": 3,
      "explication": "Le niveau de français doit être prouvé par un justificatif adapté, comme un diplôme ou un test reconnu. L'agent peut aussi apprécier la capacité à répondre clairement à l'oral."
    },
    {
      "id": "ent-022",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel sujet peut être abordé pour apprécier votre connaissance de la société française ?",
      "choix": [
        "Le prix exact de tous les produits alimentaires",
        "La vie privée de l'agent",
        "Une préférence religieuse obligatoire",
        "Les valeurs de la République, les institutions et la vie quotidienne en France"
      ],
      "reponse": 3,
      "explication": "L'entretien peut porter sur la République, la vie en France et le parcours personnel. Les questions doivent rester liées à l'objectif de la procédure."
    },
    {
      "id": "ent-023",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quelle valeur fait partie de la devise de la République française ?",
      "choix": [
        "Richesse",
        "Obéissance privée",
        "Privilège",
        "Liberté"
      ],
      "reponse": 3,
      "explication": "La devise est « Liberté, Égalité, Fraternité ». Il faut savoir citer ces valeurs et les expliquer simplement."
    },
    {
      "id": "ent-024",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Lors de l’entretien, comment expliquer simplement la laïcité si l’agent vous le demande ?",
      "choix": [
        "Dire que la laïcité interdit toutes les religions en France",
        "Expliquer qu’elle garantit la liberté de conscience et la neutralité de l’État envers les religions",
        "Réciter par cœur le texte complet de la loi de 1905",
        "Répondre que c’est une question trop personnelle"
      ],
      "reponse": 1,
      "explication": "À l’entretien, il faut savoir expliquer la laïcité avec ses propres mots : chacun est libre de croire ou de ne pas croire, et l’État comme les services publics restent neutres. La laïcité n’est pas l’interdiction des religions."
    },
    {
      "id": "ent-025",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quelle bonne pratique adopter le jour de l'entretien ?",
      "choix": [
        "Arriver sans convocation",
        "Inventer des réponses pour paraître plus intégré",
        "Refuser toute question",
        "Venir avec les originaux demandés et répondre clairement"
      ],
      "reponse": 3,
      "explication": "Le guide rappelle d'apporter les originaux demandés sur la convocation. Il faut répondre calmement, sincèrement et de manière compréhensible."
    },
    {
      "id": "ent-026",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Que faire si vous ne comprenez pas une question pendant l'entretien ?",
      "choix": [
        "Répondre au hasard",
        "Quitter l'entretien",
        "Accuser l'agent d'être injuste",
        "Demander poliment à l'agent de répéter ou de reformuler"
      ],
      "reponse": 3,
      "explication": "Il vaut mieux demander une reformulation que répondre sans comprendre. Une attitude calme et respectueuse est recommandée."
    },
    {
      "id": "ent-027",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Pourquoi faut-il répondre avec sincérité pendant l'entretien ?",
      "choix": [
        "Parce que les réponses inventées sont toujours plus convaincantes",
        "Parce que l'entretien est un concours de théâtre",
        "Parce que seules les réponses apprises par cœur sont acceptées",
        "Parce que l'agent attend un récit cohérent et réel de votre parcours"
      ],
      "reponse": 3,
      "explication": "Le guide conseille de ne pas inventer d'activité ou de réponse. L'agent vérifie la cohérence du parcours et l'assimilation réelle."
    },
    {
      "id": "ent-028",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel est le meilleur style de réponse à l'oral ?",
      "choix": [
        "Une définition compliquée récitée sans comprendre",
        "Une réponse agressive",
        "Un silence systématique",
        "Une phrase simple, correcte et illustrée par un exemple"
      ],
      "reponse": 3,
      "explication": "Le guide recommande une méthode simple : définition, exemple, importance. Il vaut mieux comprendre les mots que réciter mécaniquement."
    },
    {
      "id": "ent-029",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel droit politique est lié à la nationalité française pour un citoyen majeur remplissant les conditions légales ?",
      "choix": [
        "Le droit d'ignorer les lois",
        "Le droit d'imposer son opinion aux autres",
        "Le droit de ne jamais payer d'impôts",
        "Le droit de voter aux élections nationales"
      ],
      "reponse": 3,
      "explication": "La nationalité française ouvre notamment les droits politiques, comme le vote, sous conditions légales. Elle s'accompagne aussi de devoirs."
    },
    {
      "id": "ent-030",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "La France oblige-t-elle en principe une personne naturalisée à renoncer à toute autre nationalité ?",
      "choix": [
        "Oui, toujours",
        "Non, pas en principe, mais l'autre pays peut avoir ses propres règles",
        "Oui, seulement si elle vote",
        "Non, car la nationalité française ne donne aucun droit"
      ],
      "reponse": 1,
      "explication": "La France n'impose pas en principe de renoncer à une autre nationalité. Il peut toutefois être utile de vérifier la loi de l'autre pays concerné."
    },
    {
      "id": "ent-031",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quel événement officiel peut suivre l'acquisition de la nationalité française ?",
      "choix": [
        "Une élection automatique comme maire",
        "Une dispense définitive de tous les impôts",
        "Un changement obligatoire de religion",
        "Une cérémonie d'accueil dans la citoyenneté française"
      ],
      "reponse": 3,
      "explication": "Une cérémonie d'accueil peut être organisée pour les nouveaux Français. Elle marque l'entrée dans la communauté nationale."
    },
    {
      "id": "ent-032",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quelles sont les cinq grandes thématiques de l'examen civique ?",
      "choix": [
        "Sport, cuisine, météo, musique et cinéma",
        "Principes et valeurs ; institutions ; droits et devoirs ; histoire-géographie-culture ; vie dans la société française",
        "Religion, revenus, voyages, loisirs et réseaux sociaux",
        "Droit commercial, fiscalité internationale, médecine, urbanisme et banque"
      ],
      "reponse": 1,
      "explication": "Le programme de l'examen civique comporte cinq thématiques officielles. Elles couvrent les connaissances essentielles utiles à la citoyenneté française."
    },
    {
      "id": "ent-033",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Qui doit passer l'examen civique dans le parcours décrit par le guide ?",
      "choix": [
        "Les candidats à la naturalisation ou à la réintégration par décret, sauf dispense prévue",
        "Tous les touristes entrant en France",
        "Uniquement les enfants scolarisés",
        "Uniquement les personnes déjà françaises"
      ],
      "reponse": 0,
      "explication": "L'examen civique est prévu pour les demandes de naturalisation ou de réintégration par décret, sauf cas de dispense. Il ne concerne pas toute personne présente en France."
    },
    {
      "id": "ent-034",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Quelle différence faut-il faire entre l'examen civique et l'entretien d'assimilation ?",
      "choix": [
        "L'examen civique est un QCM ; l'entretien est un échange oral sur l'assimilation et le parcours",
        "Les deux sont exactement le même exercice",
        "L'entretien est uniquement un test informatique",
        "L'examen civique sert à parler de sa famille en détail"
      ],
      "reponse": 0,
      "explication": "Le guide insiste sur la distinction entre les deux exercices. Le QCM teste des connaissances et mises en situation, tandis que l'entretien vérifie l'assimilation et la cohérence du parcours."
    },
    {
      "id": "ent-035",
      "theme": "entretien",
      "difficulte": "facile",
      "question": "Pourquoi faut-il savoir présenter clairement sa chronologie personnelle ?",
      "choix": [
        "Pour réciter toutes les dates de l'histoire de France",
        "Pour expliquer de façon cohérente son arrivée, ses études, son travail, ses adresses et sa situation familiale",
        "Pour éviter de parler français",
        "Pour remplacer les documents originaux"
      ],
      "reponse": 1,
      "explication": "Le guide recommande de préparer sa chronologie personnelle. Elle aide à montrer un parcours clair et cohérent en France."
    },
    {
      "id": "ent-036",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Que pouvez-vous citer pour montrer votre participation à la vie française ?",
      "choix": [
        "Des activités réelles : travail, association, sport, culture, bénévolat ou vie locale",
        "Des activités inventées pour impressionner l'agent",
        "Uniquement des voyages à l'étranger",
        "La vie privée de vos voisins"
      ],
      "reponse": 0,
      "explication": "Il faut parler d'exemples réels et concrets. Inventer une activité associative ou culturelle est une erreur à éviter."
    },
    {
      "id": "ent-037",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Pourquoi faut-il connaître quelques lieux publics ou transports de sa ville ?",
      "choix": [
        "Pour prouver que l'on connaît toutes les rues par cœur",
        "Pour montrer son ancrage dans la vie locale",
        "Pour devenir automatiquement élu local",
        "Pour éviter les questions sur les valeurs"
      ],
      "reponse": 1,
      "explication": "Connaître sa commune, les transports et quelques lieux publics montre une vie réelle dans le territoire. L'entretien relie souvent l'assimilation à des exemples concrets."
    },
    {
      "id": "ent-038",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quelle réponse convient si l'on vous demande ce que signifie le 14 juillet ?",
      "choix": [
        "La fête nationale, liée à la prise de la Bastille en 1789 et à la Fête de la Fédération en 1790",
        "La fin de la Première Guerre mondiale",
        "La fête du travail",
        "L'élection du Président de la République"
      ],
      "reponse": 0,
      "explication": "Le 14 juillet est la fête nationale. Le guide conseille de connaître quelques repères historiques et de savoir les expliquer simplement."
    },
    {
      "id": "ent-039",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Que commémore le 8 mai en France ?",
      "choix": [
        "La prise de la Bastille",
        "La victoire de 1945 en Europe et la fin de la Seconde Guerre mondiale en Europe",
        "L'armistice de 1918",
        "La création de l'euro"
      ],
      "reponse": 1,
      "explication": "Le 8 mai commémore la victoire de 1945 en Europe. C'est un repère historique fréquent à connaître."
    },
    {
      "id": "ent-040",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Que signifie le 11 novembre ?",
      "choix": [
        "La fête nationale",
        "La fête de la musique",
        "L'armistice de 1918 mettant fin aux combats de la Première Guerre mondiale",
        "La journée de l'Europe"
      ],
      "reponse": 2,
      "explication": "Le 11 novembre commémore l'armistice de 1918. Il fait partie des repères historiques simples utiles pour l'entretien."
    },
    {
      "id": "ent-041",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quelle attitude adopter si une question vous paraît difficile ou provocatrice ?",
      "choix": [
        "Répondre avec agressivité",
        "Rester calme, factuel et respectueux",
        "Refuser de parler jusqu'à la fin",
        "Donner une réponse partisane sans lien avec la question"
      ],
      "reponse": 1,
      "explication": "Le guide conseille de rester calme et factuel. Une réponse agressive ou hors sujet peut nuire à la cohérence de l'entretien."
    },
    {
      "id": "ent-042",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Pourquoi est-il déconseillé d'apprendre des réponses toutes faites par cœur ?",
      "choix": [
        "Parce qu'il faut montrer que l'on comprend les mots et que l'on peut donner des exemples personnels",
        "Parce que l'entretien se déroule toujours par écrit",
        "Parce que seules les réponses très longues sont acceptées",
        "Parce que les valeurs républicaines ne sont jamais abordées"
      ],
      "reponse": 0,
      "explication": "L'entretien n'est pas un concours de récitation. L'agent attend une compréhension simple et personnelle des notions."
    },
    {
      "id": "ent-043",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quelle erreur faut-il éviter à propos de la laïcité ?",
      "choix": [
        "Dire qu'elle protège la liberté de croire ou de ne pas croire",
        "Dire qu'elle impose la neutralité de l'État",
        "Dire qu'elle interdit toutes les religions",
        "Dire qu'elle fixe des règles communes dans les services publics"
      ],
      "reponse": 2,
      "explication": "Confondre laïcité et interdiction des religions est une erreur fréquente. La laïcité protège la liberté de conscience dans un cadre commun."
    },
    {
      "id": "ent-044",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quelle affirmation sur les lois en France est correcte ?",
      "choix": [
        "Le Président fait toutes les lois seul",
        "Le Parlement vote les lois",
        "Le Premier ministre est élu directement par les citoyens",
        "Les maires votent toutes les lois nationales"
      ],
      "reponse": 1,
      "explication": "Le guide signale l'erreur consistant à dire que le Président fait toutes les lois. Dans les institutions françaises, le Parlement vote la loi."
    },
    {
      "id": "ent-045",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quelle affirmation sur le Premier ministre est correcte ?",
      "choix": [
        "Il est élu directement par les citoyens",
        "Il est nommé par le Président de la République",
        "Il est choisi par tirage au sort",
        "Il est automatiquement le maire de Paris"
      ],
      "reponse": 1,
      "explication": "Le Premier ministre n'est pas élu directement par les citoyens. Il est nommé par le Président de la République."
    },
    {
      "id": "ent-046",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quelle réponse montre que vous ne confondez pas commune, département et région ?",
      "choix": [
        "La commune est la ville ou le village ; le département et la région sont des collectivités plus larges",
        "La commune et la région sont toujours le même territoire",
        "Le département est forcément un quartier",
        "La région est le nom d'une rue"
      ],
      "reponse": 0,
      "explication": "Le guide cite cette confusion parmi les erreurs à éviter. Il faut savoir situer sa ville, son département et sa région."
    },
    {
      "id": "ent-047",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Que faire si votre adresse change pendant l'instruction de votre dossier ?",
      "choix": [
        "Ne rien dire à l'administration",
        "Le signaler pour recevoir les courriers et maintenir un dossier à jour",
        "Attendre plusieurs années",
        "Demander à l'agent de deviner la nouvelle adresse"
      ],
      "reponse": 1,
      "explication": "Un dossier doit rester à jour. Signaler un changement d'adresse permet notamment de recevoir les convocations et les décisions."
    },
    {
      "id": "ent-048",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Que devez-vous faire si vous constatez une erreur dans votre dossier avant l'entretien ?",
      "choix": [
        "La cacher volontairement",
        "Inventer un document",
        "La signaler et apporter un justificatif si nécessaire",
        "Accuser automatiquement l'administration"
      ],
      "reponse": 2,
      "explication": "La sincérité et la cohérence du dossier sont importantes. Il vaut mieux corriger une erreur avec des explications et des justificatifs."
    },
    {
      "id": "ent-049",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Que faire si vous ne pouvez pas fournir une pièce demandée dans le délai indiqué ?",
      "choix": [
        "Produire un faux document",
        "Ignorer la demande",
        "Informer l'administration et expliquer la difficulté avec les justificatifs disponibles",
        "Abandonner automatiquement la procédure"
      ],
      "reponse": 2,
      "explication": "Il ne faut jamais produire de faux justificatif. Il faut répondre à l'administration, expliquer la situation et fournir ce qui est possible."
    },
    {
      "id": "ent-050",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quel document explique les droits et devoirs attachés à la citoyenneté française ?",
      "choix": [
        "La Charte des droits et devoirs du citoyen français",
        "Un catalogue commercial",
        "Un permis de conduire",
        "Une facture d'électricité"
      ],
      "reponse": 0,
      "explication": "La Charte rappelle les principes, droits et devoirs du citoyen français. Elle est signée à la fin de l'entretien d'assimilation."
    },
    {
      "id": "ent-051",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Pourquoi faut-il pouvoir présenter ses attaches familiales et sociales en France ?",
      "choix": [
        "Pour montrer ses liens réels et son insertion dans la société française",
        "Pour remplacer la condition de langue",
        "Pour éviter de parler de son parcours",
        "Pour obtenir automatiquement la nationalité"
      ],
      "reponse": 0,
      "explication": "Les liens familiaux, amicaux, professionnels ou associatifs peuvent montrer une insertion concrète. Ils ne rendent pas la naturalisation automatique."
    },
    {
      "id": "ent-052",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quel principe est important quand on parle d'égalité femmes-hommes à l'entretien ?",
      "choix": [
        "Une femme doit demander l'autorisation de son mari pour travailler",
        "Les femmes et les hommes sont égaux en droits",
        "Les droits civiques dépendent du sexe",
        "L'égalité ne concerne pas la vie professionnelle"
      ],
      "reponse": 1,
      "explication": "L'égalité femmes-hommes fait partie des principes à savoir expliquer. Une réponse contraire à l'égalité juridique serait incompatible avec les valeurs républicaines."
    },
    {
      "id": "ent-053",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Si vous n'êtes pas d'accord avec une loi, quelle attitude est conforme aux principes républicains ?",
      "choix": [
        "Ne plus respecter la loi",
        "Exprimer son désaccord par les voies démocratiques tout en respectant la loi en vigueur",
        "Menacer ceux qui pensent autrement",
        "Demander à être dispensé de toutes les lois"
      ],
      "reponse": 1,
      "explication": "Le désaccord politique peut s'exprimer légalement, par exemple par le vote, le débat ou les recours. Tant qu'une loi est en vigueur, elle doit être respectée."
    },
    {
      "id": "ent-054",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Comment répondre si l'on vous demande votre opinion sur le droit de vote ?",
      "choix": [
        "En disant que voter ne sert jamais à rien",
        "En expliquant que c'est un droit civique fondamental et une façon de participer à la démocratie",
        "En disant qu'il faut voter uniquement comme sa famille",
        "En affirmant que le vote est interdit aux citoyens français"
      ],
      "reponse": 1,
      "explication": "Le guide propose une réponse personnelle mais respectueuse du cadre démocratique. En France, le vote est un droit civique fondamental et n'est pas obligatoire."
    },
    {
      "id": "ent-055",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quel point peut relever de la moralité examinée dans une demande de naturalisation ?",
      "choix": [
        "Le respect des lois et l'absence de comportements graves contraires à l'ordre public",
        "La couleur préférée du candidat",
        "Le nombre de films regardés par mois",
        "La marque de téléphone utilisée"
      ],
      "reponse": 0,
      "explication": "La procédure peut prendre en compte le respect des lois et la moralité. Les préférences personnelles sans lien avec la procédure ne sont pas pertinentes."
    },
    {
      "id": "ent-056",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Que doit faire un candidat à propos des documents originaux mentionnés sur la convocation ?",
      "choix": [
        "Les laisser chez lui",
        "Apporter les originaux demandés le jour de l'entretien",
        "Apporter seulement des photos floues",
        "Les remplacer par une déclaration orale"
      ],
      "reponse": 1,
      "explication": "Le guide indique que le candidat doit apporter les originaux des documents demandés sur la convocation. Cela permet les vérifications nécessaires."
    },
    {
      "id": "ent-057",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Pourquoi la naturalisation par décret n'est-elle pas automatique ?",
      "choix": [
        "Parce que l'administration apprécie le dossier et vérifie les conditions, l'assimilation et l'adhésion aux valeurs",
        "Parce que le maire choisit librement tous les nouveaux Français",
        "Parce qu'un candidat doit gagner une loterie",
        "Parce qu'elle dépend seulement du nombre d'années en France"
      ],
      "reponse": 0,
      "explication": "La naturalisation par décret est une décision de l'État après examen du dossier. La durée de résidence seule ne suffit pas."
    },
    {
      "id": "ent-058",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Quel lien existe entre l'entretien d'assimilation et les valeurs républicaines ?",
      "choix": [
        "L'entretien permet de vérifier que le candidat comprend et accepte les principes essentiels de la République",
        "L'entretien sert à choisir une religion officielle",
        "L'entretien interdit toute opinion personnelle",
        "L'entretien remplace toutes les conditions du dossier"
      ],
      "reponse": 0,
      "explication": "L'agent peut demander d'expliquer la liberté, l'égalité, la fraternité, la laïcité ou le respect de la loi. Il s'agit de vérifier l'assimilation, pas de supprimer la liberté d'opinion."
    },
    {
      "id": "ent-059",
      "theme": "entretien",
      "difficulte": "moyen",
      "question": "Pourquoi l'administration peut-elle examiner des séjours prolongés à l'étranger ?",
      "choix": [
        "Pour interdire tout voyage hors de France",
        "Pour vérifier où se trouve le centre stable de la vie du demandeur",
        "Pour choisir les destinations autorisées",
        "Pour remplacer l'examen civique"
      ],
      "reponse": 1,
      "explication": "Des absences longues peuvent poser la question de la résidence habituelle et du centre des intérêts. Voyager n'est pas interdit, mais le parcours doit rester cohérent."
    },
    {
      "id": "ent-060",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Pourquoi la production d'un faux justificatif est-elle très grave ?",
      "choix": [
        "Parce qu'elle peut entraîner un refus et des conséquences pénales ou administratives",
        "Parce qu'elle est conseillée si un document manque",
        "Parce qu'elle remplace un document original",
        "Parce qu'elle rend la naturalisation automatique"
      ],
      "reponse": 0,
      "explication": "La sincérité du dossier est essentielle. Un faux document peut compromettre la demande et exposer à des sanctions."
    },
    {
      "id": "ent-061",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Quelle réponse évite une confusion institutionnelle fréquente ?",
      "choix": [
        "Le Président vote toutes les lois seul",
        "Le Parlement vote la loi et le Premier ministre est nommé par le Président",
        "Le Premier ministre est élu directement par les citoyens",
        "Le maire nomme le Président de la République"
      ],
      "reponse": 1,
      "explication": "Le guide cite ces erreurs à éviter. Il faut connaître quelques repères simples sur les institutions sans donner une réponse partisane."
    },
    {
      "id": "ent-062",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Pourquoi une réponse politique partisane peut-elle être inadaptée pendant l'entretien ?",
      "choix": [
        "Parce qu'une définition institutionnelle ou une valeur républicaine demande une réponse neutre et factuelle",
        "Parce que les citoyens français n'ont pas d'opinions politiques",
        "Parce que voter est interdit",
        "Parce que seul un parti politique est autorisé en France"
      ],
      "reponse": 0,
      "explication": "L'entretien peut demander de définir une institution ou une valeur. Il faut répondre de façon factuelle et respectueuse, sans transformer la réponse en débat partisan."
    },
    {
      "id": "ent-063",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Pourquoi les questions de mise en situation existent-elles dans l'examen civique ?",
      "choix": [
        "Pour vérifier l'application concrète des principes républicains dans la vie quotidienne",
        "Pour connaître les préférences commerciales du candidat",
        "Pour remplacer toutes les questions de connaissance",
        "Pour obliger le candidat à donner son mot de passe"
      ],
      "reponse": 0,
      "explication": "Le guide précise que l'examen civique comprend des questions de connaissance et des mises en situation. Elles testent surtout l'application des principes."
    },
    {
      "id": "ent-064",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Dans une mise en situation, un collègue tient des propos discriminatoires. Quelle réaction est conforme aux valeurs républicaines ?",
      "choix": [
        "Participer aux propos discriminatoires",
        "Ne pas participer, soutenir la personne concernée et signaler selon les voies appropriées",
        "Dire que la discrimination est une liberté sans limite",
        "Ignorer systématiquement toute règle de l'entreprise"
      ],
      "reponse": 1,
      "explication": "La République protège l'égalité et refuse les discriminations. La réaction doit être proportionnée et respecter les procédures."
    },
    {
      "id": "ent-065",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Un ami vous dit qu'il ne croit en aucune religion. Quelle réponse est correcte ?",
      "choix": [
        "C'est interdit par la laïcité",
        "C'est autorisé : la liberté de conscience protège le droit de croire ou de ne pas croire",
        "Il doit choisir une religion officielle",
        "Il perd automatiquement ses droits civiques"
      ],
      "reponse": 1,
      "explication": "La liberté de conscience inclut le droit de croire, de changer de religion ou de ne pas croire. C'est un point central de la laïcité."
    },
    {
      "id": "ent-066",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Que répondre si l'on vous demande le sens de la fraternité ?",
      "choix": [
        "La fraternité signifie solidarité, entraide et attention aux autres dans la société",
        "La fraternité interdit d'avoir une famille",
        "La fraternité donne le droit d'ignorer la loi",
        "La fraternité concerne seulement les personnes d'une même religion"
      ],
      "reponse": 0,
      "explication": "La fraternité est une valeur de solidarité et de vivre ensemble. Elle s'applique dans le respect des lois et des droits de chacun."
    },
    {
      "id": "ent-067",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Quel exemple illustre correctement la liberté d'expression ?",
      "choix": [
        "Pouvoir exprimer une opinion dans les limites de la loi et du respect d'autrui",
        "Pouvoir diffamer quelqu'un sans conséquence",
        "Pouvoir menacer une personne",
        "Pouvoir supprimer les droits des autres"
      ],
      "reponse": 0,
      "explication": "La liberté d'expression est fondamentale, mais elle a des limites légales. Les menaces, injures ou accusations mensongères peuvent engager la responsabilité de leur auteur."
    },
    {
      "id": "ent-068",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Quel comportement montre une bonne préparation de l'entretien ?",
      "choix": [
        "Savoir expliquer son parcours, ses valeurs et sa vie en France avec des exemples concrets",
        "Réciter un texte sans comprendre",
        "Inventer une association dont on n'est pas membre",
        "Répondre uniquement par oui ou non à toutes les questions"
      ],
      "reponse": 0,
      "explication": "Une bonne préparation consiste à relier les notions à son expérience personnelle. La sincérité et les exemples concrets sont plus utiles que les réponses toutes faites."
    },
    {
      "id": "ent-069",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Pourquoi l'agent ne doit-il pas poser de questions discriminatoires ou sans lien avec la procédure ?",
      "choix": [
        "Parce que l'entretien doit vérifier l'assimilation et le dossier, dans le respect de l'égalité et de la vie privée",
        "Parce que l'agent doit seulement parler de sport",
        "Parce que les règles de la République ne s'appliquent pas à l'administration",
        "Parce que le candidat doit choisir l'ensemble des questions"
      ],
      "reponse": 0,
      "explication": "Les questions doivent rester en lien avec la naturalisation et respecter les principes d'égalité et de non-discrimination. L'entretien n'autorise pas des questions arbitraires."
    },
    {
      "id": "ent-070",
      "theme": "entretien",
      "difficulte": "difficile",
      "question": "Quelle affirmation résume le mieux la procédure 2026 de naturalisation par décret ?",
      "choix": [
        "Elle comprend un examen civique distinct et un entretien d'assimilation, avec examen du dossier",
        "Elle repose uniquement sur une conversation informelle sans QCM",
        "Elle supprime toute vérification des valeurs républicaines",
        "Elle est automatique dès que l'on vit en France"
      ],
      "reponse": 0,
      "explication": "La réforme 2026 distingue clairement le QCM civique et l'entretien d'assimilation. La naturalisation reste une décision de l'État après examen complet du dossier."
    },
    {
      "id": "sit-001",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Un recruteur refuse un candidat en raison de son origine. Que prévoit la loi ?",
      "choix": [
        "C'est une discrimination interdite.",
        "C'est une simple liberté de recrutement.",
        "C'est autorisé si le recruteur le dit franchement.",
        "C'est une règle normale de l'entreprise."
      ],
      "reponse": 0,
      "explication": "L'origine fait partie des critères protégés. Refuser un emploi pour ce motif est contraire au principe d'égalité et peut être sanctionné."
    },
    {
      "id": "sit-002",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Votre employeur vous propose de travailler sans déclaration pour gagner un peu plus. Que faites-vous ?",
      "choix": [
        "J'accepte si le paiement se fait en espèces.",
        "Je refuse, car le travail non déclaré est illégal.",
        "J'accepte si cela ne dure que quelques jours.",
        "Je laisse l'employeur décider seul."
      ],
      "reponse": 1,
      "explication": "Le travail dissimulé ne respecte pas la loi et prive le salarié de droits sociaux. Un emploi doit être déclaré."
    },
    {
      "id": "sit-003",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Au guichet d'une administration, un agent public veut afficher ses convictions religieuses pendant le service. Est-ce autorisé ?",
      "choix": [
        "Oui, car la laïcité ne concerne jamais les agents.",
        "Oui, si l'agent est discret avec les usagers.",
        "Non, un agent public doit rester neutre pendant son service.",
        "Cela dépend seulement de l'avis des usagers."
      ],
      "reponse": 2,
      "explication": "La neutralité s'impose aux agents publics dans l'exercice de leurs fonctions. Les usagers doivent être traités de manière égale."
    },
    {
      "id": "sit-004",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Vous voyez une personne tomber dans la rue et demander de l'aide. Que faites-vous ?",
      "choix": [
        "Je passe mon chemin car ce n'est pas mon problème.",
        "J'interviens seul même si cela me met gravement en danger.",
        "J'attends que la famille de la personne arrive.",
        "J'appelle les secours et j'aide sans me mettre en danger."
      ],
      "reponse": 3,
      "explication": "Il faut porter assistance à une personne en danger lorsque c'est possible. Alerter les secours est souvent le premier geste à faire."
    },
    {
      "id": "sit-005",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Une personne frappe sa conjointe et dit que cela relève de la vie privée. Que dit la loi ?",
      "choix": [
        "Les violences dans le couple sont interdites et peuvent être signalées.",
        "La justice ne s'occupe jamais des couples.",
        "La victime doit seulement demander l'avis de sa famille.",
        "La violence est permise si elle reste au domicile."
      ],
      "reponse": 0,
      "explication": "Les violences conjugales sont des infractions. En cas d'urgence, il faut appeler les secours ou les forces de l'ordre."
    },
    {
      "id": "sit-006",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Des parents demandent que leur enfant soit dispensé de natation à l'école pour un motif religieux. Quelle est la règle ?",
      "choix": [
        "L'école doit toujours accepter la demande religieuse.",
        "Les enseignements obligatoires doivent être suivis, sauf motif prévu comme une raison médicale.",
        "Le maire décide à la place de l'établissement.",
        "Le professeur doit créer un cours séparé."
      ],
      "reponse": 1,
      "explication": "L'école publique applique les programmes communs à tous les élèves. La liberté de conscience ne permet pas d'écarter un enseignement obligatoire."
    },
    {
      "id": "sit-007",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Sur un réseau social, une personne publie des insultes visant des personnes en raison de leur origine. Est-ce protégé par la liberté d'expression ?",
      "choix": [
        "Oui, Internet est un espace sans règle.",
        "Oui, si le message est publié le soir.",
        "Non, les propos discriminatoires ou haineux peuvent être sanctionnés.",
        "Oui, si l'auteur dit ensuite qu'il plaisantait."
      ],
      "reponse": 2,
      "explication": "La liberté d'expression a des limites. Les injures, diffamations ou appels à la haine visant des personnes ne sont pas protégés."
    },
    {
      "id": "sit-008",
      "theme": "situations",
      "difficulte": "facile",
      "question": "À l'hôpital public, un patient refuse d'être soigné par une femme médecin. Que doit rappeler le service ?",
      "choix": [
        "L'hôpital doit toujours remplacer la médecin.",
        "La médecin doit quitter la salle.",
        "La demande est valable si elle est présentée poliment.",
        "On ne choisit pas un soignant en fonction de son sexe."
      ],
      "reponse": 3,
      "explication": "Le service public repose sur l'égalité et la neutralité. Un usager ne peut pas imposer une discrimination à un agent ou à un professionnel."
    },
    {
      "id": "sit-009",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Un employeur refuse une candidate parce qu'elle est enceinte. Que prévoit la loi ?",
      "choix": [
        "C'est une discrimination interdite.",
        "C'est permis pour simplifier l'organisation.",
        "C'est permis si le poste est temporaire.",
        "La candidate doit accepter ce refus."
      ],
      "reponse": 0,
      "explication": "La grossesse ne peut pas justifier un refus d'embauche. L'égalité professionnelle protège les candidates et les salariées."
    },
    {
      "id": "sit-010",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Deux personnes veulent se marier en France. Quelle condition est essentielle ?",
      "choix": [
        "L'accord préalable des familles.",
        "Le consentement libre de chacune des deux personnes.",
        "Une cérémonie religieuse obligatoire.",
        "La même origine ou la même nationalité."
      ],
      "reponse": 1,
      "explication": "Le mariage civil repose sur le consentement libre et personnel. Les pressions ou menaces sont contraires à la loi."
    },
    {
      "id": "sit-011",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Un élève veut porter un signe religieux très visible dans un collège public. Que prévoit la loi ?",
      "choix": [
        "Chaque élève décide seul sans aucune règle.",
        "Seuls les enseignants sont concernés par la laïcité.",
        "Les signes religieux ostensibles sont interdits à l'école, au collège et au lycée publics.",
        "L'interdiction dépend de l'avis de la classe."
      ],
      "reponse": 2,
      "explication": "Dans les établissements scolaires publics, la loi encadre les signes manifestant ostensiblement une appartenance religieuse. Cette règle protège la laïcité de l'école."
    },
    {
      "id": "sit-012",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Un ami vous dit qu'il ne croit en aucune religion. Est-ce autorisé ?",
      "choix": [
        "Non, chacun doit choisir une religion.",
        "Oui seulement avec l'accord de sa famille.",
        "Non, la laïcité impose une croyance commune.",
        "Oui, la liberté de conscience protège aussi le droit de ne pas croire."
      ],
      "reponse": 3,
      "explication": "La liberté de conscience permet de croire, de changer de religion ou de ne pas croire. La laïcité garantit cette liberté."
    },
    {
      "id": "sit-013",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Dans la rue, une personne porte un vêtement exprimant une conviction personnelle, le visage visible. Est-ce en principe autorisé ?",
      "choix": [
        "Oui, les particuliers peuvent exprimer leurs convictions dans l'espace public, dans les limites de la loi.",
        "Non, toute conviction visible est interdite dehors.",
        "Oui seulement avec une autorisation de la mairie.",
        "Non, seuls les agents publics ont cette liberté."
      ],
      "reponse": 0,
      "explication": "La laïcité n'interdit pas aux particuliers d'exprimer leurs convictions. Des limites peuvent exister pour l'ordre public ou des règles particulières."
    },
    {
      "id": "sit-014",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Vous n'êtes pas d'accord avec une loi votée. Pouvez-vous décider de ne pas la respecter ?",
      "choix": [
        "Oui, chacun applique seulement les lois qu'il approuve.",
        "Non, on doit respecter la loi tant qu'elle est en vigueur.",
        "Oui, si plusieurs amis pensent comme vous.",
        "Non, mais il est interdit d'exprimer son désaccord."
      ],
      "reponse": 1,
      "explication": "Dans une démocratie, on peut critiquer une loi et demander sa modification par les voies prévues. Mais la loi s'applique tant qu'elle est en vigueur."
    },
    {
      "id": "sit-015",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Des parents demandent à une cantine publique un menu religieux obligatoire pour leur enfant. Que répond le service ?",
      "choix": [
        "La cantine doit toujours préparer un menu religieux séparé.",
        "L'enfant doit être privé de repas.",
        "Le service public n'a pas l'obligation de fournir un menu religieux, mais il doit traiter les usagers avec égalité.",
        "La cantine doit demander la religion de tous les élèves."
      ],
      "reponse": 2,
      "explication": "La restauration scolaire doit respecter la neutralité et l'égalité. Des choix pratiques peuvent exister, mais sans obligation religieuse ni discrimination."
    },
    {
      "id": "sit-016",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Dans une entreprise privée, des salariés demandent un aménagement pour prier sans perturber le travail. Quelle réponse est juste ?",
      "choix": [
        "L'employeur doit toujours créer un lieu de prière.",
        "Les salariés peuvent quitter leur poste à tout moment.",
        "Toute expression religieuse est interdite dans une entreprise privée.",
        "L'employeur peut examiner la demande, sans discrimination, selon l'organisation du travail."
      ],
      "reponse": 3,
      "explication": "La liberté de conviction existe dans l'entreprise, mais elle se concilie avec la sécurité, l'organisation et les droits des autres. Les demandes doivent être traitées de façon égale."
    },
    {
      "id": "sit-017",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Lors d'une démarche administrative, une personne refuse de parler à un agent parce qu'il est d'un autre sexe. Quelle est la bonne réaction ?",
      "choix": [
        "Rappeler que les agents publics doivent être respectés sans discrimination.",
        "Remplacer automatiquement l'agent.",
        "Refuser d'examiner le dossier sans autre explication.",
        "Laisser l'usager choisir les agents selon leur sexe."
      ],
      "reponse": 0,
      "explication": "L'égalité entre les femmes et les hommes s'applique dans les services publics. Une conviction personnelle ne permet pas d'imposer une discrimination."
    },
    {
      "id": "sit-018",
      "theme": "situations",
      "difficulte": "facile",
      "question": "À l'hôpital, un patient veut pratiquer un rite personnel dans sa chambre sans gêner les soins. Est-ce possible ?",
      "choix": [
        "Non, toute pratique personnelle est interdite.",
        "Oui, si cela respecte les soins, la sécurité et les autres patients.",
        "Oui, même si les soins urgents sont empêchés.",
        "Oui, même si les autres patients sont contraints d'y participer."
      ],
      "reponse": 1,
      "explication": "Les usagers du service public conservent leur liberté de conscience. Cette liberté doit rester compatible avec le bon fonctionnement du service."
    },
    {
      "id": "sit-019",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Un usager demande à un agent public de favoriser sa religion dans le traitement de son dossier. Que doit faire l'agent ?",
      "choix": [
        "Accepter pour éviter un conflit.",
        "Favoriser l'usager si la demande est sincère.",
        "Appliquer les mêmes règles à tous les usagers.",
        "Demander aux autres usagers leur religion."
      ],
      "reponse": 2,
      "explication": "Le service public est neutre et égal pour tous. Un agent public ne peut pas favoriser ou défavoriser une personne pour un motif religieux."
    },
    {
      "id": "sit-020",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Un salarié demande une absence pour une fête religieuse. Comment l'employeur doit-il répondre ?",
      "choix": [
        "Il doit toujours accepter, quelle que soit l'organisation.",
        "Il doit toujours refuser les demandes religieuses.",
        "Il peut refuser seulement parce qu'il désapprouve la croyance.",
        "Il examine la demande sans discrimination et selon les nécessités du travail."
      ],
      "reponse": 3,
      "explication": "Les convictions ne doivent pas entraîner de discrimination. Une demande d'absence peut être acceptée ou refusée pour des raisons objectives d'organisation."
    },
    {
      "id": "sit-021",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Un salarié refuse les consignes de sa supérieure parce que c'est une femme. Que prévoit le principe d'égalité ?",
      "choix": [
        "Ce refus est contraire à l'égalité femmes-hommes.",
        "Il peut choisir de ne recevoir d'ordres que d'un homme.",
        "La supérieure doit déléguer à un collègue masculin.",
        "L'entreprise doit séparer les équipes par sexe."
      ],
      "reponse": 0,
      "explication": "Une femme et un homme ont la même autorité professionnelle lorsqu'ils occupent la même fonction. Refuser cette autorité en raison du sexe est discriminatoire."
    },
    {
      "id": "sit-022",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Une femme majeure veut travailler, mais son conjoint affirme qu'elle doit obtenir son autorisation. Que dit le droit français ?",
      "choix": [
        "Le conjoint peut interdire tout emploi.",
        "Elle choisit librement de travailler, sans autorisation du conjoint.",
        "La famille décide à la place de la femme.",
        "L'employeur doit demander l'accord du conjoint."
      ],
      "reponse": 1,
      "explication": "L'égalité juridique entre les femmes et les hommes protège la liberté de travailler. Les pressions ou violences ne sont pas admises."
    },
    {
      "id": "sit-023",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Une jeune adulte dit qu'elle accepte un mariage parce que sa famille la menace. Que faut-il retenir ?",
      "choix": [
        "Le mariage reste valable si la famille a déjà organisé la fête.",
        "La peur ne compte pas dans le mariage civil.",
        "Un mariage exige un consentement libre ; elle peut demander de l'aide.",
        "Le maire doit célébrer le mariage pour éviter un conflit."
      ],
      "reponse": 2,
      "explication": "Le consentement doit être libre et personnel. Les menaces ou pressions peuvent justifier une protection et empêcher le mariage."
    },
    {
      "id": "sit-024",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Une personne déjà mariée veut se remarier civilement sans divorce. Est-ce autorisé ?",
      "choix": [
        "Oui, si tous les adultes sont d'accord.",
        "Oui, si la famille approuve.",
        "Oui, si le second mariage reste discret.",
        "Non, il faut être libre de tout mariage précédent."
      ],
      "reponse": 3,
      "explication": "Le mariage civil français repose sur la monogamie. On ne peut pas contracter un nouveau mariage civil tant qu'un précédent mariage subsiste."
    },
    {
      "id": "sit-025",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Une personne veut exprimer son opposition à une décision publique. Quelle attitude respecte les principes démocratiques ?",
      "choix": [
        "Manifester ou contester par les voies légales, sans violence.",
        "Détruire des biens publics pour se faire entendre.",
        "Menacer les élus pour les faire changer d'avis.",
        "Ignorer toutes les règles tant qu'elle est en colère."
      ],
      "reponse": 0,
      "explication": "La démocratie protège l'expression des désaccords. Cette expression doit respecter la loi, les personnes et les biens."
    },
    {
      "id": "sit-026",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Vous voyez une place réservée aux personnes handicapées libre près d'un magasin. Pouvez-vous vous y garer sans droit particulier ?",
      "choix": [
        "Oui, si c'est seulement pour quelques minutes.",
        "Non, ces places sont réservées aux personnes qui en ont le droit.",
        "Oui, si aucune autre voiture n'attend.",
        "Oui, si le magasin est presque fermé."
      ],
      "reponse": 1,
      "explication": "Les règles de stationnement réservé protègent l'accès des personnes handicapées. Elles doivent être respectées même pour un arrêt court."
    },
    {
      "id": "sit-027",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Une voisine vous confie subir des violences dans son couple et cherche de l'aide. Que pouvez-vous faire ?",
      "choix": [
        "Lui dire que cela relève uniquement de la famille.",
        "Attendre que l'auteur des violences donne son accord.",
        "L'orienter vers le 3919 et appeler les urgences en cas de danger immédiat.",
        "Lui conseiller de ne jamais contacter les autorités."
      ],
      "reponse": 2,
      "explication": "Des services d'écoute et d'urgence existent pour les victimes. En cas de danger immédiat, il faut appeler les secours ou les forces de l'ordre."
    },
    {
      "id": "sit-028",
      "theme": "situations",
      "difficulte": "facile",
      "question": "Un mineur semble en danger grave dans sa famille. Quelle réaction est conforme aux principes civiques ?",
      "choix": [
        "Ne rien dire car l'enfant appartient à sa famille.",
        "Attendre d'avoir une preuve judiciaire certaine.",
        "Publier son nom sur Internet pour alerter tout le monde.",
        "Alerter un service compétent ou demander conseil, par exemple au 119."
      ],
      "reponse": 3,
      "explication": "La protection de l'enfance permet de signaler une situation préoccupante. Il faut agir de façon responsable, sans exposer inutilement l'enfant."
    },
    {
      "id": "sit-029",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un parent veut frapper son enfant pour le punir. Que prévoit la loi ?",
      "choix": [
        "L'autorité parentale s'exerce sans violences physiques ou psychologiques.",
        "Une gifle est toujours un droit parental.",
        "Les coups sont permis s'ils ne laissent pas de trace.",
        "La loi ne concerne que les enseignants."
      ],
      "reponse": 0,
      "explication": "Les violences éducatives ordinaires sont interdites. L'enfant doit être élevé dans le respect de son intégrité."
    },
    {
      "id": "sit-030",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Une femme majeure envisage une décision médicale personnelle dans le cadre légal, et son conjoint s'y oppose. Quel principe s'applique ?",
      "choix": [
        "Le conjoint doit toujours signer une autorisation.",
        "La décision appartient à la personne concernée, dans le cadre prévu par la loi.",
        "La famille décide à la place de la personne majeure.",
        "Le désaccord du conjoint interdit toute démarche."
      ],
      "reponse": 1,
      "explication": "Le droit français protège l'autonomie de la personne majeure. Les décisions relatives au corps et à la santé relèvent du cadre légal et du consentement de la personne concernée."
    },
    {
      "id": "sit-031",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Dans la rue, une personne suit quelqu'un en faisant des remarques sexuelles humiliantes. Que dit la loi ?",
      "choix": [
        "C'est toujours une simple plaisanterie.",
        "C'est autorisé s'il n'y a pas de contact physique.",
        "Ce comportement peut être sanctionné.",
        "La victime doit être accompagnée pour être protégée."
      ],
      "reponse": 2,
      "explication": "Les comportements sexistes ou sexuels humiliants peuvent porter atteinte à la dignité. L'absence de contact physique ne les rend pas acceptables."
    },
    {
      "id": "sit-032",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Deux collègues, une femme et un homme, font le même travail avec la même qualification. L'employeur paie moins la femme. Quelle règle s'applique ?",
      "choix": [
        "L'employeur peut payer moins une femme.",
        "La différence est légale si elle reste secrète.",
        "La salariée doit accepter parce qu'elle a signé son contrat.",
        "Le principe est l'égalité de rémunération pour un même travail ou un travail de valeur égale."
      ],
      "reponse": 3,
      "explication": "L'égalité professionnelle interdit une différence de rémunération fondée sur le sexe. Une différence doit reposer sur des critères objectifs."
    },
    {
      "id": "sit-033",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Une personne entre dans un commerce ouvert au public avec le visage entièrement dissimulé sans motif légal. Que prévoit la loi ?",
      "choix": [
        "La dissimulation du visage dans l'espace public est interdite sauf exceptions prévues.",
        "C'est toujours autorisé dans les commerces.",
        "Seule la mairie du quartier peut l'interdire.",
        "La règle ne concerne que les bâtiments administratifs."
      ],
      "reponse": 0,
      "explication": "Les lieux ouverts au public font partie de l'espace public au sens de cette règle. Des exceptions existent, par exemple pour la santé ou la sécurité."
    },
    {
      "id": "sit-034",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Dans un service public, un usager insulte un agent parce qu'il est mécontent de l'attente. Que faut-il faire ?",
      "choix": [
        "Insulter l'agent pour accélérer le dossier.",
        "Rester respectueux et utiliser les voies de réclamation prévues.",
        "Menacer l'agent si la réponse ne convient pas.",
        "Bloquer le guichet jusqu'à obtenir gain de cause."
      ],
      "reponse": 1,
      "explication": "Les agents publics et les usagers se doivent un respect mutuel. Un désaccord se traite par les procédures de réclamation, pas par la violence ou l'insulte."
    },
    {
      "id": "sit-035",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Des parents veulent marier civilement leur enfant de 16 ans. Quelle est la règle générale en France ?",
      "choix": [
        "Les parents peuvent décider seuls du mariage.",
        "Un mariage religieux suffit pour remplacer le mariage civil.",
        "Le mariage civil est en principe réservé aux majeurs et exige un consentement libre.",
        "Le mineur doit accepter si la famille est d'accord."
      ],
      "reponse": 2,
      "explication": "En France, le mariage suppose des conditions légales strictes et un consentement libre. La protection des mineurs est prioritaire."
    },
    {
      "id": "sit-036",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un parent veut garder son enfant de 8 ans à la maison sans assurer son instruction. Que rappelle la loi ?",
      "choix": [
        "L'instruction est facultative avant 12 ans.",
        "L'enfant décide seul s'il veut apprendre.",
        "L'obligation concerne seulement l'école publique.",
        "L'instruction est obligatoire pour les enfants selon les âges prévus par la loi."
      ],
      "reponse": 3,
      "explication": "Les parents doivent assurer l'instruction de leurs enfants. Les modalités peuvent varier, mais l'obligation doit être respectée."
    },
    {
      "id": "sit-037",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un collégien manque souvent les cours sans raison valable et ses parents minimisent. Que doivent-ils faire ?",
      "choix": [
        "Veiller à l'assiduité scolaire et dialoguer avec l'établissement.",
        "Ignorer les absences si l'enfant ne se plaint pas.",
        "Laisser l'enfant arrêter les cours quand il veut.",
        "Attendre seulement les examens de fin d'année."
      ],
      "reponse": 0,
      "explication": "L'assiduité fait partie de l'obligation d'instruction. L'école et les parents doivent agir pour éviter le décrochage."
    },
    {
      "id": "sit-038",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un adulte estime qu'une gifle éducative est un droit parental normal. Quelle est la règle ?",
      "choix": [
        "Les coups sont permis s'ils sont rares.",
        "Les violences physiques ou psychologiques envers les enfants sont interdites.",
        "La loi autorise la violence si l'enfant désobéit.",
        "Seules les violences à l'école sont interdites."
      ],
      "reponse": 1,
      "explication": "L'autorité parentale doit s'exercer dans le respect de l'enfant. Les violences éducatives ordinaires ne sont pas admises."
    },
    {
      "id": "sit-039",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Vous pensez qu'un enfant est maltraité ou en danger. Que pouvez-vous faire ?",
      "choix": [
        "Attendre une certitude absolue avant toute démarche.",
        "Demander seulement au voisinage de surveiller.",
        "Appeler le 119 ou alerter les services compétents.",
        "Ne rien faire car la famille décide seule."
      ],
      "reponse": 2,
      "explication": "Le 119 permet d'obtenir conseil et d'alerter sur un enfant en danger. Il faut agir avec prudence et responsabilité."
    },
    {
      "id": "sit-040",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Une adolescente est poussée à accepter un mariage qu'elle refuse. Quelle attitude respecte la loi française ?",
      "choix": [
        "La volonté de la famille l'emporte toujours.",
        "Elle doit accepter si une fête est prévue.",
        "Le mariage devient valable par simple accord des familles.",
        "Respecter son refus et alerter si des pressions la mettent en danger."
      ],
      "reponse": 3,
      "explication": "Le mariage suppose un consentement libre. Les pressions ou menaces peuvent justifier une protection."
    },
    {
      "id": "sit-041",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Après une séparation, un parent refuse d'appliquer une décision du juge concernant l'enfant. Que faut-il faire ?",
      "choix": [
        "Respecter la décision ou demander sa modification au juge.",
        "Ignorer la décision si l'on est en colère.",
        "Demander aux grands-parents de trancher.",
        "Se faire justice soi-même."
      ],
      "reponse": 0,
      "explication": "Les décisions de justice doivent être respectées. En cas de difficulté ou de danger, il faut saisir les autorités compétentes."
    },
    {
      "id": "sit-042",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un parent laisse régulièrement un très jeune enfant seul la nuit. Que faut-il retenir ?",
      "choix": [
        "C'est toujours un choix privé.",
        "Cela peut mettre l'enfant en danger et justifier une alerte.",
        "C'est légal si l'enfant dort.",
        "C'est autorisé si un voisin a les clés sans le savoir."
      ],
      "reponse": 1,
      "explication": "Les parents doivent protéger la sécurité et la santé de l'enfant. Une situation dangereuse peut nécessiter l'intervention des services compétents."
    },
    {
      "id": "sit-043",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un propriétaire refuse de louer un appartement à une personne parce qu'elle est handicapée. Que dit la loi ?",
      "choix": [
        "Le propriétaire peut choisir selon l'apparence.",
        "Le refus est toujours légal si l'immeuble est ancien.",
        "Le refus fondé sur le handicap est une discrimination interdite.",
        "La personne doit cacher son handicap."
      ],
      "reponse": 2,
      "explication": "Le handicap est un critère protégé. L'accès au logement doit respecter le principe de non-discrimination."
    },
    {
      "id": "sit-044",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un restaurant refuse l'entrée à deux personnes parce qu'elles forment un couple de même sexe. Est-ce autorisé ?",
      "choix": [
        "Oui, un commerce choisit librement selon l'orientation sexuelle.",
        "Oui, si aucun panneau ne l'interdit.",
        "Oui, si d'autres clients sont gênés.",
        "Non, c'est une discrimination interdite dans l'accès à un service."
      ],
      "reponse": 3,
      "explication": "L'orientation sexuelle ne peut pas justifier un refus de service. Les commerces ouverts au public doivent respecter l'égalité."
    },
    {
      "id": "sit-045",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Une annonce d'emploi indique « moins de 35 ans uniquement » sans justification liée au poste. Quelle analyse est correcte ?",
      "choix": [
        "Une condition d'âge non justifiée peut être discriminatoire.",
        "L'âge peut toujours servir à trier les candidats.",
        "La limite est valable si elle est écrite clairement.",
        "La discrimination n'existe qu'après l'embauche."
      ],
      "reponse": 0,
      "explication": "L'âge est un critère protégé. Une différence de traitement doit être justifiée par un motif objectif et proportionné."
    },
    {
      "id": "sit-046",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un magasin refuse de servir une cliente uniquement en raison d'un signe religieux visible. Que dit le principe de non-discrimination ?",
      "choix": [
        "Le magasin peut exclure toute conviction visible sans motif.",
        "Un refus fondé sur la religion peut être interdit.",
        "Les clients perdent leurs droits en entrant dans un commerce.",
        "Le refus est légal si un client se dit gêné."
      ],
      "reponse": 1,
      "explication": "La religion fait partie des critères protégés. Un commerce ouvert au public ne peut pas refuser un service pour ce seul motif."
    },
    {
      "id": "sit-047",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Une personne pense avoir subi une discrimination et cherche une aide indépendante. Vers qui peut-elle se tourner ?",
      "choix": [
        "Uniquement le maire de sa commune.",
        "Le conseil syndical de son immeuble.",
        "Le Défenseur des droits.",
        "Un voisin choisi par l'auteur du refus."
      ],
      "reponse": 2,
      "explication": "Le Défenseur des droits peut être saisi gratuitement pour des discriminations. Cette démarche n'empêche pas d'autres recours."
    },
    {
      "id": "sit-048",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un collègue tient des propos discriminatoires contre une personne. Que faites-vous ?",
      "choix": [
        "Je ris pour éviter de créer un malaise.",
        "Je répète les propos à d'autres collègues.",
        "Je demande à la personne visée de se taire.",
        "Je ne participe pas et je signale les faits par les voies appropriées."
      ],
      "reponse": 3,
      "explication": "Il ne faut pas participer à une discrimination. Selon la situation, on peut soutenir la personne concernée et utiliser les procédures de l'entreprise."
    },
    {
      "id": "sit-049",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Une personne aveugle arrive dans un restaurant avec son chien guide. Quelle est la bonne attitude ?",
      "choix": [
        "L'accueillir, sauf exception légale particulière.",
        "Refuser toujours les chiens guides dans les lieux où l'on mange.",
        "Exiger un supplément automatique.",
        "Demander à la personne de laisser le chien dehors."
      ],
      "reponse": 0,
      "explication": "Les chiens guides ou d'assistance bénéficient d'un accès à de nombreux lieux ouverts au public. Ce droit favorise l'autonomie et l'égalité."
    },
    {
      "id": "sit-050",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Une personne reçoit des menaces en raison de son origine. Que peut-elle faire ?",
      "choix": [
        "Se limiter à en parler à ses proches.",
        "Demander de l'aide et déposer plainte si nécessaire.",
        "Attendre que l'auteur reconnaisse les faits.",
        "Répondre par des menaces."
      ],
      "reponse": 1,
      "explication": "Les menaces discriminatoires ne sont pas acceptables. La victime peut contacter les forces de l'ordre, une association ou le Défenseur des droits."
    },
    {
      "id": "sit-051",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Sur un réseau social, vous accusez une personne d'un vol sans preuve. Quel principe faut-il rappeler ?",
      "choix": [
        "Tout est permis si le message est court.",
        "Il suffit de supprimer le message le lendemain.",
        "La liberté d'expression ne permet pas de diffuser des accusations mensongères.",
        "La personne accusée doit prouver seule son innocence en public."
      ],
      "reponse": 2,
      "explication": "Des propos portant atteinte à l'honneur d'une personne peuvent engager la responsabilité de leur auteur. La prudence est nécessaire en ligne."
    },
    {
      "id": "sit-052",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un usager propose de l'argent à un agent public pour obtenir son dossier plus vite. Quelle est la bonne réponse ?",
      "choix": [
        "C'est une simple récompense si le dossier est complet.",
        "C'est autorisé si le paiement reste discret.",
        "C'est normal lorsque le service est débordé.",
        "C'est interdit : le service public ne se monnaye pas."
      ],
      "reponse": 3,
      "explication": "La probité des agents publics protège l'égalité entre les usagers. Un avantage indu ne doit pas influencer une décision publique."
    },
    {
      "id": "sit-053",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Des jeunes abîment volontairement un banc public dans un parc. Que faut-il rappeler ?",
      "choix": [
        "Les biens publics doivent être respectés ; les dégradations sont interdites.",
        "Un bien public n'appartient à personne.",
        "C'est permis si le banc était ancien.",
        "La commune doit réparer sans pouvoir réagir."
      ],
      "reponse": 0,
      "explication": "Les équipements publics servent à tous. Les dégrader porte atteinte à la vie collective et peut être sanctionné."
    },
    {
      "id": "sit-054",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Vous organisez une fête très bruyante à deux heures du matin et les voisins se plaignent. Que faut-il faire ?",
      "choix": [
        "Continuer, car chacun fait ce qu'il veut chez lui.",
        "Réduire le bruit, car le tapage nocturne peut être sanctionné.",
        "Dire aux voisins de déménager.",
        "Faire encore plus de bruit si la fête est exceptionnelle."
      ],
      "reponse": 1,
      "explication": "La liberté chez soi s'exerce dans le respect du voisinage. La tranquillité d'autrui fait partie de la vie collective."
    },
    {
      "id": "sit-055",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Une personne dépose un canapé sur le trottoir au lieu d'utiliser la collecte prévue. Est-ce autorisé ?",
      "choix": [
        "Oui, si l'objet est trop lourd.",
        "Oui, après minuit.",
        "Non, le dépôt sauvage de déchets est interdit.",
        "Oui, si la commune ramasse souvent."
      ],
      "reponse": 2,
      "explication": "Les déchets doivent être déposés selon les règles locales. Les dépôts sauvages dégradent l'espace public."
    },
    {
      "id": "sit-056",
      "theme": "situations",
      "difficulte": "moyen",
      "question": "Un conducteur franchit un feu rouge parce qu'il n'y a personne sur la route. Quelle est la règle ?",
      "choix": [
        "Le code de la route ne s'applique qu'en cas de trafic.",
        "Le conducteur décide selon son expérience.",
        "Le feu rouge n'est obligatoire que pour les jeunes conducteurs.",
        "Les règles de circulation doivent être respectées même si la route paraît vide."
      ],
      "reponse": 3,
      "explication": "Le respect du code de la route protège la sécurité de tous. Une règle ne dépend pas seulement du danger visible sur le moment."
    },
    {
      "id": "sit-057",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Dans un bus, une personne refuse de laisser une place prioritaire à une personne âgée en difficulté. Quelle attitude est civique ?",
      "choix": [
        "Céder la place ou faciliter l'accès à la personne qui en a besoin.",
        "Garder la place quoi qu'il arrive.",
        "Demander à la personne âgée de descendre.",
        "Se moquer de sa difficulté."
      ],
      "reponse": 0,
      "explication": "La civilité et la solidarité facilitent la vie commune. Les places prioritaires répondent à un besoin de protection des personnes fragiles."
    },
    {
      "id": "sit-058",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Un candidat propose de supprimer la liberté de la presse. Que faut-il rappeler ?",
      "choix": [
        "Une majorité peut supprimer n'importe quelle liberté sans limite.",
        "Les libertés fondamentales sont protégées par la Constitution et la loi.",
        "La liberté de la presse n'existe que si tout le monde est d'accord.",
        "Les journalistes doivent toujours soutenir le pouvoir."
      ],
      "reponse": 1,
      "explication": "La démocratie protège les libertés fondamentales, dont la liberté d'expression et d'information. Les débats politiques doivent respecter cet État de droit."
    },
    {
      "id": "sit-059",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Un journal publie une caricature qui choque certaines croyances sans appeler à la haine contre des personnes. Quel principe s'applique ?",
      "choix": [
        "Toute caricature religieuse est interdite.",
        "Une croyance choquée suffit toujours à faire condamner le journal.",
        "La liberté d'expression protège aussi la satire, dans les limites de la loi.",
        "La liberté d'expression disparaît dès qu'un sujet est sensible."
      ],
      "reponse": 2,
      "explication": "La critique, la satire et la caricature peuvent être protégées. Les limites concernent notamment l'injure, la diffamation et l'appel à la haine."
    },
    {
      "id": "sit-060",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Lors d'un débat, une personne critique vivement une religion sans attaquer les croyants comme personnes. Que dit le droit français ?",
      "choix": [
        "Le blasphème est un délit général en France.",
        "Toute critique doit être autorisée par un juge.",
        "La laïcité interdit de parler des religions en public.",
        "La critique des idées est permise dans les limites de la loi."
      ],
      "reponse": 3,
      "explication": "La liberté d'expression permet de discuter et critiquer des idées. Elle ne protège pas les attaques illégales contre les personnes."
    },
    {
      "id": "sit-061",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Sur Internet, quelqu'un diffuse chaque jour des messages humiliants contre un camarade. Quelle est la bonne réponse ?",
      "choix": [
        "Cela peut constituer du harcèlement ou du cyberharcèlement.",
        "C'est une plaisanterie privée sans conséquence.",
        "La victime doit seulement quitter Internet.",
        "Seul le site Internet peut être responsable."
      ],
      "reponse": 0,
      "explication": "La répétition de propos ou comportements humiliants peut être sanctionnée. Les outils numériques n'échappent pas au droit."
    },
    {
      "id": "sit-062",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Une personne publie un message qui félicite les auteurs d'un attentat. La liberté d'expression protège-t-elle cela ?",
      "choix": [
        "Oui, toute opinion est protégée sans limite.",
        "Non, l'apologie du terrorisme est interdite.",
        "Oui, si le compte a peu d'abonnés.",
        "Oui, si l'attentat a eu lieu à l'étranger."
      ],
      "reponse": 1,
      "explication": "La liberté d'expression connaît des limites nécessaires à la sécurité et aux droits d'autrui. Faire l'apologie du terrorisme est une infraction."
    },
    {
      "id": "sit-063",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Dans une réunion, une personne appelle à exclure des citoyens d'un droit en raison de leur religion. Que faut-il rappeler ?",
      "choix": [
        "C'est acceptable si la salle applaudit.",
        "La majorité locale peut retirer les droits d'un groupe.",
        "Les droits civiques ne peuvent pas être refusés pour un motif religieux.",
        "La laïcité autorise l'exclusion des croyants."
      ],
      "reponse": 2,
      "explication": "La République garantit l'égalité des citoyens sans distinction de religion. Les opinions politiques s'expriment dans le cadre des droits fondamentaux."
    },
    {
      "id": "sit-064",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Plusieurs élèves créent un groupe en ligne pour humilier chaque jour un camarade. Quelle attitude est conforme aux principes républicains ?",
      "choix": [
        "Participer si tout le monde le fait.",
        "Dire à la victime de supporter les moqueries.",
        "Partager les messages pour amuser les autres.",
        "Refuser d'y participer et alerter un adulte ou l'établissement."
      ],
      "reponse": 3,
      "explication": "Le harcèlement porte atteinte à la dignité et peut être sanctionné. Alerter permet de protéger la victime."
    },
    {
      "id": "sit-065",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Vous êtes tiré au sort comme juré d'assises et vous recevez une convocation. Quelle est l'attitude civique attendue ?",
      "choix": [
        "Se présenter, sauf motif légitime de dispense ou d'excuse.",
        "Ignorer la convocation si l'affaire ne vous intéresse pas.",
        "Demander à un proche d'y aller à votre place.",
        "Refuser automatiquement si vous ne connaissez pas l'accusé."
      ],
      "reponse": 0,
      "explication": "Participer à un jury d'assises est une fonction civique. La convocation doit être prise au sérieux."
    },
    {
      "id": "sit-066",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Vous êtes témoin d'un accident de la route. Que devez-vous faire en priorité ?",
      "choix": [
        "Filmer la scène avant d'appeler.",
        "Sécuriser si possible et appeler les secours sans vous mettre en danger.",
        "Déplacer toutes les victimes sans réfléchir.",
        "Partir si vous êtes pressé."
      ],
      "reponse": 1,
      "explication": "Face à une urgence, il faut protéger, alerter et secourir dans la mesure de ses capacités. Il ne faut pas aggraver le danger."
    },
    {
      "id": "sit-067",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Des habitants créent une association pour nettoyer leur quartier et dialoguer avec la mairie. Quel principe cela illustre-t-il ?",
      "choix": [
        "L'obligation de remplacer les services publics.",
        "Le droit de décider seuls des règles de police.",
        "La participation des citoyens à la vie collective, dans le respect de la loi.",
        "La possibilité d'exclure ceux qui pensent autrement."
      ],
      "reponse": 2,
      "explication": "La liberté d'association permet de s'engager dans la société. Cet engagement doit respecter les institutions et l'égalité."
    },
    {
      "id": "sit-068",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Au guichet d'une mairie, un agent conseille aux usagers de voter pour son parti pendant le service. Quelle règle s'applique ?",
      "choix": [
        "L'agent peut faire campagne s'il reste poli.",
        "La mairie doit afficher les préférences de chaque agent.",
        "Les usagers doivent suivre le conseil de l'agent.",
        "L'agent public doit respecter la neutralité pendant son service."
      ],
      "reponse": 3,
      "explication": "Les agents publics ont des opinions personnelles, mais ils ne doivent pas utiliser leur fonction pour les promouvoir. Le service public doit rester neutre."
    },
    {
      "id": "sit-069",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Des parents refusent un soin indispensable qui met la vie de leur enfant en danger. Que peut prévoir la protection de l'enfant ?",
      "choix": [
        "Les autorités peuvent intervenir pour protéger la santé et la vie de l'enfant.",
        "Le refus des parents s'impose toujours aux médecins.",
        "L'enfant doit attendre d'être majeur.",
        "Les médecins doivent seulement partir après une décharge."
      ],
      "reponse": 0,
      "explication": "L'autorité parentale s'exerce dans l'intérêt de l'enfant. En cas de danger grave, la protection du mineur prime."
    },
    {
      "id": "sit-070",
      "theme": "situations",
      "difficulte": "difficile",
      "question": "Un groupe demande que la piscine municipale exclue durablement certaines personnes des horaires ordinaires. Que doit respecter la commune ?",
      "choix": [
        "Accepter toute demande collective.",
        "L'égalité des usagers et l'absence de discrimination injustifiée.",
        "Laisser chaque groupe fixer ses propres règles au service public.",
        "Interdire toute mixité dans les équipements sportifs."
      ],
      "reponse": 1,
      "explication": "Les services publics doivent être accessibles selon des règles égales et neutres. Des aménagements ne sont possibles que s'ils sont légaux, objectifs et proportionnés."
    }
  ]
};
