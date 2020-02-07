//Import configs
import charConfig from '../../configs/charConfig.json';

//Import interfaces
import { IDialog } from '../../interfaces/dialogsInterfaces';


export const findConnectedDialog = (dataSet: IDialog[], beginID: string): string[] => {
  const availableIds: string[] = dataSet.map((dialog: IDialog) => dialog.id = dialog.id.toString());
  const findDialofById = (dialog: IDialog): boolean => {
    return dialog.id === beginID;
  };
  const beginDialog: IDialog | undefined = dataSet.find(findDialofById);
  const connectedIds: string[] = beginDialog ? beginDialog.player.map(playerDialog => {
    return playerDialog.next.toString();
  }) : [];
  
  if (connectedIds.includes(charConfig.dialogExit)) {
    connectedIds.push(beginID);
    availableIds.push(charConfig.dialogExit);
  }

  const isInvalid: boolean = connectedIds.some(el => !availableIds.includes(el));
  if (isInvalid) connectedIds.push(`${charConfig.invalidPrefix}${beginID}`);

  return connectedIds;
};