import React from 'react';
import { FullScreenOption } from '../options/FullScreenOption';
import { Menu } from '../options/Menu';
import { AppModules } from '../../../models/appModules.model';
import logo24x24 from '../../../assets/images/logo-24x24.png';


export const CharPanel: React.FC = () => {
  return (
    <div className="optionsPanelWrapper">
      <nav className="optionsPanel">
        <header className="optionsPanel__title">
          <img src={logo24x24} />
          <span> AWC </span>
        </header>
        <Menu moduleType={AppModules.char} />
        <ul className="optionsPanel__options">
          <li>
            <FullScreenOption />
          </li>
        </ul>
      </nav>
    </div>
  );
};