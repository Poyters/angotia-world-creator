import { store } from '../../index';

//Import scripts
import { colorBasedOnMatrix } from './colorBasedOnMatrix';
import { clearCanvas } from './clearCanvas';
import { emptyMapCanvasCtx } from './map';
import { setActionNote } from './notifications';
import { updateMatrixByTheOther } from './matrix';
import { deepCopy } from './utils/deepCopy';

//Import configs
import creatorConfig from '../configs/creatorConfig.json';

//Import actions
import { changeMapSelectMatrix } from '../../redux/actions/uiActions';


let pressedKey: string = '';

document.addEventListener('keydown', event => pressedKey = event.key);

export const markSquare = (
  sourceMatrix: any[], 
  sourceMatrixCanvas: string, 
  changeMatrixMethod: Function, 
  note: string, 
  fillColor: string, 
  fillStyle?: string
) => {
  const storeData = store.getState();
  const selectMatrix: any[] = deepCopy(storeData.ui.select.matrix);
  const sourceMatrixCopy: any[] = deepCopy(sourceMatrix);
  let typeOfAction: number | string = pressedKey === creatorConfig.secondOptionKeyCode ? 0 : 1;
  if (
    (fillStyle === 'image' || fillStyle === 'vertexWeight') && 
    pressedKey !== creatorConfig.secondOptionKeyCode
  ) typeOfAction = fillColor;

  const newMatrix: any[] = deepCopy(
    updateMatrixByTheOther(sourceMatrixCopy, selectMatrix, typeOfAction)
  );

  store.dispatch(changeMatrixMethod(newMatrix));
  clearCanvas("mapSelectCanvas", changeMapSelectMatrix);

  emptyMapCanvasCtx(sourceMatrixCanvas);
  colorBasedOnMatrix(newMatrix, sourceMatrixCanvas, fillColor, fillStyle);

  setActionNote(note);

  // clear pressedKey. Duration is necessary due to 
  // pressing key for a while after running setBlockSquares
  setTimeout((): string => pressedKey = '', 250);
};
