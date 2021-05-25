import React, { useState, useContext } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { GET_MAP } from '../../../api/angotiaResources/queries/map/getMap';
import { ALL_MAPS_BASE_INFO } from '../../../api/angotiaResources/queries/map/allMapsBaseInfo';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { Redirect } from 'react-router';
import { ContentContext } from '../../../Template';
import { prepareInternalMapData } from '../../../scripts/parsers/prepareInternalMapData';
import { loadMapData } from '../../../store/actions/mapActions';
import { isValidExternalMapData } from '../../../scripts/validators/isValidExternalMapData';
import { addNotification } from '../../../scripts/utils/notifications';
import { Notification } from '../../../models/notification.model';

export const ProductionMapList = () => {
  const { lang, routes } = useContext(ContentContext);
  const map = useQuery(ALL_MAPS_BASE_INFO);
  const [redirect, setRedirect] = useState<null | string>(null);
  const dispatch = useDispatch();
  const [getMap, { called }] = useLazyQuery(GET_MAP, {
    onCompleted: data => loadFromDb(data.getMap)
  });

  if (map.loading) return <p> Loading maps... </p>;
  if (map.error) return <p> Couldn't load maps </p>;

  const loadFromDb = (loadedData) => {
    if (isValidExternalMapData(loadedData)) {
      const internalMapData = prepareInternalMapData(loadedData);
      dispatch(loadMapData(internalMapData));
      setRedirect(routes?.creator);
    } else {
      addNotification('You are trying to load invalid map data', Notification.error);
    }
  };

   const loadChoosedMap = (id: string) => {
    if (called) return;

    getMap({
      variables: { id }
    });
  };

  return (
    <>
      {
        redirect !== null ? (
          <Redirect to={`/${lang}/${redirect}`}/>
        ) : null
      }
      <ul className="loadedDataList">
        { 
          map.data?.allMaps.map(mapData => {
            return (
              <li onClick={() => loadChoosedMap(mapData.id)} key={uuid()}> 
                <span>Internal id:</span>{ mapData._id }
                <span>Name:</span>{ mapData.map_name }
              </li>
            );
          })
        }
      </ul>
    </>
  );
};