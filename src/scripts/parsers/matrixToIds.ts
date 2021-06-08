import { ISquareData } from '../../interfaces/square.interface';
import { deepCopy } from '../utils/deepCopy';
import { log } from '../utils/log';


export const matrixToIds = (matrix: any[]): ISquareData[] => {
  if (!matrix || matrix.length === 0) return [];

  log('PARSING_MATRIX_TO_IDS');

  const copyOfmatrix: Array<any> = deepCopy(matrix);
  const squareIds: ISquareData[] = [];

  copyOfmatrix.forEach((yAxis: Array<number>, y: number) => {
    yAxis.forEach((field: number, x: number) => {
      const squareMatrix: Array<number> = [
        field[0][0],
        field[0][1],
        field[1][0],
        field[1][1]
      ];

      squareMatrix.forEach((square: number | string, index: number) => {
        // Dont check type
        if (square === 1 || square === '1') {
          const xShift: number = index === 1 || index === 3 ? 1 : 0;
          const yShift: number = index === 2 || index === 3 ? 1 : 0;
          const squareId: ISquareData = {
            x: x,
            y: y,
            xShift,
            yShift,
            id: `${x}.${xShift}, ${y}.${yShift}`
          };

          squareIds.push(squareId);
        }
      });

    });
  });

  return squareIds;
};