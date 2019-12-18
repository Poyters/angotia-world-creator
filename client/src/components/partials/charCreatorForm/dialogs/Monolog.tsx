import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import interfaces
import { IMonolog } from '../../../../assets/interfaces/dialogsInterfaces';

//Import actions
import { changeMonologs } from '../../../../redux/actions/charActions';

const Monolog: React.FC<IMonolog> = ({ id, content }) => {
  const monologsData: any[] = useSelector(state => state.char.monologs);
  const dispatch: Function = useDispatch();

  const deleteMonolog = (id: number): void => {
    const filteredMonologs = monologsData.filter(monolog => {
      if (monolog.id !== id) return monolog;
    });

    dispatch(changeMonologs(filteredMonologs));
  }


  return (
    <div className="dialog">
      <p> 
        <span className="t-paragraph5Light"> 
          Monolog ID: 
        </span> { id } 
      </p>
      <p> 
        <span className="t-paragraph5Light">
          Monolog content: 
        </span> { content } 
      </p>
      <div 
          className="g-exitBtn g-exitBtn--dialog"
          onClick={():void => deleteMonolog(id)}
      > </div>
    </div>
  )
}


export default Monolog;