import React, { useState } from 'react';


const CharButton: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  return (
    <div className="charButton">
      {
        isMenuVisible ? (
          <nav className="charButton__menu">
            <ul>
              <li>load</li>
              <li>edit</li>
            </ul>
          </nav>
        ) : null
      }
      <div 
        className="charButton__name" 
        onMouseEnter={() => setIsMenuVisible(true)}
        onMouseLeave={() => setIsMenuVisible(false)}
      >
        <span> Char </span>
      </div>
    </div>
  )
}

export default CharButton;