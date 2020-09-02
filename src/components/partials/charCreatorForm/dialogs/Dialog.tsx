import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import { IDialog } from '../../../../interfaces/dialogs.interface';
import { changeDialogs } from '../../../../store/actions/charActions';
import { EditDialog } from './EditDialog';
import { EditPlayerDialog } from './EditPlayerDialog';
import charConfig from '../../../../assets/configs/charConfig.json';
import { ContentContext } from '../../../../Template';
import { addNotification } from '../../../../assets/scripts/notifications';
import { IStore } from '../../../../interfaces/store.interface';


export const Dialog: React.FC<IDialog> = ({ 
  id, 
  npc, 
  player, 
  validatorFunc=():void=>{},
  connectedDialogs,
  clearValidator=():void=>{}
}) => {
  const { char, notifications } = useContext(ContentContext);
  const [isDialogPopup, setIsDialogPopup] = useState<boolean>(false);
  const [isPlayerPopup, setIsPlayerPopup] = useState<boolean>(false);
  const [playerId, setPlayerId] = useState<string>('');
  const dialogsData: IDialog[] = useSelector((state: IStore) => state.char.dialogs);
  const dispatch: Function = useDispatch();

  const deleteDialog = (id: string): void => {
    const filteredDialogs = dialogsData.filter(dialog => {
      return dialog.id !== id;
    });

    dispatch(changeDialogs(filteredDialogs));
    addNotification(notifications?.dialogs?.delete);
  };

  const openPlayerPopupHandler = (id: string): void => {
    setPlayerId(id);
    setIsPlayerPopup(true);
  };

  return (
    <>
      { isDialogPopup ? ReactDOM.createPortal(
        <EditDialog dialogId={id} closePopup={setIsDialogPopup}/>, document.body
      ) : null}
      { isPlayerPopup ? ReactDOM.createPortal(
        <EditPlayerDialog 
          dialogId={id} 
          playerId={playerId} 
          closePopup={setIsPlayerPopup}
        />, document.body
      ) : null}
      <div 
        className={`
          dialog
          ${connectedDialogs?.includes(id) ? 'dialog--active' : ''}
          ${connectedDialogs?.includes(`${charConfig.invalidPrefix}${id}`) ? 'dialog--error' : ''}
        `}
        onMouseEnter={():void => validatorFunc(id)}
        onMouseLeave={():void => clearValidator()}
      >
        <div 
          className="dialog__npc"
          onClick={():void => setIsDialogPopup(true)}
        >
          <p> 
            <span className="t-paragraph5Light"> 
              { char?.dialog?.dialogId }
            </span> { id } 
          </p>
          <p> 
            <span className="t-paragraph5Light">
              { char?.dialog?.npcDialog }
            </span> { npc } 
          </p>
        </div>
        { 
          player.map(dialogData => {
            return (
              <div 
                className="dialog__playerDialog" 
                key={dialogData.id}
                onClick={():void => openPlayerPopupHandler(dialogData.id)}
              >
                <p> 
                  <span className="t-paragraph5Light"> 
                    { char?.dialog?.playerId }
                  </span> { dialogData.id } 
                </p>
                <p> 
                  <span className="t-paragraph5Light"> 
                    { char?.dialog?.playerDialog }
                  </span> { dialogData.dialog } 
                </p>
                {
                  dialogData.action !== '' ? (
                    <p> 
                      <span className="t-paragraph5Light"> 
                        { char?.dialog?.action }
                      </span> { dialogData.action } 
                    </p>
                  ) : null
                }
                {
                  dialogData.condition !== '' ? (
                    <p> 
                      <span className="t-paragraph5Light"> 
                        { char?.dialog?.condition }
                      </span> { dialogData.condition } 
                    </p>
                  ) : null
                }
                <p> 
                  <span className="t-paragraph5Light"> 
                    { char?.dialog?.next }
                  </span> { dialogData.next } 
                </p>
              </div>
            );
          })
        }
        <div 
          className="g-exitBtn g-exitBtn--dialog"
          onClick={():void => deleteDialog(id)}
        > </div>
      </div>
    </>
  );
};