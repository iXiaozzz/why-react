import React, { useState, useEffect, Suspense } from "react";
import { useHistory, useLocation } from "react-router-dom";
import IconSvg from "@/common/components/IconSvg";
import { px2rem } from "@/utils";
import Header from "./header";
import { Loading } from "antd-mobile";
import styles from "./index.module.less";
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
  const list = mockData(2000);
  const [swiperList, setSwiperList] = useState(list);

  useEffect(() => {
    // console.log("parent show:", show);
  }, [show]);
  
  return (
    <div className={styles.homeContainer}>
      <div className={styles.headerCard}>
        <Header show={show} updateShow={setShow} />
      </div>
      <Content list={swiperList} />
      <Suspense fallback={<Loading />}>
        <CardList show={show} />
      </Suspense>
    </div>
  );
}

export default Home;
