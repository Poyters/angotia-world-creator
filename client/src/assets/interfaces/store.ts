import { CharState } from '../types/charState';


export interface IStore {
	map: any,
	ui: any,
	char: CharState,
	dispatch: Function,
	getState: Function
  }