import { store } from '../../App';

//Import scripts
import { colorBasedOnMatrix } from './colorBasedOnMatrix';
import { clearCanvas } from './clearCanvas';
import { emptyMapCanvasCtx } from './map';
import { setActionNote } from './notifications';
import { updateMatrixByTheOther } from './matrix';

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
  colorBasedOnMatrix(newPassageMatrix, 'mapPassageCanvas', '#fff');
  setActionNote('Selected fields had been blocked');

  setTimeout(() => pressedKey = -1, 500) //clear pressedKey. Duration is necessary due to pressing key for a while after running setBlockSquares
}
