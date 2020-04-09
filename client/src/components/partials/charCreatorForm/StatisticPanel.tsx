import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Arrow } from '../Arrow';
import { ActionInputField } from '../ActionInputField';
import { ContentContext } from '../../../Template';
import { toggleStatisticPanel } from '../../../store/actions/uiActions';
import { IStore } from '../../../assets/interfaces/store';
import { 
  changeStatistics
} from '../../../store/actions/charActions';


export const StatisticPanel: React.FC = () => {
	const { char } = useContext(ContentContext);
	const isOpen: string = useSelector((state: IStore) => state.ui.statisticPanelIsOpen);
	const choosedChar: string = useSelector((state: IStore) => state.char.choosed);
	const charType: string = useSelector((state: IStore) => state.char.type);
	const isAgressiveMob: string = useSelector((state: IStore) => state.char.isAgressiveMob);
	const dispatch = useDispatch();

	const statisticPanelStyles = {
		left: isOpen ? "0" : "-300px"
	};

	return (
		<>
			<div 
				className="g-sidePanelSwitch g-sidePanelSwitch--statisticPanel t-paragraph4Normal" 
				onClick={(): void => dispatch(toggleStatisticPanel(true))}
			> 
				{ char.statisticPanel.open }
			</div>
			<aside 
				className="g-sidePanelWrapper g-sidePanelWrapper--left" 
				style={statisticPanelStyles}
			>
				<div className="g-sidePanel g-sidePanel--left">
					<ActionInputField
						label={char.form.inputs.strength}
						inputValue={0}
						action={changeStatistics}
            			payloadId='strength'
					/>
					<ActionInputField
						label={char.form.inputs.dexterity}
						inputValue={0}
						action={changeStatistics}
            			payloadId='dexterity'
					/>
					<ActionInputField
						label={char.form.inputs.inteligence}
						inputValue={0}
						action={changeStatistics}
            			payloadId='inteligence'
					/>
					<ActionInputField
						label={char.form.inputs.jink}
						inputValue={0}
						action={changeStatistics}
            			payloadId='jink'
					/>
					{ charType === 'moving' ? (
						<ActionInputField
							label={char.form.inputs.speed}
							inputValue={10}
							action={changeStatistics}
              				payloadId='speed'
						/>) : null
					}
					{ choosedChar === 'mob' && 
						isAgressiveMob ? (
						<ActionInputField
							label={char.form.inputs.attackRange}
							inputValue={5}
							action={changeStatistics}
              				payloadId='attackRange'
						/>) : null
					}			

					<div 
						className="g-sidePanel__switch t-paragraph4Normal" 
						onClick={(): void => dispatch(toggleStatisticPanel(false))}
					>
						<Arrow additionalClass="arrow--leftDirection"/>
						<span>
							{ char.statisticPanel.close }
						</span>
					</div>
				</div>
			</aside>
		</>
	);
};