import { store } from '../../App';

//Import scripts
import { generateEmptyMapMatrix, emptyMapCanvasCtx } from './map';


export const clearCanvas = (canvasId: string, changeMapFunc: Function) => {
    const emptyMatrix: any[] = generateEmptyMapMatrix();
    emptyMapCanvasCtx(canvasId); //clear select canvas
		
    store.dispatch(changeMapFunc([...emptyMatrix]));
}