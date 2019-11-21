//Import component
import { generateEmptyMapMatrix } from './map';
import { isEmptyMatrix } from './isEmptyMatrix';


describe("generateEmptyMapMatrix script", () => {
	it("Check generate empty matrix", () => {
    const newEmptyMatrix = generateEmptyMapMatrix();

    expect(isEmptyMatrix(newEmptyMatrix)).toBe(true);
    expect(newEmptyMatrix.length).toEqual(15);
    expect(newEmptyMatrix[0].length).toEqual(25);
	});

	
});