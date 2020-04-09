import uuid from 'uuid/v4';

export const mapState = {
    id: uuid(),
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
        matrix: [],
        dialogs: {}
    },
    mob: {
        matrix: [],
        types: {}
    },
    vertex: {
        matrix: [],
        weights: []
    },
    visibilityRange: 8
};