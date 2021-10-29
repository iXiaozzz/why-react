import React from "react";
import styles from "./index.module.less";
import { Transition } from "react-transition-group";
import { px2rem } from "@/utils";

const DURATION = 0.15 * 1000;
const defaultStyle = {
  transition: `top ${DURATION}ms ease-in-out`,
  top: "-100%",
};
const transitionStyles = {
  entering: { top: "-100%", opacity: 0.5 },
  entered: {
    top: px2rem(120),
    transition: `top ${DURATION}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    opacity: 0.5,
  },
  exited: {
    top: "-100%",
    transition: `top ${DURATION}ms ease-in-out`,
    opacity: 0,
  },
};
interface iProps {
  show: boolean;
}
export default function (props: iProps) {
  const { show } = props;
  const nodeRef = React.useRef(null);
  return (
    <>
      <Transition in={show} timeout={DURATION} nodeRef={nodeRef}>
        {/* <div className={styles.cardListContainer} >this is Card List.</div>; */}
        {(state: any) => (
          <div
            ref={nodeRef}
            className={styles.cardListContainer}
            style={{ ...defaultStyle, ...transitionStyles[state] }}
          >
            this is Card List. ({state})
          </div>
        )}
      </Transition>
    </>
  );
}
