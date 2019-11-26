export const findConnectedDialog = (dataSet, beginID) => {
  const findDialofById = (dialog): boolean => {
    return dialog.id === beginID
  }
  const beginDialog = dataSet.find(findDialofById);
  const connectedIds = beginDialog ? beginDialog.player.map(playerDialog => {
    return playerDialog.next;
  }) : null;

  return connectedIds;
}