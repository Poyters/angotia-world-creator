import React from 'react';
import { useDispatch } from 'react-redux';
import { setMapBg } from '../../../store/actions/mapActions';
import { addNotification } from '../../../scripts/utils/notifications';


export const DeleteBgOption: React.FC = () => {
  const dispatch = useDispatch();

  const deleteBg = (): void => {
    dispatch(setMapBg(''));
    addNotification('notifications?.options?.deleteBg?.delete');
  };

  return (
    <div className="option option--deleteBg" onClick={deleteBg}>
      <div 
        className="g-exitBtn" 
        data-tile={'creator?.panel?.options?.deleteBg?.dataTitle'}
      > </div>
    </div>
  );
};