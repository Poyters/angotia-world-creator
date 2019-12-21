import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import components
import CharInputField from '../CharInputField';

//Import actions
import { changeDialogs } from '../../../../redux/actions/charActions';

interface IMonologPopup {
  togglePopup: Function
}

const MonologPopup: React.FC<IMonologPopup> = ({ togglePopup }) => {
  const dialogId = Math.random();
  const [npcText, setNpcText] = useState<string>('');
  const [npcTextErr, setNpcTextErr] = useState<boolean>(false);
  const dialogsData: any[] = useSelector(state => state.char.dialogs);
  const dispatch: Function = useDispatch();


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

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup"> 
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