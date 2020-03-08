import { store } from '../../index';

//Import actions
import { setNotification } from '../../redux/actions/uiActions';

//Import configs
import creatorConfig from '../configs/creatorConfig.json';


export const setActionNote = (note: string, messageType?: string) => {
  const notifications: any = document.getElementById('notifications');

  if (!notifications) { 
    console.warn('Cannot get notifications placeholder!');
    return;
  }

  store.dispatch(setNotification(note));

  switch(messageType) {
    case 'warning':
      notifications.style.color = '#af1a1a';
      setTimeout(
        (): string => notifications.style.color = '#bbb', creatorConfig.actionNoteDelay + 500
      ); // TODO replace 500 by animation time
    break;
  }
};