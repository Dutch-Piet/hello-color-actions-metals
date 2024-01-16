const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from the the Great White North! This is Dutch Piet from Toronto Canada on 2024-01-15");
  });
});
