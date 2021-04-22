// Esta función obtiene los datos de "character" y "episode" y muestra en la pantalla una tabla con la imagen, nombre y location(origen).
async function episodesToTable(page = "0") {
  //La información de la base de datos.
  let characters = await getData("character");
  let episodes = await getData("episode");

  //El div que sirve de contenedor con el id characterCounterContainer.
  let characterCounterContainer = document.getElementById(
    "characterCounterContainer"
  );

  // Se añade texto al contenedor con la cantidad de personajes que este tiene.
  characterCounterContainer.innerHTML = `<h3>Este Episodio tiene ${episodes[page].characters.length} personajes</h3>
  `;

  //Aquí se añaden los headings de la tabla. Los estoy creando aquí para que no se sobreescriba sobre ellos.

  //En characterTableHtml se añadirán los personajes.
  let characterTableHtml;
  characterTableHtml = "<tr>";
  characterTableHtml += "<th>Personaje</th>";
  characterTableHtml += "<th>Nombre</th>";
  characterTableHtml += "<th>Location</th>";
  characterTableHtml += "</tr>";

  //Se mapea sobre los personajes y si su url coincide con la que están en los episodios se añaden respectivamente.
  // character.url en characters y episodes[].characters son las propiedades que tienen valores que coinciden.
  characters.map((character) => {
    //Si character.url de un personaje se encuentra en episodes.characters de un episodio este se añade a characterTableHtml para luego ser enviado al HTML.
    if (episodes[page].characters.includes(character.url)) {
      characterTableHtml += "<tr>";
      //Añade la imagen del personaje. Decidí poner la imagen porque hay muchos personajes con el mismo nombre y se podría pensar que son el mismo.
      characterTableHtml += `<td><img src=${character.image} alt=${character.name}/></td>`;
      //Añade el nombre del personaje.
      characterTableHtml += `<td>${character.name}</td>`;
      //Añade Location(el origen) de un personaje.
      characterTableHtml += `<td>${character.location.name}</td>`;
      characterTableHtml += "</tr>";
    }
  });

  //La tabla donde se mostrarán los personajes
  let characterTable = document.getElementById("characterTable");

  //Se añaden los personajes de cada episodio al HTML.
  characterTable.innerHTML = characterTableHtml;
}
