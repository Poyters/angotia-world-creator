import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IMonolog } from '../../../../assets/interfaces/dialogsInterfaces';
import { changeMonologs } from '../../../../redux/actions/charActions';
import { ContentContext } from '../../../../Template';
import { setActionNote } from '../../../../assets/scripts/notifications';


interface IMonologExplicit extends IMonolog {
  togglePopup: Function,
  setPopupData: Function
}

export const Monolog: React.FC<IMonologExplicit> = (
  { id, content, togglePopup, setPopupData }
) => {
  const { char, notifications } = useContext(ContentContext);
  const monologsData: IMonolog[] = useSelector(state => state.char.monologs);
  const dispatch: Function = useDispatch();

  const deleteMonolog = (id: string): void => {
    const filteredMonologs: IMonolog[] = monologsData.filter((monolog: IMonolog) => {
      if (monolog.id !== id) return monolog;
    });

    dispatch(changeMonologs(filteredMonologs));
    setActionNote(notifications.monologs.delete);
  };

  const editMonolog = (): void => {
    const monologData: IMonolog = {
      id,
      content
    };
    
    setPopupData(monologData);
    togglePopup(true);
  };


  return (
    <section className="dialog">
      <p> 
        <span className="t-paragraph5Light"> 
          { char.monolog.id }
        </span> { id } 
      </p>
      <p> 
        <span className="t-paragraph5Light">
          { char.monolog.content }
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