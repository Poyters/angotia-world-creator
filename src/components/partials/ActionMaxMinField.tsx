import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IActionMaxMinField } from "../../interfaces/form.interface";

export const ActionMaxMinField: React.FC<IActionMaxMinField> = ({
  label,
  inputType = "text",
  minValue = 0,
  maxValue = 99,
  action
}) => {
  const [currMin, setCurrMin] = useState<string>(minValue.toString());
  const [currMax, setCurrMax] = useState<string>(maxValue.toString());
  const dispatch = useDispatch();

  const actionHandler = () => {
    if (!action) return;

    dispatch(
      action({
        min: parseInt(currMin),
        max: parseInt(currMax)
      })
    );
  };

  return (
    <div className="actionMaxMinField">
      <label className="actionMaxMinField__label t-paragraph6Light">
        {label}
      </label>
      <div className="actionMaxMinField__inputs">
        <div className="minMaxInput">
          <input
            className="minMaxInput__input"
            type={inputType}
            value={currMin}
            onChange={e => setCurrMin(e.target.value)}
            onBlur={actionHandler}
          />
          <label className="minMaxInput__label t-paragraph5Light"> min </label>
        </div>
        <div className="minMaxInput">
          <input
            className="minMaxInput__input"
            type={inputType}
            value={currMax}
            onChange={e => setCurrMax(e.target.value)}
            onBlur={actionHandler}
          />
          <label className="minMaxInput__label t-paragraph5Light"> max </label>
        </div>
      </div>
    </div>
  );
};
