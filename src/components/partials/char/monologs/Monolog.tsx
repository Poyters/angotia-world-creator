import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IMonolog } from '../../../../interfaces/dialogs.interface';
import { changeMonologs } from '../../../../store/actions/charActions';
import { addNotification } from '../../../../scripts/utils/notifications';
import { IStore } from '../../../../interfaces/store.interface';
import { IMonologExplicit } from '../../../../interfaces/dialogs.interface';
import { useTranslation } from 'react-i18next';


export const Monolog: React.FC<IMonologExplicit> = (
  { id, content, isActivePopup, setPopupData }
) => {
  const { t } = useTranslation(['common', 'notifications']);
  const monologsData = useSelector((state: IStore) => state.char.monologs);
  const dispatch = useDispatch();

  const deleteMonolog = (id: string) => {
    const filteredMonologs = monologsData.filter(monolog => monolog.id !== id);

    dispatch(changeMonologs(filteredMonologs));
    addNotification(t('notifications:notes.monologs.delete'));
  };

  const editMonolog = () => {
    const monologData: IMonolog = {
      id,
      content
    };
    
    setPopupData(monologData);
    isActivePopup(true);
  };


  return (
    <section className="dialog">
      <p> 
        <span className="t-paragraph5Light"> 
          { t('common:id') } 
        </span> { id } 
      </p>
      <p> 
        <span className="t-paragraph5Light">
          { t('common:content') } 
        </span> { content } 
      </p>
      <div 
        className="g-exitBtn g-exitBtn--dialog"
        onClick={() => deleteMonolog(id)}
      > </div>
      <div 
        className="g-editBtn g-editBtn--dialog"
        onClick={() => editMonolog()}
      >
        <div className="g-editBtn__gum"></div>
      </div>
    </section>
  );
};