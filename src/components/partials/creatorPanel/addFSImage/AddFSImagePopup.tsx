import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import mapConfig from '../../../../assets/configs/map.config.json';
import { sizeGuard } from '../../../../scripts/files/sizeGuard';
import { IPopup } from '../../../../interfaces/popup.interface';


export const AddFSImagePopup: React.FC<IPopup> = ({ isActivePopup }) => {
  const [isLoadedImage, setIsLoadedImage] = useState<boolean>(false);
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('');
  const [currBookmark, setCurrBookmark] = useState<string>(mapConfig?.bookmarks[0]);

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

  const insertImage = (): void => {
    if (!isLoadedImage) return;

    console.log('Insert image process');

    isActivePopup(false);
  };

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup">
        <div
          className="g-exitBtn g-exitBtn--popup"
          onClick={(): void => isActivePopup(false)}
        > </div>
        <header className="insertPopup__header t-paragraph3Light">
          { 'creator?.panel?.options?.addFSImage?.title' }
        </header>
        <label className="insertPopup__label t-paragraph6Light">
          { 'creator?.panel?.options?.addFSImage?.image' }
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
              { 'creator?.panel?.options?.addFSImage?.error' }
            </span>
          ) : null
        }
        <label className="insertPopup__label t-paragraph6Light">
          { 'creator?.panel?.options?.addFSImage?.category' }
        </label>
        <div
          className="addFSImageSelect"
          onClick={(): void => setIsSelectOpen(!isSelectOpen)}
        >
          <span> {currBookmark} </span>
          {
            (isSelectOpen) ? (
              <ul>
                { mapConfig?.bookmarks.map((bookmark: string) => {
                  if (bookmark !== currBookmark) {
                    return (
                      <li
                        onClick={(): void => setCurrBookmark(bookmark)}
                        key={uuid()}
                      >
                        { bookmark}
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
          {creator?.panel?.options?.addFSImage?.submit}
        </button>
      </div>
    </div>
  );
};