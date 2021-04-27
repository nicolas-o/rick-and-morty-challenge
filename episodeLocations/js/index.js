import { charactersToTable } from "./charactersToTable.js";
import { listOfEpisodesToMenu } from "./listOfEpisodesToMenu.js";

// Aquí se ejecutan las funciones y se toma el tiempo en que tardaron en ejecutarse.
console.time("episodeLocations Timer");
charactersToTable();
listOfEpisodesToMenu();
console.timeEnd("episodeLocations Timer");

//Aquí se ejecuta charactersToTable y se pasa el valor del episodio seleccionado para que se muestre en la pantalla.
// Selecciona el menú con el id episodes.
let episode = document.getElementById("episodes");

episode.addEventListener(
  "change",
  () => {
    charactersToTable(episode.value);
  },
  false
);
