import { IMapNetStatus } from '../../assets/interfaces/map';


export const setNotification = (notifications: string[]) => ({
    type: 'CHANGE_ACTION_NOTIFICATION',
    notifications
});

export const setMapSelectType = (selectType: string) => ({
    type: 'SET_MAP_SELECT_TYPE',
    selectType
});

export const changeMapSelectMatrix = (newMatrix: Array<[]>) => ({
    type: 'CHANGE_MAP_SELECT_MATRIX',
    newMatrix
});

export const setMapNets = (values: IMapNetStatus) => ({
    type: 'CHANGE_MAP_NETS',
    values
});

export const changeLang = (lang: string) => ({
    type: 'CHANGE_LANGUAGE',
    lang
});

export const toggleStatisticPanel = (isOpen: boolean) => ({
    type: 'TOGGLE_STATISTIC_PANEL',
    isOpen
});
