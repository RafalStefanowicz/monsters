import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../types/ROUTES";

import "./styles.css";

export const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to={ROUTES.MONSTER_LIST} exact className="nav-link">
        Monsters list
      </NavLink>
      <NavLink to={ROUTES.MONSTER_SLIDES} className="nav-link">
        Monsters details
      </NavLink>
    </nav>
  );
};
