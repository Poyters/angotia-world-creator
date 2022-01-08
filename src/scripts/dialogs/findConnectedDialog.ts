import charConfig from "../../assets/configs/char.config.json";
import { IDialog } from "../../interfaces/dialogs.interface";
import { hasInvalidConditions } from "./hasInvalidConditions";
import { log } from "../utils/log";

export const findConnectedDialog = (dataSet: IDialog[], beginId: string) => {
  log("FIND_CONNECTED_DIALOGS", { beginId });

  const availableIds: string[] = dataSet.map(
    (dialog: IDialog) => (dialog.id = dialog.id.toString())
  );
  const findDialogById = (dialog: IDialog): boolean => {
    return dialog.id === beginId;
  };
  const beginDialog: IDialog | undefined = dataSet.find(findDialogById);
  const connectedIds: string[] = beginDialog
    ? beginDialog?.player.map(playerDialog => {
        return playerDialog?.next?.toString();
      })
    : [];

  // Add exit dialog as available
  availableIds.push(charConfig?.dialogExit);

  const isInvalid: boolean =
    connectedIds.some(el => !availableIds.includes(el)) ||
    hasInvalidConditions(beginDialog);
  if (isInvalid) connectedIds.push(`${charConfig.invalidPrefix}${beginId}`);

  // Dialog points to itself
  if (connectedIds.includes(beginId)) {
    const index = connectedIds.indexOf(beginId);

    if (index > -1) {
      connectedIds.splice(index, 1);
    }

    connectedIds.push(`${charConfig.invalidPrefix}${beginId}`);
  }

  if (connectedIds.includes(charConfig?.dialogExit)) {
    connectedIds.push(beginId);
  }

  return connectedIds;
};
