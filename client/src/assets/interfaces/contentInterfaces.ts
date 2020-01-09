export interface Icontent {
  lang: string,
  char: Idig,
  global: Idig,
  entryPanel: Idig,
  creator: Idig,
  routes: Iroutes
  features: Idig,
  filesPanel: Idig
  help: Idig
}

interface Iroutes {
  home: string,
  creator: string,
  char: string,
  license: string,
  help: string,
  features: string
}

interface Idig {
  [key: string]: any
}