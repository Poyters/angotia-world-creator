import { isValidLocation } from './isValidLocation';
import { IPassageLocation } from '../../interfaces/passage.interface';


describe('isValidExternalMapData script', () => {
  const mapSize = { x: 3, y: 3 };
  const invalidMapSize1: any = {};
  const invalidMapSize2: any = { x: 1 };
  const invalidMapSize3: any = { y: 1 };
  const invalidMapSize4: any = { x: 0, y: 5 };
  const invalidMapSize5: any = { x: 5, y: 0 };
  const invalidMapSize6: any = { x: 101, y: 5 };
  const invalidMapSize7: any = { x: 5, y: 101 };

  const validLocation: IPassageLocation = {
    destination: {
      mapTargetCords: 4,
      mapTargetId: 4
    },
    id: '1.0, 0.0',
    x: 1,
    xShift: 0,
    y: 0,
    yShift: 0
  };

  const invalidX: IPassageLocation = {
    destination: {
      mapTargetCords: 4,
      mapTargetId: 4
    },
    id: '3.0, 0.0',
    x: 3,
    xShift: 0,
    y: 0,
    yShift: 0
  };

  const invalidY: IPassageLocation = {
    destination: {
      mapTargetCords: 4,
      mapTargetId: 4
    },
    id: '0.0, 3.0',
    x: 0,
    xShift: 0,
    y: 3,
    yShift: 0
  };

  const invalidShiftX: IPassageLocation = {
    destination: {
      mapTargetCords: 4,
      mapTargetId: 4
    },
    id: '0.2, 0.0',
    x: 0,
    xShift: 2,
    y: 0,
    yShift: 0
  };

  const invalidShiftY: IPassageLocation = {
    destination: {
      mapTargetCords: 4,
      mapTargetId: 4
    },
    id: '0.0, 0.2',
    x: 0,
    xShift: 0,
    y: 0,
    yShift: 2
  };


  it('is a function', () => {
		expect(typeof isValidLocation).toEqual('function');
  });
  
  it('validation; valid', () => {
		expect(isValidLocation(validLocation, mapSize)).toBe(true);
  });
  
  it('validation; invalidX', () => {
		expect(isValidLocation(invalidX, mapSize)).toBe(false);
  });
  
  it('validation; invalidY', () => {
		expect(isValidLocation(invalidY, mapSize)).toBe(false);
  });
  
  it('validation; invalidShiftX', () => {
		expect(isValidLocation(invalidShiftX, mapSize)).toBe(false);
  });
  
  it('validation; invalidShiftY', () => {
		expect(isValidLocation(invalidShiftY, mapSize)).toBe(false);
  });
  
  it('validation; a lack of map size', () => {
		expect(isValidLocation(validLocation, invalidMapSize1)).toBe(false);
  });
  
  it('validation; a lack of map size', () => {
		expect(isValidLocation(validLocation, invalidMapSize1)).toBe(false);
  });
  
  it('validation; a lack of Y map size', () => {
		expect(isValidLocation(validLocation, invalidMapSize2)).toBe(false);
  });
  
  it('validation; a lack of X map size', () => {
		expect(isValidLocation(validLocation, invalidMapSize3)).toBe(false);
  });
  
  it('validation; too small X map size', () => {
		expect(isValidLocation(validLocation, invalidMapSize4)).toBe(false);
  });
  
  it('validation; too small Y map size', () => {
		expect(isValidLocation(validLocation, invalidMapSize5)).toBe(false);
  });
  
  it('validation; too large Y map size', () => {
		expect(isValidLocation(validLocation, invalidMapSize6)).toBe(false);
  });
  
  it('validation; too large Y map size', () => {
		expect(isValidLocation(validLocation, invalidMapSize7)).toBe(false);
	});

});