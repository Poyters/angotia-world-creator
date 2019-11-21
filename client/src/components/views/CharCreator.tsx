import React from 'react';

//Import other components
import CharPanel from '../partials/charPanel/CharPanel';
import CreditsFooter from '../partials/CreditsFooter';
import Notifications from '../partials/Notifications';
import VersionMark from '../partials/VersionMark';
import ReportIssue from '../partials/ReportIssue';


const CharCreator: React.FC = () => {
  return (
    <article className="creator">
      <CharPanel />
      <CreditsFooter />
      <Notifications />
      <VersionMark />
      <ReportIssue />
    </article>
  );
};

export default CharCreator;