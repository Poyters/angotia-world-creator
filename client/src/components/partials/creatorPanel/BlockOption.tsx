import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { markSquare } from '../../../assets/scripts/markSquare';
import { isEmptyMatrix } from '../../../assets/scripts/isEmptyMatrix';
import { setActionNote } from '../../../assets/scripts/notifications';
import creatorConfig from '../../../assets/configs/creatorConfig.json';
import { changeMapBlockMatrix } from '../../../redux/actions/mapActions';
import { ContentContext } from '../../../Template';


export const BlockOption = () => {
	const { creator, notifications } = useContext(ContentContext);
	const blockMatrix = useSelector(state => state.map.blockMatrix);
	const fillColor = creatorConfig.blockSquareColor;
	const selectMatrix = useSelector(state => state.ui.select.matrix);

	const blockHandler = (): void => {
		if (isEmptyMatrix(selectMatrix)) {
			setActionNote(notifications.options.block.select, 'warning');
			return;
		}
		
		markSquare(
			blockMatrix, 
			'mapBlockCanvas', 
			changeMapBlockMatrix, 
			'Selected fields have been blocked', 
			fillColor, 
			'barrier'
		);
	};

	return (
		<div 
			role="button" 
			className="option option--block" 
			onClick={(): void => blockHandler()} 
			data-title={creator.panel.options.block.dataTitle}
		>
			<div className="g-exitBtn"></div>
		</div>
	);
};