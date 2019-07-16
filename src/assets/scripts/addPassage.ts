import { store } from '../../App';

//Import scripts
import { colorBasedOnMatrix } from './colorBasedOnMatrix';
import { clearCanvas } from './clearCanvas';
import { emptyMapCanvasCtx } from './map';
import { setActionNote } from './notifications';

//Import configs
import creatorConfig from '../configs/creatorConfig.json';

//Import actions
import { changeMapSelectMatrix } from '../../redux/actions/mapActions';
import { changeMapPassageMatrix } from '../../redux/actions/mapActions';


let pressedKey: number = -1;

document.addEventListener('keydown', event => pressedKey = event.keyCode);

export const addPassage = () => {
  const storeData = store.getState();
  const selectMatrix: any[] = [...storeData.map.select.matrix];
  const passageMatrix: any[] = [...storeData.map.passageMatrix];
  const typeOfAction = pressedKey === creatorConfig.secondOptionKeyCode ? 0 : 1; //secondOptionKeyCode determines second type of used action, eg at this example, you can add passage, but when you press key wich has the same code as secondOptionKeyCode, you delete selected passage
  const newPassageMatrix = updateMatrixByTheOther(passageMatrix, selectMatrix, typeOfAction);

  store.dispatch(changeMapPassageMatrix(newPassageMatrix));
  clearCanvas("mapSelectCanvas", changeMapSelectMatrix);

  emptyMapCanvasCtx('mapPassageCanvas');
  colorBasedOnMatrix(newPassageMatrix, 'mapPassageCanvas', creatorConfig.blockSquareColor, 'barrier');
  setActionNote('Selected fields had been blocked');

  setTimeout(() => pressedKey = -1, 500) //clear pressedKey. Duration is necessary due to pressing key for a while after running setBlockSquares
}


const updateMatrixByTheOther = (rootMatrix: any[], upgradeMatrix: any[], setValue: number): any[] => {
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

          rootMatrix[y][x][fieldArray][squarePos] = setValue; //add new values to the rootMatrix
        }
      });

    })
  })

  return rootMatrix;
}