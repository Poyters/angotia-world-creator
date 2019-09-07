import React from 'react';
import { useSelector } from 'react-redux';

//Import scripts
import { markSquare } from '../../../assets/scripts/markSquare';

//Import configs
import creatorConfig from '../../../assets/configs/creatorConfig.json';

//Import actions
import { changeMapBlockMatrix } from '../../../redux/actions/mapActions';


const VertexWeightOption = () => {
	const blockMatrix = useSelector(state => state.map.blockMatrix);
	const fillColor = creatorConfig.blockSquareColor;

	return (
		<div role="button" className="option" onClick={() => markSquare(blockMatrix, 'mapBlockCanvas', changeMapBlockMatrix, 'Added vertex weights', fillColor, 'weight')}>
			<div className="vertexWeightOption">
                <div className="vertexWeightOption__number">
                    5
                </div>
            </div>
		</div>
	)
}


export default VertexWeightOption