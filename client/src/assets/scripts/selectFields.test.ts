import { selectCanvasSquare, selectCanvasField } from './selectFields';
import { IPoint } from '../interfaces/pointInterfaces';


describe("selectCanvasSquare script", () => {
	const exampleMatrix: any[] = [
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]]
	];

	const examplePoint: IPoint = {
		x: 2,
		y: 4
	};

	it("Check select square", () => {
		selectCanvasSquare(exampleMatrix, examplePoint);
		const square = exampleMatrix[2][1][0][0];

    expect(square).toEqual(1);
	});

});

describe("selectCanvasField script", () => {
	const exampleMatrix: any[] = [
		[
			[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]
		],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]],
		[[[0, 0], [0, 0]], [[0, 0], [0, 0]], [[0, 0], [0, 0]]]
	];

	const examplePoint: IPoint = {
		x: 2,
		y: 4
	};

	it("Check select filed", () => {
		selectCanvasField(exampleMatrix, examplePoint);
		const field = exampleMatrix[4][2];
		const selectedField = [
			[1, 1],
			[1, 1]
		];
		
    expect(field).toEqual(selectedField);
	});

});