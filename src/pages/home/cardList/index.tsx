import React, { useState, useEffect } from "react";
import styles from "./index.module.less";
import { Transition } from "react-transition-group";
import { px2rem, randomHexColor } from "@/utils";
import CardItem from "./CardItem";

const DURATION = 0.15 * 1000;
const defaultStyle = {
  transition: `top ${DURATION}ms ease-in-out`,
  top: "-100%",
};
const transitionStyles = {
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
  img: string;
  date: string;
}
function mockData(month: number = 3, size: number = 13) {
  let arr: IList[] = [];

  for (let i = 0; i < month; i++) {
    let key = i + 1 + "";
    let obj: IList = {
      title: "",
      data: [],
    };
    obj.title = key;
    for (let j = 0; j < size; j++) {
      obj.data.push({
        img: randomHexColor(),
        date: j + "",
      });
    }
    arr.push(obj);
  }
  return arr;
}

function CardList(props: IProps) {
  const { show } = props;
  const nodeRef = React.useRef(null);
  const [list, setList] = useState<IList[]>([]);

  useEffect(() => {
    let res = mockData(3, 13);
    setList(res);
  }, [show]);

  return (
    <>
      <Transition in={show} timeout={DURATION} nodeRef={nodeRef}>
        {/* <div className={styles.cardListContainer} >this is Card List.</div>; */}
        {(state: any) => (
          <div
            ref={nodeRef}
            className={styles.cardListContainer}
            style={{ ...defaultStyle, ...transitionStyles[state] }}
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
