import { addNotification } from '../utils/notifications';
import { Notification } from '../../models/notification.model';
import { log } from '../utils/log';
import i18n from '../../i18n';


export const sizeGuard = (file: any, maxValue: number)  => {
  log('CHECK_FILE_SIZE');

  if (!file || !file.size || !maxValue) {
    log('CHECK_FILE_SIZE_INVALID_FILE');
    addNotification(i18n.t('files.invalidFile'), Notification.error);

    return false;
  }


  if (file.size / 1000 < maxValue) { // To kilobytes
    return true;
  } 

  addNotification(i18n.t('files.tooWeight'), Notification.error);
  return false;
};