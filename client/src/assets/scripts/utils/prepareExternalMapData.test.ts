import { prepareExternalMapData } from './prepareExternalMapData';
import { isValidExternalMapData } from './isValidExternalMapData';


// DeepCopy should support int, string, float
describe("prepareExternalMapData script", () => {
  const validInternalMapData = {
    id: '9',
    internalId: "05fe7586-f0dc-4265-ad9d-3fef4017a479",
    mapName: "example-map",
    minEntryLevel: 0,
    description: "example map desc",
    mapPic: "map pic path",
    visibilityRange: 8,
    size: {
      x: 8,
      y: 8
    },
    blockMatrix: [[[0,0], 0]],
    passage: {
      locations: [],
      matrix: []
    },
    building: {
      matrix: []
    }
  };

	it("Check valid data", () => {
    const externalData = prepareExternalMapData(validInternalMapData);
		expect(isValidExternalMapData(externalData)).toBe(true);
  });

});