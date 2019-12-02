import React from "react";
import { Route } from "react-router";
import { MonstersSliderContainer } from "../MonstersSlider/MonstersSliderContainer";
import { ROUTES } from "../../types/ROUTES";

export const Page = () => {
  return (
    <Route
      path={ROUTES.MONSTER_SLIDES}
      component={MonstersSliderContainer}
    ></Route>
  );
};
