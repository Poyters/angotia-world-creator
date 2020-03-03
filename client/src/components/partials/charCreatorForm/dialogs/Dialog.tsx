import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';

//Import interfaces
import { IDialog } from '../../../../assets/interfaces/dialogsInterfaces';

//Import actions
import { changeDialogs } from '../../../../redux/actions/charActions';

//Import components
import EditDialog from './EditDialog';
import EditPlayerDialog from './EditPlayerDialog';

//Import configs
import charConfig from '../../../../assets/configs/charConfig.json';

//Import contexts
import { ContentContext } from '../../../../Template';

//Import scripts
import { setActionNote } from '../../../../assets/scripts/notifications';


const Dialog: React.FC<IDialog> = ({ 
  id, 
  npc, 
  player, 
  validatorFunc=():void=>{},
  connectedDialogs,
  clearValidator=():void=>{}
}) => {
  const { char } = useContext(ContentContext);
  const [isDialogPopup, setIsDialogPopup] = useState<boolean>(false);
  const [isPlayerPopup, setIsPlayerPopup] = useState<boolean>(false);
  const [playerId, setPlayerId] = useState<string>('');
  const dialogsData: IDialog[] = useSelector(state => state.char.dialogs);
  const dispatch: Function = useDispatch();

  const dialogStyle = {
    borderColor: connectedDialogs.includes(id) ? '#27427c' : '#262d38',
    backgroundColor: connectedDialogs.includes(`${charConfig.invalidPrefix}${id}`) ? 
      'rgba(175, 26, 26, 0.3)' : 'inherit'
  };

  const deleteDialog = (id: string): void => {
    const filteredDialogs = dialogsData.filter(dialog => {
      if (dialog.id !== id) return dialog;
    });

    dispatch(changeDialogs(filteredDialogs));
    setActionNote('Deleted dialog');
  };

  const openPlayerPopupHandler = (id: string): void => {
    setPlayerId(id);
    setIsPlayerPopup(true);
  };

  return (
    <React.Fragment>
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
        className="dialog" 
        onMouseEnter={():void => validatorFunc(id)}
        onMouseLeave={():void => clearValidator()}
        style={dialogStyle}
      >
        <p> 
          <span className="t-paragraph5Light"> 
            { char.dialog.dialogId }
          </span> { id } 
        </p>
        <p onClick={():void => setIsDialogPopup(true)}> 
          <span className="t-paragraph5Light">
            { char.dialog.npcDialog }
          </span> { npc } 
        </p>
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
                    { char.dialog.playerId }
                  </span> { dialogData.id } 
                </p>
                <p> 
                  <span className="t-paragraph5Light"> 
                    { char.dialog.playerDialog }
                  </span> { dialogData.dialog } 
                </p>
                {
                  dialogData.action !== '' ? (
                    <p> 
                      <span className="t-paragraph5Light"> 
                        { char.dialog.action }
                      </span> { dialogData.action } 
                    </p>
                  ) : null
                }
                {
                  dialogData.condition !== '' ? (
                    <p> 
                      <span className="t-paragraph5Light"> 
                        { char.dialog.condition }
                      </span> { dialogData.condition } 
                    </p>
                  ) : null
                }
                <p> 
                  <span className="t-paragraph5Light"> 
                    { char.dialog.next }
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
    </React.Fragment>
  );
};


export default Dialog;