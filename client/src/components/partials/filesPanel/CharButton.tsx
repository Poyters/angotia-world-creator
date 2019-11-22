import React, { useState } from 'react';
import { Link } from 'react-router-dom';


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
            <Link
              to='/char'
            >
              load
            </Link>
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