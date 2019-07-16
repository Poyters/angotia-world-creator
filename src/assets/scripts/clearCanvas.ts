import { store } from '../../App';

//Import scripts
import { setActionNote } from './notifications';
import { generateEmptyMapMatrix, emptyMapCanvasCtx } from './map';


export const clearCanvas = (canvasId: string, changeMapFunc: Function) => {
    const emptyMatrix: Array<any> = generateEmptyMapMatrix();
    emptyMapCanvasCtx(canvasId); //clear select canvas
		
    store.dispatch(changeMapFunc(emptyMatrix));
    setActionNote(`${canvasId} has been cleared`);
    console.log(store.getState().map.select.matrix)
}