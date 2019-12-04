import React from "react";

import { Nav } from "../Nav/Nav";
import { MonstersData } from "../MonstersData/MonstersData";
import "./styles.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <Nav />
      <MonstersData />
    </div>
  );
};

export default App;
