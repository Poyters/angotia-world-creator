
import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContentContext } from '../../../Template';
import { IStore } from '../../../interfaces/store.interface';
import { IMapState } from '../../../interfaces/mapState.interface';
import { ICharState } from '../../../interfaces/charState.interface';
import { prepareExternalCharData } from '../../../scripts/parsers/prepareExternalCharData';
import { prepareExternalMapData } from '../../../scripts/parsers/prepareExternalMapData';
import { CREATE_CHAR } from '../../../api/mutations/createChar';
import { CREATE_MAP } from '../../../api/mutations/createMap';
import { UPDATE_CHAR } from '../../../api/mutations/updateChar';
import { UPDATE_MAP } from '../../../api/mutations/updateMap';
import { GET_CHAR } from '../../../api/queries/getChar';
import { GET_MAP } from '../../../api/queries/getMap';
import { useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import { addNotification } from '../../../scripts/utils/notifications';
import { setMapDatabaseId } from '../../../store/actions/mapActions';
import { Notification } from '../../../models/notification.model';
import { AppModules } from '../../../models/appModules.model';


interface IExportToAngotia {
  type?: string,
  text?: string
}

export const ExportToAngotia: React.FC<IExportToAngotia> = ({ type, text }) => {
  const { creator } = useContext(ContentContext);
  const dispatch = useDispatch();
  const [addChar] = useMutation(CREATE_CHAR);
  const [addMap] = useMutation(CREATE_MAP, {
    onCompleted({ createMap }) { //add database id to states
      dispatch(setMapDatabaseId(createMap.id));
    }
  });
  const [updateChar] = useMutation(UPDATE_CHAR);
  const [updateMap] = useMutation(UPDATE_MAP);
  const charData: ICharState = useSelector((state: IStore) => state.char);
  const mapData: IMapState = useSelector((state: IStore) => state.map);
  const mapErrors: string[] = useSelector((state: IStore) => state.ui.mapCreationErrors);
  const charErrors: string[] = useSelector((state: IStore) => state.ui.charCreationErrors);
  const char = useQuery(GET_CHAR, {
    variables: { id: charData.id },
    skip: !charData.id
  });
  const map = useQuery(GET_MAP, {
    variables: { id: mapData.id },
    skip: !mapData.id
  });

  const exportHandler = (): void => {
    switch (type) {
      case AppModules.char:
        const externalCharData = prepareExternalCharData(charData);

        if (char.error) {
          addNotification(`Expected error during checking existing char: ${char.error}`, Notification.error);
          return;
        } else if (charErrors.length > 0) {
          addNotification('Cannot export char with errors!', Notification.error);
          return;
        }

        if (char.data) { // Char already exists id database
          delete externalCharData._id;
          updateChar({ variables: { id: charData.id, ...externalCharData } });
          addNotification('Succesfully updated character');
        } else { // Char doest't exists
          addChar({ variables: { ...externalCharData } });
          addNotification('Succesfully added a new character to Angotia');
        }
        break;
      case AppModules.map:
        const externalMapData = prepareExternalMapData(mapData);

        if (map.error) {
          addNotification(`Expected error during checking existing map: ${map.error}`, Notification.error);
          return;
        } else if (mapErrors.length > 0) {
          addNotification('Cannot export map with errors!', Notification.error);
          return;
        }

        if (map.data) { // Map already exists id database
          delete externalMapData._id;
          updateMap({ variables: { id: mapData.id, ...externalMapData } });
          addNotification('Succesfully updated map');
        } else { // Map doest't exists yet
          addMap({ variables: { ...externalMapData } });
          addNotification('Succesfully added a new map to Angotia');
        }
        break;
    }
  };

  return (
    <span
      onClick={(): void => exportHandler()}
    >
      {text ? text : creator?.panel?.options?.save?.content}
    </span>
  );
};