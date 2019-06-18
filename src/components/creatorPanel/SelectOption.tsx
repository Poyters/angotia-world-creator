import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

//Import actions
import { setMapSelectType } from '../../redux/actions/mapActions';
import { setNotification } from '../../redux/actions/uiActions';


interface ISelectOption {
    selectTypeQuantity: number,
    setMapSelectType: Function,
    setNotification: Function
}


const SelectOption: React.FC<ISelectOption> = ({ selectTypeQuantity, setMapSelectType, setNotification }) => {
  const [selectType, setSelectType] = useState<number>(0);

  useEffect((): void => {
    switch(selectType) {
      case 0:
        setMapSelectType('none');
        setNotification('Select option is disable')
      break;
      case 1:
        setMapSelectType('square');
        setNotification('Select square type is enable')
      break;
      case 2: 
        setMapSelectType('field');
        setNotification('Select field type is enable')
      break;
      case 3:
        setMapSelectType('mouse');
        setNotification('Select mouse type is enable')
      break;
      default:
        throw new Error('invalid selectType');
    }
  });

  const changeSelectType = (): void => {
    if (selectType < selectTypeQuantity) setSelectType(selectType + 1);
    else setSelectType(0);
  }

  const selectOnOff: string = selectType !== 0 ? 'option--on' : 'option--off'; //It determines icon color

  return (
    <div role="button" className={`option selectOption ${selectOnOff}`} onClick={changeSelectType}>
        <span className="option__viewType">{selectType}</span>
    </div>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    setMapSelectType: selectType => {dispatch(setMapSelectType(selectType))},
    setNotification: actionNote => {dispatch(setNotification(actionNote))}
  }
}

export default connect(null, mapDispatchToProps)(SelectOption);