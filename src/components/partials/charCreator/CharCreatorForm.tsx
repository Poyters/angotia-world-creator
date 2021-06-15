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
import { ChoosedChar } from '../../../models/choosedChar.model';
import { CharType } from '../../../models/charType.model';
import { useTranslation } from 'react-i18next';


export const CharCreatorForm: React.FC = () => {
  const { t } = useTranslation(['char', 'common']);
  const choosedChar = useSelector((state: IStore) => state.char.choosed);
  const name = useSelector((state: IStore) => state.char.name);
  const charStatistics = useSelector((state: IStore) => state.char.statistics);
  const charType = useSelector((state: IStore) => state.char.type);
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
                choosedChar !== ChoosedChar.se ? (
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
                types={[]}
                action={changeChar}
                label={'char?.form?.char?.label'}
                choosed={charChoosed}
              />
              
              { choosedChar === ChoosedChar.mob ? (
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
                choosedChar !== ChoosedChar.se ? (
                  <ChooseButtons 
                    types={[]}
                    action={changeCharType}
                    label={'char?.form?.charType?.label'}
                    choosed={charType}
                  />
                ) : null
              }

              { charType === CharType.moving  && choosedChar !== ChoosedChar.se ? (
                <ActionInputField
                  label={'char?.form?.charType?.movingField'}
                  inputValue={fieldDiameter}
                  action={changeFieldDiameter}
                />
                ) : null
              }           
            </div>
          </div>
          { choosedChar === ChoosedChar.npc || choosedChar === ChoosedChar.se ? (
              <Dialogs 
                type={'char?.form?.dialogs?.title'}
                addBtnText={'char?.form?.dialogs?.addBtn'}
              />
            ) : null
          }
          <Dialogs 
            type={'char?.form?.monologs?.title'}
            addBtnText={'char?.form?.monologs?.addBtn'}
          />
        </div>
      </div>
    </main>
  );
};