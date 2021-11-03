import React, { createRef, useContext, useEffect, useRef, useState } from "react";
import { Virtual, Swiper } from 'swiper';
import { Swiper as Oswiper, SwiperSlide } from 'swiper/react';
import { PullToRefresh, List } from "antd-mobile";
import { sleep } from "antd-mobile/es/utils/sleep";
import Main from "./Main";
import 'swiper/css'
import 'swiper/css/virtual'
import styles from "./index.module.less";
import { homeContext } from '@/context';


let current = 1;
function getNextData() {
  const ret: string[] = [];
  for (let i = 0; i < 18; i++) {
    ret.unshift(current.toString());
    current++;
  }
  return ret;
}
interface IProps {
  list: number[]
}
const ContentIndex = (props: IProps) => {
  const { list } = props
  const [swiperRef, setSwiperRef] = useState<Swiper | null>(null)
  const [data, setData] = useState(() => getNextData());
  const context = useContext(homeContext)
  const currentSwiperIndex = context?.currentSwiperIndex || 1
  const swiperContainerRef = useRef<HTMLDivElement>(null)
  const handleSwiper = (swiper: Swiper) => {
    setSwiperRef(swiper)
  }
  const handleSlideChange = (swiper: Swiper) => {
    // console.log('change:',swiper);
    handleBackToTop()
  }
  useEffect(() => {
    swiperRef?.slideTo(currentSwiperIndex)
  }, [currentSwiperIndex])


  const hanleRefresh = async () => {
    console.log("触发下拉刷新");
    await sleep(1000);
    setData([...getNextData(), ...data]);
  };
  const handleBackToTop = () => {
    if (swiperContainerRef && swiperContainerRef.current) {
      swiperContainerRef.current.scrollTop = 0
    }
  }
  return (
    <div ref={swiperContainerRef} className={styles.swiperContainer}>
      <Oswiper modules={[Virtual]} spaceBetween={0} slidesPerView={1} onSwiper={handleSwiper} onSlideChange={handleSlideChange} watchSlidesProgress virtual>
        {
          list.map((item, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              {/* <Main value={item} /> */}
              <PullToRefresh onRefresh={hanleRefresh}>
                <Main value={index} data={data} />
              </PullToRefresh>
            </SwiperSlide>
          ))
        }
      </Oswiper>
    </div>
  );
}
export default React.memo(ContentIndex)
