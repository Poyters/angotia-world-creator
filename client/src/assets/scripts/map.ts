import { store } from '../../App';

//Import interfaces
import { IMapSize } from '../interfaces/mapInterfaces';


export const generateEmptyMapMatrix = ():Array<any> => {
	const storeData = store.getState();
	const mapSize: IMapSize = storeData.map.size;

	const newMatrix: Array<any> = [...Array(mapSize.y)].map((): any[] => {
		return [...Array(mapSize.x)].map((): any[] => {
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