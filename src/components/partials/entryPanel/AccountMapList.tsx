import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET__REQ_MAPS_BY_AUTHOR } from '../../../api/angotiaResources/queries/map/getReqMapsByAuthor';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { Redirect } from 'react-router';
import { ContentContext } from '../../../Template';
import { prepareInternalMapData } from '../../../scripts/parsers/prepareInternalMapData';
import { loadMapData } from '../../../store/actions/mapActions';
import { isValidExternalMapData } from '../../../scripts/validators/isValidExternalMapData';
import { addNotification } from '../../../scripts/utils/notifications';
import { Notification } from '../../../models/notification.model';
import { getUserId } from '../../../scripts/user/getUserId';


export const AccountMapList: React.FC = () => {
  const { lang, routes } = useContext(ContentContext);
  const userId = getUserId() ?? '';
  const map = useQuery(GET__REQ_MAPS_BY_AUTHOR, {
    variables: { author_id: userId }
  });
  const [redirect, setRedirect] = useState<null | string>(null);
  const dispatch = useDispatch();

  if (map.loading) return <p> Loading... </p>;
  if (map.error) return <p> Couldn't load data </p>;

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
          map.data?.getRequestedMapsByAuthor.map(mapData => {
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