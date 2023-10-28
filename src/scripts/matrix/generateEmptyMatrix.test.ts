import { generateEmptyMatrix } from "./generateEmptyMatrix";
import { isEmptyMatrix } from "../validators/isEmptyMatrix";
import { mapState } from "../../store/states/mapState";

describe("generateEmptyMatrix script", () => {
  const newEmptyMatrix = generateEmptyMatrix();

  it("is a function", () => {
    expect(typeof generateEmptyMatrix).toEqual("function");
  });

  it("Check generate empty matrix", () => {
    expect(isEmptyMatrix(newEmptyMatrix)).toBe(true);
    expect(newEmptyMatrix.length).toEqual(mapState.size.y);
    expect(newEmptyMatrix[0].length).toEqual(mapState.size.x);
  });

  it("Check if contains empty fields", () => {
    let containValues = false;

    newEmptyMatrix.flat(3).forEach(square => {
      if (square !== 0) {
        containValues = true;
        return;
      }
    });

    expect(containValues).toBe(false);
  });

  it("generateEmptyMatrix 1", () => {
    const new1 = generateEmptyMatrix({ x: 1, y: 3 });
    expect(isEmptyMatrix(new1)).toBe(true);
    expect(new1.length).toEqual(3);
    expect(new1[0].length).toEqual(1);
  });

  it("generateEmptyMatrix 2", () => {
    const new1 = generateEmptyMatrix({ x: 3, y: 6 });
    expect(isEmptyMatrix(new1)).toBe(true);
    expect(new1.length).toEqual(6);
    expect(new1[0].length).toEqual(3);
  });

  it("generateEmptyMatrix 3", () => {
    const new1 = generateEmptyMatrix({ x: 100, y: 3 });
    expect(isEmptyMatrix(new1)).toBe(true);
    expect(new1.length).toEqual(3);
    expect(new1[0].length).toEqual(100);
  });

  it("generateEmptyMatrix 4", () => {
    const new1 = generateEmptyMatrix({ x: 30, y: 12 });
    expect(isEmptyMatrix(new1)).toBe(true);
    expect(new1.length).toEqual(12);
    expect(new1[0].length).toEqual(30);
  });
});
