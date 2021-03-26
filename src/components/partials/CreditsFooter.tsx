import React from 'react';
import appConfig from '../../assets/configs/app.config.json';
import logo16x16 from '../../assets/images/logo-16x16.png';


export const CreditsFooter: React.FC = () => {
  const currentYear: number = (new Date()).getFullYear();

  return (
    <footer className="t-paragraph5Normal creditsFooter">
      <div className="creditsFooter__box">
        <a href={appConfig.author.link}>
          <img src={logo16x16} />
          <span>
            {`${appConfig?.author?.name} ${appConfig?.author?.startedYear}-${currentYear}`}
          </span>
        </a>
      </div>
    </footer>
  );
};