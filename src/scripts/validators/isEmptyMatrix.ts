import { log } from '../utils/log';

export const isEmptyMatrix = (matrix: Array<[]>): boolean => {
  let result = true;

  matrix.forEach((yAxis: Array<number>) => {
    yAxis.forEach((field: number) => {
      const squareMatrix: Array<number> = [
        field[0][0],
        field[0][1],
        field[1][0],
        field[1][1]
      ];

      squareMatrix.forEach((square: number) => {
        if (square || square !== 0) result = false;
      });
    });
  });
      
  log('IS_EMPTY_MATRIX', { result });
  
  return result;
};