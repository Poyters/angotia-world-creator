import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import configs
import appConfig from '../../assets/configs/appConfig.json';

//Import actions
import { changeLang } from '../../redux/actions/uiActions';


const LangMenu: React.FC = () => {
  const currLang: string = useSelector(state => state.ui.language);
  const dispatch = useDispatch();

  return (
    <aside className="labelMark labelMark--langs t-paragraph5Normal">
      {
        appConfig.langs.map((lang, index) => {
          const langStyle = {
            color: lang === currLang ? '#27427c' : 'inherit'
          }

          return (
            <span 
              key={index} 
              onClick={() => dispatch(changeLang(lang))}
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

export default LangMenu;