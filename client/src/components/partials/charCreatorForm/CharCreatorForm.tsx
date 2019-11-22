import React from 'react';

//Import components
import CharInputField from './CharInputField';


const CreatorForm: React.FC = () => {
  const charId = Math.random();

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
              label='Intelligence'
            />
            <CharInputField
              label='Dexterity'
            />

            Add more stats
          </div>
          <div className="charCreatorFormGraphice">
            <div className="charCreatorFormGraphice__content">

            </div>
            <div className="charImportPicBtn t-paragraph5Normal">
              <div className="charImportPicBtn__content"> 
                <span> import graphice </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreatorForm;