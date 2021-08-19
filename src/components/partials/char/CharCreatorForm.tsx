/* eslint-disable max-lines */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionInputField } from '../ActionInputField';
import { CharSprite } from './CharSprite';
import { CornerButton } from '../buttons/CornerButton';
import { ChooseButtons } from '../buttons/ChooseButtons';
import { Dialogs } from './dialogs/Dialogs';
import { 
  changeCharMoveType, 
  changeChar, 
  setIsMobAggressive,
  changeStatistics,
  changeName,
  changeFieldDiameter,
  setMobRange
} from '../../../store/actions/charActions';
import { toggleStatisticPanel } from '../../../store/actions/uiActions';
import { IStore } from '../../../interfaces/store.interface';
import { CharType } from '../../../models/charType.model';
import { CharMoveType } from '../../../models/charMoveType.model';
import { useTranslation } from 'react-i18next';
import { Monologs } from './monologs/Monologs';
import { MobRange } from '../../../models/mobRange.model';


export const CharCreatorForm: React.FC = () => {
  const { t } = useTranslation(['char', 'common']);
  const charType = useSelector((state: IStore) => state.char.type);
  const name = useSelector((state: IStore) => state.char.name);
  const charStatistics = useSelector((state: IStore) => state.char.statistics);
  const charMoveType = useSelector((state: IStore) => state.char.moveType);
  const internalId = useSelector((state: IStore) => state.char.internalId);
  const isMobAggressive = useSelector((state: IStore) => state.char.isMobAggressive);
  const fieldDiameter = useSelector((state: IStore) => state.char.fieldDiameter);
  const actualMobRange = useSelector((state: IStore) => state.char.mobRange);
  const dispatch = useDispatch();

  return (
    <main className="charCreatorFormWrapper">
      <div className="charCreatorFormContentWrapper">
        <div role="presentation" className="charCreatorFormContentWrapper__decorations"></div>
        <header className="charCreatorHeader t-paragraph7Light">
          { t('char:creator.title') }
        </header>
        <div className="charCreatorForm">
          <div className="charCreatorForm__row">
            <div className="charFormPanel charFormPanel--left">
              <ActionInputField
                inputValue={name}
                label={t('char:creator.name')}
                action={changeName}
              />
              <ActionInputField
                label={t('common:id')}
                inputValue={internalId}
                inputDisabled={true}
              />
              <ActionInputField
                label={t('char:statistics.level')}
                inputValue={charStatistics.level}
                action={changeStatistics}
                payloadId='level'
              />
              <ActionInputField
                label={t('char:statistics.health')}
                inputValue={charStatistics.health}
                action={changeStatistics}
                payloadId='health'
              />
              <ActionInputField
                label={t('char:statistics.attack')}
                inputValue={charStatistics.attack}
                action={changeStatistics}
                payloadId='attack'
              />
              <ActionInputField
                label={t('char:statistics.defence')}
                inputValue={charStatistics.defence}
                action={changeStatistics}
                payloadId='defence'
              />
              {
                charType !== CharType.se ? (
                  <CornerButton 
                    name={t('char:creator.moreStats')}
                    clickEvent={() => dispatch(toggleStatisticPanel(true))}
                  />
                ) : null
              }
            </div>
            <div className="charFormPanel">
              <CharSprite />
              
              <ChooseButtons 
                types={[
                  {
                    id: CharType.npc,
                    label: t('char:types.npc')
                  },
                  {
                    id: CharType.mob,
                    label: t('char:types.mob')
                  },
                  {
                    id: CharType.se,
                    label: t('char:types.se')
                  }
                ]}
                action={changeChar}
                label={t('char:types.label')}
                choosed={charType}
              />
              
              { charType === CharType.mob ? (
                  <>
                    <ChooseButtons 
                      types={[
                        {
                          id: true,
                          label: t('common:yes')
                        },
                        {
                          id: false,
                          label: t('common:no')
                        }
                      ]}
                      action={setIsMobAggressive}
                      label={t('char:creator.isMobAggressive')}
                      specialClass='chooseButtonsWrapper--smaller'
                      choosed={isMobAggressive}
                    />

                    <ChooseButtons 
                      types={[
                        {
                          id: MobRange.casual,
                          label: t('char:mobRange.casual')
                        },
                        {
                          id: MobRange.special,
                          label: t('char:mobRange.special')
                        },
                        {
                          id: MobRange.lider,
                          label: t('char:mobRange.lider')
                        },
                        {
                          id: MobRange.boss,
                          label: t('char:mobRange.boss')
                        },
                        {
                          id: MobRange.king,
                          label: t('char:mobRange.king')
                        }
                      ]}
                      action={setMobRange}
                      label={t('char:mobRange.title')}
                      specialClass='chooseButtonsWrapper--smaller'
                      choosed={actualMobRange}
                    />
                  </>
                ) : null
              }

              {
                charType !== CharType.se ? (
                  <ChooseButtons 
                    types={[
                      {
                        id: CharMoveType.static,
                        label: t('char:moveType.static')
                      },
                      {
                        id: CharMoveType.moving,
                        label: t('char:moveType.moving')
                      }
                    ]}
                    action={changeCharMoveType}
                    label={t('char:moveType.title')}
                    choosed={charMoveType}
                  />
                ) : null
              }

              { charMoveType === CharMoveType.moving  && charType !== CharType.se ? (
                <ActionInputField
                  label={t('char:creator.fieldDiameter')}
                  inputValue={fieldDiameter}
                  action={changeFieldDiameter}
                />
                ) : null
              }           
            </div>
          </div>
          { charType === CharType.npc || charType === CharType.se ? (
              <Dialogs />
            ) : null
          }
          <Monologs />
        </div>
      </div>
    </main>
  );
};