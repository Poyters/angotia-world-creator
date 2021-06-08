import { isEmptyObject } from "./isEmptyObject";

describe("isEmptyObject test suite", () => {
  test("isEmptyObject is a function", () => {
    expect(typeof isEmptyObject).toEqual("function");
  });

  test("is empty 1", () => {
    expect(isEmptyObject({})).toBe(true);
  });

  test("is empty 2", () => {
    expect(
      isEmptyObject({
        x: []
      })
    ).toBe(false);
  });

  test("is empty 3", () => {
    expect(isEmptyObject([])).toBe(false);
  });

  test("is empty 4", () => {
    expect(isEmptyObject("")).toBe(false);
  });
});
