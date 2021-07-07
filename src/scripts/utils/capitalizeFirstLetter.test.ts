import { capitalizeFirstLetter } from './capitalizeFirstLetter';


describe('capitalizeFirstLetter script', () => {
  it('is a function', () => {
		expect(typeof capitalizeFirstLetter).toBe('function');
  });

  it('capitalize 1', () => {
		expect(capitalizeFirstLetter('LETTER')).toBe('LETTER');
  });

  it('capitalize 2', () => {
		expect(capitalizeFirstLetter('lETTER')).toBe('LETTER');
  });

  it('capitalize 3', () => {
		expect(capitalizeFirstLetter('lETTter')).toBe('LETTter');
  });

  it('capitalize 4', () => {
		expect(capitalizeFirstLetter('letter')).toBe('Letter');
  });

  it('capitalize 5', () => {
		expect(capitalizeFirstLetter(' letter')).toBe(' letter');
  });

  it('capitalize 6', () => {
		expect(capitalizeFirstLetter('_letter')).toBe('_letter');
  });

  it('capitalize 7', () => {
		expect(capitalizeFirstLetter('/letter')).toBe('/letter');
  });
});