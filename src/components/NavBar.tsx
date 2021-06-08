import React from "react";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function NavBar() {
  const data = useContext(AppContext);
  return <div>menu nav bar</div>;
}

export default NavBar;
