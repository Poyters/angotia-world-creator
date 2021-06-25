import { IMinMaxField } from './math.interface';
import { IExternalMonolog, IExternalDialog } from './dialogs.interface';

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
  attackRange: number,
  attackSpeed: number
}

export interface ICharSettings {
  timeOfOccurance: IMinMaxField,
  respTime: IMinMaxField
}

interface IExternalCharSettings {
  time_of_occurance: IMinMaxField,
  resp_time: IMinMaxField
}

interface IExternalCharStatistic {
  level: number,
  health: number,
  attack: number,
  defence: number,
  strength: number,
  dexterity: number,
  inteligence: number,
  jink: number,
  speed: number,
  attack_range: number,
  attack_speed: number
}
export interface IExternalChar {
    name: string
    _id: string
    field_diameter: number
    mobRange: string
    type: string
    choosed: string
    monologs: IExternalMonolog[]
    dialogs: IExternalDialog[]
    is_agressive_mob: boolean
    has_visible_level: boolean
    char_pic: string
    statistics: IExternalCharStatistic
    settings: IExternalCharSettings
}