import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { Redirect } from 'react-router';
import { loadCharData } from '../../../store/actions/charActions';
import { charState } from '../../../store/states/charState';
import { deepCopy } from '../../../scripts/utils/deepCopy';
import { useTranslation } from 'react-i18next';


export const CreateChar: React.FC = () => {
  const [redirect, setRedirect] = useState<null | string>(null);
  const emptyCharState = deepCopy(charState);
  const dispatch = useDispatch();
  const { t } = useTranslation(['common']);

  const newCharInstanceHanlder = (): void => {
    dispatch(loadCharData(emptyCharState));
    setRedirect('routes?.char');
  };

  return (
    <>
      {
        redirect !== null ? (
          <Redirect to={`/${redirect}`}/>
        ) : null
      }
    <li key={uuid()} onClick={newCharInstanceHanlder}>
      { t('common:char') }  
    </li>
    </>
  );
};