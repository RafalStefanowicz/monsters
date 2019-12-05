import React, { memo } from "react";

import { MonsterI } from "../../apis/monstersApi";

interface MonstersListProps {
  monsters: MonsterI[];
}

const _MonstersList = ({ monsters }: MonstersListProps) => {
  const renderMonsters = () =>
    monsters.map(({ images, name, statistics }) => (
      <li key={name} className="monsters-item">
        <img src={images.thumb} alt={name} className="monster-item-image" />
        <span className="monster-item-name ">{name}</span>
        <ul className="monster-statistic-list">
          <li className="monster-statistic-item monster-statistic-item-power">
            <span>Power:</span>
            <span>{statistics.power}</span>
          </li>
          <li className="monster-statistic-item monster-statistic-item-danger">
            <span>Danger:</span>
            <span>{statistics.danger}</span>
          </li>
          <li className="monster-statistic-item monster-statistic-item-frequency ">
            <span>Frequency:</span>
            <span>{statistics.frequency}</span>
          </li>
        </ul>
      </li>
    ));
  return <ul>{renderMonsters()}</ul>;
};

export const MonstersList = memo(
  _MonstersList,
  ({ monsters: prevMonsters }, { monsters: currentMonsters }) =>
    prevMonsters.length === currentMonsters.length
);
