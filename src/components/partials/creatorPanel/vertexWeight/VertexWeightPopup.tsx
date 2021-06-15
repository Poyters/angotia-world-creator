import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { matrixToIds } from '../../../../scripts/parsers/matrixToIds';
import { deepCopy } from '../../../../scripts/utils/deepCopy';
import { markSquare } from '../../../../scripts/matrix/markSquare';
import mapConfig from '../../../../assets/configs/map.config.json';
import { 
    changeMapVertexWeightMatrix, 
    changeMapVertexWeights 
} from '../../../../store/actions/mapActions';
import { ISquareData } from '../../../../interfaces/square.interface';
import { IVertexWeight } from '../../../../interfaces/vertex.interface';
import { IStore } from '../../../../interfaces/store.interface';
import { Canvas } from '../../../../models/canvas.model';
import { MatrixFillColor } from '../../../../models/matrixFillColor.model';
import { IPopup } from '../../../../interfaces/popup.interface';
import { useTranslation } from 'react-i18next';


export const VertexWeightPopup: React.FC<IPopup> = ({ isActivePopup }) => {
    const { t } = useTranslation(['common', 'map', 'notifications']);
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
            t('notifications:notes.vertex.add'), 
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
                    { t('map:vertex.title') }
                </header>
                <label className="insertPopup__label t-paragraph6Light">
                    { 
                        t('map:vertex.description', {
                            min: mapConfig?.vertexWeight?.min,
                            max: mapConfig?.vertexWeight?.max
                        }) 
                    }
                </label>
                <input 
                    type='text' 
                    value={vertexWeightValue} 
                    onChange={e => setVertexWeightValue(e.target.value)}
                />
                {
                    (error) ? (
                        <span className="insertPopup--error">
                           { t('map:vertex.error') }
                        </span>
                    ) : null
                }

                <button 
                    type="submit" 
                    className="insertPopup__submit t-paragraphLight" 
                    onClick={insertVertexWeight} disabled={error}
                > 
                    { t('common:submit') }
                </button>
            </div>
        </div>
    );
};