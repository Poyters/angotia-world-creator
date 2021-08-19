import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { Monolog } from './Monolog';
import { MonologPopup } from './MonologPopup';
import { IMonolog } from '../../../../interfaces/dialogs.interface';
import { IStore } from '../../../../interfaces/store.interface';
import { useTranslation } from 'react-i18next';


export const Monologs = () => {
  const { t } = useTranslation(['char', 'common']);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [monologData, setMonologData] = useState<IMonolog | undefined>(undefined);
  const monologsData = useSelector((state: IStore) => state.char.monologs);

  return (
    <>
      { isPopupOpen ? ReactDOM.createPortal(
        <MonologPopup 
          isActivePopup={setIsPopupOpen} 
          monologData={monologData}
          setMonologData={setMonologData}
        />, document.body
      ) : null}
      <div className="dialogs">
        <nav className="dialogs__nav">
          <ul>
            <li className="t-paragraph8Light"> 
              { t('char:monologs.title') }
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
          monologsData.length > 0 ? (
            monologsData.map((monolog) => {
              return <Monolog 
                id={monolog.id}
                content={monolog.content}
                isActivePopup={setIsPopupOpen}
                setPopupData={setMonologData}
                key={monolog.id}
              />;
            })
          ) : (
            <p className='dialogs--none t-paragraph5Normal'>
              { t('char:monologs.lack') }
            </p>
          )
        }
      </div>
    </>
  );
};