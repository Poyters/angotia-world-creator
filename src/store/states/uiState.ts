import { IUiState } from '../../interfaces/uiState.interface';


export const uiState: IUiState = {
    actionNote: [],
    select: {
        type: "none", //none, square, field, mouse
        matrix: [],
    },
    net: {
        field: true,
        square: true
    },
    language: 'en',
    statisticPanelIsOpen: false
};