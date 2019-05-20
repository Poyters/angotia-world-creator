import React from 'react';
import { connect } from 'react-redux';

//Import actions
import { setMapSelectType, changeMapSelectMatrix } from '../../redux/actions/mapActions';

//Import scripts 
import { generateEmptyMapMatrix } from '../../assets/scripts/map';


interface IClearSelectedOption {
	changeMapSelectMatrix: Function
}


const ClearSelectedOption: React.SFC<IClearSelectedOption> = ({ changeMapSelectMatrix }) => {

  const clearSelected = () => {
		const newMatrix = generateEmptyMapMatrix();
		
		changeMapSelectMatrix(newMatrix);
		//refreszowac cała mape tutaj
	}

  return (
    <div role="button" className='option clearSelectedOption' onClick={clearSelected}>
      
    </div>
  );
}


const mapDispatchToProps = dispatch => {
  return {
		changeMapSelectMatrix: newMatrix => {dispatch(changeMapSelectMatrix(newMatrix))}
  }
}

export default connect(null, mapDispatchToProps)(ClearSelectedOption);