import React, { useState } from 'react';


interface IMapSizeInput {
    id: string,
    value: string
}

const MapSizeInput: React.SFC<IMapSizeInput> = ({id, value}) => {
  const [currValue, setCurrValue] = useState(value);

  const clickHandler= () => {
    setCurrValue('');
  }


  return (
    <input type="text" name="input" value={currValue} id={id} onChange={e => setCurrValue(e.target.value)} onClick={clickHandler}/>
  );
}

export default MapSizeInput;