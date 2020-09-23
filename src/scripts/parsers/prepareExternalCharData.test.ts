import { prepareExternalCharData } from './prepareExternalCharData';
import { isValidExternalCharData } from '../validators/isValidExternalCharData';


// DeepCopy should support int, string, float
describe("prepareExternalCharData script", () => {
	const validInternalData = {
    name: "Example",
    type: "static",
    choosed: "npc",
    monologs: [
      {
        content: "lubie cipqi",
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
      },
      {
        npc: "jest",
        player: [
          {
            dialog: "oki ide",
            next: "exit",
            action: "",
            condition: "",
            id: "3f40f2a7-6e88-4020-96a9-ea560d33d490"
          }
        ],
        id: "623eae8f-cf4f-4a2a-b77a-ea8442c56687"
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
    moveType: "",
    mobRange: "",
    isAgressiveMob: false,
    hasVisibleLevel: true,
    charPic: ""
  };

  it("is a function", () => {
		expect(typeof prepareExternalCharData).toBe('function');
  });

	it("Check valid data", () => {
    const externalData = prepareExternalCharData(validInternalData);
		expect(isValidExternalCharData(externalData)).toBe(true);
  });

});