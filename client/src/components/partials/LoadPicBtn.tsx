import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';


interface ILoadPicBtn {
  name: string,
  clickEvent?: Function
}

const LoadPicBtn: React.FC<ILoadPicBtn> = ({ name, clickEvent }) => {
  const dispatchedClickEvent: Function = clickEvent ? clickEvent : () => {};
  const dispatch: Function = useDispatch();

  const handleFileSelect = (evt: any) => {
    const f = evt.target.files[0]; 
    const reader = new FileReader();

    reader.onload = (():any => {
      return e => {
        const path: string = e.target.result;
        dispatch(dispatchedClickEvent(path));
      };

    })();

    reader.readAsDataURL(f);
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};


export default LoadPicBtn;