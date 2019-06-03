import { store } from '../../App';
import { colorBasedOnMatrix } from './selectFields';


let canvas: any;
let ctx: any;
let rect: any = {};
let drag: boolean = false;

export const mouseSelectFields = () => {
	canvas = document.getElementById('mapSelectCanvas');
  ctx = canvas.getContext('2d');
	
	canvas.addEventListener('mousedown', mouseDown, false);
  canvas.addEventListener('mouseup', mouseUp, false);
  canvas.addEventListener('mousemove', mouseMove, false);
}


function mouseDown(event: React.MouseEvent<HTMLElement>) {
	const storeData = store.getState();
	const selectType: string = storeData.map.select.type;
	
	if (selectType !== "mouse") return;

  rect.startX = event.clientX - this.offsetLeft;
  rect.startY = event.clientY - this.offsetTop;
  drag = true;
}


const mouseUp = () => {
	const storeData = store.getState();
	const selectType: string = storeData.map.select.type;
	
	if (selectType !== "mouse") return;

  drag = false;
  ctx.clearRect(0,0,canvas.width,canvas.height);
}


function mouseMove(event: React.MouseEvent<HTMLElement>) {
	const storeData = store.getState();
	const selectType: string = storeData.map.select.type;
	
	if (selectType !== "mouse") return;

  if (!drag) return;

  rect.w = (event.clientX - this.offsetLeft) - rect.startX;
  rect.h = (event.clientY - this.offsetTop) - rect.startY ;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  draw();
}

const draw = () => {
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);

  colorBasedOnMatrix();
}