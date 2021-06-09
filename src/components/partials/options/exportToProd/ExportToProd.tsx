
import React, { useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ContentContext } from '../../../../Template';
import { IStore } from '../../../../interfaces/store.interface';
import { IMapState } from '../../../../interfaces/mapState.interface';
import { ICharState } from '../../../../interfaces/charState.interface';
import { prepareExternalCharData } from '../../../../scripts/parsers/prepareExternalCharData';
import { prepareExternalMapData } from '../../../../scripts/parsers/prepareExternalMapData';
import { CREATE_REQ_CHAR } from '../../../../api/angotiaResources/mutations/char/createReqChar';
import { CREATE_REQ_MAP } from '../../../../api/angotiaResources/mutations/map/createReqMap';
import { UPDATE_REQ_CHAR } from '../../../../api/angotiaResources/mutations/char/updateReqChar';
import { UPDATE_REQ_MAP } from '../../../../api/angotiaResources/mutations/map/updateReqMap';
import { GET_REQ_CHAR } from '../../../../api/angotiaResources/queries/char/getReqChar';
import { GET_REQ_MAP } from '../../../../api/angotiaResources/queries/map/getReqMap';
import { useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import { addNotification } from '../../../../scripts/utils/notifications';
import { setMapDatabaseId } from '../../../../store/actions/mapActions';
import { setCharDatabaseId } from '../../../../store/actions/charActions';
import { Notification } from '../../../../models/notification.model';
import { AppModules } from '../../../../models/appModules.model';
import { IApp } from '../../../../interfaces/app.inteface';
import { ExportAlert } from './ExportAlert';


interface IExportToProd {
  text?: string
}

export const ExportToProd = ({ moduleType, text }: IExportToProd & IApp) => {
  const { creator } = useContext(ContentContext);
  const [isActivePopup, setIsActivePopup] = useState<boolean>(false);
  const [isLicenseAccepted, setIsLicenseAccepted] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [addChar] = useMutation(CREATE_REQ_CHAR, {
    onCompleted({ createRequestedChar }) { //add database id to states
      dispatch(setCharDatabaseId(createRequestedChar.id));
    }
  });
  const [addMap] = useMutation(CREATE_REQ_MAP, {
    onCompleted({ createRequestedMap }) { //add database id to states
      dispatch(setMapDatabaseId(createRequestedMap.id));
    }
  });
  const [updateChar] = useMutation(UPDATE_REQ_CHAR);
  const [updateMap] = useMutation(UPDATE_REQ_MAP);
  const charData: ICharState = useSelector((state: IStore) => state.char);
  const mapData: IMapState = useSelector((state: IStore) => state.map);
  const mapErrors: string[] = useSelector((state: IStore) => state.ui.mapCreationErrors);
  const charErrors: string[] = useSelector((state: IStore) => state.ui.charCreationErrors);
  const char = useQuery(GET_REQ_CHAR, {
    variables: { id: charData.id },
    skip: !charData.id
  });
  const map = useQuery(GET_REQ_MAP, {
    variables: { id: mapData.id },
    skip: !mapData.id
  });

  useEffect(() => {
    if (!isLicenseAccepted) return;

    exportHandler();
  }, [isLicenseAccepted]);

  const exportHandler = async () => {
    switch (moduleType) {
      case AppModules.char:
        const externalCharData = prepareExternalCharData(charData);

        if (char.error) {
          addNotification(
            `Expected error during checking existing char: ${char.error}`,
            Notification.error
          );
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
        const externalMapData = await prepareExternalMapData(mapData);

        if (map.error) {
          addNotification(
            `Expected error during checking existing map: ${map.error}`,
            Notification.error
          );
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
    <>
      { isActivePopup && ReactDOM.createPortal(
        <ExportAlert 
          isActivePopup={setIsActivePopup}
          isAccepted={setIsLicenseAccepted}
        />, document.body)
      }
      <span
        onClick={() => setIsActivePopup(true)}
      >
        {text ? text : creator?.panel?.options?.save?.content}
      </span>
    </>
  );
};