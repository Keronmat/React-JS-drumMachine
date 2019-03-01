import React, { Component } from "react";

const RenderButton = ({ buttonData, handleClickSound, isChecked, playing }) => {
  const onStyle = {
    transform: "scale(0.95)",
    boxShadow: "1px 1px 4px 4px #D81159, -1px -1px 4px 4px #FFBC42"
  };
  const offStyle = isChecked
    ? { backgroundColor: "var(--ltRed)" }
    : { backgroundColor: "var(--dkRed)" };

  const data = buttonData.map(a => {
    return (
      <div
        key={a.id}
        className="outer-pad"
        style={playing ? onStyle : offStyle}
      >
        <div
          className="inner-pad"
          data-key={a.keyCode}
          onClick={() => {
            handleClickSound(a.url, a.name);
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

    this.state = {};
  }

  render() {
    return (
      <RenderButton
        buttonData={this.props.buttonData}
        handleClickSound={this.props.handleClickSound}
        isChecked={this.props.isChecked}
        playing={this.props.playing}
        getRandomColor={this.getRandomColor}
      />
    );
  }
}
