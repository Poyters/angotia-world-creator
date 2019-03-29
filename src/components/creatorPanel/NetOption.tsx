import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

//Import scripts
import { drawMapNet } from '../../assets/scripts/drawNetMap';

//Import configs
import creatorConfig from '../../assets/configs/creatorConfig.json';


interface INetOption {
  viewTypeQuantity: number,
  mapSize: {
    x: number,
    y: number
  }
}


const NetOption: React.SFC<INetOption> = ({ viewTypeQuantity, mapSize }) => {
  const [optionViewType, setOptionViewType] = useState(0);

  const changeViewType = () => {
    if (optionViewType === viewTypeQuantity) setOptionViewType(0);
    else setOptionViewType(optionViewType + 1);
  }

  useEffect(() => {
    const fieldSize: number = creatorConfig.map.fieldSize;
    const canvas: any = document.getElementById("mapCanvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, mapSize.x*fieldSize, mapSize.y*fieldSize);

    switch(optionViewType) {
      case 0: //all nets
        drawMapNet(ctx, 0);
        drawMapNet(ctx, 1);
      break;
      case 1: //field net
        drawMapNet(ctx, 0);
      break;
      case 2: //square net;
        drawMapNet(ctx, 1);
      break;
      case 3: //no nets
        return;
      break;
    }
  })

  const netOnOff = optionViewType === 3 ? 'option--off' : 'option--on'; //It determines icon color

  return (
    <div className="option option--net" onClick={changeViewType}>
      <span className="option__viewType">{optionViewType}</span>
      <div className={`netGraphic ${netOnOff}`}>
        <div className="netGraphic__square"></div>
        <div className="netGraphic__square"></div>
        <div className="netGraphic__square"></div>
        <div className="netGraphic__square"></div>
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    mapSize: state.map.size
  }
}


export default connect(mapStateToProps)(NetOption);