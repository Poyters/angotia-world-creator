import { store } from '../../../index';
import creatorConfig from '../../configs/creatorConfig.json';
import { colorBasedOnMatrix } from '../colorBasedOnMatrix';
import { deepCopy } from '../utils/deepCopy';


const blockSquaresColor = creatorConfig.blockSquareColor;

export const drawLoadedMap = async () => {
  const storeData = store.getState();
  const blockMatrix = deepCopy(storeData.map.blockMatrix);
  const passageMatrix = deepCopy(storeData.map.passage.matrix);
  const buildingMatrix = deepCopy(storeData.map.building.matrix);
  const decorationMatrix = deepCopy(storeData.map.decoration.matrix);
  const subsoilMatrix = deepCopy(storeData.map.subsoil.matrix);
  const npcMatrix = deepCopy(storeData.map.npc.matrix);
  const mobMatrix = deepCopy(storeData.map.mob.matrix);
  const seMatrix = deepCopy(storeData.map.se.matrix);
  const vertexWeightMatrix = deepCopy(storeData.map.vertex.matrix);

  // Draw block fields
  await colorBasedOnMatrix(
    blockMatrix, 
    'MAP_BLOCK_CANVAS', 
    blockSquaresColor, 
    'barrier'
  );

  // Draw passages
  await colorBasedOnMatrix(
    passageMatrix, 
    'MAP_PASSAGE_CANVAS', 
    '', 
    'passage'
  );

  // Draw buildings
  await colorBasedOnMatrix(
    buildingMatrix, 
    'MAP_BUILDING_CANVAS', 
    '', 
    'image'
  );

  // Draw decorations
  await colorBasedOnMatrix(
    decorationMatrix, 
    'MAP_DECORATION_CANVAS', 
    '', 
    'image'
  );

  // Draw subsoils
  await colorBasedOnMatrix(
    subsoilMatrix, 
    'MAP_SUBSOIL_CANVAS', 
    '', 
    'image'
  );

  // Draw NPCs
  await colorBasedOnMatrix(
    npcMatrix, 
    'MAP_NPC_CANVAS', 
    '', 
    'image'
  );

  // Draw MOBs
  await colorBasedOnMatrix(
    mobMatrix, 
    'MAP_MOB_CANVAS', 
    '', 
    'image'
  );

  // Draw vertex weights
  await colorBasedOnMatrix(
    vertexWeightMatrix, 
    'MAP_VERTEXWEIGHT_CANVAS',
    '', 
    'vertexWeight'
  );

  // Draw se
  await colorBasedOnMatrix(
    seMatrix, 
    'MAP_SE_CANVAS',
    '', 
    'image'
  );
};