import { store } from '../../index';
import { emptyMapCanvasCtx } from './emptyMapCanvasCtx';
import { generateEmptyMatrix } from '../matrix/generateEmptyMatrix';


export const clearCanvas = (canvasId: string, changeMapFunc) => {
    const emptyMatrix: Array<[]> = generateEmptyMatrix();
    emptyMapCanvasCtx(canvasId); //clear select canvas
		
    store.dispatch(changeMapFunc([...emptyMatrix]));
};