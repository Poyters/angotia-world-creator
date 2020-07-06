import React from 'react';
import { CreditsFooter } from '../partials/CreditsFooter';
import { SectionHeader } from '../partials/SectionHeader';
import { EntryPanel } from '../partials/entryPanel/EntryPanel';
import { Notifications } from '../partials/Notifications';
import LangMenu from '../partials/LangMenu';


export const Home: React.FC = () => {
  return (
    <div role="presentation" className="g-container g-container--borders">
      <SectionHeader 
        headerTxt="Angotia Map Creator"
      />
      <div role="presentation" className="g-wrapper">
        <EntryPanel />
      </div>
      <CreditsFooter />
      <LangMenu />
      <Notifications />
    </div>
  );
};