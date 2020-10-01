import React from 'react';


export const MapErrorMark: React.FC = () => {
  return (
    <aside className="mapErrorMark">
      <div className="mapErrorMark__count"> 
        <span> ! </span>
      </div>
      <div className="mapErrorMark__message"> 
        <span> 17 errors </span>
      </div>
    </aside>
  );
};