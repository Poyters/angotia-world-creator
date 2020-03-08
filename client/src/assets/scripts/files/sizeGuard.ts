// Import scripts
import { setActionNote } from '../notifications';


export const sizeGuard = (file: any, maxValue: number) => {
  if (!file || !file.size || !maxValue) {
    console.warn('Invalid properties in sizeGuard!');
    return;
  }


  if (file.size / 1000 < maxValue) { // To kilobytes
    return true;
  } else {
    setActionNote(`Too weight! Max pic weight is ${maxValue} KB`, 'warning');
    return false;
  }
};