import React from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '../../../interfaces/store.interface';
import { CharCreationError } from '../../../models/charCreationError.model';
import errorSystemConfig from '../../../assets/configs/errorSystem.config.json';


export const MapValidation: React.FC = () => {
  const charErrors: string[] = useSelector((state: IStore) => state.ui.charCreationErrors);
  const rules = errorSystemConfig.char;

  return (
    <>
      {
        charErrors.includes(CharCreationError.minNameLength) ? (
          <li>
            Entry level must be larger than { rules.name.length.min} characters
          </li>
        ) : null
      }
      {
        charErrors.includes(CharCreationError.maxNameLength) ? (
          <li>
            Entry level must be smaller than { rules.name.length.max} characters
          </li>
        ) : null
      }
    </>
  );
};