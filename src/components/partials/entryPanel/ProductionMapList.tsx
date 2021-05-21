import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_MAPS } from '../../../api/angotiaResources/queries/map/allMaps';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { Redirect } from 'react-router';
import { ContentContext } from '../../../Template';
import { prepareInternalMapData } from '../../../scripts/parsers/prepareInternalMapData';
import { loadMapData } from '../../../store/actions/mapActions';
import { isValidExternalMapData } from '../../../scripts/validators/isValidExternalMapData';
import { addNotification } from '../../../scripts/utils/notifications';
import { Notification } from '../../../models/notification.model';


export const ProductionMapList: React.FC = () => {
  const { lang, routes } = useContext(ContentContext);
  const map = useQuery(ALL_MAPS);
  const [redirect, setRedirect] = useState<null | string>(null);
  const dispatch = useDispatch();

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
              <li onClick={() => loadFromDb(mapData)} key={uuid()}> 
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