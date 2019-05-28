import React from 'react';
import { connect } from 'react-redux';

//Import actions
import { changeMapSelectMatrix } from '../../redux/actions/mapActions';

//Import scripts 
import { generateEmptyMapMatrix, emptyMapCanvasCtx } from '../../assets/scripts/map';
import { drawMapNet } from '../../assets/scripts/drawNetMap';
import { colorBasedOnMatrix } from '../../assets/scripts/selectFields';


interface IClearSelectedOption {
  mapNetStatus: {
    field: boolean,
    square: boolean
  },
  changeMapSelectMatrix: Function,
  mapSize: {
    x: number,
    y: number
  }
}


const ClearSelectedOption: React.SFC<IClearSelectedOption> = ({ mapNetStatus, changeMapSelectMatrix }) => {

  const clearSelected = () => {
    const newMatrix = generateEmptyMapMatrix();
    const ctx = emptyMapCanvasCtx();
		
    changeMapSelectMatrix(newMatrix);

    const netStatus = ():number => {
      if (mapNetStatus.square && mapNetStatus.field) return 0;
      else if (mapNetStatus.field && !mapNetStatus.square) return 1;
      else if (!mapNetStatus.field && mapNetStatus.square) return 2;
      else return 3;
    }

    switch(netStatus()) {
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
      case 3:
        return;
    }

    colorBasedOnMatrix();
	}

  return (
    <div role="button" className="clearSelectedOption" onClick={clearSelected}>
      <div className="clearSelectedOption__ereaser"> </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    mapNetStatus: state.map.net,
  }
}


const mapDispatchToProps = dispatch => {
  return {
		changeMapSelectMatrix: newMatrix => {dispatch(changeMapSelectMatrix(newMatrix))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClearSelectedOption);