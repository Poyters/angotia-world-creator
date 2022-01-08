import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
import { useHistory } from 'react-router-dom';


export const LoadPopup = ({ isActivePopup, moduleType }: IPopup & IApp) => {
  const dispatch = useDispatch();
  const [isActiveProduction, setIsActiveProduction] = useState(false);
  const [isActiveAccount, setIsActiveAccount] = useState(false);
  const { t } = useTranslation(['load', 'error']);
  const history = useHistory();

  useEffect(() => {
    const keyPressHandler = (event) => {
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

  const loadByJson = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event?.target?.files) {
      addNotification(t('error:generic'), Notification.error);
      return;
    }

    const file = event?.target?.files[0]; 
    const reader = new FileReader();

    reader.onload = (() => {
      return (event) => {
        let loadedData;

        if (typeof event?.target?.result !== 'string') {
          addNotification(t('load:isNotJson'), Notification.error);
          return;
        }

        try {
          loadedData = JSON.parse(event.target.result);
        } catch {
          addNotification(t('load:isNotJson'), Notification.error);
          return;
        }

        switch (moduleType) {
          case AppModules.map:
            if (isValidExternalMapData(loadedData)) {
              const internalData = prepareInternalMapData(loadedData);
              dispatch(loadMapData(internalData));
              history.push(routesConfig.mapCreator);
            } else {
              addNotification(t('load:map.invalidData'), Notification.error);
            }
            
          break;
          case AppModules.char:
            if (isValidExternalCharData(loadedData)) {
              const internalData = prepareInternalCharData(loadedData);
              dispatch(loadCharData(internalData));
              history.push(routesConfig.charCreator);
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


  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup">
        <div
          className="g-exitBtn g-exitBtn--popup"
          onClick={() => isActivePopup(false)}
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
            onChange={(event) => loadByJson(event)}
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
};