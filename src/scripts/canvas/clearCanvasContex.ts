import { log } from '../utils/log';


export const clearCanvasContex = (canvasId: string) => {
	log('CLEAR_CANVAS_CONTEXT');

	const canvas: any = document.getElementById(canvasId);
	if (!canvas) return;

	const context = canvas.getContext('2d');

	context.save();
	context.setTransform(1, 0, 0, 1, 0, 0);
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.restore();
	
	return context;
};