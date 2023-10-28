import { camelCaseToUnderscore } from "./camelCaseToUnderscore";

describe("camelCaseToUnderscore script", () => {
  it("is a function", () => {
    expect(typeof camelCaseToUnderscore).toBe("function");
  });

  it("check transformation; 1", () => {
    expect(
      camelCaseToUnderscore({
        idTetra: "fawfaw"
      })
    ).toEqual({ id_tetra: "fawfaw" });
  });

  it("check transformation; 2", () => {
    expect(
      camelCaseToUnderscore({
        _id: "fawfaw"
      })
    ).toEqual({ _id: "fawfaw" });
  });

  it("check transformation; 3", () => {
    expect(
      camelCaseToUnderscore({
        internalId: "fawfaw"
      })
    ).toEqual({ internal_id: "fawfaw" });
  });

  it("check transformation; 3", () => {
    expect(
      camelCaseToUnderscore({
        internalId: "fawfaw"
      })
    ).toEqual({ internal_id: "fawfaw" });
  });

  it("check transformation; 4 nested", () => {
    expect(
      camelCaseToUnderscore({
        internalId: {
          tomBar: {
            tomZet: {
              tomBef: "aaa"
            }
          }
        }
      })
    ).toEqual({
      internal_id: {
        tom_bar: {
          tom_zet: {
            tom_bef: "aaa"
          }
        }
      }
    });
  });
});
