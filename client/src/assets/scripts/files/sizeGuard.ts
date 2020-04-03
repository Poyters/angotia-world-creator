import { setActionNote } from '../notifications';


export const sizeGuard = (file: any, maxValue: number): boolean | null => {
  if (!file || !file.size || !maxValue) {
    console.warn('Invalid properties in sizeGuard!');
    return null;
  }


  if (file.size / 1000 < maxValue) { // To kilobytes
    return true;
  } else {
    setActionNote(`Too weight! Max pic weight is ${maxValue} KB`, 'warning');
    return false;
  }
};