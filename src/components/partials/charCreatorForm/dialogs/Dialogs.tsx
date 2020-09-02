import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { Dialog } from './Dialog';
import { Monolog } from './Monolog';
import { 
  findConnectedDialog 
} from '../../../../assets/scripts/dialogs/findConnectedDialog';
import { ContentContext } from '../../../../Template';
import { MonologPopup } from './MonologPopup';
import { DialogPopup } from './DialogPopup';
import { IMonolog, IDialog } from '../../../../interfaces/dialogs.interface';
import { IStore } from '../../../../interfaces/store.interface';
import uuid from 'uuid/v4';


interface IDialogs {
  type: string,
  addBtnText: string
}

export const Dialogs: React.FC<IDialogs> = ({ type, addBtnText }) => {
  const { char } = useContext(ContentContext);
  const [connectedDialogs, setConnectedDialogs] = useState<Array<string | number>>([]);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [monologData, setMonologData] = useState<IMonolog | undefined>(undefined);
  const dialogsData: IDialog[] = useSelector((state: IStore) => state.char.dialogs);
  const monologsData: IMonolog[] = useSelector((state: IStore) => state.char.monologs);

  const dialogsValidator = (beginId: string): void => {
    setConnectedDialogs(
      findConnectedDialog(dialogsData, beginId)
    );
  };

  return (
    <>
      { isPopupOpen && type === char.form.monologs.title ? ReactDOM.createPortal(
        <MonologPopup 
          togglePopup={setIsPopupOpen} 
          monologData={monologData}
          setMonologData={setMonologData}
        />, document.body
      ) : null}
      { isPopupOpen && type === char.form.dialogs.title ? ReactDOM.createPortal(
        <DialogPopup togglePopup={setIsPopupOpen} dialogId={uuid()}/>, document.body
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
          type === char?.form?.dialogs?.title ? (
            dialogsData.length > 0 ? (
              dialogsData.map((dialog: IDialog) => {
                return <Dialog 
                  id={dialog.id}
                  npc={dialog.npc}
                  player={dialog.player}
                  key={dialog.id}
                  validatorFunc={dialogsValidator}
                  connectedDialogs={connectedDialogs}
                  clearValidator={(): void => setConnectedDialogs([])}
                />;
              })
            ) : (
              <p className='dialogs--none t-paragraph5Normal'>
                  { char?.form?.lackOf } { type }
              </p>
            )
          ) : null
        }
        {
          type === char?.form?.monologs?.title ? (
            monologsData.length > 0 ? (
              monologsData.map((monolog: IMonolog) => {
                return <Monolog 
                  id={monolog.id}
                  content={monolog.content}
                  togglePopup={setIsPopupOpen}
                  setPopupData={setMonologData}
                  key={monolog.id}
                />;
              })
            ) : (
              <p className='dialogs--none t-paragraph5Normal'>
                { char?.form?.lackOf } { type }
              </p>
            )
          ) : null
        }
      </div>
    </>
  );
};