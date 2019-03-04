import React from "react";

const Display = ({ playing, getRandomColor, displayMessage, power }) => {
  const playingStyles = {
    backgroundColor: `${getRandomColor()}`
  };
  const offStyles = {
    backgroundColor: `${power ? "var(--ltRed)" : "var(--dkRed)"}`
  };
  return (
    <div
      style={playing ? playingStyles : offStyles}
      className=" col-8  display"
    >
      {displayMessage}
    </div>
  );
};
export default Display;
