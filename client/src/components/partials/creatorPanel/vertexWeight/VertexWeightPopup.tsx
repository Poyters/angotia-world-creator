import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { matrixToIds } from '../../../../assets/scripts/matrix';
import { deepCopy } from '../../../../assets/scripts/utils/deepCopy';
import { markSquare } from '../../../../assets/scripts/markSquare';
import creatorConfig from '../../../../assets/configs/creatorConfig.json';
import { 
    changeMapVertexWeightMatrix, 
    changeMapVertexWeights 
} from '../../../../redux/actions/mapActions';
import { ContentContext } from '../../../../Template';


interface IVertexOption {
    closePopup: Function
}

const VertexWeightPopup: React.FC<IVertexOption> = ({ closePopup }) => {
    const { notifications } = useContext(ContentContext);
    const [vertexWeightValue, setVertexWeightValue] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const selectMatrix = deepCopy(useSelector(state => state.ui.select.matrix));
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


    const insertVertexWeight = (): void => {
        const potentialWeights: any[] = matrixToIds(selectMatrix);
        potentialWeights.forEach(location => {
            if (!vertexWeights.some(e => e.id === location.id)) {
                const newLocation = {
                    ...location,
                    destination: {
                        vertexWeightValue,
                    }
                };

                vertexWeights.push(newLocation);
              }
        });

        closePopup(false);
        dispatch(changeMapVertexWeights(vertexWeights));
        markSquare(
            vertexWeightMatrix, 
            'mapVertexWeightCanvas', 
            changeMapVertexWeightMatrix, 
            notifications.options.vertex.add, 
            vertexWeightValue, 
            'vertexWeight'
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
                    Add weight
                </header>
                <label className="insertPopup__label t-paragraph6Light">
                    Weight of vertex 
                    ({creatorConfig.vertexWeight.min} - {creatorConfig.vertexWeight.max})
                </label>
                <input 
                    type='text' 
                    value={vertexWeightValue} 
                    onChange={e => setVertexWeightValue(e.target.value)}
                />
                {
                    (error) ? (
                        <span className="insertPopup--error">Type proper value (number)</span>
                    ) : null
                }

                <button 
                    type="submit" 
                    className="insertPopup__submit t-paragraphLight" 
                    onClick={(): void => insertVertexWeight()} disabled={error}
                > 
                    submit 
                </button>
            </div>
        </div>
    );
};


export default VertexWeightPopup;