import loadsApiInfo from "../../utils/loadsApiInfo.js";

//Esta función carga toda la información de las páginas en de la API.
//source es el recurso a donde se ingresa para obtener la información. "episode" para los episodios, "character" para los personajes y "location" para los lugares.
export async function loadsDataFromPages(source) {
  //En requests se almacenan todas las solicitudes HTTP realizadas a la API.
  let requests = [];

  //En info se encuentra la información de las páginas(pages) y cantidad de objetos(count).
  let info = await loadsApiInfo(source);

  //En pages está el número de páginas por el cual el for loop iterará para obtener los datos de la API.
  let pages = info[0];

  //Este loop se encarga de obtener los datos de todas las páginas de la API y lo almacena en requests.
  try {
    for (let i = 1; i <= pages; i++) {
      requests.push(
        fetch(`https://rickandmortyapi.com/api/${source}/?page=${i}`)
      );
    }
  } catch (err) {
    console.error(`Ha ocurrido un error ${err}`);
  }
  //En responses se itera sobre los HTTP requests, los resuelve y retorna una sola array con toda la información.
  const responses = await Promise.all(requests);

  //En data ya se puede acceder a la información.
  const data = await Promise.all(responses.map((res) => res.json()));

  return data;
}
