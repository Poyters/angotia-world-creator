import { ISquareData } from './squareInterfaces';

export interface IPassageLocation extends ISquareData {
    destination: {
        mapTargetId: number,
        mapTargetCords: number
    }
}