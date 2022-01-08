import uuid from "uuid/v4";
import { IMapState } from "../../interfaces/mapState.interface";

export const mapState: IMapState = {
  id: "",
  internalId: uuid(),
  mapName: "board name",
  minEntryLevel: 0,
  description: "Example map description",
  size: {
    x: 12,
    y: 12
  },
  mapPic: "",
  blockMatrix: [],
  passage: {
    locations: [],
    matrix: []
  },
  building: {
    matrix: []
  },
  decoration: {
    matrix: []
  },
  terrain: {
    matrix: []
  },
  npc: {
    matrix: []
  },
  mob: {
    matrix: []
  },
  se: {
    matrix: []
  },
  vertex: {
    matrix: [],
    weights: []
  },
  visibilityRange: 8,
  images: []
};
