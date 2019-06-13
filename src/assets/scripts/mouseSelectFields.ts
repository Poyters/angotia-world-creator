import { store } from '../../App';
import { colorBasedOnMatrix } from './selectFields';

//Import configs
import creatorConfig from '../configs/creatorConfig.json';

//Import actions
import { changeMapSelectMatrix } from '../../redux/actions/mapActions';


let canvas: any;
let ctx: any;
let rect: any = {};
let drag: boolean = false;

interface IRectanglePosition {
  topLeft: {
    x: number,
    y: number
  },
  bottomRight: {
    x: number,
    y: number
  }
}

export const mouseSelectFields = () => {
  const map: any = document.getElementById("map");
	canvas = document.getElementById('mapSelectCanvas');
  ctx = canvas.getContext('2d');
	
	canvas.addEventListener('mousedown', event => mouseDown(event, map), false);
  canvas.addEventListener('mouseup', mouseUp, false);
  canvas.addEventListener('mousemove', event => mouseMove(event, map), false);
}


const mouseDown = (event: React.MouseEvent<HTMLElement>, map: any) => {
	const storeData = store.getState();
  const selectType: string = storeData.map.select.type;
  const mapLeft = parseInt(map.style.left) || 0;
  const mapTop = parseInt(map.style.top) || 0;
	
	if (selectType !== "mouse") return;

  rect.startX = event.clientX - mapLeft;
  rect.startY = event.clientY - mapTop;
  drag = true;
}


const mouseUp = () => {
	const storeData = store.getState();
  const selectType: string = storeData.map.select.type;
	
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
  }

  colorSquares(rectanglePosition);
  
  drag = false;
  ctx.clearRect(0,0,canvas.width,canvas.height);
}


const mouseMove = (event: React.MouseEvent<HTMLElement>, map: any) => {
	const storeData = store.getState();
  const selectType: string = storeData.map.select.type;
  const mapLeft = parseInt(map.style.left) || 0;
  const mapTop = parseInt(map.style.top) || 0;
	
	if (selectType !== "mouse") return;

  if (!drag) return;

  rect.width = (event.clientX - mapLeft) - rect.startX;
  rect.height = (event.clientY - mapTop) - rect.startY;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  draw();
}

const draw = () => {
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(rect.startX, rect.startY, rect.width, rect.height);

  colorBasedOnMatrix();
}


const colorSquares = (rectanglePosition) => {
  const storeData = store.getState();
  const selectMatrix: Array<any> = [...storeData.map.select.matrix];
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
  }

  const rectangleFieldPoints: IRectanglePosition = {
    topLeft: {
      x: Math.floor(rectanglePosition.topLeft.x / fieldSize),
      y: Math.floor(rectanglePosition.topLeft.y / fieldSize)
    },
    bottomRight: {
      x: Math.floor(rectanglePosition.bottomRight.x / fieldSize),
      y: Math.floor(rectanglePosition.bottomRight.y / fieldSize)
    }
  }

  const squareDelta = {
    topLeft: {
      x: Math.floor(rectangleSquarePoints.topLeft.x % 2),
      y: Math.floor(rectangleSquarePoints.topLeft.y % 2)
    }
  };

  console.log(selectMatrix);
  console.log(rectangleFieldPoints.topLeft, rectangleFieldPoints.bottomRight);
  console.log(rectangleSquarePoints.topLeft, rectangleSquarePoints.bottomRight);

  selectMatrix[rectangleFieldPoints.topLeft.y][rectangleFieldPoints.topLeft.x][rectangleSquarePoints.topLeft.y % 2][rectangleSquarePoints.topLeft.x % 2] = 1;

  console.log(selectMatrix);
}