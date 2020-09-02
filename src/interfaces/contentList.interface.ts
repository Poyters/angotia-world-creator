export interface IContentList {
  items: IContentItem[]
  pics: any[]
}

export interface IContentItem {
  x: number
  y: number
  xShift: number
  yShift: number
  value: string | number
}

interface IContentPic {
  [key: string]: string
}