import { reducerContacts } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    contacts: reducerContacts,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
