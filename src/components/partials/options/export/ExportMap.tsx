
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../../../interfaces/store.interface';
import { prepareExternalMapData } from '../../../../scripts/parsers/prepareExternalMapData';
import { CREATE_REQ_MAP } from '../../../../api/angotiaResources/mutations/map/createReqMap';
import { UPDATE_REQ_MAP } from '../../../../api/angotiaResources/mutations/map/updateReqMap';
import { GET_REQ_MAP } from '../../../../api/angotiaResources/queries/map/getReqMap';
import { useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import { addNotification } from '../../../../scripts/utils/notifications';
import { setMapDatabaseId } from '../../../../store/actions/mapActions';
import { Notification } from '../../../../models/notification.model';
import { useTranslation } from 'react-i18next';
import { deepCopy } from '../../../../scripts/utils/deepCopy';

interface IExportMap {
  isAccepted: boolean,
  setIsLicenseAccepted
}

export const ExportMap = ({ isAccepted, setIsLicenseAccepted }: IExportMap) => {
  const { t } = useTranslation(['save']);
  const dispatch = useDispatch();
  const [updateMap] = useMutation(UPDATE_REQ_MAP);
  const mapData = useSelector((state: IStore) => state.map);
  const mapErrors = useSelector((state: IStore) => state.ui.mapCreationErrors);
  const [addMap] = useMutation(CREATE_REQ_MAP, {
    onCompleted({ createRequestedMap }) { // add database id to states
      dispatch(setMapDatabaseId(createRequestedMap.id));
    },
    fetchPolicy: 'no-cache'
  });
  const map = useQuery(GET_REQ_MAP, {
    fetchPolicy: 'no-cache',
    variables: { id: mapData.id },
    skip: !mapData.id
  });

  useEffect(() => {
    if (!isAccepted) return;

    exportHandler();
  }, [isAccepted]);

  const exportHandler = async () => {
    const externalMapData = deepCopy(await prepareExternalMapData(mapData));

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

    setIsLicenseAccepted(false);
  };

  return (
    <>
      { t('save:exportTitle') }  
    </>
  );
};