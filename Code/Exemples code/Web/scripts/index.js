// On utilise pas document.write
//document.write(new Date(2026,14,35));
// index2.js est un module 
//


// import o from "./index2.js";  // import de l'objet exporté par le module index2.js
// o= { additionAsync: [Function: additionAsync], a: 2 }
import { additionAsync } from "./index2.js"; // import des éléments exportés par le module index2.js

let obj={a:1,b:2};
let tab=[1,2,3,4,5];
let [x,y,...z]=tab; // destructuring assignment
let tab2=[...tab,...z]; // spread operator tab2=>[1,2,3,4,5,3,4,5]
// x=> 1, y=>2, z=>[3,4,5]
let {a,b}=obj; // destructuring assignment

// Réécriture de la fonction alert du navigateur
// La fonction anonyme est exécutée lorsque le document est chargé
document.addEventListener("DOMContentLoaded", function () {
    // Aller chercher dans le document l'objet à modifier
    let formulaire = document.querySelector("#formulaire");
    formulaire.addEventListener("submit", async function (e) {
        // Empécher l'envoi du formulaire au serveur => rechargement page
        e.preventDefault();
        document.querySelector("#resultat").innerHTML = "Calcul en cours...";
        // Désactivation des boutons du formulaire pour éviter les doubles clics
        formulaire.querySelectorAll("button[type='submit']").forEach((button) => {
            button.disabled = true;
        });
        let data = new FormData(formulaire);
        let number1 = parseInt(data.get("number1"));
        let number2 = parseInt(data.get("number2"));
        let resultat = await additionAsync(number1, number2);
        document.querySelector("#resultat").innerHTML = resultat;
        formulaire.querySelectorAll("button[type='submit']").forEach((button) => {
            button.disabled = false;
        });
    })
});


