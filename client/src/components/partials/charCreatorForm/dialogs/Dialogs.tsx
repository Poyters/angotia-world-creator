import React, { useState } from 'react';
import ReactDOM from 'react-dom';
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
import MonologPopup from './MonologPopup';
import DialogPopup from './DialogPopup';

//Import interfaces
import { IMonolog, IDialog } from '../../../../assets/interfaces/dialogsInterfaces';


interface IDialogs {
  type: string,
  addBtnText: string
}

const Dialogs: React.FC<IDialogs> = ({ type, addBtnText }) => {
  const [connectedDialogs, setConnectedDialogs] = useState<Array<string | number>>([]);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [monologData, setMonologData] = useState<IMonolog | undefined>(undefined);
  const dialogsData: IDialog[] = useSelector(state => state.char.dialogs);
  const monologsData: IMonolog[] = useSelector(state => state.char.monologs);

  const dialogsValidator = (beginId: number | string): void => {
    setConnectedDialogs(
      findConnectedDialog(dialogsData, beginId)
    );
  };

  return (
    <ContentContext.Consumer>
			{({ char }) => (
        <React.Fragment>
          { isPopupOpen && type === char.form.monologs.title ? ReactDOM.createPortal(
            <MonologPopup togglePopup={setIsPopupOpen} monologData={monologData}/>, document.body
          ) : null}
          { isPopupOpen && type === char.form.dialogs.title ? ReactDOM.createPortal(
            <DialogPopup togglePopup={setIsPopupOpen}/>, document.body
          ) : null}
          <div className="dialogs">
            <nav className="dialogs__nav">
              <ul>
                <li className="t-paragraph8Light"> { type } </li>
                <li className="t-paragraph5Normal">
                  <span 
                    onClick={(): void => setIsPopupOpen(true)}
                  > 
                    { addBtnText } 
                  </span>
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
                      clearValidator={(): void => setConnectedDialogs([])}
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
                      togglePopup={setIsPopupOpen}
                      setPopupData={setMonologData}
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
        </React.Fragment>
      )}
    </ContentContext.Consumer>
  );
};


export default Dialogs;