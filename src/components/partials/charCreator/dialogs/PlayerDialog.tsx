import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionInputField } from '../../ActionInputField';
import { changeTemponaryPlayerDialogs } from '../../../../store/actions/charActions';
import { IStore } from '../../../../interfaces/store.interface';
import { IPlayerDialog } from '../../../../interfaces/dialogs.interface';


export const PlayerDialog: React.FC<IPlayerDialog> = ({ playerId }) => {
  const [newDialogText, setNewDialogText] = useState<string>('');
  const [next, setNext] = useState<string>('');
  const [action, setAction] = useState<string>('');
  const [condition, setCondition] = useState<string>('');
  const dispatch = useDispatch();
  const temponaryPlayerDialogs = useSelector(
    (state: IStore) => state.char.temponaryPlayerDialogs
  ) || [];

  const updateDialog = (): void => {
    temponaryPlayerDialogs.forEach(data => {
      if (data.id === playerId) {
        data.dialog = newDialogText;
        data.next = next;
        data.action = action;
        data.condition = condition;
      }
    });

    dispatch(changeTemponaryPlayerDialogs(temponaryPlayerDialogs));
  };

  const deleteDialog = (): void => {
    const filteredDialogs = temponaryPlayerDialogs.filter(dialog => {
      return dialog.id !== playerId;
    });

    dispatch(changeTemponaryPlayerDialogs(filteredDialogs));
  };

  return (
    <section className="playerDialog">
      <ActionInputField
        label={'char?.dialog?.playerId'}
        inputValue={playerId}
        inputDisabled={true}
      />
      <label className="insertPopup__label t-paragraph6Light">
        { 'char?.dialog?.playerDialog' }
      </label>
      <textarea
        value={newDialogText} 
        onChange={e => setNewDialogText(e.target.value)}
        onMouseLeave={updateDialog}
      />
      <label className="insertPopup__label t-paragraph6Light">
        { 'char?.dialog?.action' }
      </label>
      <input 
        onChange={e => setAction(e.target.value)}
        onMouseLeave={updateDialog}
      />
      <label className="insertPopup__label t-paragraph6Light">
        { 'char?.dialog?.next' }
      </label>
      <input 
        onChange={e => setNext(e.target.value)}
        onMouseLeave={updateDialog}
      />
      <label className="insertPopup__label t-paragraph6Light">
        { 'char?.dialog?.condition' }
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