import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

import { MonsterI } from "../../apis/monstersApi";
import { Monster } from "./Monster";

interface MonstersSliderPresentionalProps {
  updateSwiper: any;
  goPrev: () => void;
  goNext: () => void;
  monsters: MonsterI[];
}

export const MonstersSliderPresentional = ({
  updateSwiper,
  goPrev,
  goNext,
  monsters
}: MonstersSliderPresentionalProps) => {
  const swiperParams = {
    getSwiper: updateSwiper,
    loop: true,
    grabCursor: true,
    keyboard: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    renderPagination: () => {
      return <div className="swiper-pagination"></div>;
    }
  };

  const renderMonsters = () =>
    monsters.map(monster => (
      <div key={monster.name}>
        <Monster monster={monster} />
      </div>
    ));

  return (
    <>
      <Swiper {...swiperParams}>{renderMonsters()}</Swiper>
      <button onClick={goPrev}>Prev</button>
      <button onClick={goNext}>Next</button>
    </>
  );
};
