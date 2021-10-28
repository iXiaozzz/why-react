import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import IconSvg from "@/common/components/IconSvg";
import { px2rem } from "@/utils";
import Header from "./header";
import styles from "./index.module.less";
function Home() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log("parent show:", show);
  }, [show]);
  return (
    <div className={styles.homeContainer}>
      <div className={styles.headerCard}>
        <Header show updateShow={setShow} />
      </div>
      <div>{show ? "hello world" : "no hello"}</div>
      <p>
        <IconSvg iconName="icon-aixin" fontSize={px2rem(75)} />
      </p>
    </div>
  );
}

export default Home;
