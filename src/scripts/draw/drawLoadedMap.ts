import { store } from '../../index';
import mapConfig from '../../assets/configs/map.config.json';
import { colorBasedOnMatrix } from '../matrix/colorBasedOnMatrix';
import { deepCopy } from '../utils/deepCopy';
import { IStore } from '../../interfaces/store.interface';
import { Canvas } from '../../models/canvas.model';


const blockSquaresColor = mapConfig.blockSquareColor;

export const drawLoadedMap = async () => {
  const storeData: IStore = store.getState();
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
    Canvas.block, 
    blockSquaresColor, 
    'barrier'
  );

  // Draw passages
  await colorBasedOnMatrix(
    passageMatrix, 
    Canvas.passage, 
    '', 
    'passage'
  );

  // Draw buildings
  await colorBasedOnMatrix(
    buildingMatrix, 
    Canvas.building, 
    '', 
    'image'
  );

  // Draw decorations
  await colorBasedOnMatrix(
    decorationMatrix, 
    Canvas.decoration, 
    '', 
    'image'
  );

  // Draw subsoils
  await colorBasedOnMatrix(
    subsoilMatrix, 
    Canvas.subsoil, 
    '', 
    'image'
  );

  // Draw NPCs
  await colorBasedOnMatrix(
    npcMatrix, 
    Canvas.npc, 
    '', 
    'image'
  );

  // Draw MOBs
  await colorBasedOnMatrix(
    mobMatrix, 
    Canvas.mob, 
    '', 
    'image'
  );

  // Draw vertex weights
  await colorBasedOnMatrix(
    vertexWeightMatrix, 
    Canvas.vertexWeight,
    '', 
    'vertexWeight'
  );

  // Draw se
  await colorBasedOnMatrix(
    seMatrix, 
    Canvas.se,
    '', 
    'image'
  );
};