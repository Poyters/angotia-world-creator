export const changeCharType = (charType: string) => {
  return {
    type: 'CHANGE_CHAR_TYPE',
    charType
  };
};

export const changeChar = (char: string) => {
  return {
    type: 'CHANGE_CHAR',
    char
  };
};

export const changeMonologs = (monologs: any[]) => {
  return {
    type: 'CHANGE_MONOLOGS',
    monologs
  };
};

export const changeDialogs = (dialogs: any[]) => {
  return {
    type: 'CHANGE_DIALOGS',
    dialogs
  };
};
