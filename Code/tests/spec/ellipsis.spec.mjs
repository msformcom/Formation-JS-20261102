// exécution du code de ellipsis.mjs
import "../../Exemples code/ellipsis.mjs";
import {describe}  from "node:test";

describe("Ajout elipsis",()=>{
    // tester l'existence de la méthode ellipsis
    it("reduire la chaine",()=>{
        let s="Une chaine longue";

        let sModifiee=s.ellipsis(10);

        expect(sModifiee).toBe("Une cha...");

    });
});