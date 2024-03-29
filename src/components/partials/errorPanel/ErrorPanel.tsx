import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "../../../interfaces/store.interface";
import { toggleErrorPanel } from "../../../store/actions/uiActions";
import { MapValidation } from "./MapValidation";
import { CharValidation } from "./CharValidation";
import { AppModules } from "../../../models/appModules.model";
import { IApp } from "../../../interfaces/app.inteface";
import { useTranslation } from "react-i18next";

export const ErrorPanel: React.FC<IApp> = ({ moduleType }) => {
  const isOpen = useSelector((state: IStore) => state.ui.errorPanelIsOpen);
  const mapErrors = useSelector((state: IStore) => state.ui.mapCreationErrors);
  const charErrors = useSelector(
    (state: IStore) => state.ui.charCreationErrors
  );
  const dispatch = useDispatch();
  const { t } = useTranslation(["common", "errors"]);

  const errorPanelStyles = {
    right: isOpen ? "0" : "-300px"
  };

  return (
    <>
      <div
        className="g-sidePanelSwitch g-sidePanelSwitch--errorPanel t-paragraph4Normal"
        onClick={() => dispatch(toggleErrorPanel(true))}
      >
        {t("errors:panel.label")}
      </div>
      <aside className="g-sidePanelWrapper" style={errorPanelStyles}>
        <div className="g-sidePanel">
          <header className="errorPanelHeader t-paragraph6Bold">
            {t("errors:panel.occurs")}
            <span className="errorPanelHeader__count t-paragraph3Bold">
              {moduleType === AppModules.map ? mapErrors.length : null}
              {moduleType === AppModules.char ? charErrors.length : null}
            </span>{" "}
            {t("common:errors")}
          </header>
          <ol className="errorPanelList t-paragraph2Light">
            {moduleType === AppModules.map ? <MapValidation /> : null}
            {moduleType === AppModules.char ? <CharValidation /> : null}
          </ol>

          <div
            className="g-sidePanel__switch g-sidePanel__switch--left t-paragraph5Normal"
            onClick={() => dispatch(toggleErrorPanel(false))}
          >
            <span>{t("common:close")}</span>
          </div>
        </div>
      </aside>
    </>
  );
};
