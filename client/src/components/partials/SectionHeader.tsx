import React from 'react';

interface ISectionHeader {
    headerTxt: string
}

const SectionHeader: React.FC<ISectionHeader> = ({headerTxt}) => {
  return (
    <header className="sectionHeader">
      <h1>
        { headerTxt }
      </h1>
    </header>
  );
};

export default SectionHeader;