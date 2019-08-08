import React from 'react';
import { useSelector } from 'react-redux';

//Import scripts
import { markSquare } from '../../../assets/scripts/markSquare';

//Import configs
import creatorConfig from '../../../assets/configs/creatorConfig.json';

//Import actions
import { changeMapBlockMatrix } from '../../../redux/actions/mapActions';


const BlockOption = () => {
	const blockMatrix = useSelector(state => state.map.blockMatrix);
	const fillColor = creatorConfig.blockSquareColor;

	return (
		<div role="button" className="option option--block" onClick={() => markSquare(blockMatrix, 'mapBlockCanvas', changeMapBlockMatrix, 'Selected fields have been blocked', fillColor, 'barrier')}>
			<div className="g-exitBtn"></div>
		</div>
	)
}


export default BlockOption