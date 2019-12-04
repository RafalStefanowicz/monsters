import React from "react";

import { MonsterI } from "../../apis/monstersApi";

interface MonsterProps {
  monster: MonsterI;
}

export const Monster = ({
  monster: { name, statistics, description, images }
}: MonsterProps) => {
  const renderStatistics = () =>
    Object.keys(statistics).map(statistic => {
      const statisticValue =
        Number(statistics[statistic as keyof typeof statistics]) * 100;

      return (
        <li key={statistic} className="statistic-item">
          <span className="statistic-label">{statistic}</span>
          <div className="statistic-value-wrapper">
            <div
              className={`statistic-value statistic-value-${statistic}`}
              style={{ width: `${statisticValue}%` }}
            ></div>
          </div>
        </li>
      );
    });

  return (
    <div className="monster-wrapper">
      <h3 className="monster-name">{name}</h3>
      <img src={images.big} alt={name} className="monster-image"></img>
      <p className="monster-description">{description}</p>
      <ul>{renderStatistics()}</ul>
    </div>
  );
};
