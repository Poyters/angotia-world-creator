import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

//Import components
import CharInputField from './CharInputField';
import CornerButton from '../CornerButton';
import ChooseButtons from './ChooseButtons';
import Dialogs from './dialogs/Dialogs';

//Import actions
import { changeCharType } from '../../../redux/actions/charActions';


const CreatorForm: React.FC = () => {
  const charId = Math.random();
  const charType = useSelector(state => state.char.type);

  useEffect(() => {
    console.log(charType);
  });

  return (
    <main className="charCreatorFormWrapper">
      <div className="charCreatorFormContentWrapper">
        <div role="presentation" className="charCreatorFormContentWrapper__decorations"></div>
        <header className="charCreatorHeader t-paragraph7Light">
          Character
        </header>
        <div className="charCreatorForm">
          <div className="charCreatorForm__baseInfo">
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
              name='add stat'
            />
          </div>
          <div className="charFormRightPanel">
            <div className="charFormRightPanel__graphice">

            </div>
            <CornerButton 
              name='import graphice'
            />
            
            <ChooseButtons 
              types={['npc', 'mob']}
              action={changeCharType}
              label={'Choose character'}
            />

            <ChooseButtons 
              types={['static', 'moving']}
              action={(): void => {}}
              label={'Choos char type'}
            />

            { charType === 'npc' ? (
               <Dialogs />
              ) : null
            }
           
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreatorForm;