import "./App.css";

import Section from "../Section/Section";
import InputContact from "../InputContact/InputContact";
import Contacts from "../Contacts/Contacts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContact } from "../../redux/actionOperation";
// import axios from "axios";
// import { fetchContact } from "../../redux/actionOperation";

export default function App() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  // const onClickAdd = () => {
  //   axios.defaults.baseURL = "http://localhost:3004/contacts";
  //   axios.get().then((response) => console.log(response.data));
  //   axios
  //     .post("http://localhost:3004/contacts", {
  //       firstName: "Fred",
  //       lastName: "Flintstone",
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     });

  //   axios.get().then((response) => console.log(response.data));
  // };

  // const onClickDelete = (e) => {
  //   console.log(e);
  //   axios.delete("http://localhost:3004/contacts/4");
  // };

  // async function test() {
  //   const contacts = await axios.get("http://localhost:3004/contacts");
  //   console.log(contacts.data);
  //   return contacts;
  // }

  // test();

  return (
    <>
      <div className="App">
        <Section title="Phonebook">
          <InputContact />
        </Section>
        {contacts?.items?.length > 0 && (
          <>
            <Section title="Contacts">
              <Contacts />
            </Section>
            {/* <button type="button" onClick={onClickAdd}>
              axios add
            </button>
            <button type="button" onClick={onClickDelete}>
              axios delete
            </button> */}
          </>
        )}
      </div>
    </>
  );
}
