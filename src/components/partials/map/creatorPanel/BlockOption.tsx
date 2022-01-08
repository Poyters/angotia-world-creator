import React from "react";
import { useSelector } from "react-redux";
import { markSquare } from "../../../../scripts/matrix/markSquare";
import { isEmptyMatrix } from "../../../../scripts/validators/isEmptyMatrix";
import { addNotification } from "../../../../scripts/utils/notifications";
import mapConfig from "../../../../assets/configs/map.config.json";
import { changeMapBlockMatrix } from "../../../../store/actions/mapActions";
import { IStore } from "../../../../interfaces/store.interface";
import { Canvas } from "../../../../models/canvas.model";
import { Notification } from "../../../../models/notification.model";
import { MatrixFillColor } from "../../../../models/matrixFillColor.model";
import { useTranslation } from "react-i18next";

export const BlockOption = () => {
  const { t } = useTranslation(["notifications"]);
  const blockMatrix = useSelector((state: IStore) => state.map.blockMatrix);
  const fillColor = mapConfig.blockSquareColor;
  const selectMatrix = useSelector((state: IStore) => state.ui.select.matrix);

  const blockHandler = () => {
    if (isEmptyMatrix(selectMatrix)) {
      addNotification(
        t("notifications:notes.select.noneSelected"),
        Notification.error
      );
      return;
    }

    markSquare(
      blockMatrix,
      Canvas.block,
      changeMapBlockMatrix,
      t("notifications:notes.block.changed"),
      fillColor,
      MatrixFillColor.barrier
    );
  };

  return (
    <div
      role="button"
      className="option option--block"
      onClick={() => blockHandler()}
    >
      <div className="g-exitBtn"></div>
    </div>
  );
};
