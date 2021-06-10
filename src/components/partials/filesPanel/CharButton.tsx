import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export const CharButton: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const charMenuStyles = {
    opacity: isMenuVisible ? 1 : 0
  };

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
              to={`/${'routes.char'}`}
            >
              { 'filesPanel?.charButton?.load' }
            </Link>
          </li>
          <li>
            { 'filesPanel?.charButton?.edit' }
          </li>
        </ul>
      </nav>
      <div 
        className="charButton__name" 
        onMouseEnter={() => setIsMenuVisible(true)}
        onMouseLeave={() => setIsMenuVisible(false)}
      >
        <span>
          { 'filesPanel?.charButton?.char' }
        </span>
      </div>
    </div>
  );
};