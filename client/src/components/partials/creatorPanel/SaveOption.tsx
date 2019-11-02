
import React from 'react';
import { useSelector } from 'react-redux';

//Import scripts
import { saveFile } from '../../../assets/scripts/saveFile';


const SaveOption: React.FC = () => {
  const mapData = useSelector(state => state.map);
  const mapName = useSelector(state => state.ui.mapName);

  const saveMap = (): void => {
    saveFile(JSON.stringify(mapData), `${mapName}.json`, 'text/json');
  };

  return (
    <div 
      role="button" 
      className="option option--textOption option--smallerMargin" 
      data-title="save board on your computer" 
      onClick={(): void => saveMap()}
    >
      <span> Save </span>
    </div>
  );
};


export default SaveOption;