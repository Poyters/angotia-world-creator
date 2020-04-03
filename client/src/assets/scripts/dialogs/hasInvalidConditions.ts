import { IDialog } from '../../interfaces/dialogsInterfaces';

export const hasInvalidConditions = (dialog: IDialog | undefined): boolean => {
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

  if (clearPlayerDialogs.length === 0 && conditionDialogs.length > 0) return true;
  else return false;
};