import { ISquareData } from './square';

export interface IPassageLocation extends ISquareData {
    destination: {
        mapTargetId: number,
        mapTargetCords: number
    }
}