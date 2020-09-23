import { prepareInternalMapData } from './prepareInternalMapData';
import extarnalMapDataMock from '../../mocks/externalMapData.mock.json';


describe("prepareInternalMapData script", () => {
  const internalMapData: any = prepareInternalMapData(extarnalMapDataMock);

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

});