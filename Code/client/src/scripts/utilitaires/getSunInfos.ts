import type { IGetSunInfosResultDTO } from "../dto/IGetSunInfosResult.dto.js";
import * as SunCalc from "../utilitaires/suncalc/index.js";
// Cette fonction fait office se "Service"
// elle va être utilisée partout dans mon code
// et permet à mon code de ne pas connaitre la méthode utilisée pour obtenir les donnée
export async function GetSunInfosAsync(date:Date,latitude:number,longitude:number): Promise<{sunrise:Date|null, sunset?:Date|null}>{
    // retour objet {sunrise:Date, sunset:Date}
    // let resultatSuncalc=SunCalc.getTimes(date,latitude,longitude);
    // return Promise.resolve({sunset:resultatSuncalc.sunset,sunrise:resultatSuncalc.sunrise});
    let url=`/suninfos/${ date}/${latitude}/${longitude}`;
    // Envoi de la requète au server
    let responseServer=await fetch(url);
    // désérialisation du json
    let obj=await responseServer.json() as IGetSunInfosResultDTO;
    // la sérialisation json sur le server transforme les dates en chaine
    // IGetSunInfosResult me donne les types exacts recus (nom propriétés et types transformés)
    // je crée un objet du bon type et je le retourne
    return { sunrise: new Date(obj.sr), sunset:new Date(obj.ss)};
}

// var infos=await GetSunInfos(...)