import { store } from '../../App';

//Import scripts
import { colorBasedOnMatrix } from './colorBasedOnMatrix';

//Import configs
import creatorConfig from '../configs/creatorConfig.json';


export const setBlockSquares = () => {
	return;
  const storeData = store.getState();
  const selectMatrix: any[] = [...storeData.map.select.matrix];

  colorBasedOnMatrix(selectMatrix, 'mapBlockCanvas', creatorConfig.selectColor);
}