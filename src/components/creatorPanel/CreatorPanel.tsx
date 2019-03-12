import React from 'react';


const CreatorPanel: React.SFC = () => {
  return (
    <nav className="creatorPanel">
      <header className="creatorPanel__title">
        <span> AMC </span>
      </header>
      <div role="presentation" className="creatorPanel__options">
          creator options
      </div>
    </nav>
  );
}

export default CreatorPanel;