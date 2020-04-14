import React from 'react';
import { useSelector } from 'react-redux';
import { markSquare } from '../../../assets/scripts/markSquare';
import { isEmptyMatrix } from '../../../assets/scripts/isEmptyMatrix';
import { setActionNote } from '../../../assets/scripts/notifications';
import creatorConfig from '../../../assets/configs/creatorConfig.json';
import { changeMapBlockMatrix } from '../../../store/actions/mapActions';
import { IStore } from '../../../assets/interfaces/store';


interface IBlockOption {
	dataTitle?: string
	selectNote?: string,
	changeNote?: string
}

export const BlockOption: React.FC<IBlockOption> = ({ 
	dataTitle, selectNote, changeNote
}) => {
	const blockMatrix = useSelector((state: IStore) => state.map.blockMatrix);
	const fillColor = creatorConfig.blockSquareColor;
	const selectMatrix = useSelector((state: IStore) => state.ui.select.matrix);

	const blockHandler = (): void => {
		if (isEmptyMatrix(selectMatrix)) {

			if (selectNote) setActionNote(selectNote, 'warning');
			return;
		}
		
		markSquare(
			blockMatrix, 
			'mapBlockCanvas', 
			changeMapBlockMatrix, 
			changeNote, 
			fillColor, 
			'barrier'
		);
	};

	return (
		<div 
			role="button" 
			className="option option--block" 
			onClick={(): void => blockHandler()}
			data-title={dataTitle}
		>
			<div className="g-exitBtn"></div>
		</div>
	);
};