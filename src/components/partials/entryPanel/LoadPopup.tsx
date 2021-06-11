import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { loadCharData } from '../../../store/actions/charActions';
import { loadMapData } from '../../../store/actions/mapActions';
import { prepareInternalCharData } from '../../../scripts/parsers/prepareInternalCharData';
import { prepareInternalMapData } from '../../../scripts/parsers/prepareInternalMapData';
import { isValidExternalCharData } from '../../../scripts/validators/isValidExternalCharData';
import { isValidExternalMapData } from '../../../scripts/validators/isValidExternalMapData';
import { addNotification } from '../../../scripts/utils/notifications';
import { Notification } from '../../../models/notification.model';
import { AppModules } from '../../../models/appModules.model';
import { IPopup } from '../../../interfaces/popup.interface';
import { IApp } from '../../../interfaces/app.inteface';
import { ProductionCharList } from './ProductionCharList';
import { ProductionMapList } from './ProductionMapList';
import { AccountCharList } from './AccountCharList';
import { AccountMapList } from './AccountMapList' ;
import { useTranslation } from 'react-i18next';
import routesConfig from '../../../assets/configs/routes.config.json';


export const LoadPopup = ({ isActivePopup, moduleType }: IPopup & IApp) => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState<null | string>(null);
  const [isActiveProduction, setIsActiveProduction] = useState(false);
  const [isActiveAccount, setIsActiveAccount] = useState(false);
  const { t } = useTranslation(['load']);

  useEffect(() => {
    const keyPressHandler = (event): void => {
      if (event.key === 'Escape') isActivePopup(false);
    };

    document.addEventListener('keydown', keyPressHandler);
    return () => {
      document.removeEventListener('keydown', keyPressHandler);
    };
  });

  const switchToProd = () => {
    setIsActiveProduction(true);
    setIsActiveAccount(false);
  };

  const switchToAccount = () => {
    setIsActiveProduction(false);
    setIsActiveAccount(true);
  };

  const loadByJson = (evt: any) => {
    const file = evt.target.files[0]; 
    const reader = new FileReader();

    reader.onload = (():any => {
      return (e) => {
        let loadedData;

        try {
          loadedData = JSON.parse(e.target.result);
        } catch {
          addNotification(t('load:isNotJson'), Notification.error);
          return;
        }

        switch (moduleType) {
          case AppModules.map:
            if (isValidExternalMapData(loadedData)) {
              const internalData = prepareInternalMapData(loadedData);
              dispatch(loadMapData(internalData));
              setRedirect(routesConfig.mapCreator);
            } else {
              addNotification(t('load:map.invalidData'), Notification.error);
            }
            
          break;
          case AppModules.char:
            if (isValidExternalCharData(loadedData)) {
              const internalData = prepareInternalCharData(loadedData);
              dispatch(loadCharData(internalData));
              setRedirect(routesConfig.charCreator);
            } else {
              addNotification(t('load:char.invalidData'), Notification.error);
            }
          break;
          default:
            addNotification(t('load:invalidLoadType'), Notification.error);
        }
      };

    })();

    reader.readAsText(file);
  };

  const content = redirect !== null ? (
    <Redirect to={`/${redirect}`}/>
  ) : (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup">
        <div
          className="g-exitBtn g-exitBtn--popup"
          onClick={(): void => isActivePopup(false)}
        > </div>
        <header className="insertPopup__header t-paragraph3Light">
          { t('load:title') }
        </header>
        <section className="popupChooseBoxes">
          <div 
            className={
              `popupChooseBoxes__box ${isActiveProduction ? 'popupChooseBoxes__box--active' : ''}`
            }
            onClick={switchToProd}
          >
            { t('load:prodDb') }
          </div>
          <div
            className={
              `popupChooseBoxes__box ${isActiveAccount ? 'popupChooseBoxes__box--active' : ''}`
            }
            onClick={switchToAccount}
          >
            { t('load:account') }
          </div>
          <input 
            type="file" 
            id="loadInput" 
            className="g-hidenFileInput"
            onChange={(event): void => loadByJson(event)}
          /> 
          <label 
            className="popupChooseBoxes__box"
            htmlFor="loadInput"
          >
            { t('load:computer') }
          </label>
        </section>
        {
          isActiveProduction && moduleType === AppModules.map ? (
            <ProductionMapList />
          ) : null
        }
        {
          isActiveProduction && moduleType === AppModules.char ? (
            <ProductionCharList />
          ) : null
        }
        {
          isActiveAccount && moduleType === AppModules.map ? (
            <AccountMapList />
          ) : null
        }
        {
          isActiveAccount && moduleType === AppModules.char ? (
            <AccountCharList />
          ) : null
        }
      </div>
    </div>
  );

  return (
    content
  );
};