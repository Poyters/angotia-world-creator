import { IPoint } from "./math.interface";
import { IPassageLocation } from "./passage.interface";
import { IVertexWeight } from "./vertex.interface";
import { IInternalImageData } from "./images.interface";

export interface IMapState {
  id?: string;
  internalId: string;
  mapName: string;
  minEntryLevel: number;
  description: string;
  size: IPoint;
  mapPic: string;
  blockMatrix: any[];
  passage: {
    locations: IPassageLocation[];
    matrix: any[];
  };
  building: {
    matrix: any[];
  };
  decoration: {
    matrix: any[];
  };
  terrain: {
    matrix: any[];
  };
  npc: {
    matrix: any[];
  };
  mob: {
    matrix: any[];
  };
  se: {
    matrix: any[];
  };
  vertex: {
    matrix: any[];
    weights: IVertexWeight[];
  };
  visibilityRange: number;
  images: IInternalImageData[];
}
