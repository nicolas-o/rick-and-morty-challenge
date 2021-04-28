import { charCounter } from "./charCounter.js";

//Esta función recibe como parametro la función charCounter(source, character) para poder escribirlos en el DOM.
async function writeInDOM(params) {
  //Un array con la letra, número de veces en que aparece y el recurso de donde se obtiene.
  let CountCharacters = await params;
  //La letra
  let character = CountCharacters[0];
  //Número de veces en que aparece
  let Counter = CountCharacters[1];
  //El recurso de donde se obtiene la información.
  let source = CountCharacters[2];

  // Selecciona la sección con la clase .charCounter.
  let charCounterContainer = document.querySelector(".charCounter");

  // Añade al HTML el nombre del caracter y cuantas veces aparece.
  charCounterContainer.innerHTML += `<h3>La letra "${character}" aparece ${Counter} veces en los nombres de ${source.toUpperCase()} </h3>`;
}

console.time('charCounter: letra "e" en episode');
writeInDOM(charCounter("episode", "e"));
console.timeEnd('charCounter: letra "e" en episode');
console.time('charCounter: letra "i" en location');
writeInDOM(charCounter("location", "i"));
console.timeEnd('charCounter: letra "i" en location');
console.time('charCounter: letra "c" en character');
writeInDOM(charCounter("character", "c"));
console.timeEnd('charCounter: letra "c" en character');
