import React from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { ALL_CHARS_BASE_INFO } from '../../../api/angotiaResources/queries/char/allCharsBaseInfo';
import { GET_CHAR } from '../../../api/angotiaResources/queries/char/getChar';
import { loadCharData } from '../../../store/actions/charActions';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { useHistory } from 'react-router-dom';
import { prepareInternalCharData } from '../../../scripts/parsers/prepareInternalCharData';
import { isValidExternalCharData } from '../../../scripts/validators/isValidExternalCharData';
import { addNotification } from '../../../scripts/utils/notifications';
import { Notification } from '../../../models/notification.model';
import { useTranslation } from 'react-i18next';
import routesConfig from '../../../assets/configs/routes.config.json';
import { LoadingBar } from '../LoadingBar';


export const ProductionCharList: React.FC = () => {
  const char = useQuery(ALL_CHARS_BASE_INFO);
  const dispatch = useDispatch();
  const [getChar, { called, loading }] = useLazyQuery(GET_CHAR, {
    onCompleted: data => loadFromDb(data.getChar)
  });
  const { t } = useTranslation(['load', 'common']);
  const history = useHistory();

  if (char?.loading) return (
    <div className="listDataLoading">
      <LoadingBar isIcon={true} />
    </div>
  );
  if (loading) return <LoadingBar isIcon={true} page={true} />;
  if (char?.error) return <p> { t('load:char.loadError') } </p>;

  const loadFromDb = (loadedData) => {
    if (isValidExternalCharData(loadedData)) {
      const internalCharData = prepareInternalCharData(loadedData);
      dispatch(loadCharData(internalCharData));
      history.push(routesConfig.charCreator);
    } else {
      addNotification(t('load:char.invalidData'), Notification.error);
    }
  };

  const loadChoosedChar = (id: string) => {
    if (called) return;

    getChar({
      variables: { id }
    });
  };

  return (
    <ul className="loadedDataList">
      { 
        char.data?.allChars.map(char => {
          return (
            <li onClick={() => loadChoosedChar(char.id)} key={uuid()}> 
              <span> { t('common:indernalId') }: </span>{ char._id }
              <span> { t('common:name') }: </span>{ char.name }
              <span> { t('common:type') }: </span>{ char.type }
            </li>
          );
        })
      }
    </ul>
  );
};