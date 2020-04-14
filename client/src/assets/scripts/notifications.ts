import { store } from '../../index';
import { setNotification } from '../../store/actions/uiActions';
import creatorConfig from '../configs/creatorConfig.json';


export const setActionNote = (note: string, messageType?: string) => {
  const notifications: any = document.getElementById('notifications');
  const activeNotes = store.getState().ui.actionNote;
  const copyActiveNotes = [...activeNotes];
  console.log('ui state', store.getState().ui);
  console.log('added note', note);

  if (!notifications) { 
    console.warn('Cannot get notifications placeholder!');
    return;
  }

  // zna nota
  if (!note) return;

  console.log('activeNotes', copyActiveNotes);
  copyActiveNotes.unshift(note);
  console.log('updatedNotes', copyActiveNotes);

  store.dispatch(setNotification(copyActiveNotes));

  setTimeout(xd1, 5000);
};

function xd1 () {
  const activeNotes = store.getState().ui.actionNote;
  const copyActiveNotes = [...activeNotes];
  copyActiveNotes.pop();

  store.dispatch(setNotification(copyActiveNotes));
};