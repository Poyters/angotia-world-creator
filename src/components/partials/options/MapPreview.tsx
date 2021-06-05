
import React from 'react';
import { Canvas } from '../../../models/canvas.model';
import { combineCanvases } from '../../../scripts/canvas/combineCanvases';

export const MapPreview = () => {
  const preview = () => {
    const layersList = [
      Canvas.subsoil,
      Canvas.building,
      Canvas.decoration
    ];

    const previewMapBlob = combineCanvases(layersList);
    console.log('previewMapBlob', previewMapBlob);
  };

  return (
    <span
      onClick={() => preview()}
    > 
      Preview
    </span>
  );
};