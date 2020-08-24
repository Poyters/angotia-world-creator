import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { PlayerDialog } from './PlayerDialog';
import { changeTemponaryPlayerDialogs } from '../../../../store/actions/charActions';
import { IPlayer } from '../../../../assets/interfaces/dialogs';
import { ContentContext } from '../../../../Template';
import { IStore } from '../../../../assets/interfaces/store';


export const AddTemponaryPlayerDialog: React.FC = () => {
  const { char } = useContext(ContentContext);
  const dispatch: Function = useDispatch();
  const temponaryPlayerDialogs: IPlayer[] = useSelector(
    (state: IStore) => state.char.temponaryPlayerDialogs
  );

  const addPlayerDialogHandler = (): void => {
    const newDialogs: IPlayer[] = [
      ...temponaryPlayerDialogs,
      {
        id: uuid(),
        dialog: '',
        next: '',
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
          { char?.dialogPopup?.playerDialogs }
        </header>
        <div 
          className="playerDialogsHeader__add t-paragraph5Normal"
          onClick={():void => addPlayerDialogHandler() }
        >
          { char?.dialogPopup?.newPlayerDialog }
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