import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { markSquare } from '../../../assets/scripts/markSquare';
import { isEmptyMatrix } from '../../../assets/scripts/isEmptyMatrix';
import { addNotification } from '../../../assets/scripts/notifications';
import creatorConfig from '../../../assets/configs/creatorConfig.json';
import { changeMapBlockMatrix } from '../../../store/actions/mapActions';
import { IStore } from '../../../interfaces/store.interface';
import { ContentContext } from '../../../Template';


interface IBlockOption {
	selectNote?: string,
	changeNote?: string
}

export const BlockOption: React.FC<IBlockOption> = ({ 
	selectNote, changeNote
}) => {
	const { creator } = useContext(ContentContext);
	const blockMatrix = useSelector((state: IStore) => state.map.blockMatrix);
	const fillColor = creatorConfig.blockSquareColor;
	const selectMatrix = useSelector((state: IStore) => state.ui.select.matrix);

	const blockHandler = (): void => {
		if (isEmptyMatrix(selectMatrix)) {

			if (selectNote) addNotification(selectNote, 'warning');
			return;
		}

		markSquare(
			blockMatrix, 
			'MAP_BLOCK_CANVAS', 
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
			data-title={creator?.panel?.options?.block?.dataTitle}
		>
			<div className="g-exitBtn"></div>
		</div>
	);
};