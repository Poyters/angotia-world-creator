import { deepCopy } from '../utils/deepCopy';
import { log } from '../utils/log';


export const countElementsInMatrix = (matrix: any[]): number => {
  const copyOfMatrix = deepCopy(matrix);
  const flatMatrix = copyOfMatrix.flat(4); // Matrix is four levels deep
  const quantity = flatMatrix.reduce((total,x) => (x !== 0 && x !== '0' ? total+1 : total), 0) ?? 0;

  log('COUNTED_ITEMS_IN_MATRIX', { quantity });

  return quantity;
};