import React, { useContext, useState } from 'react';

//Import components
import Arrow from './Arrow';
import ActionInputField from './ActionInputField';

//Import contexts
import { ContentContext } from '../../Template';


const MapSettingsPanel: React.FC = () => {
	const { creator } = useContext(ContentContext);
	const [isOpen, setIsOpen] = useState<boolean>(false);

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
						inputValue='fafawf98y329fb2324'
					/>
					<ActionInputField
						label={creator.settingsPanel.minLevel}
						inputValue={0}
					/>

					<ActionInputField
						label={creator.settingsPanel.description}
						inputValue={'M1 to pierwsza wioska, ktorą gości każdego nwoego gracza.'}
					/>

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


export default MapSettingsPanel;