import React from "react";

export default function Volume({ currentVolume, handleVolume }) {
  return (
    <div className="row">
      <div className="col-sm volume ">
        <h6>Volume</h6>
        <input
          className="slider"
          defaultValue={currentVolume}
          type="range"
          min="0"
          max="1"
          step="0.01"
          name="volume"
          onChange={event => handleVolume(event)}
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
