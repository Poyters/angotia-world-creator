import React, { useState } from 'react';


interface IMapSizeInput {
    id: string,
    currValue: number | string,
    changeValue(value: any): void
}

const MapSizeInput: React.SFC<IMapSizeInput> = ({id, currValue, changeValue}) => {
  const clickHandler= () => {
    changeValue({size: ''});
  }


  return (
    <input type="text" name="input" value={currValue} id={id} onChange={e => changeValue({size: e.target.value})} onClick={clickHandler}/>
  );
}

export default MapSizeInput;