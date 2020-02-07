import React, { Fragment } from 'react';


interface ILoadPicBtn {
  name: string,
  clickEvent?: Function
}

const LoadPicBtn: React.FC<ILoadPicBtn> = ({ name, clickEvent }) => {
  const dispatchedClickEvent: Function = clickEvent ? clickEvent : () => {};

  const handleFileSelect = (evt: any) => {
    const f = evt.target.files[0]; 
    const reader = new FileReader();

    reader.onload = (():any => {
      return e => {
        const path: string = e.target.result;
        // dispatchedClickEvent(path);
      };

    })();

    reader.readAsDataURL(f);
  };

  return (
    <Fragment>
      <label 
        className="cornerButton t-paragraph5Normal"
        htmlFor="file"
      >
        <div className="cornerButton__content"> 
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