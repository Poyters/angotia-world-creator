import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

//Import actions
import { setMapSelectType } from '../../redux/actions/mapActions';


interface ISelectOption {
    selectTypeQuantity: number,
    setMapSelectType: Function
}


const SelectOption: React.SFC<ISelectOption> = ({ selectTypeQuantity, setMapSelectType }) => {
  const [ selectType, setSelectType ] = useState(0);

  useEffect(() => {
    switch(selectType) {
      case 0:
        setMapSelectType('none');
      break;
      case 1:
        setMapSelectType('square');
      break;
      case 2: 
        setMapSelectType('field');
      break;
      default:
        throw new Error('invalid selectType');
    }
  });

  const changeSelectType = () => {
    if (selectType < selectTypeQuantity) setSelectType(selectType + 1);
    else setSelectType(0);
  }

  const selectOnOff = selectType !== 0 ? 'option--on' : 'option--off'; //It determines icon color

  return (
    <div role="button" className={`option selectOption ${selectOnOff}`} onClick={changeSelectType}>
        <span className="option__viewType">{selectType}</span>
    </div>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    setMapSelectType: selectType => {dispatch(setMapSelectType(selectType))}
  }
}

export default connect(null, mapDispatchToProps)(SelectOption);