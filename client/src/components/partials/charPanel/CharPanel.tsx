import React from 'react';

//Import other components
import ExportOption from './ExportOption';
import FullScreenOption from './FullScreenOption';
import LinkButton from './LinkButton';


const CharPanel: React.FC = () => {
  return (
    <nav className="creatorPanel">
      <header className="creatorPanel__title">
        <span> AMC </span>
      </header>
      <ul className="creatorPanel__options">
        <li>
          <LinkButton link='/creator' buttonText='come back' />
        </li>
        <li>
          <LinkButton link='/help' buttonText='help' />
        </li>
        <li>
          <LinkButton link='/license' buttonText='license' />
        </li>
        <li>
          <ExportOption />
        </li>
        <li>
          <FullScreenOption />
        </li>
      </ul>
    </nav>
  );
};


export default CharPanel;