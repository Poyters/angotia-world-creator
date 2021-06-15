import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionInputField } from '../ActionInputField';
import { toggleStatisticPanel } from '../../../store/actions/uiActions';
import { IStore } from '../../../interfaces/store.interface';
import {
	changeStatistics
} from '../../../store/actions/charActions';
import { ChoosedChar } from '../../../models/choosedChar.model';
import { CharType } from '../../../models/charType.model';
import { useTranslation } from 'react-i18next';


export const StatisticPanel: React.FC = () => {
	const { t } = useTranslation(['char', 'common']);
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
						{ t('char:statisticPanel.title') }
					</div>
				) : null
			}
			<aside
				className="g-sidePanelWrapper g-sidePanelWrapper--left"
				style={statisticPanelStyles}
			>
				<div className="g-sidePanel g-sidePanel--left">
					<ActionInputField
						label={t('char:statistics.strength')}
						inputValue={charStatistics.strength}
						action={changeStatistics}
						payloadId='strength'
					/>
					<ActionInputField
						label={t('char:statistics.dexterity')}
						inputValue={charStatistics.dexterity}
						action={changeStatistics}
						payloadId='dexterity'
					/>
					<ActionInputField
						label={t('char:statistics.inteligence')}
						inputValue={charStatistics.inteligence}
						action={changeStatistics}
						payloadId='inteligence'
					/>
					<ActionInputField
						label={t('char:statistics.jink')}
						inputValue={charStatistics.jink}
						action={changeStatistics}
						payloadId='jink'
					/>
					{charType === CharType.moving ? (
						<ActionInputField
							label={t('char:statistics.speed')}
							inputValue={charStatistics.speed}
							action={changeStatistics}
							payloadId='speed'
						/>) : null
					}
					{choosedChar === ChoosedChar.mob &&
						isAgressiveMob ? (
							<ActionInputField
								label={t('char:statistics.attackRange')}
								inputValue={charStatistics.attackRange}
								action={changeStatistics}
								payloadId='attackRange'
							/>) : null
					}

					{choosedChar === ChoosedChar.mob ? (
						<ActionInputField
							label={t('char:statistics.attackSpeed')}
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
							{ t('common:close') }
						</span>
					</div>
				</div>
			</aside>
		</>
	);
};