const expect = require("chai").expect;
const getData = require("../episodeLocations/js/getData");

//Testea si getData() retorna la misma cantidad de objetos solicitados.
describe("getData", () => {
  it("Tiene la misma cantidad de objetos", async () => {
    const result = await getData("episode");
    expect(result.length).deep.to.equal(41);
  });
  it("Tiene la misma cantidad de objetos", async () => {
    const result = await getData("character");
    expect(result.length).deep.to.equal(671);
  });
});
