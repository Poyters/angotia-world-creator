import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';


type chooseType = {
  label: string,
  id: string | boolean | number
}

interface IChooseButtons {
  types: chooseType[],
  action: Function,
  label?: string,
  specialClass?: string
}

const ChooseButtons: React.FC<IChooseButtons> = (
  { types, action, label, specialClass='' }
) => {
  const [currChecked, setCurrChecked] = useState<string | boolean | number>('');
  const dispatch = useDispatch();

  const changeChecked = (option: string | boolean | number): void => {
    const choosedOption = currChecked === option ? '' : option;
    console.log(action);
    setCurrChecked(choosedOption);
    dispatch(action(choosedOption));
  };

  return (
    <div className={`chooseButtonsWrapper ${specialClass}`}>
      <header className="chooseButtonsHeader t-paragraph6Light"> { label } </header>
      {
        types.map((type: chooseType) => {
          const inputStyle = {
            backgroundColor: currChecked === type.id ? '#27427c' : ''
          };

          return (
            <div className="chooseButtons" key={uuid()}>
              <label 
                className="chooseButtons__label t-paragraph3Light"
              > 
                { type.label } 
              </label>
              <div 
                className="chooseButtons__input"
                onClick={():void => changeChecked(type.id)}
                style={inputStyle}
              > </div>
            </div>
          );
        })
      }
    </div>
  );
};


export default ChooseButtons;