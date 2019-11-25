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