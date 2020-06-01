import { store } from '../../index';
import creatorConfig from '../configs/creatorConfig.json';
import { changeMapSelectMatrix } from '../../store/actions/uiActions';
import { IPoint } from '../interfaces/math';
import { IRect, IRectanglePosition } from '../interfaces/figure';
import { selectCanvasSquare } from './selectFields';
import { colorBasedOnMatrix } from './colorBasedOnMatrix';


let canvas: any;
let ctx: any;
const rect: IRect = {
  startX: 0,
  startY: 0,
  width: 0,
  height: 0
};
let drag: boolean = false;

export const mouseSelectFields = (): void => {
  const map: HTMLElement | null = document.getElementById("map");
	canvas = document.getElementById('MAP_SELECT_CANVAS');
  ctx = canvas.getContext('2d');
	
	canvas.addEventListener('mousedown', event => mouseDown(event, map), false);
  canvas.addEventListener('mouseup', mouseUp, false);
  canvas.addEventListener('mousemove', event => mouseMove(event, map), false);
};


const mouseDown = (event: React.MouseEvent<HTMLElement>, map: any) => {
	const storeData = store.getState();
  const selectType: string = storeData.ui.select.type;
  const mapLeft: number = parseInt(map.style.left) || 0;
  const mapTop: number = parseInt(map.style.top) || 0;
	
	if (selectType !== "mouse") return;

  rect.startX = event.clientX - mapLeft;
  rect.startY = event.clientY - mapTop;
  drag = true;
};


const mouseUp = (): void => {
	const storeData = store.getState();
  const selectType: string = storeData.ui.select.type;
	
  if (selectType !== "mouse") return;
  
  const rectanglePosition: IRectanglePosition = {
    topLeft: {
      x: rect.startX,
      y: rect.startY
    },
    bottomRight: {
      x: rect.startX + rect.width,
      y: rect.startY + rect.height
    }
  };

  colorSquares(rectanglePosition);
  
  drag = false;
  ctx.clearRect(0,0,canvas.width,canvas.height);
};


const mouseMove = (event: React.MouseEvent<HTMLElement>, map: any) => {
  const storeData = store.getState();
  const selectType: string = storeData.ui.select.type;
  const mapLeft: number = parseInt(map.style.left) || 0;
  const mapTop: number = parseInt(map.style.top) || 0;
	
	if (selectType !== "mouse" || !drag) return;

  rect.width = (event.clientX - mapLeft) - rect.startX;
  rect.height = (event.clientY - mapTop) - rect.startY;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
};

const draw = (): void => {
  ctx.fillStyle = creatorConfig.selectColor;
  ctx.fillRect(rect.startX, rect.startY, rect.width, rect.height);
};


const colorSquares = (rectanglePosition) => {
  const storeData = store.getState();
  const selectMatrix: any[] = [...storeData.ui.select.matrix];
  const fieldSize: number = creatorConfig.map.fieldSize;

  const rectangleSquarePoints: IRectanglePosition = {
    topLeft: {
      x: Math.floor(rectanglePosition.topLeft.x / (fieldSize / 2)),
      y: Math.floor(rectanglePosition.topLeft.y / (fieldSize / 2))
    },
    bottomRight: {
      x: Math.floor(rectanglePosition.bottomRight.x / (fieldSize / 2)),
      y: Math.floor(rectanglePosition.bottomRight.y / (fieldSize / 2))
    }
  };

  //We need to find out real topLeft and bottomRight corner (due to reverse drawing)
  const xSmaller: number = rectangleSquarePoints.topLeft.x < rectangleSquarePoints.bottomRight.x ? 
    rectangleSquarePoints.topLeft.x : rectangleSquarePoints.bottomRight.x;
  const xBigger: number = rectangleSquarePoints.topLeft.x > rectangleSquarePoints.bottomRight.x ? 
    rectangleSquarePoints.topLeft.x : rectangleSquarePoints.bottomRight.x;
  const ySmaller: number = rectangleSquarePoints.topLeft.y < rectangleSquarePoints.bottomRight.y ? 
    rectangleSquarePoints.topLeft.y : rectangleSquarePoints.bottomRight.y;
  const yBigger: number = rectangleSquarePoints.topLeft.y > rectangleSquarePoints.bottomRight.y ? 
    rectangleSquarePoints.topLeft.y : rectangleSquarePoints.bottomRight.y;

  for (let x: number = xSmaller; x < xBigger + 1; x++) {
    for (let y: number = ySmaller; y < yBigger + 1; y++) {

      const recSquarePoints: IPoint = {
        x,
        y
      };

      selectCanvasSquare(selectMatrix, recSquarePoints);
    }
  }

  selectCanvasSquare(selectMatrix, rectangleSquarePoints.topLeft);
  store.dispatch(changeMapSelectMatrix(selectMatrix));

  setTimeout((): void => {
    colorBasedOnMatrix(
      selectMatrix, 
      'MAP_SELECT_CANVAS', 
      creatorConfig.selectColor
    ); //TODO: make it async
  }, 20);
};