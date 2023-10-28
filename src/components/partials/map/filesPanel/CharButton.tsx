import React, { useState } from "react";
import { Link } from "react-router-dom";
import routesConfig from "../../../../assets/configs/routes.config.json";
import { useTranslation } from "react-i18next";

export const CharButton: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const { t } = useTranslation(["map", "common"]);

  const charMenuStyles = {
    opacity: isMenuVisible ? 1 : 0
  };

  return (
    <div className="charButton">
      <nav
        className="charButton__menu"
        style={charMenuStyles}
        onMouseEnter={() => setIsMenuVisible(true)}
        onMouseLeave={() => setIsMenuVisible(false)}
      >
        <ul>
          <li>
            <Link to={`/${routesConfig.charCreator}`}>{t("common:load")}</Link>
          </li>
          <li>{t("common:edit")}</li>
        </ul>
      </nav>
      <div
        className="charButton__name"
        onMouseEnter={() => setIsMenuVisible(true)}
        onMouseLeave={() => setIsMenuVisible(false)}
      >
        <span>{t("common:char")}</span>
      </div>
    </div>
  );
};
