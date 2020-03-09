import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';


interface IChooseButtons {
  types: string[],
  action: Function,
  label?: string,
  specialClass?: string
}

const ChooseButtons: React.FC<IChooseButtons> = (
  { types, action, label, specialClass='' }
) => {
  const [currChecked, setCurrChecked] = useState<string>('');
  const dispatch = useDispatch();

  const changeChecked = (option: string): void => {
    const choosedOption = currChecked === option ? '' : option;
    console.log(action);
    setCurrChecked(choosedOption);
    dispatch(action(choosedOption));
  };

  return (
    <div className={`chooseButtonsWrapper ${specialClass}`}>
      <header className="chooseButtonsHeader t-paragraph5Light"> { label } </header>
      {
        types.map((type: string) => {
          const inputStyle = {
            backgroundColor: currChecked === type ? '#27427c' : ''
          };

          return (
            <div className="chooseButtons" key={uuid()}>
              <label 
                className="chooseButtons__label t-paragraph3Light"
              > 
                { type } 
              </label>
              <div 
                className="chooseButtons__input"
                onClick={():void => changeChecked(type)}
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