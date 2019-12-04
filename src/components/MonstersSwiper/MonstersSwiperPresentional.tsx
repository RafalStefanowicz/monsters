import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { MonsterI } from "../../apis/monstersApi";

import "./styles.css";
import { Monster } from "./Monster";

interface MonstersSwiperPresentionalProps {
  updateSwiper: any;
  goPrev: () => void;
  goNext: () => void;
  monsters: MonsterI[];
}

export const MonstersSwiperPresentional = ({
  monsters
}: MonstersSwiperPresentionalProps) => {
  const swiperParams = {
    loop: true,
    grabCursor: true,
    keyboard: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };

  const renderMonsters = () =>
    monsters.map(monster => (
      <div key={monster.name}>
        <Monster monster={monster} />
      </div>
    ));

  return <Swiper {...swiperParams}>{renderMonsters()}</Swiper>;
};
