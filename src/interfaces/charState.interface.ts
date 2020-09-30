import { IMonolog, IDialog, IPlayer } from './dialogs.interface';
import { ICharStatistic, ICharSettings } from './char.interface';


export interface ICharState {
    name: string
    id?: string
    internalId: string
    fieldDiameter: number
    mobRange: string
    type: string
    choosed: string
    monologs: IMonolog[]
    dialogs: IDialog[]
    temponaryPlayerDialogs?: IPlayer[]
    isAgressiveMob: boolean
    hasVisibleLevel: boolean
    charPic: string
    statistics: ICharStatistic
    settings: ICharSettings
}