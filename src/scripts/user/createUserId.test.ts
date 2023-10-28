import { createUserId } from "./createUserId";

describe("createUserId script", () => {
  it("is a function", () => {
    expect(typeof createUserId).toBe("function");
  });

  it("createUserId 1", () => {
    expect(createUserId().length).toBe(24);
  });

  it("createUserId 2", () => {
    expect(createUserId().split("")[13]).toBe("_");
  });
});
