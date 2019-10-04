//Import interfaces
import { ISquareData } from '../interfaces/squareInterfaces';
import { deepCopy } from './utils/deepCopy';


export const updateMatrixByTheOther = (rootMatrix: any[], upgradeMatrix: any[], setValue: number | string): any[] => {
	const copyOfRootMatrix: any[] = deepCopy(rootMatrix);
	const copyOfUpgradeMatrix: any[] = deepCopy(upgradeMatrix);

	copyOfUpgradeMatrix.forEach((yAxis: Array<number>, y:number) => {
		yAxis.forEach((field: number, x: number) => {
			const squareMatrix: Array<number> = [
				field[0][0],
				field[0][1],
				field[1][0],
				field[1][1]
			];

			squareMatrix.forEach((square: number, squareIndex: number) => {
				if (square && square !== 0) {
					const fieldArray = squareIndex >= 2 ? 1 : 0;
					const squarePos = fieldArray === 0 ? squareIndex : squareIndex - 2;

					copyOfRootMatrix[y][x][fieldArray][squarePos] = setValue; //add new values to the rootMatrix
				}
			});

		});
	});

	return deepCopy(copyOfRootMatrix);
};


export const matrixToIds = (matrix: any[]): ISquareData[] => {
	const copyOfmatrix: Array<any> = deepCopy(matrix);
	const squareIds: any = [];
  
	copyOfmatrix.map((yAxis: Array<number>, y:number) => {
	  yAxis.map((field: number, x: number) => {
		const squareMatrix: Array<number> = [
		  field[0][0],
		  field[0][1],
		  field[1][0],
		  field[1][1]
		];
  
		squareMatrix.map((square: number, index: number) => {
		  if (square === 1) {
			const xDelta: number = index === 1 || index === 3 ? 1 : 0;
			const yDelta: number = index === 2 || index === 3 ? 1 : 0;
			const squareId: ISquareData = {
				x: x,
				y: y,
				xDelta,
				yDelta,
				id: `${x}.${xDelta}, ${y}.${yDelta}`
			};
  
			squareIds.push(squareId);
		  }
		});
  
	  });
	});

	return squareIds;
  };