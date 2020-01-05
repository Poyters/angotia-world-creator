import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import components
import CharInputField from '../CharInputField';

//Import actions
import { changeDialogs } from '../../../../redux/actions/charActions';

//Import interfaces
import { IDialog, IPlayer } from '../../../../assets/interfaces/dialogsInterfaces';


interface IEditPlayerDialog {
  dialogId: number,
  playerId: number,
  closePopup: Function
}

const EditPlayerDialog: React.FC<IEditPlayerDialog> = ({ dialogId, playerId, closePopup }) => {
  const dialogsData: any[] = useSelector(state => state.char.dialogs);
  const dialogData = dialogsData.find((dialog: IDialog): boolean => dialog.id === dialogId);
  console.log(dialogData.player);
  console.log(playerId);
  const playerData = dialogData.player.find((dialog: IPlayer): boolean => {
    console.log(dialog);
    return dialog.id === playerId;
  });
  const dispatch: Function = useDispatch();
  const [dialog, setDialog] = useState<string>(playerData.dialog);
  const [dialogErr, setDialogErr] = useState<boolean>(false);
  const [next, setNext] = useState<string>(playerData.next);

  console.log(playerData);

  useEffect((): void => {
    if (
      dialog.length === 0 || 
      !dialog
    ) {
      setDialogErr(true);
    }
    else setDialogErr(false);
  }, [dialog]);

  const submitHandler = (): void => {
    // const updatedDialogs = dialogsData.map((dialog: IDialog) => {
    //   if (dialog.id === dialogId) {
    //     dialog.npc = dialog;
    //   }

    //   return dialog;
    // });

    // dispatch(changeDialogs(updatedDialogs));
    closePopup(false);
  };

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup insertPopup--dialog"> 
        <div 
          className="g-exitBtn g-exitBtn--popup"
          onClick={():void => closePopup(false)}
        > </div>
        <header className="insertPopup__header t-paragraph3Light">
          Edit player dialog
        </header>
        <CharInputField
          label='ID - auto generated'
          inputValue={playerId}
          inputDisabled={true}
        />
        <label className="insertPopup__label t-paragraph6Light">
          Player dialog
        </label>
        <textarea
          value={dialog} 
          onChange={e => setDialog(e.target.value)}
        />
        {
          (dialogErr) ? (
            <span className="insertPopup--error">You need to type player dialog</span>
          ) : null
        }   

        <label className="insertPopup__label t-paragraph6Light">
          Next dialog
        </label>
        <input
          value={next} 
          onChange={e => setNext(e.target.value)}
        />  

        <button 
          type="submit" 
          className="insertPopup__submit t-paragraphLight" 
          onClick={(): void => submitHandler()} 
          disabled={dialogErr}
        > 
          submit 
        </button>
      </div>
    </div>
  );
};

export default EditPlayerDialog;