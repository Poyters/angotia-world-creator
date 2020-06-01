import { store } from '../../index';
import { colorBasedOnMatrix } from './colorBasedOnMatrix';
import { clearCanvas } from './clearCanvas';
import { emptyMapCanvasCtx } from './map';
import { addNotification } from './notifications';
import { updateMatrixByTheOther } from './matrix';
import { deepCopy } from './utils/deepCopy';
import creatorConfig from '../configs/creatorConfig.json';
import { changeMapSelectMatrix } from '../../store/actions/uiActions';


let pressedKey: string | null = null;

document.addEventListener('keydown', event => pressedKey = event.key);
document.addEventListener('keyup', () => pressedKey = null);

export const markSquare = (
  sourceMatrix: Array<[]>, 
  sourceMatrixCanvas: string, 
  changeMatrixMethod: Function, 
  note: string | null | undefined, 
  fillColor: string, 
  fillStyle?: string
) => {
  const storeData = store.getState();
  const selectMatrix: Array<[]> = deepCopy(storeData.ui.select.matrix);
  const sourceMatrixCopy: Array<[]> = deepCopy(sourceMatrix);
  let typeOfAction: number | string = pressedKey === creatorConfig.secondOptionKeyCode ? 0 : 1;
  if (
    (fillStyle === 'image' || fillStyle === 'vertexWeight') && 
    pressedKey !== creatorConfig.secondOptionKeyCode
  ) typeOfAction = fillColor;

  const newMatrix: Array<[]> = deepCopy(
    updateMatrixByTheOther(sourceMatrixCopy, selectMatrix, typeOfAction)
  );

  store.dispatch(changeMatrixMethod(newMatrix));
  clearCanvas("MAP_SELECT_CANVAS", changeMapSelectMatrix);

  console.log('fillStyle, fillColor', fillStyle, fillColor);

  emptyMapCanvasCtx(sourceMatrixCanvas);
  colorBasedOnMatrix(newMatrix, sourceMatrixCanvas, fillColor, fillStyle);

  if (note) addNotification(note);

  pressedKey = null;
};
