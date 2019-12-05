import React from "react";

import "./styles.css";
import { SpinnerIcon } from "../Icons/SpinnerIcon";

export const Loader = () => {
  return (
    <h2 className="loader">
      <SpinnerIcon />
      Loading..
    </h2>
  );
};
