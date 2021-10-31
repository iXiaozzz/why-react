import React, { useState } from 'react'
import styles from "./index.module.less";
import { PullToRefresh, List } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
interface iProps {
  value: number | string;
}
function randomHexColor() {
  //随机生成十六进制颜色
  var hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
  while (hex.length < 6) {
    //while循环判断hex位数，少于6位前面加0凑够6位
    hex = "0" + hex;
  }
  return "#" + hex; //返回‘#'开头16进制颜色
}
let current = 1

function getNextData() {
  const ret: string[] = []
  for (let i = 0; i < 18; i++) {
    ret.unshift(current.toString())
    current++
  }
  return ret
}
function pageOne() {
  const [data, setData] = useState(() => getNextData())
  console.log(data);
  return (
    <PullToRefresh
      onRefresh={async () => {
        await sleep(1000)
        setData([...getNextData(), ...data])
      }}
    >
      <div>
        <List style={{ minHeight: '100%', width: '100%' }}>
          {data.map(item => (
            <List.Item key={item}>{item}</List.Item>
          ))}
        </List>
      </div>

    </PullToRefresh>
  )
}
export default function (props: iProps) {
  const { value } = props;

  return (
    <div
      className={styles.mainItem}
      style={{ backgroundColor: randomHexColor() }}
    >
      {
        value === 1 ? pageOne() : value
      }

    </div>
  );
}
