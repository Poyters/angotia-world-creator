import React from 'react';

//Import other components
import CreatorPanel from '../creatorPanel/CreatorPanel';
import CreditsFooter from '../CreditsFooter';


const Creator: React.SFC = () => {
  return (
    <article className="creator">
      <CreatorPanel />
      Creator component works!
      <CreditsFooter />
    </article>
  );
}

export default Creator;