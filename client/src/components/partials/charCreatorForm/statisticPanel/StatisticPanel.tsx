import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Import components
import Arrow from '../../Arrow';
import CharInputField from '../CharInputField';

//Import contexts
import { ContentContext } from '../../../../Template';

//Import actions
import { toggleStatisticPanel } from '../../../../redux/actions/uiActions';
import { 
  changeStatistics
} from '../../../../redux/actions/charActions';


const StaticticPanel: React.FC = () => {
	const { char } = useContext(ContentContext);
	const isOpen: string = useSelector(state => state.ui.statisticPanelIsOpen);
	const choosedChar: string = useSelector(state => state.char.choosed);
	const charType: string = useSelector(state => state.char.type);
	const isAgressiveMob: string = useSelector(state => state.char.isAgressiveMob);
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
					<CharInputField
						label={char.form.inputs.strength}
						inputValue={0}
						action={changeStatistics}
            payloadId='strength'
					/>
					<CharInputField
						label={char.form.inputs.dexterity}
						inputValue={0}
						action={changeStatistics}
            payloadId='dexterity'
					/>
					<CharInputField
						label={char.form.inputs.inteligence}
						inputValue={0}
						action={changeStatistics}
            payloadId='inteligence'
					/>
					<CharInputField
						label={char.form.inputs.jink}
						inputValue={0}
						action={changeStatistics}
            payloadId='jink'
					/>
					{ charType === char.form.charType.movingId ? (
						<CharInputField
							label={char.form.inputs.speed}
							inputValue={10}
							action={changeStatistics}
              payloadId='speed'
						/>) : null
					}
					{ choosedChar === char.form.char.mobId && 
						isAgressiveMob === char.form.isAgressiveMob.yesId ? (
						<CharInputField
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
						<Arrow additionalClass="arrow--statisticPanel"/>
						<span>
							{ char.statisticPanel.close }
						</span>
					</div>
				</div>
			</aside>
		</>
	);
};


export default StaticticPanel;