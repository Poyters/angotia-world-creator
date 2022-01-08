import { saveFile } from "./saveFile";

describe("saveFile script", () => {
  it("Should be function", () => {
    expect(typeof saveFile).toBe("function");
  });

  it("saveFile work without crashes", () => {
    const globalAny: any = global;
    globalAny.URL.createObjectURL = jest.fn();
    saveFile(JSON.stringify({ fake: [] }), "name.json", "text/json");
  });
});
