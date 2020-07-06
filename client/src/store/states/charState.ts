import uuid from 'uuid/v4';
import { CharState } from '../../assets/types/charState';


export const charState: CharState = {
    name: '',
    id: '',
    internalId: uuid(),
    fieldDiameter: 0,
    type: '',
    choosed: '',
    moveType: '',
    mobRange: '',
    monologs: [],
    dialogs: [],
    temponaryPlayerDialogs: [],
    isAgressiveMob: false,
    hasVisibleLevel: true,
    charPic: '',
    statistics: {
      level: 1,
      health: 1000,
      attack: 0,
      defence: 0,
      strength: 0,
      dexterity: 0,
      inteligence: 0,
      jink: 0,
      speed: 0,
      attackRange: 0,
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