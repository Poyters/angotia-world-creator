import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import components
import CharInputField from '../CharInputField';
import PlayerDialog from './PlayerDialog';

//Import actions
import { changeDialogs, changeTemponaryPlayerDialogs } from '../../../../redux/actions/charActions';


interface IDialogPopup {
  togglePopup: Function
}

const DialogPopup: React.FC<IDialogPopup> = ({ togglePopup }) => {
  const dialogId = Math.random();
  const [npcText, setNpcText] = useState<string>('');
  const [npcTextErr, setNpcTextErr] = useState<boolean>(false);
  const dialogsData: any[] = useSelector(state => state.char.dialogs);
  const dispatch: Function = useDispatch();
  const temponaryPlayerDialogs: any[] = useSelector(state => state.char.temponaryPlayerDialogs);

  useEffect((): void => {
    if (
      npcText.length === 0 || 
      !npcText
    ) {
      setNpcTextErr(true);
    }
    else setNpcTextErr(false);
  }, [npcText]);

  const insertDialog = (): void => {
    dialogsData.push({
      id: dialogId,
      npc: npcText,
      player: temponaryPlayerDialogs
    });

    dispatch(changeDialogs(dialogsData));
  };

  const submitHandler = (): void => {
    insertDialog();
    togglePopup(false);
    dispatch(changeTemponaryPlayerDialogs([]));
  };

  const addPlayerDialogHandler = (): void => {
    const playerDialogId = Math.random();
    const newDialogs = [
      ...temponaryPlayerDialogs,
      {
        id: playerDialogId,
        dialog: '',
        next: -1,
        action: null
      }
    ];

    console.log(newDialogs);

    dispatch(changeTemponaryPlayerDialogs(newDialogs));
  };

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup insertPopup--dialog"> 
        <div 
          className="g-exitBtn g-exitBtn--popup"
          onClick={():void => togglePopup(false)}
        > </div>
        <header className="insertPopup__header t-paragraph3Light">
          Add new dialog
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

export default DialogPopup;