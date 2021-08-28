import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REQ_MAP } from '../../api/angotiaResources/queries/map/getReqMap';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadMapData } from '../../store/actions/mapActions';
import { isValidExternalMapData } from '../../scripts/validators/isValidExternalMapData';
import { prepareInternalMapData } from '../../scripts/parsers/prepareInternalMapData';
import { NotFound } from './NotFound';
import routesConfig from '../../assets/configs/routes.config.json';
import { LoadingSpinner, Size } from 'poyters-components';


export const LoadRequestedMap = () => {
  const dispatch = useDispatch();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get('id');
  const map = useQuery(GET_REQ_MAP, {
    variables: { id },
    onCompleted: data => loadFromDb(data.getRequestedMap)
  });
  const history = useHistory();

  const loadFromDb = (loadedData) => {
    if (isValidExternalMapData(loadedData)) {
      const internalMapData = prepareInternalMapData(loadedData);
      dispatch(loadMapData(internalMapData));
      history.push(routesConfig.mapCreator);
    }
  };

  return (
    <>
      {
        map.error && (
          <NotFound
            title='Cannot load resource'
            description='Propably you typed wrong resource id'
          />
        )
      }
      {
        map.loading && <LoadingSpinner defaultIcon={true} fullPage={true} size={Size.large} />
      }
    </>
  );
};