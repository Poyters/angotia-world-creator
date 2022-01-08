import { markSquare } from "./markSquare";

describe("markSquare script", () => {
  it("markSquare is function", () => {
    expect(typeof markSquare).toEqual("function");
  });

  it("markSquare catch empty matrix error", () => {
    expect(markSquare).toThrow(Error);
  });
});
