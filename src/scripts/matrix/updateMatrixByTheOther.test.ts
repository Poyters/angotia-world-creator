import { updateMatrixByTheOther } from './updateMatrixByTheOther';


describe('updateMatrixByTheOther script', () => {
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

	it('updateMatrixByTheOther is function', () => {
    expect(typeof updateMatrixByTheOther).toEqual('function');
	});

	it('updateMatrixByTheOther catch empty matrix error', () => {
		expect(updateMatrixByTheOther).toThrow(Error);
	});

	it('Update empty matrix by the other', () => {
		const updatedMatrix: Array<[]> = updateMatrixByTheOther(emptyrootMatrix, updateMatrix, 1);
    expect(updatedMatrix).toEqual(updateMatrix);
	});

	it('Update not empty matrix by the other', () => {
		const updatedMatrix: Array<any[]> = updateMatrixByTheOther(
			notEmptyRootMatrix, updateMatrix, 1
		);
    expect(updatedMatrix[0][0]).toEqual([[1, 1], [1, 1]]);
	});
	
});
