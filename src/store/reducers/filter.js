const initialState = {
  category: 'ALL',
};

const filterReducer = (state = initialState, { type, category }) => {
  switch (type) {
    case 'CHANGE_FILTER':
      return { ...state, category };
    default:
      return state;
  }
};

export default filterReducer;
