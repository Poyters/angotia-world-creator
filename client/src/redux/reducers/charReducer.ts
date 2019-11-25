const initState = {
  type: '',
  choosed: ''
};


const charReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CHANGE_CHAR_TYPE':
      return {
        ...state,
        type: action.charType
      };
    case 'CHANGE_CHAR':
      return {
        ...state,
        choosed: action.char
      };
    default:
      return state;
  }
};


export default charReducer;