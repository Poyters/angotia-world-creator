import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

//Import scripts
import { drawMapNet } from '../../assets/scripts/drawNetMap';
import { colorBasedOnMatrix } from '../../assets/scripts/selectFields';

//Import actions
import { setMapNets } from '../../redux/actions/mapActions';

//Import configs
import creatorConfig from '../../assets/configs/creatorConfig.json';


interface INetOption {
  viewTypeQuantity: number,
  mapSize: {
    x: number,
    y: number
  },
  setMapNets: Function
}


const NetOption: React.SFC<INetOption> = ({ viewTypeQuantity, mapSize, setMapNets }) => {
  const [optionViewType, setOptionViewType] = useState<number>(0);

  const changeViewType = (): void => {
    if (optionViewType === viewTypeQuantity) setOptionViewType(0);
    else setOptionViewType(optionViewType + 1);
  }

  useEffect((): void => {
    const fieldSize: number = creatorConfig.map.fieldSize;
    const canvas: any = document.getElementById("mapCanvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, mapSize.x*fieldSize, mapSize.y*fieldSize);


    switch(optionViewType) {
      case 0: //all nets
        drawMapNet(ctx, 0);
        drawMapNet(ctx, 1);
        setMapNets({field: true, square: true})
      break;
      case 1: //field net
        drawMapNet(ctx, 0);
        setMapNets({field: true, square: false})
      break;
      case 2: //square net;
        drawMapNet(ctx, 1);
        setMapNets({field: false, square: true})
      break;
      case 3:
        setMapNets({field: false, square: false})
        return;
    }

    colorBasedOnMatrix();
  })

  const netOnOff: string = optionViewType === 3 ? 'option--off' : 'option--on'; //It determines icon color

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

const mapDispatchToProps = dispatch => {
  return {
		setMapNets: netStatus => {dispatch(setMapNets(netStatus))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NetOption);