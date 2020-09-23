import { prepareInternalMapData } from './prepareInternalMapData';
import extarnalMapDataMock from '../../assets/mocks/externalMapData.mock.json';
import { generateEmptyMapMatrix } from '../map';
import { deepCopy } from '../utils/deepCopy';


describe("prepareInternalMapData script", () => {
  const internalMapData: any = prepareInternalMapData(extarnalMapDataMock);
  const emptyMatrix = generateEmptyMapMatrix(internalMapData.size);

  it("is a function", () => {
		expect(typeof prepareInternalMapData).toBe('function');
  });

  it("a lack of _id", () => {
		expect(internalMapData._id).toBe(undefined);
  });

  it("a lack of building.items", () => {
		expect(internalMapData.building.items).toBe(undefined);
  });

  it("a lack of decoration.items", () => {
		expect(internalMapData.decoration.items).toBe(undefined);
  });

  it("a lack of subsoil.items", () => {
		expect(internalMapData.subsoil.items).toBe(undefined);
  });

  it("a lack of npc.items", () => {
		expect(internalMapData.npc.items).toBe(undefined);
  });

  it("a lack of mob.items", () => {
		expect(internalMapData.mob.items).toBe(undefined);
  });

  it("a lack of se.items", () => {
		expect(internalMapData.se.items).toBe(undefined);
  });

  it("a lack of building.pics", () => {
		expect(internalMapData.building.pics).toBe(undefined);
  });

  it("a lack of decoration.pics", () => {
		expect(internalMapData.decoration.pics).toBe(undefined);
  });

  it("a lack of subsoil.pics", () => {
		expect(internalMapData.subsoil.pics).toBe(undefined);
  });

  it("a lack of npc.pics", () => {
		expect(internalMapData.npc.pics).toBe(undefined);
  });

  it("a lack of mob.pics", () => {
		expect(internalMapData.mob.pics).toBe(undefined);
  });

  it("a lack of se.pics", () => {
		expect(internalMapData.se.pics).toBe(undefined);
  });

  it("has internal iamges data", () => {
		expect(Array.isArray(internalMapData.images)).toBe(true);
  });

  it("has all internal iamges data", () => {
		expect(internalMapData.images.length).toBe(4);
  });

  it("proper image data, 1", () => {
		expect(internalMapData.images[0]).toEqual({
      id: extarnalMapDataMock.building.pics[0]._id,
      blob: extarnalMapDataMock.building.pics[0].blob
    });
  });

  it("proper image data, 2", () => {
		expect(internalMapData.images[1]).toEqual({
      id: extarnalMapDataMock.building.pics[1]._id,
      blob: extarnalMapDataMock.building.pics[1].blob
    });
  });

  it("proper image data, 3", () => {
		expect(internalMapData.images[2]).toEqual({
      id: extarnalMapDataMock.decoration.pics[0]._id,
      blob: extarnalMapDataMock.decoration.pics[0].blob
    });
  });

  it("proper image data, 4", () => {
		expect(internalMapData.images[3]).toEqual({
      id: extarnalMapDataMock.npc.pics[0]._id,
      blob: extarnalMapDataMock.npc.pics[0].blob
    });
  });

  it("has proper description", () => {
		expect(internalMapData.description).toBe("mapa tuzmer, zawiera wiele obiektow");
  });

  it("has proper internalId", () => {
		expect(internalMapData.internalId).toBe("4036b340-0e33-4df4-ab51-2a462e691b2d");
  });

  it("has proper minEntryLevel", () => {
		expect(internalMapData.minEntryLevel).toBe(0);
  });

  it("has proper mapName", () => {
		expect(internalMapData.mapName).toBe("Tuzmer");
  });

  it("has proper mapPic", () => {
		expect(internalMapData.mapPic).toBe("map-pic-blob");
  });

  it("has proper visibilityRange", () => {
		expect(internalMapData.visibilityRange).toBe(8);
  });

  it("has proper visibilityRange", () => {
		expect(internalMapData.visibilityRange).toBe(8);
  });

  it("has proper size x", () => {
		expect(internalMapData.size.x).toBe(7);
  });

  it("has proper size y", () => {
		expect(internalMapData.size.y).toBe(7);
  });

  it("check out npc matrix", () => {
    const npcMatrix = deepCopy(emptyMatrix);
    npcMatrix[4][3][0][0] = 'picId=a149b67f-fa1b-4258-818f-dbfc0a1d1139';
    npcMatrix[4][3][0][1] = 'picId=a149b67f-fa1b-4258-818f-dbfc0a1d1139';
    npcMatrix[4][3][1][0] = 'picId=a149b67f-fa1b-4258-818f-dbfc0a1d1139';
    npcMatrix[4][3][1][1] = 'picId=a149b67f-fa1b-4258-818f-dbfc0a1d1139';

    expect(internalMapData.npc.matrix)
      .toEqual(npcMatrix);
  });

  it("check out decoration matrix", () => {
    const decorationMatrix = deepCopy(emptyMatrix);
    decorationMatrix[2][3][0][1] = 'picId=f9e745bb-0921-495b-8b6e-1f892fabf6ba';
    decorationMatrix[2][3][1][1] = 'picId=f9e745bb-0921-495b-8b6e-1f892fabf6ba';
    decorationMatrix[2][4][0][0] = 'picId=f9e745bb-0921-495b-8b6e-1f892fabf6ba';
    decorationMatrix[2][4][0][1] = 'picId=f9e745bb-0921-495b-8b6e-1f892fabf6ba';
    decorationMatrix[2][4][1][0] = 'picId=f9e745bb-0921-495b-8b6e-1f892fabf6ba';
    decorationMatrix[2][4][1][1] = 'picId=f9e745bb-0921-495b-8b6e-1f892fabf6ba';
    decorationMatrix[2][5][0][0] = 'picId=f9e745bb-0921-495b-8b6e-1f892fabf6ba';
    decorationMatrix[2][5][0][1] = 'picId=f9e745bb-0921-495b-8b6e-1f892fabf6ba';
    decorationMatrix[2][5][1][0] = 'picId=f9e745bb-0921-495b-8b6e-1f892fabf6ba';
    decorationMatrix[2][5][1][1] = 'picId=f9e745bb-0921-495b-8b6e-1f892fabf6ba';


    expect(internalMapData.decoration.matrix)
      .toEqual(decorationMatrix);
  });

  it("check out building matrix", () => {
    const buildingMatrix = deepCopy(emptyMatrix);
    buildingMatrix[0][6][1][1] = 'picId=e7a576fb-d5fc-461e-8f3a-27c2e6edddf1';
    buildingMatrix[3][4][0][0] = 'picId=e7a576fb-d5fc-461e-8f3a-27c2e6edddf1';

    expect(internalMapData.building.matrix)
      .toEqual(buildingMatrix);
  });

  it("check out passage matrix", () => {
    const passageMatrix = deepCopy(emptyMatrix);
    passageMatrix[0][3][0][0] = 1;
   
    expect(internalMapData.passage.matrix)
      .toEqual(passageMatrix);
  });

  it("check out vertex matrix", () => {
    const vertexMatrix = deepCopy(emptyMatrix);
    vertexMatrix[4][3][0][0] = 1;
   
    expect(internalMapData.vertex.matrix)
      .toEqual(vertexMatrix);
  });

});