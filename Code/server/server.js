// npm  init
// npm i express
// Chargement de la bibliothèque express
var express=require('express');

// Création d'une instance de l'application express
var app=express();

// Intercaler des middlewares pour gérer les requêtes
app.use(async function(req,res,next){
    // Journalisation
    console.log("Requête reçue : "+req.method+" "+req.url);
    // exécution du middle suivant (next est une fonction asynchrone);
    await next();
    console.log("Requête terminée : "+req.method+" "+req.url);
});

// express.static génère une fonction middleware qui va servir les fichiers statiques du répertoire spécifié
app.use(express.static(__dirname+"/../Exemples code/Web"));


//Ecoute sur le port 8080
app.listen(8080,function(){
    console.log("Serveur démarré sur le port 8080");
});
