import React from 'react';
import { clearCanvas } from '../../../scripts/canvas/clearCanvas';
import { changeMapSelectMatrix } from '../../../store/actions/uiActions';
import { addNotification } from '../../../scripts/utils/notifications';
import { Canvas } from '../../../models/canvas.model';
import { useTranslation } from 'react-i18next';


export const ClearSelectedOption = () => {
  const { t } = useTranslation(['notifications']);

  const clearSelected = () => {
    clearCanvas(Canvas.select, changeMapSelectMatrix);

    addNotification(t('notifications:notes.select.clear'));
	};

  return (
    <div 
      role="button" 
      className="clearSelectedOption" 
      onClick={clearSelected}
    >
      <div className="clearSelectedOption__ereaser"> </div>
    </div>
  );
};