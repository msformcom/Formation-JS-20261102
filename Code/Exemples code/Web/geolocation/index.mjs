import { getLocationAsync } from "../scripts/utilitaires/getLocationAsync.js";
import * as SunCalc from "../node_modules/suncalc/index.js";
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#btn_geolocaliser").addEventListener("click", async (e) => {
        document.querySelector("#resultats").innerHTML = "Position en cours d'évaluation";
        try {
            let coord = await getLocationAsync();
            document.querySelector("#resultats").innerHTML = `latitude : ${coord.latitude}, longitude : ${coord.longitude}`;
            let data=SunCalc.getTimes(new Date(),coord.latitude,coord.longitude);
            // Afficher les données dans l'interface
            let elements=document.querySelectorAll("#resultats_sun [data-value]")
            elements.forEach(e=>{
                // lecture de la valeur de l'attribut
                let dv=e.getAttribute("data-value");
                // data.sunset <=> data["sunset"]
                let v=data[dv]; // j'obtiens la valeur de la propriété correspondant à l'attribut data-value
                e.innerHTML=v;
            });
        } catch (error) {
             document.querySelector("#resultats").innerHTML = "Erreur dans l'évaluation";
        }


    });
});
