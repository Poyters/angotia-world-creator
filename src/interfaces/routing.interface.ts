import * as H from 'history';

export interface IMatchParams {
  lang: string
  name: string
}

export interface IRouteProps<P> {
  match: Imatch<P>
  location: H.Location
  history: H.History
  staticContext?: any
}

export interface Imatch<P> {
  params: P
  isExact: boolean
  path: string
  url: string
}