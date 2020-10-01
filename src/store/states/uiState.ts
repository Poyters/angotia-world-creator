import { IUiState } from '../../interfaces/uiState.interface';
import { SelectType } from '../../models/selectType.model';


export const uiState: IUiState = {
    actionNote: [],
    select: {
        type: SelectType.none, //none, square, field, mouse
        matrix: [],
    },
    net: {
        field: true,
        square: true
    },
    language: 'en',
    statisticPanelIsOpen: false
};