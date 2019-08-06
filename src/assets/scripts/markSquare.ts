import { store } from '../../App';

//Import scripts
import { colorBasedOnMatrix } from './colorBasedOnMatrix';
import { clearCanvas } from './clearCanvas';
import { emptyMapCanvasCtx } from './map';
import { setActionNote } from './notifications';
import { updateMatrixByTheOther, deepCopy } from './matrix';

//Import configs
import creatorConfig from '../configs/creatorConfig.json';

//Import actions
import { changeMapSelectMatrix } from '../../redux/actions/mapActions';
import { changeMapPassageMatrix } from '../../redux/actions/mapActions';


let pressedKey: number = -1;

document.addEventListener('keydown', event => pressedKey = event.keyCode);

export const markSquare = (sourceMatrix: any[], sourceMatrixCanvas: string, note: string, fillColor: string, fillStyle?: string) => {
  const storeData = store.getState();
  const selectMatrix: any[] = deepCopy(storeData.map.select.matrix);
  const sourceMatrixCopy: any[] = deepCopy(sourceMatrix);
  const typeOfAction: number = pressedKey === creatorConfig.secondOptionKeyCode ? 0 : 1; //secondOptionKeyCode determines second type of used action, eg at this example, you can add passage, but when you press key wich has the same code as secondOptionKeyCode, you delete selected passage
  const newPassageMatrix: any[] = deepCopy(updateMatrixByTheOther(sourceMatrixCopy, selectMatrix, typeOfAction));
  
  store.dispatch(changeMapPassageMatrix(newPassageMatrix));
  clearCanvas("mapSelectCanvas", changeMapSelectMatrix);

  emptyMapCanvasCtx(sourceMatrixCanvas);
  colorBasedOnMatrix(newPassageMatrix, sourceMatrixCanvas, fillColor, fillStyle);
  setActionNote(note);

  setTimeout(() => pressedKey = -1, 500) //clear pressedKey. Duration is necessary due to pressing key for a while after running setBlockSquares
}
