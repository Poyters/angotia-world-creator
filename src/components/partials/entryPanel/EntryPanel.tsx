import React , { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { ContentContext } from '../../../Template';
import { AppModules } from '../../../models/appModules.model';
import { LoadPopup } from './LoadPopup';
import { CreateChar } from './CreateChar';
import uuid from 'uuid/v4';

export const EntryPanel: React.FC = () => {
  const { lang, routes } = useContext(ContentContext);
  const [isActiveLoadPopup, setIsActiveLoadPopup] = useState<boolean>(false);
  const [loadedDataType, setLoadedDataType] = useState<any>('');

  const loadDataHandler = (moduleType: string) => {
    console.log('loadDataHandler', moduleType);
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
            <span> Create </span>
            <nav className="extendedItem__submenu t-paragraph2Bold">
              <ul>
                <li key={uuid()}> Map </li>
                <CreateChar />
                <li key={uuid()}> Item </li>
              </ul>
            </nav>
          </li>
          <li className="t-paragraph1MediumLight extendedItem">
            <span> Load </span>
            <nav className="extendedItem__submenu t-paragraph2Bold">
              <ul>
                { loadModules() }
              </ul>
            </nav>
          </li>
          <li className="separatedItem t-paragraph1MediumLight">
            <Link to={`/${lang}/${routes.license}`}> License </Link>
          </li>
          <li className="t-paragraph1MediumLight">
            <Link to={`/${lang}/${routes.help}`}> Help </Link>
          </li>
          <li className="separatedItem">
            <a href="https://poyters.pl/">Exit</a>
          </li>
        </ul>

      </nav>
    </>
  );
};
