import { isValidExternalMapData } from './isValidExternalMapData';


// DeepCopy should support int, string, float
describe("isValidExternalMapData script", () => {
  const validExternalMapData = {
    _id: "05fe7586-f0dc-4265-ad9d-3fef4017a479",
    map_name: "example-map",
    min_entry_level: "1",
    description: "example map desc",
    map_pic: "map pic path",
    visibility_range: 8,
    size: {
      x: 8,
      y: 8
    }
  };

  it("isEmptyMatrix is function", () => {
		expect(typeof isValidExternalMapData).toEqual('function');
	});

	it("Check valid data", () => {
		expect(isValidExternalMapData(validExternalMapData)).toBe(true);
  });
  
  // it("Check invalida data; missing name", () => {
	// 	expect(isValidExternalMapData(invalidExternalData1)).toBe(false);
  // });
  
  // it("Check invalida data; missing type", () => {
	// 	expect(isValidExternalMapData(invalidExternalData2)).toBe(false);
  // });
  
  it("Check invalida data; empty object", () => {
		expect(isValidExternalMapData({})).toBe(false);
  });
  
  it("Check invalida data; null", () => {
		expect(isValidExternalMapData(null)).toBe(false);
  });
  
  it("Check invalida data; undefined", () => {
		expect(isValidExternalMapData(undefined)).toBe(false);
  });
  
  it("Check invalida data; data is array", () => {
		expect(isValidExternalMapData([])).toBe(false);
  });
  
  // it("Check invalida data; missing choosed", () => {
	// 	expect(isValidExternalCharData(invalidExternalData3)).toBe(false);
  // });

  // it("Check invalida data; missing _id", () => {
	// 	expect(isValidExternalCharData(invalidExternalData4)).toBe(false);
  // });

  // it("Check invalida data; has id key", () => {
	// 	expect(isValidExternalCharData(invalidExternalData5)).toBe(false);
  // });

});