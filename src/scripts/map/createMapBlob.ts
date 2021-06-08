import { store } from '../../index';
import { IStore } from '../../interfaces/store.interface';
import { Canvas } from '../../models/canvas.model';
import { combineCanvases } from '../canvas/combineCanvases';
import mapConfig from '../../assets/configs/map.config.json';
import { createAnImageSafely } from '../draw/makeImage';
import { deepCopy } from '../utils/deepCopy';
import { log } from '../utils/log';

export const createMapBlob = async () => {
  log('CREATING_MAP_BLOB');

  const storeData = store.getState() as IStore;
  const bgImage = await createAnImageSafely(storeData.map.mapPic);

  const layersList = [
    Canvas.subsoil,
    Canvas.building,
    Canvas.decoration
  ];

  const mapSize = deepCopy(storeData.map.size);
  mapSize.x = mapSize.x * mapConfig.map.fieldSize;
  mapSize.y = mapSize.y * mapConfig.map.fieldSize;

  const combinedLayers = combineCanvases(layersList, mapSize);
  const combinedLayersImage = await createAnImageSafely(combinedLayers);

  const mapCanvas = document.createElement('canvas');
  mapCanvas.width = mapSize.x;
  mapCanvas.height = mapSize.y;
  const mapCtx = mapCanvas.getContext('2d');

  if (bgImage) mapCtx?.drawImage(bgImage, 0, 0);
  if (combinedLayersImage) mapCtx?.drawImage(combinedLayersImage, 0, 0);

  log('CREATED_MAP_BLOB');

  return mapCanvas.toDataURL();
};