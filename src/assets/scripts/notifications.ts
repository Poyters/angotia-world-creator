import { store } from '../../App';

//Import actions
import { setNotification } from '../../redux/actions/uiActions';


export const setActionNote = (note: string) => {
    store.dispatch(setNotification(note));
}