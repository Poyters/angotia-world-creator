import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


interface ICharInputField {
  label: string,
  inputType?: string
  inputValue?: string | number
  inputDisabled?: boolean,
  action?: Function,
  id?: string
}

const CharInputField: React.FC<ICharInputField> = (
  { label, inputType='text', inputValue='', inputDisabled=false, action, id='' }
) => {
  const [currValue, setCurrValue] = useState<string | number>(inputValue);
  const dispatch = useDispatch();

  const actionHandler = () => {
    if (!action) return;

    dispatch(action(id));
  };

  return (
    <div className="charInputField">
      <label className="charInputField__label t-paragraph6Light">
        { label }
      </label>
      <input 
        className="charInputField__input" 
        type={inputType} 
        value={currValue}
        disabled={inputDisabled}
        onChange={(e): void => setCurrValue(e.target.value)}
        onBlur={actionHandler}
      />
    </div>
  );
};


export default CharInputField;