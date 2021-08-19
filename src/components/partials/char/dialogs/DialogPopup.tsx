import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionInputField } from '../../ActionInputField';
import { AddTemponaryPlayerDialog } from './AddTemponaryPlayerDialog';
import { changeDialogs, changeTemponaryPlayerDialogs } from '../../../../store/actions/charActions';
import { addNotification } from '../../../../scripts/utils/notifications';
import { IStore } from '../../../../interfaces/store.interface';
import { IDialogPopup } from '../../../../interfaces/dialogs.interface';
import { useTranslation } from 'react-i18next';


export const DialogPopup: React.FC<IDialogPopup> = ({ isActivePopup, dialogId }) => {
  const { t } = useTranslation(['char', 'common', 'notifications']);
  const [npcText, setNpcText] = useState<string>('');
  const [npcTextErr, setNpcTextErr] = useState<boolean>(false);
  const [playerDialogErr, setPlayerDialogErr] = useState<boolean>(false);
  const dialogsData = useSelector((state: IStore) => state.char.dialogs);
  const dispatch = useDispatch();
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
    if (
      temponaryPlayerDialogs.length === 0 || 
      !temponaryPlayerDialogs
    ) {
      setPlayerDialogErr(true);
    }
    else setPlayerDialogErr(false);
  }, [temponaryPlayerDialogs]);


  useEffect(() => {
    const keyPressHandler = (event) => {
      if (event.key === 'Escape') closePopupHandler();
      else if (event.key === 'Enter') submitHandler();
    };

    document.addEventListener('keydown', keyPressHandler);
    return () => {
      document.removeEventListener('keydown', keyPressHandler);
    };
  });

  const insertDialog = () => {
    dialogsData.push({
      id: dialogId,
      npc: npcText,
      connectedDialogs: [],
      player: temponaryPlayerDialogs
    });

    dispatch(changeDialogs(dialogsData));
    addNotification(t('notifications:notes.dialogs.add'));
  };

  const submitHandler = () => {
    if (npcTextErr) return;

    insertDialog();
    isActivePopup(false);
    dispatch(changeTemponaryPlayerDialogs([]));
  };

  const closePopupHandler = () => {
    isActivePopup(false);
    dispatch(changeTemponaryPlayerDialogs([]));
  };

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup insertPopup--dialog"> 
        <div 
          className="g-exitBtn g-exitBtn--popup"
          onClick={closePopupHandler}
        > </div>
        <header className="insertPopup__header insertPopup__header--dialog t-paragraph3Light">
          { t('char:dialogs.create') }
        </header>
        <ActionInputField
          label={t('common:autoId')} 
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
        {
          (playerDialogErr) ? (
            <span className="insertPopup--error">
              { t('char:dialogs.lackOfPlayerDialogs') }
            </span>
          ) : null
        } 

        <button 
          type="submit" 
          className="insertPopup__submit t-paragraphLight" 
          onClick={() => submitHandler()} 
          disabled={npcTextErr || playerDialogErr}
        > 
          { t('common:submit') }
        </button>
      </div>
    </div>
  );
};