import React from 'react';

//Import scripts 
import { clearCanvas } from '../../../assets/scripts/clearCanvas';

//Import actions
import { changeMapSelectMatrix } from '../../../redux/actions/mapActions';


const ClearSelectedOption: React.FC = () => {

  const clearSelected = (): void => {
    clearCanvas("mapSelectCanvas", changeMapSelectMatrix);
	};

  return (
    <div 
      role="button" 
      className="clearSelectedOption" 
      onClick={clearSelected} 
      data-title="clear selected fields"
    >
      <div className="clearSelectedOption__ereaser"> </div>
    </div>
  );
};


export default ClearSelectedOption;