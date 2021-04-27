//En esta función se obtiene el número de paginas que tiene cada recurso.
async function loadsApiInfo(source) {
  let info = [];
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/${source}`);
    let data = await response.json();
    info = data.info;
  } catch (err) {
    console.error(`Ha ocurrido un error ${err}`);
  }
  return info;
}
