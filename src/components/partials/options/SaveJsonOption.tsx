/* eslint-disable no-case-declarations */
import React from "react";
import { useSelector } from "react-redux";
import { saveFile } from "../../../scripts/files/saveFile";
import { IStore } from "../../../interfaces/store.interface";
import { prepareExternalCharData } from "../../../scripts/parsers/prepareExternalCharData";
import { prepareExternalMapData } from "../../../scripts/parsers/prepareExternalMapData";
import { addNotification } from "../../../scripts/utils/notifications";
import { Notification } from "../../../models/notification.model";
import { AppModules } from "../../../models/appModules.model";
import { IApp } from "../../../interfaces/app.inteface";
import { useTranslation } from "react-i18next";

export const SaveJsonOption = ({ moduleType }: IApp) => {
  const mapData = useSelector((state: IStore) => state.map);
  const mapName = useSelector((state: IStore) => state.map.mapName);
  const charData = useSelector((state: IStore) => state.char);
  const charName = useSelector((state: IStore) => state.char.name);
  const { t } = useTranslation(["save"]);

  const saveData = async () => {
    switch (moduleType) {
      case AppModules.char:
        const externalCharData = prepareExternalCharData(charData);
        saveFile(
          JSON.stringify(externalCharData),
          `${charName}.json`,
          "text/json"
        );
        addNotification(t("save:char.success"));
        break;
      case AppModules.map:
        const externalMapData = await prepareExternalMapData(mapData);
        saveFile(
          JSON.stringify(externalMapData),
          `${mapName}.json`,
          "text/json"
        );
        addNotification(t("save:map.success"));
        break;
      default:
        addNotification(t("save:invalidType"), Notification.error);
    }
  };

  return <span onClick={() => saveData()}>{t("save:computerTitle")}</span>;
};
