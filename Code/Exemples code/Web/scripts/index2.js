// Fonction qui renvoit une promesse au lieu du résultat
// En considérant ce .js en tant que module, on peut exporter la fonction pour l'utiliser dans un autre module
export function additionAsync(a,b){
    return new Promise((resolve, reject)=>{
        // code à éxécuter en asynchrone
        setTimeout(()=>{
            // terminer la promesse sans erreur
            resolve(a+b);
            // terminer la promesse en erreur
            //reject(new Error("Erreur de calcul"));
        },3000);
    });
}

export const a=2;

// export de ce module est un objet qui contient toutes les fonctions et variables exportées
// { additionAsync: [Function: additionAsync], a: 2 }