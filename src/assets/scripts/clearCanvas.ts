import { store } from '../../App';

//Import scripts
import { setActionNote } from './notifications';
import { generateEmptyMapMatrix, emptyMapCanvasCtx } from './map';


export const clearCanvas = (canvasId: string, changeMapFunc: Function) => {
    const newMatrix: Array<any> = generateEmptyMapMatrix();
    emptyMapCanvasCtx(canvasId); //clear select canvas
		
    store.dispatch(changeMapFunc(newMatrix));
    setActionNote(`${canvasId} has been cleared`);
}