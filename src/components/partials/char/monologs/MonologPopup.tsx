import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "uuid/v4";
import { ActionInputField } from "../../ActionInputField";
import { changeMonologs } from "../../../../store/actions/charActions";
import { addNotification } from "../../../../scripts/utils/notifications";
import { IStore } from "../../../../interfaces/store.interface";
import { IMonologPopup } from "../../../../interfaces/dialogs.interface";
import { useTranslation } from "react-i18next";

export const MonologPopup: React.FC<IMonologPopup> = ({
  isActivePopup,
  monologData,
  setMonologData
}) => {
  const { t } = useTranslation(["char", "common", "notifications"]);
  const monologId: string = monologData?.id ?? uuid();
  const [monologContent, setMonologContent] = useState<string>(
    monologData?.content || ""
  );
  const [monologCtnErr, setMonologCtnErr] = useState<boolean>(false);
  const monologsData = useSelector((state: IStore) => state.char.monologs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!monologContent || monologContent.length === 0) {
      setMonologCtnErr(true);
    } else setMonologCtnErr(false);
  }, [monologContent]);

  useEffect(() => {
    const keyPressHandler = event => {
      if (event.key === "Escape") isActivePopup(false);
      else if (event.key === "Enter") submitHandler();
    };

    document.addEventListener("keydown", keyPressHandler);
    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  });

  const insertMonolog = () => {
    monologsData.push({
      id: monologId,
      content: monologContent
    });

    dispatch(changeMonologs(monologsData));
    addNotification(t("notifications:notes.monologs.add"));
  };

  const editMonolog = () => {
    monologsData.forEach(monolog => {
      if (monolog.id === monologId) {
        monolog.content = monologContent;
      }
    });

    dispatch(changeMonologs(monologsData));
    addNotification(t("notifications:notes.monologs.edit"));
    if (setMonologData) setMonologData(null);
  };

  const submitHandler = () => {
    if (monologCtnErr) return;

    if (monologData && monologData.id && monologData.content) {
      // edit mode
      editMonolog();
    } else {
      // insert mode
      insertMonolog();
    }

    isActivePopup(false);
  };

  return (
    <div className="g-container g-container--popup">
      <div role="alert" className="insertPopup">
        <div
          className="g-exitBtn g-exitBtn--popup"
          onClick={() => isActivePopup(false)}
        >
          {" "}
        </div>
        <header className="insertPopup__header t-paragraph3Light">
          {t("char:monologs.create")}
        </header>
        <ActionInputField
          label={t("common:autoId")}
          inputValue={monologId}
          inputDisabled={true}
        />
        <label className="insertPopup__label t-paragraph6Light">
          {t("common:content")}
        </label>
        <textarea
          value={monologContent}
          onChange={e => setMonologContent(e.target.value)}
        />
        {monologCtnErr ? (
          <span className="insertPopup--error">{t("char:monologs.error")}</span>
        ) : null}

        <button
          type="submit"
          className="insertPopup__submit t-paragraphLight"
          onClick={submitHandler}
          disabled={monologCtnErr}
        >
          {t("common:submit")}
        </button>
      </div>
    </div>
  );
};
