import { ISquareData } from "./square.interface";

export interface IPassageLocation extends ISquareData {
  destination: {
    mapTargetId: number;
    mapTargetCords: number;
  };
}
