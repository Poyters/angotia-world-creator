import React from 'react';

interface IInput {
    id: string,
    value: any
}

const Input: React.SFC<IInput> = ({id, value}) => {
  return (
    <input type="text" name="input" value={value} id={id} />
  );
}

export default Input;