import { store } from '../index';
import { generateEmptyMapMatrix, emptyMapCanvasCtx } from './map';


export const clearCanvas = (canvasId: string, changeMapFunc: Function) => {
    const emptyMatrix: Array<[]> = generateEmptyMapMatrix();
    emptyMapCanvasCtx(canvasId); //clear select canvas
		
    store.dispatch(changeMapFunc([...emptyMatrix]));
};