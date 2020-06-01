import { UiState } from '../../assets/types/uiState';


export const uiState: UiState = {
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