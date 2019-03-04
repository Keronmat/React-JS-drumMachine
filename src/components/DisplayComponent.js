import React from "react";

const Display = ({
  playing,
  getRandomColor,
  displayMessage,
  toggleDisplay,
  power
}) => {
  const playingStyles = {
    backgroundColor: `${getRandomColor()}`
  };
  const offStyles = {
    backgroundColor: `${power ? "var(--ltRed)" : "var(--dkRed)"}`
  };
  return (
    <div
      onChange={() => toggleDisplay()}
      style={playing ? playingStyles : offStyles}
      className=" col-8  display"
    >
      {displayMessage}
    </div>
  );
};
export default Display;
