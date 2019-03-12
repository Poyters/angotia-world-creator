import React, { useState } from 'react';


interface INetOption {
  viewTypeQuantity: number
}

const NetOption: React.SFC<INetOption> = ({ viewTypeQuantity }) => {
  const [optionViewType, setOptionViewType] = useState(0);

  const changeViewType = () => {
    if (optionViewType === viewTypeQuantity) setOptionViewType(0);
    else setOptionViewType(optionViewType + 1);
  }

  return (
    <div className="option option--net" onClick={changeViewType}>
      <span className="option__viewType">{optionViewType}</span>
      <div className="netGraphic">
        <div className="netGraphic__square"></div>
        <div className="netGraphic__square"></div>
        <div className="netGraphic__square"></div>
        <div className="netGraphic__square"></div>
      </div>
    </div>
  );
}

export default NetOption;