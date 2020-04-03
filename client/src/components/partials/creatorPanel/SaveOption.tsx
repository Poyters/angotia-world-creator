
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { saveFile } from '../../../assets/scripts/files/saveFile';
import { ContentContext } from '../../../Template';


const SaveOption: React.FC = () => {
  const { creator } = useContext(ContentContext);
  const mapData = useSelector(state => state.map);
  const mapName = useSelector(state => state.ui.mapName);

  const saveMap = (): void => {
    saveFile(JSON.stringify(mapData), `${mapName}.json`, 'text/json');
  };

  return (
    <div 
      role="button" 
      className="option option--textOption option--smallerMargin" 
      data-title={creator.panel.options.save.dataTitle}
      onClick={(): void => saveMap()}
    >
      <span> 
        {creator.panel.options.save.content}  
      </span>
    </div>
  );
};


export default SaveOption;