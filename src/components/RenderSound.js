import React, { Component } from "react";
import { baseUrl } from "../shared/baseUrl";

const RenderButton = props => {
  const onStyle = {
    transform: "scale(0.95)",
    boxShadow: "1px 1px 4px 4px #D81159, -1px -1px 4px 4px #FFBC42"
  };
  const offStyle = props.power.power
    ? { backgroundColor: "var(--ltRed)" }
    : { backgroundColor: "var(--dkRed)" };

  const data = props.dataObj.map(a => {
    return (
      <div
        key={a.id}
        className="outer-pad"
        style={props.playing === a.id ? onStyle : offStyle}
      >
        <div
          className="inner-pad"
          data-key={a.keyCode}
          onClick={() => {
            props.handleClickSound(`${baseUrl + a.url}`, a.name, a.id);
          }}
        >
          <kbd>{a.trigger}</kbd>
          <span className="sound">{a.name}</span>
        </div>
      </div>
    );
  });
  return <React.Fragment>{data}</React.Fragment>;
};

export default class RenderSound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RenderButton
        activeId={this.props.activeId}
        dataObj={this.props.dataObj}
        handleClickSound={this.props.handleClickSound}
        power={this.props.power}
        getRandomColor={this.getRandomColor}
        playing={this.props.playing}
      />
    );
  }
}
