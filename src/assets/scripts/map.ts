import { store } from '../../App';

//Import configs
import creatorConfig from '../configs/creatorConfig.json';

//Import interfaces
import { IMapSize } from '../interfaces/mapInterfaces';


export const generateEmptyMapMatrix = ():Array<any> => {
	const storeData = store.getState();
	const mapSize: IMapSize = storeData.map.size;

	const newMatrix: Array<any> = [...Array(mapSize.y)].map(() => {
		return [...Array(mapSize.x)].map(() => {
			return [
				[0, 0],
				[0, 0]
			]
		})
	})

	return newMatrix;
}


export const emptyMapCanvasCtx = () => {
	const storeData = store.getState();
	const mapSize: IMapSize = storeData.map.size;
	const fieldSize: number = creatorConfig.map.fieldSize;
	const canvas: any = document.getElementById("mapCanvas");
	const ctx: any = canvas.getContext("2d");

	ctx.clearRect(0, 0, mapSize.x*fieldSize, mapSize.y*fieldSize);

	return ctx;
}