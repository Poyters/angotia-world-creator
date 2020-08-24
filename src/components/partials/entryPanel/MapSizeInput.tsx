import React from 'react';


interface IMapSizeInput {
    id: string,
    currValue: number | string,
    changeValue(value: any): void
}

export const MapSizeInput: React.FC<IMapSizeInput> = ({id, currValue, changeValue}) => {

  return (
    <input 
      type="text"
      name="input"
      value={currValue}
      id={id}
      onChange={e => changeValue(e.target.value)}
      onClick={(): void => changeValue('')}
    />
  );
};