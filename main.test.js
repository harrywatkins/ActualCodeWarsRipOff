const isEvenOrOdd = require("./main.js");

test("should be true when given num = 2", () => {
  let result = isEvenOrOdd(2);
  let expected = "even";

  expect(result).toBe(expected);
});
test("should be true when given num = 2222", () => {
  let result = isEvenOrOdd(2222);
  let expected = "even";

  expect(result).toBe(expected);
});
test("should be false when given num = 15", () => {
  let result = isEvenOrOdd(15);
  let expected = "odd";

  expect(result).toBe(expected);
});
test("should be false when given num = 1555", () => {
  let result = isEvenOrOdd(1555);
  let expected = "odd";

  expect(result).toBe(expected);
});
