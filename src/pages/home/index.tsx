import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import IconSvg from "@/common/components/IconSvg";
import { px2rem } from "@/utils";
function Home() {
  const history = useHistory();
  return (
    <div>
      <h1>this is home.</h1>
      <p>
        <IconSvg
          iconName="icon-aixin"
          fontSize={px2rem(75)}
        />
      </p>
    </div>
  );
}

export default Home;
