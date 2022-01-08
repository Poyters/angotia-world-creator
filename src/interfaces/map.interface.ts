import { IContentList } from "./contentList.interface";
import { IPoint } from "./math.interface";
import { IPassageLocation } from "./passage.interface";
import { IVertexWeight } from "./vertex.interface";
import { IInternalImageData } from "./images.interface";

export type MatrixCell = number | string;
export type MapMatrix = MatrixCell[][][][];

export interface IMapSize {
  x: number;
  y: number;
}

export interface IMapNetStatus {
  field: boolean;
  square: boolean;
}

export interface IMapSizeInput {
  id: string;
  currValue: number | string;
  changeValue(value);
}

export interface IExternalMap {
  _id: string;
  combinedLayersBlob: string;
  map_name: string;
  min_entry_level: number;
  description: string;
  size: IPoint;
  map_pic: string;
  block_matrix: IContentList[];
  passage: {
    locations: IPassageLocation[];
  };
  building: IContentList[];
  decoration: IContentList[];
  terrain: IContentList[];
  npc: IContentList[];
  mob: IContentList[];
  se: IContentList[];
  vertex: {
    weights: IVertexWeight[];
  };
  visibility_range: number;
  images: IInternalImageData[];
}
