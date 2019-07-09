import React from 'react';

//Import scripts 
import { clearCanvas } from '../../../assets/scripts/clearCanvas';


const ClearSelectedOption: React.FC = () => {

  const clearSelected = ():void => {
    clearCanvas("mapSelectCanvas");
	}

  return (
    <div role="button" className="clearSelectedOption" onClick={clearSelected}>
      <div className="clearSelectedOption__ereaser"> </div>
    </div>
  );
}


export default ClearSelectedOption;