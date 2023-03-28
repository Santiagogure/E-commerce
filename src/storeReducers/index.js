import { configureStore } from "@reduxjs/toolkit";
import ovarlayReducer from "./ovarlay";

const store = configureStore({
  reducer: {
    overlay: ovarlayReducer,
  },
});

export default store;
