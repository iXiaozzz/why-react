import React, { memo, useContext } from "react";
import { Divider, List } from "antd-mobile";
import styles from "./index.module.less";
import { IList, IData } from "./index";
import { px2rem } from "@/utils";
import { homeContext } from "@/context";
function Card(props: { data: IData }) {
  const { data } = props;
  const context = useContext(homeContext);

  const handleClick = (index: number) => {
    context?.setCurrentDate(data.date);
    context?.handleCloseCardList(index);
  };
  return (
    <div className={styles.card} onClick={() => handleClick(data.id)}>
      <p className={styles.imgBox} style={{ backgroundColor: data?.img }}></p>
      <p className={styles.date}>{data.date}</p>
    </div>
  );
}
interface IProps {
  header?: React.ReactNode;
  content?: React.ReactNode;
  list?: IData[];
}
function CardItem(props: IProps) {
  const { list } = props;

  return (
    <div className={styles.cardItem}>
      <div className={styles.titleBox}>
        <Divider
          style={{
            color: "#333",
            fontSize: px2rem(70),
          }}
        >
          {props.header}
        </Divider>
      </div>

      <div className={styles.contentBox}>
        {props.content
          ? props.content
          : list?.map((item, index) => <Card key={index} data={item} />)}
      </div>
    </div>
  );
}
export default React.memo(
  CardItem,
  (prevProp, nextProp) => prevProp.list?.length === nextProp.list?.length
);
