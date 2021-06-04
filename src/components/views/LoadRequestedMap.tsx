import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REQ_MAP } from '../../api/angotiaResources/queries/map/getReqMap';
import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux';
import { loadMapData } from '../../store/actions/mapActions';
import { isValidExternalMapData } from '../../scripts/validators/isValidExternalMapData';
import { ContentContext } from '../../Template';
import { prepareInternalMapData } from '../../scripts/parsers/prepareInternalMapData';
import { NotFound } from './NotFound';

export const LoadRequestedMap = () => {
  const { lang, routes } = useContext(ContentContext);
  const [redirect, setRedirect] = useState<null | string>(null);
  const dispatch = useDispatch();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get('id');
  const map = useQuery(GET_REQ_MAP, {
    variables: { id },
    onCompleted: data => loadFromDb(data.getRequestedMap)
  });

  const loadFromDb = (loadedData) => {
    if (isValidExternalMapData(loadedData)) {
      const internalMapData = prepareInternalMapData(loadedData);
      dispatch(loadMapData(internalMapData));
      setRedirect(routes?.creator);
    }
  };

  return (
    <>
      {
        redirect !== null ? (
          <Redirect to={`/${lang}/${redirect}`}/>
        ) : null
      }
      {
        map.error && (
          <NotFound
            title='Cannot load resource'
            description='Propably you typed wrong resource id'
          />
        )
      }
      {
        map.loading && (
          <span> Loading resource </span>
        )
      }
    </>
  );
};