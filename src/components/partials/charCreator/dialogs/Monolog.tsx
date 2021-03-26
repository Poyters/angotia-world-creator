import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IMonolog } from '../../../../interfaces/dialogs.interface';
import { changeMonologs } from '../../../../store/actions/charActions';
import { ContentContext } from '../../../../Template';
import { addNotification } from '../../../../scripts/utils/notifications';
import { IStore } from '../../../../interfaces/store.interface';
import { IMonologExplicit } from '../../../../interfaces/dialogs.interface';


export const Monolog: React.FC<IMonologExplicit> = (
  { id, content, isActivePopup, setPopupData }
) => {
  const { char, notifications } = useContext(ContentContext);
  const monologsData: IMonolog[] = useSelector((state: IStore) => state.char.monologs);
  const dispatch: Function = useDispatch();

  const deleteMonolog = (id: string): void => {
    const filteredMonologs: IMonolog[] = monologsData.filter((monolog: IMonolog) => {
      return monolog.id !== id;
    });

    dispatch(changeMonologs(filteredMonologs));
    addNotification(notifications?.monologs?.delete);
  };

  const editMonolog = (): void => {
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
          { char?.monolog?.id }
        </span> { id } 
      </p>
      <p> 
        <span className="t-paragraph5Light">
          { char?.monolog?.content }
        </span> { content } 
      </p>
      <div 
        className="g-exitBtn g-exitBtn--dialog"
        onClick={():void => deleteMonolog(id)}
      > </div>
      <div 
        className="g-editBtn g-editBtn--dialog"
        onClick={():void => editMonolog()}
      >
        <div className="g-editBtn__gum"></div>
      </div>
    </section>
  );
};