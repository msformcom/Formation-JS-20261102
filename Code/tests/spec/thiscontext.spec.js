describe("thiscontext", () => {
    it("this", () => {
        class A {
            valeur = "toto";
            f = () => {
                // fonction fléchée => this sera l'objet de type A crée
                return this.valeur;
            }
            g = function () {
                // fonction  => this sera l'objet this du contexte d'exécution
                return this.valeur;
            }
        }

        let a = new A();

        // a.f est exécuté par setTimeout => on est dans un contexte autre que a
        setTimeout(a.f, 0);


        let f = (n, p, m) => {
            return this;
        }

        f.call("toto", 5); // exécute la fonction avec un this = "toto";

        let g = f.bind("toto", 2, 1);
        g(4);

        function addition() {
            let args = arguments;
            let s = 0;
            for (let e in args) {
                let v=e;
            }
            for (let e of args) {
                s += e;
            }
            return s;
        }
        addition(1, 2, 3);

        // ES spread
        function multiplication(a,b,...tabArgs){
            // a, b et un tableau tabArgs avec tout le reste
        }
    });
})