import React, { useState, useEffect } from "react";
import { Transform } from "stream";
import styles from "./index.module.less";
import { Button } from "antd-mobile";
import MSwiper from '@/common/components/MSwiper';
import { dealSingleDigits, px2rem } from '@/utils/index';
import { sleep } from 'antd-mobile/es/utils/sleep'
interface iProps {
  show: boolean;
  updateShow: (show: boolean) => void;
}
export default function (props: iProps) {
  const { show, updateShow } = props;
  const [count, setCount] = useState(0);
  const [months, setMonths] = useState<Array<string>>([])

  const mockMonths = () => {
    let max = 30
    let res: string[] = []
    for (let i = 1; i < max + 1; i++) {
      res.push(dealSingleDigits(i))
    }
    return res
  }

  useEffect(() => {
    setMonths(mockMonths())
  }, [show])


  const handleClick = () => {
    setCount((count) => {
      let newCount = ++count % 2;
      return newCount && count;
    });
    updateShow(!show);
  };
  return (
    <>
      <div className={styles.headerContainer}>
        <div onClick={handleClick}>
          <div className={[styles.ib, styles.day].join(' ')}>
            <MSwiper data={months} direction="vertical" height={43} />
          </div>
          <div className={[styles.ib, styles.date].join(' ')}>
            &nbsp;
            <div className={[styles.ib, styles.date].join(' ')}>
              oct
            </div>
            .2021
            <i style={{ transform: `rotate(${count * 180}deg)` }}></i>
          </div>
          {/* <span className={styles.date}>&nbsp;oct.2021 <i className={!show? styles.rotate2:styles.rotate1}></i></span> */}
        </div>
        <div>
          {show ? (
            <Button color="primary" size="mini" fill="outline">
              今天
            </Button>
          ) : (
            <li>深圳&nbsp;多云&nbsp;25℃</li>
          )}
        </div>

      </div>
    </>
  );
}
