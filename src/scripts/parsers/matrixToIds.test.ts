import { ISquareData } from '../../interfaces/square.interface';
import { matrixToIds } from './matrixToIds';


describe('matrixToIds script', () => {
	const matrix = [
		[[[1, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 1], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[1, 0], [0, 0]]]
	];
	
	it('matrixToIds is function', () => {
    expect(typeof matrixToIds).toEqual('function');
	});

	it('matrixToIds return empty array', () => {
    expect(matrixToIds([])).toEqual([]);
	});
    
	it('Update empty matrix by the other', () => {
		const squareIds: ISquareData[] = matrixToIds(matrix);
		const expectedOutput: ISquareData[] = [
			{ id: '0.0, 0.0', x: 0, xShift: 0, y: 0, yShift: 0 }, 
			{ id: '1.1, 1.0', x: 1, xShift: 1, y: 1, yShift: 0 }, 
			{ id: '2.0, 2.0', x: 2, xShift: 0, y: 2, yShift: 0 }
		];

		expect(squareIds).toEqual(expectedOutput);
		expect(squareIds.length).toEqual(3);
	});
	
});