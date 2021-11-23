import React, { useState, useEffect } from "react";
import styles from "./index.module.less";
import { Button } from "antd-mobile";
import MSwiper from "@/common/components/MSwiper";
import { dealSingleDigits, px2rem } from "@/utils/index";
import { MONTHS } from "@/utils/constant";
import { sleep } from "antd-mobile/es/utils/sleep";
interface iProps {
  show: boolean;
  currentDate: string;
  updateShow: (show: boolean) => void;
}
export default function (props: iProps) {
  const { show, updateShow, currentDate } = props;
  const [count, setCount] = useState(0);
  const [days, setDays] = useState<Array<string>>([]);
  const [year, setYear] = useState(1970);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const dealCurrentDate = (date: string) => {
    return date.split("/").map((v) => Number(v));
  };

  useEffect(() => {
    let [y, m, d] = dealCurrentDate(currentDate);
    setYear(y);
    setMonth(m - 1);
    setDay(d - 1);
  }, [currentDate]);

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
              initialSlide={day}
              allowTouchMove={false}
              height={43}
            />
          </div>
          <div className={[styles.ib, styles.date].join(" ")}>
            <div>
              <MSwiper
                style={{ marginLeft: "0", marginRight: "0" }}
                data={MONTHS}
                initialSlide={month}
                direction="vertical"
                allowTouchMove={false}
                height={20}
              />
            </div>
            <span>.{year}</span>
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
