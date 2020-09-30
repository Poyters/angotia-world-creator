import { addNotification } from '../utils/notifications';
import { Notification } from '../../models/notification.model';


export const sizeGuard = (file: any, maxValue: number): boolean | null => {
  if (!file || !file.size || !maxValue) {
    console.warn('Invalid properties in sizeGuard!');
    return null;
  }


  if (file.size / 1000 < maxValue) { // To kilobytes
    return true;
  } 

  addNotification(`Too weight! Max pic weight is ${maxValue} KB`, Notification.error);
  return false;
};