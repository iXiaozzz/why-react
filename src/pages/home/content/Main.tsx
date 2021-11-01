import React, { useState } from "react";
import { List } from "antd-mobile";
import { randomHexColor } from "@/utils";
import styles from "./index.module.less";
interface IProps {
  value?: number | string;
  data?: any[];
}

export default function (props: IProps) {
  const { data } = props;
  return (
    <List>
      {data?.map((item) => (
        <List.Item key={item}>{item}</List.Item>
      ))}
    </List>
  );
}
