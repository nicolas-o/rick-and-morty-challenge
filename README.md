# Rick and Morty Challenge

Esta app obtiene datos de la API de https://rickandmortyapi.com/.  
Está dividia en dos partes: Char Counter y Episode Locations.  
Char Counter muestra cuantas veces existe una letra en los nombres de todos los`character`, `locations` y `episodes`.  
Episode Locations tiene un menú para seleccionar los episodios de la serie, cuando seleccionamos uno, muestra cuantos personajes hay y los despliega en una tabla con su imagen, nombre y Location(origen).

**_Notas: El tiempo de ejecución se muestra en la consola._**

**Demo:** https://rick-and-morty-challenge.netlify.app/

### Instalación

- Clone, Fork o descarga este repositorio.
- Abre la carpeta raíz del proyecto en el terminal y ejecuta `npm install` para instalar las dependencias.
- Abre `index.html` con Open Live Server.

## Construido con

- HTML
- CSS
- Javascript
- Google Fonts

## Testeado con

- Jest

## Proceso

### Objetivo del ejercicio

El objetivo principal es consultar todos los `character`, `locations` y `episodes` de [https://rickandmortyapi.com/](https://rickandmortyapi.com/) e indicar:

1. Char counter:
   - cuántas veces aparece la letra **"l"** (case insensitive) en los nombres de todos los `location`
   - cuántas veces aparece la letra **"e"** (case insensitive) en los nombres de todos los `episode`
   - cuántas veces aparece la letra **"c"** (case insensitive) en los nombres de todos los `character`
   - cuánto tardó el programa en total (desde inicio ejecución hasta entrega de resultados)
2. Episode locations:
   - para cada `episode`, indicar la cantidad y un listado con las `location` (`origin`) de todos los `character` que aparecieron en ese `episode` (sin repetir)
   - cuánto tardó el programa en total (desde inicio ejecución hasta entrega de resultados)

## Autores ✒️

- **Nicolás Orellana** https://github.com/nicolas-o

---

**Muchas gracias por darme la oportunidad de participar en este proyecto.**
