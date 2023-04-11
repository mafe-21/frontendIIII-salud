import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const imageSrc =
    state.theme === "light" ? "/images/ico-night.png" : "/images/ico-day.png";

  return (
    <nav className={state.theme === "light" ? "bg-dark" : "bg-light"}>
      <div>
        <label>DH Odonto</label>
      </div>
      <div className="nav-contact">
        <Link to={"/"}>Home</Link>
        <Link to={"/favs"}>Favorites</Link>
        <Link to={"/contact"}>Contact</Link>        
        <button onClick={() => dispatch({ type: "CHANGE_THEME" })}>
          <img src={imageSrc} alt="theme" width={15} height={15} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
