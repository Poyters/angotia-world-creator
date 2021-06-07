import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createMapBlob } from '../../../scripts/map/createMapBlob';
import { MapPreviewPopup } from './MapPreviewPopup';

export const MapPreview = () => {
  const [isActiveLoadPopup, setIsActiveLoadPopup] = useState<boolean>(false);
  const [mapBlob, setMapBlob] = useState<string>('');

  const preview = async () => {
    const previewBlob = await createMapBlob();
    setMapBlob(previewBlob);
    setIsActiveLoadPopup(true);
  };

  return (
    <>
      { isActiveLoadPopup ? ReactDOM.createPortal(
        <MapPreviewPopup isActivePopup={setIsActiveLoadPopup} mapBlob={mapBlob} />, document.body
      ) : null}
      <span
        onClick={() => preview()}
      > 
        Preview
      </span>
    </>
  );
};