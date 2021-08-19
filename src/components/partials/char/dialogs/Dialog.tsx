import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import { IDialog } from '../../../../interfaces/dialogs.interface';
import { changeDialogs } from '../../../../store/actions/charActions';
import { EditDialog } from './EditDialog';
import { EditPlayerDialog } from './EditPlayerDialog';
import charConfig from '../../../../assets/configs/char.config.json';
import { addNotification } from '../../../../scripts/utils/notifications';
import { IStore } from '../../../../interfaces/store.interface';
import { useTranslation } from 'react-i18next';


export const Dialog: React.FC<IDialog> = ({ 
  id, 
  npc, 
  player, 
  validatorFunc = () => { /* do nothing */ },
  connectedDialogs,
  clearValidator = () => { /* do nothing */ },
}) => {
  const { t } = useTranslation(['common', 'char', 'notifications']);
  const [isDialogPopup, setIsDialogPopup] = useState<boolean>(false);
  const [isPlayerPopup, setIsPlayerPopup] = useState<boolean>(false);
  const [playerId, setPlayerId] = useState<string>('');
  const dialogsData = useSelector((state: IStore) => state.char.dialogs);
  const dispatch = useDispatch();

  const deleteDialog = (id: string) => {
    const filteredDialogs = dialogsData.filter(dialog => dialog.id !== id);

    dispatch(changeDialogs(filteredDialogs));
    addNotification(t('notifications:notes.dialogs.delete'));
  };

  const openPlayerPopupHandler = (id: string) => {
    setPlayerId(id);
    setIsPlayerPopup(true);
  };

  return (
    <>
      { isDialogPopup ? ReactDOM.createPortal(
        <EditDialog dialogId={id} isActivePopup={setIsDialogPopup}/>, document.body
      ) : null}
      { isPlayerPopup ? ReactDOM.createPortal(
        <EditPlayerDialog 
          dialogId={id} 
          playerId={playerId} 
          isActivePopup={setIsPlayerPopup}
        />, document.body
      ) : null}
      <div 
        className={`
          dialog
          ${connectedDialogs?.includes(id) ? 'dialog--active' : ''}
          ${connectedDialogs?.includes(`${charConfig.invalidPrefix}${id}`) ? 'dialog--error' : ''}
        `}
        onMouseEnter={() => validatorFunc(id)}
        onMouseLeave={() => clearValidator()}
      >
        <div 
          className="dialog__npc"
          onClick={() => setIsDialogPopup(true)}
        >
          <p> 
            <span className="t-paragraph5Light"> 
              { t('common:id') } 
            </span> { id } 
          </p>
          <p> 
            <span className="t-paragraph5Light">
              { t('char:dialogs.npcDialog') } 
            </span> { npc } 
          </p>
        </div>
        { 
          player.map(dialogData => {
            return (
              <div 
                className="dialog__playerDialog" 
                key={dialogData.id}
                onClick={() => openPlayerPopupHandler(dialogData.id)}
              >
                <p> 
                  <span className="t-paragraph5Light"> 
                    { t('char:dialogs.playerId') }
                  </span> { dialogData.id } 
                </p>
                <p> 
                  <span className="t-paragraph5Light"> 
                    { t('char:dialogs.playerDialog') }
                  </span> { dialogData.dialog } 
                </p>
                {
                  dialogData.action !== '' ? (
                    <p> 
                      <span className="t-paragraph5Light"> 
                        { t('char:dialogs.action') }
                      </span> { dialogData.action } 
                    </p>
                  ) : null
                }
                {
                  dialogData.condition !== '' ? (
                    <p> 
                      <span className="t-paragraph5Light"> 
                        { t('char:dialogs.condition') }
                      </span> { dialogData.condition } 
                    </p>
                  ) : null
                }
                <p> 
                  <span className="t-paragraph5Light"> 
                    { t('char:dialogs.next') }
                  </span> { dialogData.next } 
                </p>
              </div>
            );
          })
        }
        <div 
          className="g-exitBtn g-exitBtn--dialog"
          onClick={() => deleteDialog(id)}
        > </div>
      </div>
    </>
  );
};