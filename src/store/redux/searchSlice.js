import {createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'searchlist',
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
export const selectUser = state => state.searchlist.searchItems;
export default searchSlice.reducer;
