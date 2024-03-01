import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    createUser: (store, action) => {
      return action.payload;
    },
    removeUser: (store, action) => {
      return null;
    }
  },
});

export const { createUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
