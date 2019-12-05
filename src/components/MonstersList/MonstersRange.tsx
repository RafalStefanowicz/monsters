import React from "react";
import InputRange, { Range } from "react-input-range";

import { ATTRIBUTE_CLASS_NAMES } from "../../types/ATTRIBUTE_CLASS_NAMES";
import { MONSTER_ATTRIBUTES } from "../../types/MONSTER_ATTRIBUTES";

interface MonstersRangeProps {
  rangeValue: Range;
  handleRangeChange: (value: Range | number) => void;
  attributeName: MONSTER_ATTRIBUTES;
}

export const MonstersRange = ({
  rangeValue,
  handleRangeChange,
  attributeName
}: MonstersRangeProps) => {
  return (
    <div className={`range-wrapper ${ATTRIBUTE_CLASS_NAMES[attributeName]}`}>
      <span className="range-label">{attributeName}</span>
      <InputRange
        maxValue={100}
        minValue={0}
        value={rangeValue}
        onChange={handleRangeChange}
      />
    </div>
  );
};
