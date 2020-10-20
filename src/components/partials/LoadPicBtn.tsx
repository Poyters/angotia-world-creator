import React from 'react';
import { useDispatch } from 'react-redux';
import mapConfig from '../../assets/configs/map.config.json';
import { sizeGuard } from '../../scripts/files/sizeGuard';
import { addNotification } from '../../scripts/utils/notifications';
import { ILoadPicBtn } from '../../interfaces/button.interface';


export const LoadPicBtn: React.FC<ILoadPicBtn> = ({ 
  name, clickEvent, note
}) => {
  const dispatchedClickEvent: Function = clickEvent ? clickEvent : () => {};
  const dispatch: Function = useDispatch();

  const handleFileSelect = (evt: any) => {
    const file = evt.target.files[0]; 
    const reader = new FileReader();

    if (!sizeGuard(file, mapConfig.maxPicsWeight.char)) {
      return;
    }

    reader.onload = (():any => {
      return e => {
        const path: string = e.target.result;
        dispatch(dispatchedClickEvent(path));

        if (note) addNotification(note);
      };

    })();

    reader.readAsDataURL(file);
  };

  return (
    <>
      <label 
        className="g-cornerButton t-paragraph5Normal"
        htmlFor="file"
      >
        <div className="g-cornerButton__content"> 
          <span> { name } </span>
        </div>
      </label>
      <input 
        className="g-clearFileInput" 
        type="file" 
        id="file" 
        name="files[]" 
        onChange={evt => handleFileSelect(evt)}
      />
    </>
  );
};