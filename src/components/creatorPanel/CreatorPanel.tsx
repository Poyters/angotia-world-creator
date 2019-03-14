import React from 'react';

//Import other components
import ComeBackOption from './ComeBackOption';
import ExportOption from './ExportOption';
import NetOption from './NetOption';


const CreatorPanel: React.SFC = () => {
  return (
    <nav className="creatorPanel">
      <header className="creatorPanel__title">
        <span> AMC </span>
      </header>
      <ul className="creatorPanel__options">
        <li>
          <ExportOption />
        </li>
        <li>
          <ComeBackOption />
        </li>
        <li>
          <NetOption viewTypeQuantity={3} />
        </li>
        <li>warstwy</li>
      </ul>
    </nav>
  );
}

export default CreatorPanel;