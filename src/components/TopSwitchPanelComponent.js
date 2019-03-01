import React from "react";
import Display from "./DisplayComponent";
import { CustomInput, FormGroup, Label } from "reactstrap";

export default function TopSwitchPanel({
  isChecked,
  toggleCheckBox,
  displayMessage,
  toggleDisplay,
  getRandomColor,
  playing
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
              label={!isChecked ? "On" : "Off"}
              onChange={() => toggleCheckBox()}
              defaultChecked={false}
            />
          </div>
        </FormGroup>
      </div>
      <Display
        displayMessage={displayMessage}
        toggleDisplay={toggleDisplay}
        isChecked={isChecked}
        getRandomColor={getRandomColor}
        playing={playing}
      />
    </React.Fragment>
  );
}
