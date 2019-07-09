import { store } from '../../App';

//Import actions
import { changeMapSelectMatrix } from '../../redux/actions/mapActions';

//Import scripts
import { setActionNote } from './notifications';
import { generateEmptyMapMatrix, emptyMapCanvasCtx } from './map';


export const clearCanvas = (canvasId: string) => {
    const newMatrix: Array<any> = generateEmptyMapMatrix();
    emptyMapCanvasCtx(canvasId); //clear select canvas
		
    store.dispatch(changeMapSelectMatrix(newMatrix));
    setActionNote(`${canvasId} has been cleared`);
}