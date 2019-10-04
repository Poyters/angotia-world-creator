//Import component
import { selectCanvasSquare, selectCanvasField } from './selectFields';

//Import interfaces
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
	}

	it("Check select square)", () => {
		selectCanvasSquare(exampleMatrix, examplePoint);

		const square = exampleMatrix[2][1][0][0];

    expect(square).toEqual(1);
	});

});