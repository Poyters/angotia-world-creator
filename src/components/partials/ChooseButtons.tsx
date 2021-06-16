import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { IChooseButtons, IChooseType } from '../../interfaces/form.interface';


export const ChooseButtons: React.FC<IChooseButtons> = (
  { types, action, label, specialClass='', choosed='' }
) => {
  const [currChecked, setCurrChecked] = useState<string | boolean | number>(choosed);
  const dispatch = useDispatch();

  const changeChecked = (option: string | boolean | number) => {
    const choosedOption = currChecked === option ? '' : option;
    
    setCurrChecked(choosedOption);
    dispatch(action(choosedOption));
  };

  return (
    <div className={`chooseButtonsWrapper ${specialClass}`}>
      <header className="chooseButtonsHeader t-paragraph6Normal"> { label } </header>
      {
        types.map((type: IChooseType) => {
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
                onClick={() => changeChecked(type.id)}
              > </div>
            </div>
          );
        })
      }
    </div>
  );
};