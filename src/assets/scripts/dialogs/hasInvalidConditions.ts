import { IDialog } from '../../../interfaces/dialogs.interface';

export const hasInvalidConditions = (dialog: IDialog | undefined): boolean => {
  if (dialog === undefined || dialog.player.length === 0) return false;

  const clearPlayerDialogs = dialog.player.filter(player => {
    return player.condition === '';
  });

  const conditionDialogs = dialog.player.filter(player => {
    return (
      player.condition &&
      player.condition.length > 0
      );
  });

  if (clearPlayerDialogs.length === 0 && conditionDialogs.length > 0) return true;
  
  return false;
};