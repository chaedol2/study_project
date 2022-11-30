import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/reducers/userSlice";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});
export default store;
