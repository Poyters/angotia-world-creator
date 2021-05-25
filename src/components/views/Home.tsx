import React, { useEffect } from 'react';
import { CreditsFooter } from '../partials/CreditsFooter';
import { SectionHeader } from '../partials/SectionHeader';
import { EntryPanel } from '../partials/entryPanel/EntryPanel';

import LangMenu from '../partials/LangMenu';
import { manageUserId } from '../../scripts/user/manageUserId';


export const Home: React.FC = () => {
  useEffect(() => {
    // Generate a userId if des not exist
    manageUserId();
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