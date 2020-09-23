import { store } from '../index';
import { IMapSize } from '../interfaces/map.interface';
import { IStore } from '../interfaces/store.interface';


export const generateEmptyMapMatrix = (inputMapSize?: IMapSize):Array<any> => {
	const storeData: IStore = store.getState();
	const mapSize: IMapSize = inputMapSize ? inputMapSize : storeData.map.size;

	const newMatrix: Array<any[]> = [...Array(mapSize.y)].map((): Array<any[]> => {
		return [...Array(mapSize.x)].map((): Array<number[]> => {
			return [
				[0, 0],
				[0, 0]
			];
		});
	});

	return newMatrix;
};


export const emptyMapCanvasCtx = (canvasId: string) => {
	const canvas: any = document.getElementById(canvasId);
	if (!canvas) return;

	const context: any = canvas.getContext("2d");

	context.save();
	context.setTransform(1, 0, 0, 1, 0, 0);
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.restore();
	
	return context;
};