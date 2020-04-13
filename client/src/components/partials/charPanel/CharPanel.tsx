import React, { useContext } from 'react';
import { FullScreenOption } from '../options/FullScreenOption';
import { LinkButton } from '../LinkButton';
import { ContentContext } from '../../../Template';
import { SaveOption } from '../options/SaveOption';


export const CharPanel: React.FC = () => {
  const { char, routes } = useContext(ContentContext);

  return (
    <nav className="optionsPanel">
      <header className="optionsPanel__title">
        <span> AMC </span>
      </header>
      <ul className="optionsPanel__options">
        <li>
          <LinkButton link='/' buttonText={char?.panel?.comeBack} />
        </li>
        <li>
          <LinkButton link={routes?.help} buttonText={char?.panel?.help} />
        </li>
        <li>
          <LinkButton link={routes?.license} buttonText={char?.panel?.license} />
        </li>
        <li>
          <SaveOption
            type='char'
          />
        </li>
        <li>
          <FullScreenOption />
        </li>
      </ul>
    </nav>
  );
};