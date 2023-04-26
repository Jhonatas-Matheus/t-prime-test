import { useContext, useEffect, useState } from "react";
import { StyledNav } from "./style";

import { GiHamburgerMenu } from "react-icons/gi";
import { DisplayContext } from "../Context/DisplayContext";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { display, setDisplay} = useContext(DisplayContext);
  const handleShowMenu = () =>{
    setShowMenu(!showMenu)
  }
  const handleShowForm = () =>  {
    setDisplay('form')
    setShowMenu(!showMenu) 
  }
  const handleShowListContacts = () => {
    setDisplay('contacts')
    setShowMenu(!showMenu)
  }

  return (
    <StyledNav>
      <div className="container">
      <h1 className="logo">T-<span>Prime </span>Contacts</h1>

      <button className="btn-open-menu" onClick={handleShowMenu}>
        <GiHamburgerMenu size={30} />
      </button>
      </div>
      <ul className={`menu-mobile ${showMenu? 'show-menu': 'hidden-menu'}`}>
        <li>
          <button onClick={handleShowForm}>Adicionar Contato</button>
        </li>
        <li>
          <button onClick={handleShowListContacts}>Listar Contatos</button>
        </li>
      </ul>
    </StyledNav>
  );
};
