import { prepareExternalCharData } from './prepareExternalCharData';
import { isValidExternalCharData } from '../validators/isValidExternalCharData';


// DeepCopy should support int, string, float
describe("prepareExternalCharData script", () => {
	const validInternalData = {
    name: "Example",
    type: "STATIC",
    choosed: "NPC",
    monologs: [
      {
        content: "i like juice",
        id: "74c44f4d-7c91-4d3b-ad6c-9d5c39c5e83f"
      }
    ],
    dialogs: [
      {
        npc: "xd",
        player: [
          {
            dialog: "fawaf",
            next: "623eae8f-cf4f-4a2a-b77a-ea8442c56687",
            action: "ada",
            condition: "",
            id: "730430d2-534d-4694-9cf3-5bbb90e27407"
          }
        ],
        id: "83766837-c8f7-44ee-867b-139f9e22d112"
      }
    ],
    statistics: {
      level: 1,
      health: 1000,
      attack: 0,
      defence: 0,
      strength: 0,
      dexterity: 0,
      inteligence: 0,
      jink: 0,
      speed: 0,
      attackRange: 0,
      attackSpeed: 100
    },
    settings: {
      timeOfOccurance: {
        min: 0,
        max: 24
      },
      respTime: {
        min: 60,
        max: 130
      }
    },
    internalId: "58cc2998-9dfa-4905-b6e3-d12fa14af3f6",
    fieldDiameter: 0,
    mobRange: "",
    isAgressiveMob: false,
    hasVisibleLevel: true,
    charPic: "charpicblob"
  };

  const externalData = prepareExternalCharData(validInternalData);

  it("is a function", () => {
		expect(typeof prepareExternalCharData).toBe('function');
  });

	it("Check valid data", () => {
		expect(isValidExternalCharData(externalData)).toBe(true);
  });

  it("Check valid data", () => {
		expect(isValidExternalCharData(externalData)).toBe(true);
  });

  it("Check a lack of attackRange", () => {
		expect(externalData.statistics.attackRange).toBe(undefined);
  });

  it("Check a lack of attackSpeed", () => {
		expect(externalData.statistics.attackSpeed).toBe(undefined);
  });

  it("Check a lack of timeOfOccurance", () => {
		expect(externalData.settings.timeOfOccurance).toBe(undefined);
  });

  it("Check a lack of respTime", () => {
		expect(externalData.settings.respTime).toBe(undefined);
  });

  it("Check a lack of internalId", () => {
		expect(externalData.internalId).toBe(undefined);
  });

  it("Check a lack of fieldDiameter", () => {
		expect(externalData.fieldDiameter).toBe(undefined);
  });

  it("Check a lack of mobRange", () => {
		expect(externalData.mobRange).toBe(undefined);
  });

  it("Check a lack of isAgressiveMob", () => {
		expect(externalData.isAgressiveMob).toBe(undefined);
  });

  it("Check a lack of hasVisibleLevel", () => {
		expect(externalData.hasVisibleLevel).toBe(undefined);
  });

  it("Check a lack of charPic", () => {
		expect(externalData.charPic).toBe(undefined);
  });

  it("Check a lack of charPic", () => {
		expect(externalData.charPic).toBe(undefined);
  });

  it("Check char_pic value", () => {
		expect(externalData.char_pic).toBe('charpicblob');
  });

  it("Check has_visible_level value", () => {
		expect(externalData.has_visible_level).toBe(true);
  });

  it("Check is_agressive_mob value", () => {
		expect(externalData.is_agressive_mob).toBe(false);
  });

  it("Check mob_range value", () => {
		expect(externalData.mob_range).toBe('');
  });

  it("Check field_diameter value", () => {
		expect(externalData.field_diameter).toBe(0);
  });

  it("Check _id value", () => {
		expect(externalData._id).toBe('58cc2998-9dfa-4905-b6e3-d12fa14af3f6');
  });

  it("Check time_of_occurance value", () => {
		expect(externalData.settings.time_of_occurance).toEqual({
      "min": 0,
      "max": 24
    });
  });

  it("Check resp_time value", () => {
		expect(externalData.settings.resp_time).toEqual({
      "min": 60,
      "max": 130
    });
  });

  it("Check level value", () => {
		expect(externalData.statistics.level).toBe(1);
  });

  it("Check health value", () => {
		expect(externalData.statistics.health).toBe(1000);
  });

  it("Check attack value", () => {
		expect(externalData.statistics.attack).toBe(0);
  });

  it("Check defence value", () => {
		expect(externalData.statistics.defence).toBe(0);
  });

  it("Check strength value", () => {
		expect(externalData.statistics.strength).toBe(0);
  });

  it("Check dexterity value", () => {
		expect(externalData.statistics.dexterity).toBe(0);
  });

  it("Check inteligence value", () => {
		expect(externalData.statistics.inteligence).toBe(0);
  });

  it("Check jink value", () => {
		expect(externalData.statistics.jink).toBe(0);
  });

  it("Check speed value", () => {
		expect(externalData.statistics.speed).toBe(0);
  });

  it("Check attack_range value", () => {
		expect(externalData.statistics.attack_range).toBe(0);
  });

  it("Check attack_speed value", () => {
		expect(externalData.statistics.attack_speed).toBe(100);
  });

  it("Check dialogs value", () => {
		expect(externalData.dialogs).toEqual([
      {
        npc: "xd",
        player: [
          {
            dialog: "fawaf",
            next: "623eae8f-cf4f-4a2a-b77a-ea8442c56687",
            action: "ada",
            condition: "",
            _id: "730430d2-534d-4694-9cf3-5bbb90e27407"
          }
        ],
        _id: "83766837-c8f7-44ee-867b-139f9e22d112"
      }
    ]);
  });

  it("Check monologs value", () => {
		expect(externalData.monologs).toEqual([
      {
        content: "i like juice",
        _id: "74c44f4d-7c91-4d3b-ad6c-9d5c39c5e83f"
      }
    ]);
  });
});