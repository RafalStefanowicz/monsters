import React from "react";
import { MonsterI } from "../../apis/monstersApi";

interface MonstersListProps {
  monsters: MonsterI[];
}

export const MonstersList = ({ monsters }: MonstersListProps) => {
  const renderMonsters = () =>
    monsters.map(({ images, name, statistics }) => (
      <li key={name} className="monsters-item">
        <img src={images.thumb} alt={name} className="monster-item-image" />
        <span className="monster-item-name ">{name}</span>
        <ul>
          <li className="monster-item-statistic monster-item-statistic-power">
            <span>Power:</span>
            <span>{statistics.power}</span>
          </li>
          <li className="monster-item-statistic monster-item-statistic-danger">
            <span>Danger:</span>
            <span>{statistics.danger}</span>
          </li>
          <li className="monster-item-statistic monster-item-statistic-frequency ">
            <span>Frequency:</span>
            <span>{statistics.frequency}</span>
          </li>
        </ul>
      </li>
    ));
  return <ul>{renderMonsters()}</ul>;
};
