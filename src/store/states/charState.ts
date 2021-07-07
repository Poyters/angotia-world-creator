import uuid from 'uuid/v4';
import { ICharState } from '../../interfaces/charState.interface';
import { CharType } from '../../models/charType.model';
import { CharMoveType } from '../../models/charMoveType.model';


export const charState: ICharState = {
    name: 'Char name',
    id: '',
    internalId: uuid(),
    fieldDiameter: 0,
    type: CharMoveType.static,
    choosed: CharType.npc,
    mobRange: '',
    monologs: [],
    dialogs: [],
    temponaryPlayerDialogs: [],
    isMobAggressive: false,
    hasVisibleLevel: true,
    charPic: '',
    statistics: {
      level: 1,
      health: 1000,
      attack: 1,
      defence: 1,
      strength: 1,
      dexterity: 1,
      inteligence: 1,
      jink: 1,
      speed: 1,
      attackRange: 1,
      attackSpeed: 100
    },
    settings: {
      timeOfOccurance: {
        min: 0,
        max: 24
      },
      respTime: {
        min: 60,
        max: 130
      }
    }
  };