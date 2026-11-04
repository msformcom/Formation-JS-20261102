import {describe} from "node:test";

// Description des tests
describe("Tests sur prototye",function(){
    // Une des fonctions de test
    it("prototype",()=>{
        // Créer une class
        // ancien code => function
        function Vehicule(){
            this.nom="Vehicule";
        }

        function Voiture(){
            this.marque="Peugeot"
            this.estDemarree=false;

            this.demarrer=function(){
                this.estDemarree=true;
            }
        }
        // En donnant une propriété nbRoues au prototype de Voiture 
        // équivalent de static
        Voiture.prototype=new Vehicule();
        Voiture.prototype.nom="Voiture";
 


        // Syntaxe ES
        class Camion{
            constructor(){
                this.marque="Peugeot";
            }
            marque;
            estDemarree=false;
            demarrer(){
                this.estDemarree=true;
            }
        }
        // Prototype
        // Utilise un constructeur (class ou fonction)
        // l'objet crée possède une propriété constructor => class /fonction
        // lorsque on accede à une propriété de l'objet crée =>
        // 1) est-ce que cet objet possede la propriété => valeur de cette propriété
        // 2) sinon, on regarde dans le prototype=> Function / class utilisée pour construire

        let v=new Voiture();
        // v.nom?
        // 2 propriétés affectées à l'objet par le constructeur => marque et estDemarree
        // OwnProperty => propriétés propres à l'objet

        let e=v.estDemarree; //lecture de estDemarree de v

        e=v.toto; // v ? .toto ? non => chercher sur Voiture // e=> undefined

        Voiture.prototype.toto="a";
        e=v.toto; // v n'a pas de valeur propre pour toto => valeur du prototype
        v.toto="b"; // Ajoute à v une valeur pour toto différente du prototype
        e=v.toto; // pour v seulement, toto vaut b

        // En ajoutant une méthode au prototype, on ajoute la méthode
        // à toutes les instances 
        Object.prototype.getInfos=function(){
            return "toto";
        }

        new Error().getInfos();
        
    });
})