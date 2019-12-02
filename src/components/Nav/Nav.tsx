import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../types/ROUTES";

export const Nav = () => {
  return (
    <nav>
      <NavLink to={ROUTES.MONSTER_LIST}>Monsters list</NavLink>
      <NavLink to={ROUTES.MONSTER_SLIDES}>Monsters details</NavLink>
    </nav>
  );
};
