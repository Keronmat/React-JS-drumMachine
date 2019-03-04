import React, { Component } from "react";
import TopSwitchPanel from "./TopSwitchPanelComponent";
import { BUTTONDATA } from "../shared/data";
import RenderSound from "./RenderSound";
import Volume from "./VolumeComponent";
import { connect } from "react-redux";
import { togglePower } from "../redux/ActionCreators";
import { toggleVolume } from "../redux/ActionCreators";

const mapStateToProps = state => {
  return {
    power: state.power,
    volume: state.volume
  };
};
const mapDispatchToProps = dispatch => {
  return {
    togglePower: currentState => {
      dispatch(togglePower(currentState));
    },
    toggleVolume: newVolume => {
      dispatch(toggleVolume(newVolume));
    }
  };
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonData: BUTTONDATA,
      displayMessage: ""
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydownSound);
  }
  componentWillUnmount() {
    document.EventListener("keydown", this.handleKeydownSound);
  }
  //handles power, turns machine on and off
  handlePower = () => {
    this.props.togglePower(this.props.power);
  };

  //handles the sounds when use keyboard
  handleKeydownSound = event => {
    const drumKey = this.state.buttonData.find(
      obj => obj.keyCode === event.keyCode
    );
    const power = this.props.power;
    if (power && drumKey) {
      this.playSound(drumKey.url, drumKey.name);
      this.toggleData(drumKey.id);
    } else if (!power && drumKey) {
      alert("Please turn the app on!");
    }
  };
  //handles the sounds when use mouse click
  handleClickSound = (url, soundName, index) => {
    const power = this.props.power;
    if (power) {
      this.playSound(url, soundName);
      //console.log(index);
      this.toggleData(index);
    } else return alert("Please turn the app on!");
  };

  //plays the sound and activate the volume function
  playSound = (url, soundName) => {
    let sound = new Audio(url);
    sound.volume = this.props.volume;
    sound.play();
    this.toggleDisplay(soundName);
  };

  //changes message on the display
  toggleDisplay = soundName => {
    this.setState(() => {
      return { displayMessage: soundName };
    });
    setTimeout(() => {
      this.setState({ displayMessage: "" });
    }, 900);
  };

  //changes the Volume
  handleVolume = event => {
    const power = this.props.power;
    const newVolume = event.target.value;
    const message = "Volume: " + event.target.value * 100;

    if (power) {
      this.props.toggleVolume(newVolume);
      this.toggleDisplay(message);
    }
  };
  //change display background color
  getRandomColor() {
    let colorValues = ["#D81159", "#218380", "#73D2DE", "#FFBC42", "#8F2D56"];
    return colorValues[Math.floor(Math.random() * colorValues.length)];
  }

  //change data.playing to true
  toggleData = index => {
    let obj = JSON.parse(JSON.stringify(this.state.buttonData));
    obj[index].playing = true;
    this.setState({ buttonData: obj });

    setTimeout(() => {
      obj[index].playing = false;
      this.setState({ buttonData: obj });
    }, 200);
    console.log(obj);
  };

  render() {
    return (
      <div className="drum-machine">
        <div className="drum-panel row">
          <TopSwitchPanel
            handlePower={this.handlePower}
            getRandomColor={this.getRandomColor}
            toggleCheckBox={this.toggleCheckBox}
            power={this.props.power}
            buttonData={this.state.buttonData}
            toggleDisplay={this.toggleDisplay}
            displayMessage={this.state.displayMessage}
          />
        </div>
        <div className="drum-pads">
          <RenderSound
            handleClickSound={this.handleClickSound}
            buttonData={this.state.buttonData}
            power={this.props.power}
            getRandomColor={this.getRandomColor}
          />
        </div>
        <Volume
          handleVolume={this.handleVolume}
          currentVolume={this.props.volume}
        />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
