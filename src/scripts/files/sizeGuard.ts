import { addNotification } from '../utils/notifications';
import { Notification } from '../../models/notification.model';
import { log } from '../utils/log';


export const sizeGuard = (file: any, maxValue: number)  => {
  log('CHECK_FILE_SIZE');

  if (!file || !file.size || !maxValue) {
    log('CHECK_FILE_SIZE_INVALID_FILE');
    addNotification('Invalid file! size cannot be checked', Notification.error);

    return false;
  }


  if (file.size / 1000 < maxValue) { // To kilobytes
    return true;
  } 

  addNotification(`Too weight! Max pic weight is ${maxValue} KB`, Notification.error);
  return false;
};