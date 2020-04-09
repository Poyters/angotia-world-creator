import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { ActionInputField } from '../../ActionInputField';
import { AddTemponaryPlayerDialog } from './AddTemponaryPlayerDialog';
import { changeDialogs, changeTemponaryPlayerDialogs } from '../../../../store/actions/charActions';
import { IDialog, IPlayer } from '../../../../assets/interfaces/dialogs';
import { ContentContext } from '../../../../Template';
import { setActionNote } from '../../../../assets/scripts/notifications';


interface IDialogPopup {
  togglePopup: Function
}

export const DialogPopup: React.FC<IDialogPopup> = ({ togglePopup }) => {
  const { char, notifications } = useContext(ContentContext);
  const dialogId: string = uuid();
  const [npcText, setNpcText] = useState<string>('');
  const [npcTextErr, setNpcTextErr] = useState<boolean>(false);
  const dialogsData: IDialog[] = useSelector(state => state.char.dialogs);
  const dispatch: Function = useDispatch();
  const temponaryPlayerDialogs: IPlayer[] = useSelector(state => state.char.temponaryPlayerDialogs);

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
      connectedDialogs: [],
      player: temponaryPlayerDialogs
    });

    dispatch(changeDialogs(dialogsData));
    setActionNote(notifications.dialogs.add);
  };

  const submitHandler = (): void => {
    insertDialog();
    togglePopup(false);
    dispatch(changeTemponaryPlayerDialogs([]));
  };

  const closePopupHandler = (): void => {
    togglePopup(false);
    dispatch(changeTemponaryPlayerDialogs([]));
  };

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup insertPopup--dialog"> 
        <div 
          className="g-exitBtn g-exitBtn--popup"
          onClick={closePopupHandler}
        > </div>
        <header className="insertPopup__header t-paragraph3Light">
          { char.dialogPopup.add }
        </header>
        <ActionInputField
          label='ID - auto generated'
          inputValue={dialogId}
          inputDisabled={true}
        />
        <label className="insertPopup__label t-paragraph6Light">
          { char.dialogPopup.npcDialog }
        </label>
        <textarea
          value={npcText} 
          onChange={e => setNpcText(e.target.value)}
        />
        {
          (npcTextErr) ? (
            <span className="insertPopup--error">
              { char.dialogPopup.npcTextErr }
            </span>
          ) : null
        }
        <AddTemponaryPlayerDialog/>     

        <button 
          type="submit" 
          className="insertPopup__submit t-paragraphLight" 
          onClick={(): void => submitHandler()} 
          disabled={npcTextErr}
        > 
          { char.dialogPopup.submit }
        </button>
      </div>
    </div>
  );
};