import React from 'react';

//Import other components
import CreditsFooter from '../partials/CreditsFooter';
import SectionHeader from '../partials/SectionHeader';
import EntryPanel from '../partials/entryPanel/EntryPanel';


const Home: React.FC = () => {
  return (
    <div role="presentation" className="g-container">
        <SectionHeader 
          headerTxt="Angotia Map Creator"
        />
        <div role="presentation" className="g-wrapper">
          <EntryPanel />
        </div>
        <CreditsFooter />
      </div>
  );
}

export default Home;