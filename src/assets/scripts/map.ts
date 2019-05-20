import { store } from '../../App';


interface IStoreData {
  map: {
    size: {
      x: number,
      y: number
    }
  }
};


export const generateEmptyMapMatrix = () => {
	const storeData: IStoreData = store.getState();
	const mapSize = storeData.map.size;

	const newMatrix = [...Array(mapSize.y)].map((field) => {
		return [...Array(mapSize.x)].map((square) => {
			return [
				[0, 0],
				[0, 0]
			]
		})
	})

	return newMatrix;
}