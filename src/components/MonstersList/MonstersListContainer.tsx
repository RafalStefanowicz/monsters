import React, { useContext, useState } from "react";
import { Range } from "react-input-range";
import "react-input-range/lib/css/index.css";

import "./styles.css";
import { MonstersContext } from "../MonsersContext/MonstersContext";
import { MonstersFilter } from "./MonstersFilter";
import { filterMonsters } from "../../utility/filterMonsters";
import { MonstersRange } from "./MonstersRange";
import { MONSTER_ATTRIBUTES } from "../../types/MONSTER_ATTRIBUTES";
import { MonstersList } from "./MonstersList";

export interface RangeValueI {
  [MONSTER_ATTRIBUTES.POWER]: Range;
  [MONSTER_ATTRIBUTES.DANGER]: Range;
  [MONSTER_ATTRIBUTES.FREQUENCY]: Range;
}

const INITIAL_RANGE_VALUE = {
  [MONSTER_ATTRIBUTES.POWER]: { min: 0, max: 100 },
  [MONSTER_ATTRIBUTES.DANGER]: { min: 0, max: 100 },
  [MONSTER_ATTRIBUTES.FREQUENCY]: { min: 0, max: 100 }
};

export const MonstersListContainer = () => {
  const { monsters } = useContext(MonstersContext);
  const [inputValue, setinputValue] = useState("");
  const [rangeValue, setRangeValue] = useState<RangeValueI>(
    INITIAL_RANGE_VALUE
  );

  const handleRangeChange = (name: MONSTER_ATTRIBUTES) => (
    value: Range | number
  ) => {
    if (typeof value === "number") return;
    setRangeValue(prevValue => ({ ...prevValue, [name]: value }));
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setinputValue(e.currentTarget.value);
  };

  const filteredMonsters = filterMonsters(monsters, inputValue, rangeValue);

  return (
    <>
      <MonstersFilter
        inputValue={inputValue}
        handleInputChange={handleInputChange}
      />
      <div className="monsters-range-container">
        <MonstersRange
          rangeValue={rangeValue.power}
          handleRangeChange={handleRangeChange(MONSTER_ATTRIBUTES.POWER)}
          attributeName={MONSTER_ATTRIBUTES.POWER}
        />
        <MonstersRange
          rangeValue={rangeValue.danger}
          handleRangeChange={handleRangeChange(MONSTER_ATTRIBUTES.DANGER)}
          attributeName={MONSTER_ATTRIBUTES.DANGER}
        />
        <MonstersRange
          rangeValue={rangeValue.frequency}
          handleRangeChange={handleRangeChange(MONSTER_ATTRIBUTES.FREQUENCY)}
          attributeName={MONSTER_ATTRIBUTES.FREQUENCY}
        />
      </div>
      <MonstersList monsters={filteredMonsters} />
    </>
  );
};
