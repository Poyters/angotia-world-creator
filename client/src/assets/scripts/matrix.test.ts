//Import component
import { updateMatrixByTheOther } from './matrix';


describe("updateMatrixByTheOther script", () => {
	const updateMatrix: any[] = [
		[[[1, 0], [0, 1]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[1, 0], [0, 1]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[1, 0], [0, 1]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]]
    ];
    
    const rootMatrix: any[] = [
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]]
	];

	it("Update empty matrix by the other", () => {
		const updatedMatrix = updateMatrixByTheOther(rootMatrix, updateMatrix, 1);
    expect(updatedMatrix).toEqual(updateMatrix);
	});
	
});