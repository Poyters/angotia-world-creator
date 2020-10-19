import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { matrixToIds } from '../../../../scripts/parsers/matrixToIds';
import { deepCopy } from '../../../../scripts/utils/deepCopy';
import { markSquare } from '../../../../scripts/matrix/markSquare';
import mapConfig from '../../../../assets/configs/map.config.json';
import { 
    changeMapVertexWeightMatrix, 
    changeMapVertexWeights 
} from '../../../../store/actions/mapActions';
import { ContentContext } from '../../../../Template';
import { ISquareData } from '../../../../interfaces/square.interface';
import { IVertexWeight } from '../../../../interfaces/vertex.interface';
import { IStore } from '../../../../interfaces/store.interface';
import { Canvas } from '../../../../models/canvas.model';
import { MatrixFillColor } from '../../../../models/matrixFillColor.model';
import { IPopup } from '../../../../interfaces/popup.interface';


export const VertexWeightPopup: React.FC<IPopup> = ({ isActivePopup }) => {
    const { notifications, creator } = useContext(ContentContext);
    const [vertexWeightValue, setVertexWeightValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const selectMatrix = deepCopy(useSelector((state: IStore) => state.ui.select.matrix));
    const vertexWeightMatrix = useSelector((state: IStore) => state.map.vertex.matrix);
    const vertexWeights = deepCopy(useSelector((state: IStore) => state.map.vertex.weights));
    const dispatch = useDispatch(); 

    useEffect((): void => {
        if (
            parseInt(vertexWeightValue) < mapConfig?.vertexWeight?.min || 
            parseInt(vertexWeightValue) > mapConfig?.vertexWeight?.max || 
            !vertexWeightMatrix || 
            !Number(vertexWeightValue)
        ) {
            setError(true);
        }
        else setError(false);

    }, [vertexWeightValue, vertexWeightMatrix]);

    useEffect(() => {
        const keyPressHandler = (event): void => {
            if (event.key === 'Escape') isActivePopup(false);
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

        isActivePopup(false);
        dispatch(changeMapVertexWeights(vertexWeights));
        markSquare(
            vertexWeightMatrix, 
            Canvas.vertexWeight, 
            changeMapVertexWeightMatrix, 
            notifications?.options?.vertex?.add, 
            vertexWeightValue, 
            MatrixFillColor.vertexWeight
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
                    { creator?.panel?.options?.vertex?.title }
                </header>
                <label className="insertPopup__label t-paragraph6Light">
                    { creator?.panel?.options?.vertex?.desc }
                    ({mapConfig?.vertexWeight?.min} - {mapConfig?.vertexWeight?.max})
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