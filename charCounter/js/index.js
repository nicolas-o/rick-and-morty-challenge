async function test1(funct) {
  let episodesCounter = await funct;
  let character = episodesCounter[0];
  let characterCounter = episodesCounter[1];
  let source = episodesCounter[2];

  // Selecciona la sección con la clase .charCounter.
  let charCounterContainer = document.querySelector(".charCounter");

  // Añade al HTML el nombre del caracter y cuantas veces aparece.
  charCounterContainer.innerHTML += `<h3>La letra "${character}" aparece ${characterCounter} veces en los nombres de ${source.toUpperCase()} </h3>`;
}

console.time("charCounter Timer");
test1(charCounter("episode", "e"));
test1(charCounter("location", "i"));
test1(charCounter("character", "c"));
console.timeEnd("charCounter Timer");
