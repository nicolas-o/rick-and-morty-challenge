// Esta función obtiene los episodies de la función getData y los añade al menú de selección con el id episodes.
async function listOfEpisodesToMenu() {
  let episodes = await loadsApiInfo("episode");
  let numberOfEpisodes = episodes.count;
  let episodesContainer = document.getElementById("episodes");
  for (let i = 1; i <= numberOfEpisodes; i++) {
    episodesContainer.innerHTML += `<option value=${i}>${i}</option>`;
  }
}
