import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//Import components
import Dialog from './Dialog';
import Monolog from './Monolog';

//Import scripts
import { 
  findConnectedDialog 
} from '../../../../assets/scripts/dialogs/findConnectedDialog';

//Import contexts
import { ContentContext } from '../../../../Template';


interface IDialogs {
  type: string,
  addBtnText: string
}

const Dialogs: React.FC<IDialogs> = ({ type, addBtnText }) => {
  const [connectedDialogs, setConnectedDialogs] = useState<any[]>([]);
  const dialogsData: any[] = useSelector(state => state.char.dialogs);
  const monologsData: any[] = useSelector(state => state.char.monologs);

  const dialogsValidator = (beginId: number | string): void => {
    setConnectedDialogs(
      findConnectedDialog(dialogsData, beginId)
    );
  };

  const clearConnected = ():void => {
    setConnectedDialogs([]);
  };

  return (
    <ContentContext.Consumer>
			{({ char }) => (
        <div className="dialogs">
          <nav className="dialogs__nav">
            <ul>
              <li className="t-paragraph8Light"> { type } </li>
              <li className="t-paragraph5Normal">
                <span> { addBtnText } </span>
              </li>
            </ul>
          </nav>
          {
            type === char.form.dialogs.title ? (
              dialogsData.length > 0 ? (
                dialogsData.map((dialog, index) => {
                  return <Dialog 
                    id={dialog.id}
                    npc={dialog.npc}
                    player={dialog.player}
                    key={index}
                    validatorFunc={dialogsValidator}
                    connectedDialogs={connectedDialogs}
                    clearValidator={clearConnected}
                  />;
                })
              ) : (
                <p className='dialogs--none t-paragraph5Normal'>
                  There's no { type }
                </p>
              )
            ) : null
          }
          {
            type === char.form.monologs.title ? (
              monologsData.length > 0 ? (
                monologsData.map((monolog, index) => {
                  return <Monolog 
                    id={monolog.id}
                    content={monolog.content}
                    key={index}
                  />;
                })
              ) : (
                <p className='dialogs--none t-paragraph5Normal'>
                  There's no { type }
                </p>
              )
            ) : null
          }
        </div>
      )}
    </ContentContext.Consumer>
  );
};


export default Dialogs;