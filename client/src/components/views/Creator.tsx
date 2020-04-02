import React from 'react';

//Import other components
import CreatorPanel from '../partials/creatorPanel/CreatorPanel';
import FilesPanel from '../partials/filesPanel/FilesPanel';
import CreditsFooter from '../partials/CreditsFooter';
import Map from '../partials/Map';
import Notifications from '../partials/Notifications';
import VersionMark from '../partials/VersionMark';
import ReportIssue from '../partials/ReportIssue';
import MapSettingsPanel from '../partials/MapSettingsPanel';


const Creator: React.FC = () => {
  return (
    <article className="creatorWrapper">
      <CreatorPanel />
      <FilesPanel />
      <MapSettingsPanel />
      <Map />
      <CreditsFooter />
      <Notifications />
      <VersionMark />
      <ReportIssue />
    </article>
  );
};

export default Creator;