import { IPopup } from './popup.interface';


export interface IDialog {
  id: string
  npc: string
  player: IPlayer[]
  validatorFunc?: Function
  connectedDialogs?: Array<string | number>
  clearValidator?: Function
}

export interface IPlayer {
  id: string
  dialog: string
  next: string
  action: string
  condition: string
}

export interface IMonolog {
  id: string
  content: string
}

export interface INewDialog {
  label?: string
}

export interface IDialogPopup extends IPopup {
  dialogId: string
}

export interface IEditPlayerDialog extends IDialogPopup {
  playerId: string
}

export interface IMonologPopup extends IPopup {
  monologData?: IMonolog,
  setMonologData?: Function
}

export interface IMonologExplicit extends IMonolog, IPopup {
  setPopupData: Function
}

export interface IDialogs {
  type: string,
  addBtnText: string
}

export interface IPlayerDialog {
  playerId: string
}