export interface IDialog {
  id: number
  npc: string
  player: IPlayer[],
  validatorFunc?: Function,
  connectedDialogs: any[],
  clearValidator?: Function
}

export interface IPlayer {
  id: number,
  dialog: string,
  next: number | string,
  action: null | Function
}

export interface IMonolog {
  id: number,
  content: string
}