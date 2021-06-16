import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMapSelectType } from '../../../store/actions/uiActions';
import { addNotification } from '../../../scripts/utils/notifications';
import { SelectType } from '../../../models/selectType.model';
import { useTranslation } from 'react-i18next';


export const SelectOption = (props: { 
	selectTypeQuantity: number
}) => {
  const { t } = useTranslation(['notifications']);
  const [selectType, setSelectType] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    switch(selectType) {
      case 0:
        dispatch(setMapSelectType(SelectType.none));
        addNotification(t('notifications:notes.select.none'));
      break;
      case 1:
        dispatch(setMapSelectType(SelectType.square));
        addNotification(t('notifications:notes.select.square'));
      break;
      case 2: 
        dispatch(setMapSelectType(SelectType.field));
        addNotification(t('notifications:notes.select.field'));
      break;
      case 3:
        dispatch(setMapSelectType(SelectType.mouse));
        addNotification(t('notifications:notes.select.mouse'));
      break;
      default:
        console.warn('Invalid selectType');
    }
  }, [selectType, dispatch]);

  const changeSelectType = (): void => {
    if (selectType < props.selectTypeQuantity) setSelectType(selectType + 1);
    else setSelectType(0);
  };

  const selectOnOff: string = selectType !== 0 ? 
    'option--on' : 'option--off'; // It determines icon color

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
        data-title={'creator?.panel?.options?.select?.dataTitle'}
      > </div>
    </div>
  );
};