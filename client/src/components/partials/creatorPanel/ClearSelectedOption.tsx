import React, { useContext } from 'react';
import { clearCanvas } from '../../../assets/scripts/clearCanvas';
import { changeMapSelectMatrix } from '../../../redux/actions/uiActions';
import { ContentContext } from '../../../Template';


export const ClearSelectedOption: React.FC = () => {
  const { creator } = useContext(ContentContext);

  const clearSelected = (): void => {
    clearCanvas("mapSelectCanvas", changeMapSelectMatrix);
	};

  return (
    <div 
      role="button" 
      className="clearSelectedOption" 
      onClick={clearSelected} 
      data-title={creator.panel.options.clearSelected.dataTitle}
    >
      <div className="clearSelectedOption__ereaser"> </div>
    </div>
  );
};