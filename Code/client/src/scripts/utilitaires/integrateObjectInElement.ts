export function integrateObjectInElement(o:any, e:Element){
    // intégrer un objet dans un élément
    // pour chaque propriété de l'objet => for(let propertyName in o)
    // sunrise => chercher tous les elements dans e avec un attribut data-innerHTML="sunrise"
    // mettre dans le innerHTML des elements la valeur de la propriété
    for(let propertyName in o){
        let selectorCss=`[data-innerHTML='${propertyName}']`;
        let listeElements=e.querySelectorAll(selectorCss);
        listeElements.forEach(e=>{
            e.innerHTML=o[propertyName];
        });
    }
}

export async function integratePromiseInElement(p:Promise<any>,e:Element){
    // Mettre ... dans tous les éléments qui seront remplis
    e.querySelectorAll("[data-innerHTML]").forEach(e=>e.innerHTML="...");
    // j'attends l'objet promis
    try {
          let o=await p;
          integrateObjectInElement(o,e);

    } catch (error) {
        e.querySelectorAll("[data-innerHTML]").forEach(e=>e.innerHTML="XXX");
    }
  
}