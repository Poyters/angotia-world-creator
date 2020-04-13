import React, { useContext } from 'react';
import appConfig from '../../assets/configs/appConfig.json';
import { ContentContext } from '../../Template';


export const CreditsFooter: React.FC = () => {
  const { global } = useContext(ContentContext);
  const currentYear: number = (new Date()).getFullYear();

  return (
    <footer className="t-paragraph2Light creditsFooter">
      <div className="creditsFooter__box">
        <a href={appConfig.author.link}>
          {/*eslint-disable-next-line max-len*/}
          {`${global?.footer?.created} ${appConfig?.author?.name} @${appConfig?.author?.startedYear}-${currentYear}`}
        </a>
      </div>
    </footer>
  );
};