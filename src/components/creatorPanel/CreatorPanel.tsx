import React from 'react';

//Import other components
import NetOption from './NetOption';


const CreatorPanel: React.SFC = () => {
  return (
    <nav className="creatorPanel">
      <header className="creatorPanel__title">
        <span> AMC </span>
      </header>
      <ul className="creatorPanel__options">
        <li>
          <NetOption viewTypeQuantity={2} />
        </li>
        <li>warstwy</li>
      </ul>
    </nav>
  );
}

export default CreatorPanel;