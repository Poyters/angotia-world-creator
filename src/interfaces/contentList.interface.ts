export interface IContentList {
  items: IContentItem[];
  pics: IContentPic[];
}

export interface IContentItem {
  x: number;
  y: number;
  xShift: number;
  yShift: number;
  value: string | number;
}

export interface IContentPic {
  id?: string;
  _id?: string;
  blob: string;
}
