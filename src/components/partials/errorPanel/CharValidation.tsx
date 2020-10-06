import React from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '../../../interfaces/store.interface';
import { MapCreationError } from '../../../models/mapCreationError.model';
import errorSystemConfig from '../../../assets/configs/errorSystem.config.json';


export const MapValidation: React.FC = () => {
  const mapErrors: string[] = useSelector((state: IStore) => state.ui.mapCreationErrors);
  const rules = errorSystemConfig.map;

  return (
    <>
      {
        mapErrors.includes(MapCreationError.minEntryLevel) ? (
          <li>
            Entry level must be larger than { rules.entryLevel.min}
          </li>
        ) : null
      }
      {
        mapErrors.includes(MapCreationError.maxEntryLevel) ? (
          <li>
            Entry level must be smaller than { rules.entryLevel.max}
          </li>
        ) : null
      }
      {
        mapErrors.includes(MapCreationError.minDescriptionLength) ? (
          <li>
            Description must be larger than { rules.description.length.min} characters
          </li>
        ) : null
      }
      {
        mapErrors.includes(MapCreationError.maxDescriptionLength) ? (
          <li>
            Description must be smaller than { rules.description.length.max} characters
          </li>
        ) : null
      }
      {
        mapErrors.includes(MapCreationError.minMapLength) ? (
          <li>
            Map name must be larger than { rules.name.length.min}  characters
          </li>
        ) : null
      }
      {
        mapErrors.includes(MapCreationError.maxMapLength) ? (
          <li>
            Map name must be smaller than { rules.name.length.max} characters
          </li>
        ) : null
      }
      {
        mapErrors.includes(MapCreationError.maxBlockQuantity) ? (
          <li>
            Too much block squares. Max 1 per { rules.block.quantity.max} squares
          </li>
        ) : null
      }
      {
        mapErrors.includes(MapCreationError.maxPassageQuantity) ? (
          <li>
            Too much passage squares. Max 1 per { rules.passage.quantity.max} squares
          </li>
        ) : null
      }
      {
        mapErrors.includes(MapCreationError.maxSeQuantity) ? (
          <li>
            Too much se squares. Max 1 per { rules.se.quantity.max} squares
          </li>
        ) : null
      }
      {
        mapErrors.includes(MapCreationError.maxNpcQuantity) ? (
          <li>
            Too much npcs squares. Max 1 per { rules.npc.quantity.max} squares
          </li>
        ) : null
      }
      {
        mapErrors.includes(MapCreationError.maxMobQuantity) ? (
          <li>
            Too much mobs squares. Max 1 per { rules.mob.quantity.max} squares
          </li>
        ) : null
      }
    </>
  );
};