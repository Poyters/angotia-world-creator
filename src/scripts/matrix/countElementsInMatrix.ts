import { deepCopy } from '../utils/deepCopy';


export const countElementsInMatrix = (matrix: any[]): number => {
  const copyOfMatrix = deepCopy(matrix);
  const flatMatrix = copyOfMatrix.flat(4);

  return flatMatrix.reduce((total,x) => (x !== 0 && x !== '0' ? total+1 : total), 0);
};