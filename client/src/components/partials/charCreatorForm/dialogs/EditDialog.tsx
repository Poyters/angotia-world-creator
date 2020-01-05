import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import components
import CharInputField from '../CharInputField';
import PlayerDialog from './PlayerDialog';

//Import actions
import { changeDialogs, changeTemponaryPlayerDialogs } from '../../../../redux/actions/charActions';


interface IEditDialog {
  dialogId: number,
  closePopup: Function
}

const EditDialog: React.FC<IEditDialog> = ({ dialogId, closePopup }) => {
  const dialogsData: any[] = useSelector(state => state.char.dialogs);
  const dispatch: Function = useDispatch();
  const dialogData = dialogsData.filter(dialog => dialog.id = dialogId);
  console.log(dialogData);

  const submitHandler = (): void => {
    closePopup(false);
    dispatch(changeTemponaryPlayerDialogs([]));
  };

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup insertPopup--dialog"> 
        <div 
          className="g-exitBtn g-exitBtn--popup"
          onClick={():void => closePopup(false)}
        > </div>
        <header className="insertPopup__header t-paragraph3Light">
          Edit dialog
        </header>
        <CharInputField
          label='ID - auto generated'
          inputValue={dialogId}
          inputDisabled={true}
        />
        <label className="insertPopup__label t-paragraph6Light">
          Npc dialog
        </label>
        <textarea
          value={npcText} 
          onChange={e => setNpcText(e.target.value)}
        />
        {
          (npcTextErr) ? (
            <span className="insertPopup--error">You need to type npc dialog</span>
          ) : null
        }
        <nav className="playerDialogsHeader">
          <header 
            className="playerDialogsHeader__title t-paragraph5Light"
      
          >
            Player dialogs
          </header>
          <div 
            className="playerDialogsHeader__add t-paragraph5Normal"
            onClick={():void => addPlayerDialogHandler() }
          >
            New Player dialog
          </div>

        </nav>
        
        <div className="playerDialogsWrapper">
          { 
            temponaryPlayerDialogs.map((playerDialog, index) => {
              return <PlayerDialog playerId={playerDialog.id} key={index} />;
            })
          }
        </div>      

        <button 
          type="submit" 
          className="insertPopup__submit t-paragraphLight" 
          onClick={(): void => submitHandler()} 
          disabled={npcTextErr}
        > 
          submit 
        </button>
      </div>
    </div>
  );
};

export default EditDialog;