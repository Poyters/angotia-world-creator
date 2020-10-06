import React from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '../../../interfaces/store.interface';
import { CharCreationError } from '../../../models/charCreationError.model';
import errorSystemConfig from '../../../assets/configs/errorSystem.config.json';


export const CharValidation: React.FC = () => {
  const charErrors: string[] = useSelector((state: IStore) => state.ui.charCreationErrors);
  const rules = errorSystemConfig.char;

  return (
    <>
      {
        charErrors.includes(CharCreationError.minNameLength) ? (
          <li>
            Char name must be larger than { rules.name.length.min} characters
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxNameLength) ? (
          <li>
            Char name must be smaller than { rules.name.length.max} characters
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minLevel) ? (
          <li>
           Level must be larger than { rules.level.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxLevel) ? (
          <li>
           Level must be smaller than { rules.level.max}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerLevel) ? (
          <li>
           Level must is an invalid number
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minHealth) ? (
          <li>
           Health must be larger than { rules.health.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxHealth) ? (
          <li>
           Health must be smaller than { rules.health.max}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerHealth) ? (
          <li>
           Health is an invalid number
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minAttack) ? (
          <li>
           Attack must be larger than { rules.attack.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxAttack) ? (
          <li>
           Attack must be smaller than { rules.attack.max}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerAttack) ? (
          <li>
           Attack is an invalid number
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minDefence) ? (
          <li>
           Defence must be larger than { rules.defence.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxDefence) ? (
          <li>
           Defence must be smaller than { rules.defence.max}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerDefence) ? (
          <li>
           Defence is an invalid number
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minStrength) ? (
          <li>
           Strength must be larger than { rules.strength.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxStrength) ? (
          <li>
           Strength must be smaller than { rules.strength.max}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerStrength) ? (
          <li>
           Strength is an invalid number
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minDexterity) ? (
          <li>
           Dexterity must be larger than { rules.dexterity.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxDexterity) ? (
          <li>
           Dexterity must be smaller than { rules.dexterity.max}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerDexterity) ? (
          <li>
           Dexterity is an invalid number
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minInteligence) ? (
          <li>
           Inteligence must be larger than { rules.inteligence.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxInteligence) ? (
          <li>
           Inteligence must be smaller than { rules.inteligence.max}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerInteligence) ? (
          <li>
           Inteligence is an invalid number
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minJink) ? (
          <li>
           Jink must be larger than { rules.jink.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxJink) ? (
          <li>
           Jink must be smaller than { rules.jink.max}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerJink) ? (
          <li>
           Jink is an invalid number
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minTimeOfOccuranceMin) ? (
          <li>
           Time of occurance min must be larger than { rules.timeOfOccurance.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxTimeOfOccuranceMin) ? (
          <li>
           Time of occurance min must be smaller than { rules.timeOfOccurance.max}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minTimeOfOccuranceMax) ? (
          <li>
           Time of occurance max must be larger than { rules.timeOfOccurance.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxTimeOfOccuranceMax) ? (
          <li>
           Time of occurance max must be smaller than { rules.timeOfOccurance.max}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minMaxTimeOfOccurance) ? (
          <li>
           Time of occurance min value must be smaller than max value
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerTimeOfOccuranceMin) ? (
          <li>
           Time of occurance min is an invalid number
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerTimeOfOccuranceMax) ? (
          <li>
           Time of occurance max is an invalid number
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minRespTimeMin) ? (
          <li>
           Resp time min must be larger than { rules.respTime.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxRespTimeMin) ? (
          <li>
           Resp time min must be smaller than { rules.respTime.max}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minRespTimeMax) ? (
          <li>
           Resp time max must be larger than { rules.respTime.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxRespTimeMax) ? (
          <li>
           Resp time max must be smaller than { rules.respTime.max}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minMaxRespTime) ? (
          <li>
           Resp time min value must be smaller than max value
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerRespTimeMin) ? (
          <li>
           Resp time min is an invalid number
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerRespTimeMax) ? (
          <li>
           Resp time max is an invalid number
          </li>
        ) : null
      }
      
    </>
  );
};