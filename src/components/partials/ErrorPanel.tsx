import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../interfaces/store.interface';
import { toggleErrorPanel } from '../../store/actions/uiActions';
import { MapCreationError } from '../../models/mapCreationError.model';


export const ErrorPanel: React.FC = () => {
	const isOpen: string = useSelector((state: IStore) => state.ui.errorPanelIsOpen);
	const mapErrors: string[] = useSelector((state: IStore) => state.ui.mapCreationErrors);
	const dispatch = useDispatch();

	const errorPanelStyles = {
		right: isOpen ? "0" : "-300px"
	};

	return (
		<>
			<div
				className="g-sidePanelSwitch g-sidePanelSwitch--errorPanel t-paragraph4Normal"
				onClick={(): void => dispatch(toggleErrorPanel(true))}
			>
				Error panel
			</div>
			<aside
				className="g-sidePanelWrapper"
				style={errorPanelStyles}
			>
				<div className="g-sidePanel">
					{ 
						mapErrors.includes(MapCreationError.minEntryLevel) ? (
							<span> entry level is too small </span>
						) : null
					}
					<div
						className="g-sidePanel__switch t-paragraph4Normal"
						onClick={(): void => dispatch(toggleErrorPanel(false))}
					>
						<span>
							Close error panel
						</span>
					</div>
				</div>
			</aside>
		</>
	);
};