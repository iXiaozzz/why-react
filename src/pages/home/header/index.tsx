import React, { useState } from "react";
import { Transform } from "stream";
import styles from "./index.module.less";
import { Button } from "antd-mobile";
interface iProps {
  show: boolean;
  updateShow: (show: boolean) => void;
}
export default function (props: iProps) {
  const { show, updateShow } = props;
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => {
      let newCount = ++count % 2;
      return newCount && count;
    });
    updateShow(!show);
  };
  return (
    <>
      <ul className={styles.headerContainer}>
        <li onClick={handleClick}>
          <span className={styles.day}>28</span>
          <span className={styles.date}>
            &nbsp;oct.2021
            <i style={{ transform: `rotate(${count * 180}deg)` }}></i>
          </span>
          {/* <span className={styles.date}>&nbsp;oct.2021 <i className={!show? styles.rotate2:styles.rotate1}></i></span> */}
        </li>
        {show ? (
          <Button color="primary" size="mini" fill="outline">
            今天
          </Button>
        ) : (
          <li>深圳&nbsp;多云&nbsp;25℃</li>
        )}
      </ul>
    </>
  );
}
