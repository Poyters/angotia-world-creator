import { store } from '../../../index';
import creatorConfig from '../../configs/creatorConfig.json';
import { changeMapSelectMatrix } from '../../../store/actions/uiActions';
import { IPoint } from '../../../interfaces/math.interface';
import { IStore } from '../../../interfaces/store.interface';


export const selectFieldsHandler = (event: React.MouseEvent<HTMLElement>) => {
  const map: any = document.getElementById("map");
  let mapLeft: number = parseInt(map.style.left);
  let mapTop: number = parseInt(map.style.top);

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
  const selectType: string = storeData.ui.select.type;
  const selectMatrix: Array<[]> = [...storeData.ui.select.matrix];
  const fieldSize: number = creatorConfig.map.fieldSize;
  const mapNetsStatus = storeData.ui.net;
  let positionDelta: IPoint = {
    x: -1,
    y: -1
  };

  if (
    (!mapNetsStatus.field && 
    !mapNetsStatus.square) || 
    selectType === 'none'
  ) return; //no nets, no select


  switch(selectType) {
    case "field":
      positionDelta = {
        x: Math.floor(cursorPosition.x / fieldSize),
        y: Math.floor(cursorPosition.y / fieldSize)
      };

      selectCanvasField(selectMatrix, positionDelta);
    break;
    case "square":
      positionDelta = {
        x: Math.floor(cursorPosition.x / (fieldSize / 2)),
        y: Math.floor(cursorPosition.y / (fieldSize / 2))
      };

      selectCanvasSquare(selectMatrix, positionDelta);
    break;
    case "mouse":
      return; // Listener are applied on Map component initialization
    default:
      throw new Error('Invalid select map type.');
  }

  store.dispatch(changeMapSelectMatrix(selectMatrix));
  colorChecked(positionDelta, selectType);
};


const colorChecked = (positionDelta: IPoint, type: string) => {
  const canvas: any = document.getElementById("MAP_SELECT_CANVAS");
  const ctx: any = canvas.getContext("2d");
  let fieldSize: number = creatorConfig.map.fieldSize;

  if (type === 'square') fieldSize = fieldSize / 2;
  
  const posX: number = positionDelta.x * fieldSize;
  const posY: number = positionDelta.y * fieldSize;

  ctx.fillStyle = creatorConfig.selectColor;
  ctx.fillRect(posX, posY, fieldSize, fieldSize);
  ctx.closePath();
  ctx.stroke();
};


export const selectCanvasSquare = (selectMatrix: Array<any>, squarePosition: IPoint): void => {
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

  selectMatrix[fieldPosition.y][fieldPosition.x][squareDelta.y][squareDelta.x] = 1;
};


export const selectCanvasField = (selectMatrix: Array<any>, fieldPosition: IPoint): void => {
  selectMatrix[fieldPosition.y][fieldPosition.x] = [
    [1, 1],
    [1, 1]
  ]; //Select whole field
};