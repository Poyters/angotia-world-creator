import { prepareInternalCharData } from './prepareInternalCharData';
import externalCharDataMock from '../../assets/mocks/externalCharData.mock.json';


describe("prepareExternalMapData script", () => {
  const internalData: any = prepareInternalCharData(externalCharDataMock);

  it("is a function", () => {
		expect(typeof prepareInternalCharData).toBe('function');
  });

  it("a lack of _id", () => {
		expect(internalData._id).toBe(undefined);
  });

  it("add internalId", () => {
		expect(internalData.internalId).toBe('1e5a4cd8-1172-4ba1-8b94-7564ef5f5437');
  });

  it("has name", () => {
		expect(internalData.name).toBe('bardzo dziki pies');
  });

  it("has fieldDiameter", () => {
		expect(internalData.fieldDiameter).toBe(0);
  });

  it("a lack of field_diameter", () => {
		expect(internalData.field_diameter).toBe(undefined);
  });

  it("has type", () => {
		expect(internalData.type).toBe('static');
  });

  it("has hasVisibleLevel", () => {
		expect(internalData.hasVisibleLevel).toBe(true);
  });

  it("a lack of has_visible_level", () => {
		expect(internalData.has_visible_level).toBe(undefined);
  });

  it("has charPic", () => {
		expect(internalData.charPic).toBe('charblob');
  });

  it("a lack of char_pic", () => {
		expect(internalData.char_pic).toBe(undefined);
  });

  it("has mobRange", () => {
		expect(internalData.mobRange).toBe('king');
  });

  it("a lack of mob_range", () => {
		expect(internalData.mob_range).toBe(undefined);
  });

  it("has isAgressiveMob", () => {
		expect(internalData.isAgressiveMob).toBe(false);
  });

  it("a lack of is_agressive_mob", () => {
		expect(internalData.is_agressive_mob).toBe(undefined);
  });

  it("has settings timeOfOccurance min", () => {
		expect(internalData.settings.timeOfOccurance.min).toBe(0);
  });

  it("a lack of time_of_occurance", () => {
		expect(internalData.settings.time_of_occurance).toBe(undefined);
  });

  it("has settings timeOfOccurance max", () => {
		expect(internalData.settings.timeOfOccurance.max).toBe(24);
  });

  it("has settings respTime min", () => {
		expect(internalData.settings.respTime.min).toBe(60);
  });

  it("a lack of resp_time", () => {
		expect(internalData.settings.resp_time).toBe(undefined);
  });

  it("has settings respTime max", () => {
		expect(internalData.settings.respTime.max).toBe(130);
  });

  it("has statistics attackRange", () => {
		expect(internalData.statistics.attackRange).toBe(0);
  });

  it("a lack of attack_range", () => {
		expect(internalData.statistics.attack_range).toBe(undefined);
  });

  it("has statistics attackSpeed", () => {
		expect(internalData.statistics.attackSpeed).toBe(100);
  });

  it("a lack of attack_speed", () => {
		expect(internalData.statistics.attack_speed).toBe(undefined);
  });

});