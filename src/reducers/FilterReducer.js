
const initialState={
    sort:'desc',
    text:''
};
export default  (state=initialState , action) => {
switch (action.type) {
  case 'FILTER_PRODUCTS':
    const filteredState={...state};
    filteredState.text=action.payload;
    return filteredState;
  case 'SORT_PRODUCTS':
    const sortedState={...state};
    sortedState.sort=action.payload;
    return sortedState;
  default:
    return state;
}



}

