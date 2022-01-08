export interface ILinkButton {
  link: string;
  buttonText: string;
}

export interface IComeBack {
  addedClass: string;
  url: string;
  description: string;
}

export interface IButton {
  name: string;
  clickEvent?: Function;
}

export interface ILoadPicBtn extends IButton {
  note?: string;
}
