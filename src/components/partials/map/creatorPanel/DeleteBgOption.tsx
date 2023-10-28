import React from "react";
import { useDispatch } from "react-redux";
import { setMapBg } from "../../../../store/actions/mapActions";
import { addNotification } from "../../../../scripts/utils/notifications";
import { useTranslation } from "react-i18next";

export const DeleteBgOption: React.FC = () => {
  const { t } = useTranslation(["map", "notifications"]);
  const dispatch = useDispatch();

  const deleteBg = () => {
    dispatch(setMapBg(""));
    addNotification(t("notifications:notes.background.delete"));
  };

  return (
    <div className="option option--deleteBg" onClick={deleteBg}>
      <div className="g-exitBtn"> </div>
    </div>
  );
};
