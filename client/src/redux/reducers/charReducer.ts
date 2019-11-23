const initState = {
  type: ''
};


const charReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CHANGE_CHAR_TYPE':
      return {
        ...state,
        type: action.type
      };
  }
};


export default charReducer;