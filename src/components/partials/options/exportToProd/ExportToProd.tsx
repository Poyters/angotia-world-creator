
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
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
import { useTranslation } from 'react-i18next';


export const ExportToProd = ({ moduleType }: IApp) => {
  const { t } = useTranslation(['save']);
  const [isActivePopup, setIsActivePopup] = useState<boolean>(false);
  const [isLicenseAccepted, setIsLicenseAccepted] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [addChar] = useMutation(CREATE_REQ_CHAR, {
    onCompleted({ createRequestedChar }) { // add database id to states
      dispatch(setCharDatabaseId(createRequestedChar.id));
    }
  });
  const [addMap] = useMutation(CREATE_REQ_MAP, {
    onCompleted({ createRequestedMap }) { // add database id to states
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
          addNotification(t('save:char.exportError'),
            Notification.error
          );
          return;
        } else if (charErrors.length > 0) {
          addNotification(t('save:char.protectErrors'), Notification.error);
          return;
        }

        if (char.data) { // Char already exists id database
          delete externalCharData._id;
          updateChar({ variables: { id: charData.id, ...externalCharData } });
          addNotification(t('save:char.exportUpdate'));
        } else { // Char doest't exists
          addChar({ variables: { ...externalCharData } });
          addNotification(t('save:char.exportAdd'));
        }
        break;
      case AppModules.map:
        const externalMapData = await prepareExternalMapData(mapData);

        if (map.error) {
          addNotification(t('save:map.exportError'),
            Notification.error
          );
          return;
        } else if (mapErrors.length > 0) {
          addNotification(t('save:map.protectErrors'), Notification.error);
          return;
        }

        if (map.data) { // Map already exists id database
          delete externalMapData._id;
          updateMap({ variables: { id: mapData.id, ...externalMapData } });
          addNotification(t('save:map.exportUpdate'));
        } else { // Map doest't exists yet
          addMap({ variables: { ...externalMapData } });
          addNotification(t('save:map.exportAdd'));
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
        { t('save:exportTitle') }  
      </span>
    </>
  );
};