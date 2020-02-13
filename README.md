# nws-exam-11-02-2020

Examen du 11 février 2020.

## Projet

Le projet se présente sous forme d'un blog sur le sujet des éléments du tableau de Mendeleïev.  
  
## Prérequis  
  
- Node  
- Npm  
- Docker (image mongodb) ou MongoDB  

Si MongoDB :  
- Créer base de données < blog >  
- Créer collection < article >  
- Importer fichier < data.json > se trouvant dans backend/mongo-seed/  
  
## Installation  
  
Git clone du projet.  

```bash
cd backend
npm install
docker-compose up -d (si pas de mongodb d'installé)
node serveur.js

...

cd ..
cd frontend
npm install
npm start
```