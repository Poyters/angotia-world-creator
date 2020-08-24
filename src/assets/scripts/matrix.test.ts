import { updateMatrixByTheOther, matrixToIds } from './matrix';
import { ISquareData } from '../interfaces/square';


describe("updateMatrixByTheOther script", () => {
	const updateMatrix: any[] = [
		[[[1, 0], [0, 1]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[1, 0], [0, 1]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[1, 0], [0, 1]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]]
  ];
    
  const emptyrootMatrix: any[] = [
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]]
	];

	const notEmptyRootMatrix: any[] = [
		[[[0, 1], [1, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]]
	];

	it("Update empty matrix by the other", () => {
		const updatedMatrix: Array<[]> = updateMatrixByTheOther(emptyrootMatrix, updateMatrix, 1);
    expect(updatedMatrix).toEqual(updateMatrix);
	});

	it("Update not empty matrix by the other", () => {
		const updatedMatrix: Array<any[]> = updateMatrixByTheOther(
			notEmptyRootMatrix, updateMatrix, 1
		);
    expect(updatedMatrix[0][0]).toEqual([[1, 1], [1, 1]]);
	});
	
});


describe("matrixToIds script", () => {
	const matrix: any[] = [
		[[[1, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 1], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[1, 0], [0, 0]]]
  ];
    
	it("Update empty matrix by the other", () => {
		const squareIds: ISquareData[] = matrixToIds(matrix);
		const expectedOutput: ISquareData[] = [
			{id: "0.0, 0.0", x: 0, xShift: 0, y: 0, yShift: 0}, 
			{id: "1.1, 1.0", x: 1, xShift: 1, y: 1, yShift: 0}, 
			{id: "2.0, 2.0", x: 2, xShift: 0, y: 2, yShift: 0}
		];

		expect(squareIds).toEqual(expectedOutput);
		expect(squareIds.length).toEqual(3);
	});
	
});