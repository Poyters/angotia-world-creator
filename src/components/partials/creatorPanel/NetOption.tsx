import React, { useState, useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { drawMapNet } from '../../../scripts/draw/drawMapNet';
import { clearCanvasContex } from '../../../scripts/canvas/clearCanvasContex';
import { addNotification } from '../../../scripts/utils/notifications';
import { setMapNets } from '../../../store/actions/uiActions';
import { ContentContext } from '../../../Template';
import { Canvas } from '../../../models/canvas.model';


export const NetOption = (props: { 
	viewTypeQuantity: number
}) => {
  const { creator, notifications } = useContext(ContentContext);
  const [optionViewType, setOptionViewType] = useState<number>(0);
  const dispatch = useDispatch();

  const changeViewType = (): void => {
    if (optionViewType === props.viewTypeQuantity) setOptionViewType(0);
    else setOptionViewType(optionViewType + 1);
  };

  useEffect((): void => {
    const ctx: any = clearCanvasContex(Canvas.base);
    if (!ctx) return;

    switch(optionViewType) {
      case 0: // all nets
        drawMapNet(ctx, 1);
        drawMapNet(ctx, 0);
        dispatch(setMapNets({field: true, square: true}));
        addNotification(notifications?.options?.net?.squareField);
      break;
      case 1: // field net
        drawMapNet(ctx, 0);
        dispatch(setMapNets({field: true, square: false}));
        addNotification(notifications?.options?.net?.field);
      break;
      case 2: // square net;
        drawMapNet(ctx, 1);
        dispatch(setMapNets({field: false, square: true}));
        addNotification(notifications?.options?.net?.square);
      break;
      case 3: // a lack of nets
        dispatch(setMapNets({field: false, square: false}));
        addNotification(notifications?.options?.net?.disabled);
        return;
    }
  }, [dispatch, optionViewType, notifications]);

  const netOnOff: string = optionViewType === 3 ? 
    'option--off' : 'option--on'; //It determines icon color

  return (
    <div 
      className="option option--net" 
      onClick={changeViewType} 
      data-title={creator?.panel?.options?.net?.dataTitle}
    >
      <span className="option__viewType">{optionViewType}</span>
      <div className={`netGraphic ${netOnOff}`}>
        <div className="netGraphic__square"></div>
        <div className="netGraphic__square"></div>
        <div className="netGraphic__square"></div>
        <div className="netGraphic__square"></div>
      </div>
    </div>
  );
};