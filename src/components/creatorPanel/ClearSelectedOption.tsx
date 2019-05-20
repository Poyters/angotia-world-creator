import React from 'react';
import { connect } from 'react-redux';

//Import actions
import { setMapSelectType } from '../../redux/actions/mapActions';


interface IClearSelectedOption {
	setMapSelectType: Function
}

const ClearSelectedOption: React.SFC<IClearSelectedOption> = ({ setMapSelectType, }) => {

  const clearSelected = () => {
		console.log('clear slected');
		setMapSelectType('none'); //clear selectType
	}

  return (
    <div role="button" className='option clearSelectedOption' onClick={clearSelected}>
      
    </div>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    setMapSelectType: selectType => {dispatch(setMapSelectType(selectType))}
  }
}

export default connect(null, mapDispatchToProps)(ClearSelectedOption);