import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};

export const registrySlice = createSlice({
  name: "registry",
  initialState,
  reducers: {
    loadUserName: (state, action) => {
      state.userName = action.payload;
    },
    clearUserName: (state) => {
      state.userName = "";
    },
  },
});

export const { loadUserName, clearUserName } = registrySlice.actions;

export default registrySlice.reducer;
