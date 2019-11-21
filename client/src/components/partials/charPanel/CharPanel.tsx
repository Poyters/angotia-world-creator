import React from 'react';

//Import other components
import FullScreenOption from '../options/FullScreenOption';
import LinkButton from '../LinkButton';


const CharPanel: React.FC = () => {
  return (
    <nav className="optionsPanel">
      <header className="optionsPanel__title">
        <span> AMC </span>
      </header>
      <ul className="optionsPanel__options">
        <li>
          <LinkButton link='/' buttonText='come back' />
        </li>
        <li>
          <LinkButton link='/help' buttonText='help' />
        </li>
        <li>
          <LinkButton link='/license' buttonText='license' />
        </li>
        <li>
          <FullScreenOption />
        </li>
      </ul>
    </nav>
  );
};


export default CharPanel;