import { IDialog } from '../../interfaces/dialogs.interface';
import { log } from '../utils/log';

export const hasInvalidConditions = (dialog: IDialog | undefined) => {
  log('DIALOG_HAS_INVALID_CONDITIONS', { id: dialog?.id });

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