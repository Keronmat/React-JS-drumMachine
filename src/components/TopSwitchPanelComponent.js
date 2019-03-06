import React from "react";
import Display from "./DisplayComponent";
import { CustomInput, FormGroup, Label } from "reactstrap";

export default function TopSwitchPanel(props) {
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
              label={!props.power.power ? "On" : "Off"}
              onChange={props.handlePower}
              defaultChecked={false}
            />
          </div>
        </FormGroup>
      </div>
      <Display
        display={props.display}
        power={props.power}
        getRandomColor={props.getRandomColor}
        playing={props.playing}
      />
    </React.Fragment>
  );
}
