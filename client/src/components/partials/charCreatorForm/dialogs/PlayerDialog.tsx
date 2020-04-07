import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionInputField } from '../../ActionInputField';
import { changeTemponaryPlayerDialogs } from '../../../../redux/actions/charActions';
import { IPlayer } from '../../../../assets/interfaces/dialogsInterfaces';
import { ContentContext } from '../../../../Template';


interface IPlayerDialog {
  playerId: string
}

export const PlayerDialog: React.FC<IPlayerDialog> = ({ playerId }) => {
  const { char } = useContext(ContentContext);
  const [newDialogText, setNewDialogText] = useState<string>('');
  const [next, setNext] = useState<string>('');
  const [action, setAction] = useState<string>('');
  const [condition, setCondition] = useState<string>('');
  const dispatch: Function = useDispatch();
  const temponaryPlayerDialogs: IPlayer[] = useSelector(state => state.char.temponaryPlayerDialogs);

  const updateDialog = (): void => {
    temponaryPlayerDialogs.filter(data => {
      if (data.id === playerId) {
        data.dialog = newDialogText;
        data.next = parseInt(next);
        data.action = action;
        data.condition = condition;
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
      <ActionInputField
        label={char.dialog.playerId}
        inputValue={playerId}
        inputDisabled={true}
      />
      <label className="insertPopup__label t-paragraph6Light">
        { char.dialog.playerDialog }
      </label>
      <textarea
        value={newDialogText} 
        onChange={e => setNewDialogText(e.target.value)}
        onMouseLeave={updateDialog}
      />
      <label className="insertPopup__label t-paragraph6Light">
        { char.dialog.action }
      </label>
      <input 
        onChange={e => setAction(e.target.value)}
        onMouseLeave={updateDialog}
      />
      <label className="insertPopup__label t-paragraph6Light">
        { char.dialog.next }
      </label>
      <input 
        onChange={e => setNext(e.target.value)}
        onMouseLeave={updateDialog}
      />
      <label className="insertPopup__label t-paragraph6Light">
        { char.dialog.condition }
      </label>
      <input 
        onChange={e => setCondition(e.target.value)}
        onMouseLeave={updateDialog}
      />
      <div 
        className="g-exitBtn g-exitBtn--playerDialog"
        onClick={deleteDialog}
      > </div>
    </section>
  );
};