import { charCounter } from "./charCounter.js";

//Esta función recibe como parametro la función charCounter(source, character) para poder escribirlos en el DOM.
async function writeInDOM(params) {
  //Un array con la letra, número de veces en que aparece y el recurso de donde se obtiene.
  const t0 = performance.now(); //Performance.now() sirve para calcular el tiempo de ejecución.
  let CountCharacters = await params;
  const t1 = performance.now();
  const timer = Math.round(t1 - t0);

  //La letra
  let character = CountCharacters[0];
  //Número de veces en que aparece
  let Counter = CountCharacters[1];
  //El recurso de donde se obtiene la información.
  let source = CountCharacters[2];

  // Selecciona la sección con la clase .charCounter.
  let charCounterContainer = document.querySelector(".charCounter");

  // Añade al HTML el nombre del caracter y cuantas veces aparece.
  charCounterContainer.innerHTML += `<h3>La letra "${character}" aparece ${Counter} veces en los nombres de ${source.toUpperCase()} (tiempo de ejecución: ${timer} ms).</h3>`;
}

writeInDOM(charCounter("episode", "e"));
writeInDOM(charCounter("location", "i"));
writeInDOM(charCounter("character", "c"));
