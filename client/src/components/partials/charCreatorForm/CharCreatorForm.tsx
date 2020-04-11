import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionInputField } from '../ActionInputField';
import { LoadPicBtn } from '../LoadPicBtn';
import { CornerButton } from '../CornerButton';
import { ChooseButtons } from '../ChooseButtons';
import { Dialogs } from './dialogs/Dialogs';
import { 
  changeCharType, 
  changeChar, 
  isAgressiveMob, 
  setCharPic, 
  changeStatistics,
  changeName,
  changeFieldDiameter
} from '../../../store/actions/charActions';
import { toggleStatisticPanel } from '../../../store/actions/uiActions';
import { ContentContext } from '../../../Template';
import { IStore } from '../../../assets/interfaces/store';


export const CharCreatorForm: React.FC = () => {
  const { char } = useContext(ContentContext);
  const choosedChar: string = useSelector((state: IStore) => state.char.choosed);
  const charPicPath: string = useSelector((state: IStore) => state.char.charPic);
  const charName: string = useSelector((state: IStore) => state.char.name);
  const charLevel: string = useSelector((state: IStore) => state.char.statistics.level);
  const charType: string = useSelector((state: IStore) => state.char.type);
  const charId: string = useSelector((state: IStore) => state.char.id);
  const dispatch: Function = useDispatch();

  const charPicStyles = {
    backgroundImage: `url('${charPicPath}')`
  };

  return (
    <main className="charCreatorFormWrapper">
      <div className="charCreatorFormContentWrapper">
        <div role="presentation" className="charCreatorFormContentWrapper__decorations"></div>
        <header className="charCreatorHeader t-paragraph7Light">
          { char.form.title }
        </header>
        <div className="charCreatorForm">
          <div className="charCreatorForm__row">
            <div className="charFormPanel charFormPanel--left">
              <ActionInputField
                inputValue={charName}
                label={char.form.inputs.name}
                action={changeName}
              />
              <ActionInputField
                label={char.form.inputs.id}
                inputValue={charId}
                inputDisabled={true}
              />
              <ActionInputField
                label={char.form.inputs.lvl}
                inputValue={charLevel}
                action={changeStatistics}
                payloadId='level'
              />
              <ActionInputField
                label={char.form.inputs.health}
                inputValue={1000}
                action={changeStatistics}
                payloadId='health'
              />
              <ActionInputField
                label='Attack'
                inputValue={0}
                action={changeStatistics}
                payloadId='attack'
              />
              <ActionInputField
                label='Defence'
                inputValue={0}
                action={changeStatistics}
                payloadId='defence'
              />
              <CornerButton 
                name={char.form.addStatBtn}
                clickEvent={() => dispatch(toggleStatisticPanel(true))}
              />
            </div>
            <div className="charFormPanel">
              <div className="charFormPanel__graphice" style={charPicStyles}>

              </div>
              <LoadPicBtn 
                name={char.form.importPicBtn}
                clickEvent={setCharPic}
              />
              
              <ChooseButtons 
                types={char.form.char.types}
                action={changeChar}
                label={char.form.char.label}
              />
              
              { choosedChar === 'mob'? (
                  <ChooseButtons 
                    types={char.form.isAgressiveMob.types}
                    action={isAgressiveMob}
                    label={char.form.isAgressiveMob.title}
                    specialClass='chooseButtonsWrapper--smaller'
                  />
                ) : null
              }

              <ChooseButtons 
                types={char.form.charType.types}
                action={changeCharType}
                label={char.form.charType.label}
              />

              { charType === 'moving' ? (
                <ActionInputField
                  label={char.form.charType.movingField}
                  action={changeFieldDiameter}
                />
                ) : null
              }           
            </div>
          </div>
          { choosedChar === 'npc' ? (
              <Dialogs 
                type={char.form.dialogs.title}
                addBtnText={char.form.dialogs.addBtn}
              />
            ) : null
          }
          <Dialogs 
            type={char.form.monologs.title}
            addBtnText={char.form.monologs.addBtn}
          />
        </div>
      </div>
    </main>
  );
};