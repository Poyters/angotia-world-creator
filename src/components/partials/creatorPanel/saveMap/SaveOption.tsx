import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

//Import components
import SavePopup from './SavePopup';


const SaveOption: React.FC = () => {
  const [isPopup, setIsPopup] = useState<Boolean>(false);

  return (
    <Fragment>
      { isPopup ? ReactDOM.createPortal(<SavePopup closePopup={setIsPopup}/>, document.body) : null}
      <div role="button" className="option option--textOption option--smallerMargin" data-title="save board on your computer" onClick={() => setIsPopup(true)}>
        <span>Save</span>
      </div>
    </Fragment>
  );
}


export default SaveOption;