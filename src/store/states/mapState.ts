import uuid from 'uuid/v4';
import { MapState } from '../../assets/types/mapState';


export const mapState: MapState = {
    id: '',
    internalId: uuid(),
    mapName: 'board name',
    minEntryLevel: 0,
    description: '',
    size: {
        x: 8,
        y: 8
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
    subsoil: {
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
    visibilityRange: 8
};