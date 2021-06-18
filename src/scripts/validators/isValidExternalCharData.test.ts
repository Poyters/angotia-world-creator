import { isValidExternalCharData } from './isValidExternalCharData';


// DeepCopy should support int, string, float
describe('isValidExternalCharData script', () => {
	const validExternalData = {
    name: 'Example',
    type: 'STATIC',
    choosed: 'NPC',
    monologs: [
      {
        content: 'lubie cipqi',
        _id: '74c44f4d-7c91-4d3b-ad6c-9d5c39c5e83f'
      }
    ],
    dialogs: [
      {
        npc: 'xd',
        player: [
          {
            dialog: 'fawaf',
            next: '623eae8f-cf4f-4a2a-b77a-ea8442c56687',
            action: 'ada',
            condition: '',
            _id: '730430d2-534d-4694-9cf3-5bbb90e27407'
          }
        ],
        connected_dialogs: [],
        _id: '83766837-c8f7-44ee-867b-139f9e22d112'
      },
      {
        npc: 'jest',
        player: [
          {
            dialog: 'oki ide',
            next: 'exit',
            action: '',
            condition: '',
            _id: '3f40f2a7-6e88-4020-96a9-ea560d33d490'
          }
        ],
        connected_dialogs: [],
        _id: '623eae8f-cf4f-4a2a-b77a-ea8442c56687'
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
      attack_range: 0,
      attack_speed: 100
    },
    settings: {
      time_of_occurance: {
        min: 0,
        max: 24
      },
      resp_time: {
        min: 60,
        max: 130
      }
    },
    _id: '58cc2998-9dfa-4905-b6e3-d12fa14af3f6',
    field_diameter: 0,
    mob_range: '',
    is_agressive_mob: false,
    has_visible_level: true,
    char_pic: ''
  };

  const invalidExternalData1 = {
    type: 'NPC'
  };
  const invalidExternalData2 = {
    name: 'Grzesiek'
  };
  const invalidExternalData3 = {
    type: 'STATIC',
    name: 'Grzesiek'
  };
  const invalidExternalData4 = {
    type: 'STATIC',
    name: 'Grzesiek',
    choosed: 'NPC'
  };
  const invalidExternalData5 = {
    id: 'database id',
    _id: 'internal id'
  };

  it('isEmptyMatrix is function', () => {
		expect(typeof isValidExternalCharData).toEqual('function');
	});

	it('Check valid data', () => {
		expect(isValidExternalCharData(validExternalData)).toBe(true);
  });
  
  it('Check invalida data; missing name', () => {
		expect(isValidExternalCharData(invalidExternalData1)).toBe(false);
  });
  
  it('Check invalida data; missing type', () => {
		expect(isValidExternalCharData(invalidExternalData2)).toBe(false);
  });
  
  it('Check invalida data; empty object', () => {
		expect(isValidExternalCharData({})).toBe(false);
  });
  
  it('Check invalida data; null', () => {
		expect(isValidExternalCharData(null)).toBe(false);
  });
  
  it('Check invalida data; undefined', () => {
		expect(isValidExternalCharData(undefined)).toBe(false);
  });
  
  it('Check invalida data; data is array', () => {
		expect(isValidExternalCharData([])).toBe(false);
  });
  
  it('Check invalida data; missing choosed', () => {
		expect(isValidExternalCharData(invalidExternalData3)).toBe(false);
  });

  it('Check invalida data; missing _id', () => {
		expect(isValidExternalCharData(invalidExternalData4)).toBe(false);
  });

  it('Check invalida data; has id key', () => {
		expect(isValidExternalCharData(invalidExternalData5)).toBe(false);
  });

});