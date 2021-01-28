import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from "react-router";
import uuid from 'uuid/v4';
import appConfig from '../../assets/configs/app.config.json';
import { enContent } from '../../assets/content/langs/en/index';
import { plContent } from '../../assets/content/langs/pl/index';
import { IRouteProps, IMatchParams } from '../../interfaces/routing.interface';
import { Icontent } from '../../interfaces/content.interface';
import { IStore } from '../../interfaces/store.interface';


const LangMenu: React.FC<IRouteProps<IMatchParams>> = props => {
  const currLang: string = useSelector((state: IStore) => state.ui.language);

  const changeLanguage = (lang: string): void => {
    let content: Icontent;

    switch(lang) {
      case 'en':
        content = enContent;
      break;
      case 'pl':
        content = plContent;
      break;
      default:
        content = enContent;
      break;
    }

    props.history.push(`/${lang}/${content.routes.home}`);
    window.location.reload();
  };

  return (
    <aside className="labelMark labelMark--langs t-paragraph5Normal">
      {
        appConfig.langs.map((lang: string) => {
          return (
            <span 
              key={uuid()} 
              onClick={() => changeLanguage(lang)}
              className={`${
                (
                  lang === currLang || 
                  (lang === 'en' && currLang === '')
                ) ? 'labelMark--lang' : ''
              }`}
            > 
              { lang } 
            </span>
          );
        })
      }
    </aside>
  );
};

export default withRouter(LangMenu);