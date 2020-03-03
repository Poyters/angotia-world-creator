//Import interfaces
import { IDialog } from '../../interfaces/dialogsInterfaces';

export const hasInvalidConditions = (dialog: IDialog | undefined): boolean => {
  console.log('dialog', dialog);
  if (dialog === undefined || dialog.player.length === 0) return false;

  const clearPlayerDialogs = dialog.player.filter(player => {
    if (player.condition === '') return player;
  });

  const conditionDialogs = dialog.player.filter(player => {
    if (
      player.condition &&
      player.condition.length > 0
      ) return player;
  });

  console.log('clearPlayerDialogs', clearPlayerDialogs.length, clearPlayerDialogs);
  console.log('conditionDialogs', conditionDialogs.length, conditionDialogs);

  if (clearPlayerDialogs.length === 0 && conditionDialogs.length > 0) return true;
  else return false;
};