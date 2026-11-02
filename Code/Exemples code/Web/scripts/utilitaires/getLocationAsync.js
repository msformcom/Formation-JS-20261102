// stop lintelligence artificielle
/**
 * Permet d'obtenir la position de l'utilisateur
 * @returns Promise<{latitude:number, longitude:number}>
 */
export function getLocationAsync() {
   //renvoyer une promesse
   return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((coords)=>{
            // callback de la fonction getCurrentPosition
            let infos={latitude : coords.coords.latitude,longitude:coords.coords.longitude};
            resolve(infos);
        },(err)=>{
            reject(new Error("La position n'a pas pu être déterminée"))
        });
   });
}