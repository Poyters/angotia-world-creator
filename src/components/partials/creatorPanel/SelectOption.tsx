import React, { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { setMapSelectType } from '../../../store/actions/uiActions';
import { addNotification } from '../../../scripts/utils/notifications';
import { ContentContext } from '../../../Template';
import { SelectType } from '../../../models/selectType.model';


export const SelectOption = (props: { 
	selectTypeQuantity: number
}) => {
  const { creator, notifications } = useContext(ContentContext);
  const [selectType, setSelectType] = useState<number>(0);
  const dispatch: Function = useDispatch();

  useEffect((): void => {
    switch(selectType) {
      case 0:
        dispatch(setMapSelectType(SelectType.none));
        addNotification(notifications?.options?.select?.option);
      break;
      case 1:
        dispatch(setMapSelectType(SelectType.square));
        addNotification(notifications?.options?.select?.square);
      break;
      case 2: 
      dispatch(setMapSelectType(SelectType.field));
        addNotification(notifications?.options?.select?.field);
      break;
      case 3:
        dispatch(setMapSelectType(SelectType.mouse));
        addNotification(notifications?.options?.select?.mouse);
      break;
      default:
        console.warn('Invalid selectType');
    }
  }, [selectType, notifications, dispatch]);

  const changeSelectType = (): void => {
    if (selectType < props.selectTypeQuantity) setSelectType(selectType + 1);
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