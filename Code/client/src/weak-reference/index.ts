
// Référence forte
let error=new Error();

// reference faible
let error2=new WeakRef(new Error("Toto"));

// Pour avoir l'objet référencé par error je dois utiliser deref()
let erreurSansLaVariable=error2.deref();
// si il est encore dans la mémoire
if(erreurSansLaVariable){
    console.log(erreurSansLaVariable.message);
}


var tab=new WeakSet();

(function(){
    var e=new WeakRef(new Error());
    tab.add(e);
})();


// e créé dans la fonction sera retiré de la mémoire quand le garbage collector viendra nettoyer
