import React from 'react';

//Import configs
import appConfig from '../../assets/configs/appConfig.json';

//Import contexts
import { ContentContext } from '../../Template';

const CreditsFooter: React.FC = () => {
  const currentYear: number = (new Date()).getFullYear();

  return (
    <ContentContext.Consumer>
      {({ global }) => (
        <footer className="t-paragraph2Light creditsFooter">
          <div className="creditsFooter__box">
            <a href={appConfig.author.link}>
              {`${global.footer.created} ${appConfig.author.name} @${appConfig.author.startedYear}-${currentYear}`}
            </a>
          </div>
        </footer>
      )}
    </ContentContext.Consumer>
  );
};

export default CreditsFooter;