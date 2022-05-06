import React, { useState, useEffect } from "react";
import styles from "./index.module.less";
import { Transition } from "react-transition-group";
import { px2rem, randomHexColor, createRandomDate } from "@/utils";
import { InfiniteScroll, List } from "antd-mobile";
import { sleep } from "antd-mobile/es/utils/sleep";
import CardItem from "./CardItem";

const DURATION = 0.15 * 1000;
const defaultStyle = {
  transition: `top ${DURATION}ms ease-in-out`,
  top: "-100%",
};
const transitionStyles: { [key: string]: any } = {
  entering: { top: "-100%", opacity: 0.5 },
  entered: {
    top: px2rem(120),
    transition: `top ${DURATION}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    opacity: 0.5,
  },
  exited: {
    top: "-100%",
    transition: `top ${DURATION}ms ease-in-out`,
    opacity: 0,
  },
};
interface IProps {
  show: boolean;
}
export interface IList {
  title: string;
  data: IData[];
}
export interface IData {
  id: number;
  img: string;
  date: string;
}
async function mockData(month: number = 3, size: number = 13) {
  let arr: IList[] = [];
  let count: number = 1;
  for (let i = 0; i < month; i++) {
    let key = i + 1 + "";
    let obj: IList = {
      title: "",
      data: [],
    };
    obj.title = key;
    for (let j = 0; j < size; j++) {
      obj.data.push({
        id: count++,
        img: randomHexColor(),
        date: createRandomDate(),
      });
    }
    arr.push(obj);
  }
  await sleep(2000);
  return arr;
}

function CardList(props: IProps) {
  const { show } = props;
  const nodeRef = React.useRef(null);
  const [list, setList] = useState<IList[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [count, setCount] = useState(3);

  const loadMore = async () => {
    console.log("加载更多。。。count:", count);
    const res = await mockData(2, 31);
    setList((value) => [...value, ...res]);
    setCount((count) => --count);
    setHasMore(count > 0);
  };

  // useEffect(async () => {
  //   let res = await mockData(3, 13);
  //   setList(res);
  // }, [show]);

  return (
    <>
      <Transition in={show} timeout={DURATION} nodeRef={nodeRef}>
        {/* <div className={styles.cardListContainer} >this is Card List.</div>; */}
        {(state) => (
          <div
            ref={nodeRef}
            className={styles.cardListContainer}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {list?.map((item, index) => {
              return (
                <CardItem
                  key={index}
                  header={<span>{item.title}月</span>}
                  content={null}
                  list={item?.data}
                />
              );
            })}
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
          </div>
        )}
      </Transition>
    </>
  );
}
export default React.memo(
  CardList,
  (prevProp, nextProp) => prevProp.show === nextProp.show
);
