import { store } from '../../App';

//Import actions
import { setNotification } from '../../redux/actions/uiActions';

//Import configs
import creatorConfig from '../configs/creatorConfig.json';


export const setActionNote = (note: string, messageType?: string) => {
    const notifications: any = document.getElementById('notifications');

    store.dispatch(setNotification(note));

    switch(messageType) {
        case 'warning':
            notifications.style.color = '#af1a1a';
            setTimeout(
                () => notifications.style.color = '#bbb', creatorConfig.actionNoteDelay + 500
            ); //TODO: replace 500 by animation time
        break;
    }
    
};