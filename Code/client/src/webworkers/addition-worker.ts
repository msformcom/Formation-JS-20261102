// Je considère ce fichier en tant que webworker
// un objet qui recoit des messages (event) et exécute le gestionnaire
// dans un thread séparé du thread principal
// disponible à partir de self
self.addEventListener("message",(e)=>{
    // Dans  un worker, on ne doit pas accéder aux objets associés au thread principal
    // document.getElementById("tt")!.innerHTML="";
    // sera exécuté en parrallele
    var parametres:{a:number,b:number}=e.data; // Donnees envoyées par le thrzead principas
       let r = 0;
        for (var i = 0; i < parametres.a; i++) {
            r++;
        }
        for (var i = 0; i < parametres.b; i++) {
            r++;
        }
        // envoi du resultat de l'opération parrallele sous la forme d'un message
        // qui sera capté par un event
        self.postMessage({resultat:r})
});