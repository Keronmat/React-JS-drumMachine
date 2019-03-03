import React, { Component } from "react";
import TopSwitchPanel from "./TopSwitchPanelComponent";
import { BUTTONDATA } from "../shared/data";
import RenderSound from "./RenderSound";
import Volume from "./VolumeComponent";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    buttonData: state.buttonData
  };
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonData: BUTTONDATA,
      isChecked: null,
      displayMessage: "",
      currentVolume: 0.8
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydownSound);
  }
  componentWillUnmount() {
    document.EventListener("keydown", this.handleKeydownSound);
  }
  //handles the sounds when use keyboard
  handleKeydownSound = event => {
    const drumKey = this.state.buttonData.find(
      obj => obj.keyCode === event.keyCode
    );
    const power = this.state.isChecked;
    if (power && drumKey) {
      this.playSound(drumKey.url, drumKey.name);
      this.toggleData(drumKey.id);
    } else if (!power && drumKey) {
      alert("Please turn the app on!");
    }
  };
  //handles the sounds when use mouse click
  handleClickSound = (url, soundName, index) => {
    const power = this.state.isChecked;
    if (power) {
      this.playSound(url, soundName);
      console.log(index);
      this.toggleData(index);
    } else return alert("Please turn the app on!");
  };

  //plays the sound and activate the volume function
  playSound = (url, soundName) => {
    let sound = new Audio(url);
    sound.volume = this.state.currentVolume;
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

  //toggle checkbox = power on and off

  toggleCheckBox = () => {
    const power = this.state.isChecked;
    this.setState(() => {
      return {
        isChecked: !power,
        displayMessage: !power === true ? "Welcome" : null
      };
    });
  };
  //changes the Volume
  changeVolume = event => {
    const power = this.state.isChecked;
    const newVolume = event.target.value / 100;
    const message = "Volume: " + event.target.value;

    if (power) {
      this.setState(() => {
        return { currentVolume: newVolume };
      });
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
            getRandomColor={this.getRandomColor}
            toggleCheckBox={this.toggleCheckBox}
            isChecked={this.state.isChecked}
            buttonData={this.props.buttonData}
            toggleDisplay={this.toggleDisplay}
            displayMessage={this.state.displayMessage}
          />
        </div>
        <div className="drum-pads">
          <RenderSound
            handleClickSound={this.handleClickSound}
            buttonData={this.props.buttonData}
            isChecked={this.state.isChecked}
            getRandomColor={this.getRandomColor}
          />
        </div>
        <Volume
          changeVolume={this.changeVolume}
          currentVolume={this.state.currentVolume}
        />
      </div>
    );
  }
}
export default connect(mapStateToProps)(Main);
