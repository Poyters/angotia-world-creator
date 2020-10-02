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
					<header 
						className="errorPanelHeader t-paragraph6Bold"
					>
						 Program occurs 
						 <span 
						 	className="errorPanelHeader__count t-paragraph3Bold"
							> 
						 	{ mapErrors.length }
						 </span> 
						 { mapErrors.length === 1 ? 'error' : 'errors'}:
					</header>
					<ol className="errorPanelList t-paragraph2Light">
						{ 
							mapErrors.includes(MapCreationError.minEntryLevel) ? (
								<li> entry level is too small </li>
							) : null
						}
						{ 
							mapErrors.includes(MapCreationError.minEntryLevel) ? (
								<li> entry level is too small </li>
							) : null
						}
					</ol>
					
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