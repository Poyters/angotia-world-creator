import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionInputField } from '../../ActionInputField';
import { AddTemponaryPlayerDialog } from './AddTemponaryPlayerDialog';
import { changeDialogs, changeTemponaryPlayerDialogs } from '../../../../store/actions/charActions';
import { IDialog, IPlayer } from '../../../../interfaces/dialogs.interface';
import { ContentContext } from '../../../../Template';
import { addNotification } from '../../../../scripts/utils/notifications';
import { IStore } from '../../../../interfaces/store.interface';
import { IDialogPopup } from '../../../../interfaces/dialogs.interface';


export const EditDialog: React.FC<IDialogPopup> = ({ dialogId, isActivePopup }) => {
  const { char, notifications } = useContext(ContentContext);
  const dialogsData: IDialog[] = useSelector((state: IStore) => state.char.dialogs);
  const dialogData: IDialog | undefined= dialogsData
    .find((dialog: IDialog): boolean => dialog.id === dialogId);
  const dispatch = useDispatch();
  const [npcText, setNpcText] = useState<string>(dialogData?.npc || '');
  const [npcTextErr, setNpcTextErr] = useState<boolean>(false);
  const temponaryPlayerDialogs: IPlayer[] = useSelector(
    (state: IStore) => state.char.temponaryPlayerDialogs
  ) || [];

  useEffect((): void => {
    if (
      npcText.length === 0 || 
      !npcText
    ) {
      setNpcTextErr(true);
    }
    else setNpcTextErr(false);
  }, [npcText]);

  useEffect(() => {
    const keyPressHandler = (event): void => {
      if (event.key === 'Escape') isActivePopup(false);
      else if (event.key === 'Enter') submitHandler();
    };

    document.addEventListener('keydown', keyPressHandler);
    return () => {
      document.removeEventListener('keydown', keyPressHandler);
    };
  });

  const submitHandler = (): void => {
    if (npcTextErr) return;

    const updatedDialogs = dialogsData.map((dialog: IDialog) => {
      if (dialog.id === dialogId) {
        dialog = {
          ...dialog,
          npc: npcText,
          player: [
            ...dialog.player,
            ...temponaryPlayerDialogs
          ]
        };
      }

      return dialog;
    });

    dispatch(changeDialogs(updatedDialogs));
    dispatch(changeTemponaryPlayerDialogs([]));
    isActivePopup(false);
    addNotification(notifications?.dialogs?.edit);
  };

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup insertPopup--dialog"> 
        <div 
          className="g-exitBtn g-exitBtn--popup"
          onClick={():void => isActivePopup(false)}
        > </div>
        <header className="insertPopup__header t-paragraph3Light">
          { char?.dialogPopup?.edit }
        </header>
        <ActionInputField
          label={char?.dialogPopup?.id}
          inputValue={dialogId}
          inputDisabled={true}
        />
        <label className="insertPopup__label t-paragraph6Light">
          { char?.dialogPopup?.npcDialog }
        </label>
        <textarea
          value={npcText} 
          onChange={e => setNpcText(e.target.value)}
        />
        {
          (npcTextErr) ? (
            <span className="insertPopup--error">
              { char?.dialogPopup?.npcTextErr }
            </span>
          ) : null
        }   

        <AddTemponaryPlayerDialog/>  

        <button 
          type="submit" 
          className="insertPopup__submit t-paragraphLight" 
          onClick={submitHandler} 
          disabled={npcTextErr}
        > 
          { char?.dialogPopup?.submit } 
        </button>
      </div>
    </div>
  );
};