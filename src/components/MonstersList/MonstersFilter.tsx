import React from "react";
import { SearchIcon } from "../Icons/SearchIcon";

interface MonstersFilterProps {
  inputValue: string;
  handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const MonstersFilter = ({
  inputValue,
  handleInputChange
}: MonstersFilterProps) => (
  <div className="monsters-filter-wrapper">
    <div className="monsters-filter-inner">
      <SearchIcon className="monsters-filter-icon" />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search"
        className="monsters-filter"
      ></input>
    </div>
  </div>
);
