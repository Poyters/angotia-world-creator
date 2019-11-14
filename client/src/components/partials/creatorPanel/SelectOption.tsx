import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

//Import actions
import { setMapSelectType } from '../../../redux/actions/uiActions';

//Import scripts
import { setActionNote } from '../../../assets/scripts/notifications';


interface ISelectOption {
  selectTypeQuantity: number
}


const SelectOption: React.FC<ISelectOption> = ({ selectTypeQuantity }) => {
  const [selectType, setSelectType] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect((): void => {
    switch(selectType) {
      case 0:
        dispatch(setMapSelectType('none'));
        setActionNote('Select option is disable');
      break;
      case 1:
        dispatch(setMapSelectType('square'));
        setActionNote('Select square type is enable');
      break;
      case 2: 
      dispatch(setMapSelectType('field'));
        setActionNote('Select field type is enable');
      break;
      case 3:
        dispatch(setMapSelectType('mouse'));
        setActionNote('Select mouse type is enable');
      break;
      default:
        throw new Error('invalid selectType');
    }
  });

  const changeSelectType = (): void => {
    if (selectType < selectTypeQuantity) setSelectType(selectType + 1);
    else setSelectType(0);
  };

  const selectOnOff: string = selectType !== 0 ? 
    'option--on' : 'option--off'; //It determines icon color

  return (
    <div role="button" className={`option selectOption ${selectOnOff}`} onClick={changeSelectType}>
        <span className="option__viewType">{selectType}</span>
        <div className="titleContainer" data-title="turn on/off full screen mode"></div>
    </div>
  );
};


export default SelectOption;