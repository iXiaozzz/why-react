import React, { useRef, useState } from "react";
import { Swiper } from "antd-mobile";
import Main from "./Main";
import styles from "./index.module.less";
import { SwiperRef } from "antd-mobile/es/components/swiper";
import { PullToRefresh, List } from "antd-mobile";
import { sleep } from "antd-mobile/es/utils/sleep";

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
  list: number[];
  updateIndexChange?: (index: number) => void;
  swiperLeft?: (index: number) => void;
  swiperRight?: (index: number) => void;
}

export default function (props: IProps) {
  const [data, setData] = useState(() => getNextData());
  const hanleRefresh = async () => {
    console.log("触发下拉刷新");
    await sleep(1000);
    setData([...getNextData(), ...data]);
  };

  const { list, updateIndexChange, swiperLeft, swiperRight } = props;
  const ref = useRef<SwiperRef>(null);
  const [preIndex, setPreIndex] = useState(0);
  const [curIndex, setCurIndex] = useState(0);

  const onIndexChange = (curIndex: number) => {
    if (preIndex < curIndex) {
      swiperLeft && swiperLeft(curIndex);
      console.log(curIndex);
      // ref.current?.swipeTo(0)
    } else if (preIndex > curIndex) {
      swiperRight && swiperRight(curIndex);
      // ref.current?.swipeTo(0)
    }
    setPreIndex(curIndex);
    updateIndexChange && updateIndexChange(curIndex);
  };
  return (
    <div className={styles.swiperContainer}>
      {/* <Swiper
        allowTouchMove={true}
        ref={ref}
        loop={false}
        indicator={() => null}
        style={{ "--height": "100%"}}
        defaultIndex={curIndex}
        onIndexChange={onIndexChange}
      >
        {list.map((item) => (
          <Swiper.Item key={item}>
            <Main value={item} />
          </Swiper.Item>
        ))}
      </Swiper> */}
      <PullToRefresh onRefresh={hanleRefresh}>
        <Main value={1} data={data} />
      </PullToRefresh>
    </div>
  );
}
