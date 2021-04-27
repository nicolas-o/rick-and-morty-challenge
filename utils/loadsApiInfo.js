//En esta función se obtiene el número de paginas que tiene cada recurso.
export async function loadsApiInfo(source) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/${source}`);
    const data = await response.json();

    //Contiene la cantidad de páginas.
    const pages = data.info.pages;

    //Contiene la cantidad de objetos.
    const count = data.info.count;
    return [pages, count];
  } catch (err) {
    return null;
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined")
  module.exports = loadsApiInfo;
