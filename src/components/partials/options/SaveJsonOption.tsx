
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { saveFile } from '../../../scripts/files/saveFile';
import { ContentContext } from '../../../Template';
import { IStore } from '../../../interfaces/store.interface';
import { prepareExternalCharData } from '../../../scripts/parsers/prepareExternalCharData';
import { prepareExternalMapData } from '../../../scripts/parsers/prepareExternalMapData';
import { addNotification } from '../../../scripts/utils/notifications';
import { Notification } from '../../../models/notification.model';
import { AppModules } from '../../../models/appModules.model';
import { IApp } from '../../../interfaces/app.inteface';


interface ISaveJsonOption {
  text?: string
}

export const SaveJsonOption = ({ moduleType, text }: ISaveJsonOption & IApp) => {
  const { creator } = useContext(ContentContext);
  const mapData = useSelector((state: IStore) => state.map);
  const mapName = useSelector((state: IStore) => state.map.mapName);
  const charData = useSelector((state: IStore) => state.char);
  const charName = useSelector((state: IStore) => state.char.name);

  const saveData = (): void => {
    switch(moduleType) {
      case AppModules.char:
        const externalCharData = prepareExternalCharData(charData);
        saveFile(JSON.stringify(externalCharData), `${charName}.json`, 'text/json');
        addNotification('Succesfully saved character');
      break;
      case AppModules.map:
        const externalMapData = prepareExternalMapData(mapData);
        saveFile(JSON.stringify(externalMapData), `${mapName}.json`, 'text/json');
        addNotification('Succesfully saved map');
      break;
      default:
        addNotification('Invalid save data type', Notification.error);
    }
  };

  return (
    <span
      onClick={(): void => saveData()}
    > 
      {text ? text : creator?.panel?.options?.save?.content}  
    </span>
  );
};