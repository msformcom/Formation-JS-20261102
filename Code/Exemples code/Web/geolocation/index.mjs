import { getLocationAsync } from "../scripts/utilitaires/getLocationAsync.js";
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#btn_geolocaliser").addEventListener("click", async (e) => {
        document.querySelector("#resultats").innerHTML = "Position en cours d'évaluation";
        try {
            let coord = await getLocationAsync();
            document.querySelector("#resultats").innerHTML = `latitude : ${coord.latitude}, longitude : ${coord.longitude}`;
        } catch (error) {
             document.querySelector("#resultats").innerHTML = "Erreur dans l'évaluation";
        }


    });
});
