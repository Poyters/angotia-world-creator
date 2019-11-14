import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import scripts
import { matrixToIds } from '../../../../assets/scripts/matrix';
import { deepCopy } from '../../../../assets/scripts/utils/deepCopy';
import { markSquare } from '../../../../assets/scripts/markSquare';

//Import actions
import { 
    changeMapPassageMatrix, 
    changeMapPassageLocations 
} from '../../../../redux/actions/mapActions';


interface IPassageOption {
    closePopup: Function
}

const PassagePopup: React.FC<IPassageOption> = ({ closePopup }) => {
    const [mapTargetId, setMapTargetId] = useState<string>("");
    const [mapTargetCords, setMapTargetCords] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const selectMatrix = deepCopy(useSelector(state => state.ui.select.matrix));
    const passageMatrix = useSelector(state => state.map.passage.matrix);
    const passageLocations = deepCopy(useSelector(state => state.map.passage.locations));
    const dispatch = useDispatch(); 

    useEffect((): void => {
        if (!mapTargetId || !mapTargetCords) setError(true);
        else setError(false);

    }, [mapTargetId, mapTargetCords]);

    const insertPassage = (): void => {
        const potentialLocations = matrixToIds(selectMatrix);
        potentialLocations.forEach(location => {
            if (!passageLocations.some(e => e.id === location.id)) {
                const newLocation = {
                    ...location,
                    destination: {
                        mapTargetId,
                        mapTargetCords
                    }
                };

                passageLocations.push(newLocation);
              }
        });

        closePopup(false);
        dispatch(changeMapPassageLocations(passageLocations));
        markSquare(
            passageMatrix, 
            'mapPassageCanvas', 
            changeMapPassageMatrix, 
            'Passage added', 
            '#fff', 
            ''
        );
    };

    return (
        <div className="g-container g-container--popup">
            <div role="alert" className="insertPopup"> 
                <div 
                    className="g-exitBtn g-exitBtn--popup"
                    onClick={():void => closePopup(false)}
                > </div>
                <header className="insertPopup__header t-paragraph3Light"> 
                    Add passage 
                </header>
                <label className="insertPopup__label t-paragraph6Light">
                    Target map id 
                </label>
                <input 
                    type='text' 
                    value={mapTargetId} 
                    onChange={e => setMapTargetId(e.target.value)}
                />
                <label className="insertPopup__label t-paragraph6Light">
                    Target map coordinations 
                </label>
                <input 
                    type='text' 
                    value={mapTargetCords} 
                    onChange={e => setMapTargetCords(e.target.value)}
                />
                {
                    (error) ? (
                        <span className="insertPopup--error">Fill all fields</span>
                    ) : null
                }

                <button 
                    type="submit" 
                    className="insertPopup__submit t-paragraphLight" 
                    onClick={(): void => insertPassage()} 
                    disabled={error}
                > 
                    submit 
                </button>
            </div>
        </div>
    );
};


export default PassagePopup;