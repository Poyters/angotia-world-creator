//Import configs
import charConfig from '../../configs/charConfig.json';


export const findConnectedDialog = (dataSet, beginID) => {
  const availableIds = dataSet.map(dialog => dialog.id);
  const findDialofById = (dialog): boolean => {
    return dialog.id === beginID;
  };
  const beginDialog = dataSet.find(findDialofById);
  const connectedIds = beginDialog ? beginDialog.player.map(playerDialog => {
    return playerDialog.next === charConfig.dialogExit ? 
      playerDialog.next : parseInt(playerDialog.next);
  }) : null;
  
  console.log(connectedIds);

  if (connectedIds.includes(charConfig.dialogExit)) {
    connectedIds.push(beginID);
    availableIds.push(charConfig.dialogExit);
  }

  const isInvalid = connectedIds.some(el => !availableIds.includes(el));
  if (isInvalid) connectedIds.push(`${charConfig.invalidPrefix}${beginID}`);

  console.log(connectedIds);

  return connectedIds;
};