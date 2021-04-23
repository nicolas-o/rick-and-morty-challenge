//Esta función obtiene datos de la API "rickandmortyapi.com".
//source es la fuente de donde se saca la información.
async function getData(source) {
  //Los datos están paginados por lo que con el loop "do while" se aumenta el valor de page para obtener la información de todas las páginas.
  let page = 1;
  //En results se almacenará la propiedad info que contiene la propiedad next que se utiliza para pasar a la siguiente página para que con un loop obtener todos los datos y detenerlo cuando no se encuentre ningúna página.
  let results = [];
  // En items se almacenarán todos los resultados obtenidos.
  let items = [];

  //Este loop se encarga de obtener los datos de todas las páginas de la API.
  do {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/${source}/?page=${page}`
      );
      const data = await response.json();
      results = data.info;
      data.results.forEach((item) => {
        items.push(item);
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

  return Promise.resolve(items);
}

module.exports = getData;
