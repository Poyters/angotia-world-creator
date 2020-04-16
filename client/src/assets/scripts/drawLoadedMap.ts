import { store } from '../../index';
import creatorConfig from '../configs/creatorConfig.json';
import { colorBasedOnMatrix } from './colorBasedOnMatrix';


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
  const seMatrix = storeData.map.se.matrix;
  const vertexWeightMatrix = storeData.map.vertex.matrix;

  // Draw block fields
  colorBasedOnMatrix(
    blockMatrix, 
    'MAP_BLOCK_CANVAS', 
    blockSquaresColor, 
    'barrier'
  );

  // Draw passages
  colorBasedOnMatrix(
    passageMatrix, 
    'MAP_PASSAGE_CANVAS', 
    '#fff', 
    ''
  );

  // Draw buildings
  colorBasedOnMatrix(
    buildingMatrix, 
    'MAP_BUILDING_CANVAS', 
    '', 
    'image'
  );

  // Draw decorations
  colorBasedOnMatrix(
    decorationMatrix, 
    'MAP_DECORATION_CANVAS', 
    '', 
    'image'
  );

  // Draw subsoils
  colorBasedOnMatrix(
    subsoilMatrix, 
    'MAP_SUBSOIL_CANVAS', 
    '', 
    'image'
  );

  // Draw NPCs
  colorBasedOnMatrix(
    npcMatrix, 
    'MAP_NPC_CANVAS', 
    '', 
    'image'
  );

  // Draw MOBs
  colorBasedOnMatrix(
    mobMatrix, 
    'MAP_MOB_CANVAS', 
    '', 
    'image'
  );

  // Draw vertex weights
  colorBasedOnMatrix(
    vertexWeightMatrix, 
    'MAP_VERTEXWEIGHT_CANVAS',
    '', 
    'vertexWeight'
  );

  // Draw se
  colorBasedOnMatrix(
    seMatrix, 
    'MAP_SE_CANVAS',
    '', 
    'image'
  );
};