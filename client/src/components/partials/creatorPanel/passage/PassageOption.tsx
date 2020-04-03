import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import creatorConfig from '../../../../assets/configs/creatorConfig.json';
import { matrixToIds } from '../../../../assets/scripts/matrix';
import { deepCopy } from '../../../../assets/scripts/utils/deepCopy';
import { markSquare } from '../../../../assets/scripts/markSquare';
import { isEmptyMatrix } from '../../../../assets/scripts/isEmptyMatrix';
import { setActionNote } from '../../../../assets/scripts/notifications';
import PassagePopup from './PassagePopup';
import { ContentContext } from '../../../../Template';
import { 
    changeMapPassageMatrix, 
    changeMapPassageLocations 
} from '../../../../redux/actions/mapActions';


let pressedKey: string = '';
document.addEventListener('keydown', event => pressedKey = event.key);

const PassageOption: React.FC = () => {
    const { notifications } = useContext(ContentContext);
    const [isPopup, setIsPopup] = useState<Boolean>(false);
    const selectMatrix = deepCopy(useSelector(state => state.ui.select.matrix));
    const passageMatrix = useSelector(state => state.map.passage.matrix);
    let passageLocations = deepCopy(useSelector(state => state.map.passage.locations));
    const dispatch = useDispatch(); 

    const passageHandler = (): void => {
        if (isEmptyMatrix(selectMatrix)) {
            setActionNote(notifications.options.passage.select, 'warning');
            return;
        }

        pressedKey === creatorConfig.secondOptionKeyCode ? deletePassage() : setIsPopup(true);

        setTimeout((): string => pressedKey = '', 250); 
    };
    
    const deletePassage = (): void => {
        const deleteLocations = matrixToIds(selectMatrix);

        deleteLocations.forEach(location => {
            if (passageLocations.some(e => e.id === location.id)) {
                const index = passageLocations.findIndex(x => x.id === location.id);

                passageLocations.splice(index, 1);
              }
        });

        dispatch(changeMapPassageLocations(passageLocations));
        markSquare(
            passageMatrix, 
            'mapPassageCanvas', 
            changeMapPassageMatrix, 
            notifications.options.passage.delete, 
            '#fff', 
            ''
        );
    };

    return (
        <>
            { isPopup ? ReactDOM.createPortal(
                <PassagePopup closePopup={setIsPopup}/>, document.body
            ) : null}
            <div 
                className="passageOption" 
                onClick={passageHandler} 
                data-title="add/delete passage"
            > </div>
        </>
    );
};


export default PassageOption;