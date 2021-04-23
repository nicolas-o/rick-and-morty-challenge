const expect = require("chai").expect;
const charCounter = require("../charCounter/js/charCounter");
global.fetch = require("node-fetch");

describe("charCounter", () => {
  it("La letra e aparece 71 veces en los nombres de episode", async () => {
    const result = await charCounter("episode", "e");
    expect(result).deep.to.equal(["e", 71, "episode"]);
  });
  it("La letra i aparece 115 veces en los nombres de location", async () => {
    const result = await charCounter("location", "i");
    expect(result).deep.to.equal(["i", 115, "location"]);
  });
  it("La letra c aparece 394 veces en los nombres de character", async () => {
    const result = await charCounter("character", "c");
    expect(result).deep.to.equal(["c", 394, "character"]);
  });
});
