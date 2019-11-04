import { store } from '../../App';

//Import configs
import creatorConfig from '../configs/creatorConfig.json';

const fieldSize: number = creatorConfig.map.fieldSize;
const squareSize: number = creatorConfig.map.fieldSize / 2;

export const drawLoadedMap = () => {
  const storeData = store.getState();

  console.log(storeData);
};