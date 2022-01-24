import { IMapNetStatus } from "../../interfaces/map.interface";
import { INote } from "../../interfaces/note.interface";

export const setNotification = (notifications: INote[]) => ({
  type: "CHANGE_ACTION_NOTIFICATION",
  notifications
});

export const setMapSelectType = (selectType: string) => ({
  type: "SET_MAP_SELECT_TYPE",
  selectType
});

export const changeMapSelectMatrix = (newMatrix: Array<[]>) => ({
  type: "CHANGE_MAP_SELECT_MATRIX",
  newMatrix
});

export const setMapNets = (values: IMapNetStatus) => ({
  type: "CHANGE_MAP_NETS",
  values
});

export const changeLang = (lang: string) => ({
  type: "CHANGE_LANGUAGE",
  lang
});

export const toggleStatisticPanel = (isOpen: boolean) => ({
  type: "TOGGLE_STATISTIC_PANEL",
  isOpen
});

export const toggleErrorPanel = (isOpen: boolean) => ({
  type: "TOGGLE_ERROR_PANEL",
  isOpen
});

export const changeMapCreationErrors = (errorList: string[]) => ({
  type: "CHANGE_MAP_CREATION_ERRORS",
  errorList
});

export const changeCharCreationErrors = (errorList: string[]) => ({
  type: "CHANGE_CHAR_CREATION_ERRORS",
  errorList
});

export const toggleBlockingLoading = (blockingLoading: boolean) => ({
  type: "TOGGLE_BLOCKING_LOADING",
  blockingLoading
});
