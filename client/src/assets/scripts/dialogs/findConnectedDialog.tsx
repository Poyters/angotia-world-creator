export const findConnectedDialog = (dataSet, beginID) => {
  const availableIds = dataSet.map(dialog => dialog.id);
  const findDialofById = (dialog): boolean => {
    return dialog.id === beginID;
  };
  const beginDialog = dataSet.find(findDialofById);
  const connectedIds = beginDialog ? beginDialog.player.map(playerDialog => {
    return playerDialog.next;
  }) : null;
  
  if (connectedIds.includes('exit')) {
    connectedIds.push(beginID);
    availableIds.push('exit');
  }

  const isInvalid = connectedIds.some(el => !availableIds.includes(el));
  if (isInvalid) connectedIds.push(`invalid_${beginID}`);

  console.log(connectedIds);
  return connectedIds;
};