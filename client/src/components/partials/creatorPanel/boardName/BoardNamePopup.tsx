import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import scripts
import { matrixToIds } from '../../../../assets/scripts/matrix';
import { deepCopy } from '../../../../assets/scripts/utils/deepCopy';
import { markSquare } from '../../../../assets/scripts/markSquare';

//Import configs
import creatorConfig from '../../../../assets/configs/creatorConfig.json';


interface IFSImageOption {
    closePopup: Function
}


const BoardNamePopup: React.FC<IFSImageOption> = ({ closePopup }) => {
    const [mapName, setMapName] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const vertexWeightMatrix = useSelector(state => state.map.vertex.matrix);
    const vertexWeights = deepCopy(useSelector(state => state.map.vertex.weights));
    const dispatch = useDispatch(); 


    useEffect((): void => {

        if (
            mapName.length < creatorConfig.mapName.minLength || 
            mapName.length > creatorConfig.mapName.maxLength
        ) {
            setError(true);
        }
        else setError(false);

    }, [mapName]);


    const insertImage = (): void => {
        console.log('Insert image process');

        closePopup(false);
    };

    return (
        <div className="g-container g-container--popup">
            <div role="alert" className="insertPopup"> 
                <header className="insertPopup__header t-paragraph3Light">
                    Change board name
                </header>
                <label className="insertPopup__label t-paragraph6Light">
                    Name
                    ({creatorConfig.mapName.minLength} - {creatorConfig.mapName.maxLength})
                </label>
                <input 
                    type='text' 
                    value={mapName} 
                    onChange={e => setMapName(e.target.value)}
                />
                {
                    (error) ? (
                        <span className="insertPopup--error">Type proper value (string)</span>
                    ) : null
                }

                <button 
                    type="submit" 
                    className="insertPopup__submit t-paragraphLight" 
                    onClick={(): void => insertImage()} disabled={error}
                > 
                    submit 
                </button>
            </div>
        </div>
    );
};


export default BoardNamePopup;