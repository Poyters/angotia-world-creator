import React from 'react';

//Import other components
import CreatorPanel from '../creatorPanel/CreatorPanel';
import FilesPanel from '../filesPanel/FilesPanel';
import CreditsFooter from '../CreditsFooter';
import Map from '../Map';
import Notifications from '../Notifications';


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