import { ISquareData } from '../interfaces/squareInterfaces';
import { IPoint } from '../interfaces/pointInterfaces';
import { deepCopy } from './utils/deepCopy';


export const updateMatrixByTheOther = (
	rootMatrix: Array<IPoint[]>, 
	upgradeMatrix: Array<IPoint[]>, 
	setValue: number | string
): Array<[]> => {
	const copyOfRootMatrix: Array<IPoint[]> = deepCopy(rootMatrix);
	const copyOfUpgradeMatrix: Array<[]> = deepCopy(upgradeMatrix);

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
					const fieldArray: number = squareIndex >= 2 ? 1 : 0;
					const squarePos: number = fieldArray === 0 ? squareIndex : squareIndex - 2;

					//add new values to the rootMatrix
					copyOfRootMatrix[y][x][fieldArray][squarePos] = setValue; 
				}
			});

		});
	});

	return deepCopy(copyOfRootMatrix);
};


export const matrixToIds = (matrix: any[]): ISquareData[] => {
	const copyOfmatrix: Array<any> = deepCopy(matrix);
	const squareIds: ISquareData[] = [];
  
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