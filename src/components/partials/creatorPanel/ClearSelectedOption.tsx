import React from 'react';
import { useDispatch } from 'react-redux';

//Import actions
import { changeMapSelectMatrix } from '../../../redux/actions/mapActions';
import { setNotification } from '../../../redux/actions/uiActions';

//Import scripts 
import { generateEmptyMapMatrix, emptyMapCanvasCtx } from '../../../assets/scripts/map';


const ClearSelectedOption: React.FC = () => {

  const clearSelected = ():void => {
    const newMatrix: Array<any> = generateEmptyMapMatrix();
    emptyMapCanvasCtx("mapSelectCanvas"); //clear select canvas
		
    useDispatch(changeMapSelectMatrix(newMatrix));
    useDispatch(setNotification("Selected fields has been cleared"));
	}

  return (
    <div role="button" className="clearSelectedOption" onClick={clearSelected}>
      <div className="clearSelectedOption__ereaser"> </div>
    </div>
  );
}


export default ClearSelectedOption;