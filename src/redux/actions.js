import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("ADD_CONTACT", function prepare(
  name,
  number
) {
  return {
    payload: {
      id: Date.now(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction("DELETE_CONTACT");

export const findContact = createAction("FIND_CONTACT");
