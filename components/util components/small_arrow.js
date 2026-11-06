import React from "react";

export default function SmallArrow(props) {
  let angle = props.angle ? props.angle : "up";
  return <span className={"block arrow-custom-" + angle}></span>;
}
