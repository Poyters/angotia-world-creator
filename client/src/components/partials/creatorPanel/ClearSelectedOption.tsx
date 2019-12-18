import React from 'react';

//Import scripts 
import { clearCanvas } from '../../../assets/scripts/clearCanvas';

//Import actions
import { changeMapSelectMatrix } from '../../../redux/actions/uiActions';

//Import contexts
import { ContentContext } from '../../../Template';


const ClearSelectedOption: React.FC = () => {

  const clearSelected = (): void => {
    clearCanvas("mapSelectCanvas", changeMapSelectMatrix);
	};

  return (
    <ContentContext.Consumer>
			{({ creator }) => (
        <div 
          role="button" 
          className="clearSelectedOption" 
          onClick={clearSelected} 
          data-title={creator.panel.options.clearSelected.dataTitle}
        >
          <div className="clearSelectedOption__ereaser"> </div>
        </div>
      )}
    </ContentContext.Consumer>
  );
};


export default ClearSelectedOption;