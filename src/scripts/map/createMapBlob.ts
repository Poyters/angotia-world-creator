import { store } from '../../index';
import { IStore } from '../../interfaces/store.interface';
import { Canvas } from '../../models/canvas.model';
import { combineCanvases } from '../canvas/combineCanvases';
import mapConfig from '../../assets/configs/map.config.json';
import { createAnImageSafely } from '../draw/makeImage';
import { deepCopy } from '../utils/deepCopy';

export const createMapBlob = async () => {
  const storeData = store.getState() as IStore;
  const bgImage = await createAnImageSafely(storeData.map.mapPic);

  const layersList = [
    Canvas.subsoil,
    Canvas.building,
    Canvas.decoration
  ];

  
  const mapSize = deepCopy(storeData.map.size);
  console.log('sizes', mapSize.x, mapConfig.map.fieldSize);
  mapSize.x = mapSize.x * mapConfig.map.fieldSize;
  mapSize.y = mapSize.y * mapConfig.map.fieldSize;
  console.log('mapSize', mapSize);

  const combinedLayers = combineCanvases(layersList, mapSize);
  console.log('combinedLayers', combinedLayers);
  const combinedLayersImage = await createAnImageSafely(combinedLayers);
  console.log('combinedLayersImage', combinedLayersImage);

  const mapCanvas = document.createElement('canvas');
  mapCanvas.width = mapSize.x;
  mapCanvas.height = mapSize.y;
  const mapCtx = mapCanvas.getContext('2d');

  if (bgImage) mapCtx?.drawImage(bgImage, 0, 0);
  if (combinedLayersImage) mapCtx?.drawImage(combinedLayersImage, 0, 0);

  return mapCanvas.toDataURL();
};