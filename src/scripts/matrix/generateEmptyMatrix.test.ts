import { generateEmptyMatrix } from './generateEmptyMatrix';
import { isEmptyMatrix } from '../validators/isEmptyMatrix';


describe("generateEmptyMatrix script", () => {
  const newEmptyMatrix = generateEmptyMatrix();

	it("Check generate empty matrix", () => {
    expect(isEmptyMatrix(newEmptyMatrix)).toBe(true);
    expect(newEmptyMatrix.length).toEqual(8);
    expect(newEmptyMatrix[0].length).toEqual(8);
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