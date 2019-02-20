import React, { useState } from 'react';

//Import state logic
import useInputChange from '../stateLogic/useInputChange';

interface IMapSizeInput {
    id: string
    value: any
}

const MapSizeInput: React.SFC<IMapSizeInput> = ({id, value}) => {
  const clickHandler = () => {
    //setCurrValue('');
  }

  const changeHandler = e => {
    useInputChange(value, e);
  }

  return (
    <input type="text" name="input" value={useInputChange(value)} id={id} onChange={e => changeHandler(e)} onClick={clickHandler}/>
  );
}

export default MapSizeInput;