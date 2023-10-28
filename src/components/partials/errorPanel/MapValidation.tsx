import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../../interfaces/store.interface";
import { MapCreationError } from "../../../models/mapCreationError.model";
import errorSystemConfig from "../../../assets/configs/errorSystem.config.json";
import { useTranslation } from "react-i18next";

export const MapValidation: React.FC = () => {
  const mapErrors: string[] = useSelector(
    (state: IStore) => state.ui.mapCreationErrors
  );
  const rules = errorSystemConfig.map;
  const { t } = useTranslation(["map"]);

  return (
    <>
      {mapErrors.includes(MapCreationError.minEntryLevel) ? (
        <li>
          {t("map:validation.minEntryLvl", { min: rules.entryLevel.min })}
        </li>
      ) : null}
      {mapErrors.includes(MapCreationError.maxEntryLevel) ? (
        <li>
          {t("map:validation.minEntryLvl", { max: rules.entryLevel.max })}
        </li>
      ) : null}
      {mapErrors.includes(MapCreationError.minDescriptionLength) ? (
        <li>
          {t("map:validation.minDescription", {
            min: rules.description.length.min
          })}
        </li>
      ) : null}
      {mapErrors.includes(MapCreationError.maxDescriptionLength) ? (
        <li>
          {t("map:validation.maxDescription", {
            max: rules.description.length.max
          })}
        </li>
      ) : null}
      {mapErrors.includes(MapCreationError.minMapLength) ? (
        <li>{t("map:validation.minName", { min: rules.name.length.min })}</li>
      ) : null}
      {mapErrors.includes(MapCreationError.maxMapLength) ? (
        <li>{t("map:validation.maxName", { max: rules.name.length.max })}</li>
      ) : null}
      {mapErrors.includes(MapCreationError.maxBlockQuantity) ? (
        <li>
          {t("map:validation.maxBlockQuantity", {
            max: rules.block.quantity.max
          })}
        </li>
      ) : null}
      {mapErrors.includes(MapCreationError.maxPassageQuantity) ? (
        <li>
          {t("map:validation.maxPassageQuantity", {
            max: rules.passage.quantity.max
          })}
        </li>
      ) : null}
      {mapErrors.includes(MapCreationError.maxSeQuantity) ? (
        <li>
          {t("map:validation.maxSeQuantity", { max: rules.se.quantity.max })}
        </li>
      ) : null}
      {mapErrors.includes(MapCreationError.maxNpcQuantity) ? (
        <li>
          {t("map:validation.maxNpcQuantity", { max: rules.npc.quantity.max })}
        </li>
      ) : null}
      {mapErrors.includes(MapCreationError.maxMobQuantity) ? (
        <li>
          {t("map:validation.maxMobQuantity", { max: rules.mob.quantity.max })}
        </li>
      ) : null}
    </>
  );
};
