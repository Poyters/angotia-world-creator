import { isValidExternalMapData } from './isValidExternalMapData';


describe("isValidExternalMapData script", () => {
  const validExternalMapData = {
    _id: "05fe7586-f0dc-4265-ad9d-3fef4017a479",
    map_name: "example-map",
    min_entry_level: 0,
    description: "example map desc",
    map_pic: "map pic path",
    visibility_range: 8,
    size: {
      x: 8,
      y: 8
    },
    block_matrix: [[[0,0], 0]],
    passage: {
      locations: [],
      matrix: []
    },
    building: {
      matrix: []
    }
  };

  const invalidExternalData1 = {
    id: 'database id',
    _id: 'internal id'
  };

  const invalidExternalData2 = {
    _id: 'internal id',
    internalId: 'afwaf432t',
    name: 'Piotrek'
  };

  const invalidExternalData3 = {
    map_name: ''
  };

  it("isEmptyMatrix is function", () => {
		expect(typeof isValidExternalMapData).toEqual('function');
	});

	it("Check valid data", () => {
		expect(isValidExternalMapData(validExternalMapData)).toBe(true);
  });
   
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
  
  it("Check invalida data; consists database id", () => {
		expect(isValidExternalMapData(invalidExternalData1)).toBe(false);
  });

  it("Check invalida data; consists internalId", () => {
		expect(isValidExternalMapData(invalidExternalData2)).toBe(false);
  });

  it("Check invalida data; invalid name", () => {
		expect(isValidExternalMapData(invalidExternalData3)).toBe(false);
  });

  it("Check invalida data; invalid min_entry_level", () => {
		expect(isValidExternalMapData({min_entry_level: -2})).toBe(false);
  });

});