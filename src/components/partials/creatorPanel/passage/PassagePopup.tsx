import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { matrixToIds } from '../../../../scripts/parsers/matrixToIds';
import { deepCopy } from '../../../../scripts/utils/deepCopy';
import { markSquare } from '../../../../scripts/matrix/markSquare';
import { 
    changeMapPassageMatrix, 
    changeMapPassageLocations 
} from '../../../../store/actions/mapActions';
import { ISquareData } from '../../../../interfaces/square.interface';
import { IPassageLocation } from '../../../../interfaces/passage.interface';
import { IPopup } from '../../../../interfaces/popup.interface';
import { IStore } from '../../../../interfaces/store.interface';
import { Canvas } from '../../../../models/canvas.model';
import { MatrixFillColor } from '../../../../models/matrixFillColor.model';


export const PassagePopup: React.FC<IPopup> = ({ isActivePopup }) => {
    const [mapTargetId, setMapTargetId] = useState<string>('');
    const [mapTargetCords, setMapTargetCords] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const selectMatrix = deepCopy(useSelector((state: IStore) => state.ui.select.matrix));
    const passageMatrix = useSelector((state: IStore) => state.map.passage.matrix);
    const passageLocations = deepCopy(useSelector((state: IStore) => state.map.passage.locations));
    const dispatch = useDispatch(); 

    useEffect((): void => {
        if (!mapTargetId || !mapTargetCords) setError(true);
        else setError(false);

    }, [mapTargetId, mapTargetCords]);

    useEffect(() => {
        const keyPressHandler = (event): void => {
            if (event.key === 'Escape') isActivePopup(false);
            else if (event.key === 'Enter') insertPassage();
        };

        document.addEventListener('keydown', keyPressHandler);
        return () => {
            document.removeEventListener('keydown', keyPressHandler);
        };
    });

    const insertPassage = (): void => {
        if (error) return;
        
        const potentialLocations: ISquareData[] = matrixToIds(selectMatrix);
        potentialLocations.forEach(location => {
            if (!passageLocations.some(e => e.id === location.id)) {
                const newLocation: IPassageLocation = {
                    ...location,
                    destination: {
                        mapTargetId: parseInt(mapTargetId),
                        mapTargetCords: parseInt(mapTargetCords)
                    }
                };

                passageLocations.push(newLocation);
              }
        });

        isActivePopup(false);
        dispatch(changeMapPassageLocations(passageLocations));
        markSquare(
            passageMatrix, 
            Canvas.passage, 
            changeMapPassageMatrix, 
            'notifications?.options?.passage?.add', 
            '', 
            MatrixFillColor.passage
        );
    };

    return (
        <div className="g-container g-container--popup">
            <div role="alert" className="insertPopup"> 
                <div 
                    className="g-exitBtn g-exitBtn--popup"
                    onClick={():void => isActivePopup(false)}
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
                    onClick={insertPassage} 
                    disabled={error}
                > 
                    submit 
                </button>
            </div>
        </div>
    );
};