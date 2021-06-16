import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import mapConfig from '../../../../assets/configs/map.config.json';
import { sizeGuard } from '../../../../scripts/files/sizeGuard';
import { IPopup } from '../../../../interfaces/popup.interface';
import { Bookmarks } from '../../../../models/bookmarks.model';
import { useTranslation } from 'react-i18next';


const bookmarks = Object.keys(Bookmarks);

export const AddFSImagePopup: React.FC<IPopup> = ({ isActivePopup }) => {
  const { t } = useTranslation(['common', 'map', 'notifications']);
  const [isLoadedImage, setIsLoadedImage] = useState<boolean>(false);
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('');
  const [currBookmark, setCurrBookmark] = useState<string>(bookmarks[0]);

  useEffect(() => {
    const keyPressHandler = (event): void => {
      if (event.key === 'Escape') isActivePopup(false);
      else if (event.key === 'Enter') insertImage();
    };

    document.addEventListener('keydown', keyPressHandler);
    return () => {
      document.removeEventListener('keydown', keyPressHandler);
    };
  });

  const handleFileSelect = (evt: any) => {
    const file = evt.target.files[0];
    const reader = new FileReader();

    if (!sizeGuard(file, mapConfig?.maxPicsWeight?.mapTile)) {
      return;
    }

    reader.onload = ((): any => {
      return (e) => {
        const path: string = e.target.result;
        setIsLoadedImage(true);
        console.log(path);
      };

    })();

    setFileName(file.name);
    reader.readAsDataURL(file);
  };

  const insertImage = () => {
    if (!isLoadedImage) return;

    console.log('Insert image process');

    isActivePopup(false);
  };

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup">
        <div
          className="g-exitBtn g-exitBtn--popup"
          onClick={() => isActivePopup(false)}
        > </div>
        <header className="insertPopup__header t-paragraph3Light">
          { t('map:fsImage.title') }
        </header>
        <label className="insertPopup__label t-paragraph6Light">
          { t('map:fsImage.load') }
        </label>
        <input
          type="file"
          id="addFSImageInput"
          onChange={evt => handleFileSelect(evt)}
          className="addFSImageBtn"
        />
        <label htmlFor="addFSImageInput">{fileName}</label>
        {
          (!isLoadedImage) ? (
            <span className="insertPopup--error">
              { t('map:fsImage.error') }
            </span>
          ) : null
        }
        <label className="insertPopup__label t-paragraph6Light">
          { t('map:fsImage.layer') }
        </label>
        <div
          className="addFSImageSelect"
          onClick={() => setIsSelectOpen(!isSelectOpen)}
        >
          <span> {currBookmark} </span>
          {
            (isSelectOpen) ? (
              <ul>
                { bookmarks.map((bookmark: string) => {
                  if (bookmark !== currBookmark) {
                    return (
                      <li
                        onClick={() => setCurrBookmark(bookmark)}
                        key={uuid()}
                      >
                        { bookmark }
                      </li>
                    );
                  }
                })}
              </ul>
            ) : null
          }

        </div>

        <button
          type="submit"
          className="insertPopup__submit t-paragraphLight"
          onClick={insertImage} disabled={!isLoadedImage}
        >
          { t('common:submit') } 
        </button>
      </div>
    </div>
  );
};