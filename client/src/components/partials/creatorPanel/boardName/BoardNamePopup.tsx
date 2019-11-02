import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import scripts
import { matrixToIds } from '../../../../assets/scripts/matrix';
import { deepCopy } from '../../../../assets/scripts/utils/deepCopy';
import { markSquare } from '../../../../assets/scripts/markSquare';

//Import configs
import creatorConfig from '../../../../assets/configs/creatorConfig.json';

//Import actions
import { 
    changeMapVertexWeightMatrix, 
    changeMapVertexWeights 
} from '../../../../redux/actions/mapActions';


interface IFSImageOption {
    closePopup: Function
}


const BoardNamePopup: React.FC<IFSImageOption> = ({ closePopup }) => {
    const [vertexWeightValue, setVertexWeightValue] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const selectMatrix = deepCopy(useSelector(state => state.map.select.matrix));
    const vertexWeightMatrix = useSelector(state => state.map.vertex.matrix);
    const vertexWeights = deepCopy(useSelector(state => state.map.vertex.weights));
    const dispatch = useDispatch(); 


    useEffect((): void => {
        if (
            parseInt(vertexWeightValue) < creatorConfig.vertexWeight.min || 
            parseInt(vertexWeightValue) > creatorConfig.vertexWeight.max || 
            !vertexWeightMatrix || 
            !Number(vertexWeightValue)
        ) {
            setError(true);
        }
        else setError(false);

    }, [vertexWeightValue]);


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
                    ({creatorConfig.vertexWeight.min} - {creatorConfig.vertexWeight.max})
                </label>
                <input 
                    type='text' 
                    value={vertexWeightValue} 
                    onChange={e => setVertexWeightValue(e.target.value)}
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