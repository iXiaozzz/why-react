import React, { useEffect, useState } from "react";
import { Virtual, Swiper } from "swiper";
import { Swiper as Oswiper, SwiperSlide } from "swiper/react";

interface IProp {
  data: any[];
  isVirtual?: boolean;
  SwiperContent?: React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
  allowTouchMove?: boolean;
  direction?: "horizontal" | "vertical";
  handleSwiper?: (swiper: Swiper) => void;
  handleSlideChange?: (swiper: Swiper) => void;
  [key: string]: any;
}
function MSwiper(props: IProp) {
  const {
    data,
    handleSwiper,
    handleSlideChange,
    isVirtual = true,
    SwiperContent,
    spaceBetween = 0,
    slidesPerView = 1,
    direction = "horizontal",
    initialSlide,
    ...restProps
  } = props;
  const [swiperRef, setSwiperRef] = useState<Swiper | null>(null);
  useEffect(() => {
    swiperRef?.slideTo(initialSlide);
  }, [initialSlide]);
  function onSwiper(Swiper: Swiper) {
    setSwiperRef(Swiper);
    handleSwiper && handleSwiper(Swiper);
  }
  return (
    <Oswiper
      direction={direction}
      modules={[isVirtual ? Virtual : ""]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      onSwiper={onSwiper}
      onSlideChange={handleSlideChange}
      watchSlidesProgress
      virtual
      {...restProps}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          {SwiperContent ? SwiperContent : <span>{item}</span>}
        </SwiperSlide>
      ))}
    </Oswiper>
  );
}

export default MSwiper;
