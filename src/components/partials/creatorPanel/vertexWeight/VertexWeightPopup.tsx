import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { matrixToIds } from '../../../../assets/scripts/matrix';
import { deepCopy } from '../../../../assets/scripts/utils/deepCopy';
import { markSquare } from '../../../../assets/scripts/markSquare';
import creatorConfig from '../../../../assets/configs/creatorConfig.json';
import { 
    changeMapVertexWeightMatrix, 
    changeMapVertexWeights 
} from '../../../../store/actions/mapActions';
import { ContentContext } from '../../../../Template';
import { ISquareData } from '../../../../assets/interfaces/square.interface';
import { IVertexWeight } from '../../../../assets/interfaces/vertex.interface';
import { IStore } from '../../../../assets/interfaces/store.interface';


interface IVertexOption {
    closePopup: Function
}

export const VertexWeightPopup: React.FC<IVertexOption> = ({ closePopup }) => {
    const { notifications, creator } = useContext(ContentContext);
    const [vertexWeightValue, setVertexWeightValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const selectMatrix = deepCopy(useSelector((state: IStore) => state.ui.select.matrix));
    const vertexWeightMatrix = useSelector((state: IStore) => state.map.vertex.matrix);
    const vertexWeights = deepCopy(useSelector((state: IStore) => state.map.vertex.weights));
    const dispatch = useDispatch(); 

    useEffect((): void => {
        if (
            parseInt(vertexWeightValue) < creatorConfig?.vertexWeight?.min || 
            parseInt(vertexWeightValue) > creatorConfig?.vertexWeight?.max || 
            !vertexWeightMatrix || 
            !Number(vertexWeightValue)
        ) {
            setError(true);
        }
        else setError(false);

    }, [vertexWeightValue, vertexWeightMatrix]);

    useEffect(() => {
        const keyPressHandler = (event): void => {
            if (event.key === 'Escape') closePopup(false);
            else if (event.key === 'Enter') insertVertexWeight();
        };

        document.addEventListener('keydown', keyPressHandler);
        return () => {
            document.removeEventListener('keydown', keyPressHandler);
        };
    });

    const insertVertexWeight = (): void => {
        if (error) return;

        const potentialWeights: ISquareData[] = matrixToIds(selectMatrix);
        potentialWeights.forEach(location => {
            if (!vertexWeights.some(e => e.id === location.id)) {
                const newVertex: IVertexWeight = {
                    ...location,
                    weight: parseInt(vertexWeightValue)
                };

                vertexWeights.push(newVertex);
              }
        });

        closePopup(false);
        dispatch(changeMapVertexWeights(vertexWeights));
        markSquare(
            vertexWeightMatrix, 
            'MAP_VERTEXWEIGHT_CANVAS', 
            changeMapVertexWeightMatrix, 
            notifications?.options?.vertex?.add, 
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
                    { creator?.panel?.options?.vertex?.title }
                </header>
                <label className="insertPopup__label t-paragraph6Light">
                    { creator?.panel?.options?.vertex?.desc }
                    ({creatorConfig?.vertexWeight?.min} - {creatorConfig?.vertexWeight?.max})
                </label>
                <input 
                    type='text' 
                    value={vertexWeightValue} 
                    onChange={e => setVertexWeightValue(e.target.value)}
                />
                {
                    (error) ? (
                        <span className="insertPopup--error">
                           { creator?.panel?.options?.vertex?.error }
                        </span>
                    ) : null
                }

                <button 
                    type="submit" 
                    className="insertPopup__submit t-paragraphLight" 
                    onClick={insertVertexWeight} disabled={error}
                > 
                    { creator?.panel?.options?.vertex?.submit }
                </button>
            </div>
        </div>
    );
};