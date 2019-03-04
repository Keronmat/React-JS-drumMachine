import React from "react";
import Display from "./DisplayComponent";
import { CustomInput, FormGroup, Label } from "reactstrap";

export default function TopSwitchPanel({
  power,
  displayMessage,
  toggleDisplay,
  getRandomColor,
  playing,
  handlePower
}) {
  return (
    <React.Fragment>
      <div className="col-4 power">
        <FormGroup>
          <Label for="exampleCheckbox">Power</Label>
          <div className="switch">
            <CustomInput
              type="switch"
              name="customSwitch"
              id="exampleCustomSwitch"
              label={!power ? "On" : "Off"}
              onChange={() => handlePower()}
              defaultChecked={false}
            />
          </div>
        </FormGroup>
      </div>
      <Display
        displayMessage={displayMessage}
        toggleDisplay={toggleDisplay}
        power={power}
        getRandomColor={getRandomColor}
        playing={playing}
      />
    </React.Fragment>
  );
}
