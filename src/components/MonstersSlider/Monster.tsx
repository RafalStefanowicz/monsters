import React from "react";

import { MonsterI } from "../../apis/monstersApi";

interface MonsterProps {
  monster: MonsterI;
}

export const Monster = ({
  monster: { name, statistics, description, images }
}: MonsterProps) => {
  const renderStatistics = () =>
    Object.keys(statistics).map(statistic => (
      <div key={statistic}>
        <span>{statistic}</span>
        <div>{statistics[statistic as keyof typeof statistics]}</div>
      </div>
    ));

  return (
    <>
      <h3>{name}</h3>
      <img src={images.big} alt={name} height="200px"></img>
      <p>{description}</p>
      <div>{renderStatistics()}</div>
    </>
  );
};
