import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import components
import CharInputField from '../CharInputField';

//Import actions
import { changeDialogs } from '../../../../redux/actions/charActions';

//Import interfaces
import { IDialog } from '../../../../assets/interfaces/dialogsInterfaces';

//Import contexts
import { ContentContext } from '../../../../Template';


interface IEditDialog {
  dialogId: string,
  closePopup: Function
}

const EditDialog: React.FC<IEditDialog> = ({ dialogId, closePopup }) => {
  const { char } = useContext(ContentContext);
  const dialogsData: IDialog[] = useSelector(state => state.char.dialogs);
  const dialogData: IDialog | undefined= dialogsData
    .find((dialog: IDialog): boolean => dialog.id === dialogId);
  const dispatch: Function = useDispatch();
  const [npcText, setNpcText] = useState<string>(dialogData ? dialogData.npc : '');
  const [npcTextErr, setNpcTextErr] = useState<boolean>(false);

  useEffect((): void => {
    if (
      npcText.length === 0 || 
      !npcText
    ) {
      setNpcTextErr(true);
    }
    else setNpcTextErr(false);
  }, [npcText]);

  const submitHandler = (): void => {
    const updatedDialogs = dialogsData.map((dialog: IDialog) => {
      if (dialog.id === dialogId) {
        dialog.npc = npcText;
      }

      return dialog;
    });

    dispatch(changeDialogs(updatedDialogs));
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
          { char.dialogPopup.edit }
        </header>
        <CharInputField
          label={char.dialogPopup.id}
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

export default EditDialog;