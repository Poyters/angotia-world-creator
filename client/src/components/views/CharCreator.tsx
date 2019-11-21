import React from 'react';

//Import other components
import CharPanel from '../partials/charPanel/CharPanel';
import CreditsFooter from '../partials/CreditsFooter';
import Notifications from '../partials/Notifications';
import VersionMark from '../partials/VersionMark';
import ReportIssue from '../partials/ReportIssue';
import CharCreatorForm from '../partials/charCreatorForm/CharCreatorForm';


const CharCreator: React.FC = () => {
  return (
    <article className="creatorWrapper">
      <CharPanel />
      <CharCreatorForm />
      <CreditsFooter />
      <Notifications />
      <VersionMark />
      <ReportIssue />
    </article>
  );
};

export default CharCreator;