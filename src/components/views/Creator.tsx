import React from 'react';

//Import other components
import CreatorPanel from '../partials/creatorPanel/CreatorPanel';
import FilesPanel from '../partials/filesPanel/FilesPanel';
import CreditsFooter from '../partials/CreditsFooter';
import Map from '../partials/Map';
import Notifications from '../partials/Notifications';


const Creator: React.FC = () => {
  return (
    <article className="creator">
      <CreatorPanel />
      <FilesPanel />
      <Map />
      <CreditsFooter />
      <Notifications />
    </article>
  );
}

export default Creator;