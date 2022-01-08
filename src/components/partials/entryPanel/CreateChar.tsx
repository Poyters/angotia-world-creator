import React from "react";
import { useDispatch } from "react-redux";
import uuid from "uuid/v4";
import { loadCharData } from "../../../store/actions/charActions";
import { charState } from "../../../store/states/charState";
import { deepCopy } from "../../../scripts/utils/deepCopy";
import { useTranslation } from "react-i18next";
import routesConfig from "../../../assets/configs/routes.config.json";
import { useHistory } from "react-router-dom";

export const CreateChar = () => {
  const emptyCharState = deepCopy(charState);
  const dispatch = useDispatch();
  const { t } = useTranslation(["common"]);
  const history = useHistory();

  const newCharInstanceHanlder = () => {
    dispatch(loadCharData(emptyCharState));
    history.push(routesConfig.charCreator);
  };

  return (
    <li key={uuid()} onClick={newCharInstanceHanlder}>
      {t("common:char")}
    </li>
  );
};
