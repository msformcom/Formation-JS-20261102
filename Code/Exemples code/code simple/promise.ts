// Javascript : non typé
// fonctionalités disponibles fonction de la version
// dépend du navigateur
// Typescript : compilé en Javascript
// Superset de Javascript

// Fonction qui renvoit une promesse au lieu du résultat
function additionAsync(a:number,b:number): Promise<number>{
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

// ajouter 1 et 2 et afficher le résultat
var p=additionAsync(1,2);
// p est une promesse
// pour exploiter le résultat
p.then(r=>{
    console.log(r);
});
// gérer une erreur
p.catch(err=>{
    console.warn(err.message);
})
console.log("Suite du code");

// Design pattern async/Await
// closure => se placer dans le cadre d'une fonction pour générer un contexte d'exécution local indépendant
(async function(){
    // On est très proche du code synchrone
    let r=await additionAsync(1,2);
    console.log(r);
})();

(async function(){
    additionAsync(1,2).then(r=>{
         console.log(r);
    })
   
})();


// additionner 1,2,3,4
// additionnerAsync(1,2) => r1 additionnerAsync(r1,3)=> r2 => additionnerAsync(r2,4)=> resultat

// Sans async/await
(function(){
    additionAsync(1,2).then(r1=>{
        additionAsync(r1,3).then(r2=>{
            additionAsync(r2,4).then(r3=>{
                console.log("Résultat then "+r3);
            })
        });
    });
})();

// avec async/await
(async function(){
    let r1=await additionAsync(1,2);
    let r2=await additionAsync(r1,3);
    let r3=await additionAsync(r2,4);
    console.log("resultat asyncawait "+r3);
})();


// commencer plusieurs opérations en même temps
(async function(){
    // Je commence deux additions en même temmps
    // Le résultat est un tableau des résultats des promesses
    // j'utilise destructuring pour obtenir les résultats dans des variables séparées
    let [r1,r2]=await Promise.all([additionAsync(1,2),additionAsync(3,4)]); // [3,7]
    let r3=await additionAsync(r1,r2);
  
    let r1et2=await Promise.all([additionAsync(1,2),additionAsync(3,4)]); // [3,7]
    // r1et2 contient un tableau
    // spread => étaler les valeurs du tableau comme des paramètre
    r3=await additionAsync(...r1et2); // additionAsync(1,2);


})();