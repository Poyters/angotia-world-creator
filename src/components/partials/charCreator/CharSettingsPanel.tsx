import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { ActionMaxMinField } from '../ActionMaxMinField';
import { ChooseButtons } from '../ChooseButtons';
import { ContentContext } from '../../../Template';
import { 
	setVisibleLevel,
	setTimeOfOccurance,
	setRespawnTime
} from '../../../store/actions/charActions';
import { IStore } from '../../../interfaces/store.interface';
import { ChoosedChar } from '../../../models/choosedChar.model';


export const CharSettingsPanel: React.FC = () => {
	const { char } = useContext(ContentContext);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const charSettings = useSelector((state: IStore) => state.char.settings);
	const choosedChar: string = useSelector((state: IStore) => state.char.choosed);
	const hasVisibleLevel: boolean = useSelector((state: IStore) => state.char.hasVisibleLevel);

	const settingsPanelStyles = {
		left: isOpen ? "0" : "-300px"
	};

	return (
		<>
			<div 
				className=
					"g-sidePanelSwitch g-sidePanelSwitch--charSettingsPanel t-paragraph4Normal"
				onClick={() => setIsOpen(true)}
			> 
				{ char?.settingsPanel?.open }
			</div>
			<aside 
				className="g-sidePanelWrapper g-sidePanelWrapper--left" 
				style={settingsPanelStyles}
			>
				<div className="g-sidePanel g-sidePanel--left">
					{ choosedChar !== ChoosedChar.mob ?
						<ChooseButtons 
							types={char?.settingsPanel?.hasVisibleLevel?.types}
							action={setVisibleLevel}
							label={char?.settingsPanel?.hasVisibleLevel?.title}
							specialClass='chooseButtonsWrapper--charSettingsPanel'
							choosed={hasVisibleLevel}
						/> : null
					}
					{ choosedChar === ChoosedChar.mob ?
						<ActionMaxMinField
							label='Respawn time (seconds)'
							minValue={charSettings?.respTime?.min}
							maxValue={charSettings?.respTime?.max}
							action={setRespawnTime}
						/> : null
					}	
					<ActionMaxMinField
						label='Time of occurance'
						minValue={charSettings?.timeOfOccurance?.min}
						maxValue={charSettings?.timeOfOccurance?.max}
						action={setTimeOfOccurance}
					/> 

					<div 
						className="g-sidePanel__switch t-paragraph5Normal" 
						onClick={() => setIsOpen(false)}
					>
						<span>
							{ char?.settingsPanel?.close }
						</span>
					</div>
				</div>
			</aside>
		</>
	);
};