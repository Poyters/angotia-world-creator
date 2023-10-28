import { ICharState } from "./charState.interface";
import { IUiState } from "./uiState.interface";
import { IMapState } from "./mapState.interface";

export interface IStore {
  map: IMapState;
  ui: IUiState;
  char: ICharState;
  dispatch: Function;
  getState: Function;
}
