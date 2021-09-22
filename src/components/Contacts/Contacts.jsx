/* eslint-disable array-callback-return */
import { useSelector, useDispatch } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { deleteContact, findContact } from "../../redux/actions";
import FindContact from "../FindContact/FindContact";
import s from "../Contacts/Contacts.module.css";

export default function Contacts() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const onDeleteContact = (name, number) => {
    console.dir(name);
    // dispatch(deleteContact());
  };

  return (
    <>
      <FindContact
        onChange={(dataFilterContact) =>
          dispatch(findContact(dataFilterContact))
        }
      />

      <ul>
        {contacts?.items?.map((el) => {
          if (contacts.filter) {
            if (el.name.toLowerCase().includes(contacts.filter)) {
              return (
                <li key={el.id} className={s.li}>
                  {el.name} {el.number}
                  <button
                    className={s.button}
                    onClick={() => onDeleteContact(el.name, el.number)}
                  >
                    Delete
                  </button>
                </li>
              );
            }
          } else {
            return (
              <li key={el.id} className={s.li}>
                {el.name} {el.number}
                <button
                  className={s.button}
                  onClick={() => onDeleteContact(el.name, el.number)}
                >
                  Delete
                </button>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
