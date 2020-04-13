
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { saveFile } from '../../../assets/scripts/files/saveFile';
import { ContentContext } from '../../../Template';
import { IStore } from '../../../assets/interfaces/store';


interface ISaveOption {
  type?: string
}

export const SaveOption: React.FC<ISaveOption> = ({ type }) => {
  const { creator } = useContext(ContentContext);
  const mapData = useSelector((state: IStore) => state.map);
  const mapName = useSelector((state: IStore) => state.map.mapName);
  const charData = useSelector((state: IStore) => state.char);
  const charName = useSelector((state: IStore) => state.char.name);

  const saveMap = (): void => {
    switch(type) {
      case 'char':
        saveFile(JSON.stringify(charData), `${charName}.json`, 'text/json');
      break;
      case 'map':
      default:
        saveFile(JSON.stringify(mapData), `${mapName}.json`, 'text/json');
    }
  };

  return (
    <div 
      role="button" 
      className="option option--textOption option--smallerMargin" 
      data-title={creator?.panel?.options?.save?.dataTitle}
      onClick={(): void => saveMap()}
    >
      <span> 
        {creator?.panel?.options?.save?.content}  
      </span>
    </div>
  );
};