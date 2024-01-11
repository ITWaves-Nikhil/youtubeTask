import {createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'searchList',
  initialState: {
    searchItems: [],
  },
  reducers: {
    addSearchItem: (state, action) => {
      state.searchItems.push(action.payload);
    },
  },
});

export const {addSearchItem} = searchSlice.actions;
export const searchItems = state => state.searchList.searchItems;
export default searchSlice.reducer;
