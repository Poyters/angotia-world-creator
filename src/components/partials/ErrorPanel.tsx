import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../interfaces/store.interface';
import { toggleErrorPanel } from '../../store/actions/uiActions';
import { MapCreationError } from '../../models/mapCreationError.model';
import mapConfig from '../../assets/configs/map.config.json';


export const ErrorPanel: React.FC = () => {
	const isOpen: string = useSelector((state: IStore) => state.ui.errorPanelIsOpen);
	const mapErrors: string[] = useSelector((state: IStore) => state.ui.mapCreationErrors);
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
								<li> 
									Entry level must be larger than { rules.entryLevel.min }
								</li>
							) : null
						}
						{ 
							mapErrors.includes(MapCreationError.maxEntryLevel) ? (
								<li> 
									Entry level must be smaller than { rules.entryLevel.max }
								</li>
							) : null
						}
						{ 
							mapErrors.includes(MapCreationError.minDescriptionLength) ? (
								<li> 
									Description must be larger than { rules.description.length.min }
								</li>
							) : null
						}
						{ 
							mapErrors.includes(MapCreationError.maxDescriptionLength) ? (
								<li> 
									Description must be smaller than { rules.description.length.max }
								</li>
							) : null
						}
						{ 
							mapErrors.includes(MapCreationError.minMapLength) ? (
								<li> 
									Map name must be larger than { rules.name.length.min }
								</li>
							) : null
						}
						{ 
							mapErrors.includes(MapCreationError.maxMapLength) ? (
								<li> 
									Map name must be smaller than { rules.name.length.max }
								</li>
							) : null
						}
						{ 
							mapErrors.includes(MapCreationError.maxBlockQuantity) ? (
								<li> 
									Too much block squares. Max 1 per { rules.block.quantity.max } squares
								</li>
							) : null
						}
						{ 
							mapErrors.includes(MapCreationError.maxPassageQuantity) ? (
								<li> 
									Too much passage squares. Max 1 per { rules.passage.quantity.max } squares
								</li>
							) : null
						}
						{ 
							mapErrors.includes(MapCreationError.maxSeQuantity) ? (
								<li> 
									Too much se squares. Max 1 per { rules.se.quantity.max } squares
								</li>
							) : null
						}
						{ 
							mapErrors.includes(MapCreationError.maxNpcQuantity) ? (
								<li> 
									Too much npcs squares. Max 1 per { rules.npc.quantity.max } squares
								</li>
							) : null
						}
						{ 
							mapErrors.includes(MapCreationError.maxMobQuantity) ? (
								<li> 
									Too much mobs squares. Max 1 per { rules.mob.quantity.max } squares
								</li>
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