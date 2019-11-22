import React, { useState } from 'react';


const CharButton: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const charMenuStyles = {
    opacity: isMenuVisible ? 1 : 0
  }

  return (
    <div className="charButton">
      <nav 
        className="charButton__menu" 
        style={charMenuStyles}
        onMouseEnter={() => setIsMenuVisible(true)}
        onMouseLeave={() => setIsMenuVisible(false)}
      >
        <ul>
          <li>
            load
          </li>
          <li>
            edit
          </li>
        </ul>
      </nav>
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