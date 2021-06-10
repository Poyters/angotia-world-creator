import React from 'react';
import { useSelector } from 'react-redux';
import { markSquare } from '../../../scripts/matrix/markSquare';
import { isEmptyMatrix } from '../../../scripts/validators/isEmptyMatrix';
import { addNotification } from '../../../scripts/utils/notifications';
import mapConfig from '../../../assets/configs/map.config.json';
import { changeMapBlockMatrix } from '../../../store/actions/mapActions';
import { IStore } from '../../../interfaces/store.interface';
import { Canvas } from '../../../models/canvas.model';
import { Notification } from '../../../models/notification.model';
import { MatrixFillColor } from '../../../models/matrixFillColor.model';


export const BlockOption = (props: { 
	selectNote?: string, changeNote?: string 
}) => {
	const blockMatrix = useSelector((state: IStore) => state.map.blockMatrix);
	const fillColor = mapConfig.blockSquareColor;
	const selectMatrix = useSelector((state: IStore) => state.ui.select.matrix);

	const blockHandler = (): void => {
		if (isEmptyMatrix(selectMatrix)) {

			if (props.selectNote) addNotification(props.selectNote, Notification.error);
			return;
		}

		markSquare(
			blockMatrix, 
			Canvas.block, 
			changeMapBlockMatrix, 
			props.changeNote, 
			fillColor, 
			MatrixFillColor.barrier
		);
	};

	return (
		<div 
			role="button" 
			className="option option--block" 
			onClick={(): void => blockHandler()}
			data-title={'creator?.panel?.options?.block?.dataTitle'}
		>
			<div className="g-exitBtn"></div>
		</div>
	);
};