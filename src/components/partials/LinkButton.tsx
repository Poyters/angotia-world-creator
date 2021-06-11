import React from 'react';
import { Link } from 'react-router-dom';
import { ILinkButton } from '../../interfaces/button.interface';


export const LinkButton: React.FC<ILinkButton> = ({ link, buttonText }) => {

  return (
    <div role="button" className="option option--textOption option--smallerMargin">
      <Link to={link}> { buttonText } </Link>
    </div>
  );
};