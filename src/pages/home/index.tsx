import React, { useState, useEffect, Suspense, createContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import IconSvg from "@/common/components/IconSvg";
import { px2rem } from "@/utils";
import Header from "./header";
import { Loading } from "antd-mobile";
import styles from "./index.module.less";
const CardList = React.lazy(() => import("./cardList"));
import Content from "./content";
import { homeContext } from "@/context";
import dayjs from "dayjs";
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
  const [currentSwiperIndex, setCurrentSwiperIndex] = useState(1);
  const list = mockData(2000);
  const [swiperList, setSwiperList] = useState(list);
  const [currentDate, setCurrentDate] = useState(dayjs().format("YYYY/DD/MM"));

  const handleCloseCardList = (index: number) => {
    setShow(false);
    setCurrentSwiperIndex(index);
  };
  useEffect(() => {
    console.log("parent show:", show);
  }, [show]);

  return (
    <homeContext.Provider
      value={{
        show,
        setShow,
        currentSwiperIndex,
        setCurrentDate,
        setCurrentSwiperIndex,
        handleCloseCardList,
      }}
    >
      <div className={styles.homeContainer}>
        <div className={styles.headerCardContainer}>
          <div className={styles.headerCard}>
            <Header
              show={show}
              updateShow={setShow}
              currentDate={currentDate}
            />
          </div>
        </div>
        <Content list={swiperList} />
        <Suspense fallback={<Loading />}>
          <CardList show={show} />
        </Suspense>
      </div>
    </homeContext.Provider>
  );
}

export default Home;
