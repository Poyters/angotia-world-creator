import React from 'react';


interface ICornerButton {
  name: string,
  clickEvent?: Function
}

const CornerButton: React.FC<ICornerButton> = ({ name, clickEvent }) => {
  const dispatchedClickEvent: Function = clickEvent ? clickEvent : () => {};

  return (
    <div className="cornerButton t-paragraph5Normal" onClick={() => dispatchedClickEvent}>
      <div className="cornerButton__content"> 
        <span> { name } </span>
      </div>
    </div>
  )
}


export default CornerButton;