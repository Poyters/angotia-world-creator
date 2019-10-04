//Import component
import { isEmptyMatrix } from './isEmptyMatrix';

describe("isEmptyMatrix script", () => {
	const emptyMatrix: any[] = [
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]]
	];

	const notEmptyMatrix: any[] = [
		[[[-1, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[2, 0], [3, 0]], [[0, 0], [1, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]]
	];

	it("Check if matrix is empty (it is)", () => {
    expect(isEmptyMatrix(emptyMatrix)).toBe(true);
	});
	
	it("Check if matrix is empty (it isn't)", () => {
		expect(isEmptyMatrix(notEmptyMatrix)).toBe(false);
  });

});