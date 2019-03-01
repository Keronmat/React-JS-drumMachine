import React, { Component } from "react";
import TopSwitchPanel from "./TopSwitchPanelComponent";
import { BUTTONDATA } from "../shared/data";
import RenderSound from "./RenderSound";
import Volume from "./VolumeComponent";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonData: BUTTONDATA,
      isChecked: null,
      displayMessage: "",
      playing: false,
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
      this.setState(() => {
        return { playing: true };
      });
      setTimeout(() => {
        this.setState({ playing: false });
      }, 200);
    } else if (!power && drumKey) {
      alert("Please turn the app on!");
    }
  };
  //handles the sounds when use mouse click
  handleClickSound = (url, soundName) => {
    const power = this.state.isChecked;
    if (power) {
      this.playSound(url, soundName);

      this.setState(() => {
        return { playing: true };
      });
      setTimeout(() => {
        this.setState({ playing: false });
      }, 200);
    } else return alert("Please turn the app on!");
  };

  //plays the sound and update the playing state to true
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

  //toggle checkbox power on

  toggleCheckBox = () => {
    const power = this.state.isChecked;
    console.log(this.state);
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

  render() {
    return (
      <div className="drum-machine">
        <div className="drum-panel row">
          <TopSwitchPanel
            playing={this.state.playing}
            getRandomColor={this.getRandomColor}
            toggleCheckBox={this.toggleCheckBox}
            isChecked={this.state.isChecked}
            buttonData={this.state.buttonData}
            toggleDisplay={this.toggleDisplay}
            displayMessage={this.state.displayMessage}
          />
        </div>
        <div className="drum-pads">
          <RenderSound
            handleClickSound={this.handleClickSound}
            buttonData={this.state.buttonData}
            isChecked={this.state.isChecked}
            playing={this.state.playing}
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
