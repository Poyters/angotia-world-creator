import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionInputField } from '../ActionInputField';
import { ContentContext } from '../../../Template';
import { toggleStatisticPanel } from '../../../store/actions/uiActions';
import { IStore } from '../../../interfaces/store.interface';
import {
	changeStatistics
} from '../../../store/actions/charActions';
import { ChoosedChar } from '../../../models/choosedChar.model';
import { CharType } from '../../../models/charType.model';


export const StatisticPanel: React.FC = () => {
	const { char } = useContext(ContentContext);
	const isOpen = useSelector((state: IStore) => state.ui.statisticPanelIsOpen);
	const choosedChar = useSelector((state: IStore) => state.char.choosed);
	const charType = useSelector((state: IStore) => state.char.type);
	const charStatistics = useSelector((state: IStore) => state.char.statistics);
	const isAgressiveMob = useSelector((state: IStore) => state.char.isAgressiveMob);
	const dispatch = useDispatch();

	const statisticPanelStyles = {
		left: isOpen ? '0' : '-300px'
	};

	return (
		<>
			{
				choosedChar !== ChoosedChar.se ? (
					<div
						className=
							"g-sidePanelSwitch g-sidePanelSwitch--statisticPanel t-paragraph4Normal"
						onClick={() => dispatch(toggleStatisticPanel(true))}
					>
						{ char?.statisticPanel?.open}
					</div>
				) : null
			}
			<aside
				className="g-sidePanelWrapper g-sidePanelWrapper--left"
				style={statisticPanelStyles}
			>
				<div className="g-sidePanel g-sidePanel--left">
					<ActionInputField
						label={char?.form?.inputs?.strength}
						inputValue={charStatistics.strength}
						action={changeStatistics}
						payloadId='strength'
					/>
					<ActionInputField
						label={char?.form?.inputs?.dexterity}
						inputValue={charStatistics.dexterity}
						action={changeStatistics}
						payloadId='dexterity'
					/>
					<ActionInputField
						label={char?.form?.inputs?.inteligence}
						inputValue={charStatistics.inteligence}
						action={changeStatistics}
						payloadId='inteligence'
					/>
					<ActionInputField
						label={char?.form?.inputs?.jink}
						inputValue={charStatistics.jink}
						action={changeStatistics}
						payloadId='jink'
					/>
					{charType === CharType.moving ? (
						<ActionInputField
							label={char?.form?.inputs?.speed}
							inputValue={charStatistics.speed}
							action={changeStatistics}
							payloadId='speed'
						/>) : null
					}
					{choosedChar === ChoosedChar.mob &&
						isAgressiveMob ? (
							<ActionInputField
								label={char?.form?.inputs?.attackRange}
								inputValue={charStatistics.attackRange}
								action={changeStatistics}
								payloadId='attackRange'
							/>) : null
					}

					{choosedChar === ChoosedChar.mob ? (
						<ActionInputField
							label={char?.form?.inputs?.attackSpeed}
							inputValue={charStatistics.attackSpeed}
							action={changeStatistics}
							payloadId='attackSpeed'
						/>) : null
					}

					<div
						className="g-sidePanel__switch t-paragraph5Normal"
						onClick={() => dispatch(toggleStatisticPanel(false))}
					>
						<span>
							{char?.statisticPanel?.close}
						</span>
					</div>
				</div>
			</aside>
		</>
	);
};