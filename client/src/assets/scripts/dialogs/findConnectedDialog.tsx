import charConfig from '../../configs/charConfig.json';
import { IDialog } from '../../interfaces/dialogs';
import { hasInvalidConditions } from './hasInvalidConditions';


export const findConnectedDialog = (dataSet: IDialog[], beginID: string): string[] => {
  const availableIds: string[] = dataSet.map((dialog: IDialog) => dialog.id = dialog.id.toString());
  const findDialogById = (dialog: IDialog): boolean => {
    return dialog.id === beginID;
  };
  const beginDialog: IDialog | undefined = dataSet.find(findDialogById);
  const connectedIds: string[] = beginDialog ? beginDialog.player.map(playerDialog => {
    return playerDialog.next.toString();
  }) : [];
  
  if (connectedIds.includes(charConfig?.dialogExit)) {
    connectedIds.push(beginID);
    availableIds.push(charConfig.dialogExit);
  }

  const isInvalid: boolean = connectedIds.some(el => !availableIds.includes(el)) || 
    hasInvalidConditions(beginDialog);
  if (isInvalid) connectedIds.push(`${charConfig.invalidPrefix}${beginID}`);

  return connectedIds;
};