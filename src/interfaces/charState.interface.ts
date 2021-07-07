import { IMonolog, IDialog, IPlayer } from './dialogs.interface';
import { ICharStatistic, ICharSettings } from './char.interface';


export interface ICharState {
    name: string
    id?: string
    internalId: string
    fieldDiameter: number
    mobRange: string
    moveType: string
    choosed: string
    monologs: IMonolog[]
    dialogs: IDialog[]
    temponaryPlayerDialogs?: IPlayer[]
    isMobAggressive: boolean
    hasVisibleLevel: boolean
    charPic: string
    statistics: ICharStatistic
    settings: ICharSettings
}