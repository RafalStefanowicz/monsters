import React, { useContext } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

import "./styles.css";
import { Monster } from "./Monster";
import { MonstersContext } from "../MonsersContext/MonstersContext";

export const MonstersSwiper = () => {
  const { monsters } = useContext(MonstersContext);

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

  return (
    <div className="swiper-wrapper">
      <Swiper {...swiperParams}>{renderMonsters()}</Swiper>
    </div>
  );
};
