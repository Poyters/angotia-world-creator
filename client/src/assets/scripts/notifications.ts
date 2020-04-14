import { store } from '../../index';
import { setNotification } from '../../store/actions/uiActions';
import creatorConfig from '../configs/creatorConfig.json';
import { deepCopy } from './utils/deepCopy';
import { Note } from '../types/notifications';


export const setActionNote = (note: string, messageType?: string) => {
  const activeNotes: Note[] = deepCopy(store.getState().ui.actionNote);

  // A lack of note text
  if (!note) return;

  activeNotes.unshift({
    text: note,
    type: messageType ? messageType : undefined
  });

  store.dispatch(setNotification(activeNotes));

  setTimeout(deleteNote, creatorConfig.notificationTime);
};

function deleteNote () {
  const activeNotes: Note[] = deepCopy(store.getState().ui.actionNote);
  activeNotes.pop();

  store.dispatch(setNotification(activeNotes));
};