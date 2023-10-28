import React from "react";
import { useDispatch } from "react-redux";
import mapConfig from "../../assets/configs/map.config.json";
import { sizeGuard } from "../../scripts/files/sizeGuard";
import { addNotification } from "../../scripts/utils/notifications";
import { ILoadPicBtn } from "../../interfaces/button.interface";
import { useTranslation } from "react-i18next";

export const LoadPicBtn: React.FC<ILoadPicBtn> = ({
  name,
  clickEvent,
  note
}) => {
  const { t } = useTranslation(["files"]);
  const dispatchedClickEvent = clickEvent
    ? clickEvent
    : () => {
        // do nothing
      };
  const dispatch = useDispatch();

  const handleFileSelect = event => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (!sizeGuard(file, mapConfig.maxPicsWeight.char, t)) {
      return;
    }

    reader.onload = (() => {
      return e => {
        const path = e?.target?.result;

        if (!path || typeof path !== "string") {
          // TODO: Add log here
          return;
        }

        dispatch(dispatchedClickEvent(path));

        if (note) addNotification(note);
      };
    })();

    reader.readAsDataURL(file);
  };

  return (
    <>
      <label className="g-cornerButton t-paragraph5Normal" htmlFor="file">
        <div className="g-cornerButton__content">
          <span> {name} </span>
        </div>
      </label>
      <input
        className="g-clearFileInput"
        type="file"
        id="file"
        name="files[]"
        onChange={event => handleFileSelect(event)}
      />
    </>
  );
};
