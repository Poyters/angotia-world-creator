import React, { useState, useEffect } from 'react';
import { IPopup } from '../../../interfaces/popup.interface';
import { createMapBlob } from '../../../scripts/map/createMapBlob';
import { useTranslation } from 'react-i18next';

export const MapPreviewPopup = ({ isActivePopup }: IPopup) => {
  const [mapBlob, setMapBlob] = useState<string>('');
  const { t } = useTranslation(['map', 'common']);

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
          onClick={() => isActivePopup(false)}
        > </div>
        <header className="insertPopup__header t-paragraph3Light">
          { t('map:preview') }
        </header>
        <div className="insertPopup__imageContainer">
          {
            !mapBlob ? (
              <p> { t('common:loading') } </p>
            ): <img src={mapBlob} />
          }
        </div>
      </div>
    </div>
  );
};