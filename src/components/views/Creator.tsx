import React from 'react';

//Import other components
import CreatorPanel from '../creatorPanel/CreatorPanel';
import CreditsFooter from '../CreditsFooter';
import Map from '../Map';


const Creator: React.SFC = () => {
  return (
    <article className="creator">
      <CreatorPanel />
      <Map />
      <CreditsFooter />
    </article>
  );
}

export default Creator;