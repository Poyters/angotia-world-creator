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
  specialClass?: string,
  choosed?: string | boolean | number
}

export const ChooseButtons: React.FC<IChooseButtons> = (
  { types, action, label, specialClass='', choosed='' }
) => {
  const [currChecked, setCurrChecked] = useState<string | boolean | number>(choosed);
  const dispatch = useDispatch();

  const changeChecked = (option: string | boolean | number): void => {
    const choosedOption = currChecked === option ? '' : option;
    
    setCurrChecked(choosedOption);
    dispatch(action(choosedOption));
  };

  return (
    <div className={`chooseButtonsWrapper ${specialClass}`}>
      <header className="chooseButtonsHeader t-paragraph6Normal"> { label } </header>
      {
        types.map((type: chooseType) => {
          return (
            <div className="chooseButtons" key={uuid()}>
              <label 
                className="chooseButtons__label t-paragraph3Light"
              > 
                { type.label } 
              </label>
              <div 
                className={`
                  chooseButtons__input
                  ${currChecked === type.id ? 'chooseButtons__input--active' : ''}
                `}
                onClick={():void => changeChecked(type.id)}
              > </div>
            </div>
          );
        })
      }
    </div>
  );
};