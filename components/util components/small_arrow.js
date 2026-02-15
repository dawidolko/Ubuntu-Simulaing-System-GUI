import React from "react";

export default function SmallArrow(props) {
  let angle = props.angle ? props.angle : "up";
  return <div className={" arrow-custom-" + angle}></div>;
}
