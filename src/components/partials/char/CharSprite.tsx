import React from "react";
import { useSelector } from "react-redux";
import { LoadPicBtn } from "../LoadPicBtn";
import { setCharPic } from "../../../store/actions/charActions";
import { IStore } from "../../../interfaces/store.interface";
import { useTranslation } from "react-i18next";

export const CharSprite = () => {
  const { t } = useTranslation(["char", "common"]);
  const charPicPath = useSelector((state: IStore) => state.char.charPic);

  const charPicStyles = {
    backgroundImage: `url('${charPicPath}')`
  };

  return (
    <>
      <div className="charSprite t-paragraph5Bold" style={charPicStyles}>
        {!charPicPath && <span>{t("char:sprite.error")}</span>}
      </div>

      <LoadPicBtn
        name={t("char:sprite.btn")}
        clickEvent={setCharPic}
        note={t("char:sprite.add")}
      />
    </>
  );
};
