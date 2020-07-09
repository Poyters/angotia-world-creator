import { deepCopy } from './deepCopy';


export const matrixToContentList = (matrix: any) => {
  console.log('matrixToContentList');
  const contentList = [];

  const copyOfmatrix: Array<[]> = deepCopy(matrix);

  copyOfmatrix.map((yAxis: Array<number>, y:number) => {
    console.log('yAxis', yAxis);
    yAxis.map((field: number, x: number) => {
      console.log('field.x', field, x);
      const squareMatrix: Array<number> = [
        field[0][0],
        field[0][1],
        field[1][0],
        field[1][1]
      ];

      squareMatrix.map((square: number, index: number) => {
        console.log('square.index', square, index);
      });

    });
  });
};


