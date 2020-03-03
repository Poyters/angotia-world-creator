import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import components
import CharInputField from '../CharInputField';

//Import actions
import { changeDialogs } from '../../../../redux/actions/charActions';

//Import interfaces
import { IDialog, IPlayer } from '../../../../assets/interfaces/dialogsInterfaces';

//Import contexts
import { ContentContext } from '../../../../Template';

//Import scripts
import { setActionNote } from '../../../../assets/scripts/notifications';


interface IEditPlayerDialog {
  dialogId: string,
  playerId: string,
  closePopup: Function
}

const EditPlayerDialog: React.FC<IEditPlayerDialog> = (
  { dialogId, playerId, closePopup }
) => {
  const { char } = useContext(ContentContext);
  const dialogsData: IDialog[] = useSelector(state => state.char.dialogs);
  const dialogData: IDialog | undefined = dialogsData
    .find((dialog: IDialog): boolean => dialog.id === dialogId);
  const playerData: IPlayer | undefined = dialogData ? dialogData.player
    .find((dialog: IPlayer): boolean => {
      return dialog.id === playerId;
    }) : undefined;
  const dispatch: Function = useDispatch();
  const [dialog, setDialog] = useState<string>(playerData ? playerData.dialog : '');
  const [dialogErr, setDialogErr] = useState<boolean>(false);
  const [next, setNext] = useState<string | number>(playerData ? playerData.next : '');
  const [action, setAction] = useState<string>(playerData ? playerData.action : '');
  const [condition, setCondition] = useState<string>(playerData ? playerData.condition : '');

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
    if (!dialogData) return;

    const playerDataId = dialogData.player.findIndex((dialog: IPlayer): boolean => {
      return dialog.id === playerId;
    });

    const updatedDialogs = dialogsData.map((dlg: IDialog) => {
      if (dlg.id === dialogId) {
        dlg.player[playerDataId] = {
          ...dlg.player[playerDataId],
          dialog,
          next,
          action,
          condition
        };
      }

      return dlg;
    });

    dispatch(changeDialogs(updatedDialogs));
    closePopup(false);
    setActionNote('Edited player dialog');
  };

  const deleteDialog = (id: string): void => {
    const updatedDialogs = dialogsData.map((dlg: IDialog) => {
      if (dlg.id === dialogId) {
        dlg.player = dlg.player.filter(player => {
          if (player.id !== id) return player;
        });
      }

      return dlg;
    });

    dispatch(changeDialogs(updatedDialogs));
    closePopup(false);
    setActionNote('Deleted player dialog');
  };

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup insertPopup--dialog">
        <div
          className="g-deleteBtn"
          onClick={():void => deleteDialog(playerId)}
        > delete </div> 
        <div 
          className="g-exitBtn g-exitBtn--popup"
          onClick={():void => closePopup(false)}
        > </div>
        <header className="insertPopup__header t-paragraph3Light">
          { char.editPlayer.title }
        </header>
        <CharInputField
          label='ID - auto generated'
          inputValue={playerId}
          inputDisabled={true}
        />
        <label className="insertPopup__label t-paragraph6Light">
          { char.editPlayer.playerDialog }
        </label>
        <textarea
          value={dialog} 
          onChange={e => setDialog(e.target.value)}
        />
        {
          (dialogErr) ? (
            <span className="insertPopup--error">
              { char.editPlayer.playerDialogErr }
            </span>
          ) : null
        }   

        <label className="insertPopup__label t-paragraph6Light">
          { char.editPlayer.action }
        </label>
        <input
          value={action} 
          onChange={e => setAction(e.target.value)}
        /> 

        <label className="insertPopup__label t-paragraph6Light">
          { char.editPlayer.next }
        </label>
        <input
          value={next} 
          onChange={e => setNext(e.target.value)}
        />  

        <label className="insertPopup__label t-paragraph6Light">
          { char.editPlayer.condition }
        </label>
        <input
          value={condition} 
          onChange={e => setCondition(e.target.value)}
        />  

        <button 
          type="submit" 
          className="insertPopup__submit t-paragraphLight" 
          onClick={(): void => submitHandler()} 
          disabled={dialogErr}
        > 
          { char.editPlayer.submit }
        </button>
      </div>
    </div>
  );
};

export default EditPlayerDialog;