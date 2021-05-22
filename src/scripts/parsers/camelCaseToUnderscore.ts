import { deepCopy } from '../utils/deepCopy';


export const camelCaseToUnderscore = (obj: any): any => {
  if (typeof obj !== "object") return obj;

  const objCopy: any = deepCopy(obj);

  for (const oldName in objCopy){
    const newName: string = oldName.replace(/([A-Z])/g, key => `_${key.toLowerCase()}`);

    if (newName !== oldName) {
      if (Object.prototype.hasOwnProperty.call(objCopy, oldName)) {
        objCopy[newName] = objCopy[oldName];
        delete objCopy[oldName];
      }
    }

    if (typeof objCopy[newName] === "object") {
      objCopy[newName] = camelCaseToUnderscore(objCopy[newName]);
    }
  }
  return objCopy;
};