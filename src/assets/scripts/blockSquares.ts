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
import { changeMapBlockMatrix } from '../../redux/actions/mapActions';


let pressedKey: number = -1;

document.addEventListener('keydown', event => pressedKey = event.keyCode);

export const setBlockSquares = () => {
  const storeData = store.getState();
  const selectMatrix: any[] = deepCopy(storeData.map.select.matrix);
  const blockMatrix: any[] = deepCopy(storeData.map.blockMatrix);
  const typeOfAction: number = pressedKey === creatorConfig.secondOptionKeyCode ? 0 : 1; //secondOptionKeyCode determines second type of used action, eg at this example, you can set block square, but when you press key wich has the same code as secondOptionKeyCode, you unblock selected fields
  const newBlockMatrix: any[] = deepCopy(updateMatrixByTheOther(blockMatrix, selectMatrix, typeOfAction));

  store.dispatch(changeMapBlockMatrix(newBlockMatrix));
  clearCanvas("mapSelectCanvas", changeMapSelectMatrix);

  emptyMapCanvasCtx('mapBlockCanvas');
  colorBasedOnMatrix(newBlockMatrix, 'mapBlockCanvas', creatorConfig.blockSquareColor, 'barrier');
  setActionNote('Selected fields had been blocked');

  setTimeout(() => pressedKey = -1, 500) //clear pressedKey. Duration is necessary due to pressing key for a while after running setBlockSquares
}
