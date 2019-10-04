
import React from 'react';
import { useSelector } from 'react-redux';

//Import scripts
import { saveFile } from '../../../assets/scripts/saveFile';


const SaveOption: React.FC = () => {
  const mapData = useSelector(state => state.map);

  const saveMap = () => {
    saveFile(JSON.stringify(mapData), 'boardName.json', 'text/json');
  };

  return (
    <div 
      role="button" 
      className="option option--textOption option--smallerMargin" 
      data-title="save board on your computer" 
      onClick={() => saveMap()}
    >
      <span> Save </span>
    </div>
  );
};


export default SaveOption;