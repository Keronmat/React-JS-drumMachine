import React from "react";

export default function Volume({ currentVolume, changeVolume }) {
  return (
    <div className="row">
      <div className="col-sm volume ">
        <h6>Volume</h6>
        <input
          className="slider"
          defaultValue={currentVolume}
          type="range"
          min="1"
          max="100"
          name="volume"
          onChange={event => changeVolume(event)}
        />
      </div>
      <div className="speakers col-sm align-middle">
        <hr />
        <hr />
        <hr />
      </div>
    </div>
  );
}
