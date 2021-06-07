import React from 'react';
import { IPopup } from '../../../interfaces/popup.interface';

interface IMapBlob {
  mapBlob: string
}

export const MapPreviewPopup = ({ isActivePopup, mapBlob }: IPopup & IMapBlob) => {
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
        <img src={mapBlob} />
      </div>
    </div>
  );
};