export interface IUiState {
    actionNote: string[]
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
}