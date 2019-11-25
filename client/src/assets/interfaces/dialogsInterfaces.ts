export interface IDialog {
  id: number
  npc: string
  player: IPlayer[]
}

export interface IPlayer {
  id: number,
  dialog: string,
  next: number | string,
  action: null | Function
}