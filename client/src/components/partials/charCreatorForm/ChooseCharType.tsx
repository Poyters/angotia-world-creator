import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

//Import actions
import { changeCharType } from '../../../redux/actions/charActions';

interface IChooseCharType {
  types: string[]
}

const ChooseCharType: React.FC<IChooseCharType> = ({ types }) => {
  const [currChecked, setCurrChecked] = useState<string>('');
  const dispatch = useDispatch();

  const changeChecked = (type: string): void => {
    const charType = currChecked === type ? '' : type;
    
    setCurrChecked(charType);
    dispatch(changeCharType(charType));
  }

  return (
    <div className="chooseCharTypeWrapper">
      {
        types.map((type, index) => {
          const inputStyle = {
            backgroundColor: currChecked === type ? '#27427c' : ''
          }

          return (
            <div className="chooseCharType" key={index}>
              <label 
                className="chooseCharType__label t-paragraph3Light"
              > 
                { type } 
              </label>
              <div 
                className="chooseCharType__input"
                onClick={():void => changeChecked(type)}
                style={inputStyle}
              > </div>
            </div>
          )
        })
      }
    </div>
  )
}


export default ChooseCharType;