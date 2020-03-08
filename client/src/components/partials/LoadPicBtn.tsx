import React from 'react';
import { useDispatch } from 'react-redux';

//Import configs
import creatorConfig from '../../assets/configs/creatorConfig.json';

//Import scripts
import { sizeGuard } from '../../assets/scripts/files/sizeGuard';


interface ILoadPicBtn {
  name: string,
  clickEvent?: Function
}

const LoadPicBtn: React.FC<ILoadPicBtn> = ({ name, clickEvent }) => {
  const dispatchedClickEvent: Function = clickEvent ? clickEvent : () => {};
  const dispatch: Function = useDispatch();

  const handleFileSelect = (evt: any) => {
    const file = evt.target.files[0]; 
    const reader = new FileReader();

    if (!sizeGuard(file, creatorConfig.maxPicsWeight.char)) {
      return;
    }

    reader.onload = (():any => {
      return e => {
        const path: string = e.target.result;
        dispatch(dispatchedClickEvent(path));
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


export default LoadPicBtn;