import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import mapConfig from "../../../../../assets/configs/map.config.json";
import { matrixToIds } from "../../../../../scripts/parsers/matrixToIds";
import { deepCopy } from "../../../../../scripts/utils/deepCopy";
import { markSquare } from "../../../../../scripts/matrix/markSquare";
import { isEmptyMatrix } from "../../../../../scripts/validators/isEmptyMatrix";
import { addNotification } from "../../../../../scripts/utils/notifications";
import { VertexWeightPopup } from "./VertexWeightPopup";
import {
  changeMapVertexWeightMatrix,
  changeMapVertexWeights
} from "../../../../../store/actions/mapActions";
import { IStore } from "../../../../../interfaces/store.interface";
import { Canvas } from "../../../../../models/canvas.model";
import { Notification } from "../../../../../models/notification.model";
import { MatrixFillColor } from "../../../../../models/matrixFillColor.model";
import { useTranslation } from "react-i18next";

let pressedKey: string | null = null;
document.addEventListener("keydown", event => (pressedKey = event.key));
document.addEventListener("keyup", () => (pressedKey = null));

export const VertexWeightOption: React.FC = () => {
  const { t } = useTranslation(["notifications"]);
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const selectMatrix = deepCopy(
    useSelector((state: IStore) => state.ui.select.matrix)
  );
  const vertexWeightMatrix = useSelector(
    (state: IStore) => state.map.vertex.matrix
  );
  const vertexWeights = deepCopy(
    useSelector((state: IStore) => state.map.vertex.weights)
  );
  const dispatch = useDispatch();

  const vertexHandler = () => {
    if (isEmptyMatrix(selectMatrix)) {
      addNotification(
        t("notifications:notes.select.noneSelected"),
        Notification.error
      );
      return;
    }

    pressedKey === mapConfig?.secondOptionKeyCode
      ? deleteVertices()
      : setIsPopup(true);
    pressedKey = null;
  };

  const deleteVertices = () => {
    const deleteLocations = matrixToIds(selectMatrix);

    deleteLocations.forEach(location => {
      if (vertexWeights.some(e => e.id === location.id)) {
        const index = vertexWeights.findIndex(x => x.id === location.id);

        vertexWeights.splice(index, 1);
      }
    });

    dispatch(changeMapVertexWeights(vertexWeights));
    markSquare(
      vertexWeightMatrix,
      Canvas.vertexWeight,
      changeMapVertexWeightMatrix,
      t("notifications:notes.vertex.delete"),
      "",
      MatrixFillColor.vertexWeight
    );
  };

  return (
    <>
      {isPopup
        ? ReactDOM.createPortal(
            <VertexWeightPopup isActivePopup={setIsPopup} />,
            document.body
          )
        : null}
      <div role="button" className="option" onClick={() => vertexHandler()}>
        <div className="vertexWeightOption">
          <div className="vertexWeightOption__number">
            {mapConfig?.vertexWeight?.max}
          </div>
        </div>
      </div>
    </>
  );
};
