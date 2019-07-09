import { store } from '../../App';

//Import scripts
import { colorBasedOnMatrix } from './colorBasedOnMatrix';
import { clearCanvas } from './clearCanvas';

//Import configs
import creatorConfig from '../configs/creatorConfig.json';


export const setBlockSquares = () => {
  const storeData = store.getState();
  const selectMatrix: any[] = [...storeData.map.select.matrix];
  clearCanvas("mapSelectCanvas");

  colorBasedOnMatrix(selectMatrix, 'mapBlockCanvas', creatorConfig.blockSquareColor, 'barrier');

  //TODO: create and update blockMapMatrix
}