import { CharState } from '../types/charState';
import { UiState } from '../types/uiState';
import { MapState } from '../types/mapState';


export interface IStore {
	map: MapState,
	ui: UiState,
	char: CharState,
	dispatch: Function,
	getState: Function
  }