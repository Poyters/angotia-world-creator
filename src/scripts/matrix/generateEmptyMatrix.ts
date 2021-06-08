import { store } from '../../index';
import { IMapSize } from '../../interfaces/map.interface';
import { IStore } from '../../interfaces/store.interface';
import { log } from '../utils/log';


export const generateEmptyMatrix = (inputMapSize?: IMapSize):Array<any> => {
	log('GENERATING_EMPTY_MATRIX', { inputMapSize });

	const storeData = store.getState() as IStore;
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