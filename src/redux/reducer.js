import { combineReducers } from "redux";
import { addContact, deleteContact, findContact } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const itemReducer = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter((el) => el.id !== action.payload),
});

const filterReducer = createReducer("", {
  [findContact.type]: (_, action) => action.payload,
});

const reducerContacts = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: reducerContacts,
});

export { rootReducer, reducerContacts };
