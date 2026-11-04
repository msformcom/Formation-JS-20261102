import { getLocationAsync } from "../scripts/utilitaires/getLocationAsync.js";
import { GetSunInfosAsync } from "../scripts/utilitaires/getSunInfos.js";
import { integrateObjectInElement, integratePromiseInElement } from "../scripts/utilitaires/integrateObjectInElement.js";
import * as SunCalc from "../scripts/utilitaires/suncalc/index.js";
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#btn_geolocaliser")!.addEventListener("click", async (e) => {
        document.querySelector("#resultats")!.innerHTML = "Position en cours d'évaluation";
        try {
            let coord = await getLocationAsync();
            document.querySelector("#resultats")!.innerHTML = `latitude : ${coord.latitude}, longitude : ${coord.longitude}`;
            //let data: SunCalc.SunTimes=SunCalc.getTimes(new Date(),coord.latitude,coord.longitude);
            //integrateObjectInElement(data,,document.querySelector("#resultats_sun"))
            // Afficher les données dans l'interface
            integratePromiseInElement(GetSunInfosAsync(new Date(),coord.latitude,coord.longitude),document.querySelector("#resultats_sun")!);
        } catch (error) {
             document.querySelector("#resultats")!.innerHTML = "Erreur dans l'évaluation";
        }


    });
});
