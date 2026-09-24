# Devenir Français

Application web de QCM pour préparer l'entretien d'assimilation à la naturalisation française.

## Utiliser l'application

1. Ouvrez `index.html` dans votre navigateur.
2. Choisissez les options de l'examen :
   - nombre de questions ;
   - durée ;
   - correction immédiate ou à la fin.
3. Répondez aux questions, puis consultez votre résultat et les explications.

La banque contient 1 000 questions réparties entre neuf thèmes et trois niveaux de difficulté.

## Lancer en local

L'application fonctionne directement en ouvrant `index.html`. Pour utiliser un serveur de développement :

```bash
npm install
npm start
```

Pour créer la version de production :

```bash
npm run build
```

## Banque de questions

Les questions sont stockées uniquement dans `data/questions.js`. Chaque question comporte un thème, un niveau de difficulté, quatre choix, la bonne réponse et une explication.
