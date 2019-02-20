import React from 'react';

//Import other components
import CreditsFooter from '../CreditsFooter';
import SectionHeader from '../SectionHeader';
import { EntryPanel } from '../entryPanel/EntryPanel';


const Home: React.SFC = () => {
  return (
    <div role="presentation" className="container">
        <SectionHeader 
          headerTxt="Angotia Map Creator"
        />
        <div role="presentation" className="wrapper">
          <EntryPanel />
        </div>
        <CreditsFooter />
      </div>
  );
}

export default Home;