import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from "react-router";
import uuid from 'uuid/v4';

//Import configs
import appConfig from '../../assets/configs/appConfig.json';

//Import content
import { enContent } from '../../assets/content/langs/en/index';
import { plContent } from '../../assets/content/langs/pl/index';

//Import interfaces
import { IRouteProps, IMatchParams } from '../../assets/interfaces/routingInterfaces';
import { Icontent } from '../../assets/interfaces/contentInterfaces';


const LangMenu: React.FC<IRouteProps<IMatchParams>> = props => {
  const currLang: string = useSelector(state => state.ui.language);

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
          const langStyle = {
            color: (lang === currLang || (lang === 'en' && currLang === '')) ? '#27427c' : 'inherit'
          };

          return (
            <span 
              key={uuid()} 
              onClick={() => changeLanguage(lang)}
              style={langStyle}
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