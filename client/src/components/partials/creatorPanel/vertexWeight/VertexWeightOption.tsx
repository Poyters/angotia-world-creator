import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import creatorConfig from '../../../../assets/configs/creatorConfig.json';
import { matrixToIds } from '../../../../assets/scripts/matrix';
import { deepCopy } from '../../../../assets/scripts/utils/deepCopy';
import { markSquare } from '../../../../assets/scripts/markSquare';
import { isEmptyMatrix } from '../../../../assets/scripts/isEmptyMatrix';
import { setActionNote } from '../../../../assets/scripts/notifications';
import { VertexWeightPopup } from './VertexWeightPopup';
import { 
    changeMapVertexWeightMatrix, 
    changeMapVertexWeights 
} from '../../../../redux/actions/mapActions';
import { ContentContext } from '../../../../Template';


let pressedKey: string | null = null;
document.addEventListener('keydown', event => pressedKey = event.key);
document.addEventListener('keyup', () => pressedKey = null);

export const VertexWeightOption: React.FC = () => {
    const { notifications, creator } = useContext(ContentContext);
    const [isPopup, setIsPopup] = useState<Boolean>(false);
    const selectMatrix = deepCopy(useSelector(state => state.ui.select.matrix));
    const vertexWeightMatrix = useSelector(state => state.map.vertex.matrix);
    let vertexWeights = deepCopy(useSelector(state => state.map.vertex.weights));
    const dispatch = useDispatch(); 

    const vertexHandler = (): void => {
        if (isEmptyMatrix(selectMatrix)) {
            setActionNote(notifications.options.vertex.select, 'warning');
            return;
        }

        pressedKey === creatorConfig.secondOptionKeyCode ? deletePassage() : setIsPopup(true);
        pressedKey = null;
    };
    
    const deletePassage = (): void => {
        const deleteLocations = matrixToIds(selectMatrix);

        deleteLocations.forEach(location => {
            if (vertexWeights.some(e => e.id === location.id)) {
                const index = vertexWeights.findIndex(x => x.id === location.id);

                vertexWeights.splice(index, 1);
              }
        });

        dispatch(changeMapVertexWeights(vertexWeights));
        markSquare(
            vertexWeightMatrix, 
            'mapVertexWeightCanvas', 
            changeMapVertexWeightMatrix, 
            notifications.options.vertex.delete, 
            '', 
            'vertexWeight'
        );
    };

    return (
        <>
            { isPopup ? ReactDOM.createPortal(
                <VertexWeightPopup closePopup={setIsPopup}/>, document.body
            ) : null}
            <div 
                role="button" 
                className="option" 
                onClick={(): void => vertexHandler()} 
                data-title={ creator.panel.options.vertex.dataTitle }
            >
				<div className="vertexWeightOption">
					<div className="vertexWeightOption__number">
                        { creatorConfig.vertexWeight.max }
					</div>
				</div>
			</div>
        </>
    );
};