import { IPoint } from './point';


export interface IRectanglePosition {
  topLeft: IPoint,
  bottomRight: IPoint
}

export interface IRect {
  startX: number,
  startY: number,
  width: number,
  height: number
}