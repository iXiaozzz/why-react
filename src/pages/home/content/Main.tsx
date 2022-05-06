import React, {
  createRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { List } from "antd-mobile";
import { px2rem, randomHexColor } from "@/utils";
import styles from "./index.module.less";
interface IProps {
  value?: number | string;
  data?: any[];
}

export default function (props: IProps) {
  const { value, data } = props;
  const listRef = useRef(null);

  useEffect(() => {
    // console.log('listRef:', listRef);
  }, [value]);

  return (
    <List>
      <h1 ref={listRef} style={{ fontSize: px2rem(80) }}>
        {value}
      </h1>
      {data?.map((item) => (
        <List.Item key={item}>{item}</List.Item>
      ))}
    </List>
  );
}
