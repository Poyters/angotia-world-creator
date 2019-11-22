import React from 'react';

//Import components
import CharInputField from './CharInputField';


const CreatorForm: React.FC = () => {
  const charId = Math.random();

  return (
    <main className="charCreatorFormWrapper">
      <div className="charCreatorFormContentWrapper">
        <div role="presentation" className="charCreatorFormContentWrapper__decorations"></div>
        <header className="charCreatorHeader t-paragraph1Normal">
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
          </div>
          <div className="charCreatorForm__graphice">
            graphice
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreatorForm;