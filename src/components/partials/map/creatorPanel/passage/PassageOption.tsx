import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import mapConfig from "../../../../../assets/configs/map.config.json";
import { matrixToIds } from "../../../../../scripts/parsers/matrixToIds";
import { deepCopy } from "../../../../../scripts/utils/deepCopy";
import { markSquare } from "../../../../../scripts/matrix/markSquare";
import { isEmptyMatrix } from "../../../../../scripts/validators/isEmptyMatrix";
import { addNotification } from "../../../../../scripts/utils/notifications";
import { PassagePopup } from "./PassagePopup";
import {
  changeMapPassageMatrix,
  changeMapPassageLocations
} from "../../../../../store/actions/mapActions";
import { IStore } from "../../../../../interfaces/store.interface";
import { Canvas } from "../../../../../models/canvas.model";
import { Notification } from "../../../../../models/notification.model";
import { MatrixFillColor } from "../../../../../models/matrixFillColor.model";
import { useTranslation } from "react-i18next";

let pressedKey: string | null = null;
document.addEventListener("keydown", event => (pressedKey = event.key));
document.addEventListener("keyup", () => (pressedKey = null));

export const PassageOption: React.FC = () => {
  const { t } = useTranslation(["notifications"]);
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const selectMatrix = deepCopy(
    useSelector((state: IStore) => state.ui.select.matrix)
  );
  const passageMatrix = useSelector(
    (state: IStore) => state.map.passage.matrix
  );
  const passageLocations = deepCopy(
    useSelector((state: IStore) => state.map.passage.locations)
  );
  const dispatch = useDispatch();

  const passageHandler = () => {
    if (isEmptyMatrix(selectMatrix)) {
      addNotification(
        t("notifications:notes.select.noneSelected"),
        Notification.error
      );
      return;
    }

    pressedKey === mapConfig?.secondOptionKeyCode
      ? deletePassage()
      : setIsPopup(true);
    pressedKey = null;
  };

  const deletePassage = () => {
    const deleteLocations = matrixToIds(selectMatrix);

    deleteLocations.forEach(location => {
      if (passageLocations.some(e => e.id === location.id)) {
        const index = passageLocations.findIndex(x => x.id === location.id);

        passageLocations.splice(index, 1);
      }
    });

    dispatch(changeMapPassageLocations(passageLocations));
    markSquare(
      passageMatrix,
      Canvas.passage,
      changeMapPassageMatrix,
      t("notifications:notes.portal.delete"),
      "",
      MatrixFillColor.passage
    );
  };

  return (
    <>
      {isPopup
        ? ReactDOM.createPortal(
            <PassagePopup isActivePopup={setIsPopup} />,
            document.body
          )
        : null}
      <div className="passageOption" onClick={passageHandler}>
        {" "}
      </div>
    </>
  );
};
