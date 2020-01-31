import React, { useContext } from 'react';

//Import contexts
import { ContentContext } from '../../../Template';


const ExportOption: React.FC = () => {
  const { creator } = useContext(ContentContext);

  return (
    <div 
      role="button" 
      className="option option--textOption option--smallerMargin" 
      data-title={creator.panel.options.export.dataTitle}
    >
      <span>
        {creator.panel.options.export.content}
      </span>
    </div>
  );
};


export default ExportOption;