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
            { t('map:validation.minDexterity', { min: rules.dexterity.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxDexterity) ? (
          <li>
            { t('map:validation.maxDexterity', { max: rules.dexterity.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerDexterity) ? (
          <li>
            { t('map:validation.isIntegerDexterity') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minInteligence) ? (
          <li>
            { t('map:validation.minInteligence', { min: rules.inteligence.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxInteligence) ? (
          <li>
            { t('map:validation.maxInteligence', { max: rules.inteligence.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerInteligence) ? (
          <li>
            { t('map:validation.isIntegerInteligence') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minJink) ? (
          <li>
            { t('map:validation.minJink', { min: rules.jink.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxJink) ? (
          <li>
            { t('map:validation.maxJink', { max: rules.jink.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerJink) ? (
          <li>
            { t('map:validation.isIntegerJink') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minAttackSpeed) ? (
          <li>
            { t('map:validation.minAttackSpeed', { min: rules.attackSpeed.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxAttackSpeed) ? (
          <li>
            { t('map:validation.maxAttackSpeed', { max: rules.attackSpeed.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerAttackSpeed) ? (
          <li>
            { t('map:validation.isIntegerAttackSpeed') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minTimeOfOccuranceMin) ? (
          <li>
            { t('map:validation.minTimeOfOccuranceMin', { min: rules.timeOfOccurance.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxTimeOfOccuranceMin) ? (
          <li>
            { t('map:validation.maxTimeOfOccuranceMin', { max: rules.timeOfOccurance.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minTimeOfOccuranceMax) ? (
          <li>
            { t('map:validation.maxTimeOfOccuranceMin', { min: rules.timeOfOccurance.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxTimeOfOccuranceMax) ? (
          <li>
            { t('map:validation.maxTimeOfOccuranceMax', { max: rules.timeOfOccurance.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minMaxTimeOfOccurance) ? (
          <li>
            { t('map:validation.maxTimeOfOccuranceMax') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerTimeOfOccuranceMin) ? (
          <li>
            { t('map:validation.isIntegerTimeOfOccuranceMin') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerTimeOfOccuranceMax) ? (
          <li>
            { t('map:validation.isIntegerTimeOfOccuranceMax') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minRespTimeMin) ? (
          <li>
            { t('map:validation.minRespTimeMin', { min: rules.respTime.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxRespTimeMin) ? (
          <li>
            { t('map:validation.maxRespTimeMin', { max: rules.respTime.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minRespTimeMax) ? (
          <li>
            { t('map:validation.minRespTimeMax', { min: rules.respTime.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxRespTimeMax) ? (
          <li>
            { t('map:validation.maxRespTimeMax', { max: rules.respTime.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minMaxRespTime) ? (
          <li>
            { t('map:validation.minMaxRespTime') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerRespTimeMin) ? (
          <li>
            { t('map:validation.isIntegerRespTimeMin') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerRespTimeMax) ? (
          <li>
            { t('map:validation.isIntegerRespTimeMax') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isCharPic) ? (
          <li>
            { t('map:validation.isCharPic') }
          </li>
        ) : null
      }
      
    </>
  );
};