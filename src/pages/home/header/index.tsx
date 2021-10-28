import React, { useState } from "react";
import styles from "./index.module.less";
// import { Popup, Space, Button } from "antd-mobile";
interface iProps {
  show: boolean;
  updateShow: (show: boolean) => void;
}
export default function (props: iProps) {
  const { show, updateShow } = props;
  const handleClick = () => updateShow(!show);
  return (
    <>
      <ul className={styles.headerContainer}>
        <li onClick={handleClick}>
          <i>28</i>&nbsp;oct.2021
        </li>
        <li>深圳&nbsp;多云&nbsp;25℃</li>
      </ul>
    </>
  );
}
