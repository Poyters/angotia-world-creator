import { store } from '../../App';
import { colorBasedOnMatrix } from './selectFields';


let canvas: any;
let ctx: any;
let rect: any = {};
let drag: boolean = false;

interface ITrianglePosition {
  topLeft: {
    x: number,
    y: number
  },
  bottomRight: {
    x: number,
    y: number
  }
}


let trianglePosition: ITrianglePosition = {
  topLeft: {
    x: 0,
    y: 0
  },
  bottomRight: {
    x: 0,
    y: 0
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


function mouseDown(event: React.MouseEvent<HTMLElement>, map: any) {
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
  
  trianglePosition = {
    topLeft: {
      x: rect.startX,
      y: rect.startY
    },
    bottomRight: {
      x: rect.startX + rect.width,
      y: rect.startY + rect.height
    }
  }

  console.log(trianglePosition);

  drag = false;
  ctx.clearRect(0,0,canvas.width,canvas.height);
}


function mouseMove(event: React.MouseEvent<HTMLElement>, map: any) {
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