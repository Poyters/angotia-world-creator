export interface Icontent {
  lang: string;
  char: IDig;
  global: IDig;
  entryPanel: IDig;
  creator: IDig;
  routes: IRoutes;
  features: IDig;
  filesPanel: IDig;
  help: IDig;
  notifications: IDig;
  menu: IDig;
}

interface IRoutes {
  home: string;
  creator: string;
  char: string;
  license: string;
  help: string;
  features: string;
  mapCreationRules: string;
}

interface IDig {
  [key: string]: any;
}
