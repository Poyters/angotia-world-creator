import { deepCopy } from './deepCopy';


export const matrixToContentList = (matrix: any) => {
  console.log('matrixToContentList');
  const contentList: any = [];

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
        const xShift: number = index === 1 || index === 3 ?  1 : 0;
        const yShift: number = index === 2 || index === 3 ? 1 : 0;
        console.log('square.xs,ys', square, xShift, yShift);
        if (square !== 0) {
          const contentItem = {
            x,
            y,
            xShift,
            yShift,
            value: square
          };

          contentList.push(contentItem);
        }
      });

    });
  });

  console.log('contentList', contentList);
};


