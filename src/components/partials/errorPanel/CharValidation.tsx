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
           Level be larger than { rules.level.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxLevel) ? (
          <li>
           Level be smaller than { rules.level.max}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerLevel) ? (
          <li>
           Level is an invalid number
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minHealth) ? (
          <li>
           Health be larger than { rules.health.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxHealth) ? (
          <li>
           Health be smaller than { rules.health.max}
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
           Attack be larger than { rules.attack.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxAttack) ? (
          <li>
           Attack be smaller than { rules.attack.max}
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
           Defence be larger than { rules.defence.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxDefence) ? (
          <li>
           Defence be smaller than { rules.defence.max}
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
           Strength be larger than { rules.strength.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxStrength) ? (
          <li>
           Strength be smaller than { rules.strength.max}
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
           Dexterity be larger than { rules.dexterity.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxDexterity) ? (
          <li>
           Dexterity be smaller than { rules.dexterity.max}
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
        charErrors.includes(CharCreationError.minDexterity) ? (
          <li>
           Inteligence be larger than { rules.inteligence.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxDexterity) ? (
          <li>
           Inteligence be smaller than { rules.inteligence.max}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerDexterity) ? (
          <li>
           Inteligence is an invalid number
          </li>
        ) : null
      }
      
    </>
  );
};