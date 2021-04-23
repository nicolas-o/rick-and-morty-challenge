async function writeInDOM(params) {
  let CountCharacters = await params;
  let character = CountCharacters[0];
  let Counter = CountCharacters[1];
  let source = CountCharacters[2];

  // Selecciona la sección con la clase .charCounter.
  let charCounterContainer = document.querySelector(".charCounter");

  // Añade al HTML el nombre del caracter y cuantas veces aparece.
  charCounterContainer.innerHTML += `<h3>La letra "${character}" aparece ${Counter} veces en los nombres de ${source.toUpperCase()} </h3>`;
}

console.time("charCounter Timer");
writeInDOM(charCounter("episode", "e"));
writeInDOM(charCounter("location", "i"));
writeInDOM(charCounter("character", "c"));
console.timeEnd("charCounter Timer");
