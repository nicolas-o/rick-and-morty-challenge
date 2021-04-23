//Esta función obtiene datos de la API "rickandmortyapi.com" y cuenta cuantas veces se repite un caracter en la propiedad "name".
//Los parametros: source; La fuente de donde se saca la información, y char; El caracter que se ingresa para hacer el conteo.
async function charCounter(source, char) {
  //Los datos están paginados por lo que con el loop "do while" se aumenta el valor de page para obtener la información de todas las páginas.
  let page = 1;
  //En results se almacenará la propiedad info que contiene la propiedad next que se utiliza para pasar a la siguiente página para que con un loop obtener todos los datos y detenerlo cuando no se encuentre ningúna página.
  let results = [];
  //En totalcharCounter se lleva el conteo de las veces en que un caracter aparece.
  let totalcharCounter = 0;

  //Este loop se encarga de obtener los datos de todas las páginas de la API y almacenar en totalcharCounter el conteo de las veces en que el caracter ingresado aparece en la propiedad "name".
  do {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/${source}/?page=${page}`
      );
      const data = await response.json();
      results = data.info;
      data.results.map((item) => {
        //Pasa todos los nombres en la propiedad "name" a minúsculas.
        let name = item.name.toLowerCase();
        //Regular Expression, char es el caracter a buscar y "g", es para no detenerse en la primera coincidencia y seguir buscando.
        let regex = new RegExp(char, "g");
        //Cuenta cuantas veces hay un una coincidencia con el caracter ingresado.
        let charInWordCounter = (name.match(regex) || []).length;
        //Añade la suma total de las coincidencias encontradas en una palabra.
        totalcharCounter += charInWordCounter;
      });
      //Page++ es para pasar a la siguiente página cuando se termina de mapear la página anterior.
      page++;
    } catch (err) {
      console.error(`Ha ocurrido un error ${err}`);
    }
  } while (
    // Cuando no encuentra una página siguiente, se detiene.
    results.next !== null
  );

  return Promise.resolve([char, totalcharCounter, source]);
}

module.exports = charCounter;
