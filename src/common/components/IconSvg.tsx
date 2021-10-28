import React from "react";
type tProps = {
  iconName: string;
  height?: number | string;
  width?: number | string;
  fillColor?: string;
  fontSize?: string;
};
function IconSvg(props: tProps) {
  const { iconName, height, width, fillColor, fontSize } = props;
  return (
    <svg className="icon" aria-hidden="true" fontSize={fontSize}>
      <use xlinkHref={`#${iconName}`} fill={fillColor}></use>
    </svg>
  );
}
export default IconSvg;
