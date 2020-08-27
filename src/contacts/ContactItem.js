import React from "react";
import styles from "./ContactItem.module.css";
// import { CSSTransition } from "react-transition-group";

const ContactItem = ({ contact, deleteContact }) => {
  return (
    // <CSSTransition
    //   key={contact.id}
    //   timeout={500}
    //   classNames={styles}
    //   unmountOnExit
    // >
    <li className={styles.contactItem}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
    // </CSSTransition>
  );
};

export default ContactItem;
