import { IPoint } from '../../interfaces/math.interface';
import { deepCopy } from '../utils/deepCopy';


export const updateMatrixByTheOther = (
	rootMatrix: Array<IPoint[]>, 
	upgradeMatrix: Array<IPoint[]>, 
	setValue: number | string
): Array<[]> => {
	if (
		(!rootMatrix || rootMatrix.length === 0) ||
		(!upgradeMatrix || upgradeMatrix.length === 0)
	) {
    throw new Error('Cannot update matrix by empty');
	}
	
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