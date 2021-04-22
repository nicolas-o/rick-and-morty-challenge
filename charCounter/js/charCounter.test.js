const charCounter = require("./charCounter");

test("Properly works", () => {
  expect(charCounter("episode", "e")).toEqual(71);
});
