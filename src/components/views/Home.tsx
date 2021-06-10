import React, { useEffect } from 'react';
import { CreditsFooter } from '../partials/CreditsFooter';
import { SectionHeader } from '../partials/SectionHeader';
import { EntryPanel } from '../partials/entryPanel/EntryPanel';

import { LangMenu } from '../partials/LangMenu';
import { forceGetUserId } from '../../scripts/user/forceGetUserId';


export const Home: React.FC = () => {
  useEffect(() => {
    // Generate a userId if does not exist
    forceGetUserId();
  }, []);

  return (
    <div role="presentation" className="g-container g-container--borders">
      <SectionHeader 
        headerTxt="Angotia World Creator"
      />
      <div role="presentation" className="g-wrapper">
        <EntryPanel />
      </div>
      <CreditsFooter />
      <LangMenu />
    </div>
  );
};