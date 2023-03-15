import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./currentUser";
import ovarlayReducer from "./ovarlay";

const store = configureStore({
  reducer: {
    user: userReducer,
    overlay: ovarlayReducer,
  },
});

export default store;
