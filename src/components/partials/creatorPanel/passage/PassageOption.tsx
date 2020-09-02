import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import creatorConfig from '../../../../assets/configs/creatorConfig.json';
import { matrixToIds } from '../../../../assets/scripts/matrix';
import { deepCopy } from '../../../../assets/scripts/utils/deepCopy';
import { markSquare } from '../../../../assets/scripts/markSquare';
import { isEmptyMatrix } from '../../../../assets/scripts/isEmptyMatrix';
import { addNotification } from '../../../../assets/scripts/notifications';
import { PassagePopup } from './PassagePopup';
import { ContentContext } from '../../../../Template';
import { 
    changeMapPassageMatrix, 
    changeMapPassageLocations 
} from '../../../../store/actions/mapActions';
import { IStore } from '../../../../assets/interfaces/store.interface';


let pressedKey: string | null = null;
document.addEventListener('keydown', event => pressedKey = event.key);
document.addEventListener('keyup', () => pressedKey = null);

export const PassageOption: React.FC = () => {
    const { notifications } = useContext(ContentContext);
    const [isPopup, setIsPopup] = useState<Boolean>(false);
    const selectMatrix = deepCopy(useSelector((state: IStore) => state.ui.select.matrix));
    const passageMatrix = useSelector((state: IStore) => state.map.passage.matrix);
    let passageLocations = deepCopy(useSelector((state: IStore) => state.map.passage.locations));
    const dispatch = useDispatch(); 

    const passageHandler = (): void => {
        if (isEmptyMatrix(selectMatrix)) {
            addNotification(notifications?.options?.passage?.select, 'warning');
            return;
        }

        pressedKey === creatorConfig?.secondOptionKeyCode ? deletePassage() : setIsPopup(true);
        pressedKey = null;
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
            'MAP_PASSAGE_CANVAS', 
            changeMapPassageMatrix, 
            notifications?.options?.passage?.delete, 
            '', 
            'passage'
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