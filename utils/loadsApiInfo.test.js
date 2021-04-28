//regenerator-runtime es el soporte runtime para funciones async compiladas/transpiladas.
import "regenerator-runtime/runtime";

//Carga la función a testear.
const loadsApiInfo = require("./loadsApiInfo.js");

//Dejo esta variable en caso de querer testear sin usar el mock.
// global.fetch = require("node-fetch");

//Mock para testear la función.
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ info: { pages: 10, count: 10 } }),
  })
);

//Resetea toda la información almacenada para no confundirla en otros tests.
beforeEach(() => {
  fetch.mockClear();
});

//Test de la función loadsApiInfo.
describe("loadsApiInfo", () => {
  test("Resolves", async () => {
    const result = await loadsApiInfo("episode");

    expect(result).toEqual([10, 10]);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  //Test en caso de fallar.
  test("Handles exception with null", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API failure"));
    const result = await loadsApiInfo("episode");

    expect(result).toEqual(null);
    expect(fetch).toHaveBeenCalledWith(
      "https://rickandmortyapi.com/api/episode"
    );
  });
});
