import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import interfaces
import { IDialog } from '../../../../assets/interfaces/dialogsInterfaces';

//Import actions
import { changeDialogs } from '../../../../redux/actions/charActions';


const Dialog: React.FC<IDialog> = ({ 
  id, 
  npc, 
  player, 
  validatorFunc=():void=>{},
  connectedDialogs,
  clearValidator=():void=>{}
}) => {
  const dialogsData: any[] = useSelector(state => state.char.dialogs);
  const dispatch: Function = useDispatch();

  const dialogStyle = {
    borderColor: connectedDialogs.includes(id) ? '#27427c' : '#262d38',
    backgroundColor: connectedDialogs.includes(`invalid_${id}`) ? 
      'rgba(175, 26, 26, 0.3)' : 'inherit'
  };

  const deleteDialog = (id: number): void => {
    const filteredDialogs = dialogsData.filter(dialog => {
      if (dialog.id !== id) return dialog;
    });

    dispatch(changeDialogs(filteredDialogs));
  };

  return (
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
      <p> 
        <span className="t-paragraph5Light">
          NPC dialog: 
        </span> { npc } 
      </p>
      { 
        player.map((dialogData, index) => {
          return <div className="dialog__playerDialog" key={index}>
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
            <p> 
              <span className="t-paragraph5Light"> 
                Next dialog: 
              </span> { dialogData.next } 
            </p>
          </div>;
        })
      }
      <div 
        className="g-exitBtn g-exitBtn--dialog"
        onClick={():void => deleteDialog(id)}
      > </div>
    </div>
  );
};


export default Dialog;