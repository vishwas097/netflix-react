import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
    details: false,
  },
  reducers: {
    changeLang: (store, action) => {
      store.lang = action.payload;
    },
    changeDetails: (store, action) => {
      store.details = action.payload;
    },
  },
});

export const { changeLang, changeDetails } = configSlice.actions;

export default configSlice.reducer;
