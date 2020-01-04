import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import components
import CharInputField from '../CharInputField';
import PlayerDialog from './PlayerDialog';

//Import actions
import { changeDialogs } from '../../../../redux/actions/charActions';

//Import interfaces
import { INewDialog } from '../../../../assets/interfaces/dialogsInterfaces';

interface IMonologPopup {
  togglePopup: Function
}

const MonologPopup: React.FC<IMonologPopup> = ({ togglePopup }) => {
  const dialogId = Math.random();
  const [npcText, setNpcText] = useState<string>('');
  const [npcTextErr, setNpcTextErr] = useState<boolean>(false);
  const dialogsData: any[] = useSelector(state => state.char.dialogs);
  const dispatch: Function = useDispatch();
  const [playerDialogs, setPlayerDialogs] = useState<any>(0);


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
      player: [
        {
          id: 52352,
          dialog: 'Mauris atiqueipiscing elit. ',
          next: 2,
          action: null
        }
      ]
    });

    dispatch(changeDialogs(dialogsData));
  };

  const submitHandler = (): void => {
    insertDialog();
    togglePopup(false);
  };

  const addPlayerDialogHandler = (): void => {
    setPlayerDialogs(playerDialogs + 1);
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
            [...Array(playerDialogs)].map((playerDialog, index) => {
              return <PlayerDialog key={index} />;
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

export default MonologPopup;