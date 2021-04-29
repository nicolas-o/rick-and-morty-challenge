import { loadsDataFromPages } from "./loadsDataFromPages.js";

//Esta función obtiene datos de la API "rickandmortyapi.com" y cuenta cuantas veces se repite un caracter en la propiedad "name".
//Los parametros: source; La fuente de donde se saca la información, y char; El caracter que se ingresa para hacer el conteo.
export async function charCounter(source, char) {
  //En totalcharCounter se lleva el conteo de las veces en que un caracter aparece.
  let totalcharCounter = 0;

  //En data ya se puede acceder a la información.
  const data = await loadsDataFromPages(source);

  //Se itera sobre todos los resultados de los objetos que hay en data y cuenta las veces en que una letra se repite y añade el conteo a totalCharCounter.
  try {
    data.map((object) => {
      let results = object.results;
      results.map((item) => {
        //Pasa todos los nombres en la propiedad "name" a minúsculas.
        let name = item.name.toLowerCase();
        //Regular Expression, char es el caracter a buscar y "g", es para no detenerse en la primera coincidencia y seguir buscando.
        let regex = new RegExp(char, "g");
        //Cuenta cuantas veces hay un una coincidencia con el caracter ingresado.
        let charInWordCounter = (name.match(regex) || []).length;
        //Añade la suma total de las coincidencias encontradas en una palabra.
        totalcharCounter += charInWordCounter;
      });
    });
  } catch (err) {
    console.error(`Ha ocurrido un error ${err}`);
  }
  return Promise.resolve([char, totalcharCounter, source]);
}
