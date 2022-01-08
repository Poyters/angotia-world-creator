import React from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "uuid/v4";
import { PlayerDialog } from "./PlayerDialog";
import { changeTemponaryPlayerDialogs } from "../../../../store/actions/charActions";
import { IPlayer } from "../../../../interfaces/dialogs.interface";
import { IStore } from "../../../../interfaces/store.interface";
import { useTranslation } from "react-i18next";

export const AddTemponaryPlayerDialog = () => {
  const { t } = useTranslation(["char", "common"]);
  const dispatch = useDispatch();
  const temponaryPlayerDialogs =
    useSelector((state: IStore) => state.char.temponaryPlayerDialogs) || [];

  const addPlayerDialogHandler = () => {
    const newDialogs: IPlayer[] = [
      ...temponaryPlayerDialogs,
      {
        id: uuid(),
        dialog: "",
        next: "",
        action: "",
        condition: ""
      }
    ];

    dispatch(changeTemponaryPlayerDialogs(newDialogs));
  };

  return (
    <>
      <nav className="playerDialogsHeader">
        <header className="playerDialogsHeader__title t-paragraph5Light">
          {t("char:dialogs.playerDialogs")}
        </header>
        <div
          className="playerDialogsHeader__add t-paragraph5Normal"
          onClick={() => addPlayerDialogHandler()}
        >
          {t("char:dialogs.newPlayerDialog")}
        </div>
      </nav>

      <div className="playerDialogsWrapper">
        {temponaryPlayerDialogs.map(playerDialog => {
          return (
            <PlayerDialog playerId={playerDialog.id} key={playerDialog.id} />
          );
        })}
      </div>
    </>
  );
};
