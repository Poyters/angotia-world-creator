import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { setMapBg } from '../../../store/actions/mapActions';
import { setActionNote } from '../../../assets/scripts/notifications';
import { ContentContext } from '../../../Template';


export const DeleteBgOption: React.FC = () => {
  const { creator, notifications } = useContext(ContentContext);
  const dispatch = useDispatch();

  const deleteBg = (): void => {
    dispatch(setMapBg(''));
    setActionNote(notifications?.options?.deleteBg?.delete);
  };

  return (
    <div className="option option--deleteBg" onClick={deleteBg}>
      <div 
        className="g-exitBtn" 
        data-tile={creator?.panel?.options?.deleteBg?.dataTitle}
      > </div>
    </div>
  );
};