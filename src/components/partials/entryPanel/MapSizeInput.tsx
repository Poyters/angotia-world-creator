import React from 'react';
import { IMapSizeInput } from '../../../interfaces/map.interface';


export const MapSizeInput: React.FC<IMapSizeInput> = ({
  id, currValue, changeValue
}) => {

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