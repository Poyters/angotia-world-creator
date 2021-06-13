/* eslint-disable max-lines */
import React from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '../../../interfaces/store.interface';
import { CharCreationError } from '../../../models/charCreationError.model';
import errorSystemConfig from '../../../assets/configs/errorSystem.config.json';
import { useTranslation } from 'react-i18next';


export const CharValidation: React.FC = () => {
  const charErrors: string[] = useSelector((state: IStore) => state.ui.charCreationErrors);
  const rules = errorSystemConfig.char;
  const { t } = useTranslation(['map']);

  return (
    <>
      {
        charErrors.includes(CharCreationError.minNameLength) ? (
          <li>
            { t('map:validation.minNameLength', { min: rules.name.length.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxNameLength) ? (
          <li>
            { t('map:validation.maxNameLength', { max: rules.name.length.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minLevel) ? (
          <li>
            { t('map:validation.minLevel', { min: rules.level.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxLevel) ? (
          <li>
            { t('map:validation.maxLevel', { max: rules.level.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerLevel) ? (
          <li>
            { t('map:validation.isIntegerLevel') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minHealth) ? (
          <li>
            { t('map:validation.minHealth', { min: rules.health.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxHealth) ? (
          <li>
            { t('map:validation.maxHealth', { max: rules.health.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerHealth) ? (
          <li>
            { t('map:validation.isIntegerHealth') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minAttack) ? (
          <li>
            { t('map:validation.minAttack', { min: rules.attack.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxAttack) ? (
          <li>
            { t('map:validation.maxAttack', { max: rules.attack.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerAttack) ? (
          <li>
            { t('map:validation.isIntegerAttack') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minDefence) ? (
          <li>
            { t('map:validation.minDefence', { min: rules.defence.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxDefence) ? (
          <li>
            { t('map:validation.maxDefence', { max: rules.defence.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerDefence) ? (
          <li>
            { t('map:validation.isIntegerDefence') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minStrength) ? (
          <li>
            { t('map:validation.minStrength', { min: rules.strength.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxStrength) ? (
          <li>
            { t('map:validation.maxStrength', { max: rules.strength.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerStrength) ? (
          <li>
            { t('map:validation.isIntegerStrength') }
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
        charErrors.includes(CharCreationError.minAttackSpeed) ? (
          <li>
           Attack speed must be larger than { rules.attackSpeed.min}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxAttackSpeed) ? (
          <li>
            Attack speed must be smaller than { rules.attackSpeed.max}
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerAttackSpeed) ? (
          <li>
            Attack speed is an invalid number
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
      {
        charErrors.includes(CharCreationError.isCharPic) ? (
          <li>
           Character sprite is required
          </li>
        ) : null
      }
      
    </>
  );
};