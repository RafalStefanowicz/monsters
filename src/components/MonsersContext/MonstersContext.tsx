import { createContext } from "react";
import { MonsterI } from "../../apis/monstersApi";

interface MonstersContextI {
  monsters: MonsterI[];
  setMonsters: (monsters: MonsterI[]) => void;
}

export const MonstersContext = createContext<MonstersContextI>({
  monsters: [],
  setMonsters: () => {}
});
