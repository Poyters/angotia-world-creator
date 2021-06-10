import React, { useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { ALL_CHARS_BASE_INFO } from '../../../api/angotiaResources/queries/char/allCharsBaseInfo';
import { GET_CHAR } from '../../../api/angotiaResources/queries/char/getChar';
import { loadCharData } from '../../../store/actions/charActions';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { Redirect } from 'react-router';
import { prepareInternalCharData } from '../../../scripts/parsers/prepareInternalCharData';
import { isValidExternalCharData } from '../../../scripts/validators/isValidExternalCharData';
import { addNotification } from '../../../scripts/utils/notifications';
import { Notification } from '../../../models/notification.model';


export const ProductionCharList: React.FC = () => {
  const char = useQuery(ALL_CHARS_BASE_INFO);
  const [redirect, setRedirect] = useState<null | string>(null);
  const dispatch = useDispatch();
  const [getChar, { called }] = useLazyQuery(GET_CHAR, {
    onCompleted: data => loadFromDb(data.getChar)
  });

  if (char?.loading) return <p> Loading chars... </p>;
  if (char?.error) return <p> Couldn't load chars </p>;

  const loadFromDb = (loadedData) => {
    if (isValidExternalCharData(loadedData)) {
      const internalCharData = prepareInternalCharData(loadedData);
      dispatch(loadCharData(internalCharData));
      setRedirect('routes?.char');
    } else {
      addNotification('You are trying to load invalid char data', Notification.error);
    }
  };

  const loadChoosedChar = (id: string) => {
    if (called) return;

    getChar({
      variables: { id }
    });
  };

  return (
    <>
      {
        redirect !== null ? (
          <Redirect to={`/${redirect}`}/>
        ) : null
      }
      <ul className="loadedDataList">
        { 
          char.data?.allChars.map(char => {
            return (
              <li onClick={() => loadChoosedChar(char.id)} key={uuid()}> 
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