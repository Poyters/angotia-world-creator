import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { Dialog } from './Dialog';
import { 
  findConnectedDialog 
} from '../../../../scripts/dialogs/findConnectedDialog';
import { DialogPopup } from './DialogPopup';
import { IDialog } from '../../../../interfaces/dialogs.interface';
import { IStore } from '../../../../interfaces/store.interface';
import uuid from 'uuid/v4';


export const Dialogs = () => {
  const [connectedDialogs, setConnectedDialogs] = useState<Array<string | number>>([]);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const dialogsData: IDialog[] = useSelector((state: IStore) => state.char.dialogs);

  const dialogsValidator = (beginId: string): void => {
    setConnectedDialogs(
      findConnectedDialog(dialogsData, beginId)
    );
  };

  return (
    <>
      { isPopupOpen ? ReactDOM.createPortal(
        <DialogPopup isActivePopup={setIsPopupOpen} dialogId={uuid()}/>, document.body
      ) : null}
      <div className="dialogs">
        <nav className="dialogs__nav">
          <ul>
            <li className="t-paragraph8Light"> { 'type' } </li>
            <li className="t-paragraph5Normal">
              <span 
                onClick={() => setIsPopupOpen(true)}
              > 
                { 'addBtnText' } 
              </span>
            </li>
          </ul>
        </nav>
        {
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
                { 'char?.form?.lackOf' } { 'type' }
            </p>
          )
        }
      </div>
    </>
  );
};