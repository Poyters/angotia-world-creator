
import React from 'react';
import { IPopup } from '../../../interfaces/popup.interface';
import { Link } from 'react-router-dom';
import routesConfig from '../../../assets/configs/routes.config.json';
import { useTranslation } from 'react-i18next';

interface IExportAlert {
  isAccepted: (...args: boolean[]) => void
}

export const ExportAlert = ({ isActivePopup, isAccepted }: IExportAlert & IPopup) => {
  const { t } = useTranslation(['save']);

  const handleAccept = () => {
    isActivePopup(false);
    isAccepted(true);
  };

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup"> 
        <div 
          className="g-exitBtn g-exitBtn--popup"
          onClick={() => isActivePopup(false)}
        > </div>
        <header className="insertPopup__header insertPopup__header t-paragraph3Light">
          { t('save:exportAlert') }
        </header>
        <p>
          { t('save:exportWarning') } {' '}
          <Link to={`/${routesConfig.license}`} className="t-anhor1Bold"> 
            { t('save:licenseName') }
          </Link>
        </p>
        <button 
          type="submit" 
          className="insertPopup__submit t-paragraphLight" 
          onClick={handleAccept} 
        > 
          { t('save:acceptLicense') }
        </button>
      </div>
    </div>
  );
};