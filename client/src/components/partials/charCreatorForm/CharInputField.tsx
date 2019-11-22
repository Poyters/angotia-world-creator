import React, { useState } from 'react';


interface ICharInputField {
  label: string,
  inputType?: string
  inputValue?: string | number
  inputDisabled?: boolean
}

const CharInputField: React.FC<ICharInputField> = (
  { label, inputType='text', inputValue='', inputDisabled=false }
) => {
  const [currValue, setCurrValue] = useState<string | number>(inputValue);

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
      />
    </div>
  )
}


export default CharInputField;