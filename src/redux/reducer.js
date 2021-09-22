import { combineReducers } from "redux";
import { findContact } from "./actions";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, fetchContact } from "./actionOperation";

// const itemReducer = createReducer([], {
//   [addContact]: (state, action) => [...state, action.payload],
//   [deleteContact]: (state, action) =>
//     state.filter((el) => el.id !== action.payload),
// });
export const itemReducer = createReducer([], {
  [fetchContact.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
});

export const error = createReducer(null, {
  [fetchContact.rejected]: (_, { payload }) => payload,
  [fetchContact.pending]: () => false,
  [addContact.rejected]: (_, { payload }) => payload,
  [addContact.pending]: () => false,
});

export const isLoading = createReducer(false, {
  [fetchContact.pending]: () => true,
  [fetchContact.fulfilled]: () => false,
  [fetchContact.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
});

const filterReducer = createReducer("", {
  [findContact.type]: (_, { payload }) => payload,
});

const reducerContacts = combineReducers({
  items: itemReducer,
  filter: filterReducer,
  isLoading,
});

export default reducerContacts;
