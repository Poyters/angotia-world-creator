import { store } from '../../App';

//Import scripts
import { colorBasedOnMatrix } from './colorBasedOnMatrix';
import { clearCanvas } from './clearCanvas';

//Import configs
import creatorConfig from '../configs/creatorConfig.json';

//Import actions
import { changeMapSelectMatrix } from '../../redux/actions/mapActions';


export const setBlockSquares = () => {
  const storeData = store.getState();
  const selectMatrix: any[] = [...storeData.map.select.matrix];
  const blockMatrix: any[] = [...storeData.map.blockMatrix];
  clearCanvas("mapSelectCanvas", changeMapSelectMatrix);

  colorBasedOnMatrix(selectMatrix, 'mapBlockCanvas', creatorConfig.blockSquareColor, 'barrier');
  
  const newBlockMatrix = updateMatrixByTheOther(blockMatrix, selectMatrix);
  //update block squares matrix
  //clear select matrix

  //TODO: create and update blockMapMatrix
}


const updateMatrixByTheOther = (rootMatrix: any[], upgradeMatrix: any[]): any[] => {
  upgradeMatrix.forEach((yAxis: Array<number>, y:number) => {
    yAxis.forEach((field: number, x: number) => {
      const squareMatrix: Array<number> = [
        field[0][0],
        field[0][1],
        field[1][0],
        field[1][1]
      ];

      squareMatrix.forEach((square: number, squareIndex: number) => {
        if (square === 1) {
          const fieldArray = squareIndex >= 2 ? 1 : 0;
          const squarePos = fieldArray === 0 ? squareIndex : squareIndex - 2;

          console.log('upgradeMatrix', upgradeMatrix[y][x][fieldArray][squarePos]);
          rootMatrix[y][x][fieldArray][squarePos] = 1; //add new values to the rootMatrix
        }
      });

    })
  })

  return rootMatrix;
}