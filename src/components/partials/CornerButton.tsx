import React from 'react';
import { IButton } from '../../interfaces/button.interface';


export const CornerButton: React.FC<IButton> = ({ name, clickEvent }) => {
  const dispatchedClickEvent = clickEvent ? clickEvent : () => {
    // do nothing
  };

  return (
    <div className="g-cornerButton t-paragraph5Normal" onClick={() => dispatchedClickEvent()}>
      <div className="g-cornerButton__content"> 
        <span> { name } </span>
      </div>
    </div>
  );
};