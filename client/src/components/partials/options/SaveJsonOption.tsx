
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { saveFile } from '../../../assets/scripts/files/saveFile';
import { ContentContext } from '../../../Template';
import { IStore } from '../../../assets/interfaces/store';
import { prepareExternalCharData } from '../../../assets/scripts/utils/prepareExternalCharData';
import { addNotification } from '../../../assets/scripts/notifications';


interface ISaveJsonOption {
  type?: string,
  text?: string
}

export const SaveJsonOption: React.FC<ISaveJsonOption> = ({ type, text }) => {
  const { creator } = useContext(ContentContext);
  const mapData = useSelector((state: IStore) => state.map);
  const mapName = useSelector((state: IStore) => state.map.mapName);
  const charData = useSelector((state: IStore) => state.char);
  const charName = useSelector((state: IStore) => state.char.name);

  const saveMap = (): void => {
    switch(type) {
      case 'char':
        const externalCharData = prepareExternalCharData(charData);
        saveFile(JSON.stringify(externalCharData), `${charName}.json`, 'text/json');
        addNotification('Succesfully saved character');
      break;
      case 'map':
        saveFile(JSON.stringify(mapData), `${mapName}.json`, 'text/json');
        addNotification('Succesfully saved map');
      break;
      default:
        addNotification('Invalid save data type', 'warning');
    }
  };

  return (
    <span
      onClick={(): void => saveMap()}
    > 
      {text ? text : creator?.panel?.options?.save?.content}  
    </span>
  );
};