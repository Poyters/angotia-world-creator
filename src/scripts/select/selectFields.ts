import { store } from "../../index";
import mapConfig from "../../assets/configs/map.config.json";
import { changeMapSelectMatrix } from "../../store/actions/uiActions";
import { IPoint } from "../../interfaces/math.interface";
import { IStore } from "../../interfaces/store.interface";
import { Canvas } from "../../models/canvas.model";
import { SelectType } from "../../models/selectType.model";

export const selectFieldsHandler = (event: React.MouseEvent<HTMLElement>) => {
  const map = document.getElementById("map");
  let mapLeft = map ? parseInt(map.style.left) : 0;
  let mapTop = map ? parseInt(map.style.top) : 0;

  if (isNaN(mapLeft)) mapLeft = 0;
  if (isNaN(mapTop)) mapTop = 0;

  const cursorPosition: IPoint = {
    x: event.clientX - mapLeft,
    y: event.clientY - mapTop
  };

  selectField(cursorPosition);
};

const selectField = (cursorPosition: IPoint) => {
  const storeData: IStore = store.getState();
  const selectType = storeData.ui.select.type;
  const selectMatrix: Array<[]> = [...storeData.ui.select.matrix];
  const fieldSize = mapConfig.map.fieldSize;
  const mapNetsStatus = storeData.ui.net;
  let positionDelta: IPoint = {
    x: -1,
    y: -1
  };

  if (
    (!mapNetsStatus.field && !mapNetsStatus.square) ||
    selectType === SelectType.none
  )
    return; // no nets, no select

  switch (selectType) {
    case SelectType.field:
      positionDelta = {
        x: Math.floor(cursorPosition.x / fieldSize),
        y: Math.floor(cursorPosition.y / fieldSize)
      };

      selectCanvasField(selectMatrix, positionDelta);
      break;
    case SelectType.square:
      positionDelta = {
        x: Math.floor(cursorPosition.x / (fieldSize / 2)),
        y: Math.floor(cursorPosition.y / (fieldSize / 2))
      };

      selectCanvasSquare(selectMatrix, positionDelta);
      break;
    case SelectType.mouse:
      return; // Listener are applied on Map component initialization
    default:
      throw new Error("Invalid select map type.");
  }

  store.dispatch(changeMapSelectMatrix(selectMatrix));
  colorChecked(positionDelta, selectType);
};

const colorChecked = (positionDelta: IPoint, type: string) => {
  const canvas: any = document.getElementById(Canvas.select);
  const ctx = canvas.getContext("2d");
  let fieldSize = mapConfig.map.fieldSize;

  if (type === SelectType.square) fieldSize = fieldSize / 2;

  const posX = positionDelta.x * fieldSize;
  const posY = positionDelta.y * fieldSize;

  ctx.fillStyle = mapConfig.selectColor;
  ctx.fillRect(posX, posY, fieldSize, fieldSize);
  ctx.closePath();
  ctx.stroke();
};

export const selectCanvasSquare = (
  selectMatrix: number[][][][],
  squarePosition: IPoint
) => {
  // squarePosition determines x and y axis
  // of squares, eg. x: 2, y: 4 and it fill to field x: 1, y: 2

  const fieldPosition: IPoint = {
    x: Math.floor(squarePosition.x / 2),
    y: Math.floor(squarePosition.y / 2)
  };

  const squareDelta: IPoint = {
    x: Math.floor(squarePosition.x % 2),
    y: Math.floor(squarePosition.y % 2)
  };

  selectMatrix[fieldPosition.y][fieldPosition.x][squareDelta.y][
    squareDelta.x
  ] = 1;
};

export const selectCanvasField = (
  selectMatrix: number[][][][],
  fieldPosition: IPoint
) => {
  selectMatrix[fieldPosition.y][fieldPosition.x] = [
    [1, 1],
    [1, 1]
  ]; // Select whole field
};
