import React, { useState } from 'react';

interface IInput {
    id: string,
    value: any
}

const Input: React.SFC<IInput> = ({id, value}) => {
  const [currValue, setCurrValue] = useState(value);

  const changeHandler = event => {
    setCurrValue(event.target.value);
    console.log(event.target.value)
  } 

  return (
    <input type="text" name="input" value={currValue} id={id} onChange={e => changeHandler(e)}/>
  );
}

export default Input;