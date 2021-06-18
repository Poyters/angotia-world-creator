import { generateEmptyMatrix } from './generateEmptyMatrix';
import { isEmptyMatrix } from '../validators/isEmptyMatrix';
import { mapState } from '../../store/states/mapState';


describe('generateEmptyMatrix script', () => {
  const newEmptyMatrix = generateEmptyMatrix();

  it('is a function', () => {
    expect(typeof generateEmptyMatrix).toEqual('function');
	});

	it('Check generate empty matrix', () => {
    expect(isEmptyMatrix(newEmptyMatrix)).toBe(true);
    expect(newEmptyMatrix.length).toEqual(mapState.size.x);
    expect(newEmptyMatrix[0].length).toEqual(mapState.size.y);
  });
  
  it('Check if contains empty fields', () => {
    let containValues = false;

    newEmptyMatrix.flat(3).forEach(square => {
      if (square !== 0) {
        containValues = true;
        return;
      }
    });

    expect(containValues).toBe(false);
  });
});