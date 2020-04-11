import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Arrow } from '../Arrow';
import { ActionMaxMinField } from '../ActionMaxMinField';
import { ChooseButtons } from '../ChooseButtons';
import { ContentContext } from '../../../Template';
import { 
	setVisibleLevel,
	setTimeOfOccurance,
	setRespawnTime
} from '../../../store/actions/charActions';
import { IStore } from '../../../assets/interfaces/store';


export const CharSettingsPanel: React.FC = () => {
	const { char } = useContext(ContentContext);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const choosedChar: string = useSelector((state: IStore) => state.char.choosed);

	const settingsPanelStyles = {
		left: isOpen ? "0" : "-300px"
	};

	return (
		<>
			<div 
				className="g-sidePanelSwitch g-sidePanelSwitch--charSettingsPanel t-paragraph4Normal" 
				onClick={(): void => setIsOpen(true)}
			> 
				{ char?.settingsPanel?.open }
			</div>
			<aside 
				className="g-sidePanelWrapper g-sidePanelWrapper--left" 
				style={settingsPanelStyles}
			>
				<div className="g-sidePanel g-sidePanel--left">
					{ choosedChar === 'npc' ?
						<ChooseButtons 
							types={char?.settingsPanel?.hasVisibleLevel?.types}
							action={setVisibleLevel}
							label={char?.settingsPanel?.hasVisibleLevel?.title}
							specialClass='chooseButtonsWrapper--charSettingsPanel'
						/> : null
					}
					{ choosedChar === 'mob' ?
						<ActionMaxMinField
							label='Respawn time (seconds)'
							minValue={500}
							maxValue={1000}
							action={setRespawnTime}
						/> : null
					}	
					<ActionMaxMinField
						label='Time of occurance'
						minValue={0}
						maxValue={24}
						action={setTimeOfOccurance}
					/> 

					<div 
						className="g-sidePanel__switch t-paragraph4Normal" 
						onClick={(): void => setIsOpen(false)}
					>
						<Arrow additionalClass="arrow--leftDirection"/>
						<span>
							{ char?.settingsPanel?.close }
						</span>
					</div>
				</div>
			</aside>
		</>
	);
};