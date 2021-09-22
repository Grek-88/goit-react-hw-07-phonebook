import { createAction } from "@reduxjs/toolkit";

// export const addContact = createAction("ADD_CONTACT", (name, number) => ({
//   payload: {
//     id: Date.now(),
//     name,
//     number,
//   },
// }));

export const deleteContact = createAction("DELETE_CONTACT");

export const findContact = createAction("FIND_CONTACT");
