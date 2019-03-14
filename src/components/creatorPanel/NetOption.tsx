import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

//Import actions
import { setMapNets } from '../../redux/actions/mapActions';


interface INetOption {
  viewTypeQuantity: number,
  setMapNets: Function
}


const NetOption: React.SFC<INetOption> = ({ viewTypeQuantity, setMapNets }) => {
  const [optionViewType, setOptionViewType] = useState(0);

  const changeViewType = () => {
    if (optionViewType === viewTypeQuantity) setOptionViewType(0);
    else setOptionViewType(optionViewType + 1);
  }

  useEffect(() => {
    let values = {
      field: true,
      square: true
    }

    switch(optionViewType) {
      case 0: //all nets
        values = {
          field: true,
          square: true
        }
      break;
      case 1: //field net
        values = {
          field: true,
          square: false
        }
      break;
      case 2: //square net
        values = {
          field: false,
          square: true
        }
      break;
      case 3: //no nets
        values = {
          field: false,
          square: false
        }
      break;
    }

    setMapNets(values);
  })

  const netOnOff = optionViewType === 3 ? 'netGraphic--off' : 'netGraphic--on'; //It determines icon color

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

const mapDispatchToProps = dispatch => {
  return {
    setMapNets: value => {dispatch(setMapNets(value))}
  }
}

export default connect(null, mapDispatchToProps)(NetOption);