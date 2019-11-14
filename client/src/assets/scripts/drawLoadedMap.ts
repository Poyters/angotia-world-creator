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
  const buildingMatrix = storeData.map.building.matrix;
  const decorationMatrix = storeData.map.decoration.matrix;
  const subsoilMatrix = storeData.map.subsoil.matrix;
  const npcMatrix = storeData.map.npc.matrix;
  const mobMatrix = storeData.map.mob.matrix;
  const vertexWeightMatrix = storeData.map.vertex.matrix;

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

  // Draw buildings
  colorBasedOnMatrix(
    buildingMatrix, 
    'mapbuildingCanvas', 
    '', 
    'image'
  );

  // Draw decorations
  colorBasedOnMatrix(
    decorationMatrix, 
    'mapdecorationCanvas', 
    '', 
    'image'
  );

  // Draw subsoils
  colorBasedOnMatrix(
    subsoilMatrix, 
    'mapsubsoilCanvas', 
    '', 
    'image'
  );

  // Draw NPCs
  colorBasedOnMatrix(
    npcMatrix, 
    'mapnpcCanvas', 
    '', 
    'image'
  );

  // Draw MOBs
  colorBasedOnMatrix(
    mobMatrix, 
    'mapmobCanvas', 
    '', 
    'image'
  );

  // Draw vertex weights
  colorBasedOnMatrix(
    vertexWeightMatrix, 
    'mapVertexWeightCanvas',
    '', 
    'vertexWeight'
  );
};