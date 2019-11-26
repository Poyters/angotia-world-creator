import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

//Import components
import CharInputField from './CharInputField';
import CornerButton from '../CornerButton';
import ChooseButtons from './ChooseButtons';
import Dialogs from './dialogs/Dialogs';

//Import actions
import { changeCharType, changeChar } from '../../../redux/actions/charActions';


const CreatorForm: React.FC = () => {
  const charId: number = Math.random();
  const choosedChar: string = useSelector(state => state.char.choosed);
  const charType: string = useSelector(state => state.char.type);

  useEffect(() => {
    console.log(choosedChar, charType);
  });

  return (
    <main className="charCreatorFormWrapper">
      <div className="charCreatorFormContentWrapper">
        <div role="presentation" className="charCreatorFormContentWrapper__decorations"></div>
        <header className="charCreatorHeader t-paragraph7Light">
          Character
        </header>
        <div className="charCreatorForm">
          <div className="charCreatorForm__row">
            <div className="charFormPanel charFormPanel--left">
              <CharInputField
                label='name'
              />
              <CharInputField
                label='ID - auto generated'
                inputValue={charId}
                inputDisabled={true}
              />
              <CharInputField
                label='Level'
              />
              <CharInputField
                label='Health'
              />
              <CharInputField
                label='Strength'
              />
              <CharInputField
                label='Dexterity'
              />
              <CornerButton 
                name='add new stat'
              />
            </div>
            <div className="charFormPanel">
              <div className="charFormPanel__graphice">

              </div>
              <CornerButton 
                name='import graphice'
              />
              
              <ChooseButtons 
                types={['npc', 'mob']}
                action={changeChar}
                label={'Choose character'}
              />

              <ChooseButtons 
                types={['static', 'moving']}
                action={changeCharType}
                label={'Choose char type'}
              />

              { charType === 'moving' ? (
                <CharInputField
                  label='Field diameter'
                />
                ) : null
              }           
            </div>
          </div>
          { choosedChar === 'npc' ? (
              <Dialogs 
                type='dialogs'
                addBtnText='add dialog'
              />
            ) : null
          }
          <Dialogs 
            type='monologs'
            addBtnText='add monolog'
          />
        </div>
      </div>
    </main>
  );
};

export default CreatorForm;