// npm  init
// npm i express
// npm i @types/express => installation des types relatifs à express (js)
// npm i typescript => Installation du compilateur tsc
// npx tsc --init => Création du fichier tsconfig.json

// Chargement de la bibliothèque express
// var express=require('express'); // syntaxe de node js pour les imports de module
import express from "express"; // va être traduit en syntaxe spécifique pour node.js par tsc
import {getTimes} from "suncalc";
import { createServer } from 'http';
// ws => biblio js => npm i @types/ws pour installer les types pour ts
import { WebSocketServer, WebSocket } from 'ws';



// Création d'une instance de l'application express
const app = express();

// Ajout du protocole ws au server 
// npm i ws
const serverHttp= createServer(app);
const wsServer=new WebSocketServer({ server:serverHttp })

const clients:WebSocket[]=[]; // je déclare un tableau de clients
wsServer.on("connection",(clientConnection)=>{
    clients.push(clientConnection);
    clientConnection.on("message",(message)=>{
        // Envoi du message aux clients
        for(let c of clients){
            c.send(message);
        }
    })
    clientConnection.on("close",()=>{
        // 
        clients.splice(clients.indexOf(clientConnection),1);
    })
})

// Intercaler des middlewares pour gérer les requêtes
app.use(async function (req, res, next) {

    // Journalisation
    console.log("Requête reçue : " + req.method + " " + req.url);
    // exécution du middle suivant (next est une fonction asynchrone);
    await next();
    console.log("Requête terminée : " + req.method + " " + req.url);
});

// express.static génère une fonction middleware qui va servir les fichiers statiques du répertoire spécifié
app.use(express.static("../client/dist"));

// GET : suninfos/2026-11-04T11:45:01/2.876876/45.28979287
app.get("/suninfos/:date/:lat/:long", (req, res) => {
    let date = new Date(req.params["date"]);
    let latitude = parseFloat(req.params["lat"]);
    let longitude = parseFloat(req.params["long"]);
    let resultat=getTimes(date,latitude,longitude)
    // DTO objet servant à transporter l'information
    res.send({sr:resultat.sunrise,ss:resultat.sunset} );
});




//Ecoute sur le port 8080
serverHttp.listen(8080, function () {
    console.log("Serveur démarré sur le port 8080");
});


