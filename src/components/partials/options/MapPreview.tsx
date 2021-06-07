import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { MapPreviewPopup } from './MapPreviewPopup';

export const MapPreview = () => {
  const [isActiveLoadPopup, setIsActiveLoadPopup] = useState(false);

  return (
    <>
      { isActiveLoadPopup ? ReactDOM.createPortal(
        <MapPreviewPopup isActivePopup={setIsActiveLoadPopup} />, document.body
      ) : null}
      <span
        onClick={() => setIsActiveLoadPopup(true)}
      > 
        Preview
      </span>
    </>
  );
};