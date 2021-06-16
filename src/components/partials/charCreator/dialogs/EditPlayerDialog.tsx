import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionInputField } from '../../ActionInputField';
import { changeDialogs } from '../../../../store/actions/charActions';
import { addNotification } from '../../../../scripts/utils/notifications';
import { IStore } from '../../../../interfaces/store.interface';
import { IEditPlayerDialog } from '../../../../interfaces/dialogs.interface';
import { useTranslation } from 'react-i18next';


export const EditPlayerDialog: React.FC<IEditPlayerDialog> = (
  { dialogId, playerId, isActivePopup }
) => {
  const { t } = useTranslation(['char', 'common']);
  const dialogsData = useSelector((state: IStore) => state.char.dialogs);
  const dialogData = dialogsData.find(dialog => dialog.id === dialogId);
  const playerData = dialogData?.player?.find(dialog => dialog.id === playerId);
  const dispatch = useDispatch();
  const [dialog, setDialog] = useState<string>(playerData?.dialog || '');
  const [dialogErr, setDialogErr] = useState<boolean>(false);
  const [next, setNext] = useState<string>(playerData?.next || '');
  const [action, setAction] = useState<string>(playerData?.action || '');
  const [condition, setCondition] = useState<string>(playerData?.condition || '');

  useEffect(() => {
    if (
      dialog.length === 0 || 
      !dialog
    ) {
      setDialogErr(true);
    }
    else setDialogErr(false);
  }, [dialog]);

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

  const submitHandler = (): void => {
    if (!dialogData || dialogErr) return;

    const playerDataId = dialogData.player.findIndex(playerDialog => playerDialog.id === playerId);

    const updatedDialogs = dialogsData.map(dlg => {
      if (dlg.id === dialogId) {
        dlg.player[playerDataId] = {
          ...dlg.player[playerDataId],
          dialog,
          next,
          action,
          condition
        };
      }

      return dlg;
    });

    dispatch(changeDialogs(updatedDialogs));
    isActivePopup(false);
    addNotification('notifications?.dialogs?.player?.edit');
  };

  const deleteDialog = (id: string) => {
    const updatedDialogs = dialogsData.map(dialog => {
      if (dialog.id === dialogId) {
        dialog.player = dialog.player.filter(player => {
          return player.id !== id;
        });
      }

      return dialog;
    });

    dispatch(changeDialogs(updatedDialogs));
    isActivePopup(false);
    addNotification('notifications?.dialogs?.player?.delete');
  };

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup insertPopup--dialog">
        <div
          className="g-deleteBtn"
          onClick={() => deleteDialog(playerId)}
        > 
          {t('common:delete')}
        </div> 
        <div 
          className="g-exitBtn g-exitBtn--popup"
          onClick={() => isActivePopup(false)}
        > </div>

        <header className="insertPopup__header t-paragraph3Light">
          { t('char:dialogs.editPlayerDialog') }
        </header>
        <ActionInputField
          label={t('common:autoId')} 
          inputValue={playerId}
          inputDisabled={true}
        />
        <label className="insertPopup__label t-paragraph6Light">
          { t('char:dialogs.playerDialog') }
        </label>
        <textarea
          value={dialog} 
          onChange={e => setDialog(e.target.value)}
        />
        {
          (dialogErr) ? (
            <span className="insertPopup--error">
              { t('char:dialogs.error') }
            </span>
          ) : null
        }   

        <label className="insertPopup__label t-paragraph6Light">
          { t('char:dialogs.action') }
        </label>
        <input
          value={action} 
          onChange={e => setAction(e.target.value)}
        /> 

        <label className="insertPopup__label t-paragraph6Light">
          { t('char:dialogs.next') }
        </label>
        <input
          value={next} 
          onChange={e => setNext(e.target.value)}
        />  

        <label className="insertPopup__label t-paragraph6Light">
          { t('char:dialogs.condition') }
        </label>
        <input
          value={condition} 
          onChange={e => setCondition(e.target.value)}
        />  

        <button 
          type="submit" 
          className="insertPopup__submit t-paragraphLight" 
          onClick={submitHandler} 
          disabled={dialogErr}
        > 
          { t('common:submit') } 
        </button>
      </div>
    </div>
  );
};