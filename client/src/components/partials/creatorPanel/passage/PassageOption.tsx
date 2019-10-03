import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

//Import configs
import creatorConfig from '../../../../assets/configs/creatorConfig.json';

//Import scripts
import { matrixToIds } from '../../../../assets/scripts/matrix';
import { deepCopy } from '../../../../assets/scripts/utils/deepCopy';
import { markSquare } from '../../../../assets/scripts/markSquare';
import { isEmptyMatrix } from '../../../../assets/scripts/isEmptyMatrix';
import { setActionNote } from '../../../../assets/scripts/notifications';

//Import components
import PassagePopup from './PassagePopup';

//Import actions
import { changeMapPassageMatrix, changeMapPassageLocations } from '../../../../redux/actions/mapActions';


let pressedKey: number = -1;
document.addEventListener('keydown', event => pressedKey = event.keyCode);

const PassageOption: React.FC = () => {
    const [isPopup, setIsPopup] = useState<Boolean>(false);
    const selectMatrix = deepCopy(useSelector(state => state.map.select.matrix));
    const passageMatrix = useSelector(state => state.map.passage.matrix);
    let passageLocations = deepCopy(useSelector(state => state.map.passage.locations));
    const dispatch = useDispatch(); 

    const passageHandler = () => {
        if (isEmptyMatrix(selectMatrix)) {
            setActionNote('Need to select fields', 'warning');
            return;
        }

        pressedKey === creatorConfig.secondOptionKeyCode ? deletePassage() : setIsPopup(true);

        setTimeout(() => pressedKey = -1, 500) 
    }
    
    const deletePassage = () => {
        const deleteLocations = matrixToIds(selectMatrix);

        deleteLocations.forEach(location => {
            if (passageLocations.some(e => e.id === location.id)) {
                const index = passageLocations.findIndex(x => x.id === location.id);

                passageLocations.splice(index, 1);
              }
        })

        dispatch(changeMapPassageLocations(passageLocations));
        markSquare(passageMatrix, 'mapPassageCanvas', changeMapPassageMatrix, 'Passage added', '#fff', '')
    }

    return (
        <Fragment>
            { isPopup ? ReactDOM.createPortal(<PassagePopup closePopup={setIsPopup}/>, document.body) : null}
            <div className="passageOption" onClick={() => passageHandler()} data-title="add/delete passage"></div>
        </Fragment>
    )
}


export default PassageOption;