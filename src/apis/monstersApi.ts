import { MONSTER_ATTRIBUTES } from "../types/MONSTER_ATTRIBUTES";

export interface MonsterI {
  name: string;
  statistics: {
    [MONSTER_ATTRIBUTES.POWER]: number;
    [MONSTER_ATTRIBUTES.DANGER]: number;
    [MONSTER_ATTRIBUTES.FREQUENCY]: number;
  };
  description: string;
  images: {
    thumb: string;
    big: string;
  };
  emoticon?: string;
}

const apiUrls = {
  getMonstersUrl: () => "http://localhost:8080/api/v1/monsters",
  getMonsterDetailsUrl: (monsterSlug: string) =>
    `http://localhost:8080/api/v1/monster/${monsterSlug}`
};

const fetchFromApi = async (request: string) => {
  const response = await fetch(request);
  const monsters = await response.json();
  return monsters.data;
};

export const fetchMonstersDetails = async () => {
  const monsters = await fetchFromApi(apiUrls.getMonstersUrl());
  let monstersDetailsPromises = monsters.map(({ slug }: { slug: string }) =>
    fetchFromApi(apiUrls.getMonsterDetailsUrl(slug))
  );
  return (await Promise.all(monstersDetailsPromises)) as MonsterI[];
};
