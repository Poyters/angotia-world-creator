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
    </>
  );
};