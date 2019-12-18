import React from 'react';

//Import contexts
import { ContentContext } from '../../../Template';


const ExportOption: React.FC = () => {

  return (
    <ContentContext.Consumer>
			{({ creator }) => (
        <div 
          role="button" 
          className="option option--textOption option--smallerMargin" 
          data-title={creator.panel.options.export.dataTitle}
        >
          <span>
            {creator.panel.options.export.content}
          </span>
        </div>
      )}
    </ContentContext.Consumer>
  );
};


export default ExportOption;