export interface IDialog {
  id: string
  npc: string
  player: IPlayer[],
  validatorFunc?: Function,
  connectedDialogs: Array<string | number>,
  clearValidator?: Function
}

export interface IPlayer {
  id: string,
  dialog: string,
  next: number | string,
  action: string,
  condition: string
}

export interface IMonolog {
  id: string,
  content: string
}

export interface INewDialog {
  label?: string
}