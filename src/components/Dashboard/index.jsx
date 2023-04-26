import { useContext, useEffect, useState } from "react";
import { Form } from "../Form";
import { StyledDashboard } from "./style";
import { CardContact } from "../CardContact";
import { DisplayContext } from "../Context/DisplayContext";
import { aData } from "../../db/db";
import { ListContacts } from "../ListContacts";
import { AnimatePresence } from "framer-motion";
export const Dashboard = () => {
  const [nameButton, setNameButton] = useState("Adcionar Contato");
  const [contacts, setContacts] = useState(aData);
  const { display, setDisplay } = useContext(DisplayContext);
  const handleShowForm = () => {
    if (display === "contacts") {
      setDisplay("form");
    } else {
      setDisplay("contacts");
    }
  };
  useEffect(() => {
    if (display === "contacts") {
      setNameButton("Adcionar Contato");
    } else {
      setNameButton("Listar Contatos");
    }
  }, [display]);
  return (
    <StyledDashboard>
      <h2 className="logo">T-<span>Prime </span>Contacts</h2>
      <div className="left-side">
        <AnimatePresence>
          {display === "form" && (
            <Form
              setContacts={setContacts}
              animationProps={{ initial: 0, animate: 1, exit: 0 }}
            />
          )}
          {display === "contacts" && (
            <>
              <ListContacts
                animationProps={{ initial: 0, animate: 1, exit: 0 }}
              >
                {contacts.map((contact, i) => (
                  <li key={i}>
                    <CardContact card={contact} />
                  </li>
                ))}
              </ListContacts>
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="right-side">
        <img src="/work.png" alt="" />
        <button className="btn-change-view" onClick={handleShowForm}>
          {nameButton}
        </button>
      </div>
    </StyledDashboard>
  );
};
