import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from "react-router";

//Import configs
import appConfig from '../../assets/configs/appConfig.json';

//Import content
import { enContent } from '../../assets/content/langs/en/index';
import { plContent } from '../../assets/content/langs/pl/index';


const LangMenu: React.FC = (props: any) => {
  const currLang: string = useSelector(state => state.ui.language);

  const changeLanguage = (lang: string): void => {
    let content: any;

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
  }

  return (
    <aside className="labelMark labelMark--langs t-paragraph5Normal">
      {
        appConfig.langs.map((lang, index) => {
          const langStyle = {
            color: (lang === currLang || (lang === 'en' && currLang === '')) ? '#27427c' : 'inherit'
          }

          return (
            <span 
              key={index} 
              onClick={() => changeLanguage(lang)}
              style={langStyle}
            > 
              { lang } 
            </span>
          )
        })
      }
    </aside>
  );
};

export default withRouter(LangMenu);