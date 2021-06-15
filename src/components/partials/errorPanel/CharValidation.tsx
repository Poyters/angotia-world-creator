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
  const { t } = useTranslation(['char']);

  return (
    <>
      {
        charErrors.includes(CharCreationError.minNameLength) ? (
          <li>
            { t('char:validation.minNameLength', { min: rules.name.length.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxNameLength) ? (
          <li>
            { t('char:validation.maxNameLength', { max: rules.name.length.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minLevel) ? (
          <li>
            { t('char:validation.minLevel', { min: rules.level.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxLevel) ? (
          <li>
            { t('char:validation.maxLevel', { max: rules.level.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerLevel) ? (
          <li>
            { t('char:validation.isIntegerLevel') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minHealth) ? (
          <li>
            { t('char:validation.minHealth', { min: rules.health.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxHealth) ? (
          <li>
            { t('char:validation.maxHealth', { max: rules.health.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerHealth) ? (
          <li>
            { t('char:validation.isIntegerHealth') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minAttack) ? (
          <li>
            { t('char:validation.minAttack', { min: rules.attack.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxAttack) ? (
          <li>
            { t('char:validation.maxAttack', { max: rules.attack.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerAttack) ? (
          <li>
            { t('char:validation.isIntegerAttack') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minDefence) ? (
          <li>
            { t('char:validation.minDefence', { min: rules.defence.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxDefence) ? (
          <li>
            { t('char:validation.maxDefence', { max: rules.defence.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerDefence) ? (
          <li>
            { t('char:validation.isIntegerDefence') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minStrength) ? (
          <li>
            { t('char:validation.minStrength', { min: rules.strength.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxStrength) ? (
          <li>
            { t('char:validation.maxStrength', { max: rules.strength.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerStrength) ? (
          <li>
            { t('char:validation.isIntegerStrength') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minDexterity) ? (
          <li>
            { t('char:validation.minDexterity', { min: rules.dexterity.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxDexterity) ? (
          <li>
            { t('char:validation.maxDexterity', { max: rules.dexterity.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerDexterity) ? (
          <li>
            { t('char:validation.isIntegerDexterity') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minInteligence) ? (
          <li>
            { t('char:validation.minInteligence', { min: rules.inteligence.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxInteligence) ? (
          <li>
            { t('char:validation.maxInteligence', { max: rules.inteligence.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerInteligence) ? (
          <li>
            { t('char:validation.isIntegerInteligence') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minJink) ? (
          <li>
            { t('char:validation.minJink', { min: rules.jink.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxJink) ? (
          <li>
            { t('char:validation.maxJink', { max: rules.jink.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerJink) ? (
          <li>
            { t('char:validation.isIntegerJink') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minAttackSpeed) ? (
          <li>
            { t('char:validation.minAttackSpeed', { min: rules.attackSpeed.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxAttackSpeed) ? (
          <li>
            { t('char:validation.maxAttackSpeed', { max: rules.attackSpeed.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerAttackSpeed) ? (
          <li>
            { t('char:validation.isIntegerAttackSpeed') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minTimeOfOccuranceMin) ? (
          <li>
            { t('char:validation.minTimeOfOccuranceMin', { min: rules.timeOfOccurance.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxTimeOfOccuranceMin) ? (
          <li>
            { t('char:validation.maxTimeOfOccuranceMin', { max: rules.timeOfOccurance.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minTimeOfOccuranceMax) ? (
          <li>
            { t('char:validation.maxTimeOfOccuranceMin', { min: rules.timeOfOccurance.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxTimeOfOccuranceMax) ? (
          <li>
            { t('char:validation.maxTimeOfOccuranceMax', { max: rules.timeOfOccurance.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minMaxTimeOfOccurance) ? (
          <li>
            { t('char:validation.maxTimeOfOccuranceMax') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerTimeOfOccuranceMin) ? (
          <li>
            { t('char:validation.isIntegerTimeOfOccuranceMin') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerTimeOfOccuranceMax) ? (
          <li>
            { t('char:validation.isIntegerTimeOfOccuranceMax') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minRespTimeMin) ? (
          <li>
            { t('char:validation.minRespTimeMin', { min: rules.respTime.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxRespTimeMin) ? (
          <li>
            { t('char:validation.maxRespTimeMin', { max: rules.respTime.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minRespTimeMax) ? (
          <li>
            { t('char:validation.minRespTimeMax', { min: rules.respTime.min }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxRespTimeMax) ? (
          <li>
            { t('char:validation.maxRespTimeMax', { max: rules.respTime.max }) }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.minMaxRespTime) ? (
          <li>
            { t('char:validation.minMaxRespTime') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerRespTimeMin) ? (
          <li>
            { t('char:validation.isIntegerRespTimeMin') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isIntegerRespTimeMax) ? (
          <li>
            { t('char:validation.isIntegerRespTimeMax') }
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.isCharPic) ? (
          <li>
            { t('char:validation.isCharPic') }
          </li>
        ) : null
      }
      
    </>
  );
};