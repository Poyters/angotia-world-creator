import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

//Import components
import CharInputField from './CharInputField';
import CornerButton from '../CornerButton';
import ChooseButtons from './ChooseButtons';
import Dialogs from './dialogs/Dialogs';

//Import actions
import { changeCharType, changeChar } from '../../../redux/actions/charActions';

//Import contexts
import { ContentContext } from '../../../Template';


const CreatorForm: React.FC = () => {
  const charId: number = Math.random();
  const choosedChar: string = useSelector(state => state.char.choosed);
  const charType: string = useSelector(state => state.char.type);

  useEffect(() => {
    console.log(charType)
  })

  return (
    <ContentContext.Consumer>
			{({ char }) => (
        <main className="charCreatorFormWrapper">
          <div className="charCreatorFormContentWrapper">
            <div role="presentation" className="charCreatorFormContentWrapper__decorations"></div>
            <header className="charCreatorHeader t-paragraph7Light">
              { char.form.title }
            </header>
            <div className="charCreatorForm">
              <div className="charCreatorForm__row">
                <div className="charFormPanel charFormPanel--left">
                  <CharInputField
                    label={char.form.inputs.name}
                  />
                  <CharInputField
                    label={char.form.inputs.id}
                    inputValue={charId}
                    inputDisabled={true}
                  />
                  <CharInputField
                    label={char.form.inputs.lvl}
                  />
                  <CharInputField
                    label={char.form.inputs.health}
                  />
                  <CharInputField
                    label={char.form.inputs.strength}
                  />
                  <CharInputField
                    label={char.form.inputs.dexterity}
                  />
                  <CornerButton 
                    name={char.form.addStatBtn}
                  />
                </div>
                <div className="charFormPanel">
                  <div className="charFormPanel__graphice">

                  </div>
                  <CornerButton 
                    name={char.form.importPicBtn}
                  />
                  
                  <ChooseButtons 
                    types={char.form.char.types}
                    action={changeChar}
                    label={char.form.char.types}
                  />

                  <ChooseButtons 
                    types={char.form.charType.types}
                    action={changeCharType}
                    label={char.form.charType.types}
                  />

                  { charType === char.form.charType.movingId ? (
                    <CharInputField
                      label={char.form.charType.movingField}
                    />
                  ) : null
                  }           
                </div>
              </div>
              { choosedChar === char.form.char.npcId ? (
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
      )}
    </ContentContext.Consumer>
  );
};

export default CreatorForm;