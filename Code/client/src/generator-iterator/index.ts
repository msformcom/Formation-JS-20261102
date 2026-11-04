// Suite de fibo 1,1,2,3,5,8,
// Puis-je avoir un objet contenant toute la suite ?

// fonction classique => renvoit un ensemble d'élément d'un coup
function f123(){
    return [1,2,3];
}

// Générateur
function *g123(){
    yield 1;
    yield 2;
    yield 3;
}

function *fibo(){
    let i1=0;
    let i2=1;
    yield i2;
    while(true){
        [i1,i2]=[i2,i1+i2];
        yield i2;
    }
}

let resultat=fibo(); // dans résultat => rien resultat est un iterator
for(let e of resultat){
    console.log(e);
    if(e>1000){
        break;
    }
}

