import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import PlayerDialog from './PlayerDialog';
import { changeTemponaryPlayerDialogs } from '../../../../redux/actions/charActions';
import { IPlayer } from '../../../../assets/interfaces/dialogsInterfaces';
import { ContentContext } from '../../../../Template';


const AddTemponaryPlayerDialog: React.FC = () => {
  const { char } = useContext(ContentContext);
  const dispatch: Function = useDispatch();
  const temponaryPlayerDialogs: IPlayer[] = useSelector(state => state.char.temponaryPlayerDialogs);

  const addPlayerDialogHandler = (): void => {
    const newDialogs: IPlayer[] = [
      ...temponaryPlayerDialogs,
      {
        id: uuid(),
        dialog: '',
        next: -1,
        action: '',
        condition: ''
      }
    ];

    dispatch(changeTemponaryPlayerDialogs(newDialogs));
  };

  return (
    <>
      <nav className="playerDialogsHeader">
        <header 
          className="playerDialogsHeader__title t-paragraph5Light"
        >
          { char.dialogPopup.playerDialogs }
        </header>
        <div 
          className="playerDialogsHeader__add t-paragraph5Normal"
          onClick={():void => addPlayerDialogHandler() }
        >
          { char.dialogPopup.newPlayerDialog }
        </div>

      </nav>
      
      <div className="playerDialogsWrapper">
        { 
          temponaryPlayerDialogs.map((playerDialog: IPlayer) => {
            return <PlayerDialog playerId={playerDialog.id} key={playerDialog.id} />;
          })
        }
      </div>   
    </>        
  );
};

export default AddTemponaryPlayerDialog;