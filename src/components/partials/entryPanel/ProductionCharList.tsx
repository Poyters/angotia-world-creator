import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_CHARS } from '../../../api/angotiaResources/queries/char/allChars';
import { loadCharData } from '../../../store/actions/charActions';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { Redirect } from 'react-router';
import { ContentContext } from '../../../Template';
import { prepareInternalCharData } from '../../../scripts/parsers/prepareInternalCharData';
import { isValidExternalCharData } from '../../../scripts/validators/isValidExternalCharData';
import { addNotification } from '../../../scripts/utils/notifications';
import { Notification } from '../../../models/notification.model';


export const ProductionCharList: React.FC = () => {
  const { lang, routes } = useContext(ContentContext);
  const char = useQuery(ALL_CHARS);
  const [redirect, setRedirect] = useState<null | string>(null);
  const dispatch = useDispatch();

  if (char?.loading) return <p> Loading chars... </p>;
  if (char?.error) return <p> Couldn't load chars </p>;

  const loadFromDb = (loadedData) => {
    if (isValidExternalCharData(loadedData)) {
      const internalCharData = prepareInternalCharData(loadedData);
      dispatch(loadCharData(internalCharData));
      setRedirect(routes?.char);
    } else {
      addNotification('You are trying to load invalid char data', Notification.error);
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
          char.data?.allChars.map(char => {
            return (
              <li onClick={() => loadFromDb(char)} key={uuid()}> 
                <span>Internal id:</span>{ char._id }
                <span>Name:</span>{ char.name }
                <span>Type:</span>{ char.choosed }
              </li>
            );
          })
        }
      </ul>
    </>
  );
};