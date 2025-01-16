import { useSelector } from "react-redux";
import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"


const ContactList = () => { 

const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.name);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    
    return (
        <ul className={s.list}>
             {filteredContacts.map(({ id, name, number }) => (
                 <li key={id} className={s.listItem}>
                     <Contact
                         id={id}
                        name={name}
                         number={number}
                    
                     />
                     </li>
            ))}        
        </ul>
    );
};

export default ContactList;