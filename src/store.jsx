import { configureStore } from "@reduxjs/toolkit";
import clockSlice from "./features/clock/clockSlice";
export const store = configureStore({
  reducer: {
    clock: clockSlice,
  },
});
