import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AddFSImagePopup } from "./AddFSImagePopup";

export const AddFSImageOption: React.FC = () => {
  const [isPopup, setIsPopup] = useState<boolean>(false);

  return (
    <>
      {isPopup
        ? ReactDOM.createPortal(
            <AddFSImagePopup isActivePopup={setIsPopup} />,
            document.body
          )
        : null}
      <div role="button" className="option" onClick={() => setIsPopup(true)}>
        <div className="addFSImageOption"> </div>
      </div>
    </>
  );
};
