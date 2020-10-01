import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../interfaces/store.interface';
import { toggleErrorPanel } from '../../store/actions/uiActions';
import { IMapState } from '../../interfaces/mapState.interface';
import mapConfig from '../../assets/configs/map.config.json';


export const ErrorPanel: React.FC = () => {
	const isOpen: string = useSelector((state: IStore) => state.ui.errorPanelIsOpen);
	const mapState: IMapState = useSelector((state: IStore) => state.map);
	const dispatch = useDispatch();
	const rules = mapConfig.rules;

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
						mapState.mapName.length < rules.mapName.length.min ? (
							<span> map anme is too small </span>
						) : null
					}
					{ 
						mapState.mapName.length > rules.mapName.length.max ? (
							<span> map anme is too long </span>
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