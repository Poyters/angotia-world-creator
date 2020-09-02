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

	const notEmptyMatrixMix: any[] = [
		[[[0.12222, '12412412'], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, `araw`], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 8]]]
	];

	it("isEmptyMatrix is function", () => {
		expect(typeof isEmptyMatrix).toEqual('function');
	});

	it("Check if matrix is empty (it is)", () => {
    expect(isEmptyMatrix(emptyMatrix)).toBe(true);
	});
	
	it("Check if matrix is empty (it isn't)", () => {
		expect(isEmptyMatrix(notEmptyMatrix)).toBe(false);
	});
	
	it("Check if matrix is empty (it isn't)/mixed types", () => {
		expect(isEmptyMatrix(notEmptyMatrixMix)).toBe(false);
	});
});