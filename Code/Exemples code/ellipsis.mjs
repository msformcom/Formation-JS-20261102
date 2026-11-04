// je veux pouvoir faire 
// let s="Ceci est un texte à représenter dans une interface très petite";
// document.getElementById("zone_texte").innerHTML=s.ellipsis(10)
// s.ellipsis(10) => "Ceci es..."" (class String)

// let s="jsqhkdjqhksj" <=> let s=new String()
// javascript sans type ?
// variables sans types , mais valeurs ont un type

// Ajout de fonction à une chaine
// en ts 
// declare interface String{
//      ellipsis(maxLength:number):string
// }
// function(){} => this vaut le context de l'exécution
// ()=>{} => this vaut le contexte de déclaration de la fonction
String.prototype.ellipsis=(maxLength)=>{
    if(this.length<=maxLength){
        return this;
    }
    // je retourne une chaine de la longueur demandée
    return this.substring(0,maxLength-3)+"...";
}