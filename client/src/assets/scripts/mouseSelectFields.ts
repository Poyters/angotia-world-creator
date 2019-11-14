import { store } from '../../App';

//Import configs
import creatorConfig from '../configs/creatorConfig.json';

//Import actions
import { changeMapSelectMatrix } from '../../redux/actions/uiActions';

//Import interfaces
import { IPoint } from '../interfaces/pointInterfaces';

//Import scripts
import { selectCanvasSquare } from './selectFields';
import { colorBasedOnMatrix } from './colorBasedOnMatrix';


let canvas: any;
let ctx: any;
let rect: any = {};
let drag: boolean = false;

interface IRectanglePosition {
  topLeft: IPoint,
  bottomRight: IPoint
}

export const mouseSelectFields = (): void => {
  const map: any = document.getElementById("map");
	canvas = document.getElementById('mapSelectCanvas');
  ctx = canvas.getContext('2d');
	
	canvas.addEventListener('mousedown', event => mouseDown(event, map), false);
  canvas.addEventListener('mouseup', mouseUp, false);
  canvas.addEventListener('mousemove', event => mouseMove(event, map), false);
};


const mouseDown = (event: React.MouseEvent<HTMLElement>, map: any) => {
	const storeData = store.getState();
  const selectType: string = storeData.ui.select.type;
  const mapLeft = parseInt(map.style.left) || 0;
  const mapTop = parseInt(map.style.top) || 0;
	
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
  const mapLeft = parseInt(map.style.left) || 0;
  const mapTop = parseInt(map.style.top) || 0;
	
	if (selectType !== "mouse" || !drag) return;

  rect.width = (event.clientX - mapLeft) - rect.startX;
  rect.height = (event.clientY - mapTop) - rect.startY;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
};

const draw = (): void => {
  const storeData = store.getState();
  const selectMatrix: any[] = [...storeData.ui.select.matrix];

  ctx.fillStyle = creatorConfig.selectColor;
  ctx.fillRect(rect.startX, rect.startY, rect.width, rect.height);

  colorBasedOnMatrix(selectMatrix, 'mapSelectCanvas', creatorConfig.selectColor);
};


const colorSquares = (rectanglePosition) => {
  const storeData = store.getState();
  const selectMatrix: any[] = [...storeData.ui.select.matrix];
  const fieldSize = creatorConfig.map.fieldSize;

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
  const xSmaller = rectangleSquarePoints.topLeft.x < rectangleSquarePoints.bottomRight.x ? 
    rectangleSquarePoints.topLeft.x : rectangleSquarePoints.bottomRight.x;
  const xBigger = rectangleSquarePoints.topLeft.x > rectangleSquarePoints.bottomRight.x ? 
    rectangleSquarePoints.topLeft.x : rectangleSquarePoints.bottomRight.x;
  const ySmaller = rectangleSquarePoints.topLeft.y < rectangleSquarePoints.bottomRight.y ? 
    rectangleSquarePoints.topLeft.y : rectangleSquarePoints.bottomRight.y;
  const yBigger = rectangleSquarePoints.topLeft.y > rectangleSquarePoints.bottomRight.y ? 
    rectangleSquarePoints.topLeft.y : rectangleSquarePoints.bottomRight.y;

  for (let x = xSmaller; x < xBigger + 1; x++) {
    for (let y = ySmaller; y < yBigger + 1; y++) {

      const recSquarePoints: IPoint = {
        x: x,
        y: y
      };

      selectCanvasSquare(selectMatrix, recSquarePoints);
    }
  }

  selectCanvasSquare(selectMatrix, rectangleSquarePoints.topLeft);
  store.dispatch(changeMapSelectMatrix(selectMatrix));

  setTimeout((): void => {
    colorBasedOnMatrix(
      selectMatrix, 
      'mapSelectCanvas', 
      creatorConfig.selectColor
    ); //TODO: make it async
  }, 20);
};