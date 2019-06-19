import React from 'react';
import { connect } from 'react-redux';

//Import actions
import { changeMapSelectMatrix } from '../../../redux/actions/mapActions';
import { setNotification } from '../../../redux/actions/uiActions';

//Import scripts 
import { generateEmptyMapMatrix, emptyMapCanvasCtx } from '../../../assets/scripts/map';

//Import interfaces
import { IMapSize, IMapNetStatus } from '../../../assets/interfaces/mapInterfaces';


interface IClearSelectedOption {
  mapNetStatus: IMapNetStatus,
  changeMapSelectMatrix: Function,
  setNotification: Function,
  mapSize: IMapSize
}


const ClearSelectedOption: React.FC<IClearSelectedOption> = ({ changeMapSelectMatrix, setNotification }) => {

  const clearSelected = ():void => {
    const newMatrix: Array<any> = generateEmptyMapMatrix();
    emptyMapCanvasCtx("mapSelectCanvas"); //clear select canvas
		
    changeMapSelectMatrix(newMatrix);
    setNotification("Selected fields has been cleared");
	}

  return (
    <div role="button" className="clearSelectedOption" onClick={clearSelected}>
      <div className="clearSelectedOption__ereaser"> </div>
    </div>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    changeMapSelectMatrix: newMatrix => {dispatch(changeMapSelectMatrix(newMatrix))},
    setNotification: actionNote => {dispatch(setNotification(actionNote))}
  }
}

export default connect(null, mapDispatchToProps)(ClearSelectedOption);