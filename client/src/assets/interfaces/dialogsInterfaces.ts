export interface IDialog {
  id: number
  npc: string
  player: IPlayer[],
  validatorFunc?: Function,
  connectedDialogs: Array<string | number>,
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

export interface INewDialog {
  label?: string
}