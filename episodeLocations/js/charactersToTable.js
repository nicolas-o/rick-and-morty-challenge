// Esta función obtiene los datos de "episode" y muestra en la pantalla una tabla con la imagen, nombre y location(origen) de los personajes.
async function charactersToTable(episode = "1") {
  //La información de la base de datos.
  let characters = await getCharactersData(episode);

  //Elimina duplicados en characters.
  const map = {};
  const charactersWithNoDuplicates = [];
  characters.forEach((el) => {
    if (!map[JSON.stringify(el)]) {
      map[JSON.stringify(el)] = true;
      charactersWithNoDuplicates.push(el);
    }
  });

  //El div que sirve de contenedor con el id characterCounterContainer.
  let characterCounterContainer = document.getElementById(
    "characterCounterContainer"
  );

  // Se añade texto al contenedor con la cantidad de personajes que este tiene.
  characterCounterContainer.innerHTML = `<h3>Este Episodio tiene ${characters.length} personajes</h3>
    `;

  //En characterTableHtml se añadirán los personajes.
  let characterTableHtml;

  //Aquí se añaden los headings de la tabla. Los estoy creando aquí para que no se sobreescriba sobre ellos.
  characterTableHtml = "<tr>";
  characterTableHtml += "<th>Personaje</th>";
  characterTableHtml += "<th>Nombre</th>";
  characterTableHtml += "<th>Location</th>";
  characterTableHtml += "</tr>";

  //Se mapea sobre los personajes y se muestra en la pantalla su imagen, nombre y location.
  charactersWithNoDuplicates.map((character) => {
    //Añade la imagen del personaje. Decidí poner la imagen porque hay muchos personajes con el mismo nombre y se podría pensar que son el mismo.
    characterTableHtml += "<tr>";
    characterTableHtml += `<td><img src=${character.image} alt=${character.name}/></td>`;
    //Añade el nombre del personaje.
    characterTableHtml += `<td>${character.name}</td>`;
    //Añade Location(el origen) del personaje.
    characterTableHtml += `<td>${character.location.name}</td>`;
    characterTableHtml += "</tr>";
  });

  //La tabla donde se mostrarán los personajes
  let characterTable = document.getElementById("characterTable");

  //Se añaden los personajes de cada episodio al HTML.
  characterTable.innerHTML = characterTableHtml;
}
