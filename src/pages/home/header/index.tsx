import React, { useState, useEffect } from "react";
import { Transform } from "stream";
import styles from "./index.module.less";
import { Button } from "antd-mobile";
import MSwiper from "@/common/components/MSwiper";
import { dealSingleDigits, px2rem } from "@/utils/index";
import { MONTHS } from "@/utils/constant";
import { sleep } from "antd-mobile/es/utils/sleep";
interface iProps {
  show: boolean;
  updateShow: (show: boolean) => void;
}
export default function (props: iProps) {
  const { show, updateShow } = props;
  const [count, setCount] = useState(0);
  const [days, setDays] = useState<Array<string>>([]);

  const mockDays = () => {
    let max = 30;
    let res: string[] = [];
    for (let i = 1; i < max + 1; i++) {
      res.push(dealSingleDigits(i));
    }
    return res;
  };

  useEffect(() => {
    setDays(mockDays());
  }, [show]);

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
          <div className={[styles.ib, styles.day].join(" ")}>
            <MSwiper
              data={days}
              direction="vertical"
              allowTouchMove={false}
              height={43}
            />
          </div>
          <div className={[styles.ib, styles.date].join(" ")}>
            <div>
              <MSwiper
                style={{ marginLeft: "0", marginRight: "0" }}
                data={MONTHS}
                direction="vertical"
                allowTouchMove={true}
                height={20}
              />
            </div>
            <span>.2021</span>
            <i
              className={styles.triangle}
              style={{ transform: `rotate(${count * 180}deg)` }}
            ></i>
          </div>
          {/* <span className={styles.date}>&nbsp;oct.2021 <i className={!show? styles.rotate2:styles.rotate1}></i></span> */}
        </div>
        <div>
          {show ? (
            <Button color="primary" size="mini" fill="outline">
              今天
            </Button>
          ) : (
            <div>深圳&nbsp;多云&nbsp;25℃</div>
          )}
        </div>
      </div>
    </>
  );
}
