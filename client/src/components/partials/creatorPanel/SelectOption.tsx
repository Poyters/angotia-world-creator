import React, { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { setMapSelectType } from '../../../store/actions/uiActions';
import { addNotification } from '../../../assets/scripts/notifications';
import { ContentContext } from '../../../Template';


interface ISelectOption {
  selectTypeQuantity: number
}

export const SelectOption: React.FC<ISelectOption> = ({ 
  selectTypeQuantity
}) => {
  const { creator, notifications } = useContext(ContentContext);
  const [selectType, setSelectType] = useState<number>(0);
  const dispatch: Function = useDispatch();

  useEffect((): void => {
    switch(selectType) {
      case 0:
        dispatch(setMapSelectType('none'));
        addNotification(notifications?.options?.select?.option);
      break;
      case 1:
        dispatch(setMapSelectType('square'));
        addNotification(notifications?.options?.select?.square);
      break;
      case 2: 
      dispatch(setMapSelectType('field'));
        addNotification(notifications?.options?.select?.field);
      break;
      case 3:
        dispatch(setMapSelectType('mouse'));
        addNotification(notifications?.options?.select?.mouse);
      break;
      default:
        console.warn('Invalid selectType');
    }
  });

  const changeSelectType = (): void => {
    if (selectType < selectTypeQuantity) setSelectType(selectType + 1);
    else setSelectType(0);
  };

  const selectOnOff: string = selectType !== 0 ? 
    'option--on' : 'option--off'; //It determines icon color

  return (
    <div 
      role="button" 
      className={`option selectOption ${selectOnOff}`} 
      onClick={changeSelectType}
    >
      <span 
        className="option__viewType"
      > 
        { selectType }            
      </span>
      <div 
        className="titleContainer" 
        data-title={creator?.panel?.options?.select?.dataTitle}
      > </div>
    </div>
  );
};