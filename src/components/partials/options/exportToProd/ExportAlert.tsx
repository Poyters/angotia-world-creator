
import React from 'react';
import { IPopup } from '../../../../interfaces/popup.interface';
import { Link } from 'react-router-dom';
import routesConfig from '../../../../assets/configs/routes.config.json';

interface IExportAlert {
  isAccepted: (...args: any[]) => void
}

export const ExportAlert = ({ isActivePopup, isAccepted }: IExportAlert & IPopup) => {
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
          Export Alert
        </header>
        <p>
          You are trying to export item to Angotia.
          Angotia Admins will check out your product and accept it or decline.
          To proceed it, you need to accept 
          <Link to={`/${routesConfig.license}`} className="t-anhor1Bold"> 
            Angotia World Creator license
          </Link>. 
        </p>
        <button 
          type="submit" 
          className="insertPopup__submit t-paragraphLight" 
          onClick={handleAccept} 
        > 
          Accept license
        </button>
      </div>
    </div>
  );
};