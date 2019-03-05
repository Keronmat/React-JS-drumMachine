import React from "react";

const Display = props => {
  const playingStyles = {
    backgroundColor: `${props.getRandomColor()}`
  };
  const offStyles = {
    backgroundColor: `${props.power.power ? "var(--ltRed)" : "var(--dkRed)"}`
  };
  return (
    <div
      style={props.playing ? playingStyles : offStyles}
      className=" col-8  display"
    >
      {props.display.display}
    </div>
  );
};
export default Display;
