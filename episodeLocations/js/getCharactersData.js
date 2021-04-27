//Esta función obtiene todos los personajes de cada capítulo.
async function getCharactersData(episode) {
  //get se utiliza dos veces por eso esta como una funición.
  const get = (url) => fetch(url).then((response) => response.json());

  //Los url de los personajes se almacenan en charactersUrls.
  const { characters: charactersUrls } = await get(
    `https://rickandmortyapi.com/api/episode/${episode}`
  );

  //e accede a las url de los personajes para obtener sus datos.
  const characterPromises = charactersUrls.map((characterUrl) =>
    get(characterUrl)
  );

  //La información con todos los datos de los personajes
  const charactersInformation = await Promise.all(characterPromises);

  return charactersInformation;
}
