import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Arrow } from '../Arrow';
import { ActionInputField } from '../ActionInputField';
import { ChooseButtons } from '../ChooseButtons';
import { ContentContext } from '../../../Template';
import { setVisibleLevel } from '../../../store/actions/charActions';
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
				{ char.settingsPanel.open }
			</div>
			<aside 
				className="g-sidePanelWrapper g-sidePanelWrapper--left" 
				style={settingsPanelStyles}
			>
				<div className="g-sidePanel g-sidePanel--left">
					{ choosedChar === 'npc' ?
						<ChooseButtons 
							types={char.settingsPanel.hasVisibleLevel.types}
							action={setVisibleLevel}
							label={char.settingsPanel.hasVisibleLevel.title}
							specialClass='chooseButtonsWrapper--charSettingsPanel'
						/> : null
					}
					{ choosedChar === 'mob' ?
						<ActionInputField
							label='Respawn time (sec; x-y value)'
							inputValue={'500-900'}
						/> : null
					}	
					<ActionInputField
						label='Time of occurence'
						inputValue={'0-24'}
					/>

					<div 
						className="g-sidePanel__switch t-paragraph4Normal" 
						onClick={(): void => setIsOpen(false)}
					>
						<Arrow additionalClass="arrow--leftDirection"/>
						<span>
							{ char.settingsPanel.close }
						</span>
					</div>
				</div>
			</aside>
		</>
	);
};