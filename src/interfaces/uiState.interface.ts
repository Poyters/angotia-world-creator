import { INote } from './note.interface';

export interface IUiState {
    actionNote: INote[]
    select: {
        type: string
        matrix: any[]
    },
    net: {
        field: boolean
        square: boolean
    },
    language: string
    statisticPanelIsOpen: boolean
    errorPanelIsOpen: boolean
    mapCreationErrors: string[]
    charCreationErrors: string[]
    blockingLoading: boolean
}