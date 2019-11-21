import React from 'react';

//Import configs
import appConfig from '../../assets/configs/appConfig.json';

const CreditsFooter: React.FC = () => {
  const currentYear: number = (new Date()).getFullYear();

  return (
    <footer className="t-paragraph2Light creditsFooter">
      <div className="creditsFooter__box">
        <a href={appConfig.author.link}>
          {`Created by ${appConfig.author.name} @${appConfig.author.startedYear}-${currentYear}`}
        </a>
      </div>
    </footer>
  );
};

export default CreditsFooter;