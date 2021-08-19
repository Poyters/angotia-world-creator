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
import { useTranslation } from 'react-i18next';


export const Dialogs = () => {
  const { t } = useTranslation(['char', 'common']);
  const [connectedDialogs, setConnectedDialogs] = useState<Array<string | number>>([]);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const dialogsData = useSelector((state: IStore) => state.char.dialogs);

  const dialogsValidator = (beginId: string) => {
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
            <li className="t-paragraph8Light">
              { t('char:dialogs.title') }
            </li>
            <li className="t-paragraph5Normal">
              <span 
                onClick={() => setIsPopupOpen(true)}
              > 
                { t('common:create') } 
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
                clearValidator={() => setConnectedDialogs([])}
              />;
            })
          ) : (
            <p className='dialogs--none t-paragraph5Normal'>
              { t('char:dialogs.lack') }
            </p>
          )
        }
      </div>
    </>
  );
};