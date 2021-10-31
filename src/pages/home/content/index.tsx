import React, { createRef, useRef, useState } from "react";
import { Virtual, Swiper } from 'swiper';
import { Swiper as Oswiper, SwiperSlide } from 'swiper/react';
import Main from "./Main";
import 'swiper/css'
import 'swiper/css/virtual'
import styles from "./index.module.less";

interface IProps {
  list: number[]
}
const ContentIndex = (props: IProps) => {
  const { list } = props
  const [swiperRef, setSwiperRef] = useState<Swiper | null>(null)
  const hanleSwiper = (swiper: any) => {
    setSwiperRef(swiper)
  }
  const handleSlideChange = (swiper: any) => {
    // console.log('change:',swiper);
  }

  const handleClick = () => {
    swiperRef && swiperRef?.slideTo(3, 500, true)
  }
  return (
    <div className={styles.swiperContainer}>
      <Oswiper style={{ height: '100%' }} modules={[Virtual]} spaceBetween={0} slidesPerView={1} onSwiper={hanleSwiper} onSlideChange={handleSlideChange} watchSlidesProgress virtual>
        {
          list.map((item, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <Main value={item} />
            </SwiperSlide>
          ))
        }
      </Oswiper>
    </div>
  );
}
export default React.memo(ContentIndex)
