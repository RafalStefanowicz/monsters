import { MonsterI } from "../apis/monstersApi";
import { RangeValueI } from "../components/MonstersList/MonstersListContainer";
import { MONSTER_ATTRIBUTES } from "../types/MONSTER_ATTRIBUTES";

type FilterByNameType = (monsters: MonsterI[], name: string) => MonsterI[];

type FilterByRangeType = (
  monsters: MonsterI[],
  rangeValue: RangeValueI
) => MonsterI[];

type FilterMonstersType = (
  monsters: MonsterI[],
  inputValue: string,
  rangeValue: RangeValueI
) => MonsterI[];

const isBetween = (x: number, min: number, max: number) => x >= min && x <= max;

const filterByName: FilterByNameType = (monsters, name) =>
  monsters.filter(({ name: monsterName }) =>
    monsterName.toLowerCase().includes(name.toLowerCase())
  );

const filterByRange: FilterByRangeType = (monsters, range) =>
  monsters.filter(
    ({ statistics }) =>
      //i have to reverse returned value, to filter list correctly
      !Object.entries(statistics).find(([key, value]) => {
        // above function will return variable, if find any value out of the range or undefined while every stats is within the range
        return !isBetween(
          value,
          range[key as MONSTER_ATTRIBUTES].min,
          range[key as MONSTER_ATTRIBUTES].max
        );
      })
  );

export const filterMonsters: FilterMonstersType = (
  monsters,
  inputValue,
  rangeValue
) => filterByRange(filterByName(monsters, inputValue), rangeValue);
