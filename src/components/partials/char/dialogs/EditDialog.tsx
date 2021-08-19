import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionInputField } from '../../ActionInputField';
import { AddTemponaryPlayerDialog } from './AddTemponaryPlayerDialog';
import { changeDialogs, changeTemponaryPlayerDialogs } from '../../../../store/actions/charActions';
import { addNotification } from '../../../../scripts/utils/notifications';
import { IStore } from '../../../../interfaces/store.interface';
import { IDialogPopup } from '../../../../interfaces/dialogs.interface';
import { useTranslation } from 'react-i18next';


export const EditDialog: React.FC<IDialogPopup> = ({ dialogId, isActivePopup }) => {
  const { t } = useTranslation(['char', 'common']);
  const dialogsData = useSelector((state: IStore) => state.char.dialogs);
  const dialogData = dialogsData.find(dialog  => dialog.id === dialogId);
  const dispatch = useDispatch();
  const [npcText, setNpcText] = useState<string>(dialogData?.npc || '');
  const [npcTextErr, setNpcTextErr] = useState<boolean>(false);
  const temponaryPlayerDialogs = useSelector(
    (state: IStore) => state.char.temponaryPlayerDialogs
  ) || [];

  useEffect(() => {
    if (
      npcText.length === 0 || 
      !npcText
    ) {
      setNpcTextErr(true);
    }
    else setNpcTextErr(false);
  }, [npcText]);

  useEffect(() => {
    const keyPressHandler = (event) => {
      if (event.key === 'Escape') isActivePopup(false);
      else if (event.key === 'Enter') submitHandler();
    };

    document.addEventListener('keydown', keyPressHandler);
    return () => {
      document.removeEventListener('keydown', keyPressHandler);
    };
  });

  const submitHandler = () => {
    if (npcTextErr) return;

    const updatedDialogs = dialogsData.map(dialog => {
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
    addNotification(t('notifications:notes.dialogs.edit'));
  };

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup insertPopup--dialog"> 
        <div 
          className="g-exitBtn g-exitBtn--popup"
          onClick={() => isActivePopup(false)}
        > </div>
        <header className="insertPopup__header t-paragraph3Light">
          { t('char:dialogs.edit') }
        </header>
        <ActionInputField
          label={t('common:id')} 
          inputValue={dialogId}
          inputDisabled={true}
        />
        <label className="insertPopup__label t-paragraph6Light">
          { t('char:dialogs.npcDialog') }
        </label>
        <textarea
          value={npcText} 
          onChange={e => setNpcText(e.target.value)}
        />
        {
          (npcTextErr) ? (
            <span className="insertPopup--error">
              { t('char:dialogs.npcDialogErr') }
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
          { t('common:submit') } 
        </button>
      </div>
    </div>
  );
};