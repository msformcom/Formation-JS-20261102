function additionAsync(a: number, b: number): Promise<number> {

    // le thread js arriove ici
    return new Promise((resolve, reject) => {

        let w = new Worker("./addition-worker.js");
        w.postMessage({ a, b });
        w.addEventListener("message", (e) => {
            var message = e.data;
            resolve(message.resultat);
        })
    });
}

(async function () {
    // Le thread de js va exécuter cette fonction
    additionAsync(100000000, 10000000).then(r => {
        console.log(r);
    });
    // Au bout de combien de temps ici
    console.log("Suite du code");

})()