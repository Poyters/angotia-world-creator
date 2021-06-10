import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import uuid from 'uuid/v4';
import appConfig from '../../assets/configs/app.config.json';
import { enContent } from '../../assets/content/langs/en/index';
import { plContent } from '../../assets/content/langs/pl/index';
import { IRouteProps, IMatchParams } from '../../interfaces/routing.interface';
import { Icontent } from '../../interfaces/content.interface';
import { IStore } from '../../interfaces/store.interface';
import { useTranslation } from 'react-i18next';


const LangMenu: React.FC<IRouteProps<IMatchParams>> = props => {
  const { t, i18n } = useTranslation();
  const currLang: string = useSelector((state: IStore) => state.ui.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <aside className="labelMark labelMark--langs t-paragraph5Normal">
      <button type="button" onClick={() => changeLanguage('en')}>
        en
      </button>
      <button type="button" onClick={() => changeLanguage('pl')}>
        pl
      </button>
      <button type="button" onClick={() => changeLanguage('fr')}>
        fr
      </button>
    </aside>
  );
};

export default withRouter(LangMenu);