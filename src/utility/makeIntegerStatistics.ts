import { MonsterI } from "../apis/monstersApi";

export const makeIntegerStatistics = (monsters: MonsterI[]) =>
  monsters.map(monsters => {
    const newStatistics = {
      power: Math.round(Number(monsters.statistics.power) * 100),
      danger: Math.round(Number(monsters.statistics.danger) * 100),
      frequency: Math.round(Number(monsters.statistics.frequency) * 100)
    };
    return { ...monsters, statistics: newStatistics };
  });
