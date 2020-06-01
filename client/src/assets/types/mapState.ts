import { IPoint } from '../interfaces/math';
import { IPassageLocation } from '../interfaces/passage';
import { IVertexWeight } from '../interfaces/vertex';


export type MapState = {
    id: string
    mapName: string,
    minEntryLevel: number,
    description: string,
    size: IPoint,
    mapPic: string,
    blockMatrix: any[],
    passage: {
        locations: IPassageLocation[],
        matrix: any[]
    },
    building: {
        matrix: any[]
    },
    decoration: {
        matrix: any[]
    },
    subsoil: {
        matrix: any[]
    },
    npc: {
        matrix: any[]
    },
    mob: {
        matrix: any[]
    },
    se: {
        matrix: any[]
    },
    vertex: {
        matrix: any[],
        weights: IVertexWeight[]
    },
    visibilityRange: number
};