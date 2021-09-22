import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3004/contacts";

export const fetchContact = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const contacts = await axios.get();
    return contacts.data;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async ({ name, number }) => {
    const contacts = await axios.post("http://localhost:3004/contacts", {
      name,
      number,
    });
    return contacts.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async () => {
    const contacts = await axios.get("http://localhost:3004/contacts");
    return contacts.data;
  }
);
