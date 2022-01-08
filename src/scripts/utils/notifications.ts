import { store } from "../../index";
import { setNotification } from "../../store/actions/uiActions";
import appConfig from "../../assets/configs/app.config.json";
import { deepCopy } from "./deepCopy";
import { INote } from "../../interfaces/notifications.interface";

export const addNotification = (note: string, messageType?: string) => {
  const activeNotes: INote[] = deepCopy(store.getState().ui.actionNote);

  // A lack of note text
  if (!note) return;

  activeNotes.unshift({
    text: note,
    type: messageType ? messageType : undefined
  });

  store.dispatch(setNotification(activeNotes));

  setTimeout(deleteNote, appConfig.notificationTime);
};

function deleteNote() {
  const activeNotes: INote[] = deepCopy(store.getState().ui.actionNote);
  activeNotes.pop();

  store.dispatch(setNotification(activeNotes));
}
