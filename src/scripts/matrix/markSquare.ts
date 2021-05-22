import { store } from '../../index';
import { colorBasedOnMatrix } from './colorBasedOnMatrix';
import { clearCanvas } from '../canvas/clearCanvas';
import { emptyMapCanvasCtx } from '../canvas/emptyMapCanvasCtx';
import { addNotification } from '../utils/notifications';
import { updateMatrixByTheOther } from './updateMatrixByTheOther';
import { deepCopy } from '../utils/deepCopy';
import mapConfig from '../../assets/configs/map.config.json';
import { changeMapSelectMatrix } from '../../store/actions/uiActions';
import { IStore } from '../../interfaces/store.interface';
import { Canvas } from '../../models/canvas.model';
import { MatrixFillColor } from '../../models/matrixFillColor.model';


let pressedKey: string | null = null;

document.addEventListener('keydown', event => pressedKey = event.key);
document.addEventListener('keyup', () => pressedKey = null);

export const markSquare = (
  sourceMatrix: Array<[]>, 
  sourceMatrixCanvas: string, 
  changeMatrixMethod: (...args: any[]) => void, 
  note: string | null | undefined, 
  fillColor: string, 
  fillStyle?: string
) => {
  if (!sourceMatrix || sourceMatrix.length === 0) {
    throw new Error('Cannot mark square on empty matrix');
  }

  const storeData: IStore = store.getState();
  const selectMatrix: Array<[]> = deepCopy(storeData.ui.select.matrix);
  const sourceMatrixCopy: Array<[]> = deepCopy(sourceMatrix);
  let typeOfAction: number | string = pressedKey === mapConfig.secondOptionKeyCode ? 0 : 1;
  
  if (
    (fillStyle === MatrixFillColor.image || fillStyle === MatrixFillColor.vertexWeight) && 
    pressedKey !== mapConfig.secondOptionKeyCode
  ) typeOfAction = fillColor;

  const newMatrix: Array<[]> = deepCopy(
    updateMatrixByTheOther(sourceMatrixCopy, selectMatrix, typeOfAction)
  );

  store.dispatch(changeMatrixMethod(newMatrix));
  clearCanvas(Canvas.select, changeMapSelectMatrix);

  emptyMapCanvasCtx(sourceMatrixCanvas);
  colorBasedOnMatrix(newMatrix, sourceMatrixCanvas, fillColor, fillStyle);

  if (note) addNotification(note);

  pressedKey = null;
};
