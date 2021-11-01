import React, { useState, useEffect, Suspense } from "react";
import { useHistory, useLocation } from "react-router-dom";
import IconSvg from "@/common/components/IconSvg";
import { px2rem } from "@/utils";
import Header from "./header";
import { Loading } from "antd-mobile";
import styles from "./index.module.less";
// import CardList from './cardList';
const CardList = React.lazy(() => import("./cardList"));
import Content from "./content";
const mockData = (size: number): number[] => {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(i);
  }
  return arr;
};
function Home() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const list = mockData(100);
  const size = 5;
  const [sliceIndex, setSliceIndex] = useState(0);
  let lastIndex = 0;
  const [swiperList, setSwiperList] = useState(list.slice(sliceIndex, size));

  const left = () => {
    const clone = [...swiperList];
    clone.shift();
    clone.push(list[sliceIndex + size], list[sliceIndex + size + 1]);
    setSliceIndex(sliceIndex + 2);
    console.log("left:", clone, sliceIndex);
    setSwiperList(clone);
  };

  const right = () => {
    const clone = [...swiperList];
    clone.pop();
    clone.unshift(list[sliceIndex - 2], list[sliceIndex - 1]);
    setSliceIndex(sliceIndex - 2);
    console.log("right:", clone, sliceIndex);
    setSwiperList(clone);
  };

  useEffect(() => {
    console.log("parent show:", show);
  }, [show]);
  
  return (
    <div className={styles.homeContainer}>
      <div className={styles.headerCardContainer}>
        <div className={styles.headerCard}>
          <Header show={show} updateShow={setShow} />
        </div>
      </div>
      <Content list={swiperList} swiperLeft={left} swiperRight={right} />
      <Suspense fallback={<Loading />}>
        <CardList show={show} /> 
      </Suspense>
    </div>
  );
}

export default Home;
