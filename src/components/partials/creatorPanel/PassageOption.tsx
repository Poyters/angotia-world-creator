import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

//Import components
import PassagePopup from './PassagePopup';


const PassageOption: React.FC = () => {
    const [isPopup, setIsPopup] = useState<Boolean>(false);


    return (
        <Fragment>
            { isPopup ? ReactDOM.createPortal(<PassagePopup closePopup={setIsPopup}/>, document.body) : null}
            <div className="passageOption" onClick={() => setIsPopup(true)}></div>
        </Fragment>
    )
}


export default PassageOption;