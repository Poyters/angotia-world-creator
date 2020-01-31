import React, { useState } from 'react';
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


const Dialog: React.FC<IDialog> = ({ 
  id, 
  npc, 
  player, 
  validatorFunc=():void=>{},
  connectedDialogs,
  clearValidator=():void=>{}
}) => {
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
            Dialog ID: 
          </span> { id } 
        </p>
        <p onClick={():void => setIsDialogPopup(true)}> 
          <span className="t-paragraph5Light">
            NPC dialog: 
          </span> { npc } 
        </p>
        { 
          player.map((dialogData) => {
            return (
              <div 
                className="dialog__playerDialog" 
                key={dialogData.id}
                onClick={():void => openPlayerPopupHandler(dialogData.id)}
              >
                <p> 
                  <span className="t-paragraph5Light"> 
                    Player dialog ID: 
                  </span> { dialogData.id } 
                </p>
                <p> 
                  <span className="t-paragraph5Light"> 
                    Player dialog: 
                  </span> { dialogData.dialog } 
                </p>
                {
                  dialogData.action !== null ? (
                    <p> 
                      <span className="t-paragraph5Light"> 
                        Action: 
                      </span> { dialogData.action } 
                    </p>
                  ) : null
                }
                <p> 
                  <span className="t-paragraph5Light"> 
                    Next dialog: 
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