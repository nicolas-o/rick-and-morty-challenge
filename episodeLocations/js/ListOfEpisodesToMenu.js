import loadsApiInfo from "../../utils/loadsApiInfo.js";

// Esta función obtiene los episodies de la función getData y los añade al menú de selección con el id episodes.
export async function listOfEpisodesToMenu() {
  let episodes = await loadsApiInfo("episode");
  let numberOfEpisodes = episodes[1];
  let episodesContainer = document.getElementById("episodes");
  for (let i = 1; i <= numberOfEpisodes; i++) {
    episodesContainer.innerHTML += `<option value=${i}>${i}</option>`;
  }
}
