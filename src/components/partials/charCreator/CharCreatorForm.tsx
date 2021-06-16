import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionInputField } from '../ActionInputField';
import { CharSprite } from './CharSprite';
import { CornerButton } from '../CornerButton';
import { ChooseButtons } from '../ChooseButtons';
import { Dialogs } from './dialogs/Dialogs';
import { 
  changeCharType, 
  changeChar, 
  setIsAgressiveMob,
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


export const CharCreatorForm: React.FC = () => {
  const { t } = useTranslation(['char', 'common']);
  const charType = useSelector((state: IStore) => state.char.choosed);
  const name = useSelector((state: IStore) => state.char.name);
  const charStatistics = useSelector((state: IStore) => state.char.statistics);
  const charMoveType = useSelector((state: IStore) => state.char.type);
  const internalId = useSelector((state: IStore) => state.char.internalId);
  const isAgressiveMob = useSelector((state: IStore) => state.char.isAgressiveMob);
  const charChoosed = useSelector((state: IStore) => state.char.choosed);
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
                    label: t('char:settings.respawnTime')
                  },
                  {
                    id: CharType.mob,
                    label: 'mob'
                  },
                  {
                    id: CharType.se,
                    label: 'se'
                  }
                ]}
                action={changeChar}
                label={'char?.form?.char?.label'}
                choosed={charChoosed}
              />
              
              { charType === CharType.mob ? (
                  <>
                    <ChooseButtons 
                      types={[]}
                      action={setIsAgressiveMob}
                      label={'char?.form?.isAgressiveMob?.title'}
                      specialClass='chooseButtonsWrapper--smaller'
                      choosed={isAgressiveMob}
                    />

                    <ChooseButtons 
                      types={[]}
                      action={setMobRange}
                      label={'char?.form?.mobRange?.title'}
                      specialClass='chooseButtonsWrapper--smaller'
                      choosed={actualMobRange}
                    />
                  </>
                ) : null
              }

              {
                charType !== CharType.se ? (
                  <ChooseButtons 
                    types={[]}
                    action={changeCharType}
                    label={'char?.form?.charType?.label'}
                    choosed={charMoveType}
                  />
                ) : null
              }

              { charMoveType === CharMoveType.moving  && charType !== CharType.se ? (
                <ActionInputField
                  label={'char?.form?.charType?.movingField'}
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