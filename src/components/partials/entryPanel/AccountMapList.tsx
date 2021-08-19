import React from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { 
  GET__REQ_MAPS_BY_AUTHOR
} from '../../../api/angotiaResources/queries/map/getReqMapsByAuthor';
import { GET_REQ_MAP } from '../../../api/angotiaResources/queries/map/getReqMap';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { prepareInternalMapData } from '../../../scripts/parsers/prepareInternalMapData';
import { loadMapData } from '../../../store/actions/mapActions';
import { isValidExternalMapData } from '../../../scripts/validators/isValidExternalMapData';
import { addNotification } from '../../../scripts/utils/notifications';
import { Notification } from '../../../models/notification.model';
import { getUserId } from '../../../scripts/user/getUserId';
import { useTranslation } from 'react-i18next';
import routesConfig from '../../../assets/configs/routes.config.json';
import { useHistory } from 'react-router-dom';
import { LoadingBar } from '../LoadingBar';


export const AccountMapList: React.FC = () => {
  const userId = getUserId() ?? '';
  const map = useQuery(GET__REQ_MAPS_BY_AUTHOR, {
    variables: { author_id: userId }
  });
  const dispatch = useDispatch();
  const [getReqMap, { called, loading }] = useLazyQuery(GET_REQ_MAP, {
    onCompleted: data => loadFromDb(data.getRequestedMap)
  });
  const { t } = useTranslation(['load', 'common']);
  const history = useHistory();

  if (map.loading || loading) return <LoadingBar isIcon={true} centeralized={true}/>;
  if (map.error) return <p> { t('load:map.loadError') } </p>;

  const loadFromDb = (loadedData) => {
    if (isValidExternalMapData(loadedData)) {
      const internalMapData = prepareInternalMapData(loadedData);
      dispatch(loadMapData(internalMapData));
      history.push(routesConfig.mapCreator);
    } else {
      addNotification(t('load:map.invalidData'), Notification.error);
    }
  };

  const loadChoosedMap = (id: string) => {
    if (called) return;

    getReqMap({
      variables: { id }
    });
  };

  return (
    <ul className="loadedDataList">
      { 
        map.data?.getRequestedMapsByAuthor.map(mapData => {
          return (
            <li onClick={() => loadChoosedMap(mapData.id)} key={uuid()}> 
              <span> { t('common:indernalId') }: </span>{ mapData._id }
              <span> { t('common:name') }: </span>{ mapData.map_name }
            </li>
          );
        })
      }
    </ul>
  );
};