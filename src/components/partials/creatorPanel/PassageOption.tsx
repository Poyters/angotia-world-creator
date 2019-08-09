import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

//Import scripts
import { markSquare } from '../../../assets/scripts/markSquare';

//Import actions
import { changeMapPassageMatrix } from '../../../redux/actions/mapActions';

//Import components
import PassagePopup from './PassagePopup';


const PassageOption: React.FC = () => {
    const [isPopup, setIsPopup] = useState<Boolean>(false);
    const passageMatrix = useSelector(state => state.map.passage.matrix);

    const setPassage = () => {
        //open passage popup
        setIsPopup(true);
        markSquare(passageMatrix, 'mapPassageCanvas', changeMapPassageMatrix, 'Passage added', '#fff', '')
    }

    return (
        <Fragment>
            { isPopup ? ReactDOM.createPortal(<PassagePopup closePopup={setIsPopup}/>, document.body) : null}
            <div className="passageOption" onClick={() => setPassage()}></div>
        </Fragment>
    )
}


export default PassageOption;