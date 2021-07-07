import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REQ_CHAR } from '../../api/angotiaResources/queries/char/getReqChar';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { prepareInternalCharData } from '../../scripts/parsers/prepareInternalCharData';
import { isValidExternalCharData } from '../../scripts/validators/isValidExternalCharData';
import { loadCharData } from '../../store/actions/charActions';
import { NotFound } from './NotFound';
import routesConfig from '../../assets/configs/routes.config.json';

export const LoadRequestedChar = () => {
  const dispatch = useDispatch();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get('id');
  const char = useQuery(GET_REQ_CHAR, {
    variables: { id },
    onCompleted: data => loadFromDb(data.getRequestedChar)
  });
  const history = useHistory();

  const loadFromDb = (loadedData) => {
    if (isValidExternalCharData(loadedData)) {
      const internalCharData = prepareInternalCharData(loadedData);
      dispatch(loadCharData(internalCharData));
      history.push(routesConfig.charCreator);
    }
  };

  return (
    <>
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