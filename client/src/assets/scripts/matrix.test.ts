//Import component
import { updateMatrixByTheOther } from './matrix';


describe("updateMatrixByTheOther script", () => {
	const updateMatrix: any[] = [
		[[[1, 0], [0, 1]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[1, 0], [0, 1]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[1, 0], [0, 1]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]]
  ];
    
  const emptyootMatrix: any[] = [
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
		const updatedMatrix = updateMatrixByTheOther(emptyootMatrix, updateMatrix, 1);
    expect(updatedMatrix).toEqual(updateMatrix);
	});

	it("Update not empty matrix by the other", () => {
		const updatedMatrix = updateMatrixByTheOther(notEmptyRootMatrix, updateMatrix, 1);
    expect(updatedMatrix[0][0]).toEqual([[1, 1], [1, 1]]);
	});
	
});