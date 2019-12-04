import React, { useContext, useState } from "react";

import { MonstersContext } from "../MonsersContext/MonstersContext";
import { MonstersSwiperPresentional } from "./MonstersSwiperPresentional";

export const MonstersSwiperContainer = () => {
  const { monsters, setMonsters } = useContext(MonstersContext);
  const [swiper, updateSwiper] = useState<any>(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
      swiper && console.log(swiper);
    }
  };

  return (
    <MonstersSwiperPresentional
      updateSwiper={updateSwiper}
      goNext={goNext}
      goPrev={goPrev}
      monsters={monsters}
    />
  );
};
