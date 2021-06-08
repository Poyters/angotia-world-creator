import { store } from '../../index';
import { clearCanvasContex } from './clearCanvasContex';
import { generateEmptyMatrix } from '../matrix/generateEmptyMatrix';
import { log } from '../utils/log';


export const clearCanvas = (canvasId: string, changeMapFunc) => {
    log('CLEAR_CANVAS', { canvasId });
    const emptyMatrix: Array<[]> = generateEmptyMatrix();
    clearCanvasContex(canvasId); //clear select canvas
		
    store.dispatch(changeMapFunc([...emptyMatrix]));
};