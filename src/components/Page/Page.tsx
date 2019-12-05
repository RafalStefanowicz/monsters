import React from "react";
import { Route } from "react-router";
import { MonstersSwiper } from "../MonstersSwiper/MonstersSwiper";
import { ROUTES } from "../../types/ROUTES";
import { MonstersListContainer } from "../MonstersList/MonstersListContainer";

export const Page = () => {
  return (
    <>
      <Route
        exact
        path={ROUTES.MONSTER_LIST}
        component={MonstersListContainer}
      ></Route>
      <Route path={ROUTES.MONSTER_SLIDES} component={MonstersSwiper}></Route>
    </>
  );
};
