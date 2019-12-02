import React, { useState, useEffect } from "react";

import { fetchMonstersDetails, MonsterI } from "../../apis/monstersApi";
import { Loader } from "../Loader/Loader";
import { Page } from "../Page/Page";
import { MonstersContext } from "../MonsersContext/MonstersContext";

export const MonstersData = () => {
  const [monsters, setMonsters] = useState<MonsterI[]>([]);

  useEffect(() => {
    (async () => {
      const monsters = await fetchMonstersDetails();
      setMonsters(monsters);
    })();
  }, []);

  return monsters[0] ? (
    <MonstersContext.Provider value={{ monsters, setMonsters }}>
      <Page />
    </MonstersContext.Provider>
  ) : (
    <Loader />
  );
};
