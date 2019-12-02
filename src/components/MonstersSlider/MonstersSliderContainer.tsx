import React, { useContext, useState } from "react";
import { MonstersContext } from "../MonsersContext/MonstersContext";
import { MonstersSliderPresentional } from "./MonstersSliderPresentional";

export const MonstersSliderContainer = () => {
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
    <MonstersSliderPresentional
      updateSwiper={updateSwiper}
      goNext={goNext}
      goPrev={goPrev}
      monsters={monsters}
    />
  );
};
