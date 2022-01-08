import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MapPreviewPopup } from "./MapPreviewPopup";
import { useTranslation } from "react-i18next";

export const MapPreview = () => {
  const { t } = useTranslation(["map"]);
  const [isActiveLoadPopup, setIsActiveLoadPopup] = useState(false);

  return (
    <>
      {isActiveLoadPopup
        ? ReactDOM.createPortal(
            <MapPreviewPopup isActivePopup={setIsActiveLoadPopup} />,
            document.body
          )
        : null}
      <span onClick={() => setIsActiveLoadPopup(true)}>{t("map:preview")}</span>
    </>
  );
};
