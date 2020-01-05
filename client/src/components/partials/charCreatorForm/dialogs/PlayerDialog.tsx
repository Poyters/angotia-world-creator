import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import components
import CharInputField from '../CharInputField';

//Import actions
import { changeTemponaryPlayerDialogs } from '../../../../redux/actions/charActions';


interface IPlayerDialog {
  playerId: number
}

const PlayerDialog: React.FC<IPlayerDialog> = ({ playerId }) => {
  const [newDialogText, setNewDialogText] = useState<string>('');
  const [next, setNext] = useState<string>('');
  const dispatch: Function = useDispatch();
  const temponaryPlayerDialogs: any[] = useSelector(state => state.char.temponaryPlayerDialogs);

  const updateDialog = (): void => {
    temponaryPlayerDialogs.filter(data => {
      if (data.id === playerId) {
        data.dialog = newDialogText;
        data.next = parseInt(next);
      }
    });

    dispatch(changeTemponaryPlayerDialogs(temponaryPlayerDialogs));
  };

  const deleteDialog = (): void => {
    const filteredDialogs = temponaryPlayerDialogs.filter(dialog => {
      if (dialog.id !== playerId) return dialog;
    });

    dispatch(changeTemponaryPlayerDialogs(filteredDialogs));
  };

  return (
    <section className="playerDialog">
      <CharInputField
        label='Player dialog ID'
        inputValue={playerId}
        inputDisabled={true}
      />
      <label className="insertPopup__label t-paragraph6Light">
        Player dialog
      </label>
      <textarea
        value={newDialogText} 
        onChange={e => setNewDialogText(e.target.value)}
        onMouseLeave={updateDialog}
      />
      <label className="insertPopup__label t-paragraph6Light">
        Next dialog
      </label>
      <input 
        onChange={e => setNext(e.target.value)}
        onMouseLeave={updateDialog}
      />
      <div 
        className="g-exitBtn g-exitBtn--playerDialog"
        onClick={deleteDialog}
      > </div>
    </section>
  );
};

export default PlayerDialog;