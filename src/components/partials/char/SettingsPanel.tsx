import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ActionMaxMinField } from "../ActionMaxMinField";
import { ChooseButtons } from "../buttons/ChooseButtons";
import {
  setVisibleLevel,
  setTimeOfOccurance,
  setRespawnTime
} from "../../../store/actions/charActions";
import { IStore } from "../../../interfaces/store.interface";
import { CharType } from "../../../models/charType.model";
import { useTranslation } from "react-i18next";

export const SettingsPanel: React.FC = () => {
  const { t } = useTranslation(["common", "char"]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const charSettings = useSelector((state: IStore) => state.char.settings);
  const charType = useSelector((state: IStore) => state.char.type);
  const hasVisibleLevel = useSelector(
    (state: IStore) => state.char.hasVisibleLevel
  );

  const settingsPanelStyles = {
    left: isOpen ? "0" : "-300px"
  };

  return (
    <>
      <div
        className="g-sidePanelSwitch g-sidePanelSwitch--charSettingsPanel t-paragraph4Normal"
        onClick={() => setIsOpen(true)}
      >
        {t("char:settings.title")}
      </div>
      <aside
        className="g-sidePanelWrapper g-sidePanelWrapper--left"
        style={settingsPanelStyles}
      >
        <div className="g-sidePanel g-sidePanel--left">
          {charType !== CharType.mob ? (
            <ChooseButtons
              types={[
                {
                  id: true,
                  label: t("common:yes")
                },
                {
                  id: false,
                  label: t("common:no")
                }
              ]}
              action={setVisibleLevel}
              label={t("char:settings.hasVisibleLevel")}
              specialClass="chooseButtonsWrapper--charSettingsPanel"
              choosed={hasVisibleLevel}
            />
          ) : null}
          {charType === CharType.mob ? (
            <ActionMaxMinField
              label={t("char:settings.respawnTime")}
              minValue={charSettings?.respTime?.min}
              maxValue={charSettings?.respTime?.max}
              action={setRespawnTime}
            />
          ) : null}
          <ActionMaxMinField
            label={t("char:settings.timeOfOccurance")}
            minValue={charSettings?.timeOfOccurance?.min}
            maxValue={charSettings?.timeOfOccurance?.max}
            action={setTimeOfOccurance}
          />

          <div
            className="g-sidePanel__switch t-paragraph5Normal"
            onClick={() => setIsOpen(false)}
          >
            <span>{t("common:close")}</span>
          </div>
        </div>
      </aside>
    </>
  );
};
