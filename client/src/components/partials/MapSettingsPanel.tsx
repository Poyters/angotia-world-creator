import React, { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Arrow } from './Arrow';
import { ActionInputField } from './ActionInputField';
import { ContentContext } from '../../Template';
import { setMapDesc, setMinEntryLevel } from '../../store/actions/mapActions';
import { IStore } from '../../assets/interfaces/store';


export const MapSettingsPanel: React.FC = () => {
	const { creator } = useContext(ContentContext);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const description: string = useSelector((state: IStore) => state.map.description);
	const [descValue, setDescValue] = useState<string>(description);
	const mapId: string = useSelector((state: IStore) => state.map.id);
	const minEntryLevel: number = useSelector((state: IStore) => state.map.minEntryLevel);
	const dispatch = useDispatch();

	const settingsPanelStyles = {
		left: isOpen ? "0" : "-300px"
	};

	return (
		<>
			<div 
				className="g-sidePanelSwitch g-sidePanelSwitch--statisticPanel t-paragraph4Normal" 
				onClick={(): void => setIsOpen(true)}
			> 
				{ creator.settingsPanel.open }
			</div>
			<aside 
				className="g-sidePanelWrapper g-sidePanelWrapper--left" 
				style={settingsPanelStyles}
			>
				<div className="g-sidePanel g-sidePanel--left">
					<ActionInputField
						label={creator.settingsPanel.id}
						inputValue={mapId}
						inputDisabled={true}
					/>
					<ActionInputField
						label={creator.settingsPanel.minLevel}
						inputValue={minEntryLevel}
						action={setMinEntryLevel}
					/>

					<div className="g-separeTextarea">
						<label className="g-separeTextarea__label t-paragraph6Light">
							{ creator.settingsPanel.description }
						</label>
						<textarea
							className="g-separeTextarea__area g-separeTextarea__area--mapDesc"
							value={descValue}
							onChange={e => setDescValue(e.target.value)}
							onBlur={():void => dispatch(setMapDesc(descValue))}
						/>
					</div>

					<div
						className="g-sidePanel__switch t-paragraph4Normal" 
						onClick={(): void => setIsOpen(false)}
					>
						<Arrow additionalClass="arrow--leftDirection"/>
						<span>
							{ creator.settingsPanel.close }
						</span>
					</div>
				</div>
			</aside>
		</>
	);
};