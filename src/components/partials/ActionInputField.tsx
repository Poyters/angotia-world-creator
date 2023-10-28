import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IActionInputField } from "../../interfaces/form.interface";

export const ActionInputField: React.FC<IActionInputField> = ({
  label,
  inputType = "text",
  inputValue = "",
  inputDisabled = false,
  action,
  payloadId
}) => {
  const [currValue, setCurrValue] = useState<string | number>(inputValue);
  const dispatch = useDispatch();

  const actionHandler = () => {
    if (!action) return;

    if (payloadId) {
      dispatch(action(payloadId, currValue));
    } else {
      dispatch(action(currValue));
    }
  };

  return (
    <div className="actionInputField">
      <label className="actionInputField__label t-paragraph6Light">
        {label}
      </label>
      <input
        className="actionInputField__input"
        type={inputType}
        value={currValue}
        disabled={inputDisabled}
        onChange={e => setCurrValue(e.target.value)}
        onBlur={actionHandler}
      />
    </div>
  );
};
