import React from "react";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { GET__REQ_CHARS_BY_AUTHOR } from "../../../api/angotiaResources/queries/char/getReqCharsByAuthor";
import { GET_REQ_CHAR } from "../../../api/angotiaResources/queries/char/getReqChar";
import { loadCharData } from "../../../store/actions/charActions";
import { useDispatch } from "react-redux";
import uuid from "uuid/v4";
import { prepareInternalCharData } from "../../../scripts/parsers/prepareInternalCharData";
import { isValidExternalCharData } from "../../../scripts/validators/isValidExternalCharData";
import { addNotification } from "../../../scripts/utils/notifications";
import { Notification } from "../../../models/notification.model";
import { getUserId } from "../../../scripts/user/getUserId";
import { useTranslation } from "react-i18next";
import routesConfig from "../../../assets/configs/routes.config.json";
import { useHistory } from "react-router-dom";
import { LoadingSpinner } from "poyters-components";

export const AccountCharList: React.FC = () => {
  const userId = getUserId() ?? "";
  const char = useQuery(GET__REQ_CHARS_BY_AUTHOR, {
    variables: { author_id: userId }
  });
  const dispatch = useDispatch();
  const [getReqChar, { called, loading }] = useLazyQuery(GET_REQ_CHAR, {
    onCompleted: data => loadFromDb(data.getRequestedChar)
  });
  const { t } = useTranslation(["load", "common"]);
  const history = useHistory();

  if (char?.loading || loading) return <LoadingSpinner defaultIcon={true} />;
  if (char?.error) return <p> {t("load:char.loadError")} </p>;

  const loadFromDb = loadedData => {
    if (isValidExternalCharData(loadedData)) {
      const internalCharData = prepareInternalCharData(loadedData);
      dispatch(loadCharData(internalCharData));
      history.push(routesConfig.charCreator);
    } else {
      addNotification(t("load:char.invalidData"), Notification.error);
    }
  };

  const loadChoosedChar = (id: string) => {
    if (called) return;

    getReqChar({
      variables: { id }
    });
  };

  return (
    <>
      <ul className="loadedDataList">
        {char.data?.getRequestedCharsByAuthor.map(char => {
          return (
            <li onClick={() => loadChoosedChar(char.id)} key={uuid()}>
              <span> {t("common:indernalId")}: </span>
              {char._id}
              <span> {t("common:name")}: </span>
              {char.name}
              <span> {t("common:type")}: </span>
              {char.type}
            </li>
          );
        })}
      </ul>
    </>
  );
};
