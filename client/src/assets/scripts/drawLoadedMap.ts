import { store } from '../../App';

//Import configs
import creatorConfig from '../configs/creatorConfig.json';

//Import scripts
import { colorBasedOnMatrix } from './colorBasedOnMatrix';


// const fieldSize: number = creatorConfig.map.fieldSize;
// const squareSize: number = creatorConfig.map.fieldSize / 2;
const blockSquaresColor = creatorConfig.blockSquareColor;

export const drawLoadedMap = () => {
  const storeData = store.getState();
  const blockMatrix = storeData.map.blockMatrix;
  const passageMatrix = storeData.map.passage.matrix;

  console.log(storeData);

  // Draw block fields
  colorBasedOnMatrix(
    blockMatrix, 
    'mapBlockCanvas', 
    blockSquaresColor, 
    'barrier'
  );

  // Draw passages
  colorBasedOnMatrix(
    passageMatrix, 
    'mapPassageCanvas', 
    '#fff', 
    ''
  );
};