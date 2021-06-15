import React from 'react';
import { clearCanvas } from '../../../scripts/canvas/clearCanvas';
import { changeMapSelectMatrix } from '../../../store/actions/uiActions';
import { addNotification } from '../../../scripts/utils/notifications';
import { Canvas } from '../../../models/canvas.model';


export const ClearSelectedOption = () => {
  const clearSelected = (): void => {
    clearCanvas(Canvas.select, changeMapSelectMatrix);

    addNotification('props.note');
	};

  return (
    <div 
      role="button" 
      className="clearSelectedOption" 
      onClick={clearSelected} 
      data-title={'creator?.panel?.options?.clearSelected?.dataTitle'}
    >
      <div className="clearSelectedOption__ereaser"> </div>
    </div>
  );
};