import React, { useContext } from 'react';
import { clearCanvas } from '../../../scripts/clearCanvas';
import { changeMapSelectMatrix } from '../../../store/actions/uiActions';
import { ContentContext } from '../../../Template';
import { addNotification } from '../../../scripts/utils/notifications';


interface IClearSelectedOption {
  note?: string
}

export const ClearSelectedOption: React.FC<IClearSelectedOption> = ({ 
  note 
}) => {
  const { creator } = useContext(ContentContext);

  const clearSelected = (): void => {
    clearCanvas("MAP_SELECT_CANVAS", changeMapSelectMatrix);

    if (note) addNotification(note);
	};

  return (
    <div 
      role="button" 
      className="clearSelectedOption" 
      onClick={clearSelected} 
      data-title={creator?.panel?.options?.clearSelected?.dataTitle}
    >
      <div className="clearSelectedOption__ereaser"> </div>
    </div>
  );
};