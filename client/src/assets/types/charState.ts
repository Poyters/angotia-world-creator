import { IMonolog, IDialog, IPlayer } from '../interfaces/dialogs';
import { ICharStatistic, ICharSettings } from '../interfaces/char';


export type CharState = {
    name: string,
    id: string,
    fieldDiameter: number,
    type: string,
    choosed: string,
    moveType: string,
    monologs: IMonolog[],
    dialogs: IDialog[],
    temponaryPlayerDialogs: IPlayer[],
    isAgressiveMob: boolean,
    hasVisibleLevel: boolean,
    charPic: string,
    statistics: ICharStatistic,
    settings: ICharSettings
}