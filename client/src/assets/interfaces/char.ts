import { IMinMaxField } from './math';


export interface ICharStatistic {
  level: number,
  health: number,
  attack: number,
  defence: number,
  strength: number,
  dexterity: number,
  inteligence: number,
  jink: number,
  speed: number,
  attackRange: number
}

export interface ICharSettings {
  timeOfOccurance: IMinMaxField,
  respTime: IMinMaxField
}