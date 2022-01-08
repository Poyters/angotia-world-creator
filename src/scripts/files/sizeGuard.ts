import { addNotification } from '../utils/notifications';
import { Notification } from '../../models/notification.model';
import { log } from '../utils/log';

export const sizeGuard = (file: any, maxValue: number, t?: (string, any?) => string)  => {
  log('CHECK_FILE_SIZE');

  if (!file || !file.size || !maxValue) {
    log('CHECK_FILE_SIZE_INVALID_FILE');
    if (t) addNotification(t('files.invalidFile'), Notification.error);

    return false;
  }


  if (file.size / 1000 < maxValue) { // To kilobytes
    return true;
  } 

  if (t) addNotification(t('files.tooWeight', { max: maxValue }), Notification.error);

  return false;
};