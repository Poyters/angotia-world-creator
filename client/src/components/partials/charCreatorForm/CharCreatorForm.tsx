import React from 'react';


const CreatorForm: React.FC = () => {

  return (
    <main className="charCreatorFormWrapper">
      <div className="charCreatorFormContentWrapper">
        <div role="presentation" className="charCreatorFormContentWrapper__decorations"></div>
        <header className="charCreatorHeader t-paragraph1Normal">
          Character
        </header>
        <div className="charCreatorForm">
          <div className="charCreatorForm__baseInfo">
            base info here
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