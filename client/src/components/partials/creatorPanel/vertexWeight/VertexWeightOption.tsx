import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

//Import configs
import creatorConfig from '../../../../assets/configs/creatorConfig.json';

//Import scripts
import { matrixToIds } from '../../../../assets/scripts/matrix';
import { deepCopy } from '../../../../assets/scripts/utils/deepCopy';
import { markSquare } from '../../../../assets/scripts/markSquare';
import { isEmptyMatrix } from '../../../../assets/scripts/isEmptyMatrix';
import { setActionNote } from '../../../../assets/scripts/notifications';

//Import components
import VertexWeightPopup from './VertexWeightPopup';

//Import actions
import { changeMapVertexWeightMatrix, changeMapVertexWeights } from '../../../../redux/actions/mapActions';


let pressedKey: number = -1;
document.addEventListener('keydown', event => pressedKey = event.keyCode);

const VertexWeightOption: React.FC = () => {
    const [isPopup, setIsPopup] = useState<Boolean>(false);
    const selectMatrix = deepCopy(useSelector(state => state.map.select.matrix));
    const vertexWeightMatrix = useSelector(state => state.map.vertex.matrix);
    let vertexWeights = deepCopy(useSelector(state => state.map.vertex.weights));
    const dispatch = useDispatch(); 

    const vertexHandler = () => {
        if (isEmptyMatrix(selectMatrix)) {
            setActionNote('Need to select fields', 'warning');
            return;
        }

        pressedKey === creatorConfig.secondOptionKeyCode ? deletePassage() : setIsPopup(true);

        setTimeout(() => pressedKey = -1, 500) 
    }
    
    const deletePassage = () => {
        const deleteLocations = matrixToIds(selectMatrix);

        deleteLocations.forEach(location => {
            if (vertexWeights.some(e => e.id === location.id)) {
                const index = vertexWeights.findIndex(x => x.id === location.id);

                vertexWeights.splice(index, 1);
              }
        })

        dispatch(changeMapVertexWeights(vertexWeights));
        markSquare(vertexWeightMatrix, 'mapVertexWeightCanvas', changeMapVertexWeightMatrix, 'Vertex weight added', '', 'vertexWeight')
    }

    return (
        <Fragment>
            { isPopup ? ReactDOM.createPortal(<VertexWeightPopup closePopup={setIsPopup}/>, document.body) : null}
            <div role="button" className="option" onClick={() => vertexHandler()} data-title="add/delete vertex weight">
				<div className="vertexWeightOption">
					<div className="vertexWeightOption__number">
                        { creatorConfig.vertexWeight.max }
					</div>
				</div>
			</div>
        </Fragment>
    )
}


export default VertexWeightOption;