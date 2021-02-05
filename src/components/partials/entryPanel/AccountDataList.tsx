import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET__REQ_CHARS_BY_AUTHOR } from '../../../api/queries/getReqCharsByAuthor';
import { GET__REQ_MAPS_BY_AUTHOR } from '../../../api/queries/getReqMapsByAuthor';
import { loadCharData } from '../../../store/actions/charActions';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { Redirect } from 'react-router';
import { ContentContext } from '../../../Template';
import { prepareInternalCharData } from '../../../scripts/parsers/prepareInternalCharData';
import { prepareInternalMapData } from '../../../scripts/parsers/prepareInternalMapData';
import { loadMapData } from '../../../store/actions/mapActions';
import { isValidExternalCharData } from '../../../scripts/validators/isValidExternalCharData';
import { isValidExternalMapData } from '../../../scripts/validators/isValidExternalMapData';
import { addNotification } from '../../../scripts/utils/notifications';
import { Notification } from '../../../models/notification.model';
import { AppModules } from '../../../models/appModules.model';
import { IApp } from '../../../interfaces/app.inteface';
import { getUserId } from '../../../scripts/user/getUserId';


export const AccountDataList: React.FC<IApp> = ({ moduleType }) => {
  const { lang, routes } = useContext(ContentContext);
  const userId = getUserId() ?? '';
  console.log('userId', userId);
  const char = useQuery(GET__REQ_CHARS_BY_AUTHOR, {
    variables: { author_id: userId },
    pollInterval: 1000
  });
  const map = useQuery(GET__REQ_MAPS_BY_AUTHOR, {
    variables: { author_id: userId },
    pollInterval: 1000
  });
  const [redirect, setRedirect] = useState<null | string>(null);
  const dispatch = useDispatch();

  if (char.loading || map.loading) return <p> Loading... </p>;
  if (char.error || map.error) return <p> Couldn't load data </p>;

  const loadFromDb = (loadedData) => {
    switch (moduleType) {
      case AppModules.char:
        if (isValidExternalCharData(loadedData)) {
          const internalCharData = prepareInternalCharData(loadedData);
          dispatch(loadCharData(internalCharData));
          setRedirect(routes?.char);
        } else {
          addNotification('You are trying to load invalid char data', Notification.error);
        }
        
      break;
      case AppModules.map:
        if (isValidExternalMapData(loadedData)) {
          const internalMapData = prepareInternalMapData(loadedData);
          dispatch(loadMapData(internalMapData));
          setRedirect(routes?.creator);
        } else {
          addNotification('You are trying to load invalid map data', Notification.error);
        }
        
      break;
    }
  };

  return (
    <>
      {
        redirect !== null ? (
          <Redirect to={`/${lang}/${redirect}`}/>
        ) : null
      }
      <ul className="productionDataList">
        { 
          moduleType === AppModules.char ? (
            char.data?.getRequestedCharsByAuthor.map(char => {
              return (
                <li onClick={() => loadFromDb(char)} key={uuid()}> 
                  <span>Internal id:</span>{ char._id }
                  <span>Name:</span>{ char.name }
                  <span>Type:</span>{ char.choosed }
                </li>
              );
            })
          ) : null
        }
        { 
          moduleType === AppModules.map ? (
            map.data?.getRequestedMapsByAuthor.map(mapData => {
              return (
                <li onClick={() => loadFromDb(mapData)} key={uuid()}> 
                  <span>Internal id:</span>{ mapData._id }
                  <span>Name:</span>{ mapData.map_name }
                </li>
              );
            })
          ) : null
        }
      </ul>
    </>
  );
};