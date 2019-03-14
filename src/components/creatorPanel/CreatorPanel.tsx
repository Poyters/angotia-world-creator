import React from 'react';

//Import other components
import ExportOption from './ExportOption';
import ComeBackOption from './ComeBackOption';
import FullScreenOption from './FullScreenOption';
import NetOption from './NetOption';
import SelectOption from './SelectOption';


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
          <FullScreenOption />
        </li>
        <li>
          <NetOption viewTypeQuantity={3} />
        </li>
        <li>
          <SelectOption selectTypeQuantity={2} />
        </li>
      </ul>
    </nav>
  );
}

export default CreatorPanel;