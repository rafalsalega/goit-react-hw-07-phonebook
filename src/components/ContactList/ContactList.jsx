import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/actions';

export const ContactList = () => {
 const contacts = useSelector(state => state.contacts.contacts);
 const filter = useSelector(state => state.contacts.filter);
 const dispatch = useDispatch();

   const handleDelete = id => {
     dispatch(removeContact(id));
  };

   const filteredContacts = contacts.filter(contact =>
     contact.name.toLowerCase().includes(filter.toLowerCase())
   );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li className={css.item} key={contact.id}>
          {contact.name} - {contact.number}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}