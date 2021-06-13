import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../../interfaces/store.interface';
import { toggleErrorPanel } from '../../../store/actions/uiActions';
import { AppModules } from '../../../models/appModules.model';
import { IApp } from '../../../interfaces/app.inteface';
import { useTranslation } from 'react-i18next';


export const ErrorMark: React.FC<IApp> = ({ moduleType }) => {
  const mapErrors = useSelector((state: IStore) => state.ui.mapCreationErrors);
  const charErrors = useSelector((state: IStore) => state.ui.charCreationErrors);
  const dispatch = useDispatch();
  const { t } = useTranslation(['common']);

  return (
    <>
      {
        (moduleType === AppModules.map && mapErrors.length > 0) ||
        (moduleType === AppModules.char && charErrors.length > 0) ? (
          <aside 
            className="errorMark"
            onClick={() => dispatch(toggleErrorPanel(true))}
          >
            <div className="errorMark__count"> 
              <span> ! </span>
            </div>
            <div className="errorMark__message"> 
              <span> 
                { moduleType === AppModules.map ? mapErrors.length : null }
                { moduleType === AppModules.char ? charErrors.length : null }
              </span>
              { t('common:errors') }
            </div>
          </aside>
        ) : null
      }
    </>
  );
};