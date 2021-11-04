import React from 'react';
import { Virtual, Swiper } from 'swiper';
import { Swiper as Oswiper, SwiperSlide } from 'swiper/react';

interface IProp {
  data: any[];
  isVirtual?: boolean;
  SwiperContent?: React.ReactNode;
  spaceBetween?: number;
  slidesPerView?: number;
  allowTouchMove?: boolean;
  direction?: 'horizontal' | 'vertical'
  onSwiper?: (swiper: Swiper) => void;
  onSlideChange?: (swiper: Swiper) => void;
  [key: string]: any
}
function MSwiper(props: IProp) {
  const { data, onSwiper, onSlideChange, isVirtual = true, SwiperContent, spaceBetween = 0, slidesPerView = 1, direction = "horizontal", ...restProps } = props
  return (
    <Oswiper direction={direction} modules={[isVirtual ? Virtual : '']} spaceBetween={spaceBetween} slidesPerView={slidesPerView} onSwiper={onSwiper} onSlideChange={onSlideChange} watchSlidesProgress virtual {...restProps}>
      {
        data.map((item, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            {
              SwiperContent ? SwiperContent : <span>{item}</span>
            }
          </SwiperSlide>
        ))
      }
    </Oswiper>
  )
}

export default MSwiper