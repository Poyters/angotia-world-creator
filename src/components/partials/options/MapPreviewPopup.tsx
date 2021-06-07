import React, { useState, useEffect } from 'react';
import { IPopup } from '../../../interfaces/popup.interface';
import { createMapBlob } from '../../../scripts/map/createMapBlob';

export const MapPreviewPopup = ({ isActivePopup }: IPopup) => {
  const [mapBlob, setMapBlob] = useState<string>('');

  useEffect(() => {
    preview();
  }, []);

  const preview = async () => {
    const previewBlob = await createMapBlob();
    setMapBlob(previewBlob);
  };

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup">
        <div
          className="g-exitBtn g-exitBtn--popup"
          onClick={(): void => isActivePopup(false)}
        > </div>
        <header className="insertPopup__header t-paragraph3Light">
          Map preview
        </header>
        <div className="insertPopup__imageContainer">
          {
            !mapBlob ? (
              <p> Loading... </p>
            ): <img src={mapBlob} />
          }
        </div>
      </div>
    </div>
  );
};