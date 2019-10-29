import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

//Import scripts
import { drawMapNet } from '../../../assets/scripts/drawNetMap';
import { emptyMapCanvasCtx } from '../../../assets/scripts/map';
import { setActionNote } from '../../../assets/scripts/notifications';

//Import actions
import { setMapNets } from '../../../redux/actions/mapActions';


interface INetOption {
  viewTypeQuantity: number
}


const NetOption: React.FC<INetOption> = ({ viewTypeQuantity }) => {
  const [optionViewType, setOptionViewType] = useState<number>(0);
  const dispatch = useDispatch();

  const changeViewType = (): void => {
    if (optionViewType === viewTypeQuantity) setOptionViewType(0);
    else setOptionViewType(optionViewType + 1);
  };

  useEffect((): void => {
    const ctx: any = emptyMapCanvasCtx("mapCanvas");
    if (!ctx) return;

    switch(optionViewType) {
      case 0: //all nets
        drawMapNet(ctx, 1);
        drawMapNet(ctx, 0);
        dispatch(setMapNets({field: true, square: true}));
        setActionNote("Square and field nets are visible now");
      break;
      case 1: //field net
        drawMapNet(ctx, 0);
        dispatch(setMapNets({field: true, square: false}));
        setActionNote("Only field nets are visible");
      break;
      case 2: //square net;
        drawMapNet(ctx, 1);
        dispatch(setMapNets({field: false, square: true}));
        setActionNote("Only square nets are visible");
      break;
      case 3:
        dispatch(setMapNets({field: false, square: false}));
        setActionNote("Disable all nets");
        return;
    }
  });

  const netOnOff: string = optionViewType === 3 ? 'option--off' : 'option--on'; //It determines icon color

  return (
    <div className="option option--net" onClick={changeViewType} data-title="click to change nets mode">
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


export default NetOption;