import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


interface IChooseButtons {
  types: string[],
  action: Function,
  label?: string
}

const ChooseButtons: React.FC<IChooseButtons> = ({ types, action, label }) => {
  const [currChecked, setCurrChecked] = useState<string>('');
  const dispatch = useDispatch();

  const changeChecked = (option: string): void => {
    const choosedOption = currChecked === option ? '' : option;
    
    setCurrChecked(choosedOption);
    dispatch(action(choosedOption));
  };

  return (
    <div className="chooseButtonsWrapper">
      <header className="chooseButtonsHeader t-paragraph5Light"> { label } </header>
      {
        types.map((type, index) => {
          const inputStyle = {
            backgroundColor: currChecked === type ? '#27427c' : ''
          };

          return (
            <div className="chooseButtons" key={index}>
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