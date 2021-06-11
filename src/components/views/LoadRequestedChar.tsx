import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REQ_CHAR } from '../../api/angotiaResources/queries/char/getReqChar';
import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux';
import { prepareInternalCharData } from '../../scripts/parsers/prepareInternalCharData';
import { isValidExternalCharData } from '../../scripts/validators/isValidExternalCharData';
import { loadCharData } from '../../store/actions/charActions';
import { NotFound } from './NotFound';
import routesConfig from '../../assets/configs/routes.config.json';

export const LoadRequestedChar = () => {
  const [redirect, setRedirect] = useState<null | string>(null);
  const dispatch = useDispatch();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get('id');
  const char = useQuery(GET_REQ_CHAR, {
    variables: { id },
    onCompleted: data => loadFromDb(data.getRequestedChar)
  });

  const loadFromDb = (loadedData) => {
    if (isValidExternalCharData(loadedData)) {
      const internalCharData = prepareInternalCharData(loadedData);
      dispatch(loadCharData(internalCharData));
      setRedirect(routesConfig.charCreator);
    }
  };

  return (
    <>
      {
        redirect !== null ? (
          <Redirect to={`/${redirect}`}/>
        ) : null
      }
      {
        char.error && (
          <NotFound
            title='Cannot load resource'
            description='Propably you typed wrong resource id'
          />
        )
      }
      {
        char.loading && (
          <span> Loading resource </span>
        )
      }
    </>
  );
};