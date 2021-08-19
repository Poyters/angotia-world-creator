import { store } from '../../index';
import mapConfig from '../../assets/configs/map.config.json';
import { colorBasedOnMatrix } from '../matrix/colorBasedOnMatrix';
import { deepCopy } from '../utils/deepCopy';
import { IStore } from '../../interfaces/store.interface';
import { Canvas } from '../../models/canvas.model';
import { MatrixFillColor } from '../../models/matrixFillColor.model';
import { log } from '../utils/log';
import { toggleBlockingLoading } from '../../store/actions/uiActions';


const blockSquaresColor = mapConfig.blockSquareColor;

export const drawLoadedMap = () => {
  log('DRAWING_LOADED_MAP');

  const storeData = store.getState() as IStore;
  console.log('HERE1');
  store.dispatch(toggleBlockingLoading(true));
  
  const blockMatrix = deepCopy(storeData.map.blockMatrix);
  const passageMatrix = deepCopy(storeData.map.passage.matrix);
  const buildingMatrix = deepCopy(storeData.map.building.matrix);
  const decorationMatrix = deepCopy(storeData.map.decoration.matrix);
  const terrainMatrix = deepCopy(storeData.map.terrain.matrix);
  const npcMatrix = deepCopy(storeData.map.npc.matrix);
  const mobMatrix = deepCopy(storeData.map.mob.matrix);
  const seMatrix = deepCopy(storeData.map.se.matrix);
  const vertexWeightMatrix = deepCopy(storeData.map.vertex.matrix);

  // Draw block fields
  colorBasedOnMatrix(
    blockMatrix, 
    Canvas.block, 
    blockSquaresColor, 
    MatrixFillColor.barrier
  );

  // Draw passages
  colorBasedOnMatrix(
    passageMatrix, 
    Canvas.passage, 
    '', 
    MatrixFillColor.passage
  );

  // Draw buildings
  colorBasedOnMatrix(
    buildingMatrix, 
    Canvas.building, 
    '', 
    MatrixFillColor.image
  );

  // Draw decorations
  colorBasedOnMatrix(
    decorationMatrix, 
    Canvas.decoration, 
    '', 
    MatrixFillColor.image
  );

  // Draw terrain
  colorBasedOnMatrix(
    terrainMatrix, 
    Canvas.terrain, 
    '', 
    MatrixFillColor.image
  );

  // Draw NPCs
  colorBasedOnMatrix(
    npcMatrix, 
    Canvas.npc, 
    '', 
    MatrixFillColor.image
  );

  // Draw MOBs
  colorBasedOnMatrix(
    mobMatrix, 
    Canvas.mob, 
    '', 
    MatrixFillColor.image
  );

  // Draw vertex weights
  colorBasedOnMatrix(
    vertexWeightMatrix, 
    Canvas.vertexWeight,
    '', 
    MatrixFillColor.vertexWeight
  );

  // Draw se
  colorBasedOnMatrix(
    seMatrix, 
    Canvas.se,
    '', 
    MatrixFillColor.image
  );

  setTimeout(() => {
    store.dispatch(toggleBlockingLoading(false));
  }, 100);
  log('DRAWED_LOADED_MAP');
};