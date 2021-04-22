// Esta función obtiene los episodies de la función getData y los añade al menú de selección con el id episodes.
async function listOfEpisodesToMenu() {
  let episodes = await getData("episode");
  let episodesContainer = document.getElementById("episodes");

  episodes.map((item) => {
    episodesContainer.innerHTML += `<option value=${item.id - 1}>${
      item.id
    }</option>`;
  });
}
