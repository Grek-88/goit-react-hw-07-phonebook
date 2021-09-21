import "./App.css";

import Section from "../Section/Section";
import InputContact from "../InputContact/InputContact";
import Contacts from "../Contacts/Contacts";
import { useSelector } from "react-redux";

export default function App() {
  const contacts = useSelector((state) => state.contacts);

  return (
    <div className="App">
      <Section title="Phonebook">
        <InputContact />
      </Section>
      {contacts.items.length > 0 && (
        <Section title="Contacts">
          <Contacts />
        </Section>
      )}
    </div>
  );
}
