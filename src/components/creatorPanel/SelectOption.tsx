import React, { useState } from 'react';


interface ISelectOption {
    selectTypeQuantity: number
}


const SelectOption: React.SFC<ISelectOption> = ({ selectTypeQuantity }) => {
  const [ selectType, setSelectType ] = useState(0);

  const changeSelectType = () => {
    if (selectType < selectTypeQuantity) setSelectType(selectType + 1);
    else setSelectType(0);
  }

  const selectOnOff = selectType !== 0 ? 'option--on' : 'option--off'; //It determines icon color

  return (
    <div role="button" className={`option selectOption ${selectOnOff}`} onClick={changeSelectType}>
        <span className="option__viewType">{selectType}</span>
    </div>
  );
}


export default SelectOption;