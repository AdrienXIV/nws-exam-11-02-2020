# nws-exam-11-02-2020

Examen du 11 février 2020.

## Projet

Le projet se présente sous forme d'un blog sur le sujet des éléments du tableau de Mendeleïev.  
  
 
## Frontend  
  
- Techonologie : React (approfondir le framework pour ensuite découvrir ReactNative)  
  
# Routes  
- /blog : tous les articles  
- /blog/:id : affichage d'un article  
- /blog/new : ajout d'un article  

Partie non finalisée  
- /user/login : connexion d'un utilisateur  
- /user/new  : nouvel utilisateur  

## Backend  
  
- Port 8080  
- Technologie : NodeJS avec le Frameword Express pour le serveur (maitriser le javascript et les serveurs web avec node)  
  
# Routes  
- /blog : tous les articles  
- /blog/:id (GET) : récupération d'un article  
- /blog/:id (PATCH) : modification d'un article  
- /blog/:id (DELETE) : suppression d'un article
- /blog/add (POST) : ajout d'un article  

Partie non finalisée  
- /user/login (GET) : connexion d'un utilisateur  
- /user/new (POST) : nouvel utilisateur  
  

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

## Bugs
- Catch : récupération d'un article affiche un message dans la console sans impacter le serveur. (backend/routes/blog.route.js ligne 35)