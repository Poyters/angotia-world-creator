import React from 'react';
import { useTranslation } from 'react-i18next';


export const LangMenu = () => {
  const { i18n } = useTranslation();

  const getLanguage = () => i18n.language || window.localStorage.i18nextLng;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <aside className="labelMark labelMark--langs t-paragraph5Normal">
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        className={getLanguage() === 'en' ?'labelMark--lang' : ''}
      >
        en
      </button>
      <button 
        type="button"
        onClick={() => changeLanguage('pl')}
        className={getLanguage() === 'pl' ?'labelMark--lang' : ''}
      >
        pl
      </button>
      <button 
        type="button"
        onClick={() => changeLanguage('fr')}
        className={getLanguage() === 'fr' ?'labelMark--lang' : ''}
      >
        fr
      </button>
    </aside>
  );
};