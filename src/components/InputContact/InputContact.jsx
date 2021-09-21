import s from "../InputContact/InputContact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/actions";

export default function InputContact(props) {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      contacts.items.find(
        (el) => el.name.toLowerCase() === e.target.name.value.toLowerCase()
      )
    ) {
      alert(`"${e.target.name.value}" is already in contacts.`);
    } else {
      dispatch(addContact(e.target.name.value, e.target.number.value));
    }

    e.target.name.value = "";
    e.target.number.value = "";
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из 5ти и более цифр, и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
