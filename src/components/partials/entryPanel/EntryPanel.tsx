import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { AppModules } from '../../../models/appModules.model';
import { LoadPopup } from './LoadPopup';
import { CreateChar } from './CreateChar';
import uuid from 'uuid/v4';
import { CreateMap } from './CreateMap';
import { useTranslation } from 'react-i18next';
import routesConfig from '../../../assets/configs/routes.config.json';

export const EntryPanel: React.FC = () => {
  const [isActiveLoadPopup, setIsActiveLoadPopup] = useState<boolean>(false);
  const [loadedDataType, setLoadedDataType] = useState<any>('');
  const { t } = useTranslation(['entryPanel']);

  const loadDataHandler = (moduleType: string) => {
    setLoadedDataType(moduleType);
    setIsActiveLoadPopup(true);
  };

  const loadModules = () => {
    const modules: any = [];

    for (const module in AppModules) {
      modules.push(
        <li key={uuid()} onClick={()=> loadDataHandler(module.toUpperCase())}> { module } </li>
      );
    }

    return modules;
  };

  return (
    <>
      { isActiveLoadPopup ? ReactDOM.createPortal(
        <LoadPopup isActivePopup={setIsActiveLoadPopup} moduleType={loadedDataType}/>, document.body
      ) : null}
       <nav className="entryPanel">
        <ul className="entryPanel__menu">
          <li className="t-paragraph1MediumLight extendedItem">
            <span> { t('entryPanel:create.label') } </span>
            <nav className="extendedItem__submenu t-paragraph2Bold">
              <ul>
                <CreateMap />
                <CreateChar />
                <li key={uuid()}> { t('entryPanel:create.item') } </li>
              </ul>
            </nav>
          </li>
          <li className="t-paragraph1MediumLight extendedItem">
            <span> { t('entryPanel:load') } </span>
            <nav className="extendedItem__submenu t-paragraph2Bold">
              <ul>
                { loadModules() }
              </ul>
            </nav>
          </li>
          <li className="separatedItem t-paragraph1MediumLight">
            <Link to={`/${routesConfig.license}`}> { t('entryPanel:license') } </Link>
          </li>
          <li className="t-paragraph1MediumLight">
            <Link to={`/${routesConfig.help}`}> { t('entryPanel:help') } </Link>
          </li>
          <li className="separatedItem">
            <a href="https://poyters.pl/"> { t('entryPanel:exit') } </a>
          </li>
        </ul>

      </nav>
    </>
  );
};
