import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";
import registrySlice from "../redux/registrySlice";

export const store = configureStore({
  reducer: {
    game: gameSlice,
    registry: registrySlice,
  },
});
