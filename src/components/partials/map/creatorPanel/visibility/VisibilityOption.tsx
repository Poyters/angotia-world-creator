import React, { useState } from "react";
import ReactDOM from "react-dom";
import { VisibilityPopup } from "./VisibilityPopup";

export const VisibilityOption: React.FC = () => {
  const [isPopup, setIsPopup] = useState<boolean>(false);

  return (
    <>
      {isPopup
        ? ReactDOM.createPortal(
            <VisibilityPopup isActivePopup={setIsPopup} />,
            document.body
          )
        : null}
      <div role="button" className="option" onClick={() => setIsPopup(true)}>
        <div className="visibilityOption"> </div>
      </div>
    </>
  );
};
